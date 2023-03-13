const init = {
  rareness: [
    {
      id: 0,
      name: "Обычный",
      value: 1,
    },
    {
      id: 1,
      name: "Необычный",
      value: 2,
    },
    {
      id: 2,
      name: "Редкий",
      value: 3,
    },
    {
      id: 3,
      name: "Очень редкий",
      value: 4,
    },
    {
      id: 4,
      name: "Легендарный",
      value: 5,
    },
  ]
}

const rarenessReducer = (state=init, action) => {

  return state
};

export default rarenessReducer
