import React from "react";
import Logo from "../Components/Logo";
import Head from "next/head";
import theme from "../theme";

export default class App extends React.Component {
    render() {
        return (
            <div style={theme.font}>
                <Head>
                    <title>Adapt Solutions</title>
                    <link rel="icon" href="./logo.svg" />
                    <link rel="stylesheet" href="https://use.typekit.net/vyf6qyn.css" />
                </Head>
                <Logo />
                <h1 style={theme.body1}>Adapt Solutions</h1>
            </div>
        )
    }
}