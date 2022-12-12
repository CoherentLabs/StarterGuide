---
title: "Unreal Engine Chapter 5: Handling events received from JavaScript"
description: ""
date: 2021-12-08T17:45:44+02:00
lastmod: 2021-12-08T17:45:44+02:00
draft: false
images: []
menu:
    unrealChapters:
        parent: "unreal-chapters"
        weight: 0
---

In this final chapter we will demonstrate how the `change_menu`, `pause_toggle`, `map_move` and `map_zoom` events triggered from JavaScript can be handled in Unreal C++.

### Overview of the requirements

To implement these events, we need to check what kind of data some will be passing over to C++ (as per [Chapter 11](https://starter.coherent-labs.com/chapters/chapter-11/)), as well as see what kind of behavior is expected to happen afterwards in C++ (as per the implementation in [Chapter 9](https://starter.coherent-labs.com/chapters/chapter-9/)).

For each event that we will handle, we will create a corresponding C++ method in our `StarterGuideHUD` class. We will trivially name them as their JavaScript counterparts:

- `PauseToggle` - no parameters will be passed
- `ChangeMenu` - a `string` parameter will be passed with the menu setting name, which we will expect as an `FString`
- `MapMove` - two `number` parameters will be passed for the `x` and `y` coordinates, which we will expect as `float`s
- `MapZoom` - a number parameter will be passed for the zoom amount, which we will expect as a `float`
- All of the methods will be marked as `UPROPERTY`

The `PauseToggle` and `ChangeMenu` methods will both perform make a `View->TriggerEvent` call, which will be caught in JavaScript, in our `script.js` file, where we will have an `engine.on` function, which will invoke the `attachSliderListeners` function.

In the `BindUI` method of our `StarterGuideHUD` class we will call the `RegisterForEvent` of our `View` to tell what the name of each event that we expect will be, and create a `handler` specifying which method will be doing the *handling*.

### Implementation

First let's add the `engine.on` expectation in the `script.js` file:

```
engine.on("AttachSliderListeners", () => {
    attachSliderListeners();
});
```

The `StarterGuideHUD.h` file should look like this after our declarations:

```
UCLASS()
class COHERENTSAMPLE_API AStarterGuideHUD : public ACohtmlGameHUD
{
    GENERATED_BODY()

public:
    AStarterGuideHUD(const FObjectInitializer& PCIP);

    virtual void BeginPlay() override;
    virtual void Tick(float DeltaTime) override;

    UFUNCTION()
    void BindUI();

    UFUNCTION()
    void UpdateItemSelect();

    UFUNCTION()
    void PauseToggle();

    UFUNCTION()
    void ChangeMenu(FString& menu);

    UFUNCTION()
    void MapMove(float x, float y);

    UFUNCTION()
    void MapZoom(float zoom);

    UPROPERTY()
    UPlayerModel* model;

    UPROPERTY()
    UMapModel* map;

private:
    cohtml::View* View;
};
```

Now over in the `StarterGuideHUD.cpp`:

- In the `BindUI` method we will do the aforementioned event registering:

```
void AStarterGuideHUD::BindUI()
{
    View = GetCohtmlHUD()->GetView();
    if (!View)
    {
        UE_LOG(LogTemp, Error, TEXT("Failed to retrieve View!"));
        return;
    }

    View->RegisterForEvent("change_menu", cohtml::MakeHandler(this, &AStarterGuideHUD::ChangeMenu));
    View->RegisterForEvent("pause_toggle", cohtml::MakeHandler(this, &AStarterGuideHUD::PauseToggle));
    View->RegisterForEvent("map_move", cohtml::MakeHandler(this, &AStarterGuideHUD::MapMove));
    View->RegisterForEvent("map_zoom", cohtml::MakeHandler(this, &AStarterGuideHUD::MapZoom));

    View->CreateModel("PlayerModel", model);
    View->CreateModel("MapModel", map);
    View->SynchronizeModels();

    model->ItemSelectDelegate.AddDynamic(this, &AStarterGuideHUD::UpdateItemSelect);

    UE_LOG(LogTemp, Log, TEXT("UI is bound!"));
}
```

- And here is the translated logic that we had in the `script.js` file by the end of [Chapter 9](https://starter.coherent-labs.com/chapters/chapter-9/) for the events that we will be handling in the `StarterGuideHUD.cpp`:

```
void AStarterGuideHUD::PauseToggle()
{
    model->isPaused = !model->isPaused;
    View->UpdateWholeModel(model);
    View->SynchronizeModels();

    if (model->activePauseMenu == "settings" && model->isPaused)
    {
        View->TriggerEvent("AttachSliderListeners");
    }
}

void AStarterGuideHUD::ChangeMenu(FString& menu)
{
    model->activePauseMenu = menu;
    View->UpdateWholeModel(model);
    View->SynchronizeModels();

    if (menu == "settings")
    {
        View->TriggerEvent("AttachSliderListeners");
    }
}

void AStarterGuideHUD::MapMove(float x, float y)
{
    map->x = x;
    map->y = y;
    View->UpdateWholeModel(map);
    View->SynchronizeModels();
}

void AStarterGuideHUD::MapZoom(float zoom)
{
    map->zoom = zoom;
    View->UpdateWholeModel(map);
    View->SynchronizeModels();
}
```

Now every event sent by JavaScript will be properly handled. And with this we can now conclude the **Unreal Engine Starter Guide**!
