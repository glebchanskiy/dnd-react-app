import { connect } from "react-redux";
import { viewSearchActionCreator, viewSearchFiltersActionCreator } from "../../../redux/reducers/view-reducer";
import ViewSearch from "./ViewSearch";

const mapStateToProps = (state) => ({
  value: state.viewReducer.filters.query,
  label: "Поиск по названию",
  options: state.rarenessReducer.rareness,
  rarities: state.viewReducer.filters.rareness
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(viewSearchActionCreator(event.target.value)),
  onFiltersChange: (event) => dispatch(viewSearchFiltersActionCreator(event.target.name, event.target.checked))
});

const ViewSearchContainer = connect(mapStateToProps, mapDispatchToProps)(ViewSearch);

export default ViewSearchContainer;
