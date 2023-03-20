import { Box, Input, Radio, RadioGroup, Stack, Button, Select, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { cleanFilters, filter } from "../../redux/actions";

export default function Filter({ onClose, values, setValues }) {
  const dispatch = useDispatch();
  const species = useSelector(s => s.species)
  const type = useSelector(s => s.types)
  const filterValues = useSelector(s => s.filterValues)
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  //Agregar debounce a los inputs
  function filterCharacters(value, name) {
    if (!value) return
    setValues(values = {
      ...values,
      [name]: value
    })
    dispatch(filter(values))
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-around" height="100%" bgColor="#4130C2" width="100%">

      {/* Species  */}
      <Box bgColor={"#2cb5a0"} borderRadius="15px" p="3">
        <Box display="flex" justifyContent="center" pb="10px">
          <Heading fontSize="20px">
            Species
          </Heading>
        </Box>
        <Select bgColor="white" textAlign="center" defaultValue={filterValues.species ? filterValues.species : "Human | Alien | Humanoid ..."} onChange={e => filterCharacters(e.target.value, "species")}>
          <option disabled selected>Human | Alien | Humanoid ...</option>
          {species ? species.map(e => <option value={e.name} key={e.name}>{e.name}</option>) : ""}
        </Select>
      </Box>
      {/* ------------------------ */}

      {/* Type  */}
      <Box bgColor={"#2cb5a0"} borderRadius="15px" p="3">
        <Box display="flex" justifyContent="center" pb="10px">
          <Heading fontSize="20px">
            Type
          </Heading>
        </Box>
        <Select bgColor="white" textAlign="center" defaultValue={filterValues.type ? filterValues.type : "Selecciona una opción"} onChange={e => filterCharacters(e.target.value, "type")}>
          <option disabled selected>Selecciona una opción</option>
          {type ? type.map(e => <option value={e.name} key={e.name}>{e.name}</option>) : ""}
        </Select>
      </Box>
      {/* ------------------------ */}

      {/* Status  */}
      <Box bgColor={"#2cb5a0"} p="3" borderRadius="15px">
        <Box display="flex" justifyContent="center" pb="10px">
          <Heading fontSize="20px">
            Status
          </Heading>
        </Box>
        <RadioGroup defaultValue={filterValues.status ? filterValues.status : ""}
          onChange={e => filterCharacters(e, "status")}>
          <Stack spacing={5} direction='row' justifyContent="center" my="1">
            <Radio variant="solid" colorScheme='green' value='Alive'>
              Alive
            </Radio>
            <Radio colorScheme='red' value='Dead'>
              Dead
            </Radio>
          </Stack>
          <Stack alignItems="center">
            <Radio colorScheme='gray' value='unknown'>
              Unknown
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      {/* ------------------------ */}

      {/* Gender  */}
      <Box bgColor={"#2cb5a0"} p="3" borderRadius="15px">
        <Box display="flex" justifyContent="center" pb="10px">
          <Heading fontSize="20px">
            Gender
          </Heading>
        </Box>
        <RadioGroup defaultValue={filterValues.gender ? filterValues.gender : ""}
          onChange={e => filterCharacters(e, "gender")}>
          <Stack spacing={5} display='flex' direction='row' alignItems="center" justifyContent="center" my="1">
            <Radio value='Female'>
              Female
            </Radio>
            <Radio value='Male'>
              Male
            </Radio>
          </Stack>
          <Stack spacing={5} display='flex' direction='row' alignItems="center" justifyContent="center">
            <Radio value='Genderless'>
              Genderless
            </Radio>
            <Radio value='unknown'>
              Unknown
            </Radio>
          </Stack>
        </RadioGroup>
      </Box>
      {/* ------------------------ */}

      {/* Gender  */}

      <Button bgColor={"#2cb5a0"} onClick={() => {
        dispatch(cleanFilters()), onClose(), document.getElementById("input").value = "", setValues(values = {
          name: null,
          species: null,
          type: null,
          status: null,
          gender: null,
        })
      }}>
        <Heading fontSize="20px">
          Clear filters
        </Heading>
      </Button>
      {/* ------------------------ */}
    </Box >
  )
}

