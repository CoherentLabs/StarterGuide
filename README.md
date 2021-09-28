# Gameface Starter Guide

Gameface is for developers who’d like to utilize modern HTML5 and JavaScript to create a game user interface. Gameface shortens development time by allowing you to use modern and widely available technologies.

This tutorial provides a hands-on introduction to building UI with Gameface. By the end of it, you will have created a beautiful and functioning UI with a HUD and a Pause Menu.


## Directory structure

```
│   README.md
│   
├───files
│   │   .gitignore
│   │   
│   ├───chapter_1
│   │   │   chapter_1.zip
│   │   │   cohtml.js
│   │   │   index.html
│   │   │   script.js
│   │   │   style.css
│   │   │   
│   │   └───assets
│   │      
│   │           
│   ├───chapter_2
│   │   │   chapter_2.zip
│   │   │   cohtml.js
│   │   │   index.html
│   │   │   model.js
│   │   │   script.js
│   │   │   style.css
│   │   │   
│   │   └───assets
│   │          
│   │           
│   ├───chapter_3
│   │   │   chapter_3.zip
│   │   │   cohtml.js
│   │   │   index.html
│   │   │   model.js
│   │   │   script.js
│   │   │   style.css
│   │   │   
│   │   └───assets
│   │           
│   │           
│   ├───chapter_4
│   │   │   chapter_4.zip
│   │   │   cohtml.js
│   │   │   index.html
│   │   │   model.js
│   │   │   script.js
│   │   │   style.css
│   │   │   
│   │   └───assets
│   │           
│   │           
│   ├───chapter_5
│   │   │   chapter_5.zip
│   │   │   cohtml.js
│   │   │   index.html
│   │   │   model.js
│   │   │   script.js
│   │   │   style.css
│   │   │   
│   │   └───assets
│   │           
│   │           
│   ├───chapter_6
│   │   │   chapter_6.zip
│   │   │   cohtml.js
│   │   │   index.html
│   │   │   model.js
│   │   │   package-lock.json
│   │   │   package.json
│   │   │   script.js
│   │   │   style.css
│   │   │   
│   │   ├───assets
│   │  
│   │                   
│   ├───chapter_7
│   │   │   chapter_7.zip
│   │   │   cohtml.js
│   │   │   index.html
│   │   │   model.js
│   │   │   package-lock.json
│   │   │   package.json
│   │   │   script.js
│   │   │   style.css
│   │   │   
│   │   ├───assets
│   │  
│   │   
│   ├───chapter_8
│   │   │   chapter_8.zip
│   │   │   cohtml.js
│   │   │   index.html
│   │   │   model.js
│   │   │   package-lock.json
│   │   │   package.json
│   │   │   script.js
│   │   │   style.css
│   │   │   
│   │   ├───assets
│   │         
│   │                   
│   └───chapter_9
│       │   chapter_9.zip
│       │   cohtml.js
│       │   index.html
│       │   model.js
│       │   package-lock.json
│       │   package.json
│       │   poi-data-binding.js
│       │   script.js
│       │   style.css
│       │   
│       ├───assets
│      
│                       
└───guide
    │   .editorconfig
    │   .eslintignore
    │   .eslintrc.json
    │   .gitignore
    │   .markdownlint.json
    │   .markdownlintignore
    │   .stylelintignore
    │   .stylelintrc.json
    │   babel.config.js
    │   netlify.toml
    │   package-lock.json
    │   package.json
    │   README.md
    │   theme.toml
    │   
    ├───assets
    │   ├───js
    │   │   
    │   │           
    │   └───scss
    │       
    │               
    ├───config
    │   │   postcss.config.js
    │   │   
    │   ├───next
    │   │       config.toml
    │   │       
    │   ├───production
    │   │       config.toml
    │   │       
    │   └───_default
    │           config.toml
    │           menus.toml
    │           params.toml
    │           
    ├───content
    │   │   _index.md
    │   │   
    │   └───chapters
    │       │   _index.md
    │       │   
    │       ├───chapter-1
    │       │       
    │       ├───chapter-10
    │       │       
    │       ├───chapter-2
    │       │       
    │       ├───chapter-3
    │       │       
    │       ├───chapter-4
    │       │       
    │       ├───chapter-5
    │       │       
    │       ├───chapter-6
    │       │       
    │       ├───chapter-7
    │       │       
    │       ├───chapter-8
    │       │       
    │       └───chapter-9
    │               
    ├───functions
    │       
    ├───layouts
    │   │   index.html
    │   │   
    │   ├───chapters
    │   │       list.html
    │   │       single.html
    │   │       
    │   ├───partials
    │   │   
    │   │           
    │   └───shortcodes
    │                    
```

## Adding files to the chapters

You can add new files for the chapters inside the files folder. 

**Keep in mind that if you change any of the existing chapters you will need to archive them again**

## Changing the guide content

To change the guide content you need to edit the `md` files in the `/guide/content` directory.

For more information refer to the `README` in the `/guide` folder.

## Credit

### Fonts
The font used for this guide is [Jost*](https://indestructibletype.com/Jost.html)

### Images

The images used for this guide are the following:

- [Arrow flights icon](https://game-icons.net/1x1/lorc/arrow-flights.html) by [Lorc](https://lorcblog.blogspot.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [War axe icon](https://game-icons.net/1x1/delapouite/war-axe.html) by [Delapouite](https://delapouite.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [Beer stein icon](https://game-icons.net/1x1/lorc/beer-stein.html) by [Lorc](https://lorcblog.blogspot.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [Pocket bow icon](https://game-icons.net/1x1/lorc/pocket-bow.html) by [Lorc](https://lorcblog.blogspot.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [Check mark icon](https://game-icons.net/1x1/delapouite/check-mark.html) by [Delapouite](https://delapouite.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [Brutal helm icon](https://game-icons.net/1x1/carl-olsen/brutal-helm.html) by [Carl Olsen](https://twitter.com/unstoppableCarl) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [Padlock icon](https://game-icons.net/1x1/lorc/padlock.html) by [Lorc](https://lorcblog.blogspot.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [Angel wings icon](https://game-icons.net/1x1/lorc/angel-wings.html) by [Lorc](https://lorcblog.blogspot.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [Church icon](https://game-icons.net/1x1/delapouite/church.html) by [Delapouite](https://delapouite.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [Village icon](https://game-icons.net/1x1/delapouite/village.html) by [Delapouite](https://delapouite.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)
- [Spear hook icon](https://game-icons.net/1x1/lorc/spear-hook.html) by [Lorc](https://lorcblog.blogspot.com/) under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/)