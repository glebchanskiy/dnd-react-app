const CREATE_FORM_NAME = "CREATE_FORM_NAME";
const CREATE_FORM_RARENESS = "CREATE_FORM_RARENESS";
const CREATE_FORM_LOCATIONS = "CREATE_FORM_LOCATIONS";
const CREATE_FORM_FEATURES = "CREATE_FORM_FEATURES";
const CREATE_FORM_DIFFICULT = "CREATE_FORM_DIFFICULT";
const CREATE_FORM_DESCRIPTION = "CREATE_FORM_DESCRIPTION";
const CREATE_FORM_ADD_PLANT = "CREATE_FORM_ADD_PLANT";

const init = {
  name: '',
  rareness: 0,
  locations: [],
  features: '',
  difficult: 0,
  description: '',
};

const createReducer = (state=init, action) => {
  let updatedState = { ...state };
  switch (action.type) {
    case CREATE_FORM_NAME:
      updatedState.name = action.content;
      break;

    case CREATE_FORM_RARENESS:
      updatedState.rareness = action.content;
      break;

    case CREATE_FORM_LOCATIONS:
      updatedState.locations = action.content;
      break;

    case CREATE_FORM_FEATURES:
      updatedState.features = action.content;
      break;

    case CREATE_FORM_DIFFICULT:
      updatedState.difficult = action.content;
      break;

    case CREATE_FORM_DESCRIPTION:
      updatedState.description = action.content;
      break;

    case CREATE_FORM_ADD_PLANT: {
      updatedState.name = "";
      updatedState.rareness = 1;
      updatedState.locations = [];
      updatedState.features = "";
      updatedState.difficult = "";
      updatedState.description = "";
      break;
    }

    default:
      break;
  }

  return updatedState;
};

export const createFormNameActionCreator = (updated) => ({
  type: CREATE_FORM_NAME,
  content: updated,
}); 

export const createFormRarenessActionCreator = (updated) => ({
  type: CREATE_FORM_RARENESS,
  content: updated,
}); 

export const createFormLocationsActionCreator = (updated) => ({
  type: CREATE_FORM_LOCATIONS,
  content: updated,
}); 

export const createFormFeaturesActionCreator = (updated) => ({
  type: CREATE_FORM_FEATURES,
  content: updated,
}); 

export const createFormDifficultActionCreator = (updated) => ({
  type: CREATE_FORM_DIFFICULT,
  content: updated,
}); 

export const createFormDescriptionActionCreator = (updated) => ({
  type: CREATE_FORM_DESCRIPTION,
  content: updated,
}); 

export const createFormAddPlantActionCreator = () => ({
  type: CREATE_FORM_ADD_PLANT,
  // plant: plant
}); 


export default createReducer;
