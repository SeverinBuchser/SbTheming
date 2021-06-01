# SB Theming

## Installation

`````bash
npm install --save sb-theme
`````

Then in your `index.html` add the following line:

```html
<link rel="stylesheet" href="./node_modules/sb-theming/dist/sb-theme.dist.css">
```

When using [**Angular**](https://angular.io/) with **CSS** update your `angular.json`:

```json
"projects": {
    "projectname": {
        "architect": {
            "build": {
                "options": {
                    "styles": [
                        "./node_modules/sb-theming/dist/sb-theme.dist.css"
                    ]
                }
            },
            "test": {
                "options": {
                    "styles": [
                        "./node_modules/sb-theming/dist/sb-theme.dist.css"
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
// app.component.scss or any other scss file
@import 'sb-theme';
```

You can then specify all the different variables which are used by the library to compile. Below is a template file for all used variables. The template can be found on [Github](https://github.com/SeverinBuchser/SbTheming) in the directory templates or in the Template section below.

## Documentation

Documentation is not yet available for this project. 

## Template File

```scss
@import 'sb-theme';

/*****************************************************************************
                        Color - Settings
******************************************************************************/

$success: #28df99;
$warn: #ff546d;
$info: #FFD147;

$primary: #3d8bfd;
$secondary: #f75c9a;

$dark: #22272C;
$night: #2d343a;
$bright: #FFFFFF;
$light: #F2F2F2;


// theme dependent background colors
$background-color-night-root: $dark;
$background-color-night-child: $night;
$background-color-light-root: $bright;
$background-color-light-child: $light;

// theme dependent text colors for the root and child background
$text-color-night: $bright;
$text-color-light: $dark;

// theme independent background colors
$background-color-warn: $warn;
$background-color-success: $success;
$background-color-info: $info;
$background-color-primary: $primary;
$background-color-secondary: $secondary;

// theme dependent text colors for theme independent background
$text-color-night-background-warn: $dark;
$text-color-night-background-success: $dark;
$text-color-night-background-info: $dark;
$text-color-night-background-primary: $bright;
$text-color-night-background-secondary: $dark;
$text-color-light-background-warn: $bright;
$text-color-light-background-success: $bright;
$text-color-light-background-info: $dark;
$text-color-light-background-primary: $bright;
$text-color-light-background-secondary: $bright;

// theme dependent background hover colors for every theme independent background
$background-hover-color-night-background-warn: transparentize($warn, 0.9);
$background-hover-color-night-background-success: transparentize($success, 0.9);
$background-hover-color-night-background-info: transparentize($info, 0.9);
$background-hover-color-night-background-primary: transparentize($primary, 0.9);
$background-hover-color-night-background-secondary: transparentize($secondary, 0.9);
$background-hover-color-light-background-warn: transparentize($warn, 0.9);
$background-hover-color-light-background-success: transparentize($success, 0.8);
$background-hover-color-light-background-info: transparentize($info, 0.7);
$background-hover-color-light-background-primary: transparentize($primary, 0.85);
$background-hover-color-light-background-secondary: transparentize($secondary, 0.85);

// theme dependent text hover colors for theme dependent background hover color
$text-hover-color-night-background-warn: $warn;
$text-hover-color-night-background-success: $success;
$text-hover-color-night-background-info: $info;
$text-hover-color-night-background-primary: $primary;
$text-hover-color-night-background-secondary: $secondary;
$text-hover-color-light-background-warn: $warn;
$text-hover-color-light-background-success: $dark;
$text-hover-color-light-background-info: $dark;
$text-hover-color-light-background-primary: $primary;
$text-hover-color-light-background-secondary: $secondary;



/*****************************************************************************
                        Spacing - Settings
******************************************************************************/

// spacings
$spacing-s: 0.7rem;
$spacing-d: 1rem;
$spacing-m: 1.4rem;
$spacing-l: 1.8rem;



/*****************************************************************************
                            Size - Settings
******************************************************************************/

// sizes
$size-s: $spacing-s * 2;
$size-d: $spacing-d * 2;
$size-m: $spacing-m * 2;
$size-l: $spacing-l * 2;



/*****************************************************************************
                            Border - Settings
******************************************************************************/

// strong colors
$border-color-night-strong: darken($bright, 30%);
$border-color-light-strong: lighten($night, 30%);
$border-color-warn-strong: $warn;
$border-color-success-strong: $success;
$border-color-info-strong: $info;
$border-color-primary-strong: $primary;
$border-color-secondary-strong: $secondary;

// weak colors
$border-color-night-weak: lighten($night, 5%);
$border-color-light-weak: darken($light, 5%);
$border-color-warn-weak: $warn;
$border-color-success-weak: $success;
$border-color-info-weak: $info;
$border-color-primary-weak: $primary;
$border-color-secondary-weak: $secondary;

// widths
$border-width-s: 1px;
$border-width-d: 2px;
$border-width-m: 3px;
$border-width-l: 4px;

// radii
$border-radius-s: $spacing-s / 1.3;
$border-radius-d: $spacing-d / 1.3;
$border-radius-m: $spacing-m / 1.3;
$border-radius-l: $spacing-l / 1.3;



/*****************************************************************************
                              Typography - Settings
******************************************************************************/

/*
  Imports the following font faces from goolge fonts api (https://fonts.google.com/):

  - Inter (https://fonts.google.com/specimen/Inter)
    - Thin 100
    - Extra-light 200
    - Light 300
    - Regular 400
    - Medium 500
    - Semi-bold 600
    - Bold 700
    - Extra-bold 800
    - Black 900

  - Abril Fatface (https://fonts.google.com/specimen/Abril+Fatface)
    - Regular 400
*/
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

// weights
$font-weight-regular: normal;
$font-weight-bold: bold;

// families
$font-family-default: 'Inter', sans-serif;
$font-family-display: 'Abril Fatface', cursive;

// sizes
$font-size-s: 0.85rem;
$font-size-d: 1rem;
$font-size-m: 1.3rem;
$font-size-l: 1.4rem;
$font-size-xl: 1.6rem;



/*****************************************************************************
                              Icon - Settings
******************************************************************************/

/*
  Imports material icons form the google fonts api (https://fonts.google.com/).

  The icons can be found undr 'https://fonts.google.com/icons'.
*/
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

// colors
$icon-warn: $warn;
$icon-success: $success;
$icon-info: $info;
$icon-primary: $primary;
$icon-secondary: $secondary;

// sizes
$icon-size-factor: 1.5;
$icon-size-s: $font-size-s * $icon-size-factor * strip-unit($font-size-s);
$icon-size-d: $font-size-d * $icon-size-factor * strip-unit($font-size-d);
$icon-size-m: $font-size-m * $icon-size-factor * strip-unit($font-size-m);
$icon-size-l: $font-size-l * $icon-size-factor * strip-unit($font-size-l);



/*****************************************************************************
                            Button - Settings
******************************************************************************/

// min width
$button-min-width: 60px;



/*****************************************************************************
                            Input - Settings
******************************************************************************/

// font size
$input-font-size: $font-size-s;

// font scale
$input-font-scale: 0.75;



/*****************************************************************************
                            Table - Settings
******************************************************************************/

// colors
$table-row-background-night-primary: lighten($background-color-night-child, 3%);
$table-row-background-night-secondary: lighten($background-color-night-child, 5%);
$table-row-background-light-primary: darken($background-color-light-child, 3%);
$table-row-background-light-secondary: darken($background-color-light-child, 5%);

```

