const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  // test("class is defined", function() {
  //   // Remember, you can arrange, act, and assert...start small
  //   expect(ChangeHandler).toBeDefined();
  // });

  // TODO: Add additional tests below...
  test("Inserting a quarter adds 25", function(){
    const change = new ChangeHandler();
    change.insertCoin("quarter")
    expect(change.cashTendered).toBe(25)
  });
  
  test("Inserting a dime adds 10", function(){
    const change = new ChangeHandler();
    change.insertCoin("dime")
    expect(change.cashTendered).toBe(10)
  });
  
  test("Inserting a nickel adds 5", function(){
    const change = new ChangeHandler();
    change.insertCoin("nickel")
    expect(change.cashTendered).toBe(5)
  });

  test("Inserting a penny adds 1", function(){
    const change = new ChangeHandler();
    change.insertCoin("penny")
    expect(change.cashTendered).toBe(1)
  });

  test("Calling function multiple times continues to add on to the amount.", function(){
    const change = new ChangeHandler();
    change.insertCoin("nickel");
    change.insertCoin("quarter")
    change.insertCoin("nickel")
    expect(change.cashTendered).toBe(35)
  });

  test("cashTendered > amountDue", function(){
    const change = new ChangeHandler(23);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(true);
    
  });

  test("cashTendered < amountDue", function(){
    const change = new ChangeHandler(60);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(false);

  });

  test("cashTendered = amountDue", function(){
    const change = new ChangeHandler(55);
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(true);
  });

  test("cashTendered > amountDue", function(){
    const change = new ChangeHandler();
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("nickel");
    expect(change.isPaymentSufficient()).toEqual(true);  
  });

  test("32 = 1 quarter, 0 dimes, 1 nickel, 2 pennies", function(){
    const change = new ChangeHandler(100);
    change.insertCoin("quarter");
    change.insertCoin("penny");
    change.insertCoin("penny");
    change.insertCoin("nickel");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    expect(change.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
  });});
  test("32 = 1 quarter, 0 dimes, 1 nickel, 2 pennies", function(){
    const change = new ChangeHandler(100);
    change.insertCoin("quarter");
    change.insertCoin("penny");
    change.insertCoin("penny");
    change.insertCoin("nickel");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    expect(change.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
  });  });
  test("10 = 0 quarter, 1 dimes, 0 nickel, 0 pennies", function(){
    const change = new ChangeHandler(100);
    change.insertCoin("quarter");
    change.insertCoin("penny");
    change.insertCoin("penny");
    change.insertCoin("nickel");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    expect(change.giveChange()).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0
  });  });

  test("27 = 1 quarter, 0 dimes, 0 nickel, 2 pennies", function(){
    const change = new ChangeHandler(100);
    change.insertCoin("quarter");
    change.insertCoin("penny");
    change.insertCoin("penny");
    change.insertCoin("nickel");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    expect(change.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2
  });  });

  test("68 = 2 quarter, 1 dimes, 1 nickel, 3 pennies", function(){
    const change = new ChangeHandler(100);
    change.insertCoin("quarter");
    change.insertCoin("penny");
    change.insertCoin("penny");
    change.insertCoin("nickel");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    change.insertCoin("quarter");
    expect(change.giveChange()).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3
  });  });


  });
