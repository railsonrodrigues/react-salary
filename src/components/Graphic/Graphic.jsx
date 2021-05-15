import React from "react";
import './styles.css';

export default function Graphic(
  netSalary,
  inssDiscount,
  irrfDiscount,
  otherDiscounts
) {
  // if (!one && !two && !three) {
  //   oneBar.flexGrow = 1;
  //   oneBar.background = 'rgb(80, 80, 80)';
  //   twoBar.flexGrow = 1;
  //   twoBar.background = 'rgb(80, 80, 80)';
  //   threeBar.flexGrow = 1;
  //   threeBar.background = 'rgb(80, 80, 80)';
  // } else {
  //   oneBar.flexGrow = one / 100;
  //   twoBar.flexGrow = two / 100;
  //   threeBar.flexGrow = three / 100;
  // }
  return (
    // <div className={ css.graphicBar }>
    //   <div className={ css.partOne } style={ oneBar } ></div>
    //   <div className={ css.partTwo } style={ twoBar } ></div>
    //   <div className={ css.partThree } style={ threeBar } ></div>
    // </div>
    <div className="graphic"></div>
  );
}
