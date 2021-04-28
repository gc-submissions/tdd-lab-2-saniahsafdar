const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  // test("class is defined", function() {
  //   // Remember, you can arrange, act, and assert...start small
  //   expect(ChangeHandler).toBeDefined();
  // });

  // TODO: Add additional tests below...
  test("amountDue is set based on an argument", function() {
    const change = new ChangeHandler();
    expect(change.amountDue).toEqual();
  });

  test("cashTendered is set to zero", function(){
    const change = new ChangeHandler(5);
    expect(change.cashTendered).toEqual(0);
  });


});