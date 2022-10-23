import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active); // utworzy tablice tylko z aktywnych elementow
    const done = props.tasks.filter(task => !task.active);
    //console.log(active, done);

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);

    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    
    return (
        <>
            <div className='active'>
            <h1>ZADANIA DO ZROIBIENIA</h1>
            {activeTasks.length > 0 ? activeTasks : <p>Brak zadan, ale jestes szczesciarzem!</p>}
        </div>

        <hr />

        <div className='done'>
            <h3>ZADANIA ZROBIONE <em>({done.length})</em></h3>
            {done.length>5 && <span style={{fontSize:10}}>wyswietlonych jest jedynie 5 ostatnich elementow</span>}
            {doneTasks.slice(0, 5)}
        </div>

        </>
    );
}
 
export default TaskList
