import { connect } from "react-redux";
import { setPlantsActionCreator } from "../../../redux/reducers/search-reducer";
import PlantList from "../../PlantList/PlantList";

const mapStateToProps = (state) => ({
  plants: state.searchReducer.list
})

const mapDispatchToProps = (dispatch) => ({
  setPlants: (data) => {
    dispatch(setPlantsActionCreator(data))
  }

})

const FoundedPlantsContainer = connect(mapStateToProps, mapDispatchToProps)(PlantList)

export default FoundedPlantsContainer;
