import React, {useState} from 'react'

export default function () {
    const [myState, setMyState] = useState({backgroundColor: 'white', color: 'black'})

    const [btnText, setBtnText] = useState("Enable dark Mode")

    const changeToDark = () => {
        if (myState.color === 'black') {
            setMyState({backgroundColor: 'black', color: 'white'})
            setBtnText("Enable Light Mode")
        } else {
            setMyState({backgroundColor : 'white', color : 'black'})
            setBtnText("Enable Dark Mode")
        }
    }

    return (
        <div className='container'  style={myState} >
            <h1 className='my-3'>About Us</h1>
            <div className="accordion"
                Style={myState}
                id="accordionExample">
                <div className="accordion-item"  style={myState}>
                    <h2 className="accordion-header">
                        <button className="accordion-button "  style={myState} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show"  style={myState} data-bs-parent="#accordionExample">
                        <div className="accordion-body"  >
                            <strong>This is the first item's accordion body.</strong>
                            It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={myState}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"  style={myState} aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse"  style={myState} data-bs-parent="#accordionExample">
                        <div className="accordion-body  ">
                            <strong>This is the second item's accordion body.</strong>
                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item"  style={myState}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button"  style={myState} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong>
                            It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
                            <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary my-3'
                onClick={changeToDark}>{btnText}</button>

        </div>
    )
}
