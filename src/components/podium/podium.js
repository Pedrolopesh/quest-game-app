import React, {useEffect, useState} from 'react';
import './podium-style.scss'

export default function Podium(props){

    const [players, setPlayers] = useState([]);

    useEffect(() => {

        const data = [
            {id: Math.random(), name:"player01", points:"1200"},
            {id: Math.random(), name:"player02", points:"1100"},
            {id: Math.random(), name:"player03", points:"1000"}
        ]

        setPlayers(data);
    }, []);


    return(
        <div className="p15 ac container-box-podium">

            {players.map(repo => (
                <div className="box-podium ac" key={repo.id}>
                    <span className="box-podium-name">jogador: {repo.name} </span>
                    <span className="box-podium-points">Pontuação: {repo.points} </span>
                </div>
            ))}
        </div>
    )
}