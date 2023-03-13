import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";

const Filter = (props) => {
  const options = props.options.map((r) => (
    <FormControlLabel control={<Checkbox />} label={r.name} name={r.name} key={r.id} />
  ));

  return (
    <div className="d-flex flex-column m-2 p-2 border  rounded">
      <FormControl component="fieldset">
        <FormLabel component="legend">Фильтры</FormLabel>
        <FormGroup onChange={props.onFiltersChange}>{options}</FormGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
