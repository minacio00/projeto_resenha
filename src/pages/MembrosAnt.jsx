import resize from "../helpers/resizeMap"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon, PlusIcon } from "@heroicons/react/solid"

export const MembrosAnteriores = () => {
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
                    <img className={"mx-auto"} src="membros_anteriores.png" alt="Membros_anteriores" useMap="#map_anteriores" width="281" height="500" />
                    <map name="map_anteriores">
                        <area shape="poly" coords="45,199,33,220,33,248,43,280,52,297,53,300,78,285,93,249,95,214,85,198,50,196" href="joelhoEsquerdo" />
                        <area shape="poly" coords="189,195,180,217,180,244,187,282,195,292,215,293,232,274,242,236,232,201,227,196,190,195" href="joelhoDireito" />
                        <area shape="poly" coords="53,300,53,378,79,379,79,285" href="canelaEsquerdo" />
                        <area shape="poly" coords="195,292,195,377,217,379,216,324,216,292" href="canelaEsquerdo" />
                        <area shape="poly" coords="54,378,46,391,49,419,55,428,85,425,92,398,89,387,78,379" href="boletoEsquerdo" />
                        <area shape="poly" coords="54,426,56,437,88,437,84,424" href="machinhoEsquerdo" />
                        <area shape="poly" coords="54,436,42,444,68,457,97,450,86,436,85,436" href="quartelaEsquerdo" />
                        <area shape="poly" coords="48,446,36,450,52,464,69,465,84,464,105,453,101,449,72,456" href="coroaEsquerdo" />
                        <area shape="poly" coords="37,451,37,479,63,488,107,482,105,458,72,467,49,461,42,454" href="casco" />
                        <area shape="poly" coords="195,379,184,402,186,419,193,423,213,424,221,411,224,395,219,379" href="boletoDireito" />
                        <area shape="poly" coords="191,422,190,434,216,436,217,424" href="machinhoDireito" />
                        <area shape="poly" coords="190,433,181,446,179,448,201,454,226,453,216,437" href="quartelaDireito" />
                        <area shape="poly" coords="181,449,170,457,183,467,203,469,226,464,231,458,229,453,203,455" href="coroaDireito" />
                        <area shape="poly" coords="167,459,168,479,183,488,208,490,235,481,234,476,234,456,225,463,209,469,193,469,175,461" href="casco" />
                        <area shape="poly" coords="12,15,20,69,28,111,46,164,48,195,84,197,84,153,98,128,101,84,125,45,135,39,135,13,14,15" href="antebracoEsquerdo" />
                        <area shape="poly" coords="187,194,227,195,251,87,269,10,135,14,136,40,161,56,175,89,179,126,187,157,190,193" href="antebracoDireito" />
                        <area shape="poly" coords="195,167,196,185,207,185,204,169,199,169" href="castanha" />
                        <area shape="poly" coords="67,170,70,187,79,187,77,169,68,168" href="castanha" />
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
