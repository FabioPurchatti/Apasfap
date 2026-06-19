function EntreEmContato() {
    return (
        <section className=" bg-barra-nav w-full py-12 flex flex-col lg:flex-row lg:justify-center lg:gap-16 lg:items-center max-w-7xl mx-auto">

            <div className=" flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2 max-w-lg mb-8 lg:mb-0">
                <h2 className=" text-amarelo text-5xl lg:6xl mb-6 font-black">Entre em Contato!</h2>
                <p className="font-bold text-lg leading-relaxed text-center">Entre em contato com a nossa equipe
                    e saiba como apoiar a causa, esclarecer
                    dúvidas ou contribuir para que mais
                    animais recebam amor e cuidado.
                </p>
            </div>


            <div className="rounded-3xl p-6 bg-amarelo w-full max-w-md lg:w-1/2 shadow-sm">
                <form className="flex flex-col gap-4 w-full">
                    <input
                        className="w-full p-3 bg-barra-nav border-2 border-dashed border-white rounded-lg uppercase font-bold text-black placeholder-gray-500"
                        type="text"
                        name="inNome"
                        placeholder="Nome"
                    />
                    <input
                        className="w-full p-3 bg-barra-nav border-2 border-dashed border-white rounded-lg uppercase font-bold text-black placeholder-gray-500"
                        type="text"
                        name="inTelefone"
                        placeholder="Telefone"
                    />
                    <input
                        className="w-full p-3 bg-barra-nav border-2 border-dashed border-white rounded-lg uppercase font-bold text-black placeholder-gray-500"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                    />
                    <input
                        className="w-full p-3 bg-barra-nav border-2 border-dashed border-white rounded-lg uppercase font-bold text-black placeholder-gray-500"
                        type="text"
                        name="assunto"
                        placeholder="Assunto"
                    />
                    <textarea
                        className="w-full p-3 h-32 bg-barra-nav border-2 border-dashed border-white rounded-lg uppercase font-bold text-black placeholder-gray-500 resize-none"
                        name="mensagem"
                        placeholder="Mensagem"
                    />


                    <button className="w-fit mx-auto mt-2 cursor-pointer py-3 px-6 uppercase text-barra-nav font-bold border-4 border-dashed rounded-xl bg-marrom border-marrom-dark hover:scale-105 transition-transform">
                        Enviar Mensagem
                    </button>
                </form>
            </div>

        </section>
    );
}

export default EntreEmContato;

