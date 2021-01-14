import React from 'react';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import Podium from '../components/podium/podium'
import logo from '../assets/logo-type.png'

function Home(){
    
    // const title = "Lorem ipsum!"
    // const content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, adipisci!"
  

    // function created(){
    //     console.log("pagina carregou")
    // }


    return(
        <div>

 
            <div>
                <img src={logo} alt="logo type" className="size-logo-image ac mb-5 mt-4"/>
            </div>
            
            <Podium/>

            <Button className="ac button-play" type="primary">
                <Link to="/Preview">Jogar</Link>
            </Button>

            <span className="p10"></span>
        </div>
    )
}

export default Home;
