import Contador from "./components/Contador/Contador"
import Card from "./components/Card/Card"

function App() {
  return (
    <>
    <Contador  />

    <Card titulo="Props no React" descricao="Introdução a Props"/>
    
    <Card titulo="Funções Especiais" descricao="Hooks no React"/>

    <Card titulo="Componentes" descricao="Funções no React"/>
    </>
  )
}

export default App
