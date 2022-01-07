import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"

const RichText = ({ content }) => {
  return (
    <section className="container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </section>
  )
}

RichText.propType = {
  content: PropTypes.string.isRequired,
}

export default RichText
