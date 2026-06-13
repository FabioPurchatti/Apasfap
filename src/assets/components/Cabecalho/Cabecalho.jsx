
import { useState } from "react";

function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);



    return (
        <section className=" bg-rosa-claro lg:bg-barra-nav ">
            <nav className="relative flex items-center justify-between lg:relative lg:flex lg:items-center">

                {/*Logo*/}
                <div className="flex justify-center h-2p-2 bg-laranja rounded-[100px]">
                    <img className=" w-35  h-30 p-4" src="/LogoAPASFAP.png" alt="logo apasfap"></img>
                </div>



                <button className="lg:hidden"
                    onClick={() => {
                        setMenuAberto(!menuAberto);

                    }}
                >
                    <img className="w-18" src="/Hamburguer.png" alt="menu"></img>

                </button>

                <div className={`
                ${menuAberto ? "flex" : "hidden"} 
                flex-col 
                absolute 
                top-full 
                left-0 
                w-full 
                bg-rosa-claro 
                items-center
                gap-5 
                py-5 
                z-50

                lg:flex 
                lg:flex-row 
                lg:static 
                lg:w-auto
                lg:bg-transparent 
                lg:flex-1
                lg:justify-center
                lg:gap-30
                lg:text-2xl
                lg:font-semibold
                `}
                >
                    <a href="#conheca" target="_blank" rel="noopener noreferrer">Conheça o projeto</a>
                    <a href="#conheca" target="_blank" rel="noopener noreferrer">Como ajudar?</a>
                    <a href="#conheca" target="_blank" rel="noopener noreferrer">Pontos de coleta</a>
                    <a href="#conheca" target="_blank" rel="noopener noreferrer">Contato</a>
                </div>
            </nav>
        </section>
    )
}

export default Cabecalho

