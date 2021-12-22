import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"

const RichText = ({ content }) => {
  return (
    <div className="container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

RichText.propType = {
  content: PropTypes.string.isRequired,
}

export default RichText
