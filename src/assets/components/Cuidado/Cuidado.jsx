import './Cuidado.css'

function Cuidado({ gestos }) {
    return (

        <section className="cuidados">
            <img src={gestos.capa} alt={gestos.nome} />
            <p>{gestos.nome} </p>
        </section>
    )
}

export default Cuidado