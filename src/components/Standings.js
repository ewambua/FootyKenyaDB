import React from "react";
import StandingItem from "./StandingItem";

function Standings({table}){


    return(
        <div>
            <h3>KPL Football League Standings (2022-2023)</h3>
            <hr></hr>
            <div>
                <table>
                <tbody>
                <tr className="heading">
                <th>Rank</th>
                <th>Team</th>
                <th>Matches-Played</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
                <th>Goals-Scored</th>
                <th>Goals-Conceded</th>
                <th>Goal-Difference</th>
                <th>Points</th>
                </tr>
                {table.map((tableItem) => {
                    return  <StandingItem
                            key={tableItem.idStanding}
                            intRank={tableItem.intRank}
                            strTeam={tableItem.strTeam}
                            intPlayed={tableItem.intPlayed}
                            intWin={tableItem.intWin}
                            intDraw={tableItem.intDraw}
                            intLoss={tableItem.intLoss}
                            intGoalsFor={tableItem.intGoalsFor}
                            intGoalsAgainst={tableItem.intGoalsAgainst}
                            intGoalDifference={tableItem.intGoalDifference}
                            intPoints={tableItem.intPoints}
                            />
                })
                }
                </tbody>
            </table>
        </div>
        </div>

    )
}

export default Standings