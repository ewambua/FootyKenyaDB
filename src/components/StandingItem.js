import React from "react";


function StandingItem({intRank,strTeam,intPlayed,intWin,intDraw,intLoss,intGoalsFor,intGoalsAgainst,intGoalDifference,intPoints}){
    return (
        <tr >
            <td>{intRank}</td>
            <td>{strTeam}</td>
            <td>{intPlayed}</td>
            <td>{intWin}</td>
            <td>{intDraw}</td>
            <td>{intLoss}</td>
            <td>{intGoalsFor}</td>
            <td>{intGoalsAgainst}</td>
            <td>{intGoalDifference}</td>
            <td>{intPoints}</td>
        </tr>
    )
}

export default StandingItem;