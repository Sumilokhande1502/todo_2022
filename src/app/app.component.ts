import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todoItems: any = [];
  @ViewChild('addTodo') addTodo: any;
  childData: any = "test";
  todoData: any = [];
  static_data: any;
  updateData: boolean = false;

  ngOnInit(){
    if(localStorage.getItem('TodoList')){
      this.todoData = JSON.parse(localStorage.getItem('TodoList') || '{}');
      this.todoData.map((key: any)=>{
        if(key['status']){
          console.log(key);
          this.updateData = true;
        }
      })
    }
  }

  addTodoItem(e:any){
    this.childData = e.value;
    let dataObj = {
      todo: e.value,
    }

    if(dataObj['todo']){
      this.todoData.push(dataObj);
      //console.log(this.todoData);
      localStorage.setItem('TodoList', JSON.stringify(this.todoData));
      e.value = '';
    }
    
  }

  deleteTodo(index:any){
    //console.log(index, "index")
    this.todoData.splice(index, 1);
    localStorage.setItem('TodoList', JSON.stringify(this.todoData))
  }

  markComplete(i:any){
    console.log(this.todoData);
    this.todoData[i]['status'] = true;
    this.updateData = true;
    localStorage.setItem('TodoList', JSON.stringify(this.todoData))
  }

  getData(event: any){
    console.log(event, "...................");
    
    this.childData = event;
  }
}
