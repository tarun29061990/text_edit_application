
# README #

  

### What is this repository for? ###

  

This is a Multi text edit application. This app will contain:

 - A text area to edit multiline text.
 - A word counter.
 - A undo button that undoes edits.

  

### How do I get set up? ###

  

This project uses React native V0.62.2. After installing the above version, clone the repository and run

> react-native run-android

Make sure you have an android emulator running or android device connected via USB while running this command.

  

### Project Structure and Logic
 1. index.js - Main entry point of the application
 2. App.js - This is the mounting point of our application

Whole logic lies in src folder which is divided into main.js, components and storage folder.

 1. Main.js - Mounts the components (textarea, wordcount and undo button)
 2. components - Contains seperate components for textarea, wordcount and undo.
 3. storage - Contains logic for storing list of messages. I am using **AsyncStorage** for state management. I could have used redux but for a small application(like this one) AsyncStorage is sufficient.
 
### Who do I talk to? ###

  

* Tarun Chaudhary (http://curioustechie.in)