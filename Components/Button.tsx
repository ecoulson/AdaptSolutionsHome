import { Component } from "react";
import theme from "../theme";
import Link from 'next/link'
import IButtonProps from "./IButtonProps";

export default class Button extends Component<IButtonProps> {
    render() {
        return (
            <a href={this.props.to} style={theme.button}>{this.props.children}</a>
        )
    }
}