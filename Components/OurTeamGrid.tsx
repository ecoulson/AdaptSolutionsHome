import { Component } from "react";

const OurTeamGridStyle = {
    display: "flex",
    flexWrap: 'wrap' as const,
    justifyContent: 'center' as const,
    marginTop: 25
};

export default class OurTeamGrid extends Component {
    render() {
        return (
            <div style={OurTeamGridStyle} className="our-team-grid">
                {this.props.children}
            </div>
        )
    }
}