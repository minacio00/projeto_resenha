import resize from "../helpers/resizeMap"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon, PlusIcon } from "@heroicons/react/solid"

export const LadoEsquerdo = ({hidden}) => {
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
                            
                                <ArrowLeftIcon className="w-6 h-6 m-3 hover:cursor-pointer" on onClick={(e) =>{navigate('/geral',{replace: true})}} />
                            
                            <span className='p-3'>
                                Dados do equídeo
                            </span>
                        </div>
            </header>
            <section className="flex-col space-y-4">
                <div>
                    <img className={"mx-auto"} src="LadoEsquerdo.png" alt="LadoEsquerdo" useMap="#map_esquerdo" width="400" height="317" />
                    <map name="map_esquerdo">
                        <area shape="poly" coords="172, 67, 151, 74, 159, 76, 166, 91, 177, 94, 189, 95, 208, 74, 195, 73, 182, 72" href="cernelha"/>
                        <area shape="poly" coords="68, 25, 77, 25, 78, 18, 69, 2, 64, 3, 66, 15" href="orelha" />
                        <area shape="poly" coords="51, 19, 67, 24, 67, 15, 57, 3, 53, 3" href="orelha" />
                        <area shape="poly" coords="49, 40, 44, 46, 49, 49, 56, 46, 54, 42" href="olho" />
                        <area shape="poly" coords="30, 71, 36, 80, 40, 88, 49, 82, 69, 79, 72, 67, 74, 61, 74, 52, 78, 39, 77, 24, 68, 24, 65, 36, 60, 43, 52, 56, 44, 59" href="ganacha" />
                        <area shape="poly" coords="60, 44, 66, 35, 68, 25, 53, 20, 43, 32, 36, 37, 57, 40" href="fronte" />
                        <area shape="poly" coords="30, 71, 43, 60, 53, 56, 59, 46, 57, 39, 37, 38, 14, 57, 23, 63" href="chanfro" />
                        <area shape="poly" coords="22, 97, 29, 84, 35, 81, 39, 85" href="mento" />
                        <area shape="poly" coords="9, 95, 1, 88, 4, 77, 10, 78, 14, 80, 21, 84" href="labioSuperior" />
                        <area shape="poly" coords="9, 91, 21, 83, 29, 85, 21, 98, 8, 95" href="labioInferior" />
                        <area shape="poly" coords="14, 80, 10, 76, 16, 71, 19, 71, 18, 78" href="narina" />
                        <area shape="poly" coords="15, 58, 23, 64, 30, 73, 39, 85, 31, 85, 21, 97, 8, 94, 2, 87, 4, 70" href="focinho" />
                        <area shape="poly" coords="81, 80, 70, 79, 72, 67, 87, 66" href="garganta" />
                        <area shape="poly" coords="81, 82, 87, 65, 92, 76, 101, 84, 108, 92, 119, 105, 123, 107, 110, 118, 95, 100, 86, 90" href="juguleira" />
                        <area shape="poly" coords="97, 42, 79, 38, 78, 24, 78, 18, 100, 29" href="nuca" />
                        <area shape="poly" coords="99, 29, 95, 41, 109, 49, 121, 55, 132, 61, 144, 68, 151, 73, 161, 70, 169, 66, 160, 59, 142, 50, 104, 31" href="crina" />
                        <area shape="poly" coords="114, 134, 121, 126, 159, 60, 144, 51, 105, 31, 77, 24, 76, 39, 75, 52, 74, 60, 68, 77, 67, 79, 81, 81, 86, 89, 94, 99, 109, 120" href="pescoco" />
                        <area shape="poly" coords="373, 101, 371, 113, 373, 121, 370, 134, 369, 145, 364, 159, 365, 162, 367, 177, 367, 183, 373, 196, 385, 210, 390, 220, 394, 211, 390, 152, 387, 128" href="cauda" />
                        <area shape="poly" coords="152, 270, 153, 288, 160, 282, 159, 271" href="machinho" />
                        <area shape="poly" coords="182, 261, 180, 271, 176, 276, 184, 285, 190, 274, 194, 269, 192, 264" href="machinho" />
                        <area shape="poly" coords="357, 298, 351, 312, 373, 315, 377, 309" href="casco" />
                        <area shape="poly" coords="330, 285, 324, 297, 349, 298, 351, 294, 348, 291" href="casco" />
                        <area shape="poly" coords="361, 291, 356, 298, 376, 308, 378, 304" href="coroa" />
                        <area shape="poly" coords="331, 278, 330, 284, 349, 291, 351, 285" href="coroa" />
                        <area shape="poly" coords="365, 287, 362, 293, 378, 304, 379, 298" href="quartela" />
                        <area shape="poly" coords="336, 271, 331, 278, 350, 287, 348, 280" href="quartela" />
                        <area shape="poly" coords="378, 273, 374, 291, 380, 292, 384, 287, 388, 281, 387, 271" href="machinho" />
                        <area shape="poly" coords="368, 272, 366, 287, 380, 293, 382, 286, 387, 281, 385, 271" href="boleto" />
                        <area shape="poly" coords="348, 264, 348, 280, 358, 274, 360, 270, 359, 263" href="machinho" />
                        <area shape="poly" coords="338, 264, 336, 271, 349, 281, 355, 274, 359, 269, 357, 262" href="boleto" />
                        <area shape="poly" coords="365, 242, 367, 260, 367, 269, 384, 270, 386, 243" href="canela" />
                        <area shape="poly" coords="337, 239, 338, 250, 338, 263, 356, 263, 355, 238" href="canela" />
                        <area shape="poly" coords="329, 222, 333, 227, 336, 238, 355, 237, 355, 227, 350, 213" href="jarrete" />
                        <area shape="poly" coords="355, 213, 358, 226, 363, 234, 365, 241, 384, 242, 386, 236, 387, 224, 387, 215, 385, 211" href="jarrete" />
                        <area shape="poly" coords="316, 193, 319, 202, 330, 220, 352, 212, 343, 203, 332, 183" href="perna" />
                        <area shape="poly" coords="332, 183, 343, 202, 353, 213, 383, 210, 373, 196, 366, 183, 365, 176, 349, 176, 338, 177" href="perna" />
                        <area shape="poly" coords="184, 212, 183, 221, 193, 222, 194, 210" href="castanha" />
                        <area shape="poly" coords="162, 285, 158, 295, 158, 299, 182, 302, 180, 294" href="casco" />
                        <area shape="poly" coords="134, 296, 127, 307, 149, 310, 156, 303" href="casco" />
                        <area shape="poly" coords="165, 281, 162, 285, 180, 294, 179, 287" href="coroa" />
                        <area shape="poly" coords="135, 287, 130, 294, 137, 295, 155, 302, 154, 297" href="coroa" />
                        <area shape="poly" coords="167, 273, 165, 280, 180, 288, 182, 282" href="quartela" />
                        <area shape="poly" coords="138, 283, 135, 287, 154, 297, 154, 291" href="quartela" />
                        <area shape="poly" coords="175, 261, 173, 267, 169, 273, 183, 280, 190, 274, 190, 262" href="boleto" />
                        <area shape="poly" coords="140, 270, 140, 279, 138, 283, 153, 291, 160, 282, 160, 270" href="boleto" />
                        <area shape="poly" coords="175, 238, 174, 260, 191, 262, 193, 238" href="canela" />
                        <area shape="poly" coords="141, 238, 141, 262, 141, 269, 159, 270, 163, 236" href="canela" />
                        <area shape="poly" coords="173, 222, 173, 236, 193, 238, 193, 223" href="joelho" />
                        <area shape="poly" coords="142, 219, 141, 235, 161, 235, 165, 219" href="joelho" />
                        <area shape="poly" coords="169, 190, 173, 221, 194, 222, 195, 199, 201, 185, 174, 180, 170, 183" href="antebraco" />
                        <area shape="poly" coords="116, 135, 121, 126, 160, 60, 166, 65, 163, 70, 160, 77, 166, 91, 177, 94, 186, 95, 175, 119, 173, 134, 172, 157, 148, 161, 151, 150, 149, 139, 142, 128, 134, 124, 121, 127" href="espadua" />
                        <area shape="poly" coords="165, 197, 157, 168, 172, 158, 174, 173, 171, 183" href="codilho" />
                        <area shape="poly" coords="138, 177, 144, 168, 148, 161, 172, 158, 170, 171, 175, 175, 174, 179, 168, 187, 165, 218, 142, 217, 134, 179" href="antebraco" />
                        <area shape="poly" coords="116, 137, 121, 126, 134, 124, 142, 129, 149, 138, 152, 150, 149, 160, 144, 169, 137, 179, 133, 177, 126, 166" href="peito" />
                        <area shape="poly" coords="316, 190, 329, 182, 319, 176, 314, 168, 303, 172" href="coxa" />
                        <area shape="poly" coords="316, 148, 321, 163, 313, 167, 321, 176, 327, 181, 337, 179, 348, 177, 366, 175, 365, 163, 365, 158, 369, 145, 361, 141, 349, 140, 329, 142" href="coxa" />
                        <area shape="poly" coords="299, 115, 303, 141, 309, 144, 315, 148, 329, 143, 348, 140, 361, 140, 347, 134, 345, 123, 345, 112, 330, 103, 327, 109, 321, 115, 310, 116" href="anca" />
                        <area shape="poly" coords="172, 158, 173, 135, 175, 119, 185, 95, 192, 94, 204, 98, 218, 101, 233, 102, 256, 100, 257, 113, 257, 131, 256, 157, 249, 161, 219, 160, 205, 161" href="costado" />
                        <area shape="poly" coords="294, 97, 292, 107, 298, 115, 303, 141, 296, 141, 289, 145, 280, 145, 273, 148, 263, 157, 256, 158, 257, 131, 257, 114, 256, 100, 282, 97" href="flanco" />
                        <area shape="poly" coords="173, 181, 174, 174, 171, 170, 170, 162, 171, 160, 205, 161, 210, 171, 217, 181, 200, 184" href="cilhadouro" />
                        <area shape="poly" coords="293, 163, 287, 158, 294, 153, 312, 166, 305, 173" href="virilha" />
                        <area shape="poly" coords="214, 180, 209, 170, 206, 162, 221, 162, 236, 161, 250, 162, 263, 159, 273, 150, 280, 146, 289, 148, 288, 156, 292, 162, 272, 168, 235, 181" href="abdomen" />
                        <area shape="poly" coords="294, 97, 292, 106, 300, 114, 310, 116, 320, 115, 327, 109, 330, 105, 320, 100, 312, 96, 305, 93" href="pontaDaAnca" />
                        <area shape="poly" coords="284, 148, 296, 142, 306, 143, 314, 149, 320, 161, 312, 167, 301, 160, 292, 154" href="soldra" />
                        <area shape="poly" coords="345, 111, 346, 123, 347, 133, 354, 136, 368, 145, 370, 132, 375, 122, 371, 111, 374, 101, 364, 90, 356, 104" href="nadega" />
                        <area shape="poly" coords="310, 96, 319, 100, 332, 106, 346, 110, 357, 105, 365, 90, 351, 78, 337, 72, 308, 67" href="garupa" />
                        <area shape="poly" coords="256, 100, 280, 97, 299, 96, 307, 94, 309, 70, 285, 71, 254, 75" href="lombo" />
                        <area shape="poly" coords="193, 94, 204, 99, 218, 100, 235, 102, 253, 100, 254, 78, 246, 79, 227, 78, 207, 73" href="dorso" />
                        <area shape="poly" coords="4, 71, 13, 61, 43, 32, 52, 20, 53, 4, 57, 3, 64, 8, 67, 2, 78, 19, 79, 24, 105, 31, 144, 51, 160, 60, 168, 69, 181, 72, 196, 73, 211, 79, 244, 81, 284, 72, 309, 70, 333, 73, 349, 79, 363, 90, 375, 104, 386, 127, 388, 153, 393, 212, 388, 216, 388, 223, 386, 237, 383, 244, 384, 270, 386, 280, 383, 287, 377, 298, 375, 315, 350, 313, 349, 298, 325, 298, 330, 280, 336, 270, 337, 250, 333, 227, 319, 201, 305, 171, 293, 162, 269, 170, 234, 182, 197, 186, 195, 198, 192, 271, 184, 279, 180, 288, 181, 301, 153, 300, 148, 309, 126, 309, 130, 298, 141, 275, 140, 210, 133, 177, 124, 165, 115, 139, 108, 118, 94, 101, 85, 89, 81, 82, 66, 80, 47, 83, 30, 87, 20, 98, 8, 94, 1, 85" href="ladoEsquerdo" />
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
