import {useState, useEffect} from 'react'

export default function Yellow({timing}) {

    const [status, setStatus] = useState(false)

    useEffect(()=>{
        if (timing === 2) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }, [timing])

    return (
        <div className={status ? 'rounded-circle mx-5 my-5 bg-warning' : 'rounded-circle mx-5 my-5'} style={{width: '100px', height: '100px'}}>
        </div>
    )
}