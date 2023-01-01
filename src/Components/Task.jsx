import React, { useState } from "react";

const Task = () => {

    const [newTask, setNewTask] = useState("")

    return(
        <div>
            <div className="addTask">
                <input onChange={(e) => setNewTask(e.target.value)} />
                <button>Add Task</button>
            </div>
            {newTask}
        </div>
    )
}

export default Task