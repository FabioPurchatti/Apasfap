

function RedeSocial({ imagem, alt, texto }) {
    return (
        <div className="flex items-center gap-4">
            <img className="w-10"
                src={imagem}
                alt={alt}
            />
            <h4 className="text-barra-nav font-bold">
                {texto}
            </h4>
        </div>
    )
}

export default RedeSocial