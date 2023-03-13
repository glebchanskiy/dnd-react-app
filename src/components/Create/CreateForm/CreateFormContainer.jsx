import { connect } from "react-redux";
import {
  createFormAddPlantActionCreator,
  createFormDescriptionActionCreator,
  createFormDifficultActionCreator,
  createFormFeaturesActionCreator,
  createFormLocationsActionCreator,
  createFormNameActionCreator,
  createFormRarenessActionCreator,
} from "../../../redux/reducers/create-reducer";

import CreateForm from "./CreateForm";

// const CreateFormContainer = () => {
//   return (
//     <Context.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let onNameChange = (event) =>
//           store.dispatch(createFormNameActionCreator(event.target.value));

//         let onRarenessChange = (event) =>
//           store.dispatch(createFormRarenessActionCreator(event));

//         let onLocationsChange = (event) =>
//           store.dispatch(createFormLocationsActionCreator(event));

//         let onFeaturesChange = (event) =>
//           store.dispatch(createFormFeaturesActionCreator(event.target.value));

//         let onDifficultChange = (event) =>
//           store.dispatch(createFormDifficultActionCreator(event.target.value));

//         let onDescriptionChange = (event) =>
//           store.dispatch(
//             createFormDescriptionActionCreator(event.target.value)
//           );

//         const onAddPlant = (event) => {
//           event.preventDefault();
//           const plant = {
//             name: state.createReducer.name,
//             rareness: state.createReducer.rareness.value,
//             locations: state.createReducer.locations.map((l) => l.label),
//             features: state.createReducer.features,
//             difficult: state.createReducer.difficult,
//             description: state.createReducer.description,
//           };

//           store.dispatch(createFormAddPlantActionCreator(plant));
//           console.log(plant);
//         };
//         return (
//           <CreateForm
//             nameValue={state.createReducer.name}
//             rarenessValue={state.createReducer.rareness}
//             locationsValue={state.createReducer.locations}
//             featuresValue={state.createReducer.features}
//             difficultValue={state.createReducer.difficult}
//             descriptionValue={state.createReducer.description}
//             rarities={state.rarenessReducer.rareness}
//             locations={state.locationsReducer.locations}
//             onNameChange={onNameChange}
//             onRarenessChange={onRarenessChange}
//             onLocationsChange={onLocationsChange}
//             onFeaturesChange={onFeaturesChange}
//             onDifficultChange={onDifficultChange}
//             onDescriptionChange={onDescriptionChange}
//             onAddPlant={onAddPlant}
//           />
//         );
//       }}
//     </Context.Consumer>
//   );
// };

const mapStateToProps = (state) => ({
  nameValue: state.createReducer.name,
  rarenessValue: state.createReducer.rareness,
  locationsValue: state.createReducer.locations,
  featuresValue: state.createReducer.features,
  difficultValue: state.createReducer.difficult,
  descriptionValue: state.createReducer.description,
  rarities: state.rarenessReducer.rareness,
  locations: state.locationsReducer.locations,
});

const mapDispatchToProps = (dispatch) => ({
  onNameChange: (event) =>
    dispatch(createFormNameActionCreator(event.target.value)),

  onRarenessChange: (event) => dispatch(createFormRarenessActionCreator(event)),

  onLocationsChange: (event) =>
    dispatch(createFormLocationsActionCreator(event)),

  onFeaturesChange: (event) =>
    dispatch(createFormFeaturesActionCreator(event.target.value)),

  onDifficultChange: (event) =>
    dispatch(createFormDifficultActionCreator(event.target.value)),

  onDescriptionChange: (event) =>
    dispatch(createFormDescriptionActionCreator(event.target.value)),

  onAddPlant: (event) => {
    event.preventDefault();
    // const plant = {
    //   name: state.createReducer.name,
    //   rareness: state.createReducer.rareness.value,
    //   locations: state.createReducer.locations.map((l) => l.label),
    //   features: state.createReducer.features,
    //   difficult: state.createReducer.difficult,
    //   description: state.createReducer.description,
    // };

    dispatch(createFormAddPlantActionCreator());
  },
});

const CreateFormContainer = connect(mapStateToProps, mapDispatchToProps)(CreateForm);

export default CreateFormContainer;
