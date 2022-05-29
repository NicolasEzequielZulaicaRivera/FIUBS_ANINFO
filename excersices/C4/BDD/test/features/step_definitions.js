const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const { isWorkableDay } = require("../../src/days");

Given("It is {}", (date) => {
  this.date = new Date(date);
});

When("I ask if it is a workable day", () => {
  this.result = isWorkableDay(this.date);
});
