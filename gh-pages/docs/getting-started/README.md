# Getting Started

Metaphor V2 is a CSUN-branded theme built ontop of [Bootstrap 4](https://getbootstrap.com/).

It is necessary to read and understand the Bootstrap 4 docs in order to work with Metaphor.

## CDN

Metaphor is available via CDN. Just copy this code into the `<head>` of your website.

    <link rel="stylesheet" href="https://s3-us-west-2.amazonaws.com/csun-metalab/metaphor/dist/css/metaphor-v2.min.css">

## Download

Metaphor is available as an NPM package:

    npm install metaphor-theme

When this command is run, the custom Metaphor SCSS, CSS, & JS files will be installed into your project's <code>node_modules</code> directory, along with  Bootstrap 4 and FontAwesome (because they are dependencies of Metaphor). 

## Install

Once you have downloaded the package, you can import Metaphor's Sass code into your project's main Sass file:

    @import '~metaphor-theme/src/scss/metaphor-v2.scss';

This should be the first import on your main Sass file. It will install Bootsrap 4 along with all of the custom Metaphor styles and components. You will now have access to all of the Bootsrap 4 Sass variables, mixins, and functions. 

#### Font Awesome Installation

To utilize the font awesome icon library, add it to your project by either:

Adding the following &lt;script&gt; to the &lt;head&gt; of your document:

    <script defer src="https://use.fontawesome.com/releases/v5.2.0/js/all.js" integrity="sha384-4oV5EgaV02iISL2ban6c/RmotsABqE4yZxZLcYMAdG7FAPsyHYAPpywE9PJo+Khy" crossorigin="anonymous"></script>

Or, import the fontawesome package that was installed as a dependency when Metaphor was installed:
    
    import FontAwesome from '@fortawesome/fontawesome-free/js/all.js';

Or, import the Font Awesome SCSS files (which were installed as a depnedency when Metaphor was installed) into your main sass file

    // Font Awesome (core classes)
    @import '~@fortawesome/fontawesome-free/scss/fontawesome';
    // Font Awesome (font face definitions and file paths)
    @import '~@fortawesome/fontawesome-free/scss/regular';
    @import '~@fortawesome/fontawesome-free/scss/solid';
    @import '~@fortawesome/fontawesome-free/scss/brands';

Or, if working in Vue.js, you may utilize the [official Font Awesome Vue.js component](https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs). The advantage of this method? "Explicitly selecting icons offers the advantage of only bundling the icons that you use in your final bundled file. This allows us to subset Font Awesome's thousands of icons to just the small number that are normally used".