import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function Nav(props){
    return(
        <nav className="nav-text">
            <h1>{props.texto.toUpperCase()}</h1>
        </nav>  
    );
}

function Linha(props){

    function trocarIcone(){
        console.log("oi");
    }


    return(
       <div className="linha">   
            <img onClick = {trocarIcone} className="icon" id="empty" src="square-icon.png" alt='itens não concluidos' /> 
            <img className="icon" id="check" src="checked-icon.png" alt='itens não concluidos'/> 
            <p>{props.texto}</p>
       </div>
    );
}

function MainSection(props){
    return (
        <section className="main-section">
            <div className="linhas">
                <Linha texto="Fazer mochup" /> 
                <Linha texto="Criar página estática" /> 
                <Linha texto="Aplicar state" /> 
                <Linha texto="Conectar Eventos" /> 
            </div>
        </section>
    );
}

function App(){
    return(
        <div>
            <Nav texto="to-do list"/>
            <MainSection/>
        </div>
    );
}



ReactDOM.render(
    <App/>,
    document.getElementById('root')
);