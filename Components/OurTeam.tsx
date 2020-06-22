import { Component } from "react";
import theme from "../theme";
import OurTeamGrid from "./OurTeamGrid";
import TeamMember from "./TeamMember";

const OurTeamStyle = {
    backgroundColor: theme.colors.background,
    padding: "25px 0",
    height: '50vh',
    minHeight: 600,
}

const OurTeamSectionTitle = {
    ...theme.h3,
    textAlign: 'center' as 'center',
    color: "white",
    margin: 0
}

const TeamMembers = [
    "./person-1.png",
    "./person-2.png",
    "./person-3.png",
]

export default class OurTeam extends Component {
    render() {
        return (
            <section style={OurTeamStyle} className="our-team">
                <h2 style={OurTeamSectionTitle}>Our Team</h2>
                <OurTeamGrid>
                    {
                        TeamMembers.map((teamMember : string) => {
                            return <TeamMember imageSrc={teamMember} />
                        })    
                    }
                </OurTeamGrid>
            </section>
        )
    }
}