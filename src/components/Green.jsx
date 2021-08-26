import {useState, useEffect} from 'react'

export default function Green({timing}) {

    const [status, setStatus] = useState(false)

    useEffect(()=>{
        if (timing === 1) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }, [timing])

    return (
        <div className={status ? 'rounded-circle mx-5 my-5 bg-success' : 'rounded-circle mx-5 my-5'} style={{width: '100px', height: '100px'}}>
        </div>
    )
}