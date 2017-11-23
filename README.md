<h1>
	 <img height="67" width="429" src="https://cdn.rawgit.com/WebDevLuke/OrionCSS/master/misc/orion-logo.svg">
</h1>

[![CircleCI](https://circleci.com/gh/WebDevLuke/OrionCSS/tree/master.svg?style=shield)](https://circleci.com/gh/WebDevLuke/OrionCSS/tree/master)

OrionCSS is a SASS framework which is simple, easy to use and scalable. It provides you with a solid ITCSS foundation on which to build your project.

- **ITCSS Powered** - OrionCSS uses the popular OOCSS methodology [ITCSS](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) to organise its SASS and includes many useful object and utility classes out of the box.
- **Powerful Grid System** - OrionCSS includes a flexible and easy to use grid system which can be adapted for any size or scenario.
- **Easily Manage Breakpoints** - Manage your media query breakpoints in one file which then automatically filters into the rest of the framework.
- **Complimented by OrionBP** - Use with [OrionBP](https://github.com/WebDevLuke/Orion-Framework), a simple front-end boilerplate for projects using OrionCSS. It includes a suite of powerful Gulp tasks allowing you to compile, compress and concatenate your SASS, JS and image assets. [(More Info)](#using-with-orion-framework)

## Table of contents

* [Getting Started](#getting-started)
* [Class Namespaces](#class-namespaces)
* [Breakpoints](#breakpoints)
* [Grid System](#grid-system)
* [Breakpoint Mixins](#breakpoint-mixins)
* [Spacing Modifiers](#spacing-modifiers)
* [Further Documentation](#further-documentation)
* [Using with Orion Framework](#using-with-orion-framework)
* [About the Developer](#about-the-developer)
* [Special Thanks](#special-thanks)


## Getting Started

The best way to use OrionCSS is via [OrionBP](https://github.com/WebDevLuke/Orion-Framework), a simple front-end boilerplate designed to compliment this framework. [(More Info)](#using-with-orionbp)

You can also use OrionCSS on it's own as a part of your own framework. To install it as a depedency using NPM, run the following command:

```
npm install orioncss --save
```

Or to install it as a depedency using Bower, run the following command:

```
bower install orioncss --save
```

Next, you need to create the following directory structure in your project `sass` directory. This is where all your project's [ITCSS](http://www.creativebloq.com/web-design/manage-large-css-projects-itcss-101517528) layer files will sit.

- `/01 - settings` - Used with preprocessors and contain font, colors definitions, etc.
- `/02 - tools` - Globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
- `/03 - generic` - Reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
- `/04 - elements` - Styling for bare HTML elements. These come with default styling from the browser so we can redefine them here.
- `/05 - objects` - Class-based selectors which define undecorated design patterns, for example media object known from OOCSS.
- `/06 - components` - Specific UI components. This is where majority of our work takes place and our UI components are often composed of Objects and Components.
- `/07 - utilities` - Helper classes which should primarily be used for positional and minor cosmetic styling (eg bold, no-wrap, text-alignments etc).

Now you've set up your directories, copy `/node_modules/orioncss/sample.main.scss` into your `sass` directory and rename it `main.scss`. This is where everything is imported and is the place which tells your favourite SASS build tool what to include in the compiled `main.css` stylesheet.

As you work on your project, in `main.scss`, you will need comment in any object or utility partial you use in order to include them in the import. Don't forget to also add imports for any new sass partials you create as otherwise they won't be included. Typically, a more developed `main.scss` may resemble the following:

```
// Objects
@import "../../node_modules/orioncss/05 - objects/objects.box";
@import "../../node_modules/orioncss/05 - objects/objects.container";
@import "../../node_modules/orioncss/05 - objects/objects.cover";
@import "../../node_modules/orioncss/05 - objects/objects.expander";
@import "../../node_modules/orioncss/05 - objects/objects.layout";
@import "../../node_modules/orioncss/05 - objects/objects.list-bare";
@import "../../node_modules/orioncss/05 - objects/objects.list-inline";
@import "../../node_modules/orioncss/05 - objects/objects.media-flag";
@import "../../node_modules/orioncss/05 - objects/objects.media";
@import "../../node_modules/orioncss/05 - objects/objects.pack";
@import "../../node_modules/orioncss/05 - objects/objects.table";
@import "/05 - objects/objects.strip";

// Components
@import "/06 - components/components.buttons";
@import "/06 - components/components.icons";
@import "/06 - components/components.type";
```
You may need to edit the paths referencing `node_modules` to resemble your own project directory structure.

To give you a useful starting point for building your own components, a sample component can be found at `/node_modules/orioncss/06 - components/_sample.component.mycomponent.scss`.

You can modify any default variables found in the settings layer of OrionCSS by either copying the relevant settings partial to your own settings layer (Remember to remove the `!default` flag from your new file) and updating the path in your `main.scss`, or by redefining the variable directly in your `main.scss` like below:

```
// Settings
@import "../../node_modules/orioncss/01 - settings/settings.colors";

// Redefine colors
$colors: (
  "blue": #EFEFEF,
  "green": #84BC44,
  "red": #F05D4A,
  "purple": #C37CBD;
);

```

## Class Namespaces

OrionCSS uses appropriate namespaces to link classes with their parent ITCSS layer. These are:

- `.o-` - Objects
- `.c-` - Components
- `.u-` - Utilities

It would be a good idea to follow this convention in your own code. Not only for consistency, but [because it's a good idea](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

## Breakpoints

```sh
{
  "sm": "370px",
  "sm2": "425px",
  "sm3": "500px",
  "md": "768px",
  "md2": "840px",
  "md3": "925px",
  "lg": "1024px",
  "lg2": "1280px",
  "lg3": "1440px"
}
```
These breakpoints can be used independantly using OrionCSS's [breakpoint mixin tools](#breakpoint-mixins) or as part of auto-generated breakpoint classes for the many object and utility classes included with OrionCSS, including the grid system documented next.

By default, framework breakpoints can be found in `/node_modules/orioncss/01 - settings/_settings.breakpoints.scss`.


## Grid System

OrionCSS includes object and utility classes which together form a very flexible and easy to use grid system. These classes are:-

- `o-container` -  Constrains the content within the width of a page. The default container width is `1170px`.
- `o-layout` - Used to construct a grid-like layout system, with each layout__item representing an
individual column.
- `u-1/12` - Example width-set utility class which allows you to define each column width in fractions.

For width-sets, the default classes generated are halves, thirds, fourths, fifths and twelves, with the last to mimic a 12 column grid system.

```
$width-sets: 2, 3, 4, 5, 12 !default;
```

By default, these settings can be found in `/node_modules/orioncss/01 - settings/_settings.widths.scss`.


#### Basic grid

```sh
<div class="o-container">
  <div class="o-layout">
    <div class="o-layout__item u-1/3"></div>
    <div class="o-layout__item u-1/3"></div>
    <div class="o-layout__item u-1/3"></div>
  </div>
</div>
```
This is a basic 3 column grid.

#### Basic grid w. breakpoint classes

```sh
<div class="o-container">
  <div class="o-layout">
    <div class="o-layout__item u-1/3 u-1/12@md"></div>
    <div class="o-layout__item u-1/3 u-5/12@md"></div>
    <div class="o-layout__item u-1/3 u-6/12@md"></div>
  </div>
</div>
```
Here we introduce breakpoint classes which have been automatically created by SASS using the data entered in `/01 - settings/_settings.breakpoints.scss`. As this is a mobile-first framework, we start off with a basic 3 column grid and as we scale up and hit the med breakpoint at 768px it will changes to a more advanced grid, 1-5-6 using a traditional 12 column grid.

#### Advanced grid w. breakpoint classes & offsets

```sh
<div class="o-container">
  <div class="o-layout">
    <div class="o-layout__item u-1/2 u-5/12@md u-offset-2/12@md"></div>
    <div class="o-layout__item u-1/2 u-hide@md"></div>
    <div class="o-layout__item u-hide@max-md u-5/12@md"></div>
  </div>
</div>
```
Here is an advanced example of how we can combine breakpoint classes to significantly alter our columns as we increase our browser resolution. We also introduce offset classes which can push a column across a container and a basic hide utility class.

## Breakpoint Mixins
When writing SASS, you also have access to [sass-mq](https://github.com/sass-mq/sass-mq) which allow you to easily generate media queries using the data entered in `/01 - settings/_settings.breakpoints.scss`.

Create a min-width mobile-first breakpoint:-

```
@include mq(md) {
  .myelement {
    property:value;
  }
}

.myelement {
  property:value;
  @include mq(md) {
    property:value;
  }
}
```

Create a max-width desktop-first breakpoint:-

```
@include mq($until: md) {
  .myelement {
    property:value;
  }
}

.myelement {
  property:value;
  @include mq($until: md) {
    property:value;
  }
}
```

Create a breakpoint which only triggers inbetween 2 breakpoints:-

```
@include mq(md, lg) {
  .myelement {
    property:value;
  }
}

.myelement {
  property:value;
  @include mq(md, lg) {
    property:value;
  }
}
```

Full documentation on the usage of sass-mq can be found [here](https://github.com/sass-mq/sass-mq).


## Spacing Modifiers

Many object and utility classes in OrionCSS have spacing modifiers which are automatically generated on build using pre-defined values. By default, these can be found in `/node_modules/orioncss/01 - settings/_settings.spacing.scss`. The default spacing values can be found below:-

```sh
$spacing: (
  "none": 0px,
  "atomic": 2px,
  "micro": 5px,
  "tiny": 10px,
  "small": 15px,
  "reduced": 20px,
  "regular": 30px,
  "increased": 40px,
  "large": 55px,
  "huge": 70px,
  "giant": 100px,
  "mega": 130px,
  "giga": 160px,
  "terra": 190px
);
```

Using the SASS loop below, spacing variants of the `margin-bottom` modifier would be generated aswell as one for each breakpoint defined in `/01 - settings/_settings.breakpoints.scss`.

```sh
@include mq(#{$bp-name}) {
  @each $sp-name, $sp-value in $spacing {
    .u-margin-bottom-#{$sp-name}\@#{$bp-name} {
      margin-bottom:rem($sp-value) !important;
    }
  }
}
```

If using default settings for breakpoints and spacing, this would compile into:-

```
.u-margin-bottom-none {
  margin-bottom:0px;
}

.u-margin-bottom-atomic {
  margin-bottom:2px;
}

.u-margin-bottom-micro {
  margin-bottom:5px;
}

/* And so on */
```

And include responsive variants similar to:-

```
.u-margin-bottom-none@lg {
  margin-bottom:0px;
}

.u-margin-bottom-atomic@lg {
  margin-bottom:2px;
}

.u-margin-bottom-micro@lg {
  margin-bottom:5px;
}

/* And so on */
```

To prevent bloat, I recommend using [UNCSS](https://github.com/giakki/uncss). This scans your HTML and filters out unused classes, meaning only the classes referenced in your HTML are included in your compiled CSS. UNCSS is included in [OrionBP](https://github.com/WebDevLuke/Orion-Framework).

## Further Documentation
OrionCSS features heavy documentation within its codebase so that's the first place to look if you have any questions about a specific feature or included partial.


## Using with OrionBP
When you use OrionCSS via the front-end boilerplate [OrionBP](https://github.com/WebDevLuke/Orion-Framework), you gain access to specifically built Gulp tasks to compile and optimise your SASS. These SASS tasks include:

- A setup task which automates the setup process by creating all the directories and files you need to get you up and running as quickly as possible.
- `Build` and `Watch` tasks to easily compile your SASS.
- [gulp-sass-glob](https://github.com/mikevercoelen/gulp-sass-glob) is used to automatically import any new partials, so you won't need to edit `main.scss` at all.
- [UNCSS](https://github.com/giakki/uncss) is used to remove any unused CSS classes from your stylesheet, so you don't have to worry about bloated CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) is automatically applied where applicable.

Please refer to [OrionBP](https://github.com/WebDevLuke/Orion-Framework)'s github repository for more information.

## About the Developer
I'm Luke Harrison, a Sheffield-based Web Designer &amp; Developer from the UK, currently working at [Evolution Funding](https://github.com/EvolutionFunding). Read more about me at [lukeharrison.net](http://www.lukeharrison.net) and/or follow me on twitter at [@WebDevLuke](https://twitter.com/WebDevLuke).

## Special Thanks
Special thanks to [Harry Roberts](https://github.com/csswizardry) of [CSSWizardry](https://csswizardry.com/) for his wonderful ITCSS methodody and framework [inuitcss](https://github.com/inuitcss/inuitcss). Both have been a great source of inspiration and good ideas for this little side project of mine.
