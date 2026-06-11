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

      <Cabecalho />
      <JunteTampinhas />
      <SeuGesto />

      <section className="container-cuidados">
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
    </>
  )
}
export default App
