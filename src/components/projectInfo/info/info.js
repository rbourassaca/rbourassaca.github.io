import React from "react"
import { Table } from "react-bootstrap"
import "./info.scss"

const Info = ({info}) => {
    return(
        <Table responsive className="info">
            <tbody>
                {Object.keys(info).map((key, index) => (
                    <tr>
                        <td>{key}:</td>
                        <td>{info[key]}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Info