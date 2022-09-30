import React, { useState } from 'react'


function TaskAddContainer(props: { handleAddTodo: (taskname: string) => unknown }) {
    const [input, setInput] = useState<string>("")

    const handleSubmit = () => {
        props.handleAddTodo(input)
        setInput("")
    }
    return (
        <>
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
            <button onClick={handleSubmit} >Add</button>
        </>
    )
}

export default TaskAddContainer