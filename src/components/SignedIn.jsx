import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png/400px-Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png"
        />
        <Dropdown pointing="top left" text="Sergen Keleş">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              as={NavLink}
              to="/jobadvertisement/add"
              text="İlan Ver"
              icon="file alternate outline"
            />
            <Dropdown.Item
              as={NavLink}
              to={"/jobadvertisement/passive"}
              text="Onay Bekleyen İlanlar"
              icon="arrow alternate circle left outline"
            />
            <Dropdown.Item
              onClick={props.signOut}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
