const VIEW_SEARCH = "VIEW_SEARCH";
const VIEW_SEARCH_FILTERS = "VIEW_SEARCH_FILTERS"

const init = {
  filters: {
    query: "",
    rareness: [],
  },
  list: [],
};

const viewReducer = (state = init, action) => {
  switch (action.type) {
    case VIEW_SEARCH:
      console.log(action.content) 
      return {
        ...state,
        filters: {
          ...state.filters,
          query: action.content,
        },
      };
    case VIEW_SEARCH_FILTERS:
      

      let rars = [...state.filters.rareness]

      if (!rars.includes(action.name) && action.chacked === true)
        rars = [...rars, action.name]
      
      if (rars.includes(action.name) && action.chacked === false)
        rars = rars.filter( r => r !== action.name )

      console.log(rars);
      return {
        ...state,
        filters: {
          ...state.filters,
          rareness: [...rars]
        },
      }

    default:
      return state;
  }
};

export const viewSearchActionCreator = (content) => ({
  type: VIEW_SEARCH,
  content: content,
});

export const viewSearchFiltersActionCreator = (name, chacked) => ({
  type: VIEW_SEARCH_FILTERS,
  name: name,
  chacked: chacked
});

export default viewReducer;
