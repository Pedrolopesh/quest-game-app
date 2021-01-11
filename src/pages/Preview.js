import React, {useState, useEffect} from 'react';
import { Input, Button } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';

export default function Preview(){
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {

        const data = [
            {id: Math.random(), name:"Ciências da natureza"},
            {id: Math.random(), name:"Ciências exatas"},
            {id: Math.random(), name:"ciências humanas"}
        ]

        setSubjects(data);
    }, []);

    return(
        <div>
            <h1> Preview </h1>

            <div className="mw-w-20 display-b ac">
                <Input placeholder="Basic usage" className="input-nickname" prefix={<UserOutlined />}/>
            </div>

            <div className="p15 ac container-box-podium mt-10">
                {subjects.map(subs => (
                    <Button className="ac subject-button mt-2" key={subs.id}>
                        {subs.name}
                    </Button>
                ))}
            </div>

            <Link to="/Quest">
                <Button className="button-play ac" type="primary">jogar</Button>
            </Link>



        </div>
    )
}