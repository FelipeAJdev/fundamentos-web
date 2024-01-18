import './Card.css'

//Modelos de tipagem = interface
//interface = um contrato que diz quais são os atributos que um objeto deve ter
//funciona como uma classe pois está definindo um tipo
interface CardProps {
    titulo: string; 
    descricao: string;

}

function Card({ titulo, descricao }: CardProps) {
    return (
        <div className="card">
            <h1>{ titulo }</h1>
            <p>{ descricao }</p>
        </div>
    )
}

export default Card