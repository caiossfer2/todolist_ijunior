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
    
    const [pathIcone, setIcone] = useState("square-icon.png");
    const [classeTexto, setClasseTexto] = useState("");
    const [classeX, setClasseX] = useState("x");

    function trocarEstadosLinha(path, classeTexto){
        if(path === "checked-icon.png"){
            setIcone("square-icon.png");
        }else if(path === "square-icon.png"){
            setIcone("checked-icon.png");
        }

        if(classeTexto === ""){
            setClasseTexto("line-through")
        }else if(classeTexto === "line-through"){
            setClasseTexto("");
        }
    }

    function removerTarefa(texto, array, setArray){
        let arr = array;
        let novoArr = arr.filter(t => t !== texto);
        setArray(novoArr);
    }

    return(
       <div onMouseEnter = {()=> setClasseX("x-hover")} onMouseLeave = {()=> setClasseX("x")} className="linha">   
            <img onClick = {() => trocarEstadosLinha(pathIcone, classeTexto)} className="icon" src={pathIcone} alt='itens não concluidos' /> 
            <p className={classeTexto}>{props.texto}</p>
            <img onClick = {() => removerTarefa(props.texto, props.arr, props.setArray)} className={classeX} src="x.png" alt="x"/>
       </div>
    );
}


function Linhas(){ 


    const[arrayTextos, setArrayTextos] = useState([]);

    return(
        <div>
        {arrayTextos.map(function(texto, i){
            return <Linha texto={texto} arr={arrayTextos} setArray={setArrayTextos} key={i}/>
        })}

        <Adiciona arr={arrayTextos} setArray={setArrayTextos} />
        </div>
    );
}

function Adiciona(props){

    const [inputValue, setInputValue] = useState("");

   
   
    function adicionarTexto(props, inputValue){
        props.setArray([...props.arr, inputValue]);
        setInputValue("");
    }



    return(
        <div className="adiciona">
            <img onClick={()=> adicionarTexto(props, inputValue)} className='add-icon' src="add-icon.png" alt="adicionar"/>
            <input type="text"  value={inputValue} onChange={(e)=> setInputValue(e.target.value)} id="texto-entrada" name="texto-entrada" placeholder="Digite a tarefa..."/>
        </div>
    );
}

function MainSection(props){

    return (
        <section className="main-section">
            <div className="linhas">

                <Linhas/>

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