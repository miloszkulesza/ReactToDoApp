import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    let tasksToDo = props.tasks.filter(task => task.active);
    let tasksDone = props.tasks.filter(task => !task.active);
    tasksToDo = tasksToDo.map(task => <Task key={task.id} 
                                            task={task} 
                                            changeTaskStatus={props.changeTaskStatus}
                                            deleteTask={props.deleteTask} />);
    tasksDone = tasksDone.map(task => <Task key={task.id} 
                                            task={task} 
                                            changeTaskStatus={props.changeTaskStatus}
                                            deleteTask={props.deleteTask} />);
    if(tasksDone.length >= 2) {
        tasksDone.sort((a, b) => {
            if(a.props.task.finishDate > b.props.task.finishDate) {
                return -1;
            }
            if(a.props.task.finishDate < b.props.task.finishDate) {
                return 1;
            }
            return 0;
        });
    }
    
    if(tasksToDo.length >= 2) {
        tasksToDo.sort((a, b) => {
            a = a.props.task.text.toLowerCase();
            b = b.props.task.text.toLowerCase();

            if(a < b)
                return -1;
            if(a > b)
                return 1;
            return 0;
        });
    }
    
    
    return ( 
        <>
            <div className="active">
                <h1>Lista zadań</h1>
                {tasksToDo}
            </div>

            <hr />

            <div className="done">
                <h3>Zadania zrobione <em>({tasksDone.length})</em></h3>
                {tasksDone.length > 5 && <span style={{ fontSize: 10 }}>Wyświetlanych jest jedynie 5 ostatnich elementów</span>}
                {tasksDone.splice(0, 5)}
            </div>
        </>
     );
}
 
export default TaskList;