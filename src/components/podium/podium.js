import React from 'react';
import './podium-style.scss'
import CupPodium1 from '../../assets/cup1.svg'
import CupPodium2 from '../../assets/cup2.svg'
import CupPodium3 from '../../assets/cup3.svg'

export default function Podium(){
    return(
        <div className="p15 ac container-box-podium flex">
            <div className="box-podium ac">
                <span className="box-podium-name">jogador: player02 </span>
                <span className="box-podium-points">Pontuação: 1100 </span>
                <img src={CupPodium2} alt="Podium"/>
            </div>

            <div className="box-podium ac">
                <span className="box-podium-name">jogador: player01 </span>
                <span className="box-podium-points">Pontuação: 1200 </span>
                <img src={CupPodium1} alt="Podium"/>
            </div>

            <div className="box-podium ac">
                <span className="box-podium-name">jogador: player03 </span>
                <span className="box-podium-points">Pontuação: 1000 </span>
                <img src={CupPodium3} alt="Podium"/>
            </div>
        </div>
    )
}