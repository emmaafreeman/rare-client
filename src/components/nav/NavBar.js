import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Logo from "./rare.jpeg"

export const NavBar = () => {
    const history = useHistory()

    return (
        <ul className="navbar">
            <li className="navbar__item">
                <img className="navbar__logo" src={Logo} alt='logo'/>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Posts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/categories">Categories</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/tags">Tags</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/myposts">MyPosts</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/myprofile">MyProfile</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/rareusers">All RareUsers</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/posts/unapproved">Unapproved Posts</Link>
            </li>
            
            {
                (localStorage.getItem("rare_user_id") !== null) ?
                    <li className="nav-item navbar__item">
                        <button className="navbar__item nav-link fakeLink"
                            style={{ color: 'white', textDecoration: 'none'}}
                            onClick={() => {
                                localStorage.removeItem("rare_user_id")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/comments">Comments</Link>
                        </li>
                    </>
            }        </ul>
    )
}
