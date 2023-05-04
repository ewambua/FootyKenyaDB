import React from "react";
import TeamItem from "./TeamItem";


function Teams({teams}){


    return(
        <ul>
            <h3>KPL Football Teams</h3>
            <hr></hr>
            {teams.map((team) => (
                <TeamItem
                    key={team.idTeam}
                    strTeam={team.strTeam}
                />
            ))}
        </ul>
    )
}

export default Teams