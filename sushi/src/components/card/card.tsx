import './card.css'

interface CardProps {
    id?: number,
    price: number,
    title: string,
    image: string
}
export function Card({ price, image, title}: CardProps) {
  return (
    <div className="card">
      <img src={`http://localhost:8080${image}`} alt={title} />
      <h2>{title}</h2>
      <p><b>Valor:</b> R$ {price}</p>
    </div>
  )
}






