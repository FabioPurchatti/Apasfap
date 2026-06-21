import instagram from "../../../../public/Instagram.png"
import Facebook from "../../../../public/Facebook.png"
import Logo from "../../../../public/LogoApasfap.png"
import RedeSocial from './RedeSocial'

function Rodape() {
    return (
        <footer className="bg-laranja px-6 py-8">
            <div className="flex justify-between items-center">

                {/* Lado esquerdo */}
                <div>
                    <h3 className="text-barra-nav text-4xl font-black mb-8">
                        Contatos oficiais
                    </h3>
                    <RedeSocial
                        imagem={instagram}
                        alt="Imagem instagram"
                        texto="@onapasfapoficial"
                    />
                    {/* Facebook */}
                    <RedeSocial
                        imagem={Facebook}
                        alt="Imagem Facebook"
                        texto="ONG Apasfap Paulínia"
                    />
                </div>
                {/* Logo à direita */}
                <div>
                    <img
                        className="w-44"
                        src={Logo}
                        alt="Logo APASFAP"
                    />
                </div>
            </div>
        </footer >
    );
}

export default Rodape;

