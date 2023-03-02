import { Box, Img, Radio } from '@chakra-ui/react'
import s from './card.module.css'

export default function Card({ id, name, image, species, origin, status, gender }) {
  return (
    <div className={s.card}>
      <div className={s.blob}></div>
      <span className={s.img}><img className={s.img} src={image} alt={id} /></span>
      <div>
        <h2>{name}</h2>
        <h2><span>Especies: {species}</span><br /></h2>
        <Radio position="absolute" top="2" right="2" size="sm" bgColor={status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"} border="none"></Radio>
      </div>
      <Img src={`/src/assets/icons_genres/${gender}.png`} alt="asd" width='5' className={s.img2} margin="2" />
    </div>
  )
}