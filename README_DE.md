# Grundlagen der Programmierung: Objekte

## 1. Die Rezeptkarte

Erstelle ein Objekt namens `myRecipe`, das Informationen über dein Lieblingsrezept enthält. Es sollte die Eigenschaften `title` (ein String), `servings` (eine Zahl bzw. Number) und `ingredients` (ein Array von Strings) haben.

Verwende console.log, um die Rezeptinformationen in separaten Zeilen zu protokollieren, so dass es dem Nachfolgendem ähnelt:
```
Title: Mole
Servings: 2
Ingredients: cinnamon, cumin, cocoa

```

## 2. Die Leseliste

Behalte den Überblick darüber, welche Bücher du gelesen hast und welche du noch lesen willst!

* Erstelle ein Array von Objekten mit dem Namen `myBooks`, wobei jedes Objekt ein Buch beschreibt und die Eigenschaften `title` (ein String), `author` (ein String) und `alreadyRead` (ein Boolescher Wert, der angibt, ob du das Buch schon gelesen hast) hat.
* Iteriere durch das Array der Bücher. Gebe für jedes Buch den Buchtitel und den Autor wie folgt in der Konsole aus: "The Hobbit by J.R.R. Tolkien".
* Iteriere durch das Array mit den Büchern und gebe dieses Mal Nachrichten aus, die vom booleschen Wert von `alreadyRead` abhängen: Verwende eine if/else-Anweisung, um die Ausgabe davon abhängig zu machen, ob du das Buch schon gelesen hast oder nicht. Wenn du es gelesen hast, wird ein String wie 'You have already read "The Hobbit" by J.R.R. Tolkien' ausgegeben. Wenn nicht, wird hingegen ein String wie 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' ausgegeben.
