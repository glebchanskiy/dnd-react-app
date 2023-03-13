import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Filter from "./Filter/Filter";

const ViewSearch = (props) => {
  return (
    <Box
      className="my-2"
      component="form"
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={props.onChange}
        value={props.queryValue}
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        fullWidth
      />
      <Filter options={props.options} rarities={props.rarities} onFiltersChange={props.onFiltersChange} />
    </Box>
  );
};

export default ViewSearch;
