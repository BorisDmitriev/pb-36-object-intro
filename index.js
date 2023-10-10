//1
const myRecipe = {
    title : "Black Bean Tostadas",
    servings : 4,
    ingredients: ["cans black beans", "tostadas", "pepper jack Avocado"],   
}
console.log("Title: " + myRecipe.title);
console.log("Servings: " + myRecipe.servings);
console.log("Ingredients: " + myRecipe.ingredients.join(", "));

//2
const myBooks = [
    {
        title: "Neuromancer",
        author: " William Gibson",
        alreadyRead: true,
    },
    {
        title: "Hyperion",
        author: "Dan Simmons",
        alreadyRead: false,
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        alreadyRead: false,
    },
];

for( const book of myBooks ){
    console.log(`${book.title} by ${book.author}`);
}

for( const book of myBooks ){
    book.alreadyRead 
    ? console.log(`You already read "${book.title}" by ${book.author}`)
    : console.log(`You still need to read "${book.title}" by ${book.author}`)
    
}

