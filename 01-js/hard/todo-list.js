/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.list = [];
  }
  add(todo){
    this.list.push(todo);
  }
  remove(indexOfTodo){
    if(indexOfTodo<0 || this.list.length <= indexOfTodo){
      return null;
    }
    this.list.splice(indexOfTodo,1);
  }
  update(index, updatedTodo){
     if(index<0 || this.list.length <= index){
      return null;
    }
    this.list[index] = updatedTodo;
  }
  getAll(){
    return this.list;
  }
  get(indexOfTodo){
    if(indexOfTodo<0 || this.list.length <= indexOfTodo){
      return null;
    }
    return this.list[indexOfTodo];
  }
  clear(){
    this.list = [];
  }
}

module.exports = Todo;
