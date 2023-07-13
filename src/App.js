// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Aleart from './Components/Aleart';
// import About from './Components/About';
// import {
//     Routes,
//     Route,
//   } from "react-router-dom";
  
  
// import About from './Components/About';

function App() {
    const [mode, setMode] = useState('light');
    const [buttonTextChange, setButtonText] = useState("Enable Dark Mode")
    const [alert, setAlert] = useState(null)
    const showAlert = (message, type) => {

        setAlert({msg: message, type: type})
        setTimeout(() => {
            setAlert(null)
        }, 3000);

    }
    const toggleButtonMode = () => {
        if (mode === 'light') {
            setMode('dark')
            setButtonText('Enable Light Mode')
            document.body.style.backgroundColor = '#1e183a'
            showAlert("Dark mode has been enable", "success")


        } else {
            setMode('light')
            setButtonText('Enable Dark Mode')
            document.body.style.backgroundColor = 'white'
            showAlert("Light mode has been enable", "success")
        }
    }

   
    return (
        <> {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
            
                <Navbar title="TextUtils" tcolor="light"
                    mode={mode}
                    toggleButtonMode={toggleButtonMode}
                    ButtonText={buttonTextChange}/>

                <Aleart alert={alert}/>
                <div className="container my-3">
                    {/* {/* <Routes>                        
                        <Route path='/' element={ <TextForm heading='Enter the text to analyze below'
                                mode={mode}
                                showAlert={showAlert}/>} />
                            
                        <Route path="/about"  element={<About/>}  />
                            
                    </Routes> */}
                    <TextForm heading='Enter the text to analyze below'
                                mode={mode}
                                showAlert={showAlert}/>
                  
                </div>
           
        </>
    );
}

export default App;
