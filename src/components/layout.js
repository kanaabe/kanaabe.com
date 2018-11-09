import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"

import "../layouts/index.css"
import "../layouts/main.css"
import favicon from "../../assets/images/favicon.ico"

const Header = () => (
  <div
    style={{
      background: "transparent"
    }}
  >
    <div
      className="header-container"
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link className="logo" to="/">
          Kana Abe
        </Link>
      </h1>
      <h2>
        <Link to="/projects">Projects</Link>
      </h2>
      <h2>
        <Link to="/cv">CV</Link>
      </h2>
      <h2>
        <Link to="/fermentation">Fermentation</Link>
      </h2>
      <h2
        style={{
          margin: "0 0 0 auto"
        }}
      >
        <Link
          to="/contact"
          style={{
            marginRight: 0,
            fontSize: "14px"
          }}
        >
          Contact
        </Link>
      </h2>
    </div>
  </div>
)

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Kana Abe"
      meta={[
        {
          name: "description",
          content: "New York, NY. Engineer Lead at Artsy."
        },
        {
          name: "keywords",
          content:
            "art,science,computer,programming,portfolio,kana,kanaabe,kanako,abe,rutgers"
        }
      ]}
      link={[
        {
          href: "https://fonts.googleapis.com/css?family=Inconsolata|Lato:900",
          rel: "stylesheet"
        },
        {
          href: `${favicon}`,
          type: "image/x-icon",
          rel: "shortcut icon"
        }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0,
        position: "relative"
      }}
    >
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout
