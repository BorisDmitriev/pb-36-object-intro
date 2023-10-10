const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe('1. The Recipe Card', () => {
  test('`myRecipe` Object should have keys `title`, `servings` and `ingredients` with values', () => {
    const solution = rewire("../index.js");
    const myRecipe = solution.__get__('myRecipe');
    expect(myRecipe).toHaveProperty('title') && expect(myRecipe).toHaveProperty('servings') && expect(myRecipe).toHaveProperty('ingredients');
    expect(typeof myRecipe.title).toBeDefined() && expect(typeof myRecipe.servings).toBeDefined() && expect(typeof myRecipe.ingredients).toBeDefined();
  })
  test('Object keys and their values are printed to the console', () => {
    const index = require("../index.js");
    const solution = rewire("../index.js");
    const myRecipe = solution.__get__('myRecipe');
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`Title: ${myRecipe.title}`, 'i')));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`Servings: ${myRecipe.servings}`, 'i')));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`ingredients: ${myRecipe.ingredients.join(', ')}`, 'i')));
  })
})

describe('2. The Reading List', () => {
  test('`myBooks` Array should have keys `title`, `author` and `alreadyRead` with values', () => {
    const index = require("../index.js");
    const solution = rewire("../index.js");
    const myBooks = solution.__get__('myBooks');
    myBooks.forEach(ele => {
      expect(ele).toHaveProperty('title') && expect(ele).toHaveProperty('author') && expect(ele).toHaveProperty('alreadyRead');
      expect(typeof ele.title).toBeDefined() && expect(typeof ele.author).toBeDefined() && expect(typeof ele.alreadyRead).toBeDefined();
    });
  });

  test('"read" status of each book is printed to the console', () => {
    const solution = rewire("../index.js");
    const myBooks = solution.__get__('myBooks');
    for (let i = 0; i < myBooks.length; i++) {
      let book = myBooks[i];
      if (book.alreadyRead) {
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`you AlREady read "${book.title}" by ${book.author}`, 'i')));
      } else {
        expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(new RegExp(`you STiLL need to read "${book.title}" by ${book.author}`, 'i')));
      }
    }
  });
});