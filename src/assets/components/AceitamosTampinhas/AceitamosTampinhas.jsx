function AceitamosTampinhas() {
    return (
        <section className=" relative max-w-full p-5  bg-laranja ">
            <div className="mb-5 text-3xl font-black text-barra-nav  lg:text-6xl lg:font-extrabold lg:p-5 lg:mx-20 ">
                <h2>Aceitamos tampinhas de:</h2>
            </div>
            <div className=" flex justify-center items-center  mx-15 my-2 text-1xl leading-7 font-normal text-marrom  bg-barra-nav border-2 border-marrom  border-dashed rounded-4xl sm:mx-60 lg:mx-120 lg:flex lg:justify-center items-center lg:leading-13 lg:text-4xl lg:p-13 lg:border-3">
                <ul className="p-7" >
                    <li>Garrafas PET</li>
                    <li>Produtos de limpeza</li>
                    <li>Pacotes de alimento</li>
                    <li>Cosméticos e higiene</li>
                    <li>Caixinhas longa vida</li>
                </ul>
            </div>
            <div className="absolute left-30 -right-5  top-19 sm:w-90 sm:left-100 lg:w-300 lg:-top-38 lg:left-81">
                <img className=" sm:max-w-full  lg:-top-210 lg:mr-100 lg:h-auto" src="/Gatopng.png" alt="Imagem gato"></img>
            </div>
        </section>
    )
}

export default AceitamosTampinhas

