import * as React from "react"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <>
      <Helmet
        title="Gatsby site!"
      />
      <main>
        <title>Home Page</title>
        <h1>
          Congratulations
          <br />
          <span>— you just made a Gatsby site! </span>
          <span role="img" aria-label="Party popper emojis">
            🎉🎉🎉
          </span>
        </h1>
        <p>
          Edit <code>src/pages/index.js</code> to see this page
          update in real-time.{" "}
          <span role="img" aria-label="Sunglasses smiley emoji">
            😎
          </span>
        </p>
      </main>
    </>
  )
}

export default IndexPage
