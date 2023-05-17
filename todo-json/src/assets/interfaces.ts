export interface TodoItem {
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