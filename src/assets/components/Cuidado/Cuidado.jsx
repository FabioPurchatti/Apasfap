

function Cuidado({ gestos }) {
    return (


        <div className="flex flex-col items-center p-2 lg:w-100  ">
            <img className="max-w-full w-20 " src={gestos.capa} alt={gestos.nome} />
            <p className="text-marrom  text-2xl font-medium my-3">{gestos.nome} </p>
        </div>


    )
}

export default Cuidado