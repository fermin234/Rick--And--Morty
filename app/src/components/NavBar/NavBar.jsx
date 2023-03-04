import s from './navbar.module.css'
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, FormControl, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ArrowRightIcon, Search2Icon } from '@chakra-ui/icons'
import { useCallback, useState } from 'react';
import { filter } from '../../redux/actions';
import debounce from 'lodash.debounce'

export default function NavBar({ onOpen }) {
  const dispatch = useDispatch()
  const history = useHistory()
  let filterValues = useSelector(s => s.filterValues)
  let [inputValue, setInputValue] = useState("")

  function onHandleClick() {
    setInputValue(filterValues.name = null)
    dispatch(filter(filterValues))
    setInputValue("")
    document.getElementById("input").value = ""
  }
  const changeHandler = event => {
    setInputValue(inputValue = event.target.value);
    filterValues.name = inputValue
    dispatch(filter(filterValues))
  };

  //estudiar esto que le pasa el event a changeHandler
  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 300)
    , []);
  return (
    <Box className={s.containerAll}>
      {
        history.location.pathname === "/home"
          ?
          <>
            {/* slideBar */}
            <Box>
              <Button colorScheme='blue' onClick={onOpen}>
                <ArrowRightIcon />
              </Button>
            </Box>
            {/* ********* */}

            {/* input de busqueda */}
            <Box className={s.prueba}>
              <FormControl position="relative" >
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<Search2Icon color='gray.300' />}
                  />
                  <Input id="input" width="100%" placeholder='Rick | Morty | Sanchez' textAlign="center" onChange={debouncedChangeHandler} />
                  <Button h="80%" zIndex="2" bgColor="transparent" _:hover="none" position="absolute" top="1" right="1" display={inputValue ? "flex" : "none"} onClick={onHandleClick}> X </Button>
                </InputGroup>
              </FormControl>
            </Box>
            {/* ********* */}
          </>
          : ""
      }


      <Box display="flex" gap="10px">
        <Link to="/landingPage">
          <Button>LandingPage</Button>
        </Link>
        <Link to="/create">
          <Button>Create</Button>
        </Link>
        <Link to="/home">
          <Button>Home</Button>
        </Link>
      </Box>
    </Box >
  )
}