let page;

beforeEach(async () => {
  page = await browser.newPage();
  //await page.goto("https://github.com/team");
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
      await page.goto("https://github.com/team");
  });

  
  test("The h1 header content'", async () => {
    jest.setTimeout(5000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    jest.setTimeout(5000);
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    jest.setTimeout(5000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  });
});

//____________________________________________//

describe("Added tests", () => {  
  test("The h1 content'", async () => {
    jest.setTimeout(5000);
    await page.goto("https://github.com/home");
    const firstLink = await page.$("h1 span");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub: Let’s build from here · GitHub"
    );
  });

  test("The h1 content'", async () => {
    jest.setTimeout(5000);
    await page.goto("https://github.com/epam");
    const firstLink = await page.$("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "EPAM Systems · GitHub"
    );
  });  

  test("The h1 content'", async () => {
    jest.setTimeout(5000);
    await page.goto("https://github.com/2gis");
    const firstLink = await page.$("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "2GIS · GitHub"
    );
  });  
});