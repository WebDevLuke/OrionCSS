<p align="center">
   <img height="84" width="429" src="https://cdn.rawgit.com/WebDevLuke/OrionCSS/master/misc/orion-logo.svg">
  <p align="center">A simple SASS-based OOCSS framework</p>
</p>

## What is OrionCSS?
OrionCSS is a SASS-based OOCSS framework. It's a simple, easy to use and quick way of getting your responsive web project off the ground. It can be used alone in your own project or as a dependency of the larger [Orion Framework](https://github.com/WebDevLuke/Orion-Framework).

- **ITCSS Powered** - OrionCSS uses the popular ITCSS methodology to organise its SASS into an object-oriented fashion and includes many useful object and utility classes out of the box. 
- **Easily Configurable Grid System** - Enter the max width, number of columns, gutter and padding of a grid system of your choice and SASS will automatically generate all the CSS classes and media query mixins for you.
- **Easily Manage Breakpoints** - Manage your media query breakpoints in one file which then automatically filters into the rest of the codebase.
- **Usuable with Orion Framework** - Use as a dependency of the [Orion Framework](https://github.com/WebDevLuke/Orion-Framework) to access specifically built Gulp tasks to compile and optimise your SASS.

OrionCSS takes inspiration and ideas from many sources, including but not limited to the following:

- CSS methodology [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture)
- [Inuit CSS](https://github.com/inuitcss) is often a source of inspiration for me.
- Naming methodologies such as [BEM](http://getbem.com), [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further), and [OOCSS](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces)

## Table of contents

* [Configuration](#configuration)
* [Grid system](#grid-system)
* [Breakpoint usage in SASS](#breakpoint-usage-in-sass)
* [Configuring SASS object and utility spacing variants](#configuring-sass-object-and-utility-spacing-variants)
* [Further documentation](#further-documentation)
* [About the developer](#about-the-developer)

## Configuration
#### Defining your breakpoints
To define the framework breakpoints open `/01 - settings/_settings.breakpoints.scss` and edit the config object.

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
Give each breakpoint a name and order them from smallest to largest. How these breakpoints can be used is explained under [Grid System](#grid-system).

#### Choosing a grid system
OrionCSS allows you to define a grid system of your choice using a config object. On compile SASS then generates all the required CSS classes and media query mixins automatically. To locate this config object open `/01 - settings/_settings.grid.scss`.

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

Here you set the variables which will create your grid system. By default this is set to a **1170px 12 column grid system**.

You can also reshape the grid at any of your defined breakpoints by creating entries within the `morph` property.

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

## Grid system

On compile SASS auto generates all the required classes you will need to construct grids to your specification as per `/01 - settings/_settings.breakpoints.scss`. Below are a few practical examples using the grid outlined in [Configuration](#configuration). If you've used bootstrap, the syntax here is almost identical.

#### Basic grid

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

#### Basic grid w. breakpoint classes

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

#### Advanced grid w. breakpoint classes

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

## Breakpoint usage

#### SASS
When writing SASS, you also have access to breakpoints which allow you to generate media queries using the data entered in `/01 - settings/_settings.breakpoints.scss`. Like with breakpoint slasses, these are automatically generated on compile.

**HTML**
```sh
<div class="o-container">
  <div class="o-row">
    <div class="o-col-4"></div>
    <div class="o-col-4"></div>
    <div class="o-col-4"></div>
  </div>
</div>
```

**SASS**
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
In the above, we give each div within the container a pseudo element and then change its content at different breakpoints. Like in the example above you can group these breakpoint mixins within the element they're modifying or you can define them seperately like in the next example.


**HTML**
```sh
<div class="o-container">
  <div class="o-row">
    <div class="o-col-4@sm o-col-12@md o-col-4@lg o-col-6@lg"></div>
    <div class="u-col-offset-4@sm o-col-4@sm o-col-6@md u-col-offset-4@lg o-col-4@lg o-col-6@lg"></div>
    <div class="u-hide@sm u-display-block@md o-col-6@md u-col-offset-8@lg o-col-4@lg o-col-16@lg"></div>
  </div>
</div>
```

**SASS**
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


#### List of breakpoint mixins

- Create a min-width mobile-first breakpoint: `@include bp($bp)` *Example: @include bp(sm)*

- Create a max-width desktop-first breakpoint: `@include bpMax($bp)` *Example: @include bpMax(sm)*

- Create a breakpoint which only triggers inbetween 2 breakpoints: `@include bpBetween($from, $to)` *Example: @include bpBetween(sm, md)*


## Configuring object and utility spacing modifiers

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
Many objects and utility classes within OrionCSS have spacing modifiers which are automatically generated on build. The data which feeds into these can be defined in `/01 - settings/_settings.spacing`. The default variants can be found above.

```sh
@include bp(#{$bp-name}) {
  @each $sp-name, $sp-value in $spacing {
    .u-margin-bottom-#{$sp-name}\@#{$bp-name} {
      margin-bottom:rem($sp-value) !important;
    }
  }
}
```

With the default spacing map, 14 variants of each linked object or utility class will be generated on build from the code above (For example: `u-margin-bottom-small`). Often a responsive variant based on the data in `/dev/data/breakpoints.json` will also be generated (For example: `u-margin-bottom-small@lg`).

To prevent bloat, I recommend using [UNCSS](https://github.com/giakki/uncss). This scans your HTML and filters out unused classes, meaning only the classes referenced in your HTML are included in your compiled CSS. UNCSS is included in the larger [Orion Framework](https://github.com/WebDevLuke/Orion-Framework), where OrionCSS is a dependency.

## Further documentation
The codebase is fully documented where appropriate so for a more indepth explanation of each component that's the place to look.


## About the developer
I'm Luke Harrison, a Sheffield-based Web Designer &amp; Developer from the UK. I currently work at Evolution Funding: The UK’s leading motor finance intermediary. When I'm not there I work on interesting side projects to further my knowledge such as this very framework. Read more about me at [lukeharrison.net](http://www.lukeharrison.net) or follow me on twitter at [@WebDevLuke](https://twitter.com/WebDevLuke).



















