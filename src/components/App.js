import React, {Component} from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: 'Zagrac wreszczie w Wiedzmina 3',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null,
      },
      { id: 1, text: "zrobić dobry uczynej", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 2, text: "pomalować dom po sylwestrze", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 3, text: "schudnąć 30 kilogramów", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 4, text: "sprzedać butelki po piwie (20 skrzynek)", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 5, text: "jeszcze raz pomalować dom", date: '2019-09-11', important: false, active: true, finishDate: null },
      { id: 6, text: "fryzjer!!!", date: '2019-05-20', important: true, active: true, finishDate: null },
      { id: 7, text: "nie odbierać poleconego od komornika", date: '2020-11-12', important: false, active: true, finishDate: null },
      { id: 8, text: "kupić 2 butelki litrowe", date: '2019-09-11', important: false, active: true, finishDate: null },
    ]
  }
  
  deleteTask = (id) => {
    console.log('delete w komponencie App elementu o id' + id);
   // const tasks = [...this.state.tasks];
   // const index = tasks.findIndex(task => task.id === id) // jak nie znajdzie to zwroci -1
   // tasks.splice(index, 1) //usuwa jeden element od index
   // this.setState({
   //   tasks // tasks: tasks
   // })
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    console.log(tasks)
    this.setState({
      tasks // tasks: tasks
    })


  };

  changeTaskStatus = (id) => {
    console.log('change w komponencie App elementu o id' + id);
    const tasks = Array.from(this.state.tasks); // kopia tablicy inny sposob
    tasks.forEach(task => {
      if(task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    //console.log('dodano obiekt');
    const task = {
        id: this.counter,
        text: text, // tekst z inputa
        date: date, // z inputa
        important: important, // wartosc z inputa
        active: true,
        finishDate: null,
    }
    this.counter++;
    console.log(task, this.counter);
  
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
   }))
    
   return true
  }
  
  render() { 
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}
 
export default App;
