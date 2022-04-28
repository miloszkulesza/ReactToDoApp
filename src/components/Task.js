import React from 'react';

const Task = (props) => {
    const { text, date, id, important, active, finishDate } = props.task;
    const importantStyle = 'important';
 
    if(active) {
        return (    
            <div>
                <p>
                    <strong className={important ? importantStyle : ''}>{text} - do <span>{date} </span></strong>
                    <button onClick={() => props.changeTaskStatus(id)}>
                    Zrobione
                    </button>
                    <button onClick={() => props.deleteTask(id)}>
                        X
                    </button>
                    </p>
            </div>
        );
    }
    else {
        const finishDateConverted = new Date(finishDate).toLocaleString();
        return (    
            <div>
                <p>
                    <strong className={important ? importantStyle : ''}>
                        {text + ' '}
                    </strong> 
                    <span>
                        <em>
                            (Zrobić do {date})
                        </em>
                        <br />
                        - Potwierdzenie wykonania 
                    </span>
                    {' ' + finishDateConverted + ' '}
                    <button onClick={() => props.deleteTask(id)}>
                        X
                    </button>
                </p>
            </div>
        );
    }
}

export default Task;