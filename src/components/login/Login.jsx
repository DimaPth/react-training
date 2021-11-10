import React from "react";
import SignForm from "./Form";
import { NavLink, useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useActions } from "../../hooks/useActions";

const Login = () => {
  const { push } = useHistory();
  const { setIsAuth, setIsError, setIsLoading, setUser } = useActions();
  const auth = getAuth();
  const handleLogin = async (email, password) => {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        });
        setIsAuth(true);
        setIsLoading(false);
        push("/");
      })
      .catch((e) => {
        setIsError(e.code.slice(5));
        setIsLoading(false);
      });
  };

  return (
    <>
      <SignForm title="Sign in" handleClick={handleLogin}>
        Or{" "}
        <NavLink to="/register" onClick={() => setIsError(null)}>
          register now!
        </NavLink>
      </SignForm>
    </>
  );
};

export default Login;
