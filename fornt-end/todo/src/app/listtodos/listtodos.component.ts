import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done : boolean,
    public targetDate : Date
  ){

  }

} 

@Component({
  selector: 'app-listtodos',
  templateUrl: './listtodos.component.html',
  styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {

  todos : Todo[] 
  message : string
  // = [
  //   new Todo(1, 'Learn driving carefully',false, new Date()),
  //   new Todo(1, 'Learn dance gracefully',false, new Date())
  // ]
    
  constructor(private todoService: TodoDataService,
    private router: Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retrieveAllTodos("Amit").subscribe(
      response => {
        console.log(response);
        this.todos =  response;
      }
    )
  }

  deleteTodo(id){
    this.todoService.deleteTodo("Amit", id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} is successfull`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }

}
