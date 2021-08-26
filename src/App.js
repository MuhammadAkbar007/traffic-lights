import {useState, useEffect} from 'react'

import Red from './components/Red'
import Yellow from './components/Yellow'
import Green from './components/Green'

function App() {

    const [startDisabled, setStart] = useState(false)
    const [i, setI] = useState(1)

    function run() {
        setStart(true)
    }

    useEffect(() => {
        if (startDisabled) {
            setInterval(() => {
                setI(prev => prev + 1)
            }, 3000)
        }
    }, [startDisabled])

    useEffect(() => {
        if (i === 4) {
            setI(1)
        }
    }, [i])

    return (
        <div>
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            Traffic Lights
                        </h1>
                        <div className="row">
                            <div className="col-md-2 offset-5 rounded bg-dark">
                                <Red timing={i}/>
                                <Yellow timing={i}/>
                                <Green timing={i}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <button className={'btn btn-dark mt-3'} disabled={startDisabled} onClick={run}>Start
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
