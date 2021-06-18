import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ContainerWrapper, FlexWrapper } from "./styles";

import Card from "../../components/Card/Card";
import FlatCard from "../../components/FlatCard/FlatCard";
import Graphic from "../../components/Graphic/Graphic";
import Form from "../../components/Form/Form";
import Heading from "../../components/Heading/Heading";

import getResultCalc from "./../../helpers/calc/interface/getResult.js";
import TopMenu from "../../components/TopMenu/TopMenu";
import { useLocation } from "react-router";

export default function App() {
  const [grossSalary, setGrossSalary] = useState("0");
  const [nDependents, setnDependents] = useState("0");
  const [otherDiscounts, setOtherDiscounts] = useState("0");

  const grossSalaryRef = useRef("0");
  const nDependentsRef = useRef("0");
  const otherDiscountsRef = useRef("0");

  const inputGrossSalary = useRef(null);
  const inputnDependents = useRef(null);
  const inputOtherDiscounts = useRef(null);

  const [netSalary, setNetSalary] = useState("0");
  const [totalDiscount, setTotalDiscount] = useState("0");
  const [inss, setInss] = useState("0");
  const [irrf, setIrrf] = useState("0");

  const [netSalaryPercent, setNetSalaryPercent] = useState("0");
  const [totalDiscountPercent, setTotalDiscountPercent] = useState("0");
  const [inssPercent, setInssPercent] = useState("0");
  const [irrfPercent, setIrrfPercent] = useState("0");
  const [otherDiscountsPercent, setOtherDiscountsPercent] = useState("0");

  // like componentDidMount
  useEffect(() => {
    console.log("Mounted");
    // like componentDidUnmount
    return () => {
      console.log("Unmounted");
    };
  }, []);

  // like componentDidUpdate
  useEffect(() => {
    console.log("Updated");
  });

  useEffect(() => {
    const grossSalaryValue = Number(inputGrossSalary.current.value);
    const nDependentsValue = Number(inputnDependents.current.value);
    const otherDiscountsValue = Number(inputOtherDiscounts.current.value);

    const result = getResultCalc(
      grossSalaryValue,
      nDependentsValue,
      otherDiscountsValue
    );

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

  const handleSubmitForm = useCallback((event) => {
    event.preventDefault();

    setGrossSalary(() => inputGrossSalary.current.value);
    setnDependents(() => inputnDependents.current.value);
    setOtherDiscounts(() => inputOtherDiscounts.current.value);
  }, []);

  const location = useLocation().pathname;

  return (
    <>
      {useMemo(() => {
        return <TopMenu pathname={location} />;
      }, [location])}

      {useMemo(
        () => (
          <Heading title="Calcule Seu Salário Líquido" align="center" />
        ),
        []
      )}

      <ContainerWrapper>
        {useMemo(
          () => (
            <Form
              onSubmit={handleSubmitForm}
              inputsRefs={[
                inputGrossSalary,
                inputnDependents,
                inputOtherDiscounts,
              ]}
              role="form"
            />
          ),
          [handleSubmitForm]
        )}
      </ContainerWrapper>

      <ContainerWrapper>
        <FlexWrapper>
          <Card
            balance
            title="Salário líquido"
            value={netSalary}
            percentage={netSalaryPercent}
          />
          <Card
            title="Desconto total"
            value={totalDiscount}
            percentage={totalDiscountPercent}
          />
        </FlexWrapper>
      </ContainerWrapper>

      <ContainerWrapper>
        <FlexWrapper column>
          <FlatCard title="INSS" value={inss} percentage={inssPercent} />
          <FlatCard title="IRRF" value={irrf} percentage={irrfPercent} />
          <FlatCard
            title="Outros"
            value={otherDiscounts}
            percentage={otherDiscountsPercent}
          />
        </FlexWrapper>
      </ContainerWrapper>

      <ContainerWrapper>
        <Graphic
          netSalary={netSalary}
          inssDiscount={inss}
          irrfDiscount={irrf}
          otherDiscounts={otherDiscounts}
        />
      </ContainerWrapper>
    </>
  );
}
