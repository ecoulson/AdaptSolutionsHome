import { Component } from "react";

const HowWeHelpStyle = {
    textAlign: 'center' as const,
    minWidth: 300,
    maxWidth: 700,
    height: 'auto',
    margin: '10vh auto',
    width: '100%'
}

const HowWeHelpTitleStyle = {
    marginTop: 0,
    fontWeight: 600,
    fontSize: 40,
    color: "white"
}

export default class HowWeHelp extends Component {
    render() {
        return (
            <section style={HowWeHelpStyle} className="how-we-help">
                <h2 style={HowWeHelpTitleStyle}>Adapt Solutions helps companies get up and running online during these uncertain times</h2>
            </section>
        )
    }
}