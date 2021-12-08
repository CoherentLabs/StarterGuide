---
title: "Bonus Chapter: How to prepare your UI to work with a backend"
description: ""
date: 2021-12-06T15:05:35+02:00
lastmod: 2021-12-06T15:05:35+02:00
draft: false
images: []
menu:
    chapters:
        parent: "chapters"
        weight: 3
---

With our UI complete we can now start integrating it into our game. But before we can do that we need to make a few changes to our FrontEnd code.

## Setting our body to be transparent

For the purpose of this guide we made our UI to have a black background. This allowed us to be able to demonstrate the different features that we made more easily. 

This however won't allow us to use the same UI in a game, as it won't show the game underneath. To fix that we'll change the `body` background-color to transparent in our `style.css` file:

```
    background-color: transparent;
```

## Removing the models and mocked data

Since our models will now be created on the backend, we can remove the `model` and `map` constants we declared in the `model.js` file.

Then we just need to remove the creation of the mock models and we'll be left with the following code in our `model.js`

```
function getCurrentTime() {
    const date = new Date();

    return `${date.getHours()}:${date.getMinutes()}`;
}

function updateCurrentTime() {
    setInterval(() => {
        PlayerModel.time = getCurrentTime();
        engine.updateWholeModel(PlayerModel);
        engine.synchronizeModels();
    }, 60000);
}

engine.whenReady.then(() => {
    engine.registerBindingAttribute('poi', POIHandler);

    engine.createObservableModel("activeItem");
    
    PlayerModel.time = getCurrentTime();
    updateCurrentTime();
    engine.updateWholeModel(PlayerModel);
    engine.synchronizeModels();
});
```

Here as you can see we are leaving the time update function, because we want to use the built in JavaScript functions to get the time.

We are also leaving the `engine.registerBindingAttribute` and the `engine.createObservableModel` functions since they have to be used on the Front End. However, since the observable model's properties need to be synchronized with the model properties from the backend (as to not have a desynchronization between the game and UI), we also need to add a so-called synchronization dependency, in order to be updated accordingly like this:

```
engine.whenReady.then(() => {
    engine.registerBindingAttribute('poi', POIHandler);

    engine.createObservableModel("activeItem");
    engine.addSynchronizationDependency(PlayerModel, activeItem);

    PlayerModel.time = getCurrentTime();
    updateCurrentTime();
    engine.updateWholeModel(PlayerModel);
    engine.synchronizeModels();
});
```

## Removing the mocked event listeners

In the previous chapters of the guide we demonstrated how to trigger and listen for events. Since we want to integrate our UI with a game engine we need to remove some of them as the engine will have to handle them now. 

In the `script.js` file we'll start by removing the `pause_toggle` event.

Next in the same file, we can remove the `change_menu` event listener as well.

## Expecting events to attach slider listeners

The `attachSliderListeners` function will now become an `engine.on` function, which will expect an event with the same name to be invoked from the backend, to indicate when the slider event listeners should be attached:

```
function attachSliderListeners() {
    const sliderVolume = document.querySelector(".slider-volume");
    const volumeValue = document.querySelector(".volume-value");

    sliderVolume.addEventListener("sliderupdate", (e) => {
        volumeValue.textContent = e.detail;
    });

    const sliderDifficulty = document.querySelector(".slider-difficulty");
    const difficultyValue = document.querySelector(".difficulty-value");

    sliderDifficulty.addEventListener("sliderupdate", (e) => {
        difficultyValue.textContent = e.detail;
    });
}
```

This is changed to:

```
engine.on("attachSliderListeners", () => {
    const sliderVolume = document.querySelector(".slider-volume");
    const volumeValue = document.querySelector(".volume-value");

    sliderVolume.addEventListener("sliderupdate", (e) => {
        volumeValue.textContent = e.detail;
    });

    const sliderDifficulty = document.querySelector(".slider-difficulty");
    const difficultyValue = document.querySelector(".difficulty-value");

    sliderDifficulty.addEventListener("sliderupdate", (e) => {
        difficultyValue.textContent = e.detail;
    });
});
```

## Adding new event triggers

The last step of the process would be to add new event triggers to the `mapDrag` and `zoom` functions in the `script.js` file. This will allow us to make changes to the model inside the engine.

To do that we'll start by removing the following code from the `mapDrag` function:

```
MapModel.x = clamp(MapModel.x + event.clientX - startX, -limitX, 0);
MapModel.y = clamp(MapModel.y + event.clientY - startY - offsetY, -limitY, 0);
```

and replacing it with:

```
engine.trigger('map_move',
    clamp(MapModel.x + event.clientX - startX, -limitX, 0),
    clamp(MapModel.y + event.clientY - startY - offsetY, -limitY, 0)
);
```

Then we can do the same for the `zoom` function. Remove:

```
MapModel.x = clamp(MapModel.x + event.clientX * (MapModel.zoom - initialScale) * -1, -limitX, 0);
MapModel.y = clamp(MapModel.y + (event.clientY - offsetY) * (MapModel.zoom - initialScale) * -1, -limitY, 0);
```

and replace with:

```
engine.trigger('map_move',
    clamp(MapModel.x + event.clientX * (MapModel.zoom - initialScale) * -1, -limitX, 0),
    clamp(MapModel.y + (event.clientY - offsetY) * (MapModel.zoom - initialScale) * -1, -limitY, 0)
);
```

This will allow us to send the move coordinates to the engine so the model can be updated.

And last we need to do the same for the map zoom. Again in the `zoom` functione we'll replace:

```
MapModel.zoom = clamp(MapModel.zoom + event.deltaY * -0.01, 1, 3);
```

with

```
engine.trigger('map_zoom', clamp(MapModel.zoom + event.deltaY * -0.01, 1, 3))
```

And with that our UI is ready to be used inside a game.