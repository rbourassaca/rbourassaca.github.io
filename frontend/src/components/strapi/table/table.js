import React from "react"
import { Table as BootstrapTable } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import PropTypes from "prop-types"
import "./table.scss"

const Table = ({ items }) => {
  return (
    <section className="container">
      <BootstrapTable responsive className="info">
        <tbody>
          {items.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>
                <ReactMarkdown>{item.value}</ReactMarkdown>
              </td>
            </tr>
          ))}
        </tbody>
      </BootstrapTable>
    </section>
  )
}

Table.propTypes = {
  items: PropTypes.object.isRequired,
}

export default Table
