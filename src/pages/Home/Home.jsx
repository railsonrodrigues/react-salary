import React, { useEffect, useState } from "react";
import "./../../globalStyles.css";

import Card from "../../components/Card/Card";
import FlatCard from "../../components/FlatCard/FlatCard";
import Graphic from "../../components/Graphic/Graphic";
import Form from "../../components/Form/Form";

import getResultCalc from './../../helpers/calc/interface/getResult.js';

export default function App() {

  const [grossSalary, setGrossSalary] = useState(0);
  const [nDependents, setnDependents] = useState(0);
  const [otherDiscounts, setOtherDiscounts] = useState(0);

  const [netSalary, setNetSalary] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [inss, setInss] = useState(0);
  const [irrf, setIrrf] = useState(0);

  const [netSalaryPercent, setNetSalaryPercent] = useState(0);
  const [totalDiscountPercent, setTotalDiscountPercent] = useState(0);
  const [inssPercent, setInssPercent] = useState(0);
  const [irrfPercent, setIrrfPercent] = useState(0);
  const [otherDiscountsPercent, setOtherDiscountsPercent] = useState(0);

  // like componentDidMount
  useEffect(() => {
    console.log('Mounted')
    // like componentDidUnmount
    return () => {
      console.log('Unmounted')
    }
  }, []);

  // like componentDidUpdate
  useEffect(() => {
    console.log('Updated')
  });

  useEffect(() => {
    const inputs = Array.from(document.querySelectorAll('input'));

    const inputGrossSalary = Number(inputs.find(input => input.id === "grossSalary").value);
    const inputnDependents = Number(inputs.find(input => input.id === "nDependents").value);
    const inputOtherDiscounts = Number(inputs.find(input => input.id === "otherDiscounts").value);

    const result = getResultCalc(inputGrossSalary, inputnDependents, inputOtherDiscounts);

    setNetSalary(() => result.netSalary);
    setTotalDiscount(() => result.totalDiscount);
    setInss(() => result.inss);
    setIrrf(() => result.irrf);
    setOtherDiscounts(() => result.otherDiscounts);


    setNetSalaryPercent(() => result.netSalaryPercent);
    setTotalDiscountPercent(() => result.totalDiscountPercent);
    setInssPercent(() => result.inssPercent);
    setIrrfPercent(() => result.irrfPercent);
    setOtherDiscountsPercent(() => result.otherDiscountsPercent);

  }, [grossSalary, nDependents, otherDiscounts]);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const inputs = Array.from(event.target.querySelectorAll('input'));

    const inputGrossSalary = Number(inputs.find(input => input.id === "grossSalary").value);
    const inputnDependents = Number(inputs.find(input => input.id === "nDependents").value);
    const inputOtherDiscounts = Number(inputs.find(input => input.id === "otherDiscounts").value);

    setGrossSalary(() => inputGrossSalary);
    setnDependents(() => inputnDependents);
    setOtherDiscounts(() => inputOtherDiscounts);
  }

  return (
    <>
      <Form onSubmit={handleSubmitForm} className="container flexContainer row" />
      <div className="container flexContainer row">
        <Card title="Salário líquido" value={netSalary} percentage={netSalaryPercent} />
        <Card title="Desconto total" value={totalDiscount} percentage={totalDiscountPercent} />
      </div>
      <div className="container flexContainer column">
        <FlatCard title="INSS" value={inss} percentage={inssPercent} />
        <FlatCard title="IRRF" value={irrf} percentage={irrfPercent} />
        <FlatCard title="Outros" value={otherDiscounts} percentage={otherDiscountsPercent} />
      </div>
      <div className="container flexContainer row">
        <Graphic />
      </div>
    </>
  );
}
