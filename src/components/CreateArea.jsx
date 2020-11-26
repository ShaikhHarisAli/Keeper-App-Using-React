import React,{useState} from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Zoom } from '@material-ui/core';

function CreateArea(props) {
    const [isExpend, setExpend] = useState(false)

    const [note, setNote] = useState({
        title:"",
        content:""
    })
    //setExpended
    function Expend(){
        setExpend(true)
    }
    //handleChange
    function handleChange(event){
        const {name,value}= event.target
        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]:value
            }
        } )
    }
    // submit button
    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault()
    }
  
    return (
      <div>
        <form className="create-note">
          {isExpend && <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
          }
          <textarea
            name="content"
            placeholder="Take a note..."
            rows={isExpend ? 3 : 1}
            onClick={Expend}
            value={note.content}
            onChange={handleChange}
          />
          <Zoom in={isExpend}>
          <Fab onClick={submitNote}><AddIcon/></Fab>
          </Zoom> 
        </form>
      </div>
    );
}

export default CreateArea;

