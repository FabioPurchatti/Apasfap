function Coletas({ coletas }) {
    return (
        <section>
            <div>
                <img src={coletas.capa}></img>
                <p >{coletas.descricao} </p>
            </div>
        </section>
    )
}

export default Coletas

