import React from "react";

function TeamItem({strTeamBadge,strTeam,intFormedYear}){


    return(
        <div className="team">
            <img src={strTeamBadge} alt="Logo" />
            <h3>{strTeam}</h3>
            <h3>Year Started:{intFormedYear}</h3>
        </div>
    )
}

export default TeamItem