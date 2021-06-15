import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { Button, Menu } from "semantic-ui-react";
import SignedOut from "../components/SignedOut";
import SignedIn from "../components/SignedIn";
import { useHistory } from "react-router";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSignOut(params) {
    setIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }
  return (
    <Menu size="large">
      <Menu.Item as={NavLink} to="/">
        Anasayfa
      </Menu.Item>
      <Menu.Item>Hakkımızda</Menu.Item>
      <Menu.Item>İletişim</Menu.Item>
      <Menu.Menu position="right">
        {isAuthenticated ? (
          <SignedIn signOut={handleSignOut} />
        ) : (
          <SignedOut signIn={handleSignIn} /> // props olarak parent componentten child componente veri gönderebiliriz. Burada handleSignIn
          // fonksiyonu SignedOut.jsx deki Giriş Yap butonuna props olarak yollayıp  giriş işleminin olmasını sağladık.
        )}
      </Menu.Menu>
    </Menu>
  );
}
