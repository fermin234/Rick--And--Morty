import { Box, Checkbox, Heading, Img } from "@chakra-ui/react";
import s from './banner.module.css'

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

export default function Banner() {
  return (
    <Box className={s.imagen} bgColor="purple" height={"28vh"} width="85%" borderRadius="30px" p="30px" position="relative" mb="4" overflow="clip">
      <Heading color="white" fontSize="5xl" ml='10'>Ahora podes crear tu propio personaje</Heading>
      <Heading position="absolute" right="40" bottom="2" fontSize="2xl">Ir a crear mi personaje aquí</Heading>
      <Img className={s.imagen} src="/src/assets/rick_morty.png" alt="ryck_morty"
        display="flex" position="absolute" bottom='0' right="-150px" width="300px"
      />
      <Img className={s.imagen} src="/src/assets/morty.png" alt="ryck"
        display="flex" position="absolute" bottom='-20px' left="-150px" width="300px"
      />
      <Box display="flex" position="absolute" bottom="2" ml='30'>
        <Checkbox />
        <Heading fontSize="1xl">No volver a mostrar esta informacion.</Heading>
      </Box>
    </Box >
  )
}