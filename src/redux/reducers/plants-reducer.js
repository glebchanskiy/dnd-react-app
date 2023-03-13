const CREATE_FORM_ADD_PLANT = "CREATE_FORM_ADD_PLANT";

const init = {
  plants: [
    {
      id: 0,
      name: "Растение 0",
      rareness: 0,
      locations: [
        {
          id: 0,
          name: "озеро",
        },
        {
          id: 1,
          name: "лес",
        },
      ],
      features: "Equano dipisicing nisi minim -1 veniam.",
      difficult: 5,
      description:
        "Reprehenderit tempor qui veniam est ullamco dolore proident.",
    },
    {
      id: 1,
      name: "Растение 1",
      rareness: 1,
      locations: [
        {
          id: 1,
          name: "лес",
        },
        {
          id: 4,
          name: "река",
        },
      ],
      features: "Adipisicing nisi minim +3 veniam.",
      difficult: 3,
      description:
        "Cupidatat Lorem elit esse reprehenderit tempor qui veniam est ullamco dolore proident.",
    },
    {
      id: 2,
      name: "Растение 2",
      rareness: 2,
      locations: [
        {
          id: 2,
          name: "луг",
        },
      ],
      features: "Nisi minim -2 veniam.",
      difficult: 1,
      description:
        "Lorem elit esse reprehenderit tempor qui veniam est ullamco dolore proident.",
    },
    {
      id: 3,
      name: "Растение 3",
      rareness: 3,
      locations: [
        {
          id: 0,
          name: "озеро",
        },
        {
          id: 1,
          name: "лес",
        },
        {
          id: 2,
          name: "луг",
        },
        {
          id: 3,
          name: "болото",
        },
        {
          id: 4,
          name: "река",
        },
      ],
      features: "Lorem adipisicing nisi minim +5 veniam.",
      difficult: 2,
      description:
        "Laborum qui exercitation veniam id ullamco est. Cupidatat Lorem elit esse reprehenderit tempor qui veniam est ullamco dolore proident.",
    },
  ],
};

const plantsReducer = (state = init, action) => {
  let updatedState = { ...state };
  updatedState.plants = [...state.plants];

  switch (action.type) {
    case CREATE_FORM_ADD_PLANT: {
      // if (!state.plants.map((p) => p.name).includes(action.plant.name) && action.plant.name.length > 2)
      //   state.plants.push({
      //     id: 0,
      //     name: action.plant.name,
      //     rareness: action.plant.rareness,
      //     locations: action.plant.locations,
      //     features: action.plant.features,
      //     difficult: action.plant.difficult,
      //     description: action.plant.description,
      //   });
      // else
      //   alert(
      //     "Растение c названием: " + action.plant.name + "  уже существует"
      //   );
      console.log("add plant");
      console.log(updatedState);
      break;
    }
    default:
      break;
  }

  return updatedState;
};

export default plantsReducer;
