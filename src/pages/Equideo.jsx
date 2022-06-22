import { ArrowLeftIcon, PlusIcon, TrashIcon } from "@heroicons/react/solid";
import { useEffect, useState, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cabeca } from "./Cabeca";
import resize from "../helpers/resizeMap";
import {auth, db} from '../firebase-config';
import { addDoc, collection,doc } from "firebase/firestore";

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    resize(800);
    return () => setValue(value => value + 1); // update state to force render
    // An function that increment 👆🏻 the previous state like here 
    // is better than directly setting `value + 1`
}

const Equideo = ()=> {
    
    const [nome, setNome] = useState("");
    const [sexo, setSexo] = useState("");
    const [foto, setfoto] = useState("");
    const [cor, setCor] = useState("");
    const [idade, setIdade] = useState("")
    const [subcor, setSubcor] = useState("");
    const [especie, setEspecie] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const navigate = useNavigate();
    const [hiddenVisao, setHiddenVisao] = useState(true)
    const [hiddenForm, setHiddenForm] = useState(false);

    function clickVisaoGeral(e){
        e.preventDefault();
        e.className
        alert(e.currentTarget.parentElement.name);
        setHiddenVisao(true)
        // var imgs = document.getElementsByTagName("img")
        // console.log(imgs)
    }
    function saveForm(e){
        e.preventDefault();
         // salva dados no firebase
        navigate("/geral",{replace:false})
        // setHiddenVisao(!hiddenVisao);
        // setHiddenForm(!hiddenForm);
    }
    const saveAnimal = async (e) => {
        e.preventDefault();
        const animaisRef = collection(db, "animais");
        const newDoc = await addDoc(animaisRef, {
            Nome: nome,
            Sexo: sexo,
            Cor: cor,
            Idade: idade,
            Subcor: subcor,
            Especie: especie,
            Cidade: cidade,
            Estado: estado,
            vet: auth.currentUser.uid
        });
        navigate('/geral',{replace:false});
    }
    
    return(
        <>
            <header className=" flex-col space-y-6 bg-indigo-600 h-12 indent-10
                text-white font-bold text-left">
                    <div className='flex'>
                        <Link to={"/controle"}>
                            <ArrowLeftIcon className="w-6 h-6 m-3 hover:cursor-pointer"/>
                        </Link>
                        <span className='p-3' >
                            Dados do equídeo
                        </span>
                    </div>
            </header>
            <body>
                <form className="mt-8 space-y-6" onSubmit={(e)=>saveAnimal(e)}>
                    <input type="hidden" name="remember" defaultValue={true} />
                    <div className={` ${hiddenForm ? "hidden" : ' '} space-y-4 px-4`}>
                        <div>
                            <input className="appearance-none rounded-md relative block w-full
                             px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900
                              rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Nome do animal" name="nome" id="nome"
                            onChange={(e)=>setNome(e.target.value)} />
                        </div>
                        <div className=
                            "rounded-md flex justify-between relative w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                            <span className="text-gray-500 text-base">Sexo:</span>
                            <div className="space-x-1">
                                <label >Macho</label>
                                <input type="radio" 
                                placeholder="macho"
                                name="react-radio-btn"
                                id="macho"
                                value={"macho"}
                                onChange={ (e) => {setSexo(e.target.value); console.log(e.target.value)} }/>
                            </div>
                            <div className="space-x-1">
                                <label >Fêmea</label>
                                <input type="radio" 
                                placeholder="femea"
                                name="react-radio-btn"
                                id="femea"
                                value={"femea"}
                                onChange={ (e) => {setSexo(e.target.value); console.log(e.target.value)} }/>
                            </div>
                        </div>
                        <div>
                            <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Idade do animal"
                            name="idade"
                            id="idade"
                            onChange={ (e) => setIdade(e.target.value) }/>
                        </div>
                        <div>
                            <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Espécie"
                            name="especie"
                            id="especie"
                            type='especie'
                            onChange={ (e) => setBairro(e.target.value) }/>
                        </div>
                        <div className="items-center justify-between max-w-screen-sm px-1 ">
                            <p className="py-2">Cidade</p>
                            {/* talvez a linha abaixo só vá setar quando eu ativamente selecionar uma cidade, debugar isso */}
                            <select className="overflow-hidden border-0 rounded-md bg-gray-100" onChange={(e)=>setCidade(e.target.value) }> 
                                <option value="Anapolis">Anapolis</option>
                                <option value="Belo Horizonte">Belo Horizonte</option>
                            </select>

                            <p className="py-2">Estado</p>
                            <select className="overflow-hidden border-0 rounded-md bg-gray-100" onChange={(e)=>setEstado(e.target.value)}>
                                <option value="Goiás">Goiás</option>
                                <option value="Minas Gerais">Minas Gerais</option>
                            </select>
                        </div>
                        
                        <div className="flex items-center justify-between max-w-screen-sm px-1 ">
                            <p>Cor</p>
                            <select className="overflow-hidden border-0 rounded-md bg-gray-100">
                                <option value="azul">azul</option>
                            </select>

                            <p>Sub-cor</p>
                            <select className="overflow-hidden border-0 rounded-md bg-gray-100">
                                <option value="azul">azul</option>
                            </select>
                        </div>

                    </div>
                    <div className={` ${hiddenForm ? "hidden" : ' ' }`} >
                        <button className="group relative border w-1/2
                        justify-center py-2 px-4 border-transparent
                        font-medium rounded-md bg-indigo-600 text-white
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        // type="submit"
                        >
                           Cadastrar animal
                        </button>
                    </div>
                </form>
            </body>
          
        </>
    )
}
export default Equideo;