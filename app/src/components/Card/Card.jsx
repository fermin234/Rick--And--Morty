import s from './card.module.css'
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status
//Agregar el punto rojo,verde o gris en caso del status

export default function Card({ id, name, image, species, origin, status }) {
  return (
    <div className={s.card}>
      <div className={s.blob}></div>
      <span className={s.img}><img className={s.img} src={image} alt={id} /></span>
      <h2>{name}</h2>
      <h2><span>Especies: {species}</span><br /></h2>
      <h2><span>Origen: {origin}</span></h2>
    </div >
  )
}