import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="index__main-image" />
        <Canvas width="100vw" height="100vh" />
      </Layout>
    )
  }
}

const Canvas = styled.canvas`
  background-color: transparent;
`

export default IndexPage
