import {PencilIcon, TrashIcon,MenuIcon} from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import {Sidebar} from "../components/Sidebar";
const ControleResenha = () => {
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => {
    //     // alert(isOpen);
    //     setIsOpen(!isOpen);
    // };

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
            <body className="space-y-6">
                <div className="flex items-center justify-center space-x-4 px-1">
                    <p className="w-20">Proprietário</p>
                    <select className="overflow-hidden w-80 border-0 rounded-md bg-gray-100">
                        <option value="fruit">teste teste testeteste teste</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="meat">Meat</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="meat">Meat</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="meat">Meat</option>
    
                    </select>
                </div>
                <div className="flex items-center justify-center space-x-4 px-1">
                    <p className="w-20" >Nome do animal</p>
                    <select className="overflow-hidden w-80 border-0 rounded-md bg-gray-100">
                        <option className="overflow-hidden" value="fruit">
                            animalimal 
                        </option>
                        <option value="vegetable">Vegetable</option>
                        <option value="meat">Meat</option>
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
                                    <PencilIcon className='w-5 h-5' />
                                </td>
                                <td className='border-2 border-black px-1 w-2' >
                                    <TrashIcon className='w-5 h-5'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/*TODO: adicionar ul no restante da pagina */}
            </body>
        </div>
    )
}

export default ControleResenha;