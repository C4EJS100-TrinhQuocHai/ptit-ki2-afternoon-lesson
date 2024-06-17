import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Job() {
    // const [count,setCount]=useState<number>(0);
    const stateJob: any = useSelector(state => {
        return state;
    })
    const disPatch= useDispatch();
    // console.log("stateJob", stateJob);
    const addJob=()=>{
            let newJob={
                id:2,
                name:"học redux",
                status:false,
            }
            disPatch(
                {
                    type:"ADD",
                    payload:newJob,
                }
            )
    }
    return (
        <div>Job
            <button onClick={addJob}>add</button>
            {stateJob.reducerJob.map((job: any) => {
                return <li>{job.name}</li>
            })}
        </div>
    )
}
