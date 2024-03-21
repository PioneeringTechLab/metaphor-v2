# Base Settings 

## Fonts & Typography

Metaphor uses the following fonts:

*   ATCOverlook - Regular
*   _ATCOverlook - Regular Italic_
*   **ATCOverlook - Bold**
*   **_ATCOverlook - Bold Italic_**
*   <span class="font-display">FSLola - Bold</span>

Please add the following line of code to the of your document to improve loading times:

    <link rel="preload" href="fonts/ATCOverlook-Regular.woff2" as="font" type="font/woff2" crossorigin>


ATCOverlook is the default font. You can make use of it's variants with **&lt;strong&gt;**, **&lt;b&gt;**, **&lt;em&gt;**, and **&lt;i&gt;** tags in your markup, or by using **font-weight:700** or **font-weight:bold** or **font-style:italic** in your CSS or use the bootstrap-built-in classes **.font-weight-bold** and **.font-italic**.

To use <span class="font-display">FSLola Bold</span>, add a class of **.font-display** in your markup, or utilize the variable **$font-family-display** in your Sass files.  

## Font Awesome

After [installing font awesome](/getting-started/#font-awesome-installation), you have access to most [solid icons](https://fontawesome.com/icons?d=gallery&amp;s=solid&amp;m=free), [regular icons](https://fontawesome.com/icons?d=gallery&amp;s=regular&amp;m=free)  and [brand icons](https://fontawesome.com/icons?d=gallery&amp;s=brands&amp;m=free) (you are limited to only the free icons). You can easily place icons on your site and modify their [size](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons), [animate](https://fontawesome.com/how-to-use/on-the-web/styling/animating-icons) them, [flip/rotate](https://fontawesome.com/how-to-use/on-the-web/styling/rotating-icons) them, and more. Please see the [font awesome documentation](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) for more information.


<div>
    <i class="fas fa-user"></i>
    <i class="far fa-user"></i>
    <i class="fab fa-facebook fa-2x"></i>
    <i class="fas fa-user fa-3x fa-flip-vertical"></i>
    <i class="fas fa-3x fa-spinner fa-spin"></i>
    <span class="fa-3x">
        <span class="fa-layers fa-fw">
            <i class="fas fa-calendar"></i>
            <span class="fa-layers-text fa-inverse" data-fa-transform="shrink-8 down-3" style="font-weight:900">27</span>
        </span>
    </span>
    <span class="fa-stack fa-2x">
        <i class="fas fa-camera fa-stack-1x"></i>
        <i class="fas fa-ban fa-stack-2x" style="color:Tomato"></i>
    </span>
</div>

    <i class="fas fa-user"></i>
    <i class="far fa-user"></i>
    <i class="fab fa-facebook"></i>

## Colors

The metaphor color pallete is based off of the CSUN Design Guidelines.

<div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
<div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
<div class="p-3 mb-2 bg-success text-white">.bg-success</div>
<div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
<div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
<div class="p-3 mb-2 bg-info text-white">.bg-info</div>
<div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
<div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>

    <div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>
    <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div>
    <div class="p-3 mb-2 bg-success text-white">.bg-success</div>
    <div class="p-3 mb-2 bg-danger text-white">.bg-danger</div>
    <div class="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
    <div class="p-3 mb-2 bg-info text-white">.bg-info</div>
    <div class="p-3 mb-2 bg-light text-dark">.bg-light</div>
    <div class="p-3 mb-2 bg-dark text-white">.bg-dark</div>
    <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
    <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>

<br>
<div class="py-2 text-primary">.text-primary</div>
<div class="py-2 text-secondary">.text-secondary</div>
<div class="py-2 text-success">.text-success</div>
<div class="py-2 text-danger">.text-danger</div>
<div class="py-2 text-warning">.text-warning</div>
<div class="py-2 text-info">.text-info</div>
<div class="py-2 text-light bg-dark">.text-light</div>
<div class="py-2 text-dark">.text-dark</div>
<div class="py-2 text-body">.text-body</div>
<div class="py-2 text-muted">.text-muted</div>
<div class="py-2 text-white bg-dark">.text-white</div>
<div class="py-2 text-black-50">.text-black-50</div>
<div class="py-2 text-white-50 bg-dark">.text-white-50</div>

    <div class="text-primary">.text-primary</div>
    <div class="text-secondary">.text-secondary</div>
    <div class="text-success">.text-success</div>
    <div class="text-danger">.text-danger</div>
    <div class="text-warning">.text-warning</div>
    <div class="text-info">.text-info</div>
    <div class="text-light bg-dark">.text-light</div>
    <div class="text-dark">.text-dark</div>
    <div class="text-body">.text-body</div>
    <div class="text-muted">.text-muted</div>
    <div class="text-white bg-dark">.text-white</div>
    <div class="text-black-50">.text-black-50</div>
    <div class="text-white-50 bg-dark">.text-white-50</div>


# Modified Bootstrap Components 


## Navbar

The metaphor navbar uses the same structure as the [standard bootstrap navbar](https://getbootstrap.com/docs/4.1/components/navbar/). Just add a class of <strong class="bg-info">.navbar-metaphor</strong> to the parent  &lt;nav&gt; for the csun branded styles to take affect.

The default background color is white. For different background colors, add the following modifier classes to the parent &lt;nav&gt;

<strong class="bg-info">
.navbar-metaphor--light<br>
.navbar-metaphor--dark<br>
.navbar-metaphor--black
</strong>


Just like the standard bootrap navbar, you can add class of <strong class="bg-info">.navbar-expand-{breakpoint}</strong> to the parent &lt;nav&gt; in order to set the breakpoint which the hamburger menu appears/disapears

<nav class="navbar navbar-metaphor navbar-expand-sm">
<a class="navbar-brand" href="#">
<span class="sr-only">CSUN Logo</span>

<span class="navbar-brand__subbrand">
    Sample
    <small>Beta</small>
</span>

</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
<div class="navbar-nav text-center">
    <a class="nav-item nav-link active" href="#">Home</a>
    <a class="nav-item nav-link" href="#">Features</a>
    <a class="nav-item nav-link" href="#">Pricing</a>
</div>
</div>
</nav>

<nav class="navbar navbar-metaphor navbar-metaphor--light navbar-expand-md">
<a class="navbar-brand" href="#">
<span class="sr-only">CSUN Logo</span>

<span class="navbar-brand__subbrand">
Sample
<small>Beta</small>
</span>

</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup2" aria-controls="navbarNavAltMarkup2" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup2">
<div class="navbar-nav text-center">
<a class="nav-item nav-link active" href="#">Home</a>
<a class="nav-item nav-link" href="#">Features</a>
<a class="nav-item nav-link" href="#">Pricing</a>
</div>
</div>
</nav>

<nav class="navbar navbar-metaphor navbar-metaphor--dark navbar-expand-lg">
<a class="navbar-brand" href="#">
<span class="sr-only">CSUN Logo</span>

<span class="navbar-brand__subbrand">
Sample
<small>Beta</small>
</span>

</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup3" aria-controls="navbarNavAltMarkup3" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup3">
<div class="navbar-nav text-center">
<a class="nav-item nav-link active" href="#">Home</a>
<a class="nav-item nav-link" href="#">Features</a>
<a class="nav-item nav-link" href="#">Pricing</a>
</div>
</div>
</nav>

<nav class="navbar navbar-metaphor navbar-metaphor--black navbar-expand-xl">
<a class="navbar-brand" href="#">
<span class="sr-only">CSUN Logo</span>

<span class="navbar-brand__subbrand">
Sample
<small>Beta</small>
</span>

</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup4" aria-controls="navbarNavAltMarkup4" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup4">
<div class="navbar-nav text-center">
<a class="nav-item nav-link active" href="#">Home</a>
<a class="nav-item nav-link" href="#">Features</a>
<a class="nav-item nav-link" href="#">Pricing</a>
</div>
</div>
</nav>

    <nav class="navbar navbar-metaphor navbar-metaphor--light navbar-expand-md">
      <a class="navbar-brand" href="#">
        <span class="sr-only">CSUN Logo</span>
        <span class="navbar-brand__subbrand">
          Sample
          <small>Beta</small>
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup2" aria-controls="navbarNavAltMarkup2" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup2">
        <div class="navbar-nav text-center">
          <a class="nav-item nav-link active" href="#">Home</a>
          <a class="nav-item nav-link" href="#">Features</a>
          <a class="nav-item nav-link" href="#">Pricing</a>
        </div>
      </div>
    </nav>


## Nav

The metaphor navs uses the same structure as the [standard bootstrap nav](https://getbootstrap.com/docs/4.1/components/navs/). Just add a class of <strong class="bg-info">.nav-metaphor</strong> to the parent &lt;ul&gt; for the csun branded styles to take affect.

Just like the standard bootrap navbar, the nav component can be <strong class="bg-warning">horizontaly aligned (row nav)</strong> or <strong class="bg-warning">verticaly aligned (column nav)</strong>. You can make the same nav element appear horizontally on some viewports and vertically on other viewports by adding a modifier class (<strong class="bg-info">such as .flex-{breakpoint}-column</strong>) to the parent &lt;ul&gt;

For the horizontal nav, you can force the nav items to extend the full available width. Just add the class of <strong class="bg-info">.flex-fill</strong> (or <strong class="bg-info">.flex-{breakpoint}-fill</strong> if the nav is vertical on some viewports) to each .nav-item (should be combined with class of .text-center or .text-{breakpoint}-center).

You can add a class of <strong class="bg-info">.nav-pills</strong> to the parent &lt;ul&gt; for the active nav-item to have a gray background for highlighting.

<div class="row">
    <div class="col-sm-2">
    <h5 class="mb-3"><br>Column Nav</h5>
    <ul class="nav flex-column nav-metaphor">
        <li class="nav-item">
        <a class="nav-link active" href="">Active</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
    </ul>
</div>

<div class="col-sm-2">
    <h5 class="mb-3">Column Nav with .nav-pills</h5>
    <ul class="nav flex-column nav-metaphor nav-pills">
        <li class="nav-item">
        <a class="nav-link active" href="">Active</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
    </ul>
</div>

<div class="col-sm-8">
    <br>
    <h5 class="mb-3">Row Nav</h5>
    <ul class="nav nav-metaphor">
        <li class="nav-item">
        <a class="nav-link active" href="">Active</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="">Link</a>
        </li>
    </ul>
    <h5 class="mb-3 mt-5">Row Nav - justified</h5>
    <ul class="nav nav-metaphor">
        <li class="nav-item flex-fill text-center">
        <a class="nav-link active" href="">Active</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
    </ul>
    <h5 class="mb-3 mt-5">Row Nav - justified with .nav-pills</h5>
    <ul class="nav nav-metaphor nav-pills">
        <li class="nav-item flex-fill text-center">
        <a class="nav-link active" href="">Active</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
        <li class="nav-item flex-fill text-center">
        <a class="nav-link" href="">Link</a>
        </li>
    </ul>
    </div>
</div>

    //column nav with nav-pills
    <ul class="nav flex-column nav-metaphor nav-pills"> 
        <li class="nav-item"> <a class="nav-link active" href="">Active</a> </li> 
        <li class="nav-item"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item"> <a class="nav-link" href="">Link</a> </li> 
    </ul>

    //row nav justifed
    <ul class="nav nav-metaphor"> 
        <li class="nav-item flex-fill text-center"> <a class="nav-link active" href="">Active</a> </li> 
        <li class="nav-item flex-fill text-center"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item flex-fill text-center"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item flex-fill text-center"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item flex-fill text-center"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item flex-fill text-center"> <a class="nav-link" href="">Link</a> </li> 
        <li class="nav-item flex-fill text-center"> <a class="nav-link" href="">Link</a> </li> 
    </ul>


## Breadcrumb

The breadcrumb component from bootstrap has been slightly modified. Please note that the font-awesome home icon is optional. 

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i> Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i> Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>


# Custom Components

## Timeline

A custom component intended to be used to display the passage of time.

<div class="row"> 
<div class="col-sm-6">
<h5 class="mb-4">Timeline (default)</h5>
<ul class="timeline">
<li class="timeline-header">
<strong>May 2016 - Steven Kitzes - MS Computer Science</strong><br>
<a href=""><em>A Comparative Study of Asynchronous Performance in NodeJS</em></a><br>
<span>Committee Chair: A. Kaplan. Committee Members: J. Weigley and S. Fitzgerald.</span>
</li>


<li class="timeline-event">
<strong>12/12/12 - Really Long Title For This Research Publicaiton</strong>
</li>

<li>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti culpa laudantium veniam nisi ea, maiores impedit nulla facilis beatae provident, sint expedita. Ab dolore sed sit nesciunt maiores doloribus minima! Ab consectetur adipisicing elit.
</li>

<li class="timeline-event">Thing Another Thing  <br>thing foo bar<br>another another foobar</li>

<li class="timeline-event timeline-event--align-top">Thing Another Thing thing <br>foo bar<br>another another foobar</li>
</ul>
</div>
<div class="col-sm-6">
<h5 class="mb-4">Timeline (dots top aligned)</h5>

<ul class="timeline timeline--align-top">
<li class="timeline-header">
<strong>May 2016 - Steven Kitzes - MS Computer Science</strong><br>
<a href=""><em>A Comparative Study of Asynchronous Performance in NodeJS</em></a><br>
<span>Committee Chair: A. Kaplan. Committee Members: J. Weigley and S. Fitzgerald.</span>
</li>


<li class="timeline-event">
<strong>12/12/12 - Really Long Title For This Research Publicaiton</strong>
</li>

<li>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti culpa laudantium veniam nisi ea, maiores impedit nulla facilis beatae provident, sint expedita. Ab dolore sed sit nesciunt maiores doloribus minima! Ab consectetur adipisicing elit.
</li>

<li class="timeline-event">Thing Another Thing  <br>thing foo bar<br>another another foobar</li>

<li class="timeline-event timeline-event--align-center">Thing Another Thing thing <br>foo bar<br>another another foobar</li>
</ul>
</div>
</div>

    //timeline (default)
    <ul class="timeline">
        <li class="timeline-header"><strong>What</strong> Lorem Ipsum Foobar</li>
        <li class="timeline-event"><strong>Thing</strong> Another Thing thing <br>foo bar</li> 
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti culpa laudantium veniam nisi ea, maiores impedit nulla facilis beatae provident, sint expedita. Ab dolore sed sit nesciunt maiores doloribus minima! Ab consectetur adipisicing elit. </li> 
        <li class="timeline-event timeline-event--align-top"><strong>That</strong> Metaphor Foo Thing</li> 
    </ul>

    //timeline (dots top aligned)
    <ul class="timeline timeline--align-top">
        <li class="timeline-header"><strong>What</strong> Lorem Ipsum Foobar</li>
        <li class="timeline-event"><strong>Thing</strong> Another Thing thing <br>foo bar</li> 
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti culpa laudantium veniam nisi ea, maiores impedit nulla facilis beatae provident, sint expedita. Ab dolore sed sit nesciunt maiores doloribus minima! Ab consectetur adipisicing elit. </li> 
        <li class="timeline-event timeline-event--align-center"><strong>That</strong> Metaphor Foo Thing</li> 
    </ul>

By default, the dots associated with each timeline item are centered. If you want the dots to be top-aligned, you can add a modifier class of <strong class="bg-info">.timeline--align-top</strong> to the parent &lt;ul&gt;. You can also override the dot alignment of any individual item by adding the following modifier classes to the &lt;ul&gt; element:

<strong class="bg-info">
.timeline-event--align-top<br> 
.timeline-event--align-center<br>
.timeline-header--align-top<br>
.timeline-event--align-center
</strong>

## Footer

A CSUN branded footer component.

<footer class="footer-metaphor">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-5">
        <div class="row mb-3 mb-md-0">
          <div class="col-12 col-md-3">
              <img class="d-block mx-auto mx-md-0 img-fluid footer-metaphor__emblem mb-3 mb-md-0" src="//s3-us-west-2.amazonaws.com/csun-metalab/metaphor/dist/img/csun-emblem.svg" alt="CSUN Emblem">
          </div>
          <div class="col-12 col-md-9">
            <h6>META+LAB </h6>
            <div>
              &copy; California State University, Northridge <br> 
              18111 Nordhoff Street, Northridge, CA 91330 <br>
              Phone: <a href="#">(818) 677-1200</a> / <a href="//www.csun.edu/contact" target="csun">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-7">
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="mb-2 mb-lg-1">
              <a href="//www.csun.edu/emergency/" target="csun">Emergency Information</a>
            </div>
            <div  class="mb-2 mb-lg-1">
              <a href="//www.csun.edu/afvp/university-policies-procedures/"  target="csun">University Policies & Procedures</a>
            </div>
          </div>
          <div class="col-12 col-md-4 pl-0">
            <div class="mb-2 mb-lg-1">
              <a href="//www.csun.edu/sites/default/files/900-12.pdf" target="csun">Terms and Conditions for Use</a>
            </div>
            <div class="mb-2 mb-lg-1">
              <a href="//www.csun.edu/sites/default/files/500-8025.pdf" target="csun">Privacy Policy</a>  
            </div>
            <div class="mb-2 mb-lg-1">
              <a href="//www.csun.edu/it/document-viewers" target="csun">Document Reader</a>
            </div>
          </div>
          <div class="col-12 col-md-4 px-0">
            <div>
              <a href="//www2.calstate.edu" target="csun">California State University</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    <footer class="footer-metaphor">
        <div class="container">
            <div class="row">
            <div class="col-12 col-md-5">
                <div class="row mb-3 mb-md-0">
                <div class="col-12 col-md-3">
                    <img class="d-block mx-auto mx-md-0 img-fluid footer-metaphor__emblem mb-3 mb-md-0" src="//s3-us-west-2.amazonaws.com/csun-metalab/metaphor/dist/img/csun-emblem.svg" alt="CSUN Emblem">
                </div>
                <div class="col-12 col-md-9">
                    <h6>META+LAB </h6>
                    <div>
                    &copy; California State University, Northridge <br> 
                    18111 Nordhoff Street, Northridge, CA 91330 <br>
                    Phone: <a href="#">(818) 677-1200</a> / <a href="//www.csun.edu/contact" target="csun">Contact Us</a>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-12 col-md-7">
                <div class="row">
                <div class="col-12 col-md-4">
                    <div class="mb-2 mb-lg-1">
                    <a href="//www.csun.edu/emergency/" target="csun">Emergency Information</a>
                    </div>
                    <div  class="mb-2 mb-lg-1">
                    <a href="//www.csun.edu/afvp/university-policies-procedures/"  target="csun">University Policies & Procedures</a>
                    </div>
                </div>
                <div class="col-12 col-md-4 pl-0">
                    <div class="mb-2 mb-lg-1">
                    <a href="//www.csun.edu/sites/default/files/900-12.pdf" target="csun">Terms and Conditions for Use</a>
                    </div>
                    <div class="mb-2 mb-lg-1">
                    <a href="//www.csun.edu/sites/default/files/500-8025.pdf" target="csun">Privacy Policy</a>  
                    </div>
                    <div class="mb-2 mb-lg-1">
                    <a href="//www.csun.edu/it/document-viewers" target="csun">Document Reader</a>
                    </div>
                </div>
                <div class="col-12 col-md-4 px-0">
                    <div>
                    <a href="//www2.calstate.edu" target="csun">California State University</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>


## Rounded Buttons

The <strong class="bg-info">.btn-rounded</strong> class is custom to metaphor. You can add this class to any <a href="https://getbootstrap.com/docs/4.1/components/buttons/" target="bootstrap">bootstrap button</a> in order to make it rounded.

<br>
<button type="button" class="btn btn-rounded btn-primary">Rounded Button</button>
<button type="button" class="btn btn-lg btn-rounded btn-dark">Rounded Button</button>
<button type="button" class="btn btn-sm btn-rounded btn-warning">Rounded Button</button>
<button type="button" class="btn btn-rounded btn-outline-primary">Rounded Button</button>
<button type="button" class="btn btn-rounded btn-lg btn-outline-dark">Rounded Button</button>
<button type="button" class="btn btn-rounded btn-sm btn-outline-success">Rounded Button</button>

    <button type="button" class="btn btn-rounded btn-primary">Rounded Button</button>
    <button type="button" class="btn btn-lg btn-rounded btn-dark">Rounded Button</button>
    <button type="button" class="btn btn-sm btn-rounded btn-warning">Rounded Button</button>
    <button type="button" class="btn btn-rounded btn-outline-primary">Rounded Button</button>
    <button type="button" class="btn btn-rounded btn-lg btn-outline-dark">Rounded Button</button>
    <button type="button" class="btn btn-rounded btn-sm btn-outline-success">Rounded Button</button>

## Badges

The <strong class="bg-info">.badge-outline-{theme-color}</strong> is custom to metaphor. The default badge is a standard bootstrap component (with metaphor colors applied instead of the default bootstrap colors).

<div class="row">
    <div class="col-6">
    <h5>Badges (default)</h5>
    <ul class="list-unstyled">
        <li>
        <span class="badge badge-success">Web Development</span>
        </li>
        <li>
        <span class="badge badge-primary">Programming Languages</span>
        </li>
        <li>
        <span class="badge badge-secondary">Parallel and Distributed Programming</span>
        </li>
        <li>
        <span class="badge badge-info">Lorem Ipsum</span>
        </li>
        <li>
        <span class="badge badge-warning">Metaphor</span>
        </li>
        <li>
        <span class="badge badge-light">Light Badge</span>
        </li>
        <li>
        <span class="badge badge-dark">Dark Badge</span>
        </li>
    </ul>
    </div>
    <div class="col-6">
    <h5>Badges (outline)</h5>
    <ul class="list-unstyled">
        <li>
        <span class="badge badge-outline-success">Web Development</span>
        </li>
        <li>
        <span class="badge badge-outline-primary">Programming Languages</span>
        </li>
        <li class="bg-primary p-1 mt-1 mb-1">
        <span class="badge badge-outline-secondary">Parallel and Distributed Programming</span>
        </li>
        <li>
        <span class="badge badge-outline-info">Lorem Ipsum</span>
        </li>
        <li>
        <span class="badge badge-outline-warning">Metaphor</span>
        </li>
        <li class="bg-dark p-1 mt-1 mb-1">
        <span class="badge badge-outline-light">Light Badge</span>
        </li>
        <li>
        <span class="badge badge-outline-dark">Dark Badge</span>
        </li>
    </ul>
    </div>
</div>

    //badge default
    <span class="badge badge-success">Web Development</span>
    <span class="badge badge-primary">Programming Languages</span>
    <span class="badge badge-secondary">Parallel and Distributed Programming</span>
    <span class="badge badge-info">Lorem Ipsum</span>
    <span class="badge badge-warning">Metaphor</span>
    <span class="badge badge-light">Light Badge</span>
    <span class="badge badge-dark">Dark Badge</span>

    //badge outline
    <span class="badge badge-outline-success">Web Development</span>
    <span class="badge badge-outline-primary">Programming Languages</span>
    <span class="badge badge-outline-secondary">Parallel and Distributed Programming</span>
    <span class="badge badge-outline-info">Lorem Ipsum</span>
    <span class="badge badge-outline-warning">Metaphor</span>
    <span class="badge badge-outline-light">Light Badge</span>
    <span class="badge badge-outline-dark">Dark Badge</span>



## Rise Arrow

A central graphic element around the CSUN concept is the Rise Arrow. This arrow helps visualize the key message: Through CSUN, we all rise. 

<div class="row">
    <div class="col-12 col-md-6 col-lg-3">
        <div class="rise-arrow">
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
        <div class="rise-arrow rise-arrow--2tone">
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
        <div class="rise-arrow rise-arrow--2tone">
        </div>
        <div class="rise-arrow rise-arrow--middle">
        </div>
        <div class="rise-arrow rise-arrow--bottom">
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-3">
        <div class="rise-arrow rise-arrow--2tone">
        </div>
        <div class="rise-arrow rise-arrow--2tone">
        </div>
        <div class="rise-arrow rise-arrow--2tone">
        </div>
        <div class="rise-arrow rise-arrow--middle">
        </div>
        <div class="rise-arrow rise-arrow--bottom">
        </div>
    </div>
</div>

    //rise arrow
    <div class="rise-arrow"></div>

    //rise arrow 2-tone
    <div class="rise-arrow rise-arrow--2tone"></div>

    //3-d rise arrow
    <div class="rise-arrow rise-arrow--2tone"></div>
    <div class="rise-arrow rise-arrow--middle"></div>
    <div class="rise-arrow rise-arrow--bottom"></div>

    //taller rise arrow (you can make it as tall as you want)
    <div class="rise-arrow rise-arrow--2tone"></div>
    <div class="rise-arrow rise-arrow--2tone"></div>
    <div class="rise-arrow rise-arrow--2tone"></div>
    <div class="rise-arrow rise-arrow--middle"></div>
    <div class="rise-arrow rise-arrow--bottom"></div>

The rise arrow can easily be made bigger or smaller by adjusting the font-size of it's parent. (This was achieved by building the rise arrow with only ems and percentages).

<div class="row">
    <div class="col-12 col-md-6 col-lg-3 text-center">
        <div style="font-size:2.5rem;">
            <div class="rise-arrow">
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-2 text-center">
        <div style="font-size:1rem;">
            <div class="rise-arrow rise-arrow--2tone">
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 col-lg-5 text-center d-none d-sm-block">
        <div style="font-size:4rem">
            <div class="rise-arrow rise-arrow--2tone">
            </div>
            <div class="rise-arrow rise-arrow--middle">
            </div>
            <div class="rise-arrow rise-arrow--bottom">
            </div>
        </div>
    </div>
</div>

    <div style="font-size:2.5rem;">
        <div class="rise-arrow">
        </div>
    </div>

    <div style="font-size:1rem;">
        <div class="rise-arrow rise-arrow--2tone">
        </div>
    </div>

    <div style="font-size:4rem">
        <div class="rise-arrow rise-arrow--2tone">
        </div>
        <div class="rise-arrow rise-arrow--middle">
        </div>
        <div class="rise-arrow rise-arrow--bottom">
        </div>
    </div>

## Horizontal Line

Add a class of .hr-metaphor to an &lt;hr&gt; element

<hr class="hr-metaphor">

To adjust the width of the &lt;hr&gt; element, apply the bootstrap width classes of <strong class="bg-info">.w-25</strong>, <strong class="bg-info">.w-50</strong>, <strong class="bg-info">.w-75</strong>

<hr class="hr-metaphor w-50">

To adjust the placement of the &lt;hr&gt; element, combine the bootstrap width classes with <strong class="bg-info">.ml-0</strong> or <strong class="bg-info">.mr-0</strong>

<hr class="hr-metaphor w-25 mr-0">

    <hr class="hr-metaphor">
    <hr class="hr-metaphor w-50">
    <hr class="hr-metaphor w-25 mr-0">


## Datepicker

Include the datepicker.js file (included with MetaphorV2). Initialize with <code>$('.date').datepicker();</code> The datepicker is accessible. 

<div class="form-group">
    <label for="date1">Chose a Date:</label>
    <input class="date form-control" id="date1" type="text" placeholder="mm/dd/yy" title="format: mm/dd/yy"/>
</div>

