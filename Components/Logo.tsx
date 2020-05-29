import { Component } from "react";

const LogoStyle = {
    width: '100px',
    height: '100px',
    margin: '0 auto',
    display: 'block'
};

export default class Logo extends Component {
    render() {
        return <img style={LogoStyle} className="logo" src="./logo.svg" />
    }
}