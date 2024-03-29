import React, { useState } from "react";
import s from './home.module.css'
import NavBar from "../NavBar/NavBar.jsx";
import Filter from "../Filter/Filter.jsx";
import Banner from "../Banner/Banner.jsx";
import Statistics from "../Statistics/Statistics.jsx";
import ScrollInfinite from "../InfiniteScroll/InfiniteScroll.jsx";
import { CloseIcon } from '@chakra-ui/icons'
import { useSelector } from "react-redux";
import { BsFillMoonFill, BsFillSunFill, BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Button, DrawerBody, useDisclosure, Drawer, DrawerContent, Box, Img, Tooltip, Heading, DrawerOverlay } from '@chakra-ui/react'
import image from "../../assets/pngCharacter/rick_arriba1-removebg-preview.png"
import rick_gif from "../../assets/loader/rick.gif"
import crazy_gif from "../../assets/error/error2.gif"
import morty_gif from "../../assets/error/error1.gif"
import Settings from "../Settings/Settings";

export default function Home() {
  const [themeDark, setThemeDark] = useState(JSON.parse(localStorage.getItem("themeDark")))
  const [hiddenBanner, setHiddenBanner] = useState(JSON.parse(localStorage.getItem("banner")))
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isOpen2, setIsOpen2] = useState(false)

  const allCharacter = useSelector(s => s.characters)
  const filterValues = useSelector(s => s.filterValues)
  const filteredItems = useSelector(s => s.filteredItems)
  const items = useSelector(s => s.items)

  const [fondo, setFondo] = useState(false);
  let [values, setValues] = useState({
    name: filterValues.name ? filterValues.name : null,
    species: filterValues.species ? filterValues.species : null,
    type: filterValues.type ? filterValues.type : null,
    status: filterValues.status ? filterValues.status : null,
    gender: filterValues.gender ? filterValues.gender : null,
  })

  const changeTheme = (themeDark) => {
    setThemeDark(themeDark = !themeDark)
    localStorage.setItem("themeDark", JSON.stringify(themeDark))
  };


  return (
    <Box className={themeDark ? s.dark : s.light} display="flex" flexDirection="column" overflow="clip" position="relative" transition="all 1.5s">
      <Box display={fondo ? "none" : ""}>
        <NavBar onOpen={onOpen} values={values} setValues={setValues} setIsOpen2={setIsOpen2} isOpen2={isOpen2} />
      </Box>

      {
        items?.length ?

          // {/* Statistics */ }
          <Box display="flex" width="100%">

            <Box className={s.statistics} display="flex" flexDirection="column" height="99vh" alignItems="center" justifyContent="end" position="sticky" top="0" ml="2" gap="20px" zIndex="100" >

              {/* themeDark */}
              <Button
                zIndex="999"
                onClick={() => changeTheme(themeDark)}
                fontSize="100"
                p="1"
                bgColor="transparent"
                border="solid 3px"
                borderRadius="50%"
                height="50px"
                width="50px"
                color={themeDark ? "white" : "black"}
                transition="all 1.5s"
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
                transition="all 1.5s"
              >
                {fondo ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </Button>

              {/* Statistics */}
              <Box className={fondo ? s.statisticsHidden : s.statistics} display="">
                <Statistics />
              </Box>
              {/* ************ */}

            </Box>
            {/* ************ */}

            <Box position="relative" my="4" mr="6%" display={fondo ? "none" : "flex"} flexDirection="column" alignItems="center" zIndex="100" width="100%" mt="7vh" >

              {/* Banner */}
              <Box w="100%" hidden={JSON.parse(localStorage.getItem("hiddenBanner"))}>
                <Banner setHiddenBanner={setHiddenBanner} />
              </Box>
              {/* ************ */}

              {/* ScrollInfinite */}
              <ScrollInfinite />
              {/* ************ */}

            </Box>
          </Box>
          : allCharacter.length && !filteredItems.length ?
            <Box position="absolute" top="7vh" height="93vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%" textAlign="center">
              <Box bgColor="#2cb5a0" display="flex" alignItems="center" borderRadius="15px">
                <Img src={crazy_gif} w="300px" al="so_crazy.gif" />
                <Heading px="10">No se encontraron personajes</Heading>
                <Img src={morty_gif} w="200px" al="morty.gif" />
              </Box>
            </Box>
            : <Box position="absolute" top="7vh" height="93vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
              <Img src={rick_gif} alt="rick_loading" width="300px" />
              <Heading>Loading</Heading>
            </Box>
      }


      {/* Filtro */}
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size={window.innerWidth > 991 ? "xs" : "r"} >
        <DrawerOverlay />
        <DrawerContent>
          <Heading bgColor="#4130C2" pt="2" size="lg" display="flex" justifyContent="center">
            Filters
            <Button onClick={onClose} color="white" display="flex" position="absolute" top="3px" right="3px" bgColor="transparent" _hover={{ bgColor: "tranparent", color: "black" }}>
              <CloseIcon />
            </Button>
          </Heading>
          <DrawerBody bgColor="#4130C2" >
            <Filter onClose={onClose} values={values} setValues={setValues} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* ************ */}

      {/* Settings */}
      <Drawer placement='right' onClose={() => setIsOpen2(!isOpen2)} isOpen={isOpen2} size={window.innerWidth > 991 ? "xs" : "r"}>
        <DrawerOverlay />
        <DrawerContent>
          <Box display="flex" justifyContent="center" position="relative">
            <Heading pt="2" size="lg" display="flex" justifyContent="center">
              Settings
            </Heading>
            <Button onClick={() => setIsOpen2(!isOpen2)} color="black" display="flex" position="absolute" top="3px" left="3px" bgColor="transparent" _hover={{ bgColor: "tranparent", color: "red" }}>
              <CloseIcon />
            </Button>
          </Box>
          <DrawerBody>
            <Settings themeDark={themeDark} setThemeDark={setThemeDark} setHiddenBanner={setHiddenBanner} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {/* ************ */}

      {/* Up page */}
      <Box position="fixed" bottom="0" w="100%" right="0" height="30vh" justifyContent="end" alignItems="end" display={fondo ? "none" : "flex"} >
        <Tooltip hasArrow label='Subir' bg='gray.300' color='black' placement='top'>
          <Img className={s.image} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth', })} src={image} alt="Rick_up" mr="2" mb="2" />

        </Tooltip>
      </Box>
      {/* ************ */}

    </Box >
  )
}