import "../App.css"
import "../css/LoanRequest.css"
import "../css/Button.css"
import NumberFormat from 'react-number-format';
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const LoanRequest = () => {

    let navigate = useNavigate();

    const [principle, setPrinciple] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [isMale, setIsMale] = useState("")
    const [isFemale, setIsFemale] = useState("")
    const [address, setAddress] = useState("")
    const [isMortgaged, setIsMortgaged] = useState("")
    const [purpose, setPurpose] = useState("")
    const [period, setPeriod] = useState("")

    const handlePrinciple = e => {
        setPrinciple(e.target.value)
    }
    const handleName = e => {
        setName(e.target.value)
    }
    const handlePhone = e => {
        setPhone(e.target.value)
    }
    const handleMale = e => {
        setIsMale(e.target.value)
    }
    const handleIsFemale = e => {
        setIsFemale(e.target.value)
    }
    const handleAddress = e => {
        setAddress(e.target.value)
    }
    const handleIsMortgage = e => {
        setIsMortgaged(e.target.value)
    }
    const handlePurpose = e => {
        setPurpose(e.target.value)
    }
    const handlePeriod = e => {
        setPeriod(e.target.value)
    }


    const handleSubmit = e => {
        console.log("Submited");
        navigate("/thank-you")
    }


    return ( 
        <div className="container">
            <h1>網上申請</h1>
            <hr></hr>
            <h2>申請人資料</h2>
            <form id="requestForm" className="loanForm" onSubmit={handleSubmit}>
                <span className="loanFormInputGroup loanFormInputGroup-principle">
                    <label>申請貸款額(港幣)</label>
                    <NumberFormat id="request-form-principle" className="form-item-input" value={principle} onChange={handlePrinciple} thousandSeparator={true} inputMode="numeric" required="required"/>
                </span>
                <span className="loanFormInputGroup loanFormInputGroup-phone">
                    <label>手提電話</label>
                    <NumberFormat id="request-form-phone" className="form-item-input" value={phone} onChange={handlePhone} thousandSeparator={false} inputMode="numeric" maxLength="8" minLength="8" required/>
                </span>
                <span className="loanFormInputGroup loanFormInputGroup-name">
                    <label>姓名</label>
                    <input id="request-form-name" className="form-item-input" value={name} onChange={handleName} type="text" minLength="3" required/>
                </span>
                <fieldset className="loanFormInputGroup loanFormInputGroup-gender">
                    <legend>稱謂先生女士</legend>
                    <div>
                        <input type="radio" id="male" name="gender" value={isMale} onChange={handleMale} checked required/>
                        <label htmlFor="male">先生</label>
                    </div>

                    <div>
                        <input type="radio" id="female" name="gender" value={isFemale} onChange={handleIsFemale} required />
                        <label htmlFor="female">女士</label>
                    </div>
                </fieldset>

                <span className="loanFormInputGroup loanFormInputGroup-address">
                    <label>物業地址</label>
                    <input id="request-form-address" className="form-item-input" value={address} onChange={handleAddress} type="text" minLength="10" required/>
                </span>
                <span className="loanFormInputGroup loanFormInputGroup-status">
                    <label htmlFor="yes">是否已按揭或抵押於任何銀行或財務公司?</label>
                    <input type="checkbox" id="request-form-status" className="form-item-input" name="isMortgage" value={isMortgaged} onChange={handleIsMortgage} />
                </span>

                <span className="loanFormInputGroup loanFormInputGroup-purpose">
                    <label>貸款用途</label>
                    <input id="request-form-purpose" className="form-item-input" value={purpose} onChange={handlePurpose} required/>
                </span>
                <span className="loanFormInputGroup loanFormInputGroup-period">
                    <label>還款期(月)</label>
                    <NumberFormat id="request-form-period" className="form-item-input" value={period} onChange={handlePeriod} thousandSeparator={true} inputMode="numeric" minLength="1" required/>
                </span>
                <button type="submit" className="default-button loanFormInputGroup-submit" >提交</button>
            </form>
        </div>
     );
}
 
export default LoanRequest;