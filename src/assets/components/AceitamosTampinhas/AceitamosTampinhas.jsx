function AceitamosTampinhas() {
    return (
        <section className="max-w-full p-5 bg-laranja ">
            <div className="mb-5 text-3xl font-black text-barra-nav  lg:text-6xl lg:font-extrabold lg:p-5 lg:mx-20 ">
                <h2>Aceitamos tampinhas de:</h2>
            </div>
            <div className=" flex justify-items-start mx-14  text-1xl leading-7 font-normal text-marrom  bg-barra-nav border-2 border-marrom  border-dashed rounded-4xl sm:mx-60 lg:mx-120 lg:flex lg:justify-items-start  lg:leading-13 lg:text-4xl lg:p-13 lg:border-3">
                <ul className="p-7" >
                    <li>Garrafas PET</li>
                    <li>Produtos de limpeza</li>
                    <li>Pacotes de alimento</li>
                    <li>Cosméticos e higiene</li>
                    <li>Caixinhas longa vida</li>
                </ul>
            </div>
            <div className="absolute -bottom-338 sm:w-90 sm:left-64 sm:top-566 lg:w-300 lg:top-365 lg:left-81">
                <img className=" sm:max-w-full  lg:-top-210 lg:mr-100 lg:h-auto" src="/Gatopng.png" alt="Imagem gato"></img>
            </div>
        </section>
    )
}

export default AceitamosTampinhas

