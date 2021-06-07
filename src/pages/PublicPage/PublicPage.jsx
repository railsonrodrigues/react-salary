import React from 'react';

import TopMenu from "../../components/TopMenu/TopMenu";
import { useLocation } from "react-router";

export default function PublicPage() {
  return (
    <>
      <TopMenu pathname={useLocation().pathname} />
      <h1>Página Pública</h1>
    </>
  );
}
