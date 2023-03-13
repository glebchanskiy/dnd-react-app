const SEARCH_FORM_LOCATION = "SEARCH_FORM_LOCATION";
const SEARCH_FORM_RARENESS = "SEARCH_FORM_RARENESS";
const SEARCH_FORM_COUNT = "SEARCH_FORM_COUNT";
const SEARCH_FORM_FIND_PLANTS = "SEARCH_FORM_FIND_PLANTS";
const SEARCH_FORM_SET_PLANTS = "SEARCH_FORM_SET_PLANTS";

const init = {
  location: "0",
  rareness: "0",
  number: "",
  list: [],
};

const searchReducer = (state = init, action) => {
  switch (action.type) {
    case SEARCH_FORM_LOCATION:
      console.log(state);
      return {
        ...state,
        location: action.content,
      };

    case SEARCH_FORM_RARENESS:
      console.log(state);
      return {
        ...state,
        rareness: action.content,
      };
    case SEARCH_FORM_COUNT:
      console.log(state);
      return {
        ...state,
        number: action.content,
      };

    case SEARCH_FORM_FIND_PLANTS:
      console.log(state);
      alert(action.type);
      return {
        ...state,
      };

    case SEARCH_FORM_SET_PLANTS:
      return {
        ...state,
        list: action.plants
      };

    default:
      return {
        ...state,
      };
  }
};

export const updateSearchFormLocationActionCreator = (updated) => ({
  type: SEARCH_FORM_LOCATION,
  content: updated,
});

export const updateSearchFormRarenessActionCreator = (updated) => ({
  type: SEARCH_FORM_RARENESS,
  content: updated,
});

export const updateSearchFormCountActionCreator = (updated) => ({
  type: SEARCH_FORM_COUNT,
  content: updated,
});

export const findPlantsActionCreator = () => ({
  type: SEARCH_FORM_FIND_PLANTS,
});

export const setPlantsActionCreator = (plants) => ({
  type: SEARCH_FORM_SET_PLANTS,
  plants: plants,
});

export default searchReducer;
