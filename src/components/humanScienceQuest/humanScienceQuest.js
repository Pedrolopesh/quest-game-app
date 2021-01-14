import React, { useState, useEffect } from 'react';
import { Checkbox, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

const HumanScienceQuest = (props) =>{
    const [questsData, SetQuestsData] = useState([]);
    
    useEffect(() => {
    
        const questsData = [
            {
                id:1, 
                content:'A hospitalidade pura consiste em acolher aquele que chega antes de lhe impor condições, antes de saber e indagar o que quer que seja, ainda que seja um nome ou    um “documento” de identidade. Mas ela também supõe que se dirija a ele, de maneira singular, chamando-o portanto e reconhecendo-lhe um nome próprio: “Como você se chama?” A hospitalidade consiste em fazer tudo para se dirigir ao outro, em lhe conceder, até mesmo perguntar seu nome, evitando que essa pergunta se torne uma “condição”, um inquérito policial, um fichamento ou um simples controle das fronteiras. Uma arte e uma poética, mas também toda uma política dependem disso, toda uma ética se decide aí.',
                source:'DERRIDA, J. Papel-máquina. São Paulo: Estação Liberdade, 2004 (adaptado).',
                enunciated:'Associado ao contexto migratório contemporâneo, o conceito de hospitalidade proposto pelo autor impõe a necessidade de',
                options: [
                    { id:1, option:'A', content:'anulação da diferença.'},
                    { id:2, option:'B', content:'cristalização da biografia.'},
                    { id:3, option:'C', content:'incorporação da alteridade.', correct:'C or id 3'},
                    { id:4, option:'D', content:'supressão da comunicação.'},
                    { id:5, option:'E', content:'verificação da proveniência.'}
                ]
            },
            {
                id:2, 
                content:'Em sentido geral e fundamental, Direito é a técnica da coexistência humana, isto é, a técnica voltada a tornar possível a coexistência dos homens. Como técnica, o Direito se concretiza em um conjunto de regras (que, nesse caso, são leis ou normas); e tais regras têm por objeto o comportamento intersubjetivo, isto é, o comportamento recíproco dos homens entre si.',
                source:'ABBAGNANO, N. Dicionário de Filosofia. São Paulo: Martins Fontes, 2007.',
                enunciated:'O sentido geral e fundamental do Direito, conforme foi destacado, refere-se à',
                options: [
                    { id:1, option:'A', content:'aplicação de códigos legais.' },
                    { id:2, option:'B', content:'regulação do convívio social.', correct:'B or id 2'},
                    { id:3, option:'C', content:'legitimação de decisões políticas. '},
                    { id:4, option:'D', content:'mediação de conflitos econômicos.'},
                    { id:5, option:'E', content:'representação da autoridade constituída.'}
                ]
            },
            {
                id:3, 
                content:'O processamento da mandioca era uma atividade já realizada pelos nativos que viviam no Brasil antes da chegada de portugueses e africanos. Entretanto, ao longo do processo de colonização portuguesa, a produção de farinha foi aperfeiçoada e ampliada, tornando-se lugar-comum em todo o território da colônia portuguesa na América. Com a consolidação do  comércio atlântico em  suas  diferentes conexões, a farinha atravessou os mares e chegou aos mercados africanos.',
                source:'BEZERRA, N. R. Escravidão, farinha e tráfico atlântico: um novo olhar sobre as relações entre o Rio de Janeiro e Benguela (1790-1830).',
                enunciated:'Considerando a formação do espaço atlântico, esse produto exemplifica historicamente a',
                options: [
                    { id:1, option:'A', content:'difusão de hábitos alimentares.', correct:'A or id 1'},
                    { id:2, option:'B', content:'disseminação de rituais festivos.'},
                    { id:3, option:'C', content:'ampliação dos saberes autóctones.'},
                    { id:4, option:'D', content:'apropriação de costumes guerreiros.'},
                    { id:5, option:'E', content:'diversificação de oferendas religiosas.'}
                ]
            },
            {
                id:4, 
                content:'Brasil, Alemanha, Japão e Índia pedem reforma do Conselho de Segurança. Os representantes do G4 (Brasil, Alemanha, Índia e Japão) reiteraram, em setembro  de 2018, a defesa pela ampliação do Conselho de Segurança da Organização das  Nações Unidas (ONU) durante reunião em Nova York (Estados Unidos). Em declaração conjunta, de dez itens, os chanceleres destacaram que o órgão, no formato em que está, com apenas cinco membros permanentes e dez rotativos, não reflete o século 21.   “A reforma do Conselho de Segurança é essencial para enfrentar os desafios complexos de hoje. Como aspirantes a novos membros permanentes de um conselho reformado, os ministros reiteraram seu compromisso de trabalhar para fortalecer o funcionamento da ONU e da ordem multilateral global, bem como seu apoio às respectivas candidaturas”, afirma a declaração conjunta.', 
                source:'Disponível em: http://agenciabrasil.ebc.com.br. Acesso em: 7 dez. 2018 (adaptado).',
                enunciated:'Os países mencionados no texto justificam sua pretensão com base na seguinte característica comum:',
                options: [
                    { id:1, option:'A', content:'Extensividade de área territorial.'},
                    { id:2, option:'B', content:'Protagonismo em escala regional.', correct:'B or id 2'},
                    { id:3, option:'C', content:'Investimento em tecnologia militar.'},
                    { id:4, option:'D', content:'Desenvolvimento de energia nuclear.'},
                    { id:5, option:'E', content:'Disponibilidade de recursos minerais.'}
                ]
            },
            {
                id:5, 
                content:'Tratava-se agora de construir um ritmo novo. Para tanto, era necessário convocar todas as forças vivas da Nação, todos os homens que, com vontade de trabalhar e confiança no futuro, pudessem erguer, num tempo novo, um novo Tempo. E, à grande convocação que conclamava o povo para a gigantesca tarefa, começaram a chegar de todos os cantos da imensa pátria os trabalhadores: os homens simples e quietos, com   pés de raiz, rostos de couro e mãos de pedra, e no calcanho, em carro de boi, em lombo de burro, em paus-de-arara, por todas as formas possíveis e imagináveis, em sua mudez cheia de esperança, muitas vezes deixando para trás mulheres e filhos a aguardar suas promessas de melhores dias; foram chegando de tantos povoados, tantas cidades cujos nomes pareciam cantar saudades aos seus ouvidos, dentro dos antigos ritmos da imensa pátria... Terra de sol, Terra de luz... Brasil! Brasil! Brasília!', 
                source:'MORAES, V.; JOBIM, A. C. Brasília, sinfonia da alvorada. III — A chegada dos candangos. Disponível em: www.viniciusdemoraes.com.br.',
                enunciated:'No texto, a narrativa produzida sobre a construção de Brasília articula os elementos políticos e socioeconômicos indicados, respectivamente, em:',
                options: [
                    { id:1, option:'A', content:'Apelo simbólico e migração inter-regional.', correct:'A or id 1'},
                    { id:2, option:'B', content:'Organização sindical e expansão do capital.'},
                    { id:3, option:'C', content:'Segurança territorial e estabilidade financeira.'},
                    { id:4, option:'D', content:'Consenso partidário e modernização rodoviária.'},
                    { id:5, option:'E', content:'Perspectiva democrática e eficácia dos transportes.'}
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
            <h1 className="alg-txt-c"> Materia selecionada: Ciências Humanas </h1>

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

export default HumanScienceQuest;