import React from "react"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <>


            <nav>
                <div className="nav-wrapper #2196f3 blue">
                    <a href="/" className="brand-logo">BIT BLOG</a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/authors">Authors</Link> </li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/" >Home</Link></li>

                    </ul>
                </div>
            </nav >


        </>


    )
}
export { Header };