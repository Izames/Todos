import React, {useEffect, useState} from "react";
import todos from "./todos";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit(){
    const[id, setId] = useState("")
    const[name, setName] = useState("")
    const[description, setDiscription] = useState("")
    const[status, setStatus] = useState("")

    let history = useNavigate()

    let index = todos
        .map(function(e) {
            return e.id
        })
        .indexOf(id)

    const EditNote = e =>{
        e.preventDefault()

        if(name=="" || description=="" || status==""){
            alert("не все поля были заполнены!")
            return
        }

        let note = todos[index]

        note.name = name
        note.description = description
        note.status = status
        
        history("/")
    }

    useEffect(() => {
        setDiscription(localStorage.getItem("description"));
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"))
        setStatus(localStorage.getItem("status"))
    },[])

    return(
        <>
            <Form>
                <FormGroup>
                    <FormControl
                    value={name}
                    onChange={(e) => 
                        setName(e.target.value)
                    }
                    placeholder="название"
                    type="text"
                    required
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                    value={description}
                    onChange={(e) => setDiscription(e.target.value)}
                    placeholder="описание заметки"
                    type="text"
                    required
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                    type="text"
                    placeholder="статус"/>
                </FormGroup>
                <Button onClick={(e) => EditNote(e)}>
                    <p>сохранить изменения</p>
                </Button>
                <Link to="/">
                    <p>назад на главную</p>
                </Link>
            </Form>
        </>
    )
}

export default Edit