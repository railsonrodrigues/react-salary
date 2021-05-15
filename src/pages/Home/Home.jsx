import React, { useState } from "react";
import "./../../globalStyles.css";

import Card from "../../components/Card/Card";
import FlatCard from "../../components/FlatCard/FlatCard";
import Graphic from "../../components/Graphic/Graphic";
import Form from "../../components/Form/Form";

import calcSalary from './../../helpers/calc';

export default function App() {

  const [netSalary, setNetSalary] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [inss, setInss] = useState(0);
  const [irrf, setIrrf] = useState(0);
  const [otherDiscounts] = useState(0);

  const [netSalaryPercent, setNetSalaryPercent] = useState(0);
  const [totalDiscountPercent, setTotalDiscountPercent] = useState(0);
  const [inssPercent, setInssPercent] = useState(0);
  const [irrfPercent, setIrrfPercent] = useState(0);
  const [otherDiscountsPercent, setOtherDiscountsPercent] = useState(0);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const inputs = Array.from(event.target.querySelectorAll('input'));

    const inputGrossSalary = Number(inputs.find(input => input.id === "grossSalary").value);
    const inputnDependents = Number(inputs.find(input => input.id === "nDependents").value);
    const inputOtherDiscounts = Number(inputs.find(input => input.id === "otherDiscounts").value);

    console.log(calcSalary(inputGrossSalary, inputnDependents, inputOtherDiscounts));
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

// export default class App extends Component {

//   handleForm = (event) => {
//     // criar um componente para form e refatorar essa função
//     event.preventDefault();

//     const salaryValue = event.target[0].value;
//     const {
//       inssFormatted,
//       irrfFormatted,
//       salLiquidoFormatted,
//       salLiquidoPercent,
//       discountPercentINSS,
//       discountPercentIRRF,
//     } = calcSalary(salaryValue);

//     this.setState({
//       currentSalary: salaryValue,
//       baseINSS: inssFormatted.baseValue,
//       discountINSS: inssFormatted.discount,
//       percentDiscountINSS: discountPercentINSS,
//       baseIRRF: irrfFormatted.baseValue,
//       discountIRRF: irrfFormatted.discount,
//       percentDiscountIRRF: discountPercentIRRF,
//       liquidSalary: salLiquidoFormatted,
//       liquidSalaryPercent: salLiquidoPercent,
//     });
//   };

//   render() {
//     const {
//       baseINSS,
//       baseIRRF,
//       discountINSS,
//       discountIRRF,
//       liquidSalary,
//       percentDiscountINSS,
//       percentDiscountIRRF,
//       liquidSalaryPercent,
//     } = this.state;

//     return (
//       <div className={css.appContainer}>
//         <Header
//           title="React Salary"
//           description="Calcule aqui o seu salário líquido"
//         />
//         <form onSubmit={this.handleForm}>
//           <Input
//             id={css.grossSalary}
//             type="number"
//             description="Seu salário (R$)"
//             readOnly={false}
//             step="0.01"
//           />
//           <Input
//             id={css.baseInss}
//             type="text"
//             description="Base INSS"
//             readOnly={true}
//             value={baseINSS}
//           />
//           <Input
//             id={css.descInss}
//             type="text"
//             description="Desconto INSS"
//             readOnly={true}
//             value={`${discountINSS} (${percentDiscountINSS}%)`}
//           />
//           <Input
//             id={css.baseIrrf}
//             type="text"
//             description="Base IRRF"
//             readOnly={true}
//             value={baseIRRF}
//           />
//           <Input
//             id={css.descIrrf}
//             type="text"
//             description="Desconto IRRF"
//             readOnly={true}
//             value={`${discountIRRF} (${percentDiscountIRRF}%)`}
//           />
//           <Input
//             id={css.liquidSalary}
//             type="text"
//             description="Salário Líquido"
//             readOnly={true}
//             value={`${liquidSalary} (${liquidSalaryPercent}%)`}
//           />
//           <SubmitButton id={css.submitButton} value="Calcular" />
//         </form>
//         <Graphic
//           one={liquidSalaryPercent}
//           two={percentDiscountINSS}
//           three={percentDiscountIRRF}
//         />
//         <hr />
//       </div>
//     );
//   }
// }
