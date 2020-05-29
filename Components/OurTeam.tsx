import { Component } from "react";
import theme from "../theme";
import OurTeamGrid from "./OurTeamGrid";
import TeamMember from "./TeamMember";

const OurTeamStyle = {
    backgroundColor: theme.colors.darkAccent,
    padding: "25px 0",
    marginTop: 50
}

const OurTeamSectionTitle = {
    ...theme.h3,
    textAlign: 'center' as 'center',
    color: "white",
    margin: 0
}

const TeamMembers = [
    "https://media.istockphoto.com/photos/portrait-concept-picture-id1016761216?k=6&m=1016761216&s=612x612&w=0&h=j-DyZTSqmnhoHKsJdGmiMPnungpHiq9UTrvx4UylMQI=",
    "https://media.istockphoto.com/photos/glasses-girl-in-white-picture-id1089633230?k=6&m=1089633230&s=612x612&w=0&h=FUHE3jCQMIrC72Ux8-rz_z3mHDi2UB61gceLSKAxEwg=",
    "https://image.shutterstock.com/mosaic_250/2936380/793117360/stock-photo-headshot-of-satisfied-cheerful-handsome-man-grins-at-camera-glad-to-find-suitable-well-paid-job-793117360.jpg",
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