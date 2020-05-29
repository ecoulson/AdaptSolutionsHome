import { Component } from "react"
import theme from "../theme"

const FooterStyle = {
    marginTop: 50,
    padding: 25,
    backgroundColor: theme.colors.darkAccent
}

const FooterParagraphStyle = {
    ...theme.body1,
    color: "white",
}

const EmailStyle = {
    marginLeft: 5
}

export default class Footer extends Component {
    render() {
        return (
            <footer style={FooterStyle}>
                <p style={FooterParagraphStyle}>Adapt Solutions LLC</p>
                <p style={FooterParagraphStyle}>Email Us at
                    <a style={EmailStyle} href="mailto:support@adaptsolutions.tech">support@adaptsolutions.tech</a>
                </p>
            </footer>
        )
    }
}