function Coletas({ coletas }) {
    return (
        <section>
            <div className=" w-40 h-80 bg-amarelo rounded-3xl border-2 border-dashed border-marrom p-6 flex flex-col justify-center items-center gap-6 lg:gap-2 lg:flex lg:items-center lg:flex-col" >
                <img className="w-24 h-24 object-contain" src={coletas.capa}></img>
                <p className="text-center font-black  leading-7">{coletas.descricao} </p>
            </div>
        </section>
    )
}

export default Coletas

