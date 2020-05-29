import { Component } from "react";
import theme from "../theme";

export default class Button extends Component {
    render() {
        return (
            <button style={theme.button}>${this.props.children}</button>
        )
    }
}