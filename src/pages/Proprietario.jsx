import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const phonePattern = /^(\(?\d{2}\)?\s?\d{4,5}-?\d{4}|\d{10,11})$/;

const Proprietario = () => {
  const [nome, setNome] = useState("");
  const [phone, setPhone] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) navigate("/");
    });
    return () => unsubscribe();
  }, [navigate]);

  // Validação de campos
  const validate = () => {
    const newErrors = {};
    if (!nome.trim()) newErrors.nome = "Nome é obrigatório";
    if (!phone.match(phonePattern)) newErrors.phone = "Telefone inválido. Use (99) 99999-9999";
    if (!rua.trim()) newErrors.rua = "Rua é obrigatória";
    if (!bairro.trim()) newErrors.bairro = "Bairro é obrigatório";
    // Complemento é opcional
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveProprietario = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const proprietariosRef = collection(db, "proprietarios");
      await addDoc(proprietariosRef, {
        nome,
        telefone: phone,
        Rua: rua,
        Bairro: bairro,
        Complemento: complemento,
        vet: auth.currentUser?.uid || "",
      });
      navigate(-1);
    } catch (err) {
      alert("Erro ao cadastrar proprietário. Tente novamente.");
    }
  };

  return (
    <>
      <header className="flex-col space-y-6 bg-indigo-600 h-12 indent-10 text-white font-bold text-left">
        <div className="flex">
          <Link to={"/controle"}>
            <ArrowLeftIcon className="w-6 h-6 m-3 hover:cursor-pointer" />
          </Link>
          <span className="p-3">Dados do Proprietário</span>
        </div>
      </header>
      <main>
        <form className="mt-8 space-y-6" onSubmit={saveProprietario} autoComplete="off">
          <div className="space-y-4 px-4">
            <div>
              <input
                className={`appearance-none rounded-md block w-full px-3 py-2 border-b placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                ${errors.nome ? "border-red-500" : "border-gray-300"}`}
                placeholder="Nome do Proprietário"
                name="nome"
                id="nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
              {errors.nome && <span className="text-red-500 text-xs">{errors.nome}</span>}
            </div>
            <div>
              <input
                className={`appearance-none rounded-md block w-full px-3 py-2 border-b placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                placeholder="Telefone (99) 99999-9999"
                name="telefone"
                id="telefone"
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                pattern="\(?\d{2}\)?\s?\d{4,5}-?\d{4}"
                required
                maxLength={15}
              />
              {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
            </div>
            <div>
              <input
                className={`appearance-none rounded-md block w-full px-3 py-2 border-b placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                ${errors.rua ? "border-red-500" : "border-gray-300"}`}
                placeholder="Rua"
                name="rua"
                id="rua"
                value={rua}
                onChange={e => setRua(e.target.value)}
                required
              />
              {errors.rua && <span className="text-red-500 text-xs">{errors.rua}</span>}
            </div>
            <div>
              <input
                className={`appearance-none rounded-md block w-full px-3 py-2 border-b placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
                ${errors.bairro ? "border-red-500" : "border-gray-300"}`}
                placeholder="Bairro"
                name="bairro"
                id="bairro"
                value={bairro}
                onChange={e => setBairro(e.target.value)}
                required
              />
              {errors.bairro && <span className="text-red-500 text-xs">{errors.bairro}</span>}
            </div>
            <div>
              <input
                className="appearance-none rounded-md block w-full px-3 py-2 border-b placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
                placeholder="Complemento (opcional)"
                name="complemento"
                id="complemento"
                value={complemento}
                onChange={e => setComplemento(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              className="group relative border justify-center py-2 px-4 border-transparent font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Cadastrar proprietário
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Proprietario;
