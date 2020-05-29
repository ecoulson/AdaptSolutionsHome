import React from "react";
import Head from "next/head";
import theme from "../theme";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Footer from "../Components/Footer";

export default class App extends React.Component {
    render() {
        return (
            <div style={theme.font}>
                <Head>
                    <title>Adapt Solutions</title>
                    <link rel="icon" href="./logo.svg" />
                    <link rel="stylesheet" href="https://use.typekit.net/vyf6qyn.css" />
                    <link rel="stylesheet" href="/static/style.css" />
                </Head>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}