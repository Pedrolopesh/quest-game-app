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

                <Button className="ac button-play" type="primary">
                    <Link to="/Preview">Jogar</Link>
                </Button>
        </div>
    )
}

export default Home;
