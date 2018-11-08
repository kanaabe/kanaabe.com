import React from "react"
import Link from "gatsby-link"
import Layout from "../components/layout"

const Projects = () => (
  <Layout>
    <ProjectBlock
      header="Artsy News"
      subheader="Short-form art world news."
      href="https://artsy.net/news"
    />
    <ProjectBlock
      header="The Future of Art"
      subheader="A landing experience for a video series on the future of art with BMW."
      href="https://artsy.net/future-of-art"
    />
    <ProjectBlock
      header="Artsy Editorial"
      subheader="The world's most-read online art publication."
      href="https://www.artsy.net/articles"
    />
    <ProjectBlock
      header="360 Venice Biennale 2017"
      subheader="Experience Venice in 360 degrees on mobile web and desktop."
      href="https://artsy.net/venice-biennale"
    />
    <ProjectBlock
      header="2016: Year in Art"
      subheader="A landing experience for a series on the year in art with UBS."
      href="https://www.artsy.net/2016-year-in-art"
    />
    <ProjectBlock
      header="2015: Year in Art"
      subheader="A landing experience for a series on the year in art with UBS."
      href="https://www.artsy.net/2015-year-in-art"
    />
    <ProjectBlock
      header="Writer"
      subheader="A WYSIWYG-style CMS for publishing articles on artsy.net"
      href="https://github.com/artsy/positron"
    />
    <ProjectBlock
      header="The Artist Game"
      subheader="Based on the Wikipedia game."
      href="https://theartistgame.herokuapp.com/"
    />
    <ProjectBlock
      header="You Will Never Be President"
      subheader="An app that warns you about your most tainted tweets."
      href="https://youwillneverbepresident.herokuapp.com/"
    />
    <Link to="/projects/arduino">
      <h2>Arduino</h2>
      <h3>Projects created with an Arduino Duemilanove</h3>
    </Link>
    <ProjectBlock
      header="Trim Magazine "
      subheader="Issues 1-3"
      href="https://issuu.com/trimmagazine"
    />
    <ProjectBlock
      header="Random Art and Photographs"
      subheader="2013-now"
      href="https://www.are.na/kana-abe/photos-1514530094"
    />
  </Layout>
)

const ProjectBlock = props => (
  <a href={props.href}>
    <h2>{props.header}</h2>
    <h3>{props.subheader}</h3>
  </a>
)

export default Projects
