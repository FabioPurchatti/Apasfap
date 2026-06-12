

function JunteTampinhas() {
    return (
        <section className="flex  justify-center items-center relative max-w-full bg-rosa-claro">
            <aside className="flex items-start justify-end flex-col leading-0.75 w-[40%] m-auto pl-[10%] font-bold">
                <p className="text-[50px] font-extrabold">Junte <span className="mx-40 bg-laranja border-10 font-extrabold border-laranja rounded-[50px] text-barra-nav">tampinhas,</span></p>
                <p className="text-[50px] font-extrabold my-20">Salve Vidas!</p>
                <p className="font-semibold leading-9 text-2xl">
                    Cada tampinha doada se<br />
                    transforma em alimento,<br />
                    medicamentos e amor para os,<br />
                    animais resgatados pela, <br />
                    APASFAP.
                </p>
            </aside>
            <aside className="w-[50%]">
                <img className="w-full h-150 object-cover" src="/Cachorro.jpg" alt="Cachorro" ></img>
            </aside>
        </section >
    )
}

export default JunteTampinhas