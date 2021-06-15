import Reacti from "react";
import { NavLink, Route } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import LoginForm from "../pages/Login";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button primary>Giriş Yap</Button>
        <Button primary style={{ marginLeft: "0.5em" }}>
          Kayıt Ol
        </Button>
      </Menu.Item>
    </div>
  );
}
