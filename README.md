# Programming Basics: Objects
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


## 1. The Recipe Card

Create an object called `myRecipe` that holds information on your favorite recipe. It should have the properties `title` (a string), `servings` (a number), and `ingredients` (an array of strings).

On separate lines use console.log to log the recipe information so it looks similar to the following:
```
Title: Mole
Servings: 2
Ingredients: cinnamon, cumin, cocoa

```

## 2. The Reading List

Keep track of which books you read and which books you want to read!

* Create an array of objects named `myBooks`, where each object describes a book and has the properties `title` (a string), `author` (a string), and `alreadyRead` (a boolean indicating if you've already read it).
* Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
* Iterate through the array of books and this time, log messages depending on the boolean value of `alreadyRead`: Use an if/else statement to change the output depending on whether you read it yet or not. If you've read it, log a string like 'You have already read "The Hobbit" by J.R.R. Tolkien'. And if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### 1. The Recipe Card

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `myRecipe` Object should have keys `title`, `servings` and `ingredients` with values |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Object keys and their values are printed to the console |

### 2. The Reading List

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `myBooks` Array should have keys `title`, `author` and `alreadyRead` with values |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | "read" status of each book is printed to the console |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=PB-data-structure-object-exercise)


[//]: # (autograding info end)