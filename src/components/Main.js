import React from "react"
import todos from "./todos"
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
function Main(){
    let history = useNavigate()
    function SetID(id, name, description, status){
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("description", description)
        localStorage.setItem("status", status)
    }
    function deletedId(id){
        let index = todos
            .map(function(e){
                return e.id;
            })
            .indexOf(id);
        todos.splice(index, 1)
        history("/")
    }
    return(
        <>
            <h1>заметки</h1>
            {todos.map((item, index) => {
                return (
                    <div key = {index}>
                        <p>Название задачи: {item.name}</p>
                        <p>описание задачи: {item.description}</p>
                        <p>статус задачи: {item.status}</p>
                        <Link to = {'/Edit'}>
                            <Button onClick = { () => SetID(item.id, item.name, item.description, item.status)}>
                                <p>Обновить задачу</p>
                            </Button>
                        </Link>
                        <Button onClick={ () => deletedId(item.id)}>
                            <p>Удалить заметку</p>
                        </Button>
                    </div>
                );
            })};
            <Link to = { '/Create' }>
                <p>Создать заметку</p>
            </Link>
        </>  
    )
}

export default Main