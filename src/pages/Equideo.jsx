import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Equideo = ()=> {
    const [nome, setNome] = useState("");
    const [sexo, setSexo] = useState("");
    const [foto, setfoto] = useState("");
    const [Cidade, setEstado] = useState("");
    const [cor, setCor] = useState("");
    const [subcor, setSubcor] = useState("");
    const navigate = useNavigate();

//TODO: selecionar somente um radio input, adicionar os outros campos. 
    return(
        <>
            <header className=" flex-col space-y-6 bg-indigo-600 h-12 indent-10
                text-white font-bold text-left">
                    <div className='flex'>
                        <Link to={"/controle"}>
                            <ArrowLeftIcon className="w-6 h-6 m-3 hover:cursor-pointer"/>
                        </Link>
                        <span className='p-3'>
                            Dados do equídeo
                        </span>
                    </div>
            </header>
            <body>
                <form className="mt-8 space-y-6" method="post">
                    <input type="hidden" name="remember" defaultValue={true} />
                    <div className="space-y-4 px-4">
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
                            <div>
                                <label >Macho</label>
                                <input type="radio" 
                                placeholder="macho"
                                name="react-radio-btn"
                                id="macho"
                                value={"macho"}
                                onChange={ (e) => {setSexo(e.target.value); console.log(e.target.value)} }/>
                            </div>
                            <div>
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
                            placeholder="Rua"
                            name="Rua"
                            id="Rua"
                            onChange={ (e) => setRua(e.target.value) }/>
                        </div>
                        <div>
                            <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Telefone"
                            name="bairro"
                            id="bairro"
                            type='bairro'
                            onChange={ (e) => setBairro(e.target.value) }/>
                        </div>
                        <div>
                            <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Telefone"
                            name="Complemento"
                            id="Complemento"
                            type='Complemento'
                            onChange={ (e) => setComplemento(e.target.value) }/>
                        </div>
                        </div>
                    <div>
                        <button className="group relative border w-1/2
                        justify-center py-2 px-4 border-transparent
                        font-medium rounded-md bg-indigo-600 text-white
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        // type="submit"
                        onClick={ (e) => console.log(``) /* Banco no firebase */}>
                            Cadastrar Proprietário
                        </button>
                </div>
            
                </form>
            </body>
        </>
    )
}
export default Equideo;