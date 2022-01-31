---
title: "Chapter 1: Getting Started"
description: ""
date: 2021-09-15T08:26:04+03:00
lastmod: 2021-09-15T08:26:04+03:00
draft: false
images: []
menu:
    chapters:
        parent: "chapters"
        weight: 1
---
## Prerequisites:

In order to be able to optimally leverage Gameface’s features, you will need a good understanding of modern HTML, CSS and JavaScript.

## Who is this tutorial for:

This tutorial is for Front End developers who are looking to quickly familiarize with Gameface and its features.

## What is not covered in this tutorial:

This tutorial focuses on Gameface and its features. You would not find any HTML, CSS or JavaScript-specific explanations here.

## How is this tutorial structured:

It’s separated in **10** different chapters, each chapter will go over a specific element of the UI and will demonstrate a feature of Gameface.

## Choosing the right fit for your project:
As with any Front End project, there are numerous ways to create your project. Here we will go over the main supported ones in Gameface.

### Plain JavaScript
The most simple way to start your project is by writing pure HTML with CSS and JavaScript. Here you don’t need to worry about any libraries and dependencies to build your project.

The benefit of writing plain JavaScript is that over time your codebase would not end up needlessly bloated with dependencies and it will have better performance than some of the other frameworks and libraries. 

The other major benefit is that plain JS is more widely used and understandable. That is why for the purpose of this tutorial we will be using pure JS with HTML and CSS and only add the libraries that Gameface requires.

The biggest con of using plain JavaScript is the fact that you need to write everything from scratch which will inevitably slow your development time. While this is fine for smaller applications, if you need to build a large scale application it’s worth checking some of the other libraries that are mentioned below.

### jQuery
jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API. 

The main benefit of using jQuery is the ease of use. To get started with jQuery all you need to do is include the library in your document and start coding your UI.

The downside of using it is that most of the features it provides can be achieved using plain JavaScript, meaning that you will needlessly add dependencies that could slow down your UI.

### TypeScript 
TypeScript is a superset of JavaScript, meaning that it contains all of the functionality of JavaScript and more. 

TypeScript inherits major pros of JavaScript, but also offers additional benefits coming from static typing and other concepts specific to TS. These are especially useful when multiple people work on the same project, as TypeScript is predictable and can catch bugs earlier in the development process.

To learn more about how to use TypeScript in Gameface, you can check out our [documentation](https://coherent-labs.com/Documentation/cpp-gameface/d8/d44/typescript_in_cohtml.html).

### React

React is a JavaScript library for building user interfaces.

The biggest advantage of React is that it allows you to create reusable UI components. That way you can manage large applications with ease. For this reason React is one of the most commonly used libraries by our clients.

It’s worth noting however that the React ecosystem is very large and can be easily bloated with unnecessary code, and hence impact the performance of your UI.

You can read more about how to set up a React toolchain with Gameface [here](https://coherent-labs.com/Documentation/cpp-gameface/d3/d76/javascript_react_support.html).

### Preact
Preact is a fast 3kB alternative to React with the same modern API. 

Compared to React, Preact is a smaller and more performance-optimized library that includes most of React's features.

You can check how to build a Preact app for Gameface using our command line tool [here](https://coherent-labs.com/Documentation/cpp-gameface/d0/d5e/javascript_preact_support.html).


## Setting up our project
In this tutorial we will be using plain JavaScript with the cohtml.js library, which will allow us to communicate with the game.

Since the focus of this tutorial is on Gameface features, we have already set up the project in the chapter_1 folder - you can leverage it for the rest of the tutorial. Inside the folder you will see the following files - index.html, style.css, cohtml.js, script.js and the assets folder which is going to contain all of the assets that we will be using in the next chapters.

The index.html and script.js files are where we will be writing most of our code for this tutorial. The style.css is a premade file with styles that we will be using in the later chapters.

## Improving Development

To help in the development process we have a few tools that you can use:

### Auto Complete
Auto complete is a feature present in code editors that suggests ways to complete code based on the user input. 

Since the default auto complete features do not always provide meaningful suggestions, we have used the Language Server Protocol developed by Microsoft to extend the functionalities of built-in auto complete features.

You can see how to install and configure it in our [documentation](https://coherent-labs.com/Documentation/cpp-gameface/d6/d12/auto_complete.html).

### Linters

#### HTML Lint
The HTML linter is designed to help you reduce the most common syntax errors that happen with data-binding. It catches errors caused by misspelled data-binding attributes, wrong syntax or accessing non-existent properties from the model. It uses HTMLHint - an HTML linter and extends its rules. 

You can learn more about how to use it from our [documentation](https://coherent-labs.com/Documentation/cpp-gameface/d0/d25/html_linting.html)

#### CSS Lint
The CSS linter is designed to allow you to identify unsupported css rules at runtime. It is based on Stylelint which uses PostCSS underneath.

You can see how to install and use it in our [documentation](https://coherent-labs.com/Documentation/cpp-gameface/d0/d25/html_linting.html).


## Getting started

To get you started right away we have already created a boilerplate that you can use with this guide. You can [download it from here](https://github.com/CoherentLabs/StarterGuide/raw/master/files/chapter_1/chapter_1.zip)