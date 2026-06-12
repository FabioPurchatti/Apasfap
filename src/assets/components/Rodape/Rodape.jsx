

function Rodape() {
    return (
        <>
            <footer className="flex justify-between items-center m-auto max-w-full  bg-laranja ">
                <div className="flex items-center justify-center">
                    <h3 className="ml-13 leading-1 p-1 text-[20px] font-semibold text-barra-nav">Contatos oficiais</h3>
                    <img className="w-6 ml-13" src="/Instagram.png"></img>
                    <p className="ml-7 uppercase text-barra-nav">Ong APASFAP oficial ||     @onapasfapoficial </p>
                    <img className="w-8 ml-13" src="/Facebook.png"></img>
                    <p className="ml-7 uppercase text-barra-nav">Ong APASFAP Paulínea</p>
                </div>
                <div>
                    <img className="w-30" src="/LogoAPASFAP.png"></img>
                </div>
            </footer>
        </>
    )
}

export default Rodape