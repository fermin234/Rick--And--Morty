import { Box, Input, Radio, RadioGroup, Stack, Button, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { cleanFilters, filter } from "../../redux/actions";

export default function Filter({ onClose, values, setValues }) {
  const dispatch = useDispatch();
  const species = useSelector(s => s.species)
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
      <Box bgColor="purple.200" p="3">
        <Box display="flex" justifyContent="center">
          Species
        </Box>
        <Select textAlign="center" placeholder='Human | Alien | Humanoid ...' defaultValue={filterValues.species ? filterValues.species : ""} onChange={e => filterCharacters(e.target.value, "species")}>
          {species ? species.map(e => <option value={e.name} key={e.name}>{e.name}</option>) : ""}
        </Select>
      </Box>
      {/* ------------------------ */}

      {/* Type  */}
      <Box bgColor="gray.200" p="3">
        <Box display="flex" justifyContent="center">
          Type
        </Box>
        <Input variant='filled' textAlign="center" placeholder=' Experiment | Superhuman ...' defaultValue={filterValues.type ? filterValues.type : ""} onChange={e => filterCharacters(e.target.value, "type")} />
      </Box>
      {/* ------------------------ */}

      {/* Status  */}
      <Box bgColor="red.200" p="3">
        <Box display="flex" justifyContent="center">
          Status
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
      <Box bgColor="blue.200" p="3">
        <Box display="flex" justifyContent="center">
          Gender
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

      <Button onClick={() => {
        dispatch(cleanFilters()), onClose(), document.getElementById("input").value = "", setValues(values = {
          name: null,
          species: null,
          type: null,
          status: null,
          gender: null,
        })
      }}>
        Clear Filters
      </Button>
      {/* ------------------------ */}
    </Box >
  )
}

