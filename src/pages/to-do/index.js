import Header from "../layout/header";
import Footer from "../layout/footer";
import {
    Button,
    Card,
    Container,
    InputGroup,
    Form,
    Alert
} from "react-bootstrap";
import { useState, useRef } from "react";
import { BsPlusCircleFill, BsFillTrashFill, BsPencilSquare } from "react-icons/bs";

const Todo = () => {

    let id = useRef(0);
    const [task, setTask] = useState('');
    const [editTextInput, setEditTextInput] = useState("");
    const [taskData, setTaskData] = useState([])
    console.log(taskData)
    const [edit, setEdit] = useState({ flag: false, id: null });
    // const [taskList, setTaskList] = useState([]);

    const handleChange = (e) => {
        if (edit.flag == false) {
            setTask(e.target.value)
        } else {
            setEditTextInput(e.target.value);
        }
    }

    const handleTaskToAdd = () => {
        id.current = id.current + 1;
        setTaskData([...taskData, { text: task, id: id.current }]);
        setTask("");
    }

    const handleDelete = (id) => {
        const filterData = taskData.filter(item => item.id !== id);
        setTaskData(filterData)
    }
    const handleEditTask = (id) => {
        const data = taskData.map(item => {
            if (item.id == id && editTextInput.length !== 0) {
                return { ...item, text: editTextInput }
            }
            return item
        })

        setTaskData(data)

    }

    return (
        <>
            <Header />
            <div className="min-vh-100 d-flex" style={{ backgroundColor: "#F2BE22",opacity:"75%"}}>
                <Container style={{ marginTop: "40px" }}>
                    <Card>
                        <Card.Header >
                            Add your To-do
                        </Card.Header>
                        <Card.Body>
                            {/* <Form> */}
                            <InputGroup>
                                <Form.Control
                                    name="task"
                                    placeholder="Enter Task"
                                    onChange={handleChange}
                                    value={edit.flag == false ? task : ""}
                                >
                                </Form.Control>

                                <Button type="submit" onClick={handleTaskToAdd}>
                                    <BsPlusCircleFill size={20} />
                                </Button>

                                {/* <Button onClick={() => setEdit(true)} /> */}
                            </InputGroup>
                            {/* </Form> */}
                        </Card.Body>
                    </Card>

                    {taskData.map((item, key) => {
                        if (edit.flag && edit.id == item.id) {
                            return (
                                <li key={key}>
                                    <input type="text" onChange={handleChange} defaultValue={item.text} />
                                    <div>
                                        <Button
                                            variant="warning"
                                            onClick={() => {
                                                handleEditTask(item.id)
                                                setEdit({ flag: false, id: null })

                                            }}
                                        >
                                            SAVE
                                        </Button>
                                        <Button
                                            variant="danger"
                                            onClick={function () {

                                                handleDelete(item.id)
                                            }}
                                        >
                                            <BsFillTrashFill />
                                        </Button>

                                    </div>
                                </li>)
                        }
                        return (<Alert
                            key={key}
                            variant="success"
                            className="mt-2 d-flex"
                            style={{ justifyContent: "space-between" }}
                        >
                            <strong>
                                {item.text}
                            </strong>

                            <div>
                                <Button
                                    variant="danger"
                                    onClick={function () {

                                        handleDelete(item.id)
                                    }}
                                >
                                    <BsFillTrashFill />
                                </Button>
                                <Button
                                    variant="warning"
                                    onClick={() => setEdit({ flag: true, id: item.id })}
                                >
                                    <BsPencilSquare />
                                </Button>
                            </div>
                        </Alert>
                        );
                    })}

                </Container>

            </div>
            <Footer />
        </>
    )
}

export default Todo;

