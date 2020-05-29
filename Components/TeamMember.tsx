import { Component } from "react";

const TeamMemberStyle = {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderRadius: "100%",
    margin: 15
}

const TeamMemberImage = {
    width: "100%",
    height: "100%",
    display: "block",
    borderRadius: "100%"
}

interface TeamMemberProps {
    imageSrc: string
}

export default class TeamMember extends Component<TeamMemberProps> {
    render() {
        return (
            <div style={TeamMemberStyle} className="our-team-member">
                <img style={TeamMemberImage} src={this.props.imageSrc}></img>
            </div>
        )
    }
}