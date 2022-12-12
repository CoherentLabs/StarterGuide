---
title: "Unreal Engine Chapter 4: Creating the Map and Point of Interest"
description: ""
date: 2021-12-04T01:44:53+02:00
lastmod: 2021-12-04T01:44:53+02:00
draft: false
images: []
menu:
    unrealChapters:
        parent: "unreal-chapters"
        weight: 0
---

In this chapter we will wrap up the data transitioning from JavaScript to Unreal C++. This will be marked by the implementation of the Map model.

### Overview of the required Map model data

Looking at the data of the `map` object from the [Chapter 9](https://starter.coherent-labs.com/chapters/chapter-9/) `model.js` of the original Starter Guide, we will require another C++ class to be created from the Editor, called `MapModel` and once again, to spare us unnecessary code noise, we can set its parent class to be `UObject`.

Now let's go over the things we will need:

- We want to once again include the three binders - `CohtmlUTypeBinder.h`,`CohtmlFStringBinder.h` and `CohtmlTArrayBinder.h`
- We want to specify our class constructor
- We want a `zoom`, `x` and `y` variable of type `float`
- We want a `pointsOfInterest` variable, which will be a `TArray` of `PointOfInterest` objects
  - `PointOfInterest` will be a `USTRUCT`, which requires:
    - A `x` and `y` variable of type `float`
    - An `icon`, `title` and `description` variable of type `FString`
    - A `locked` variable of type `bool`
- We want a `mapTiles` variable, which is going to be another `TArray`, containing `MapTile` objects
  - This will be a dummy `USTRUCT`, that will contain no data, but is required since the `data-bind-for` expression in the `index.html` depends on its existance the way it is implemented, but essentially does nothing. It is a struct, because the `data-bind-for` won't generate the tiles if the array consists of primitive types
  - We will also add a `const` `uint32` variable for the tile size

Once again, all of these member variables will be exposed by using the `UPROPERTY` macro.

### Implementing the Map model

Now that we have a list of the data that we need, we can start going over the actual code. Let's start with the `MapModel.h`:

```
#pragma once

#include <CohtmlUTypeBinder.h>
#include <CohtmlFStringBinder.h>
#include <CohtmlTArrayBinder.h>

#include "MapModel.generated.h"

USTRUCT()
struct FPointOfInterest
{
    GENERATED_BODY()

    FPointOfInterest()
        : x(0.0f)
        , y(0.0f)
        , locked(false)
    {
    }

    FPointOfInterest(float X, float Y, FString Icon, FString Title, FString Description, bool Locked)
        : x(X)
        , y(Y)
        , icon(Icon)
        , title(Title)
        , description(Description)
        , locked(Locked)
    {
    }
    
    UPROPERTY()
    float x;

    UPROPERTY()
    float y;

    UPROPERTY()
    FString icon;

    UPROPERTY()
    FString title;

    UPROPERTY()
    FString description;

    UPROPERTY()
    bool locked;
};

// This struct is needed for the automatic generation of the
// map tiles, through the usage of the data-bind-for expression
// in the index.html.
USTRUCT()
struct FMapTile
{
    GENERATED_BODY()

    int32 id;
};

UCLASS()
class COHERENTSAMPLE_API UMapModel : public UObject
{
    GENERATED_BODY()

public:
    UMapModel();

    UPROPERTY()
    float zoom;

    UPROPERTY()
    float x;

    UPROPERTY()
    float y;

    UPROPERTY()
    TArray<FPointOfInterest> pointsOfInterest;

    UPROPERTY()
    TArray<FMapTile> mapTiles;

private:
    const uint32 MAP_TILES_SIZE = 64;
};
```

Evidently it is as simple as can be. Same goes for the `MapModel.cpp`, where we just need to perform the variable initialization and add the 3 "*points of interest*":

```
#include "StarterGuide/MapModel.h"

UMapModel::UMapModel()
    : zoom(1.0f)
    , x(0.0f)
    , y(0.0f)
{
    pointsOfInterest.Add(FPointOfInterest(10.3004f, 45.7164f, "village", "Village", "The village where you were raised.", false));
    pointsOfInterest.Add(FPointOfInterest(22.6609f, 14.1493f, "town", "Town", TEXT("The town of Málhildur."), false));
    pointsOfInterest.Add(FPointOfInterest(74.9957f, 42.1492f, "statue", "Statue of Freya", "Statue of the goddess Freya. Only thing left from a sunken village.", true));

    mapTiles.SetNum(MAP_TILES_SIZE);
}
```

### Registering the Map model

The final step is of course to register the `MapModel` class we just created. This is as simple as it sounds - we will add the object, initialize it and use the `View` to create the model.

The `StarterGuideHUD.h` should now look like this:

```
class UPlayerModel;
class UMapModel;

UCLASS()
class COHERENTSAMPLE_API AStarterGuideHUD : public ACohtmlGameHUD
{
    GENERATED_BODY()

public:
    AStarterGuideHUD(const FObjectInitializer& PCIP);

    virtual void BeginPlay() override;

    void BindUI();

    UFUNCTION()
    void UpdateItemSelect();

    UPROPERTY()
    UPlayerModel* model;

    UPROPERTY()
    UMapModel* map;

private:
    cohtml::View* View;
};
```

And lastly, the `StarterGuideHUD.cpp` should look like this:

```
#include "StarterGuide/StarterGuideHUD.h"
#include "StarterGuide/PlayerModel.h"
#include "StarterGuide/MapModel.h"

#include "CohtmlGameHUD.h"

AStarterGuideHUD::AStarterGuideHUD(const FObjectInitializer& PCIP)
    : Super(PCIP)
{
    GetCohtmlHUD()->ReadyForBindings.AddDynamic(this, &AStarterGuideHUD::BindUI);
}

void AStarterGuideHUD::BeginPlay()
{
    Super::BeginPlay();
    model = NewObject<UPlayerModel>();
    map = NewObject<UMapModel>();
}

void AStarterGuideHUD::BindUI()
{
    View = GetCohtmlHUD()->GetView();
    if (!View)
    {
        UE_LOG(LogTemp, Error, TEXT("Failed to retrieve View!"));
        return;
    }

    View->CreateModel("PlayerModel", model);
    View->CreateModel("MapModel", map);
    View->SynchronizeModels();

    model->ItemSelectDelegate.AddDynamic(this, &AStarterGuideHUD::UpdateItemSelect);

    UE_LOG(LogTemp, Log, TEXT("UI is bound!"));
}

void AStarterGuideHUD::UpdateItemSelect()
{
    View->UpdateWholeModel(model);
    View->SynchronizeModels();
}
```

And here is the result:

{{< img-simple src="ue-chapter-4_1.png" alt="ue-chapter-4_1" caption="<em></em>" class="border-0" >}}

{{< img-simple src="ue-chapter-4_2.png" alt="ue-chapter-4_2" caption="<em></em>" class="border-0" >}}

In the last chapter of this guide, we will implement the handling of events triggered from JavaScript.
