import { useState } from "react";
import Input from "./Input.jsx"

function AddTask({onTaskSubmit}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="bg-slate-200 p-6 rounded-md shadow space-y-4 flex flex-col">
            <Input
            type="text"
            placeholder="Digite o título da tarefa" 
            value={title} 
            onChange={(event) => setTitle(event.target.value)}/>
            
            <Input
            type="text"
            placeholder="Digite a descrição da tarefa" 
            value={description} 
            onChange={(event) => setDescription  (event.target.value)}/>
            
            <button className="bg-slate-500 px-2 py-3 text-white rounded-md font-medium hover:bg-slate-600"
            onClick={() => {
                onTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }}>Adicionar</button>
        </div>
    )
}

export default AddTask;