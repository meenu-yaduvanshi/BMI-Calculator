import { useEffect, useState } from 'react'
import './style.css'

function Calculator() {
    const [age, setAge] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [msg, setMsg] = useState()
    const [bmi, setBmi] = useState()
    const [feetToCM, setFeetToCM] = useState()

    function changeFeetToCM(e) {
        const convert = e.target.value
        setFeetToCM(convert * 30.48)
    }
    function inputAge(e) {
        setAge(e.target.value)
    }
    function inputHeight(e) {
        setHeight(e.target.value)
    }
    function inputWeight(e) {
        setWeight(e.target.value)
    }
    const data = (weight * 10000) / height * height
    const handleSubmit = (e) => {
        e.preventDefault()
        if (weight > 0 && height > 0) {
            let bmiCalculate = (weight / (height * height) * 10000).toFixed(0);
            setBmi(bmiCalculate)
            if (bmiCalculate < 19) {
                return setMsg("Your are under weight")
            }
            else if (bmiCalculate >= 19 && bmiCalculate <= 25) {
                return setMsg("You are healthi !")
            }
            else {
                return setMsg("You are over weight")
            }
        }
        else {
            alert("Please enter a valid number")
        }
    }
    const clearData = () => {
        setAge("")
        setHeight("")
        setWeight("")
        setMsg("")
        setBmi("")
    }
    return (
        <div>
            <h1>BMI Calculate</h1>
            <h2>Body Mass Index</h2>
            <form onSubmit={handleSubmit}>
                <div className='container'>
                    <div className='data'>
                        <label htmlFor="age">Age</label>
                        <input id='age' type="number" value={age} onChange={inputAge} placeholder='Age' />
                    </div>
                    <div className='data'>
                        <label htmlFor="height" >Height</label>
                        <input id='height' type="number" value={height} onChange={inputHeight} placeholder='Height in CM' />
                    </div>
                    <div className='data'>
                        <label htmlFor="weight">Weight</label>
                        <input id='weight' type="number" value={weight} onChange={inputWeight} placeholder='Weight in KG' />
                    </div>
                    <div className='data'>
                        <button type='submit'>Calculate</button>
                    </div>
                </div>
                <div className='data'>
                    <p>Your BMI is -:{bmi}</p>
                    <p>Messege -:{msg}</p>
                </div>
            </form>
            <button type='submit' onClick={clearData}>Refresh</button>
            <br/>
            <label>Convertade Feet to Centimeter
                <input type="number" value={feetToCM} onChange={changeFeetToCM} placeholder='Converted feet to cm' /></label>
            <p>Cm - {feetToCM}</p>
        </div >
    )
}
export default Calculator