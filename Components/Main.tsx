import { Component } from "react";
import HowWeHelp from "./HowWeHelp";
import OurTeam from "./OurTeam";
import RestaurantRecords from "./RestaurantRecords";

export default class Main extends Component {
    render() {
        return (
            <main className="main">
                <RestaurantRecords />
                <OurTeam />
            </main>
        )
    }
}