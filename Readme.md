# String Sorter

This is a simple nodejs express app that perform file operation which is intended to sort names by its last names in `case-insensitive` way. At this moment, this app only support the operation to single file input. Not yet tested to process multiple files.

```
At this moment, this app is using built in Javascript's `sort()` method to do the sorting operation.
```

## What this app does in the background?

Here is what this app does in order:

1. Read the supplied file's content
2. Convert the file's content into array
3. Convert the array elements into array using split method.
4. Sort the array by element's last element.
5. Show the sorted names list to browser using handlebars.
6. Write the sorted names list to `sorted-names-list.txt` file.

## How To Use This App?

### Set up

1. You will need to have nodejs installed in your machine. Please [Download NodeJs Installer Here](https://nodejs.org/en/) and run it in your machine if you don't have one yet.

2. Clone or download this repository and extract it somewhere in a specialized folder on your machine.

   ```
   git clone https://github.com/mernstackman/string_sorter.git
   ```

3. Open the root folder of this app in the `Terminal`. You can use `Command Prompt` if you are in Windows machine.

   ```
   cd string_sorter
   ```

4. Run `npm install` in the `Terminal` where you opened this app's root folder. It will install all dependencies required by this app.

### Running the app

After the set up is completed, you can now do the following steps to run this app:

1. Execute `npm start` in the `Terminal` where you opened this app's root folder.
2. Open `http://localhost:3000` on your browser to see the sorted names.
3. You can also open a file named `sorted-names-list.txt` which is located in the root folder of this app to see sorted string of names.

### Quit the app

Press `Ctrl + C` (or `Cmd + C` on Mac) to quit the app.

### Modifying the input/ output file

Since this app is currently has no UI other than displaying the result in browser, you will need to get down to the source code in order to change the input file and or its contents.

> :warning: The file contents shoud be line separated strings.

**Example:**

```
 The first line
 Second line
 The Third String
 The other string
 A Name of Something
 Quick brown fox
```

#### Modify file input's contents

1. Open the root folder of this app in your machine.
2. Find a file named `unsorted-names-list.txt`.
3. Open it and put your strings inside, then save the file.

#### Modify file name

You can tell this app to work with different `.txt` file name. Here is how to do it.

##### Input file

1. Open the root folder of this app in your machine.
2. Rename the file named `unsorted-names-list.txt` to your preference or place your own `.txt` file inside the root folder.
3. Open file named `edit_this.js` and change the value of `sourceFile` property to your file path and then save it.

##### Output file

1. Open the root folder of this app in your machine.
2. Rename the file named `unsorted-names-list.txt` to your preference or place your own `.txt` file inside the root folder.
3. Open file named `edit_this.js` and change the value of `destinationFile` property to your file path and then save it.

> :warning: You will need to restart the app manually in order to get the updated output. Since the hot reload feature is currently not being added to this app yet.

**Tips:**

```
1. Quit the app before modification by pressing `Ctrl + C` on the terminal.
2. Re-run the app after your modification is finished.
```

## Commands

- Install dependency: `npm install`
- Run the app: `npm start`
- Quit: `Ctrl + C` or `Cmd + C` on Mac
- Test: `npm test`

You can also see the available commands for this app inside the `package.json` file and [node js cli documentation](https://nodejs.org/api/cli.html).
