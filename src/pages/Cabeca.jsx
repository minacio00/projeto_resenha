// import resize from "../helpers/resizeMap"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, TrashIcon, PlusIcon } from "@heroicons/react/solid"

const resize =  (coords, originalWidth) => { 
    var length = coords.length;
    for (var n = 0; n < length; n++) {
        coords[n] = coords[n].split(',');
    }
    // var  x = document.body.clientWidth / originalWidth;
    var wd =  document.getElementById("cabeca").width | 191;
    var  x = wd / originalWidth
    console.log(document.getElementById("cabeca").width)
    var clen = coords.length;
    // console.log(clen)
    for(var n = 0; n<length; n++){
        clen = coords[n].length;
        for (var m = 0; m < clen; m++) {
            coords[n][m] *= x;
        }
        coords[n] = coords[n].join(',');
    }
    // console.log(coords)
    return coords;
 }

export const Cabeca = ({hidden}) => {
    const [isHidden, setisHidden] = useState(hidden)
    const navigate = useNavigate();
    const [coordsState, setcoordsState] = useState(["46,391,93,389,96,398,94,495,66,495,41,470,38,462,69,468,60,428,61,420,48,422,42,418,45,457,38,457,34,418",
    "99,389,99,495,126,494,137,486,147,472,146,471,151,464,115,468,121,457,127,432,133,423,147,421,144,445,144,459,153,459,155,419,145,405,142,387",
    "65,465,47,462,45,423,56,426",
    "132,427,144,425,139,463,122,465",
    "95,174,95,385,46,388,36,313,5,184,21,184,29,177,36,175",
    "100,174,156,173,175,185,183,184,144,386,100,386",
    "27,125,30,108,60,81,83,62,94,61,97,67,96,167,92,170,32,171,33,160,22,158,15,156",
    "99,61,112,61,128,77,137,83,158,110,161,120,164,134,178,157,164,156,161,169,148,169,100,170",
    "12,161,28,161,28,173,20,180,7,179",
    "165,161,182,160,187,178,173,180,163,173",
    "27,109,19,76,19,41,31,3,41,2,57,43,60,78",
    "133,75,136,45,145,29,153,4,165,2,176,46,175,62,173,84,163,111"])
   const handleClick = (e)=>{
        e.preventDefault();
        setisHidden(!isHidden)
        alert(e.target.attributes.href.textContent)
    }
    const saveMarks = (e) => {
        // salva marcaçoes no banco
        e.preventDefault();
        navigate("/geral",{replace:false})
    }
    // const coords = ["46,391,93,389,96,398,94,495,66,495,41,470,38,462,69,468,60,428,61,420,48,422,42,418,45,457,38,457,34,418",
    // "99,389,99,495,126,494,137,486,147,472,146,471,151,464,115,468,121,457,127,432,133,423,147,421,144,445,144,459,153,459,155,419,145,405,142,387",
    // "65,465,47,462,45,423,56,426",
    // "132,427,144,425,139,463,122,465",
    // "95,174,95,385,46,388,36,313,5,184,21,184,29,177,36,175",
    // "100,174,156,173,175,185,183,184,144,386,100,386",
    // "27,125,30,108,60,81,83,62,94,61,97,67,96,167,92,170,32,171,33,160,22,158,15,156",
    // "99,61,112,61,128,77,137,83,158,110,161,120,164,134,178,157,164,156,161,169,148,169,100,170",
    // "12,161,28,161,28,173,20,180,7,179",
    // "165,161,182,160,187,178,173,180,163,173",
    // "27,109,19,76,19,41,31,3,41,2,57,43,60,78",
    // "133,75,136,45,145,29,153,4,165,2,176,46,175,62,173,84,163,111"]
    const newCoords = 0;
    return (
        <>
            <header className=" flex-col space-y-6 bg-indigo-600 h-12 indent-10
                    text-white font-bold text-left">
                        <div className='flex'>
                            <Link to={'/geral'}>
                                <ArrowLeftIcon className="w-6 h-6 m-3 hover:cursor-pointer" />
                            </Link>
                            <span className='p-3'>
                                Dados do equídeo
                            </span>
                        </div>
            </header>
            {/* max-width="191" */}
            <section className="flex-col space-y-4">
                <div>
                    <img id="cabeca" className={"mx-auto max-w-[191px]"} onLoad={() => setcoordsState(resize(coordsState,191))} src="detalhes_cabeca.png" alt="visaoGeral" useMap="#map_cabeca" height="501" />
                    <map name="map_cabeca">
                        <area shape="poly" onClick={handleClick} coords={coordsState[0]} href="focinhoDireito" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[1]} href="focinhoEsquerdo" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[2]} href="narinaDireita" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[3]} href="narinaEsquerda" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[4]} href="chanfroDireito" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[5]} href="chanfroEsquerdo" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[6]} href="fronteDireita" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[7]} href="fronteEsquerda" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[8]} href="olhoDireito" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[9]} href="olhoEsquerdo" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[10]} href="orelhaDireira" />
                        <area shape="poly" onClick={handleClick} coords={coordsState[11]} href="orelhaEsquerda" />
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
                        onClick={ (e) => saveMarks(e) /* deve salvar no firebase daí voltar para equideo */}>
                           Salvar marcações
                        </button>
                    </div>
            </section>    
        </>
    )
}

