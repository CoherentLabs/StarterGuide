---
title: "Chapter 5: Pause Menu"
description: ""
date: 2021-09-15T08:39:09+03:00
lastmod: 2021-09-15T08:39:09+03:00
draft: false
images: []
menu:
    chapters:
        parent: "chapters"
        weight: 1
---

In this chapter we will learn:
- how to capture input from the keyboard in the UI, 
- how to emit an event from the UI to the game,
- mock how the game handles the event. 

For this purpose we will create a Pause Menu - it will open when the ESC key on the keyboard is pressed, and close once the same key is pressed again.

First we will start with the model by adding a new property called isPaused with a value false.
```
isPaused: false
```
Then in the `index.html` we will create a pause-menu container.
```
<div class="pause-menu">
        
</div>
```
To begin with, we will leave this empty - we will start adding content in the next chapter; for now, we only need to toggle it to be visible. If we open the project in the Player we will see a black screen, indicating that the pause menu is showing. Now let’s hide it.

## Hiding our pause menu using data-binding
To do that we will be using yet another data-binding (instead of a styling one, this time it will be a structural one, allowing us to modify the DOM) - data-bind-if. It works as a regular if statement in that if the passed data is true, the element will be resolved; else it would not. For our case we will add: 
```
<div class="pause-menu" data-bind-if="{{PlayerModel.isPaused}}"></div>
```
If the `isPaused` property in our model is **true**, then the pause menu will show; otherwise it would not. We can confirm this by opening the Player - we can see that the HUD we did in the previous chapters is showing. 

## Capturing key strokes
Next, we will trigger the model to change from the keyboard. This can be achieved by adding the following code in the `script.js` file:
```
document.addEventListener('keydown', (e) => {
    
})
```
This will attach the `keydown` event to our document, meaning that the function will trigger whenever we press any key on the keyboard. However, we only want this to work for the ESC key. To be able to discern which the correct key is, we will use the keycode that we get from the event object and create a conditional statement: only if the correct key is pressed would the code execute. In our case, the correct keycode for **ESC** will be **27**. 

{{< alert icon="💡" text="To check what keycode is assigned to each button, you can use this <a href='https://keycode.info/'>website</a>." />}}

Now we can add the following code:
```
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        
    }
})
```
Note that everything included as part of the if statement will be executed. Here we can add our code to change the model:
```
    if (e.keyCode === 27) {
        PlayerModel.isPaused = !PlayerModel.isPaused;
        engine.updateWholeModel(PlayerModel);
        engine.synchronizeModels();
    }
```
This will set our model to the opposite of what it was (for example, if `false`, it will be set to `true`, and vice versa). If you recall from Chapter 2, every time we change a model we have to update it and then synchronize it - that way our data-bindings would reflect the change. On that basis, if we open the Player, refresh and press the **ESC** key, we can see that the pause menu is toggled.

## Listening and triggering events

While this looks incredibly simple, the truth is that in a real world UI we cannot change the model from the frontend. And even if we could, the game would still go on as it does not know that we have paused it. For this reason, we will mock the way this would be handled if we had a backend.


To accomplish this we will use a method of the `engine` object called `trigger()`. This will allow us to emit an event to the backend so that it knows to pause the game and change the model. Since we do not have one yet, we will be using another function of the engine object called `on()`, which will allow us to listen to emitted events.

In our script.js file we will add the following code:
```
engine.on('pause_toggle', () => {
    
})
```
This will allow us to listen to the `pause_toggle` event that we will emit when pressing the **ESC** key. Inside, we will copy the code from the if statement above.

```
engine.on("pause_toggle", () => {
    PlayerModel.isPaused = !PlayerModel.isPaused;
    engine.updateWholeModel(PlayerModel);
    engine.synchronizeModels();
});
```
{{< alert icon="❗" text="In a real-world situation we would not have to listen to events emitted from the frontend in the frontend (since all of it will need to go through the backend)."/>}}


And now we can emit our event.
```
document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        engine.trigger("pause_toggle");
    }
});
```
If we save and go to the Player, refresh and press **ESC**, we will see that nothing has changed.The pause menu still opens and closes when we press the button. 

In this chapter we learned the other method we have of communicating with the backend. As we can see, the different scenarios have different use cases - you need to decide on which to use, depending on what you need to accomplish. 

In **Chapter 6** we will start to fill up our pause menu with a settings screen. We will explain how to use the components library we have created in a way that would make your work faster and more concise.

## Get the chapter files

You can download the completed chapter from [here](https://github.com/CoherentLabs/StarterGuide/raw/master/files/chapter_5/chapter_5.zip)