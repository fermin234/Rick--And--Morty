import { Box, Input, Radio, RadioGroup, Stack, Button, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { cleanFilters, filter } from "../../redux/actions";

export default function Filter({ onClose }) {
  const dispatch = useDispatch();
  const filterValues = useSelector(s => s.filterValues)
  const species = useSelector(s => s.species)
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
    filterValues[name] = value
    dispatch(filter(filterValues))
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="space-around" height="100%">

      {/* Species  */}
      <Box bgColor="purple.200" >
        <Box display="flex" justifyContent="center">
          Species
        </Box>
        <Select textAlign="center" placeholder='Human | Alien | Humanoid ...' defaultValue={filterValues.species ? filterValues.species : ""} onChange={e => filterCharacters(e.target.value, "species")}>
          {species ? species.map(e => <option value={e.name} key={e.name}>{e.name}</option>) : ""}
        </Select>
      </Box>
      {/* ------------------------ */}

      {/* Type  */}
      <Box bgColor="gray.200">
        <Box display="flex" justifyContent="center">
          Type
        </Box>
        <Input variant='filled' textAlign="center" placeholder=' Experiment | Superhuman ...' defaultValue={filterValues.type ? filterValues.type : ""} onChange={e => filterCharacters(e.target.value, "type")} />
      </Box>
      {/* ------------------------ */}

      {/* Status  */}
      <Box bgColor="red.200">
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
      <Box bgColor="blue.200">
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

      <Button onClick={() => { dispatch(cleanFilters()), onClose(), document.getElementById("input").value = "", console.log("**", filterValues); }}>
        Clear Filters
      </Button>
      {/* ------------------------ */}
    </Box >
  )
}

