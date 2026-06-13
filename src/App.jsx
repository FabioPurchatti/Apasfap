/*


import AceitamosTampinhas from "./assets/components/AceitamosTampinhas/AceitamosTampinhas.jsx"
import EntreEmContato from "./assets/components/EntreEmContato/EntreEmContato.jsx"
import PontosDeColeta from "./assets/components/PontosColeta/PontosColeta.jsx"
import Coletas from "./assets/components/Coletas/Coletas.jsx"
import Rodape from "./assets/components/Rodape/Rodape.jsx"

import { coletas } from "./data/coletas"*/
import { cuidados } from "./data/cuidados"
import Cuidado from "./assets/components/Cuidado/Cuidado.jsx"
import SeuGesto from "./assets/components/SeuGesto/SeuGesto.jsx"
import JunteTampinhas from "./assets/components/JunteTampinhas/JunteTampinhas.jsx"
import Cabecalho from "./assets/components/Cabecalho/Cabecalho.jsx"
import './App.css'

function App() {

  return (

    <main className="min-h-screen">
      <Cabecalho />
      <JunteTampinhas />
      <SeuGesto />

      <section className="">
        <div className="grid grid-cols-2 gap-8 p-10 mx-auto border-4 border-marrom border-dashed
          max-w-sm   rounded-4xl lg:max-w-230  lg:bg-white-500 lg:flex lg:justify-center lg:gap-20 lg:p-5  ">
          {cuidados.map((gestos) => (
            <Cuidado
              key={gestos.id}
              gestos={gestos}
            />
          ))}

        </div>
      </section>



    </main >
    /*<>
      <main className="min-h-screen">
        
        
       


        <AceitamosTampinhas />
        <EntreEmContato />

        <PontosDeColeta />
        <section className="flex justify-center flex-wrap gap-8 bg-barra-nav">
          {coletas.map((coletas) => (
            <Coletas
              key={coletas.id}
              coletas={coletas}
            />
          ))}
        </section>
        <Rodape />
      </main>
    </>*/
  )
}
export default App
