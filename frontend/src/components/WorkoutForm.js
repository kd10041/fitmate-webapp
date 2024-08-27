//Importing useState hook
import { useState } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutForm=()=>{
    //using the useState hook
    const {dispatch}=useWorkoutsContext()
    const[title,setTitle]=useState('')
    const[load,setLoad]=useState('')
    const[reps,setReps]=useState('')
    const[error,setError]=useState(null)
    const[emptyFields,setEmptyFields]=useState([])
    //function to handle sumbit 
    const handleSumbit=async(e)=>{
        //prevent to refresh the page
        e.preventDefault()

        const workout={title,load,reps}

        //Post request
        const response =await fetch('/api/workouts',{
            method:'POST',

            //convert to JSON
            body: JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })

        //To handle errors (checks error )
        const json=await response.json()
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added',json)
            dispatch({type:'CREATE_WORKOUT',payload:json})
        }
    }
    
    return(

        //Creating a form  
        <form className="create" onSubmit={handleSumbit}>
            <h3>Add a New Workout</h3>

            <label>Excercise Title:</label>
            <input
             type="text" 
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title')?'error':''}
            />
            <label>Load (in Kg):</label>
            <input
             type="number" 
                onChange={(e)=>setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load')?'error':''}
            />
            <label>Reps:</label>
            <input
             type="text" 
                onChange={(e)=>setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('load')?'error':''}
            />
             <button>
                Add Workout
            </button>
            {error && <div className="error">  {error} </div>}
        </form>
       
    )
}

export default WorkoutForm