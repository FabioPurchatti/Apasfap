/*

import Rodape from "./assets/components/Rodape/Rodape.jsx"
*/

import Coletas from "./assets/components/Coletas/Coletas.jsx"
import PontosColeta from "./assets/components/PontosColeta/PontosColeta.jsx"
import EntreEmContato from "./assets/components/EntreEmContato/EntreEmContato.jsx"
import { coletas } from "./data/coletas"
import { cuidados } from "./data/cuidados"
import Cuidado from "./assets/components/Cuidado/Cuidado.jsx"
import SeuGesto from "./assets/components/SeuGesto/SeuGesto.jsx"
import JunteTampinhas from "./assets/components/JunteTampinhas/JunteTampinhas.jsx"
import Cabecalho from "./assets/components/Cabecalho/Cabecalho.jsx"
import AceitamosTampinhas from "./assets/components/AceitamosTampinhas/AceitamosTampinhas.jsx"
import './App.css'

function App() {

  return (

    <main className="min-h-screen">
      <Cabecalho />
      <JunteTampinhas />
      <SeuGesto />

      <section className=" pb-20 pt-5 bg-rosa-claro ">
        <div className="grid grid-cols-2 gap-8 p-10 mx-auto border-4 border-marrom border-dashed bg-barra-nav
          max-w-sm rounded-4xl lg:max-w-230  lg:bg-white-500 lg:flex lg:justify-center lg:gap-20 lg:p-5  ">
          {cuidados.map((gestos) => (
            <Cuidado
              key={gestos.id}
              gestos={gestos}
            />
          ))}
        </div>
      </section>

      <AceitamosTampinhas />
      <PontosColeta />

      <section className="bg-rosa-claro p-8 lg:flex justify-center lg:items-center lg:p-10">
        <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
          {coletas.map((coleta) => (
            <Coletas
              key={coleta.id}
              coletas={coleta}
            />
          ))}
        </div>
      </section>
      <EntreEmContato />

    </main >
    /*<>
      <main className="min-h-screen">
        
        
      



  


        <Rodape />
      </main>
    </>*/
  )
}
export default App
