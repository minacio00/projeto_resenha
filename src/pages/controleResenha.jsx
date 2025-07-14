import {PencilIcon, TrashIcon,MenuIcon} from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import {Sidebar} from "../components/Sidebar";
import {onAuthStateChanged, signOut} from "firebase/auth"
import {auth, db} from '../firebase-config';
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
// import { useAsync } from 'react-async'; remover

const ControleResenha = () => {
    auth
    const [proprietarios, setproprietarios] = useState();
    const [animais, setAnimais] = useState();
    const [user, setUser] = useState('');
    const [isLoading, setLoading] = useState(true);
    
    const navigate = useNavigate();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                navigate('/', { replace: true });
            } else {
                setUser(currentUser);
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Buscar dados só quando user estiver pronto
    useEffect(() => {
        if (!user) return;

        const fetchData = async () => {
            setLoading(true);

            const proprietariosRef = collection(db, "proprietarios");
            const proprietariosQuery = query(
                proprietariosRef,
                where("vet", '==', user.uid),
                limit(10)
            );
            const animaisRef = collection(db, "animais");
            const animaisQuery = query(
                animaisRef,
                where("vet", '==', user.uid),
                limit(10)
            );

            const [proprietariosSnap, animaisSnap] = await Promise.all([
                getDocs(proprietariosQuery),
                getDocs(animaisQuery)
            ]);

            setProprietarios(proprietariosSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setAnimais(animaisSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
        };

        fetchData();
    }, [user]);
    
    const LogOut = async() => {
        try {
            if(auth.currentUser){ // transformar usuario em estado
                alert("alo")
                await signOut(auth);
            }
        } catch (e) {
            console.log(e)
        }
    }
    

    if(proprietarios=== undefined){
        return <div className="App">Carregando...</div>;
    }
    return (
        <div className="flex-col space-y-6"> 
            <header className="bg-indigo-600 h-12 indent-10
            text-white font-bold text-left">
                <div className='flex'>
                    <Sidebar />
                    <span className='p-3'>
                        Controle de Resenha
                    </span>
                </div>
            </header>
            <section className="space-y-6">
            <a className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={() => LogOut()}>
                    {auth.currentUser?.email} <br />
                    log out
                    <br />
                    {/* {proprietarios[0]?.nome} */}
                </a>
                <div className="flex items-center justify-center space-x-4 px-1">
                    <p className="w-20">Proprietário </p>
                    <select className="overflow-hidden w-80 border-0 rounded-md bg-gray-100">
                        {proprietarios?.map(proprietario => {
                            return(
                                <>
                                <option key={proprietario.telefone} value={proprietario?.nome}>{proprietario?.nome}</option>
                                </>
                            )
                        })}
                        
    
                    </select>
                </div>
                <div className="flex items-center justify-center space-x-4 px-1">
                    <p className="w-20" >Nome do animal</p>
                    <select className="overflow-hidden w-80 border-0 rounded-md bg-gray-100">
                       {animais?.map(animal => {
                            return(
                                <>
                                <option key={animal.Nome} value={animal?.Nome}>{animal?.Nome}</option>
                                </>
                                
                            )
                        })}
                    </select>
                </div>
                {/* maybe this will break in big screens, fix it if u wanna */}
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

                <div>
                    <table className="table-auto border border-black w-full text-xs">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border-2 border-black">Proprietário</th>
                                <th className="border-2 border-black shrink">Nome do <br/> animal</th>
                                <th className="border-2 border-black" >Cor</th>
                                <th className="border-2 border-black">Sub-cor</th>
                                <th className="border-2 border-black">Editar</th>
                                <th className="border-2 border-black">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-2 border-black'>1</td>
                                <td className='border-2 border-black'>2</td>
                                <td className='border-2 border-black'>3</td>
                                <td className='border-2 border-black'>4</td>
                                <td className='border-2 border-black content-center px-1 w-2'>
                                    <PencilIcon className='w-5 h-5' onClick={() => {queryProps()}} />
                                </td>
                                <td className='border-2 border-black px-1 w-2' >
                                    <TrashIcon className='w-5 h-5'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*TODO: adicionar ul no restante da pagina */}
            </section>
        </div>
    )
}

export default ControleResenha;