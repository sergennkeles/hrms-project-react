import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";

export default class MenuExampleSizeLarge extends Component {
  render() {
    return (
      <Menu size="large">
        <Menu.Item>Anasayfa</Menu.Item>
        <Menu.Item>Hakkımızda</Menu.Item>
        <Menu.Item>İletişim</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Üye ol</Button>
            <Button primary style={{ marginLeft: "0.5em" }}>
              Giriş yap
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
