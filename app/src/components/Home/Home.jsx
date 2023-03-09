import React, { useState } from "react";
import s from './home.module.css'
import NavBar from "../NavBar/NavBar.jsx";
import Filter from "../Filter/Filter.jsx";
import Banner from "../Banner/Banner.jsx";
import Statistics from "../Statistics/Statistics.jsx";
import ScrollInfinite from "../InfiniteScroll/InfiniteScroll.jsx";
import { CloseIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import { BsFillMoonFill, BsFillSunFill, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Button, DrawerBody, useDisclosure, Drawer, DrawerContent, Box, Img, Tooltip } from '@chakra-ui/react'
import { handleDarkModeToggle } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch()
  // const [themeDark, setDarkMode] = useState(false);
  const [fondo, setFondo] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const filterValues = useSelector(s => s.filterValues)
  const themeDark = useSelector(s => s.themeDark)
  let [values, setValues] = useState({
    name: filterValues.name ? filterValues.name : null,
    species: filterValues.species ? filterValues.species : null,
    type: filterValues.type ? filterValues.type : null,
    status: filterValues.status ? filterValues.status : null,
    gender: filterValues.gender ? filterValues.gender : null,
  })

  const changeTheme = () => {
    dispatch(handleDarkModeToggle(!themeDark))
  };

  return (
    <Box className={themeDark ? s.dark : s.light} display="flex" flexDirection="column" overflow="clip" position="relative">
      <NavBar onOpen={onOpen} values={values} setValues={setValues} />

      {/* Statistics */}
      <Box display="flex" width="100%">

        <Box className={s.statistics} display="flex" flexDirection="column" height="98vh" alignItems="center" justifyContent="end" position="sticky" top="0" mx="2" gap="10px" zIndex="100">

          {/* themeDark */}
          <Button
            zIndex="999"
            onClick={changeTheme}
            fontSize="100"
            p="1"
            bgColor="transparent"
            border="solid 3px"
            borderRadius="50%"
            height="50px"
            width="50px"
            color={themeDark ? "white" : "black"}
            transition="all 5s"
          >
            {themeDark ? <BsFillSunFill /> : <BsFillMoonFill />}
          </Button>

          {/* Disable cards */}
          <Button
            zIndex="999"
            fontSize="100"
            p="1"
            bgColor="transparent"
            border="solid 3px"
            borderRadius="50%"
            height="50px"
            width="50px"
            color={themeDark ? "white" : "black"}
            onClick={() => setFondo(!fondo)}
            transition="all 5s"
          >
            {themeDark ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
          </Button>

          {/* Statistics */}
          <Box display={fondo ? "none" : "flex"} >
            <Statistics fondo={fondo} />
          </Box>
          {/* ************ */}

        </Box>
        {/* ************ */}

        <Box position="relative" my="4" mr="6%" display={fondo ? "none" : "flex"} flexDirection="column" alignItems="center" zIndex="999" width="100%" mt="7vh" >

          {/* Banner */}
          <Box w="100%" >
            <Banner />
          </Box>
          {/* ************ */}

          {/* ScrollInfinite */}
          <ScrollInfinite />
          {/* ************ */}

        </Box>
      </Box>

      {/* Filtro */}
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size={window.innerWidth > 991 ? "xs" : "r"}>
        <DrawerContent>
          <Box style={{ display: "flex", justifyContent: "center", position: "relative", width: "100%", height: "50px", alignItems: "center" }}>
            Filters
            <Button onClick={onClose} style={{ display: "flex", position: "absolute", top: "3px", right: "3px" }}>
              <CloseIcon />
            </Button>
          </Box>
          <DrawerBody>
            <Filter onClose={onClose} values={values} setValues={setValues} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* ************ */}

      {/* Up page */}
      <Box position="fixed" bottom="0" w="100%" right="0" height="100px" display="flex" justifyContent="end" alignItems="end">
        <Tooltip hasArrow label='Subir' bg='gray.300' color='black' placement='top'>
          <Img className={s.image} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', })} src="/src/assets/pngCharacter/rick_arriba1-removebg-preview.png" alt="Rick_up" width="5%" mr="2" mb="2" />
        </Tooltip>
      </Box>
      {/* ************ */}

    </Box >
  )
}