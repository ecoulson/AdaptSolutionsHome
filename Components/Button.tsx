import { Component } from "react";
import theme from "../theme";

export default class Button extends Component {
    render() {
        return (
            <a style={theme.button}>{this.props.children}</a>
        )
    }
}