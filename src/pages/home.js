import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import Podium from '../components/podium/podium'

function Home(){
    
    // const title = "Lorem ipsum!"
    // const content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, adipisci!"
  

    // function created(){
    //     console.log("pagina carregou")
    // }


    return(
        <div>
            <Podium/>
            
            <Link to="/Preview">
                <Button className="ac button-play" type="primary">Jogar</Button>
            </Link>
        </div>
    )
}

export default Home;
