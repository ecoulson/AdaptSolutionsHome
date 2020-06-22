import { Component } from "react";
import Logo from "./Logo";
import theme from "../theme";
import HowWeHelp from "./HowWeHelp";

const HeaderStyle = {
    backgroundColor: theme.colors.background,
    background: "url('./header.png')",
    height: '100vh',
    width: '100%',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    boxSizing: 'border-box' as const
}

const HeaderTitleStyle = {
    ...theme.h4,
    margin: 0,
    color: "white",
    textAlign: 'center' as const
}

export default class Header extends Component {
    render() {
        return (
            <header className="header" style={HeaderStyle}>
                <Logo />
                <h1 style={HeaderTitleStyle} className="header-title">Adapt Solutions</h1>
                <HowWeHelp />
            </header>
        )
    }
}