export class users {
  #_name;
  todo = [];
  get name() {
    return this.#_name;
  }
  set name(val) {
    this.#_name = val;
  }
  constructor(name) {
    this.#_name = name;
  }
  /**
   * This function will return ar array of strings which will contain all the todo items
   * @returns string[]
   */
  getTodo() {
    return this.todo;
  }

  viewTodo() {
    return this.todo;
  }
  /**
   * This Function is used to add todo item in this user
   * Send any string as an argument to this function to be added as as todo Item
   * @param {string} value
   */
  addTodoItem(value) {
    this.todo.push(value);
  }
  deleteTodoItem(value) {
    if (this.todo.indexOf(value) != 1)
      this.todo.splice(this.todo.indexOf(value), 1);
  }
}
