import React, {useState, useEffect} from 'react';
import { Input, Button } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const Preview = (props) =>{
    // const [toQuest, setQuest] = useState(false);
    
    const [subjectsData, setSubjectsData] = useState([]);
    
    useEffect(() => {
        
        const data = [
            {id: 1, name:"Ciências da Natureza"},
            {id: 2, name:"Ciências Exatas"},
            {id: 3, name:"ciências Humanas"}
        ]
        
        setSubjectsData(data);
    }, []);
    
    const [subject, setSubject] = useState(false);
    
    function setSelectedSubject(e) {
        console.log(e)
        setSubject(e)
    }

    const [nickname, setNickname] = useState(false);

    // function setValueInput(value){
    //     setNickname(value)
    //     console.log("fafasfsafsaf")
    //     setNickname(nickname)
    // }
    
    function validateAndRedirect() {
        // if(subject)
        // setQuest(true)
        if(nickname  && subject.name){
            // setQuest(true)
            props.history.push('/Quest');

            const newObj = {
                nickname:nickname,
                selectedSubject: subject
            }

            localStorage.setItem('player', JSON.stringify(newObj) );

        }else{
            alert("Verifique se selecionou seu nickname e esclheu uma matéria")
        }
    }
    
    return(
        <div>
            <h1> Preview </h1>

            <div className="mw-w-20 display-b ac">
                <span className="font-s-20 back-button">
                    <Link to="/">
                     <ArrowLeftOutlined className="back-arrow mb-1"/> voltar 
                    </Link>
                </span>
                {/* value={nickname} */}
                <Input 
                    onChange={e => setNickname(e.target.value)}
                    placeholder="Basic usage" 
                    className="input-nickname" 
                    prefix={<UserOutlined />}
                />
            </div>

            <div className="container-box-podium ac mt-10">
                <h1 className="alg-txt-c">Matéria selecionada: - {subject.name && <span className="selected-subject"> {subject.name} </span>} </h1>

                <div className="p15 ac flex mt-2">
                    {subjectsData.map(subs => (
                        <Button
                        size="large"
                        value={subs.id}
                        onClick={() => setSelectedSubject(subs)}
                        key={subs.id}
                        className="ac subject-button mt-2"
                        >
                            {subs.name}
                        </Button>
                    ))}
                </div>
            </div>

                <Button onClick={validateAndRedirect} className="button-play ac" type="primary">
                        jogar
                </Button>

                {/* {subject && <p>{subject.name}</p>}
                {nickname && <p>{nickname}</p>} */}

                {/* component Redirect was imported from react-router-dom */}
                {/* {toQuest ? <Redirect to="/Quest"/> : null } */}



        </div>
    )
}

export default Preview;