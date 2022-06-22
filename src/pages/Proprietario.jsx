import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth, db} from "../firebase-config";
import { addDoc, collection,doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const Proprietario = ()=> {
    const [nome, setNome] = useState("");
    const [phone, setPhone] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [complemento, setComplemento] = useState("");
    const navigate = useNavigate();

    onAuthStateChanged(auth,(currentUser) => {
        // console.log(auth)
        if(!currentUser){
            navigate('/')
        }
        
    })
    const saveProprietario = async (e) => {
        e.preventDefault();
        const proprietariosRef = collection(db, "proprietarios");
        const newDoc = addDoc(proprietariosRef, {
            nome: nome,
            telefone: phone,
            Rua: rua,
            Bairro: bairro,
            Complemento: complemento,
            vet: auth.currentUser.uid
        });
        navigate(-1);
    }

    return(
        <>
            <header className=" flex-col space-y-6 bg-indigo-600 h-12 indent-10
                text-white font-bold text-left">
                    <div className='flex'>
                        <Link to={"/controle"}>
                            <ArrowLeftIcon className="w-6 h-6 m-3 hover:cursor-pointer"/>
                        </Link>
                        <span className='p-3'>
                            Dados do Proprietário
                        </span>
                    </div>
            </header>
            <body>
                <form className="mt-8 space-y-6" onSubmit={(e) => saveProprietario(e)}>
                    <input type="hidden" name="remember" defaultValue={true} />
                    <div className="space-y-4 px-4">
                        <div>
                            <input className="appearance-none valid:border-green-500  invalid:border-red-500 rounded-md relative block w-full
                             px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900
                              rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Nome do Proprietario" name="login" id="nome"
                            required
                            onChange={(e)=>setNome(e.target.value)} />
                        </div>
                        <div>
                            <input className=
                            "appearance-none valid:border-green-500  invalid:border-red-500 rounded-md relative block w-full px-3 py-2 border-b border-t-0 border-x-0 border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Telefone (xx)xxxxx-xxxx"
                            name="Telefone"
                            id="Telefone"
                            type='tel'
                            title="deve ter o formato (ddd)xxxxxxxxx"
                            pattern="\([0-9]{2}\)[0-9]{9}"
                            required
                            onChange={ (e) => setPhone(e.target.value) }/>
                        </div>
                        <div>
                            <input className=
                            "appearance-none rounded-md valid:border-green-500  invalid:border-red-500 relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Rua"
                            name="Rua"
                            id="Rua"
                            required
                            onChange={ (e) => setRua(e.target.value) }/>
                        </div>
                        <div>
                            <input className=
                            "appearance-none rounded-md relative block w-full valid:border-green-500  invalid:border-red-500 px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Bairro"
                            name="bairro"
                            id="bairro"
                            type='bairro'
                            required
                            onChange={ (e) => setBairro(e.target.value) }/>
                        </div>
                        <div>
                            <input className=
                            "appearance-none rounded-md relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Complemento"
                            name="Complemento"
                            id="Complemento"
                            type='Complemento'
                            onChange={ (e) => setComplemento(e.target.value) }/>
                        </div>
                        </div>
                    <div>
                        <button className="group relative border 
                        justify-center py-2 px-4 border-transparent
                        font-medium rounded-md bg-indigo-600 text-white
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        // type="submit"
                        >
                            Cadastrar proprietario
                        </button>
                </div>
            
                </form>
            </body>
        </>
    )
}
export default Proprietario;