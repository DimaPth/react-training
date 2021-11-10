import React from "react";
import SignForm from "./Form";
import { NavLink, useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useActions } from "../../hooks/useActions";

const SignUp = () => {
  const { push } = useHistory();
  const { setIsAuth, setIsError, setIsLoading, setUser } = useActions();
  const auth = getAuth();
  const handleRegister = async (username, email, password) => {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUser({
          displayName: username,
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        });
        updateProfile(user, {
          displayName: username,
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
      <SignForm title="Sign up" handleClick={handleRegister} register>
        Alredy have an account?{" "}
        <NavLink to="/login" onClick={() => setIsError(null)}>
          Sign in
        </NavLink>
      </SignForm>
    </>
  );
};

export default SignUp;
