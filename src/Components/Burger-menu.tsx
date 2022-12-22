import { Button, ButtonGroup } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './/../Styles/Burger-menu/Burger-menu.css'

function BurgerMenu() {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav>
            <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                <span />
            </div>
            <section className={menuActive ? "menu active" : "menu"}>
                <h2>Bil KG</h2>
                <section className="content">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/specialists"}>Specialists</NavLink>
                    <NavLink to={"/meeting"}>Meeting</NavLink>
                    <NavLink to={"/contacts"}>Contacts</NavLink>
                    <NavLink to={"/about"}>About</NavLink>
                </section>
                <ButtonGroup
                    variant="outlined"
                    className="buttongroup"
                    color={"error"}
                    disableElevation={true}
                    aria-label="outlined primary button group"
                >
                    <Button>Login</Button>
                    <Button>LogOut</Button>
                </ButtonGroup>
            </section>

        </nav>
    )
}

export default BurgerMenu