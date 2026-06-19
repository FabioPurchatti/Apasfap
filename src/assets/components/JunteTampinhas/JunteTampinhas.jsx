

function JunteTampinhas() {
    return (
        <section >
            <aside className="relative lg:flex lg:bg-rosa-claro">
                {/*Textos*/}
                <div className="absolute inset-0 flex flex-col items-center text-center my-15 lg:static lg:w-[50%] lg:justify-center lg:items-start lg:text-left lg:px-8">
                    <h1 className="font-black text-5xl leading-13 p-5 lg:text-6xl">
                        Junte <span className="block lg:inline text-barra-nav lg:bg-laranja lg:rounded-[60px] lg:px-4 ">tampinhas,</span>
                        <span className="block pt-3 lg:leading-loose lg:items-start lg:text-left">salve vidas!</span>
                    </h1>
                    <p className=" hidden lg:block -my-6  text-1xl lg:font-semibold lg:text-[25px] lg:ml-7">
                        Cada tampinha doada se<br />
                        transforma em alimento,<br />
                        medicamentos e amor para os,<br />
                        animais resgatados pela, <br />
                        APASFAP.
                    </p>

                </div>
                <div className="lg:w-[50%]">
                    {/*Imagem*/}
                    <img className="w-full h-screen object-cover" src="/Cachorro.jpg" alt="Cachorro"></img>
                </div>

            </aside>
        </section>
    )
}

export default JunteTampinhas