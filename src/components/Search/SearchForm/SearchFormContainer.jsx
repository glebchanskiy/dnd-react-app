import { connect } from "react-redux";
import {
  findPlantsActionCreator,
  updateSearchFormCountActionCreator,
  updateSearchFormLocationActionCreator,
  updateSearchFormRarenessActionCreator,
} from "../../../redux/reducers/search-reducer";

import SearchForm from "./SearchForm";

// const SearchFormContainer = () => {
//   return (
//     <Context.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let onLocationChange = (event) =>
//           store.dispatch(
//             updateSearchFormLocationActionCreator(event.target.value)
//           );

//         let onRarenessChange = (event) =>
//           store.dispatch(
//             updateSearchFormRarenessActionCreator(event.target.value)
//           );

//         let onNumberChange = (event) =>
//           store.dispatch(
//             updateSearchFormCountActionCreator(event.target.value)
//           );

// let onSearch = (event) => {
//   event.preventDefault();
//   store.dispatch(
//     findPlantsActionCreator(
//       state.searchReducer.location,
//       state.searchReducer.rareness,
//       state.searchReducer.number
//     )
//   );
// };

//         return (
//           <SearchForm
//             locationValue={state.searchReducer.location}
//             rarenessValue={state.searchReducer.rareness}
//             numberValue={state.searchReducer.number}
//             locations={state.locationsReducer.locations}
//             rarities={state.rarenessReducer.rareness} // зарефачить нейминг
//             onLocationChange={onLocationChange}
//             onRarenessChange={onRarenessChange}
//             onNumberChange={onNumberChange}
//             onSearch={onSearch}
//           />
//         );
//       }}
//     </Context.Consumer>
//   );
// };

const mapStateToProps = (state) => ({
  locationValue: state.searchReducer.location,
  rarenessValue: state.searchReducer.rareness,
  numberValue: state.searchReducer.number,
  locations: state.locationsReducer.locations,
  rarities: state.rarenessReducer.rareness, // зарефачить нейминг
});

const mapDispatchToProps = (dispatch) => ({
  onLocationChange: (event) =>
    dispatch(updateSearchFormLocationActionCreator(event.target.value)),
  onRarenessChange: (event) =>
    dispatch(updateSearchFormRarenessActionCreator(event.target.value)),
  onNumberChange: (event) =>
    dispatch(updateSearchFormCountActionCreator(event.target.value)),
  onSearch: (event) => {
    event.preventDefault();
    dispatch(findPlantsActionCreator());
  },
});

const SearchFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

export default SearchFormContainer;
