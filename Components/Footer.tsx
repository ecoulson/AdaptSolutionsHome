import { Component } from "react"
import theme from "../theme"

const FooterStyle = {
    padding: 25,
    backgroundColor: theme.colors.darkAccent,
    boxShadow: "0px -10px 20px 5px rgba(0,0,0,0.4)"
}

const FooterParagraphStyle = {
    ...theme.body1,
    color: "white",
}

const EmailStyle = {
    marginLeft: 5,
    color: theme.colors.success
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