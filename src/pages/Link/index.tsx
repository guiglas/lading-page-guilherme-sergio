import { Link, Outlet } from "react-router-dom";
import React from "react"
import './styles.css'

function LinkPag () {
return (
<div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre Mim</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
)
}

export default LinkPag;