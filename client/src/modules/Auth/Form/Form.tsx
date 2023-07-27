import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { MyTitle } from "../../../UI/MyTitle";
import { MyParagraph } from "../../../UI/MyParagraph";
import { MyInput } from "../../../UI/MyInput/MyInput";

import { email, password, username } from "../../../utils/settings";
import styles from "./form.module.css";

interface IFormProps {
  title: string,
  descr: string,
  link: string,
  onSubmit: (data: FieldValues) => void,
}

interface FormData {
  username: string,
  password: string,
  email: string,
}

export const Form: React.FC<IFormProps> = ({ title, descr, onSubmit, link }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const handleOnSubmit = (data: FieldValues) => {
    onSubmit(data);
    reset()
  }

  return (
    <div className={styles.wrapper}>
      <MyTitle content={title} type="h2" className={styles.title} />
      <MyParagraph content={descr} className={styles.descr} />
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => handleOnSubmit(data))}
      >
        {title === 'Registration' && <div className={styles.field}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <MyInput
            id="username"
            register={register}
            placeholder="Enter your username"
            className={styles.input}
            settings={username}
          />
          {errors.username && <p className={styles.error}>{errors.username.message}</p>}
        </div>}
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <MyInput
            id="email"
            register={register}
            placeholder="Enter your email"
            className={styles.input}
            settings={email}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <MyInput
            id="password"
            register={register}
            placeholder="Enter your password"
            className={styles.input}
            settings={password}
          />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>
        <button type="submit" className={styles.send}>
          {title}
        </button>
        <Link to={`/${link}`} className={styles.link}>{link}</Link>
      </form>
    </div>
  );
};
