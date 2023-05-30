import React, { Component } from "react";
import MenuItem from "./MenuItem";

const reserveMenu = [
  { id: 1, message: "김치찌개" },
  { id: 2, message: "라면" },
  { id: 3, message: "감자탕" },
  { id: 4, message: "돈까스" },
];

var timer;

class MenuItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };
  }
  componentDidMount() {
    const { menu } = this.state;

    timer = setInterval(() => {
      if (menu.length < reserveMenu.length) {
        const index = menu.length;
        menu.push(reserveMenu[index]);
        this.setState({
          menu: menu,
        });
      } else {
        this.setState({
          menu: [],
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.menu.map((menu) => {
          return <MenuItem key={menu.id} id={menu.id} message={menu.message} />;
        })}
      </div>
    );
  }
}

export default MenuItemList;
