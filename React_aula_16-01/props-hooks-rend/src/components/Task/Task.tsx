import  { useState, useEffect } from 'react';
import './Task.css'

function Task() {
  const [completado, setCompletado] = useState(false) //booleano
  const [Tarefa, setTarefa] = useState('') //string

  // Função que é executada toda vez que o componente é renderizado
  useEffect(() => {
    if (completado == true) {
     setTarefa('Tarefa Concluida')
    }
  }, [completado])

  /* arrow function acima é igual a:
   function () {} é igual () => {}
  */

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: { Tarefa }</h3>
        <button onClick={() => {setCompletado(true) }}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task