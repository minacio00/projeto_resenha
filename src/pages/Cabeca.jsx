import resize from "../helpers/resizeMap"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon, PlusIcon } from "@heroicons/react/solid"

export const Cabeca = ({hidden}) => {
    const [isHidden, setisHidden] = useState(hidden)
    const navigate = useNavigate();
//     function mapResizer(maps) {
//         if (!maps) {maps = document.getElementsByTagName('map');}
//         for (const map of maps) {
//             map.img = document.querySelectorAll(`[usemap="#${map.name}"]`)[0];
//             map.areas = map.getElementsByTagName('area');
//             for (const area of map.areas) {
//                 area.coordArr = area.coords.split(',');
//             }
//         }
//         function resizeMaps() {
//             for (const map of maps) {
//                 const scale = map.img.offsetWidth / (map.img.naturalWidth || map.img.width);
//                 for (const area of map.areas) {
//                     area.coords = area.coordArr.map(coord => Math.round(coord * scale)).join(',');
//                 }
//             }
//         }
//         window.addEventListener('resize', () => resizeMaps());
//         resizeMaps();
//     }
//    mapResizer()
   

   const handleClick = (e)=>{
        e.preventDefault();
        setisHidden(!isHidden)
        // alert(hidden)
    }
    // resize(191);
    return (
        <>
            <header className=" flex-col space-y-6 bg-indigo-600 h-12 indent-10
                    text-white font-bold text-left">
                        <div className='flex'>
                            
                                <ArrowLeftIcon className="w-6 h-6 m-3 hover:cursor-pointer" onClick={() => navigate('/equideo',{replace: true})} />
                            
                            <span className='p-3'>
                                Dados do equídeo
                            </span>
                        </div>
            </header>
            <section className="flex-col space-y-4">
                <div>
                    <img className={"mx-auto"} src="detalhes_cabeca.png" alt="visaoGeral" useMap="#map_cabeca" width="191" height="501" />
                    <map name="map_cabeca">
                        <area shape="poly" onClick={handleClick} coords="46,391,93,389,96,398,94,495,66,495,41,470,38,462,69,468,60,428,61,420,48,422,42,418,45,457,38,457,34,418" href="focinhoDireito" />
                        <area shape="poly" onClick={handleClick} coords="99,389,99,495,126,494,137,486,147,472,146,471,151,464,115,468,121,457,127,432,133,423,147,421,144,445,144,459,153,459,155,419,145,405,142,387" href="focinhoEsquerdo" />
                        <area shape="poly" onClick={handleClick} coords="65,465,47,462,45,423,56,426" href="narinaDireita" />
                        <area shape="poly" onClick={handleClick} coords="132,427,144,425,139,463,122,465" href="narinaEsquerda" />
                        <area shape="poly" onClick={handleClick} coords="95,174,95,385,46,388,36,313,5,184,21,184,29,177,36,175" href="chanfroDireito" />
                        <area shape="poly" onClick={handleClick} coords="100,174,156,173,175,185,183,184,144,386,100,386" href="chanfroEsquerdo" />
                        <area shape="poly" onClick={handleClick} coords="27,125,30,108,60,81,83,62,94,61,97,67,96,167,92,170,32,171,33,160,22,158,15,156" href="fronteDireita" />
                        <area shape="poly" onClick={handleClick} coords="99,61,112,61,128,77,137,83,158,110,161,120,164,134,178,157,164,156,161,169,148,169,100,170" href="fronteEsquerda" />
                        <area shape="poly" onClick={handleClick} coords="12,161,28,161,28,173,20,180,7,179" href="olhoDireito" />
                        <area shape="poly" onClick={handleClick} coords="165,161,182,160,187,178,173,180,163,173" href="olhoEsquerdo" />
                        <area shape="poly" onClick={handleClick} coords="27,109,19,76,19,41,31,3,41,2,57,43,60,78" href="orelhaDireira" />
                        <area shape="poly" onClick={handleClick} coords="133,75,136,45,145,29,153,4,165,2,176,46,175,62,173,84,163,111" href="orelhaEsquerda" />
                    </map>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                        <h1 className="text-left text-lg p-4">Descrição do animal</h1>
                        <PlusIcon className="w-5 h-5 m-4" onClick={() => console.log("mais")}/>
                    </div>
                    <table className="table-auto border border-black w-full text-xs">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border-2 border-black">Local</th>
                                <th className="border-2 border-black shrink">Marca</th>
                                <th className="border-2 border-black" >R. zootécnica</th>
                                <th className="border-2 border-black">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-2 border-black'>1</td>
                                <td className='border-2 border-black'>2</td>
                                <td className='border-2 border-black'>3</td>
                                <td className='border-2 border-black px-1 w-2' >
                                    <TrashIcon className='w-5 h-5'/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                        <button className="group relative border w-1/2
                        justify-center py-2 px-4 border-transparent
                        font-medium rounded-md bg-indigo-600 text-white
                        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        // type="submit"
                        onClick={ (e) => navigate('/equideo',{replace: true}) /* deve salvar no firebase daí voltar para equideo */}>
                           Salvar marcações
                        </button>
                    </div>
            </section>    
        </>
    )
}

