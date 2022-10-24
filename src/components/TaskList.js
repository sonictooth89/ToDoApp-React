import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active); // utworzy tablice tylko z aktywnych elementow
    const done = props.tasks.filter(task => !task.active);
    //console.log(active, done);

    if (done.length >= 2) {
        done.sort((a, b) => {
            if (a.finishDate < b.finishDate) {
                return 1
            }
            if (a.finishDate > b.finishDate) {
                return -1
            }
            return 0
        })
    };

    if (active.length >= 2) {
        active.sort((a, b) => {

            a = a.text.toLowerCase();
            b = b.text.toLowerCase();
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        })
    }


    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />);

    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    
    return (
        <>
            <div className='active'>
            <h1>ZADANIA DO ZROBIENIA</h1>
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
