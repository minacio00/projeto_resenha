import resize from "../helpers/resizeMap"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon, PlusIcon } from "@heroicons/react/solid"

export const LadoDireito = () => {
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
                    <img className={"mx-auto"} src="LadoDireito.png" alt="LadoDireito" useMap="#map_direito" width="400" height="318" />
                    <map name="map_direito">
                        <area shape="poly" coords="22,101,13,126,8,166,3,210,11,216,15,210,22,194,32,180,31,172,30,151,26,141,26,132,22,122,27,112,29,99" href="cauda" />
                        <area shape="poly" coords="323,32,321,19,328,25,330,33,334,39,344,49,352,54,363,63,368,71,366,83,352,83,336,79,325,60" href="ganacha" />
                        <area shape="poly" coords="333,22,344,17,343,4,333,6" href="orelha" />
                        <area shape="poly" coords="321,19,329,26,333,23,333,7,325,5" href="orelha" />
                        <area shape="poly" coords="369,93,351,83,365,83,373,89" href="mento" />
                        <area shape="poly" coords="343,38,339,44,344,50,352,47,353,42,347,37" href="olho" />
                        <area shape="poly" coords="340,44,352,55,362,64,369,72,376,65,387,57,356,35" href="chanfro" />
                        <area shape="poly" coords="342,18,331,27,330,33,334,40,337,45,343,44,358,36,352,28" href="fronte" />
                        <area shape="poly" coords="389,90,377,82,387,82,388,75,386,70,397,80" href="labioSuperior" />
                        <area shape="poly" coords="368,92,365,85,370,74,378,83,389,93,382,96" href="labioInferior" />
                        <area shape="poly" coords="378,71,380,76,382,79,386,81,387,75,383,71" href="narina" />
                        <area shape="poly" coords="366,83,369,73,376,64,385,58,386,62,398,73,395,84,390,92,381,96,369,94" href="focinho" />
                        <area shape="poly" coords="303,25,321,19,322,34,305,41" href="nuca" />
                        <area shape="poly" coords="231,63,243,70,250,76,260,67,272,60,287,52,300,45,307,40,304,26,275,35,249,49" href="crina" />
                        <area shape="poly" coords="311,60,327,60,335,81,317,78" href="garganta" />
                        <area shape="poly" coords="277,106,289,119,309,98,311,83,316,78,312,63" href="juguleira" />
                        <area shape="poly" coords="286,126,308,97,310,84,316,79,332,77,325,61,321,19,300,27,276,36,249,49,232,64,243,68,255,84,263,93" href="pescoco" />
                        <area shape="poly" coords="206,207,207,216,216,216,216,206" href="castanha" />
                        <area shape="poly" coords="246,301,248,305,272,305,268,294" href="casco" />
                        <area shape="poly" coords="215,293,218,299,243,299,243,293,239,285" href="casco" />
                        <area shape="poly" coords="245,294,245,301,268,293,265,289" href="coroa" />
                        <area shape="poly" coords="216,284,216,295,235,285,233,277" href="coroa" />
                        <area shape="poly" coords="247,287,246,294,265,289,259,283" href="quartela" />
                        <area shape="poly" coords="212,279,229,271,234,278,220,284" href="quartela" />
                        <area shape="poly" coords="240,271,245,269,249,286,242,290,237,284,235,277" href="machinho" />
                        <area shape="poly" coords="207,257,212,259,218,274,210,278,205,274" href="machinho" />
                        <area shape="poly" coords="239,269,237,277,239,284,244,288,261,284,258,275,256,268" href="boleto" />
                        <area shape="poly" coords="206,259,206,273,210,278,227,271,226,260" href="boleto" />
                        <area shape="poly" coords="237,234,239,271,257,267,257,237" href="canela" />
                        <area shape="poly" coords="206,238,207,257,225,260,224,235" href="canela" />
                        <area shape="poly" coords="237,220,238,236,257,237,259,219,249,219" href="joelho" />
                        <area shape="poly" coords="205,219,206,235,226,235,227,221" href="joelho" />
                        <area shape="poly" coords="90,172,86,167,96,155,102,154,106,155,107,159,97,162" href="virilha" />
                        <area shape="poly" coords="199,187,204,224,227,221,229,187,226,183,207,183" href="antebraco" />
                        <area shape="poly" coords="232,186,240,163,248,167,260,174,264,186,259,207,259,219,250,219,235,220" href="antebraco" />
                        <area shape="poly" coords="231,189,224,181,222,171,227,165,235,157,238,156,240,158" href="codilho" />
                        <area shape="poly" coords="244,69,254,83,261,93,286,126,286,129,277,125,264,127,255,141,252,151,249,167,235,161,227,135,220,105,209,90,226,93,237,89,243,86,246,79" href="espadua" />
                        <area shape="poly" coords="211,91,219,107,226,134,233,161,209,159,189,157,169,157,150,154,139,153,141,134,139,124,141,113,138,97,157,98,176,100,195,97" href="costado" />
                        <area shape="poly" coords="260,176,250,167,251,152,256,140,264,128,277,126,285,129,281,141,275,154,276,163" href="peito" />
                        <area shape="poly" coords="48,290,47,295,68,296,74,293,67,284" href="casco" />
                        <area shape="poly" coords="19,305,19,313,47,311,46,299,39,296" href="casco" />
                        <area shape="poly" coords="46,284,49,290,68,284,67,278" href="coroa" />
                        <area shape="poly" coords="17,299,20,306,40,297,37,292" href="coroa" />
                        <area shape="poly" coords="47,277,47,286,65,278,62,271" href="quartela" />
                        <area shape="poly" coords="17,288,18,298,36,292,33,284,24,284" href="quartela" />
                        <area shape="poly" coords="45,261,48,277,45,280,39,274,38,263" href="machinho" />
                        <area shape="poly" coords="15,268,19,269,24,285,15,288,9,280" href="machinho" />
                        <area shape="poly" coords="39,262,40,272,46,278,63,274,61,262" href="boleto" />
                        <area shape="poly" coords="15,268,9,279,14,288,33,285,32,269" href="boleto" />
                        <area shape="poly" coords="43,232,43,253,42,261,61,261,61,233" href="canela" />
                        <area shape="poly" coords="15,240,15,268,31,269,35,239" href="canela" />
                        <area shape="poly" coords="49,216,43,223,44,233,61,234,66,222" href="jarrete" />
                        <area shape="poly" coords="15,211,10,216,13,228,14,234,16,239,33,238,36,231,41,226,42,220,32,210,24,208" href="jarrete" />
                        <area shape="poly" coords="48,213,66,222,70,213,75,200,70,195,66,187,57,198" href="perna" />
                        <area shape="poly" coords="31,172,32,181,24,194,17,208,24,209,33,212,42,219,48,211,57,199,65,187,52,176,42,173" href="perna" />
                        <area shape="poly" coords="64,185,70,196,75,200,83,184,90,169,83,168,69,180" href="coxa" />
                        <area shape="poly" coords="30,153,31,173,43,172,52,175,62,186,63,187,70,180,85,169,89,165,79,161,82,152,66,146,57,146,44,144" href="coxa" />
                        <area shape="poly" coords="138,96,140,114,139,125,141,134,139,154,133,153,126,146,113,137,106,137,100,118,97,106,102,95,118,96" href="flanco" />
                        <area shape="poly" coords="66,107,48,106,55,124,52,140,44,147,66,148,83,151,83,146,99,138,107,139,102,119,101,96,97,94,99,103,96,108,87,113,80,114,68,112" href="anca" />
                        <area shape="poly" coords="66,106,69,112,80,115,89,113,97,108,100,101,97,95,86,93,76,93,75,97" href="pontaDaAnca" />
                        <area shape="poly" coords="182,181,197,186,206,184,226,181,225,172,228,165,233,161,211,161,189,160" href="cilhadouro" />
                        <area shape="poly" coords="184,181,191,160,170,157,151,155,135,153,126,146,114,138,111,146,102,156,130,171,171,182" href="abdomen" />
                        <area shape="poly" coords="111,146,102,156,91,165,81,160,85,147,99,139,113,139" href="soldra" />
                        <area shape="poly" coords="28,101,28,111,24,123,28,133,28,143,29,149,32,152,42,149,50,140,54,124,48,107,39,102" href="nadega" />
                        <area shape="poly" coords="77,68,61,70,36,88,23,102,27,102,39,104,49,107,66,107,76,97" href="garupa" />
                        <area shape="poly" coords="139,74,137,96,119,96,98,94,87,94,77,95,77,69,89,69,122,71" href="lombo" />
                        <area shape="poly" coords="211,91,195,98,175,99,157,98,137,97,140,75,154,80,176,80,192,73,208,71" href="dorso" />
                        <area shape="poly" coords="233,64,243,69,246,79,245,86,237,90,223,93,208,88,207,71,220,71" href="cernelha" />
                        <area shape="poly" coords="22,102,38,85,61,72,87,70,122,72,153,79,178,79,190,76,211,71,219,72,233,64,251,49,276,37,301,27,318,21,325,6,333,4,335,8,340,2,344,7,344,17,352,28,385,59,386,63,398,73,396,84,390,93,381,97,370,93,365,85,351,83,335,80,319,79,312,84,307,97,290,117,281,140,276,155,276,163,262,177,263,188,259,208,259,275,271,301,273,307,248,307,242,299,217,298,216,285,205,273,205,244,199,187,172,182,132,173,102,158,89,169,84,184,71,213,61,233,60,261,66,277,68,283,76,295,48,300,48,311,21,314,16,289,10,278,14,268,16,241,10,215,3,209,8,168,12,126" />
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
