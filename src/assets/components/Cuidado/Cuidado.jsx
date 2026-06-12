

function Cuidado({ gestos }) {
    return (

        <section className="flex items-center flex-col w-30 my-10">
            <img src={gestos.capa} alt={gestos.nome} />
            <p className="text-marrom  text-3xl font-medium my-6">{gestos.nome} </p>
        </section>
    )
}

export default Cuidado