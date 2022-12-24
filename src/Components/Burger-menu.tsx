import Reac from "react";
import { Button, ButtonGroup } from "@mui/material";
import { NavLink } from "react-router-dom";
import './/../Styles/Burger-menu/Burger-menu.css'

function BurgerMenu({ menuActive }: any) {

    return (
        <nav className={menuActive ? "menu active" : "menu"}>
            <h2>Bil KG</h2>
            <section>
                <NavLink to={"/home"}>Home</NavLink>
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
        </nav>
    )
}

export default BurgerMenu