import React, {useState} from 'react';
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
    
    const [pathIcone, trocarIcone] = useState("square-icon.png");
    const [classeTexto, trocarEstadoTexto] = useState("");

    function teste(path, classeTexto){
        if(path === "checked-icon.png"){
            trocarIcone("square-icon.png");
        }else if(path === "square-icon.png"){
            trocarIcone("checked-icon.png");
        }

        if(classeTexto === ""){
            trocarEstadoTexto("line-through")
        }else if(classeTexto === "line-through"){
            trocarEstadoTexto("");
        }
    }

    return(
       <div className="linha">   
            <img onClick = {() =>teste(pathIcone, classeTexto)} className="icon" src={pathIcone} alt='itens não concluidos' /> 
            <p className={classeTexto} >{props.texto}</p>
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