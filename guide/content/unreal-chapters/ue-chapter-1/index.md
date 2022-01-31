---
title: "Unreal Engine Chapter 1: Getting Started"
description: ""
date: 2021-12-03T17:10:11+02:00
lastmod: 2021-12-03T17:10:11+02:00
draft: false
images: []
menu:
    unrealChapters:
        parent: "unreal-chapters"
        weight: 0
---
## Overview

This guide is meant to demonstrate how to translate the frontend model data and process events from the original guide to Unreal Engine C++, while also showcasing the powerful and convenient automatic data-binding feature that we have for Unreal.

### Structure

Unlike the Front End guide where you were supposed to implement the logic on your own for each chapter, the Unreal guide aims to be more of a "walkthrough" in terms of how the data transition was realized. Each chapter will cover how each model was "translated" from JavaScript to C++ and you will be able to directly inspect the end result in the files (as well as in the guide).

### Assets

Reading this, you should have obtained our Unreal Engine plugin already, which will contain the assets (located in our CoherentSample directory that is included in the archive, or alternatively installed through our installer) that we will go over in this guide. These assets include:

* A `StarterGuide` map, located under `'CoherentSample/Content/Maps/StarterGuide.umap'`.
* `StarterGuideGameMode` Blueprint, located under `'CoherentSample/Content/MapAssets/StarterGuideGameModeBP.uasset'`.
* Frontend resources, located under `'CoherentSample/Content/uiresources/StarterGuide'`. These include the same HTML/CSS/JS files from the original guide, with some minor alterations to be suitable for our C++ data models.
  * Alternatively obtainable from this [link](https://github.com/CoherentLabs/StarterGuide/raw/master/files/chapter_11/chapter_11.zip).
  * These are based off the state in which they were set up in [Chapter 11](https://starter.coherent-labs.com/chapters/chapter-11/), which explains how to prepare them for a backend.
* C++ files that contain logic for the HUD and different models (`Map`, `Player`, `Minimap` and `Inventory`).

{{< alert icon="❗" text="Note: The Unreal assets will work with Unreal Engine versions >= 4.25" />}}
