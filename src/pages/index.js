import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

export default class IndexPage extends React.Component {
  state = {
    isDrawing: false,
    lastX: 0,
    lastY: 0
  }

  constructor(props) {
    super(props)
    this.canvas = React.createRef()
    this.ctx = null
  }

  componentDidMount() {
    if (this.canvas) {
      this.ctx = this.canvas.current.getContext("2d")
      this.ctx.lineJoin = "round"
      this.ctx.lineCap = "round"
      this.ctx.lineWidth = 8
      this.ctx.strokeStyle = "#576070"
    }
  }

  shouldComponentUpdate() {
    // Avoid re-rendering on any state change
    return false
  }

  handleMouseDown = e => {
    this.setState({
      isDrawing: true,
      lastX: e.clientX,
      lastY: e.clientY - 100
    })
  }

  handleMouseUp = () => {
    this.setState({ isDrawing: false })
    console.log(this.state)
  }

  handleMouseMove = e => {
    if (this.state.isDrawing && this.ctx) {
      let { lastX, lastY } = this.state
      this.ctx.beginPath()
      this.ctx.moveTo(lastX, lastY)
      this.ctx.lineTo(e.clientX, e.clientY - 100)
      this.ctx.stroke()

      console.log({
        "e.clientX": e.clientX,
        "e.clientY": e.clientY,
        lastX,
        lastY
      })

      this.setState({
        lastX: e.clientX,
        lastY: e.clientY - 100
      })
    }
  }

  render() {
    return (
      <>
        <Canvas
          ref={this.canvas}
          handleMouseDown={this.handleMouseDown}
          handleMouseUp={this.handleMouseUp}
          handleMouseMove={this.handleMouseMove}
        />
        <Layout>
          <div className="index__main-image" />
        </Layout>
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
  cursor: url("favicon.png");
`
