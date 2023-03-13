import axios from "axios";
import React from "react";
import PlantCard from "./PlantCard/PlantCard";

class PlantListClass extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:8080/api/plants").then((response) => {
      console.log(response);

      this.props.setPlants(response.data);
    });
    console.log("mount");
  }
  componentDidUpdate() {
    console.log("update");
  }
  componentWillUnmount() {
    console.log("will unmount");
  }
  render() {
    return (
      <div className="d-flex flex-column m-2">
        {this.props.plants.map((p) => (
          <PlantCard name={p.name} key={p.id} info={p.description} />
        ))}
      </div>
    );
  }
}

export default PlantListClass;
