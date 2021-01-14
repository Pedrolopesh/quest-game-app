import React, {useEffect, useState} from 'react';
import { Button } from 'antd';
import NatureScienceQuest from  '../components/natureScienceQuest/natureScienceQuest';
import ExactScienceQuest from  '../components/exactScienceQuest/exactScienceQuest';
import HumanScienceQuest from  '../components/humanScienceQuest/humanScienceQuest';
import { Link } from 'react-router-dom';

export default function Quest(){
    
    const [subjectsData, setSubjectsData] = useState([]);
    
    useEffect(() => {
    
        const savedSubjectsData = JSON.parse(localStorage.getItem('player'))
        setSubjectsData(savedSubjectsData.selectedSubject.name);
    
    }, []);

    return(
        <div>
            {/* <Button>
                <Link to="/Preview">
                    voltar
                </Link>
            </Button> */}
            
            {subjectsData === 'Ciências da Natureza' && <NatureScienceQuest/> }
            {subjectsData === 'Ciências Exatas' && <ExactScienceQuest/> }
            {subjectsData === 'ciências Humanas' && <HumanScienceQuest/> }
        </div>
    )
}
