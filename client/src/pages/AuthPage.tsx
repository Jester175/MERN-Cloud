import React from "react";
import { Auth } from "../modules/Auth";

type IType = "login" | "registration" | 'asd';

interface IAuthPageProps {
  type: IType;
}

export const AuthPage: React.FC<IAuthPageProps> = ({ type }) => {
  return (
    <section>
      <Auth type={type} />
    </section>
  );
};
