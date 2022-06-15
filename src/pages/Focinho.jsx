import resize from "../helpers/resizeMap"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon, PlusIcon } from "@heroicons/react/solid"

export const Focinho = () => {
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
                    <img className={"mx-auto"} src="focinho.png" alt="focinho" useMap="#map_focinho" width="402" height="500" />
                    <map name="map_focinho">
                        {/* <area shape="poly" coords="16,316,18,184,21,135,24,122,49,69,82,37,82,20,118,22,140,30,141,39,189,32,252,37,254,39,271,22,313,21,314,41,313,44,377,138,387,191,370,246,384,307,372,341,332,366,311,411,262,461,201,485,164,482,122,456,102,436,85,399,56,360,22,338,19,320" href="focinho" /> */}
                        <area shape="poly" coords="30,342,31,323,51,304,65,305,71,304,97,289,114,293,117,298,118,300,163,302,265,300,274,300,291,294,297,292,311,297,321,307,339,308,357,320,365,345,365,349,335,366,314,405,252,466,206,486,164,485,126,460,107,441,90,408,65,372,31,343,30,342" href="labioInferior" />
                        <area shape="poly" coords="30,338,34,311,61,304,70,303,90,290,108,290,119,303,149,300,224,298,274,299,296,291,314,298,323,306,344,306,366,344,382,320,384,292,376,263,369,245,177,233,17,249,18,309,19,330,30,339" href="labioSuperior" />
                        <area shape="poly" coords="43,210,59,209,59,195,69,190,79,215,82,218,95,218,94,133,86,119,87,77,96,67,112,91,113,91,113,75,112,68,110,58,92,59,84,60,79,104,55,131,44,172,43,209" href="narinaDireita" />
                        <area shape="poly" coords="301,214,301,133,303,126,309,110,309,79,301,66,283,90,280,75,284,64,295,58,309,58,314,69,315,92,318,100,332,119,346,147,353,186,353,210,339,210,331,191,328,189,321,197,318,212,317,214,303,215" href="narinaEsquerda" />
                        <area shape="poly" coords="92,415,305,416,257,461,206,483,184,486,155,478,114,451,94,414" href="mento" />
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
