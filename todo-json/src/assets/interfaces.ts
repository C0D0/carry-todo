export interface TodoItemInterface {
    "id":number,
    "createdAt":Date,
    "name":string,
    "completed":boolean,
    "description":string
  }
  
export interface TodoListStoreInterface {
    _todoList: { results: TodoItem[] };
    _showAlert: boolean;
  }

export class TodoItem implements TodoItemInterface {
  "id": number;
  "createdAt": Date;
  "name": string;
  "completed": boolean;
  "description": string;

  constructor(id:number, createdAt:Date, name:string, completed:boolean, description:string){
    this.id = id;
    this.createdAt = createdAt;
    this.name = name;
    this.completed = completed;
    this.description = description;
  }

  static createEmptyTodoItem():TodoItem {
    return new TodoItem(0, new Date(), "", false, "");
  }
}