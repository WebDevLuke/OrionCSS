<p>
	 <img height="84" width="429" src="https://cdn.rawgit.com/WebDevLuke/OrionCSS/master/misc/orion-logo.svg">
	<p>A simple SASS-based OOCSS framework</p>
</p>

# What is OrionCSS?
OrionCSS is a SASS framework which is simple, easy to use and scalable. It provides you with a solid OOCSS base from which to build your project.

- **ITCSS Powered** - OrionCSS uses the popular OOCSS methodology [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture) to organise its SASS and includes many useful object and utility classes out of the box. 
- **Easily Configurable Grid System** - Enter the max width, number of columns, gutter and padding of a grid system of your choice and SASS will automatically generate all the CSS classes and media query mixins for you.
- **Easily Manage Breakpoints** - Manage your media query breakpoints in one file which then automatically filters into the rest of the framework.
- **Usuable with Orion Framework** - Use as a dependency of the [Orion Framework](https://github.com/WebDevLuke/Orion-Framework) to access specifically built Gulp tasks to compile and optimise your SASS.

# Getting Started

## Installation
The best way to use OrionCSS is as part of the larger [Orion Framework](https://github.com/WebDevLuke/Orion-Framework). [(More Info)](https://github.com/WebDevLuke/Orion-Framework)

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

To give you a useful starting point for building your own components, a sample component can be found at `/node_modules/orioncss/06 - components/_sample.component.mycomponent.scss`.


**NOTE:** One advantage of using OrionCSS as a part of [Orion Framework](https://github.com/WebDevLuke/Orion-Framework) is that [gulp-sass-glob](https://github.com/mikevercoelen/gulp-sass-glob) is used to automatically import any new partials, so won't need to edit `main.scss` at all.




- Using OrionCSS
	- Breakpoints
		- Editing
		- How are these used?
	- Grid system
		- Editing
		- How to use
	- Spacing
	- Everything else
		- Mention the codebase is heavily documented so every item has instructions
- About the developer


# About the developer
I'm Luke Harrison, a Sheffield-based Web Designer &amp; Developer from the UK, currently working at [Evolution Funding](https://github.com/EvolutionFunding). Read more about me at [lukeharrison.net](http://www.lukeharrison.net) and/or follow me on twitter at [@WebDevLuke](https://twitter.com/WebDevLuke).