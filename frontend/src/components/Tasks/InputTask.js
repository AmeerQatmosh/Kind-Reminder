import React, { useState } from 'react';
import { Form, FormControl, FormFloating, Button } from 'react-bootstrap';
import './tasks.css'

function InputTask() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState('');

    const handleAddItem = () => {
        if (input.trim()) {
            setItems([...items, input]);
            setInput('');
        }
    };

    return (
        <div className="Task">
            <Form>
                <FormFloating className="mb-3">
                    <FormControl
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Add Task"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <label htmlFor="floatingInputCustom">Add Task</label>
                </FormFloating>
                <span className="inline-element"></span>
                <Button onClick={handleAddItem} > Add task </Button>
            </Form>

            <div>
                <ul>
                    {items.map((item, index) => (
                        <li key={index} >
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}

export default InputTask;
