# SB Theme

## Installation

`````
$ npm install -save sb-theme
`````

Then in your `index.html` add the following line:

```html
<link rel="stylesheet" href="./node_modules/sb-theme/dist/sb-theme.dist.css">
```

When using [**Angular**](https://angular.io/) with [**SCSS** or **SASS**](sass https://sass-lang.com/ ) update your `angular.json`:

```json
"projects": {
    "projectname": {
        "schematics": {
            "@schematics/angular:component": {
                "style": "scss" // or "sass"
            }
        },
        "architect": {
            "build": {
                "builder": "@angular-devkit/build-angular:browser",
                "options": {
                    "styles": [
                        "./node_modules/sb-theme/scss/sb-theme.scss"
                    ]
                }
            }
        }
    }
}
```

When using [**Angular**](https://angular.io/) with **CSS** update your `angular.json`:

```json
"projects": {
    "projectname": {
        "schematics": {
            "@schematics/angular:component": {
                "style": "css"
            }
        },
        "architect": {
            "build": {
                "builder": "@angular-devkit/build-angular:browser",
                "options": {
                    "styles": [
                        "./node_modules/sb-theme/dist/sb-theme.dist.css"
                    ]
                }
            }
        }
    }
}
```

## SCSS / SASS

When you are using [SASS or SCSS](sass https://sass-lang.com/) you can access all the different methods of the theme-package. The main entry point would then be the `sb-theme.scss` file. You can add a shortcut by adding the following lines to your `angular.json` right beneath your 'styles':

```json
"stylePreprocessorOptions": {
    "includePaths": [
        "./node_modules/sb-theme/scss"
    ]
},
```

Then you can import the scss file like so:

```scss
// app.component.scss or any other scss file
@import 'sb-theme';
```

