import s from './navbar.module.css'
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { filter } from '../../redux/actions';
import { Box, Button, FormControl, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ArrowRightIcon, Search2Icon } from '@chakra-ui/icons'
import { AiFillHome } from "react-icons/ai";
import debounce from 'lodash.debounce'
import { IoMdSettings } from "react-icons/io";


export default function NavBar({ onOpen, values, setValues, onOpenSettings }) {
  const dispatch = useDispatch()
  const history = useHistory()
  let filterValues = useSelector(s => s.filterValues)
  let [inputValue, setInputValue] = useState("")

  function onHandleClick() {
    setInputValue("")
    filterValues.name = null
    dispatch(filter(filterValues))
    document.getElementById("input").value = ""
  }
  const changeHandler = event => {
    setInputValue(inputValue = event.target.value);
    setValues(values = {
      ...values,
      name: event.target.value
    })
    dispatch(filter(values))
  };

  //estudiar esto que le pasa el event a changeHandler
  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 600)
    , []);

  return (
    <Box className={s.containerAll} >



      {/* slideBar */}
      <Box visibility={history.location.pathname === "/home" ? "" : "hidden"}>
        <Button colorScheme='blue' onClick={onOpen}>
          <ArrowRightIcon />
        </Button>
      </Box>
      {/* ********* */}

      {/* input de busqueda */}
      <Box w="33%" visibility={history.location.pathname === "/home" ? "" : "hidden"}>
        <FormControl>
          <InputGroup position="relative" display="flex" justifyContent="center">
            <InputLeftElement
              left="20%"
              position="absolute"
              pointerEvents='none'
              children={<Search2Icon color='gray.300' />}
            />
            <Input id="input" width="60%" placeholder='Rick | Morty | Sanchez' textAlign="center" onChange={debouncedChangeHandler} />
            <Button h="80%" zIndex="2" bgColor="transparent" _hover={{ background: "transparent" }} position="absolute" top="1" right="20%" display={inputValue ? "flex" : "none"} onClick={onHandleClick}> X </Button>
          </InputGroup>
        </FormControl>
      </Box>
      {/* ********* */}


      <Box display="flex" justifyContent="flex-end" gap="10px" fontSize="5vh">
        <Link to="/" >
          <AiFillHome />
        </Link>
        {/* <Link > */}
        <Box onClick={() => onOpenSettings()}>
          <IoMdSettings />
        </Box>
        {/* </Link> */}
      </Box>
    </Box >
  )
}