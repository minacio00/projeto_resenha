
const ControleResenha = () => {

    return (
        <div className="flex-col space-y-8">
            <header className="bg-blue-600 h-12 p-3 indent-10
            text-white font-bold text-left">
                Controle de Resenha
            </header>
            <body className="space-y-4">
                <div className="flex items-center justify-center space-x-4 px-1">
                    <p className="w-20">Proprietário</p>
                    <select className="overflow-hidden w-80 border-0 rounded-md bg-gray-100">
                        <option value="fruit">teste teste testeteste teste</option>
                        <option value="vegetable">Vegetable</option>
                        <option value="meat">Meat</option>
                    </select>
                </div>
                <div className="flex items-center justify-center space-x-4 px-1">
                    <p className="w-20" >Animal</p>
                    <select className="overflow-hidden w-80 border-0 rounded-md bg-gray-100">
                        <option className="overflow-hidden" value="fruit">
                            animalimal 
                        </option>
                        <option value="vegetable">Vegetable</option>
                        <option value="meat">Meat</option>
                    </select>
                </div>
                {/* maybe this will break in big screens, fix it if u wanna */}
                <div className="flex items-center justify-between max-w-screen-sm px-1 space-y-6">
                    <p>Cor</p>
                    <select className="overflow-hidden border-0 rounded-md bg-gray-100">
                        <option value="azul">azul</option>
                    </select>

                    <p>Sub cor</p>
                    <select className="overflow-hidden border-0 rounded-md bg-gray-100">
                        <option value="azul">azul</option>
                    </select>
                </div>

                {/*TODO: adicionar ul no restante da pagina */}
            </body>
        </div>
    )
}

export default ControleResenha;