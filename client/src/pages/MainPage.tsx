import React from "react";
import { Main } from "../modules/Main";
import { MyContainer } from "../UI/MyContainer";

export const MainPage: React.FC = () => {
  return (
    <section>
      <MyContainer>
        <Main />
      </MyContainer>
    </section>
  );
};
