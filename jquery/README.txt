jquery is a JavaScript Library
jQuery greatly simplifies JavaScript programming
jQuery is easy to learn

the purpose of jQuery is to make it much easier to use JavaScript on your website.


What you should already know

before you start studying jQuery, you should have a basic knowledge of:

html
css
javascript

if you want to study these subjects first, find the tutorials on your Home page

What is jQuery?

jQueryis lightweight, "write less, do more", JavaScript library.

The purpose of jQuery is to make it much easier to use JavaScript on your website.

jQuery atkes a lot of common tasks that require many lines if JavaScript code to accomplish, and wraps them intoo methods that you can call with a single line of code.

jQuery also simplifies a lot of the complicated things from javascript, like AJAX callsand DOM manipulation.

The jQuery library contains the following features:

- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- Effects and animations
- AJAX
- Utilities

Tip: In addition, jQuery has plugins for almost any task out there.


Why jQuery?

There are lots of other JavaScript libraries out there, but jQuery is probably the most popular, and also the most extendable.

Many of the biggest companies on the web use jQuery, such as:

Google
Microsoft
IBM
Netflix

Will jQuery work in all browsers?

The jQuery team knows all about cross-browser issues, and they have written this knowledge into the jQuery library. jQuery will run exactly the same in all major browsers.

jQuery Get Started

Adding jQuery to your Web Pages

There are several ways to start using jQuery on your web site. You can:

Download the jQuery library from jQuery.com
Include jQuery from a CDN, like Google.

Downloading jQuery

There are two versions of jQuery available for downloading:

- Prodution version - this is for your live website because it has been minified and compressed.
- Development version - this is for testing and development (uncompressed and readable code)

Both versions can be downloaded from jQuery.com

The jQuery library is a single JavaScript file and you reference it with the HTML <script> tag...

Tip: Place the downloaded file in the same directory as the pages where you wish to use it.

jQuery CDN

If you don't want download and host jQuery yourself, you can include it from a CDN (Content Delivery Network).

Google is an example of someone who host jQuery:


One big advantage of using the hosted jQuery from Google:

Many uers already have downloaded jQuery from Google when visitng another site. As a result, it will be loaded from cache when they visit your site, which leads to faster loading time. Also, most CDN's will make sure that once a user request a file from it, it will be served from the server closest to them, which also leads to faster loading time.

((jQuery Get Syntax))



método on do jquery

o método on pode ser usado de maneira global com os outros métodos

isso:  $('elemento').click(function)
é o mesmo que isso:  $('elemento').on('click', function())




