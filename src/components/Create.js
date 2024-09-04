import React, { useState } from 'react';
import {Link, useNavigate} from "react-router-dom"
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import todos from './todos';
import {v4 as uuid} from "uuid";

function Create(){
    const[Name, setName] = useState("");
    const[Description, setDescription] = useState("");

    let history = useNavigate();

    const CreateNote = e => {
        e.preventDefault()

        const ids = uuid()
        let Id = ids.slice(0, 8)

        todos.push({id: Id, name: Name, description: Description, status: "ожидание"})
        history("/")
    }
    return(
        <>
            <Form>
                <FormGroup>
                    <FormControl
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        required
                        placeholder='название заметки'/>
                </FormGroup>
                <FormGroup>
                    <FormControl
                        onChange={(e) => setDescription(e.target.value)}
                        type='text'
                        required
                        placeholder='описание задачи'/>
                </FormGroup>
                <Button onClick={ (e) => CreateNote(e)}>
                    Сохранить
                </Button>

                <Link to="/">
                    Назад на главную
                </Link>
            </Form>
        </>
    )
}

export default Create

