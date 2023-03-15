import { Box, Img, Radio } from '@chakra-ui/react'
import s from './card.module.css'
import female from "../../assets/icons_genres/female.png"
import genderless from "../../assets/icons_genres/genderless.png"
import male from "../../assets/icons_genres/male.png"
import unknown from "../../assets/icons_genres/unknown.png"

export default function Card({ id, name, image, species, status, gender }) {
  const dark = JSON.parse(localStorage.getItem("themeDark"))
  return (
    <Box className={s.card} bgColor={dark ? "#1c3b36" : "#2cb5a0"} color={dark ? "white" : ""} border={dark ? "solid 2px white" : "solid 2px #2cb5a0"}>
      <div className={s.blob}></div>
      <span className={s.img}><img className={s.img} src={image} alt={id} /></span>
      <div>
        <h2>{name}</h2>
        <h2><span>Especies: {species}</span><br /></h2>
        <Radio position="absolute" top="2" right="2" size="sm" bgColor={status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"} border="none"></Radio>
      </div>
      <Img src={gender === "Female" ? female : gender === "Genderless" ? genderless : gender === "Male" ? male : unknown} alt="gender" width='5' className={s.img2} margin="2" />
    </Box>
  )
}