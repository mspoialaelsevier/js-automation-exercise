import { Then } from 'cucumber';
import { expect } from 'chai';
import { getList, TodoItem } from "../support/todo-api";

Then("I have just one value {string} in the list", async (value) => {
    const list: TodoItem[] = await getList();

    expect(1).to.equal(list.length);
    expect(value).to.equal(list[0].title);
});