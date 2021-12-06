---
title: "Unreal Engine Chapter 3: Creating the Player Model, Minimap and Inventory"
description: ""
date: 2021-12-03T23:02:33+02:00
lastmod: 2021-12-03T23:02:33+02:00
draft: false
images: []
menu:
    unrealChapters:
        parent: "unreal-chapters"
        weight: 0
---

In this chapter we will start translating the JavaScript data in the `model.js` file (in the state that it is at the end of [Chapter 9](https://starter.coherent-labs.com/chapters/chapter-9/)) to Unreal C++ and introduce our **automatic data-binding feature**, exclusive to our Unreal Engine plugin.

## Introducing the UType Binder

By far the most convenient feature we have (and will start demonstrating starting from this chapter onwards) available is the automatic data-binding. We have [a whole section](https://coherent-labs.com/Documentation/UnrealEngine4-gameface/db/d1c/_java_script_interactions.html) in our documentation that covers the feature in great detail, but for this guide all you need to know is that we're going to basically expose class member data through Unreal's reflection system and this is done by simply including the relevant header file that we have available.

### Overview of the required Player model data

If you've followed the original guide, the JavaScript `model` object should be quite familiar. We're now going to translate all of its data from the [Chapter 9](https://starter.coherent-labs.com/chapters/chapter-9/) `model.js` over to Unreal C++. For this purpose we obviously need to create another class through the Unreal Editor, let's call it `PlayerModel` and for simplicity's sake (to spare us unnecessary noise), let's have it's parent class be `UObject`. Since this should by now be a familiar process, we won't add a screenshot this time.

Looking at the `model.js` file, let's quickly go over what kind of data we require:

* We want to include `CohtmlUTypeBinder.h`, `CohtmlFStringBinder.h` and `CohtmlTArrayBinder.h`
* We want to specify our class constructor
* We want a `time` variable, which is a string that holds the current time, so we will declare it as an `FString`
* We want `currentHealth` and `maxHealth` variables, which will be `int32`s
* We want two methods returning `bool` - `shouldShowHealthWarning` and `shouldShowHealthDanger`
* We want a `minimap` object, which will be a `USTRUCT`
  * It requires:
    * An `id` variable, which will be of type `int32`
    * An `x`, `y` and `angle` variable, which can will of type `float`
    * A `label`, which will be an `FString`
* We want a `isPaused` `bool` variable
* We want a `activePauseMenu` `FString` variable
* We want `inventoryItems`, which is going to be a `TArray` containing `InventoryItem` objects (another `USTRUCT`)
  * The `InventoryItem` requires:
    * A `title`, `image` and `description` variable, all of which will be `FString`
    * A `count` variable, which will be `int32`
* We want `selectedItem`, which will be an `int32` variable
* We want an `itemSelect` `void` method
* Additionally, we will also declare a `const` `uint32` variable for the "inventory size", as well as an `FItemSelectDelegate` (this one will be explained [later](#registering-the-player-model))
* Lastly, for the C++ implementation, we also want an `itemToDisplay` variable of type `FInventoryItem`, which we will use to create a synchronization dependency so that we won't have to update the currently selected inventory item every time a different one is selected.

{{< alert icon="❗" text="Keep in mind, that we need to preserve the same variable name casing, so that the interaction with the frontend code will happen correctly. You can alternatively visit your Gameface settings and toggle the <a href='https://coherent-labs.com/Documentation/UnrealEngine4-gameface/db/d1c/_java_script_interactions.html#lowercase_in_automatic_binding'>lowercase name exposure option</a>."/>}}

Before we dive into the code, let's get a few things explained - to successfully utilize the automatic binding of our data, we require the binder header files for certain types like `FString` and `TArray`, hence the additional include directives.

As mentioned previously in order for all of this to work, we utilize Unreal's reflection system, which means that our class/struct needs to be have the Unreal respective `UCLASS`/`USTRUCT` macro used. But what's more - every data we want exposed to JavaScript needs to be a `UPROPERTY`. We can also expose methods using `UFUNCTION`. Additional details can be once again be found in our [JavaScript interactions](https://coherent-labs.com/Documentation/UnrealEngine4-gameface/db/d1c/_java_script_interactions.html) section of our [documentation](https://coherent-labs.com/Documentation/UnrealEngine4-gameface/).

### Preparing for the model creation

Before we start implementing the Player model, let's first do a quick setup in our `StarterGuideHUD` class. We need to add a couple of things:

* We want to include the `CohtmlUTypeBinder.h`
* We want to specify our class constructor
* We want to override our `BeginPlay` method
* We want to add a `BindUI` method
* We want to have a pointer to the `View` that we are going to use

Considering all of these, our `StarterGuideHUD.h` needs to look like this in the end:
```
#pragma once

#include <CohtmlUTypeBinder.h>

#include "GameFramework/HUD.h"
#include "CohtmlGameHUD.h"

#include "StarterGuideHUD.generated.h"

UCLASS()
class COHERENTSAMPLE_API AStarterGuideHUD : public ACohtmlGameHUD
{
    GENERATED_BODY()

public:
    AStarterGuideHUD(const FObjectInitializer& PCIP);

    virtual void BeginPlay() override;

    void BindUI();

private:
    cohtml::View* View;
};
```

Ok, now let's go over to the `StarterGuideHUD.cpp` side:

* Because it takes around 2-3 frames for the View to be ready to do data-binding and we don't want people to implement waiting logic for this themselves, we have a convenient event available (an `Unreal Signature`), to which we can subscribe our `BindUI` method.
* In the `BindUI` body, we want to retrieve the View and assign it to our pointer. By including `CohtmlGameHUD.h`, we will have access to a very convenient method called `GetCohtmlHUD`, which does exactly what its name implies. Not only that, but it also holds the aforementioned signature, to which we can subscribe our `BindUI` method.

With all of this explained, this is how all of this looks actually in code:

```
#include "StarterGuide/StarterGuideHUD.h"

#include "CohtmlGameHUD.h"

AStarterGuideHUD::AStarterGuideHUD(const FObjectInitializer& PCIP)
    : Super(PCIP)
{
    GetCohtmlHUD()->ReadyForBindings.AddDynamic(this, &AStarterGuideHUD::BindUI);
}

void AStarterGuideHUD::BeginPlay()
{
    Super::BeginPlay();
}

void AStarterGuideHUD::BindUI()
{
    View = GetCohtmlHUD()->GetView();
    if (!View)
    {
        UE_LOG(LogTemp, Error, TEXT("Failed to retrieve View!"));
        return;
    }
}
```

And that's it! We can now continue further.

### Implementing the Player model

On to the actual code of the `PlayerModel.h` now:

* This is the code for the includes and a delegate declaration (once again, will be explained [later](#registering-the-player-model)):

```
#pragma once

#include "CohtmlUTypeBinder.h"
#include <CohtmlFStringBinder.h>
#include <CohtmlTArrayBinder.h>

#include "PlayerModel.generated.h"


DECLARE_DYNAMIC_MULTICAST_DELEGATE(FItemSelectDelegate);
```

* Next comes the minimap `USTRUCT`:

```
USTRUCT()
struct FSGMinimap
{
    GENERATED_USTRUCT_BODY()

    FSGMinimap()
        : id(8)
        , x(100.0f)
        , y(100.0f)
        , angle(90.0f)
        , label("River Bank")
    {
    }

    UPROPERTY()
    int32 id;

    UPROPERTY()
    float x;

    UPROPERTY()
    float y;

    UPROPERTY()
    float angle;

    UPROPERTY()
    FString label;
};
```

* Next is the inventory item `USTRUCT`:

```
USTRUCT()
struct FInventoryItem
{
    GENERATED_USTRUCT_BODY()

    FInventoryItem()
        : count(0)
    {
    }

    FInventoryItem(FString Title, int32 Count, FString Image, FString Description)
        : title(Title)
        , count(Count)
        , image(Image)
        , description(Description)
    {
    }

    UPROPERTY()
    FString title;

    UPROPERTY()
    int32 count;

    UPROPERTY()
    FString image;

    UPROPERTY()
    FString description;
};
```

* And lastly the Player model `UCLASS`:

```
UCLASS()
class UPlayerModel : public UObject
{
    GENERATED_BODY()

public:
    UPlayerModel();

    UPROPERTY()
    FString time;

    UPROPERTY()
    int32 currentHealth;

    UPROPERTY()
    int32 maxHealth;

    UFUNCTION()
    bool shouldShowHealthWarning()
    {
        int currentHealthPercent = (currentHealth * 100) / maxHealth;
        return currentHealthPercent > 25 && currentHealthPercent < 50;
    }

    UFUNCTION()
    bool shouldShowHealthDanger()
    {
        int currentHealthPercent = (currentHealth * 100) / maxHealth;
        return currentHealthPercent <= 25;
    }

    UPROPERTY()
    FSGMinimap minimap;

    UPROPERTY()
    bool isPaused;

    UPROPERTY()
    FString activePauseMenu;

    UPROPERTY()
    TArray<FInventoryItem> inventoryItems;

    UPROPERTY()
    FInventoryItem itemToDisplay;

    UPROPERTY()
    int32 selectedItem;

    UPROPERTY()
    FItemSelectDelegate ItemSelectDelegate;

    UFUNCTION()
    void itemSelect(int index)
    {
        selectedItem = index;
        itemToDisplay = inventoryItems[selectedItem];
        ItemSelectDelegate.Broadcast();
    }

private:
    const uint32 INVENTORY_SIZE = 30;
};
```

On the `PlayerModel.cpp` side, we just need to do our initializations as well as place the iventory items at the same indices, where they are located in the original `model.js`:

```
#include "StarterGuide/PlayerModel.h"

UPlayerModel::UPlayerModel()
    : currentHealth(100)
    , maxHealth(100)
    , isPaused(false)
    , activePauseMenu("settings")
    , selectedItem(0)
{
    inventoryItems.SetNum(INVENTORY_SIZE);

    // Adding items in the same slot as originally added in the JS version
    inventoryItems[0] = FInventoryItem("Sharp Spear", 1, "spear", TEXT(
            "A thrusting or throwing weapon with long shaft and sharp head or blade. Great for medium to long range combat"));

    inventoryItems[6] = FInventoryItem("Horned Helmet", 1, "helmet", TEXT(
            "Head covering made of a hard material to resist impact with two sharp horns on the side"));

    inventoryItems[7] = FInventoryItem("Axe", 1, "axe", TEXT(
            "Cutting tool that consists of a heavy edged head fixed to a handle with the edge parallel to the "
            "handle and that is used especially for felling trees and chopping and splitting wood or your enemies."));
    
    inventoryItems[8] = FInventoryItem("Longbow", 1, "bow", TEXT(
            "Hand-drawn wooden bow held vertically and used especially by medieval English archers"));

    inventoryItems[9] = FInventoryItem("Arrow", 5, "arrow", TEXT(
            "Shot from a bow and usually having a slender shaft, a pointed head, and feathers at the butt"));

    inventoryItems[23] = FInventoryItem("Beer", 2, "beer", TEXT(
            "Carbonated, fermented alcoholic beverage that is usually made from "
            "malted cereal grain (especially barley) and is flavored with hops"));

    itemToDisplay = inventoryItems[selectedItem];
}
```

### Registering the Player model

Now we need to add the `PlayerModel` object to the `StarterGuideHUD` and use the `View` to invoke the creation of the model. We also need to add an `UpdateItemSelect` method this time around, which will be hooked to the `ItemSelectDelegate` that we added to the `PlayerModel` class.

This is needed for when the inventory items get clicked and the currently-selected item has to be changed:

* First the `PlayerModel`'s `itemSelect` method gets invoked from the frontend
* We successfully update the `PlayerModel`'s `selectedItem` variable with the new `index` that is provided
* Lastly, we update the `itemToDisplay`

One problem remains, however - for this change to be reflected in the frontend, we need to **update** the JavaScript model and **synchronize**. This is done by the `View`, and only the HUD has access to the it.

And this is basically why we needed [the delegate](#implementing-the-player-model) - because now the `StarterGuideHUD` will be notified that a new inventory item was selected and then it can update the model accordingly, which will cause the synchronization dependency between the C++ model and the JavaScript observable model to happen and in turn - their properties to be synchronized.

This is one very powerful approach that can be applied in many different situations and allows for endless possibilities!

And now to wrap up with the actual code! In the `StarterGuideHUD.h`:

```
class UPlayerModel;

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

private:
    cohtml::View* View;
};
```

In the `StarterGuideHUD.cpp`:

```
#include "StarterGuide/StarterGuideHUD.h"
#include "StarterGuide/PlayerModel.h"

#include "CohtmlGameHUD.h"

void AStarterGuideHUD::BeginPlay()
{
    Super::BeginPlay();
    model = NewObject<UPlayerModel>();
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

In the next chapter we will go over how we will bind the Map model.
