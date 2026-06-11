import './Cabecalho.css'


function Cabecalho() {
    return (
        <header className="cabecalho">
            <div className="logo-cabecalho">
                <img src="/LogoAPASFAP.png" alt="logo apasfap"></img>
            </div>
            <nav className="links">
                <a href="#conheca" target="_blank" rel="noopener noreferrer">Conheça o projeto</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Como ajudar?</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Pontos de Coleta</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Contato</a>
            </nav>
        </header>
    )
}

export default Cabecalho 