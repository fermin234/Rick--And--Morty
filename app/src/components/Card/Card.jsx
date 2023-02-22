import s from './card.module.css'

export default function Card({ id, name, image }) {
  return (
    <div className={s.contarinerCard} key={id + "*"}>
      <img className={s.img} src={image} alt={name} />
    </div>
  )
}