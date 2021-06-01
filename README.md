# SB Theming

## Installation

`````bash
npm install --save sb-theming
`````

Then in your `index.html` add the following line:

```html
<link rel="stylesheet" href="./node_modules/sb-theming/sb-theming.css">
```

When using [**Angular**](https://angular.io/) with **CSS** update your `angular.json`:

```json
"projects": {
    "projectname": {
        "architect": {
            "build": {
                "options": {
                    "styles": [
                        "./node_modules/sb-theming/sb-theming.css"
                    ]
                }
            },
            "test": {
                "options": {
                    "styles": [
                        "./node_modules/sb-theming/sb-theming.css"
                    ]
                }
            }
        }
    }
}
```

Use the above inclusion to the project if you **do not** wish to customize the theme. If you do wish to do so, follow the inclusion below:

## SCSS

Customizing the theme can only be done with SCSS. When you are using [SCSS](https://sass-lang.com/) you can access all the different methods of the theme-package. The main entry point would then be the `sb-theme.scss` file. You can add a shortcut by adding the following lines to your `angular.json` right beneath your 'styles':

```json
"stylePreprocessorOptions": {
    "includePaths": [
        "./node_modules/sb-theming/scss"
    ]
},
```

Then you can import the scss file like so:

```scss
// styles.scss or any other scss file
@import 'sb-theming';
```

You can then specify all the different variables which are used by the library to compile. Below is a template file for all used variables. The template can be found on [Github](https://github.com/SeverinBuchser/SbElementSchematics/tree/master/src/ng-add/files/_variables.scss) in the directory templates or in the Template section below.

## Documentation

Documentation is not yet available for this project. 

## Template File

```scss
/*
  You can customize the variables used in the whole project by tweaking the
  variables below. All variables used in the project depend upon these
  variables.
*/

@import 'sb-theming';

/*****************************************************************************
                        Color - Variables
******************************************************************************/

:root {
  @include defineColorHSL(--success, 157, 74%, 52%);
  @include defineColorHSL(--warn, 351, 100%, 66%);
  @include defineColorHSL(--info, 45, 100%, 64%);

  @include defineColorHSL(--primary, 216, 98%, 62%);
  @include defineColorHSL(--secondary, 336, 91%, 66%);

  @include defineColorHSL(--dark, 210, 13%, 15%);
  @include defineColorHSL(--night, 208, 13%, 20%);
  @include defineColorHSL(--bright, 0, 0%, 100%);
  @include defineColorHSL(--light, 0, 0%, 95%);
}


/*****************************************************************************
                        Spacing - Variables
******************************************************************************/

:root {
  --spacing-s: 0.7rem;
  --spacing-d: 1rem;
  --spacing-m: 1.4rem;
  --spacing-l: 1.8rem;
}


/*****************************************************************************
                              Typography - Variables
******************************************************************************/

:root {
  // weights
  --font-weight-regular: normal;
  --font-weight-bold: bold;

  // families
  --font-family-default: 'Inter', sans-serif;
  --font-family-display: 'Abril Fatface', cursive;

  // sizes
  --font-size-s: 0.85rem;
  --font-size-d: 1rem;
  --font-size-m: 1.3rem;
  --font-size-l: 1.4rem;
  --font-size-xl: 1.6rem;
}
```

