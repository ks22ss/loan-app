import "../css/MortgageCalculator.css"
import "../App.css"
import "../css/Button.css"
import {useEffect, useState} from 'react'
import NumberFormat from 'react-number-format';

const MortgageCalculator = () => {

    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [period, setPeriod] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState("");
    const [monthlyInterest, setMonthlyInterest] = useState("");

    useEffect(()=> {
        const monthlyPayment = (principal * (rate/1200)) / (1 - (Math.pow((1 + (rate/1200)) , period * -1)));
        const monthlyInterest = (monthlyPayment*period-principal)/period;
        if(monthlyPayment){
            setMonthlyPayment(monthlyPayment);
            setMonthlyInterest(monthlyInterest);
        }
    },[principal,rate,period])

    const handleCalculate = (e) => {
        if(e.target.id === "mortgage-form-principle"){
            let amt = e.target.value
            let number = Number(amt.replace(/[^0-9.-]+/g,""));
            setPrincipal(number)
        }
        if(e.target.id === "mortgage-form-rate"){
            let amt = e.target.value
            let rate = Number(amt.replace(/[^0-9.-]+/g,""));
            setRate(rate)
            
        }
        if(e.target.id === "mortgage-form-period"){
            let amt = e.target.value
            let period = Number(amt.replace(/[^0-9.-]+/g,""));
            setPeriod(period)
        }
    }

    const handleFocusInput = e => {
        e.target.select();
    }

    const handleReset = e => {
        e.preventDefault()
        setPrincipal("")
        setRate("")
        setPeriod("")
        setMonthlyInterest("")
        setMonthlyPayment("")
    }


    return ( 
        <div className="container">
            <div className="calculator">
                <h1>按揭計算器</h1>
                <form className="form">
                    <div className="form-item">
                        <div className="form-item-label">貸款額(HKD)</div>
                        <NumberFormat id="mortgage-form-principle" className="form-item-input" onFocus={handleFocusInput} value={principal} onChange={handleCalculate} thousandSeparator={true} inputMode="numeric"/>
                    </div>
                    <div className="form-item">
                        <div className="form-item-label">按揭年利率(%)</div>
                        <NumberFormat id="mortgage-form-rate" className="form-item-input" onFocus={handleFocusInput} value={rate} onChange={handleCalculate} thousandSeparator={false} inputMode="numeric"/>
                    </div>
                    <div className="form-item">
                        <div className="form-item-label">還款期(個月)</div>
                        <NumberFormat id="mortgage-form-period" className="form-item-input" onFocus={handleFocusInput} value={period} onChange={handleCalculate} thousandSeparator={false} inputMode="numeric"/>
                    </div>

                    <table className="result-table">
                        <thead>
                            <tr>
                                <td>每月還款</td>
                                <td>每月淨利息還款</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> <NumberFormat displayType="text" value={monthlyPayment} thousandSeparator={true} decimalScale={2} prefix={"$"}/></td>
                                <td><NumberFormat displayType="text" value={monthlyInterest} thousandSeparator={true} decimalScale={2} prefix={"$"}/></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="default-button reset" onClick={handleReset}>重設</button>
                </form>
            </div>
        </div>
     );
}
 
export default MortgageCalculator;