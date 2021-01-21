import React from 'react'
import "./footer.scss"

const Footer = () => (
  <footer>
    <div className="container">
      <p>© {new Date().getFullYear()}, Raphael Bourassa. Tous droits réservés.</p>
    </div>
  </footer>
)

export default Footer
