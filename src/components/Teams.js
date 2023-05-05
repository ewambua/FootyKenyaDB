import React from "react";
import TeamItem from "./TeamItem";


function Teams({teams}){


    return(
        <div>
            <h3>KPL Football Teams</h3>
            <hr></hr>
            <div className="teams-container">
                {teams.map((team) => (
                    <TeamItem
                        key={team.idTeam}
                        strTeam={team.strTeam}
                        strTeamBadge={team.strTeamBadge}
                        intFormedYear={team.intFormedYear}
                    />
                ))}
            </div>
        </div>
    )
}

export default Teams