var webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const { By, until } = webdriver;

describe("webdriver", () => {
  let driver;

  beforeEach(async () => {
    var chromeOptions = new chrome.Options();
    chromeOptions.addArguments("--start-maximized");    

    driver = new webdriver.Builder()
      .forBrowser("chrome")      
      .setChromeOptions(chromeOptions)         
      .build();        

    await driver.get("http://localhost:8080/");
  }, 30000);

  afterEach(async () => {
    await driver.sleep(2 * 1000)
    await driver.close();
  }, 30000);
  

  test("Home to register page", async () => {   
    await driver.sleep(1 * 1000)
    await driver.findElement(webdriver.By.id("registertest")).click();   

    output = await driver.wait(
      webdriver.until.elementLocated(webdriver.By.className("w3-xxxlarge")),
      10000
    );

    outputVal = await output.getAttribute("innerHTML");   
    expect(outputVal).toEqual("Register Form");
  });
  
  test("Home to viewpost page", async () => {   
    await driver.sleep(1 * 1000)
    await driver.findElement(webdriver.By.id("viewposttest")).click();   

    output = await driver.wait(
      webdriver.until.elementLocated(webdriver.By.className("w3-xxxlarge")),
      10000
    );

    outputVal = await output.getAttribute("innerHTML");   
    expect(outputVal).toEqual("View Post");
  });

  test("Home to navviewpost page", async () => {   
    await driver.sleep(1 * 1000)
    await driver.findElement(webdriver.By.id("navviewposttest")).click();   

    output = await driver.wait(
      webdriver.until.elementLocated(webdriver.By.className("w3-xxxlarge")),
      10000
    );

    outputVal = await output.getAttribute("innerHTML");   
    expect(outputVal).toEqual("View Post");

  });

  test("Home to navregister page", async () => {   
    await driver.sleep(1 * 1000)
    await driver.findElement(webdriver.By.id("navregistertest")).click();   

    output = await driver.wait(
      webdriver.until.elementLocated(webdriver.By.className("w3-xxxlarge")),
      10000
    );

    outputVal = await output.getAttribute("innerHTML");   
    expect(outputVal).toEqual("Register Form");

  });

  test("Home to graph page", async () => {   
    await driver.sleep(1 * 1000)
    await driver.findElement(webdriver.By.id("navgraphtest")).click();   

    output = await driver.wait(
      webdriver.until.elementLocated(webdriver.By.className("w3-xxxlarge")),
      10000
    );

    outputVal = await output.getAttribute("innerHTML");   
    expect(outputVal).toEqual("GRAPH");
  });


});