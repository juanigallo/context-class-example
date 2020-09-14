import React from "react";
import ThemeContext from "../../contexts/ThemeContext";

class Component3 extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <>
        <p>Soy el componente3</p>
        <p>
          El nombre del usuario es {this.context.name} y su apellido es{" "}
          {this.context.surname}
        </p>
      </>
    );
  }
}

export default Component3;
