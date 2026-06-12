


function Cabecalho() {
    return (
        <header className="bg-barra-nav relative flex items-center p-1">
            <div className="flex justify-center items-center w-29.75 h-29.75 rounded-[90px] bg-laranja" >
                <img
                    className="w-23.75 h-18.75"
                    src="/LogoAPASFAP.png"
                    alt="logo apasfap"></img>
            </div>
            <nav className="absolute left-1/2 flex items-center gap-12.5 -translate-x-1/2 ">
                <a className="no-underline text-links text-[20px] font-bold text-black" href="#conheca" target="_blank" rel="noopener noreferrer">Conheça o projeto</a>
                <a className="no-underline text-links text-[20px] font-bold  text-black" href="#" target="_blank" rel="noopener noreferrer">Como ajudar?</a>
                <a className="no-underline text-links text-[20px] font-bold  text-black" href="#" target="_blank" rel="noopener noreferrer">Pontos de Coleta</a>
                <a className="no-underline text-links text-[20px] font-bold  text-black" href="#" target="_blank" rel="noopener noreferrer">Contato</a>
            </nav>
        </header>
    )
}

export default Cabecalho 