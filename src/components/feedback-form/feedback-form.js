import './feedback-form.sass';
import { useState } from 'react';


function FeedbackForm() {
    const [inputNameValue, setInputNameValue] = useState("");
    const [inputSurnameValue, setInputSurnameValue] = useState("");
    const [inputMailValue, setInputMailValue] = useState("");
    const [inputNameError, setInputNameError] = useState(false);
    const [inputSurnameError, setInputSurnameError] = useState(false);
    const [inputMailError, setInputMailError] = useState(false);
    const handleNameInput = (e) => {
        const inputValue = e.target.value;
        const cleanedValue = inputValue.replace(/[\d\s]/g, "");
        const capitalizedText = cleanedValue.charAt(0).toUpperCase() + cleanedValue.slice(1).toLowerCase();
        setInputNameValue(capitalizedText);
      }; 

    const handleSurnameInput = (e) => {
        const inputValue = e.target.value;
        const cleanedValue = inputValue.replace(/[\d\s]/g, "");
        const capitalizedText = cleanedValue.charAt(0).toUpperCase() + cleanedValue.slice(1).toLowerCase();
    setInputSurnameValue(capitalizedText);
    }
    const handleMailInput = (e) => {
        const inputValue = e.target.value;
        const cleanedValue = inputValue.replace(/[\s]/g, "");
    setInputMailValue(cleanedValue);
    };
    const handleSubmit = (e) => {
    e.preventDefault();

    if (inputNameValue === "") {
      setInputNameError(true);
    } else {
      setInputNameError(false);
    }

    if (inputSurnameValue === "") {
      setInputSurnameError(true);
    } else {
      setInputSurnameError(false);
    }
    if (inputMailValue === "") {
        setInputMailError(true);
      } else {
        setInputMailError(false);
      }
      localStorage.setItem("name", inputNameValue);
      localStorage.setItem("surname", inputSurnameValue);
      localStorage.setItem("email", inputMailValue);
    setInputNameValue("");
    setInputSurnameValue("");
    setInputMailValue("");
  };
    return(
        <div className="feedback__form">
            <form onSubmit={handleSubmit} className="feedback__form">
            <input className={`feedback__form-name ${inputNameError ? "feedback__form-error" : ""}`} pattern="[A-Za-z]+" placeholder='Enter your name..'type="text" onInput={handleNameInput} value={inputNameValue} />
            <input className={`feedback__form-name ${inputSurnameError ? "feedback__form-error" : ""}`} pattern="[A-Za-z]+" placeholder='Enter your surname..'type="text" onInput={handleSurnameInput} value={inputSurnameValue} />
            <input className={`feedback__form-email ${inputMailError ? "feedback__form-error" : ""}`} onInput={handleMailInput} value={inputMailValue}  placeholder='Enter your e-mail...'type="email" />
            <button className='feedback__form-btn'>Subscribe</button>
        </form>
        </div>
    )
}

export default FeedbackForm;