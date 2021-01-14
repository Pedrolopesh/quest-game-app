import React, { useState, useEffect } from 'react';
import { Checkbox, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const ExactScienceQuest = (props) =>{
    const [questsData, SetQuestsData] = useState([]);

    useEffect(() => {
    
        const questsData = [
            {
                id:1, 
                content:'A gripe é uma infecção respiratória aguda de curta duração causada pelo vírus influenza. Ao entrar no nosso organismo pelo nariz, esse vírus multiplica-se, disseminando-se para a garganta e demais partes das vias respiratórias, incluindo os pulmões. O vírus influenza é uma partícula esférica que tem um diâmetro interno de 0,00011 mm.',
                source:'Disponível em: www.gripenet.pt. Acesso em: 2 nov. 2013 (adaptado).',
                enunciated:'Em notação científica, o diâmetro interno do vírus influenza, em mm, é',
                options: [
                    { id:1, option:'A', content:'1,1 x 10-¹'},
                    { id:2, option:'B', content:'1,1 x 10-²'},
                    { id:3, option:'C', content:'1,1 x 10-³'},
                    { id:4, option:'D', content:'1,1 x 10-⁴', correct:'D or id 4'},
                    { id:5, option:'E', content:'1,1 x 10-⁵'}
                ]
            },
            {
                id:2, 
                content:'Em um jogo on-line, cada jogador procura subir de nível e aumentar sua experiência, que são dois parâmetros importantes no jogo, dos quais dependem as  forças  de  defesa  e de  ataque  do  participante. A força de defesa de cada jogador é diretamente proporcional ao seu nível e ao quadrado de sua experiência, enquanto sua força de ataque é diretamente proporcional à sua experiência e ao quadrado do seu nível. Nenhum jogador sabe o nível  ou  a experiência dos  demais.  Os jogadores iniciam o jogo no nível 1 com experiência 1 e possuem força de ataque 2 e de defesa 1. Nesse jogo, cada participante se movimenta em uma cidade em busca  de  tesouros  para  aumentar sua experiência. Quando dois deles se encontram, um deles pode desafiar o outro para um confronto, sendo o desafiante considerado     o atacante.  Compara-se  então a força de ataque do desafiante com   a força de defesa do desafiado e vence o confronto aquele cuja força for maior. O vencedor do desafio aumenta seu nível em uma unidade. Caso haja empate no confronto, ambos os jogadores aumentam seus níveis em uma unidade.',
                source:'',
                enunciated:'Durante um jogo, o jogador J₁, de nível 4 e experiência 5, irá atacar o jogador J₂, de nível 2 e experiência 6. O jogador J₁ venceu esse confronto porque a diferença entre sua força de ataque e a força de defesa de seu oponente era',
                options: [
                    { id:1, option:'A', content:'112.' },
                    { id:2, option:'B', content:'88.', correct:'B or id 2'},
                    { id:3, option:'C', content:'60.'},
                    { id:4, option:'D', content:'28.'},
                    { id:5, option:'E', content:'24.'}
                ]
            },
            {
                id:3, 
                content:'Em um  condomínio,  uma  área  pavimentada,  que  tem  a forma de um  círculo  com  diâmetro  medindo  6  m,  é  cercada  por  grama.  A  administração  do  condomínio  deseja  ampliar  essa  área,  mantendo  seu  formato   circular,  e   aumentando,   em  8  m,  o  diâmetro  dessa  região,  mantendo  o  revestimento  da parte já existente. O condomínio dispõe, em estoque, de  material  suficiente  para   pavimentar   mais   100   m2   de   área.  O síndico do condomínio irá avaliar se esse material disponível será suficiente para pavimentar a região a ser ampliada.',
                source:'',
                enunciated:'Utilize 3 como aproximação para л. A conclusão correta a que o síndico deverá chegar, considerando a nova área a ser pavimentada, é a de que o material disponível em estoque',
                options: [
                    { id:1, option:'A', content:'A será suficiente, pois a mede 21 m².'},
                    { id:2, option:'B', content:'área da nova região a ser pavimentada B será suficiente, pois a mede 24 m².'},
                    { id:3, option:'C', content:'área da nova região a ser pavimentada C será suficiente, pois a mede 48 m².'},
                    { id:4, option:'D', content:'área da nova região a ser pavimentada D não será suficiente, pois a área da nova região a ser pavimentada mede 108 m².'},
                    { id:5, option:'E', content:'E não será suficiente, pois a área da nova região a ser pavimentada mede 120 m².', correct:'E or id 5'}
                ]
            },
            {
                id:4, 
                content:'O rótulo da embalagem de um cosmético informa que a dissolução de seu conteúdo, de acordo com suas especificações, rende 2,7 litros desse produto pronto para o uso. Uma pessoa será submetida a um tratamento estético em que deverá tomar um banho de imersão com esse produto numa banheira com capacidade de 0,3 m3. Para evitar o transbordamento, essa banheira será preenchida em 80% de sua capacidade.', 
                source:'',
                enunciated:'Para esse banho, o número mínimo de embalagens desse cosmético é',
                options: [
                    { id:1, option:'A', content:'9.' },
                    { id:2, option:'B', content:'12.'},
                    { id:3, option:'C', content:'89.', correct:'C or id 3'},
                    { id:4, option:'D', content:'112.'},
                    { id:5, option:'E', content:'134.'}
                ]
            },
            {
                id:5, 
                content:'Segundo o Instituto Brasileiro de Geografia e Estatística (IBGE), o rendimento médio mensal dos trabalhadores brasileiros, no ano 2000, era de R$ 1 250,00. Já o Censo 2010 mostrou que, em 2010, esse valor teve um aumento de 7,2% em relação a 2000. Esse mesmo instituto projeta que, em 2020, o rendimento médio mensal dos trabalhadores brasileiros poderá ser 10% maior do que foi em 2010. IBGE.', 
                source:'Censo 2010. Disponível em: www.ibge.gov.br. Acesso em: 13 ago. 2012 (adaptado).',
                enunciated:'Supondo que as projeções do IBGE se realizem, o rendimento médio mensal dos brasileiros em 2020 será de',
                options: [
                    { id:1, option:'A', content:'R$ 1.340,00.'},
                    { id:2, option:'B', content:'R$ 1.349,00.'},
                    { id:3, option:'C', content:'R$ 1.375,00.'},
                    { id:4, option:'D', content:'R$ 1.465,00.'},
                    { id:5, option:'E', content:'R$ 1.474,00.', correct:'E or id 5'}
                ]
            },
        ]
        SetQuestsData(questsData);
    
    }, []);

    function setAnswer(checkedValues) {
        console.log('checked = ', checkedValues);
    }

    return(
        <div>
            <h1 className="alg-txt-c"> Materia selecionada: Ciências da Exatas </h1>

            <div className="container-quests p15 ac">
                {questsData.map(quest =>(
                    <div className="mt-8" key={quest.id}>
                        <hr className="mb-2"/>
                        
                        <h3> Questão {quest.id} </h3>
                        <p> {quest.content} </p>
                        <p className="alg-txt-e"> <strong>{quest.source} </strong> </p>
                        <p className="mt-2"> {quest.enunciated} </p>

                    <Checkbox.Group style={{ width: '100%' }} onChange={setAnswer}>
                        <Row className="display-b">
                            {quest.options.map(options => (
                                <Col className="mw-w-100" key={options.id} span={8}>
                                    <Checkbox value={options.id}> <strong>{options.option})</strong> {options.content}</Checkbox>
                                </Col>
                            ))}
                        </Row>
                    </Checkbox.Group>
                        
                        <hr className="mt-2"/>
                    </div>
                ))}

                <Button className="ac display-b mt-3" type="primary" size="large">
                    <Link to="/Result">
                        slavar respostas 
                    </Link>
                </Button>
            </div>

        </div>
    )
}

export default ExactScienceQuest;