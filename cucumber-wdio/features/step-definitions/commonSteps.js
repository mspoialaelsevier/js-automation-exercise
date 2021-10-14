const { Given, When, Then } = require('@wdio/cucumber-framework');

const ToDoPage = require('../pageobjects/toDo.page');

const pages = {
    toDo: ToDoPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

