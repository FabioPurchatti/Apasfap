
import ImagemGato from "../../../../public/Gatopng.png"
import Patas from "../../../../public/Patas.png"

function AceitamosTampinhas() {
    return (
        <section className="bg-laranja py-10">
            {/* Título */}
            <div className="flex justify-center mt-8 py-5">
                <h2 className="text-3xl font-black text-barra-nav z-40  lg:text-6xl px-3">
                    Aceitamos tampinhas de:
                </h2>
            </div>

            {/* ESTE CONTAINER DIZ QUE A CAIXA E O GATO FICAM LADO A LADO */}
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:ml-17">

                {/* Caixa Branca (Estrutura isolada apenas para a lista) */}
                <div className="relative flex justify-center items-center bg-barra-nav border-2 border-dashed border-marrom rounded-4xl p-7 w-80 lg:w-[500px]">
                    <ul className="text-marrom text-xl leading-relaxed lg:leading-loose">
                        <li>Garrafas PET</li>
                        <li>Produtos de limpeza</li>
                        <li>Pacotes de alimento</li>
                        <li>Cosméticos e higiene</li>
                        <li>Caixinhas longa vida</li>
                    </ul>
                </div>

                {/* Caixa do Gato (Ao lado da caixa branca no desktop com tamanho médio) */}
                <div className="hidden lg:block w-96 h-96 overflow-hidden">
                    <img
                        className="w-full h-full object-contain object-center -ml-50 -my-40 scale-200"
                        src={ImagemGato}
                        alt="Foto de um gato"
                    />
                </div>
                <div className="lg:hidden ">
                    <img className="w-full h-full object-contain scale-130 -my-120" src={Patas} alt="Imagem Patas"></img>
                </div>

            </div>
        </section>
    )
}

export default AceitamosTampinhas







/*import ImagemGato from "../../../../public/Gatopng.png"

function AceitamosTampinhas() {
    return (
        <section className=" bg-laranja py-10  ">
            <div className="flex justify-center mt8">
                <h2 className="text-3xl font-black text-barra-nav lg:text-6xl">Aceitamos tampinhas de:</h2>
            </div>
            <div className=" flex flex-center items-center bg-barra-nav border-2 border-dashed border-marrom rounded-4xl p-7 mt-8 w-80 lg:justify-center lg:items-center lg:gap-12 lg:flex-row">
                <ul className="text-marrom text-xl leading-relaxed lg:leading-loose" >
                    <li>Garrafas PET</li>
                    <li>Produtos de limpeza</li>
                    <li>Pacotes de alimento</li>
                    <li>Cosméticos e higiene</li>
                    <li>Caixinhas longa vida</li>
                </ul>
            </div>
            <div className="hidden lg:block  w-100  overflow-hidden">
                <img className="w-full h-full object-contain object-center" src={ImagemGato}></img>
            </div>
        </section>
    )
}

export default AceitamosTampinhas*/

