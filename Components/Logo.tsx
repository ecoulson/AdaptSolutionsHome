import { Component } from "react";

const LogoStyle = {
    width: '100px',
    height: '100px',
    margin: '0 auto',
    display: 'block',
    fill: "white",
    paddingTop: "25px"
};

export default class Logo extends Component {
    render() {
        return <img alt="Adapt Solutions Logo" style={LogoStyle} className="logo" src="./logo.svg" />
    }
}