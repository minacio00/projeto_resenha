import resize from "../helpers/resizeMap"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon, PlusIcon } from "@heroicons/react/solid"

export const Pescoco = () => {
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
   
    // resize(191);
    return (
        <>
            <header className=" flex-col space-y-6 bg-indigo-600 h-12 indent-10
                    text-white font-bold text-left">
                        <div className='flex'>
                            
                                <ArrowLeftIcon className="w-6 h-6 m-3 hover:cursor-pointer" on onClick={(e) =>{navigate('/geral',{replace: true})}} />
                            
                            <span className='p-3'>
                                Dados do equídeo
                            </span>
                        </div>
            </header>
            <section className="flex-col space-y-4">
                <div>
                    <img className={"mx-auto"} src="pescoco_inferior.png" alt="pescoco" useMap="#map_pescoco" width="167" height="500" />
                    <map name="map_pescoco">
                        {/* <area shape="poly" onClick={()=> alert("clique")} coords="10,488,10,446,6,435,9,415,14,375,29,323,39,318,48,300,58,195,61,157,54,147,52,119,57,93,64,57,67,32,69,17,75,3,89,4,98,10,102,24,103,49,104,60,117,107,116,140,107,158,113,235,118,279,128,318,138,336,148,355,154,383,156,407,159,423,158,455,158,489,97,489,47,490,11,491" href="pescocoVistaInferior" /> */}
                        <area shape="poly" onClick={()=> alert("clique")} coords="19,369,26,412,50,426,61,456,61,462,53,483,51,493,10,493,8,450,7,425,12,393,17,368" href="antebracoEsquerdo" />
                        <area shape="poly" onClick={()=> alert("clique")} coords="149,364,143,396,138,409,117,429,106,449,108,460,117,490,158,489,157,452,161,432,154,395,151,366" href="antebracoDireito" />
                        <area shape="poly" onClick={()=> alert("clique")} coords="62,461,108,460,108,443,123,422,137,412,144,398,149,361,147,355,143,343,133,326,100,349,75,349,57,342,35,321,17,357,23,401,28,410,50,426,59,437,63,457" href="peito" />
                        <area shape="poly" onClick={()=> alert("clique")} coords="37,320,55,343,78,351,100,350,133,328,120,296,111,205,108,157,60,159,52,246,51,285,37,318,33,323,38,320" href="pescoco" />
                        <area shape="poly" onClick={()=> alert("clique")} coords="60,157,53,117,59,75,69,36,74,10,79,5,100,12,103,44,110,86,119,115,119,142,110,157" href="cabecaVistaInferior" />
                        <area shape="poly" onClick={()=> alert("garganta")} coords="71,151,71,184,96,185,96,150" href="garganta" />
                        <area shape="poly" onClick={()=> alert("clique")} coords="71,12,72,23,102,23,98,10,83,6" href="mento" />
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
                        onClick={ (e) => navigate('/geral',{replace: true}) /* deve salvar no firebase daí voltar para equideo */}>
                           Salvar marcações
                        </button>
                    </div>
            </section>    
        </>
    )
}
