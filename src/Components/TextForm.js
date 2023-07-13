import {useState} from "react"
import React from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("uppercase was click")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Uppercase Done", "success")
    }
    const handleLoClick = () => {
        console.log("lowercase was click")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Lowercase Done", "success")
    }

    const handleOnChange = (event) => {
        console.log("on Change")
        setText(event.target.value)
    }

    const handleClearText = () => {
        setText('')
        props.showAlert("TextClear  Done", "success")
    }
    const handleCopyText = () => {
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success")
    }


    const [text, setText] = useState("Enter text here")
    // text = "this text"    wrong way to change  the state
    // setText("Thsi si text")  right way to change theh state
    return (
        <>
            <div className="container"
                style={
                    {
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }
            }>
                <h1>{
                    props.heading
                }</h1>
                <div className="mb-3">

                    <textarea className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={
                            {
                                backgroundColor: props.mode === 'dark' ? '#1e183a' : 'white',
                                color: props.mode === 'dark' ? 'white' : 'black'
                            }
                    }></textarea>
                </div>
                <button className="btn btn-primary mx-3"
                    onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3"
                    onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3"
                    onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-primary mx-3"
                    onClick={handleCopyText}>Copy Text</button>
            </div>
            <div className="container my-3"
                style={
                    {
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }
            }>
                <h1>Your text Summary</h1>
                <p>{
                    text.split(" ").length - 1
                }
                    words and {
                    text.length
                }
                    characters</p>
                <p>{
                    0.008 * text.split(" ").length
                }
                    Minutes read
                </p>
                <h2>Preview</h2>
                <p>{
                    text.length > 0 ? text : 'Enter text preview show here'
                }</p>

            </div>

        </>
    )
}
