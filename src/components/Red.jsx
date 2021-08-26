import {useState, useEffect} from 'react'

export default function Red({timing}) {

    const [status, setStatus] = useState(false)

    useEffect(()=>{
        if (timing === 3) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }, [timing])

    return (
        <div className={status ? 'rounded-circle mx-5 my-5 bg-danger' : 'rounded-circle mx-5 my-5'} style={{width: '100px', height: '100px'}}>
        </div>
    )
}