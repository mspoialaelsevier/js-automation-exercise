const {Given, When, Then} = require('@wdio/cucumber-framework');

const ToDoPage = require('../pageobjects/toDo.page');

When("I add one item with the value {string}", async (value) => {
    await ToDoPage.submitToDoItem(value);
});

Then("I have the value {string} in the list", async (value) => {
    const list = await ToDoPage.listToDo;
    await list.waitForDisplayed();

    const entry = await list.$('li').$(`label=${value}`);
    await entry.waitForDisplayed();
    await entry.scrollIntoView();
    expect(await entry.getText()).toEqual(value);
});