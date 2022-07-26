import {useState} from "react"
const CreateArea = (props) => {

    const [note,setNote] = useState({
        title:"",
        content:""
    })

    const handleChange = (event) =>{
        const {name,value} = event.target

        setNote(prevNote=>{
            return{
                ...prevNote,
                [name]:value
            }
        })

    }

    const submitNote = (event) =>{
        event.preventDefault()
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
       

    }
 
    return(
        <div>
            <form className="create-note">
                <input onChange={handleChange} value={note.title} name="title" placeholder="Title"/>
                <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note" rows="3"/>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea