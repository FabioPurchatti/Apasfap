function AceitamosTampinhas() {
    return (
        <section className="max-w-full h-150 py-4  bg-laranja ">
            <div className="text-4xl font-black text-barra-nav p-3 lg:text-6xl lg:font-extrabold lg:p-5 lg:mx-20">
                <h2>Aceitamos tampinhas de:</h2>
            </div>
            <div className="w-fit mx-25 text-3xl p-4 leading-15 font-normal text-marrom  bg-barra-nav border-2 border-marrom  border-dashed rounded-4xl lg:p-13 lg:border-3">
                <ul className="p-2">
                    <li>Garrafas PET</li>
                    <li>Produtos de limpeza</li>
                    <li>Pacotes de alimento</li>
                    <li>Cosméticos e higiene</li>
                    <li>Caixinhas longa vida</li>
                </ul>
            </div>
            <div className="flex justify-center max-w-full">
                <img className="relative -top-80 max-w-full lg:-top-210 lg:mr-100 lg:h-auto" src="/Gatopng.png" alt="Imagem gato"></img>
            </div>
        </section>
    )
}

export default AceitamosTampinhas

