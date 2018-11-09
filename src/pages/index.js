import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const TRANSLATE_INCR = 1

export default class IndexPage extends React.Component {
  state = {
    isDrawing: false,
    lastX: 0,
    lastY: 0,
    currentDrawing: [],
    drawings: []
  }

  constructor(props) {
    super(props)
    this.canvas = React.createRef()
    this.ctx = null
    this.frame = null
  }

  componentDidMount() {
    if (this.canvas) {
      this.ctx = this.canvas.current.getContext("2d")
      this.ctx.lineJoin = "round"
      this.ctx.lineCap = "round"
      this.ctx.lineWidth = 8
      this.ctx.strokeStyle = "#eabe2e"
      this.ctx.fillStyle = "#000"
      this.frame = setInterval(this.draw, 60)
    }
  }

  componentWillUnmount() {
    clearInterval(this.frame)
  }

  handleMouseDown = e => {
    this.setState({
      isDrawing: true,
      lastX: e.clientX,
      lastY: e.clientY - 100,
      currentDrawing: []
    })
    clearInterval(this.frame)
    this.ctx.beginPath()
  }

  handleMouseUp = () => {
    const { drawings, currentDrawing } = this.state
    this.setState({
      isDrawing: false,
      drawings: [...drawings, currentDrawing],
      currentDrawing: []
    })

    this.ctx.closePath()
    this.ctx.stroke()
    this.frame = setInterval(this.draw, 60)
    console.log(this.state.drawings)
  }

  handleMouseMove = e => {
    let { lastX, lastY, isDrawing, currentDrawing } = this.state
    if (isDrawing && this.ctx) {
      this.ctx.moveTo(lastX, lastY)
      this.ctx.lineTo(e.clientX, e.clientY - 100)
      this.ctx.stroke()
      this.setState({
        lastX: e.clientX,
        lastY: e.clientY - 100,
        currentDrawing: [...currentDrawing, [lastX, lastY]]
      })
    }
  }

  draw = () => {
    const { drawings } = this.state
    if (this.ctx && drawings.length) {
      let newDrawings = []
      this.ctx.clearRect(
        0,
        0,
        this.canvas.current.width,
        this.canvas.current.height
      )

      drawings.forEach(drawing => {
        let newDrawing = drawing.map(([x, y]) => [x, y + TRANSLATE_INCR])
        let maxY = 0
        this.ctx.beginPath()
        for (let i = 0; i < newDrawing.length - 1; i++) {
          // set new points
          let x = newDrawing[i][0]
          let y = newDrawing[i][1]
          let nextX = newDrawing[i + 1][0]
          let nextY = newDrawing[i + 1][1]

          maxY = Math.max(maxY, y)

          // draw line
          this.ctx.moveTo(x, y)
          this.ctx.lineTo(nextX, nextY)
        }
        this.ctx.closePath()
        this.ctx.stroke()
        if (maxY < window.innerHeight && newDrawing.length) {
          newDrawings.push(newDrawing)
        }
      })
      this.setState({ drawings: newDrawings })
    }
  }

  render() {
    return (
      <>
        <Layout>
          <div
            className={`index__main-image ${
              this.state.isDrawing ? "isDrawing" : ""
            }`}
          />
          <span style={{ float: "right" }}>draw something.</span>
        </Layout>
        <Canvas
          ref={this.canvas}
          handleMouseDown={this.handleMouseDown}
          handleMouseUp={this.handleMouseUp}
          handleMouseMove={this.handleMouseMove}
        />
      </>
    )
  }
}

const Canvas = React.forwardRef((props, ref) => {
  const { handleMouseDown, handleMouseUp, handleMouseMove } = props
  return (
    <StyledCanvas
      ref={ref}
      width={window.innerWidth}
      height={window.innerHeight - 100}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseUp}
    />
  )
})

const StyledCanvas = styled.canvas`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 100px;
  box-sizing: border-box;
`
