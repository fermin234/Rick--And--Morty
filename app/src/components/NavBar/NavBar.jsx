import s from './navbar.module.css'
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, FormControl, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ArrowRightIcon, Search2Icon } from '@chakra-ui/icons'
import { useCallback, useState } from 'react';
import { filter } from '../../redux/actions';
import debounce from 'lodash.debounce'

export default function NavBar({ onOpen, values, setValues }) {
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
    <Box className={s.containerAll}>
      {
        history.location.pathname === "/home"
          ?
          <>
            {/* slideBar */}
            <Box w="33.3%">
              <Button colorScheme='blue' onClick={onOpen}>
                <ArrowRightIcon />
              </Button>
            </Box>
            {/* ********* */}

            {/* input de busqueda */}
            <Box w="33.3%">
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
          </>
          : ""
      }


      <Box display="flex" justifyContent="end" gap="10px" w="33.3%">
        <Link to="/">
          LandingPage
        </Link>
        <Link to="/create">
          Create
        </Link>
        <Link to="/home">
          Home
        </Link>
      </Box>
    </Box >
  )
}