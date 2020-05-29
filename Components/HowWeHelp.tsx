import { Component } from "react";
import theme from "../theme";
import Button from "./Button";

const HowWeHelpStyle = {
    textAlign: 'center' as const,
    padding: 25,
    backgroundColor: "white"
}

const HowWeHelpTitleStyle = {
    ...theme.h3,
    marginTop: 0
}

export default class HowWeHelp extends Component {
    render() {
        return (
            <section style={HowWeHelpStyle} className="how-we-help">
                <h2 style={HowWeHelpTitleStyle}>Adapt Solutions helps companies navigate our unpredictable economy</h2>
                <Button>How We Help</Button>
            </section>
        )
    }
}