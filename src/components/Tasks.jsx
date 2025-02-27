import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({tasks,onTaskClick, deleteTask}){
    
    const navigate = useNavigate();

    function seeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`);
    }

    return(
        <ul className="bg-slate-200 p-6 rounded-md shadow space-y-4">{
            tasks.map((task) => {
            return (
            <li key={task.id} className="flex gap-2">
                <button 
                    onClick={() => onTaskClick(task.id)}
                    className={`bg-slate-400 text-white p-2 rounded-md w-full ${task.isCompleted && 'line-through'}`}
                >
                    {task.title}
                </button>
                <Button onClick={() => seeDetailsClick(task)}>&gt;</Button> 
                <Button onClick={() => deleteTask(task.id)}>X</Button>
            </li>)
        })}
        </ul>
    )
}

export default Tasks;