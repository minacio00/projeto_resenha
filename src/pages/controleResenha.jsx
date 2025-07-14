import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import { Sidebar } from "../components/Sidebar";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth, db } from '../firebase-config';
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, limit, query, updateDoc, where, deleteDoc } from 'firebase/firestore';

const ControleResenha = () => {
    const [proprietarios, setProprietarios] = useState([]);
    const [animais, setAnimais] = useState([]);
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    // Modal states
    const [modalOpen, setModalOpen] = useState(false);
    const [animalEdit, setAnimalEdit] = useState(null);
    const [editForm, setEditForm] = useState({ Nome: "", Cor: "", SubCor: "" });

    // Filter states
    const [selectedProprietario, setSelectedProprietario] = useState("");
    const [selectedAnimal, setSelectedAnimal] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                navigate('/', { replace: true });
            } else {
                setUser(currentUser);
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    // Buscar dados só quando user estiver pronto
    useEffect(() => {
        if (!user) return;
        const fetchData = async () => {
            setLoading(true);

            const proprietariosRef = collection(db, "proprietarios");
            const proprietariosQuery = query(
                proprietariosRef,
                where("vet", '==', user.uid),
                limit(100)
            );
            const animaisRef = collection(db, "animais");
            const animaisQuery = query(
                animaisRef,
                where("vet", '==', user.uid),
                limit(100)
            );

            const [proprietariosSnap, animaisSnap] = await Promise.all([
                getDocs(proprietariosQuery),
                getDocs(animaisQuery)
            ]);

            setProprietarios(proprietariosSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setAnimais(animaisSnap.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
        };
        fetchData();
    }, [user]);

    const LogOut = async () => {
        try {
            if (auth.currentUser) {
                await signOut(auth);
            }
        } catch (e) {
            console.log(e)
        }
    }

    // Filtra animais conforme os filtros selecionados
    const animaisFiltrados = animais
        .filter(animal => !selectedProprietario || animal.proprietarioId === selectedProprietario)
        .filter(animal => !selectedAnimal || animal.id === selectedAnimal);

    const animaisDoProprietario = selectedProprietario
        ? animais.filter(animal => animal.proprietarioId === selectedProprietario)
        : animais;

    // Modal handlers
    const handleEdit = (animal) => {
        setAnimalEdit(animal);
        setEditForm({
            Nome: animal.Nome || "",
            Cor: animal.Cor || "",
            SubCor: animal.SubCor || "",
        });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setAnimalEdit(null);
    };

    const handleSave = async () => {
        try {
            await updateDoc(doc(db, "animais", animalEdit.id), {
                Nome: editForm.Nome,
                Cor: editForm.Cor,
                SubCor: editForm.SubCor,
            });
            setAnimais(animais.map(a => a.id === animalEdit.id ? { ...a, ...editForm } : a));
            closeModal();
        } catch (err) {
            alert("Erro ao salvar: " + err.message);
        }
    };

    const handleDelete = async (animalId) => {
        if (window.confirm("Tem certeza que deseja excluir este animal?")) {
            try {
                await deleteDoc(doc(db, "animais", animalId));
                setAnimais(animais.filter(animal => animal.id !== animalId));
            } catch (err) {
                alert("Erro ao excluir: " + err.message);
            }
        }
    };

    if (isLoading) {
        return <div className="App">Carregando...</div>;
    }
    return (
        <div className="flex-col space-y-6">
            <header className="bg-indigo-600 h-12 indent-10 text-white font-bold text-left">
                <div className='flex'>
                    <Sidebar />
                    <span className='p-3'>
                        Controle de Resenha
                    </span>
                </div>
            </header>
            <section className="space-y-6">
                <a className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={() => LogOut()}>
                    {auth.currentUser?.email} <br />
                    log out
                </a>
                {/* Filtros */}
                <div className="flex items-center justify-center space-x-4 px-1">
                    <p className="w-20">Proprietário</p>
                    <select
                        className="overflow-hidden w-80 border-0 rounded-md bg-gray-100"
                        value={selectedProprietario}
                        onChange={e => {
                            setSelectedProprietario(e.target.value);
                            setSelectedAnimal("");
                        }}
                    >
                        <option value="">Todos</option>
                        {proprietarios.map(proprietario => (
                            <option key={proprietario.id} value={proprietario.id}>{proprietario.nome}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center justify-center space-x-4 px-1">
                    <p className="w-20">Nome do animal</p>
                    <select
                        className="overflow-hidden w-80 border-0 rounded-md bg-gray-100"
                        value={selectedAnimal}
                        onChange={e => setSelectedAnimal(e.target.value)}
                        disabled={animaisDoProprietario.length === 0}
                    >
                        <option value="">Todos</option>
                        {animaisDoProprietario.map(animal => (
                            <option key={animal.id} value={animal.id}>{animal.Nome}</option>
                        ))}
                    </select>
                </div>
                {/* Outros filtros, se quiser */}
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
                {/* Tabela */}
                <div>
                    <table className="table-auto border border-black w-full text-xs">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border-2 border-black">Proprietário</th>
                                <th className="border-2 border-black shrink">Nome do <br /> animal</th>
                                <th className="border-2 border-black">Cor</th>
                                <th className="border-2 border-black">Sub-cor</th>
                                <th className="border-2 border-black">Editar</th>
                                <th className="border-2 border-black">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {animaisFiltrados.map(animal => (
                                <tr key={animal.id}>
                                    <td className='border-2 border-black'>
                                        {proprietarios.find(p => p.id === animal.proprietarioId)?.nome ?? 'N/A'}
                                    </td>
                                    <td className='border-2 border-black'>{animal.Nome}</td>
                                    <td className='border-2 border-black'>{animal.Cor ?? 'N/A'}</td>
                                    <td className='border-2 border-black'>{animal.SubCor ?? 'N/A'}</td>
                                    <td className='border-2 border-black content-center px-1 w-2'>
                                        <PencilIcon className='w-5 h-5 cursor-pointer' onClick={() => handleEdit(animal)} />
                                    </td>
                                    <td className='border-2 border-black px-1 w-2'>
                                        <TrashIcon className='w-5 h-5 cursor-pointer text-red-500' onClick={() => handleDelete(animal.id)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {/* Modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm relative">
                        <button
                            className="absolute top-2 right-3 text-gray-600 text-2xl"
                            onClick={closeModal}
                            title="Fechar"
                        >
                            ×
                        </button>
                        <h2 className="text-lg font-bold mb-4">Editar Animal</h2>
                        <form className="space-y-4" onSubmit={e => { e.preventDefault(); handleSave(); }}>
                            <div>
                                <label className="block text-xs mb-1">Nome</label>
                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    value={editForm.Nome}
                                    onChange={e => setEditForm(f => ({ ...f, Nome: e.target.value }))}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs mb-1">Cor</label>
                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    value={editForm.Cor}
                                    onChange={e => setEditForm(f => ({ ...f, Cor: e.target.value }))}
                                />
                            </div>
                            <div>
                                <label className="block text-xs mb-1">SubCor</label>
                                <input
                                    className="w-full border rounded p-2"
                                    type="text"
                                    value={editForm.SubCor}
                                    onChange={e => setEditForm(f => ({ ...f, SubCor: e.target.value }))}
                                />
                            </div>
                            <div className="flex justify-end pt-2 space-x-3">
                                <button
                                    type="button"
                                    className="bg-gray-200 text-gray-700 px-4 py-1 rounded"
                                    onClick={closeModal}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-indigo-600 text-white px-4 py-1 rounded"
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ControleResenha;
