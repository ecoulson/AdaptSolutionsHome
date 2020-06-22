import { Component } from "react";
import Button from "./Button";
import theme from "../theme";

const RestaurantRecordsStyle = {
    position: "relative" as const,
    minHeight: 600,
    height: '50vh',
    width: '100%',
    margin: '5px 0px'
}

const RestaurantRecordsBackgroundStyle = {
    backgroundImage: "url('./logs.png')",
    backgroundSize: "cover",
    backgroundPosition: "50% 40%",
    height: '100%',
    filter: 'blur(5px)',
    position: "absolute" as const,
    width: '100%',
    zIndex: 0,
    boxSizing: 'border-box' as const
}

const RestaurantRecordsContainer = {
    zIndex: 1, 
    position: "relative" as const
}

const RestaurantRecordsTitle = {
    ...theme.h3,
    margin: 0,
    padding: 25,
    textAlign: "center" as const,
    color: theme.colors.darkAccent
}

const RestaurantRecordsSubTitle = {
    ...theme.h4,
    textAlign: "center" as const,
    color: theme.colors.darkAccent,
    margin: '50px 0px'
}

export default class RestaurantRecords extends Component {
    render() {
        return (
            <section style={RestaurantRecordsStyle} className="restaurant-records">
                <div style={RestaurantRecordsBackgroundStyle} className="restaurant-records-background"></div>
                <div style={RestaurantRecordsContainer}>
                    <h2 style={RestaurantRecordsTitle}>Restaurant Logs</h2>
                    <h3 style={RestaurantRecordsSubTitle}>A seamless hands free approach to contact tracing.</h3>
                    <Button to="http://logs.adaptsolutions.tech">Check In</Button>
                </div>
            </section>
        )
    }
}