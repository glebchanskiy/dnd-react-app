import { connect } from "react-redux";
import Plant from "./Plant";

const mapStateToProps = (state, ownProps) => ({
  name: state.plantsReducer.plants[ownProps.id].name,
  rareness: state.plantsReducer.plants[ownProps.id].rareness,
  locations: state.plantsReducer.plants[ownProps.id].locations,
  features: state.plantsReducer.plants[ownProps.id].features,
  difficult: state.plantsReducer.plants[ownProps.id].difficult,
  description: state.plantsReducer.plants[ownProps.id].description,
})

const mapDispatchToProps = (dispatch) => ({

})

const PlantContainer = connect(mapStateToProps, mapDispatchToProps)(Plant)


export default PlantContainer