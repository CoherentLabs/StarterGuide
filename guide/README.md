# User Guide Theme
This user guide uses the [doks theme](https://getdoks.org/)

## Get started

### Install dependencies

```bash
  npm install
```

### Start development server

```bash
  npm run start
```

### Build for production
```bash
  npm run build
```

### Other commands

Doks comes with [commands](https://getdoks.org/docs/prologue/commands/) for common tasks.


## Content

### Edit chapters

To edit the existing chapters simply edit the `.md` files inside the `content` folder

### Add Chapters

To add a new chapter run the following command

```bash
  npm run create [path] [flags]
```
Where path will be `chapters/{{name-of-chapter}}/index.md`

To publish your chapter change `draft` to `true`

To add your new chapter to the side menu you must add the following to the page params
```
menu:
    chapters:
        parent: "chapters"
```

The items in the menu are ordered by name, if your chapter is 10 or greater you need to add weight to the params

```
menu:
    chapters:
        parent: "chapters"
        weight: 0
```

### Adding images

To add images you can use the img shortcode. The image should be located in the folder of the chapter

```
{{< img src="" alt="" caption="<em></em>" class="border-0" >}}
```

### Adding a new chapter to the main page

To add a new chapter to the main page simply edit `/layouts/index.html`


## Documentation
- [Hugo](https://gohugo.io/documentation/)
- [Doks](https://getdoks.org/)

## Communities
- [Hugo Forums](https://discourse.gohugo.io/)
- [Doks Discussions](https://github.com/h-enk/doks/discussions)
