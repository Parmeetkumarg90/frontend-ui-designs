"use client"

import Image from "next/image";
import style from "./style.module.css";
import { FormControlLabel, InputAdornment, Radio, RadioGroup, TextField } from "@mui/material";

export default function Home() {
  return (
    <div className={style.grid}>
      <div className={`${style.halfPart} ${style.leftPart}`}>
        <header className={style.header}>
          <p className={style.bigText}>Mortgage Calculator</p>
          <p className={`${style.greyText} ${style.link}`}>Clear All</p>
        </header>
        <div className={`${style.fullWidth}`}>
          <span>
            <p className={style.greyText}>Mortgage Amount</p>
            <TextField
              id="outlined-start-adornment"
              slotProps={{
                input: {
                  className: `${style.input}`,
                  startAdornment: <InputAdornment position="start" className={`${style.icon} ${style.leftCurve}`}>£</InputAdornment>,
                },
              }}
            />
          </span>
        </div>
        <div className={`${style.fullWidth} ${style.gridHalfDivide}`}>
          <span>
            <p className={style.greyText}>Mortgage Term</p>
            <TextField
              slotProps={{
                input: {
                  className: `${style.input}`,
                  endAdornment: <InputAdornment position="end" className={`${style.icon} ${style.rightCurve}`}>years</InputAdornment>,
                },
              }}
            />
          </span>
          <span>
            <p className={style.greyText}>Interest Rate</p>
            <TextField
              variant="outlined"
              slotProps={{
                input: {
                  className: `${style.input} ${style.rightCurve}`,
                  endAdornment: <InputAdornment position="end" className={`${style.icon} ${style.rightCurve}`}>%</InputAdornment>,
                },
              }}
            />
          </span>
        </div>
        <div className={`${style.fullWidth}`}>
          <span>
            <p className={style.greyText}>Mortgage Type</p>
            <RadioGroup
              name="radio-buttons-group"
            >
              <FormControlLabel value="repayment" control={<Radio />} label="Reypayment" className={style.radio} />
              <FormControlLabel value="interest_only" control={<Radio />} label="Interest Only" className={style.radio} />
            </RadioGroup>
          </span>
        </div>
        <button className={`${style.fullWidth} ${style.calculateButton}`}>
          <img src={"/icon-calculator.svg"} alt="icon-calculator.svg" />
          Calculate Repayments
        </button>
      </div>
      <div className={`${style.halfPart} ${style.rightPart}`}>
        <img src={"/illustration-empty.svg"} alt="illustration-empty.svg" className={style.rightImage} />
        <p className={`${style.whiteText} ${style.bigText}`}>Results shown here</p>
        <p className={`${style.greyText}`}>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </div>
    </div >
  );
}
