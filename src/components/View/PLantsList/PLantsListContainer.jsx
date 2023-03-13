import { connect } from "react-redux";
import PlantList from "../../PlantList/PlantList";

const mapStateToProps = (store) => ({
  plants: store.plantsReducer.plants
})

const mapDispatchToProps = (dispatch) => ({

})


const PLantsListContainer = connect(mapStateToProps, mapDispatchToProps)(PlantList)

export default PLantsListContainer;
