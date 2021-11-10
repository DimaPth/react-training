import React, { useEffect } from "react";
import "./App.css";
import { Layout } from "antd";
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import FooterContent from "./components/footerContent/FooterContent";
import { Redirect, Route, Switch } from "react-router";
import { privateRoutes, publicRoutes } from "./routes";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useActions } from "./hooks/useActions";

const { Content } = Layout;

function App() {
  const { isAuth } = useSelector((state) => state.auth);
  const { setIsAuth, setUser } = useActions();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        });
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <HeaderMenu />
      <Content style={{ padding: "40px 0", minHeight: "90vh" }}>
        {isAuth ? (
          <Switch>
            {privateRoutes.map((route) => {
              return (
                <Route key={route.path} path={route.path} exact={route.exact}>
                  {route.component}
                </Route>
              );
            })}
            <Redirect to="/" />
          </Switch>
        ) : (
          <Switch>
            {publicRoutes.map((route) => {
              return (
                <Route key={route.path} path={route.path} exact={route.exact}>
                  {route.component}
                </Route>
              );
            })}
            <Redirect to="/login" />
          </Switch>
        )}
      </Content>
      <FooterContent />
    </Layout>
  );
}

export default App;
