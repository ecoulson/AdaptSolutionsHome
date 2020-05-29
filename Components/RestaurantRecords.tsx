import { Component } from "react";
import Button from "./Button";
import theme from "../theme";

const RestaurantRecordsStyle = {
    marginTop: 50,
    backgroundImage: "url('https://media.cntraveler.com/photos/5b22bfdff04a775484b99dfc/master/pass/Alo-Restaurant__2018_Raffi-Photo-2.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "50% 40%",
    padding: 25
}

const RestaurantRecordsTitle = {
    ...theme.h3,
    textAlign: "center" as const,
    textShadow: "0px 0px 5px white"
}

const RestaurantRecordsSubTitle = {
    ...theme.h4,
    textAlign: "center" as const,
    textShadow: "0px 0px 5px white"
}

export default class RestaurantRecords extends Component {
    render() {
        return (
            <section style={RestaurantRecordsStyle} className="restaurant-records">
                <h2 style={RestaurantRecordsTitle}>Restaurant Records</h2>
                <h3 style={RestaurantRecordsSubTitle}>A seamless hands free approach to contact tracing.</h3>
                <Button>Learn More</Button>
            </section>
        )
    }
}