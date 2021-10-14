const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ToDoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputToDo () { return $('#new-todo') }
    get listToDo () { return $('#todo-list') }

    /**
     * a method to encapsule automation code to interact with the page
     */
    async submitToDoItem (toDoText) {
        await this.inputToDo.setValue(toDoText);
        await this.inputToDo.keys('Enter');
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('todos');
    }
}

module.exports = new ToDoPage();
