import './EntreEmContato.css'

function EntreEmContato() {
    return (
        <>
            <section className="entre-em-contato">
                <div>
                    <h2>Entre em <span>Contato!</span></h2>
                    <p>Entre em contato com a nossa equipe
                        e saiba como apoiar a causa, esclarecer
                        dúvidas ou contribuir para que mais
                        animais recebam amor e cuidado.
                    </p>
                </div>
                <div className="container-formulario">
                    <form className="formulario">
                        <input type="text" id="nome" name="inNome" placeholder="Nome"></input>
                        <input type="text" id="telefone" name="inTelefone" placeholder="Telefone"></input>
                        <input type="text" id="email" name="inEmail" placeholder="E-mail"></input>
                        <input type="text" id="assunto" name="inAssunto" placeholder="Assunto"></input>
                        <textarea id="mensagem" name="inMensagem" placeholder="Mensagem"></textarea>
                        <button>Enviar Mensagem</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default EntreEmContato