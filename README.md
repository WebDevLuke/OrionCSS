<h1>
	 <img height="84" width="429" src="https://cdn.rawgit.com/WebDevLuke/OrionCSS/master/misc/orion-logo.svg">
</h1>

OrionCSS is a SASS framework which is simple, easy to use and scalable. It provides you with a solid OOCSS foundation on which to build your project.

- **ITCSS Powered** - OrionCSS uses the popular OOCSS methodology [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture) to organise its SASS and includes many useful object and utility classes out of the box. 
- **Easily Configurable Grid System** - Enter the max width, number of columns, gutter and padding of a grid system of your choice and SASS will automatically generate all the CSS classes and media query mixins for you.
- **Easily Manage Breakpoints** - Manage your media query breakpoints in one file which then automatically filters into the rest of the framework.
- **Usuable with Orion Framework** - Use as a dependency of the [Orion Framework](https://github.com/WebDevLuke/Orion-Framework) to access specifically built Gulp tasks to compile and optimise your SASS. [(More Info)](#using-with-orion-framework)

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


## Getting Started

The best way to use OrionCSS is as part of the larger [Orion Framework](https://github.com/WebDevLuke/Orion-Framework). [(More Info)](#using-with-orion-framework)

You can also use OrionCSS on it's own as a part of your own framework. To install it as a depedency using NPM, run the following command:

```
npm install orioncss --save
```

Next, you need to create the following directory structure in your project `sass` directory. This is where all your project's [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture) layer files will sit.

- `/01 - settings` - Used with preprocessors and contain font, colors definitions, etc.
- `/02 - tools` - Globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
- `/03 - generic` - Reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
- `/04 - elements` - Styling for bare HTML elements. These come with default styling from the browser so we can redefine them here.
- `/05 - objects` - Class-based selectors which define undecorated design patterns, for example media object known from OOCSS.
- `/06 - components` - Specific UI components. This is where majority of our work takes place and our UI components are often composed of Objects and Components.
- `/07 - utilities` - Helper classes which should primarily be used for positional and minor cosmetic styling (eg bold, no-wrap, text-alignments etc).

Now you've set up your directories, copy `/node_modules/orioncss/sample.main.scss` into your `sass` directory and rename it `main.scss`. This is where everything is imported and is the place which tells your favourite SASS build tool what to include in the compiled `main.css` stylesheet.

As you work on your project, you will want to add any new scss partials you create to `main.scss` as otherwise they won't be imported. Typically, a more developed `main.scss` may resemble the following:

```
// Objects
@import "../../node_modules/orioncss/05 - objects/objects.box";
@import "../../node_modules/orioncss/05 - objects/objects.cover";
@import "../../node_modules/orioncss/05 - objects/objects.expander";
@import "../../node_modules/orioncss/05 - objects/objects.grid-system";
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


## Class Namespaces

OrionCSS uses appropriate namespaces to link classes with their parent ITCSS layer. These are:

- `.o-`: Objects
- `.c-`: Components
- `.u-`: Utilities

It would be a good idea to follow this convention in your own code. Not only for consistency, but [because it's a good idea](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/).

## Breakpoints
To define the framework breakpoints copy `/node_modules/orioncss/01 - settings/_settings.breakpoints.scss` into your own `sass/01 - settings/` directory and edit the config object.

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


## Grid System

### Configuration
OrionCSS allows you to define a grid system of your choice. On compile SASS then generates all the required CSS classes automatically. 

By default a **1170px 12 column grid system** is used. If you wish to modify this copy `/node_modules/orioncss/01 - settings/_settings.grid-system.scss` into your own `sass/01 - settings/` directory to get started.

Here you set the variables which will create your grid system:-

```sh
$grid: (
  "default": (
    "max-width": 1170px,
    "columns": 12,
    "gutter": 30px,
    "containerPadding": 30px
  )
);
```

You can also reshape the grid at any of your defined breakpoints by creating entries within the `morph` property:-

```sh
$grid: (
  "default": (
    "max-width": 1170px,
    "columns": 12,
    "gutter": 30px,
    "containerPadding": 30px
  ),
  'morph': (
    "lg" : (
      "max-width": 1600px,
      "columns": 16
    )
  )
);
```

The above example defines a **1170px 12 column grid system** which morphs into a **1600px 16 column grid system** once the `lg` breakpoint defined in `/01 - settings/_settings.breakpoints.scss` has been hit.

### Usage

Below are a few practical examples using the grid outlined in [Configuration](#configuration). If you've used bootstrap, the syntax here is almost identical.

##### Basic grid

```sh
<div class="o-container">
  <div class="o-row">
    <div class="o-col-4"></div>
    <div class="o-col-4"></div>
    <div class="o-col-4"></div>
  </div>
</div>
```
This is a basic 4/4/4 grid which doesn't change.

##### Basic grid w. breakpoint classes

```sh
<div class="o-container">
  <div class="o-row">
    <div class="o-col-4 o-col-1@md"></div>
    <div class="o-col-4 o-col-5@md"></div>
    <div class="o-col-4 o-col-6@md"></div>
  </div>
</div>
```
Here we introduce breakpoint classes which have been automatically created by SASS using the data entered in `/01 - settings/_settings.breakpoints.scss`. As this is a mobile-first framework, we start off with a basic 4/4/4 grid and as we scale up and hit the med breakpoint at 640px it will change to 1/5/6.

##### Advanced grid w. breakpoint classes

```sh
<div class="o-container">
  <div class="o-row">
    <div class="o-col-4@sm o-col-12@md o-col-4@lg o-col-6@lg"></div>
    <div class="u-col-offset-4@sm o-col-4@sm o-col-6@md u-col-offset-4@lg o-col-4@lg o-col-6@lg"></div>
    <div class="u-hide@sm u-display-block@md o-col-6@md u-col-offset-8@lg o-col-4@lg o-col-16@lg"></div>
  </div>
</div>
```
Here is an advanced example of how we can combine breakpoint classes to significantly alter our columns as we increase our browser resolution. 

## Breakpoint Mixins
When writing SASS, you also have access to breakpoint mixins which allow you to generate media queries using the data entered in `/01 - settings/_settings.breakpoints.scss`. Like with breakpoint classes, these are automatically generated on compile.

##### HTML
```sh
<div class="o-container">
  <div class="o-row">
    <div class="o-col-4"></div>
    <div class="o-col-4"></div>
    <div class="o-col-4"></div>
  </div>
</div>
```

##### SASS
```sh
.o-container div {
  &:before {
    content:"default";
  }
  @include bp(sm){
    &:before{
      content:"sm";
    }
  }
  @include bp(md){
    &:before{
      content:"md";
    }
  }
  @include bp(lg){
    &:before{
      content:"lg";
    }
  }
  @include bp(lg){
    &:before{
      content:"lg";
    }
  }
}
```
In the above, we give each div within the container a pseudo element and then change its content at different breakpoints. You can group these breakpoint mixins within the element they're modifying or you can define them seperately like in the next example.


##### HTML
```sh
<div class="o-container">
  <div class="o-row">
    <div class="o-col-4@sm o-col-12@md o-col-4@lg o-col-6@lg"></div>
    <div class="u-col-offset-4@sm o-col-4@sm o-col-6@md u-col-offset-4@lg o-col-4@lg o-col-6@lg"></div>
    <div class="u-hide@sm u-display-block@md o-col-6@md u-col-offset-8@lg o-col-4@lg o-col-16@lg"></div>
  </div>
</div>
```

##### SASS
```sh
.o-container div {
  &:before {
    content:"default";
  }
}

@include bp(sm) {
  .o-container div:before {
    content:"sm";
  }
}

@include bp(md) {
  .o-container div:before {
    content:"md";
  }
}

@include bp(lg) {
  .o-container div:before {
    content:"lg";
  }
}

@include bp(lg) {
  .o-container div:before {
    content:"lg";
  }
}
```
Here we have seperated the breakpoint mixins from the element they're modifying. This is useful if a breakpoint needs to effect multiple elements on your page as you now have one use of a breakpoint mixin effecting many elements rather then many uses of the same breakpoint mixin. On large projects with lots of SASS this method is preferred as it allows better tracking of what elements are being changed at which breakpoints.


### List of breakpoint mixins

- Create a min-width mobile-first breakpoint: `@include bp($bp)` *Example: @include bp(sm)*

- Create a max-width desktop-first breakpoint: `@include bpMax($bp)` *Example: @include bpMax(sm)*

- Create a breakpoint which only triggers inbetween 2 breakpoints: `@include bpBetween($from, $to)` *Example: @include bpBetween(sm, md)*


## Spacing Modifiers

Many object and utility classes in OrionCSS have spacing modifiers which are automatically generated on build using pre-defined values. To modify these values, copy `/node_modules/orioncss/01 - settings/_settings.spacing.scss` into your own `sass/01 - settings/` directory and then edit as you will. The default spacing values can be found below:-

```sh
$spacing: (
  "none": 0px,
  "atomic": 2px,
  "micro": 5px,
  "tiny": 10px,
  "small": 15px,
  "reduced": 20px,
  "regular": 25px,
  "increased": 30px,
  "large": 35px,
  "huge": 40px,
  "giant": 50px,
  "mega": 60px,
  "giga": 70px,
  "terra": 80px
);
```

Using the SASS loop below, spacing variants of the `margin-bottom` modifier would be generated aswell as one for each breakpoint defined in `/01 - settings/_settings.breakpoints.scss`.

```sh
@include bp(#{$bp-name}) {
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

To prevent bloat, I recommend using [UNCSS](https://github.com/giakki/uncss). This scans your HTML and filters out unused classes, meaning only the classes referenced in your HTML are included in your compiled CSS. UNCSS is included in the larger [Orion Framework](https://github.com/WebDevLuke/Orion-Framework), where OrionCSS is a dependency.

## Further Documentation
OrionCSS features heavy documentation within its codebase so that's the first place to look if you have any questions about a specific feature or included partial.


## Using with Orion Framework
When you use OrionCSS as part of the larger [Orion Framework](https://github.com/WebDevLuke/Orion-Framework), you gain access to specifically built Gulp tasks to compile and optimise your SASS. These include:

- A setup task which creates all the directories and files you need to get you up and running as quickly as possible.
- `Build` and `Watch` tasks to easily compile your SASS.
- [gulp-sass-glob](https://github.com/mikevercoelen/gulp-sass-glob) is used to automatically import any new partials, so you won't need to edit `main.scss` at all.
- [UNCSS](https://github.com/giakki/uncss) is used to remove any unused CSS classes from your stylesheet, so you don't have to worry about bloated CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) is automatically applied where applicable.

Please refer to [Orion Framework](https://github.com/WebDevLuke/Orion-Framework)'s github repository for more information.


## About the Developer
I'm Luke Harrison, a Sheffield-based Web Designer &amp; Developer from the UK, currently working at [Evolution Funding](https://github.com/EvolutionFunding). Read more about me at [lukeharrison.net](http://www.lukeharrison.net) and/or follow me on twitter at [@WebDevLuke](https://twitter.com/WebDevLuke).