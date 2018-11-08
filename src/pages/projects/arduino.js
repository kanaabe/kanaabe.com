import React from "react"
import twitter1 from "../../../assets/images/twitter-mash-1.jpg"
import twitter2 from "../../../assets/images/twitter-mash-2.jpg"
import stress1 from "../../../assets/images/stress1.jpg"
import Layout from "../../components/layout"

const Arduino = () => (
  <Layout>
    <h2>Twitter Mash</h2>
    <h3>
      The concept was to take tweets from left and right leaning media sites and
      mash the content to produce a tweet whose origin could not be
      distinguishable to a reader.
    </h3>
    <Image src={twitter2} alt="Twitter Image 2" />
    <Image src={twitter1} alt="Twitter Image 1" />

    <h2>Visual Stressball</h2>
    <h3>
      Relax your senses by squeezing a sensitized stress ball while colors
      transform from panicked red to a neutral blue.
    </h3>
    <Image src={stress1} alt="Stressball Image 1" />
  </Layout>
)

const Image = props => (
  <img
    src={props.src}
    alt={props.alt}
    style={{
      width: "50%"
    }}
  />
)

export default Arduino
