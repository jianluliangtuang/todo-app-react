import React, { useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

     
    return (
        <div className="p-5 text-center bg-blue-200">
            <div className="p-5 text-center bg-amber-50 w-96 mx-auto rounded"> 
                <h1 className="text-2xl font-bold">To-Do List</h1>

                <div className="flex gap-2 justify-between w-full">
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        className="rounded border-2 border-blue-600 w-full ps-3"
                        placeholder="Enter task..."
                    />
                    <button
                        onClick={() => {
                            if (task.trim()) {
                                setTasks([...tasks, task]);
                                setTask("");
                            }
                        }}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add
                    </button>
                </div>

             
                <div className="mt-4">
                    {tasks.map((t, index) => (
                        <div key={index} className="bg-blue-100 text-start flex justify-between items-center rounded p-2 mb-2 w-full">
                            <d className="w-full">{t}</d>
                            <button
                                onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
                                className="px-3 py-1 bg-blue-700 font-medium text-white rounded"
                            >
                                x
                            </button>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Home;
