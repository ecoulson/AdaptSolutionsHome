import { Component } from "react";
import Logo from "./Logo";
import theme from "../theme";

const HeaderStyle = {
    backgroundColor: theme.colors.background,
    padding: 25
}

const HeaderTitleStyle = {
    ...theme.h4,
    margin: 0,
    textAlign: 'center' as const
}

export default class Header extends Component {
    render() {
        return (
            <header className="header" style={HeaderStyle}>
                <Logo />
                <h1 style={HeaderTitleStyle} className="header-title">Adapt Solutions</h1>
            </header>
        )
    }
}