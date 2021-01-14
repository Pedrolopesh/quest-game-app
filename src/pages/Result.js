import React, {useEffect, useState} from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import gameOverImg from '../assets/game-over-titlesvg.png'

export default function Result(){
    const [playerData, setPlayerData] = useState([]);
    
    useEffect(() => {
    
        const savedSubjectsData = JSON.parse(localStorage.getItem('player'))
        setPlayerData(savedSubjectsData.nickname);
    
    }, []);

   return(
        <div>
            <h1 className="alg-txt-c"> Resultados </h1>
 
            <div>
                <img src={gameOverImg} alt="Game Over" className="size-game-over-image ac"/>
            </div>

            <h1 className="alg-txt-c"> total: 100 pontos </h1>
            <h3 className="alg-txt-c"> Parabéns {playerData}, você chegou ao final das perguntas, caso queria jogar novamente basta voltar ao incio, caso não queria jogar mais, foi um prazer jogar 😎😁</h3>


            <Button className="display-b ac mt-6" type="primary" size="large">
                <Link to="/">
                    Voltar ao Inicio
                </Link>
            </Button>
        </div>
    )
}
