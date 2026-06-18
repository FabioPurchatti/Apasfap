function Coletas({ coletas }) {
    return (
        <section className="flex justify-center items-center ">
            <div className=" justify-center border-2 mx-30 my-3 p-1 bg-amarelo rounded-3xl border-dashed border-marrom lg:gap-2 lg:flex lg:items-center lg:flex-col" >
                <img className="max-w-full w-20 mx-8  " src={coletas.capa}></img>
                <p className="text-center font-black p-2 leading-6">{coletas.descricao} </p>
            </div>
        </section>
    )
}

export default Coletas

