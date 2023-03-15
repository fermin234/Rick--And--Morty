import { Box, Checkbox, Heading, Img } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import s from './banner.module.css'
import rick_morty from '../../assets/pngCharacter/rick_morty.png'
import morty from '../../assets/pngCharacter/morty.png'
import { useState } from "react";

//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner
//Agregar mediasquerys por el tema del responsive con la imagen del banner

export default function Banner({ setHiddenBanner }) {
  const history = useHistory()

  function handleCheckbox() {
    localStorage.setItem("hiddenBanner", true)
    setHiddenBanner(true)
  }

  return (
    <Box className={s.imagen} bgColor="purple" width="100%" borderRadius="30px" p="30px" position="relative" mb="4" overflow="clip">
      <Heading color="white" fontSize="5xl" ml='10'>
        Ahora pudes crear tu propio personaje
      </Heading>
      <Heading fontSize="2xl" ml='10'>
        <Link to="/create">
          Ir a crear mi personaje aquí
        </Link>
      </Heading>

      <Img src={rick_morty} alt="ryck_morty" position="absolute" bottom='0' right="-150px" width="max-content" zIndex="300" />
      <Img src={morty} alt="morty" position="absolute" bottom='-30px' height="35vh" left="-150px" width="300px" />

      <Box display="flex" position="absolute" bottom="2" ml='30'>
        <Checkbox onChange={handleCheckbox} />
        <Heading fontSize="1xl">
          No volver a mostrar esta informacion.
        </Heading>
      </Box>
    </Box >
  )
}