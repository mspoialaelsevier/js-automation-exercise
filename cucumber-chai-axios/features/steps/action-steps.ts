import { Given, When } from 'cucumber'
import { cleanList, addItem } from "../support/todo-api";

Given('I have clean list', async function (): Promise<void> {
    await cleanList();
});

When("I add one item with the value {string}", async (value) => {
    await addItem(value);
});
