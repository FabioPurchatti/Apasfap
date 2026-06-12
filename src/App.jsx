import Cabecalho from "./assets/components/Cabecalho/Cabecalho.jsx"
import JunteTampinhas from "./assets/components/JunteTampinhas/JunteTampinhas.jsx"
import SeuGesto from "./assets/components/SeuGesto/SeuGesto.jsx"
import Cuidado from "./assets/components/Cuidado/Cuidado.jsx"
import AceitamosTampinhas from "./assets/components/AceitamosTampinhas/AceitamosTampinhas.jsx"
import EntreEmContato from "./assets/components/EntreEmContato/EntreEmContato.jsx"
import PontosDeColeta from "./assets/components/PontosColeta/PontosColeta.jsx"
import Coletas from "./assets/components/Coletas/Coletas.jsx"
import Rodape from "./assets/components/Rodape/Rodape.jsx"
import { cuidados } from "./data/cuidados"
import { coletas } from "./data/coletas"
import './App.css'

function App() {

  return (
    <>
      <main className="min-h-screen">
        <Cabecalho />
        <JunteTampinhas />
        <SeuGesto />

        <section className="flex justify-center items-center gap-25 m-70 my-10  rounded-[50px] border-2 border-dashed border-marrom bg-barra-nav shadow-[0_15px_30px_rgba(0,0,0,0.2)]">
          {cuidados.map((gestos) => (
            <Cuidado
              key={gestos.id}
              gestos={gestos}
            />
          ))}
        </section>

        <AceitamosTampinhas />
        <EntreEmContato />

        <PontosDeColeta />
        <section className="pontoscoleta">
          {coletas.map((coletas) => (
            <Coletas
              key={coletas.id}
              coletas={coletas}
            />
          ))}
        </section>
        <Rodape />
      </main>
    </>
  )
}
export default App
