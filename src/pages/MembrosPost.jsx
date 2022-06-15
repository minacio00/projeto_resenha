import resize from "../helpers/resizeMap"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon, PlusIcon } from "@heroicons/react/solid"

export const MembrosPost = () => {
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
                    <img className={"mx-auto"} src="membros_posteriores.png" alt="posteriores" useMap="#map_posteriores" width="321" height="500" />
                    <map name="map_posteriores">
                        {/* <area shape="poly" coords="7,18,25,60,26,101,44,176,41,195,41,224,67,304,66,379,58,390,58,434,38,456,35,488,113,488,111,469,100,448,91,438,98,412,95,394,91,382,92,308,104,264,104,206,94,188,89,149,105,75,135,56,145,36,149,23,155,15,166,23,169,37,191,70,211,81,220,116,221,172,208,216,210,266,223,287,219,376,216,394,221,431,222,437,209,446,204,467,204,484,201,486,276,488,272,454,252,438,252,384,247,376,247,304,262,268,271,204,270,173,290,109,291,66,313,15,312,8,6,9,7,17" href="membrosPosteriores" /> */}
                        <area shape="poly" coords="26,75,104,77,142,48,149,29,149,21,157,12,159,10,5,9" href="coxaEsquerdo" />
                        <area shape="poly" coords="159,14,167,23,176,48,207,80,213,87,291,87,293,60,313,10,161,10" href="coxaDireito" />
                        <area shape="poly" coords="26,76,30,116,46,178,40,219,107,218,101,196,92,178,89,153,99,102,106,78" href="pernaEsquerdo" />
                        <area shape="poly" coords="215,88,223,119,221,167,207,220,207,227,270,229,269,175,290,106,290,87" href="pernaDireito" />
                        <area shape="poly" coords="40,218,42,232,55,284,67,304,90,306,105,259,106,218" href="jarreteEsquerdo" />
                        <area shape="poly" coords="208,227,210,262,221,285,246,306,263,267,269,228" href="jarreteDireito" />
                        <area shape="poly" coords="66,304,68,377,89,380,92,306" href="canelaEsquerdo" />
                        <area shape="poly" coords="223,287,221,379,247,379,247,308" href="canelaDireito" />
                        <area shape="poly" coords="67,379,59,390,57,430,89,436,98,413,96,393,93,381" href="boletoEsquerdo" />
                        <area shape="poly" coords="220,379,219,394,221,432,252,438,254,396,251,383,250,380" href="boletoDireito" />
                        <area shape="poly" coords="59,433,52,442,102,447,91,438" href="machinhoEsquerdo" />
                        <area shape="poly" coords="52,442,42,452,106,454,102,448" href="quartelaEsquerdo" />
                        <area shape="poly" coords="42,453,37,464,110,462,106,452" href="coroaEsquerdo" />
                        <area shape="poly" coords="39,464,35,482,36,491,117,488,111,463" href="cascoEsquerdo" />
                        <area shape="poly" coords="222,433,215,441,213,443,262,446,254,438" href="machinhoDireito" />
                        <area shape="poly" coords="214,444,207,455,274,460,273,453,261,445" href="quartelaDireito" />
                        <area shape="poly" coords="207,456,204,467,275,467,272,460" href="coroaDireito" />
                        <area shape="poly" coords="203,469,204,484,277,490,276,467,205,467" href="cascoDireito" />
                        <area shape="poly" coords="218,206,218,221,230,221,230,200,218,200" href="castanha" />
                        <area shape="poly" coords="76,182,77,203,89,206,88,183,79,183" href="castanha" />
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
