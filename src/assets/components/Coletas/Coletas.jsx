import './Coletas.css'

function Coletas({ coletas }) {
    return (
        <section className="coletas">
            <div className="logos-coletas">
                <img src={coletas.capa}></img>
                <p>{coletas.descricao}</p>
            </div>
        </section>
    )
}

export default Coletas