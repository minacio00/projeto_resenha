import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import resize from "../helpers/resizeMap";
import { auth, db } from '../firebase-config';
import { addDoc, collection, getDocs } from "firebase/firestore";


async function fetchStates() {
    // Exemplo com IBGE API: https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome
    const resp = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome");
    return resp.json();
}
async function fetchCities(stateId) {
    // IBGE API: https://servicodados.ibge.gov.br/api/v1/localidades/estados/{UF}/municipios
    if (!stateId) return [];
    const resp = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`);
    return resp.json();
}

const Equideo = () => {
    const [nome, setNome] = useState("");
    const [sexo, setSexo] = useState("");
    const [cor, setCor] = useState("");
    const [idade, setIdade] = useState("")
    const [subcor, setSubcor] = useState("");
    const [especie, setEspecie] = useState("")
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [proprietarioId, setProprietarioId] = useState("");
    const [proprietarios, setProprietarios] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        resize(800);
        // Busca proprietários
        const fetchProprietarios = async () => {
            const snapshot = await getDocs(collection(db, "proprietarios"));
            setProprietarios(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        fetchProprietarios();
        // Busca estados do Brasil (IBGE)
        fetchStates().then(setStates);
    }, []);

    useEffect(() => {
        // Busca cidades do estado selecionado
        if (estado) {
            fetchCities(estado).then(setCities);
        } else {
            setCities([]);
        }
    }, [estado]);

    const saveAnimal = async (e) => {
        e.preventDefault();
        if (!proprietarioId) {
            alert("Selecione um proprietário.");
            return;
        }
        const animaisRef = collection(db, "animais");
        const newDoc = await addDoc(animaisRef, {
            Nome: nome,
            Sexo: sexo,
            Cor: cor,
            Idade: idade,
            Subcor: subcor,
            Especie: especie,
            Cidade: cidade,
            Estado: estado,
            vet: auth.currentUser.uid,
            proprietarioId: proprietarioId
        });
        navigate('/geral', { replace: false });
    };

    return (
        <>
            <header className="flex-col space-y-6 bg-indigo-600 h-12 indent-10 text-white font-bold text-left">
                <div className='flex'>
                    <Link to={"/controle"}>
                        <ArrowLeftIcon className="w-6 h-6 m-3 hover:cursor-pointer" />
                    </Link>
                    <span className='p-3'>
                        Dados do equídeo
                    </span>
                </div>
            </header>
            <form className="mt-8 space-y-6" onSubmit={saveAnimal}>
                <input type="hidden" name="remember" defaultValue={true} />
                <div className="space-y-4 px-4">
                    <div>
                        <input
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Nome do animal" name="nome" id="nome"
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                            required
                        />
                    </div>
                    <div className="rounded-md flex justify-between relative w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                        <span className="text-gray-500 text-base">Sexo:</span>
                        <div className="space-x-1">
                            <label>Macho</label>
                            <input type="radio"
                                name="sexo"
                                id="macho"
                                value={"macho"}
                                checked={sexo === "macho"}
                                onChange={(e) => setSexo(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-x-1">
                            <label>Fêmea</label>
                            <input type="radio"
                                name="sexo"
                                id="femea"
                                value={"femea"}
                                checked={sexo === "femea"}
                                onChange={(e) => setSexo(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Idade do animal"
                            name="idade"
                            id="idade"
                            type="number"
                            min="0"
                            onChange={(e) => setIdade(e.target.value)}
                            value={idade}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border-b border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Espécie"
                            name="especie"
                            id="especie"
                            value={especie}
                            onChange={(e) => setEspecie(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Proprietário</label>
                        <select
                            className="w-full border rounded-md px-3 py-2 bg-gray-100"
                            value={proprietarioId}
                            onChange={e => setProprietarioId(e.target.value)}
                            required
                        >
                            <option value="">Selecione o proprietário</option>
                            {proprietarios.map(p => (
                                <option key={p.id} value={p.id}>
                                    {p.nome} {p.Cidade ? `(${p.Cidade}, ${p.Estado})` : ""}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="flex-1 min-w-[160px]">
                            <label className="block text-sm text-gray-700 mb-1">Estado</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 bg-gray-100"
                                value={estado}
                                onChange={e => setEstado(e.target.value)}
                                required
                            >
                                <option value="">Selecione um estado</option>
                                {states.map(s => (
                                    <option key={s.id} value={s.id}>{s.nome}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-1 min-w-[160px]">
                            <label className="block text-sm text-gray-700 mb-1">Cidade</label>
                            <select
                                className="w-full border rounded-md px-3 py-2 bg-gray-100"
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                                required
                                disabled={!estado}
                            >
                                <option value="">Selecione uma cidade</option>
                                {cities.map(c => (
                                    <option key={c.id} value={c.nome}>{c.nome}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:gap-4 items-stretch max-w-screen-sm px-1">
                        <div className="flex-1">
                            <label className="block text-sm text-gray-700 mb-1">Cor</label>
                            <input
                                className="border rounded-md px-3 py-2 bg-gray-100 w-full"
                                placeholder="Cor"
                                value={cor}
                                onChange={e => setCor(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm text-gray-700 mb-1">Sub-cor</label>
                            <input
                                className="border rounded-md px-3 py-2 bg-gray-100 w-full"
                                placeholder="Sub-cor"
                                value={subcor}
                                onChange={e => setSubcor(e.target.value)}
                            />
                        </div>
                    </div>

                </div>
                <div>
                    <button
                        className="group relative border w-1/2 justify-center py-2 px-4 border-transparent font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        type="submit"
                    >
                        Cadastrar animal
                    </button>
                </div>
            </form>
        </>
    )
}
export default Equideo;
