import React, { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Form } from "./Form";
import { Cloud } from "../../components/icons/Cloud";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import illustration from "../../assets/images/illustration.png";
import styles from "./auth.module.css";
import { useActions } from "../../hooks/useActions";
import { registration } from "../../store/actions/user";

interface IAuthProps {
  type: string;
}

export const Auth: React.FC<IAuthProps> = ({ type }) => {
  const redirect = useNavigate();
  const { login } = useActions();
  const { isAuth } = useTypedSelector((state) => state.user);

  const handleOnSubmit = (data: FieldValues) => {
    if (type === "registration") {
      registration(data.email, data.password, data.username);
    }
    if (type === "login") {
      login(data.email, data.password);
    }
  };

  useEffect(() => {
    if (isAuth) {
      redirect("/");
    }
  }, [isAuth]);

  return (
    <section className={styles.auth}>
      <img src={illustration} alt="Illustration" />
      {type === "login" ? (
        <Form
          title="Login"
          descr="Welcome back on board!"
          link="registration"
          onSubmit={handleOnSubmit}
        />
      ) : (
        <Form
          descr="Welcome onboard with us!"
          title="Registration"
          link="login"
          onSubmit={handleOnSubmit}
        />
      )}
      <Cloud className={styles.cloud1} />
      <Cloud className={styles.cloud2} />
      <Cloud className={styles.cloud3} />
      <Cloud className={styles.cloud4} />
      <Cloud className={styles.cloud5} />
    </section>
  );
};
