import React from 'react';

import TopMenu from "../../components/TopMenu/TopMenu";
import { useLocation } from "react-router";

export default function AboutMe() {
  return (
    <>
      <TopMenu pathname={useLocation().pathname} />
      <h1>Sobre mim</h1>
    </>
  );
}
