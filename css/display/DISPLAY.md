The display property specifies if/how an element is displayed.Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.


<h3>Block-level Elements</h3>

Examples of block-level elements:

    <div>
    <h1> - <h6>
    <p>
    <form>
    <header>
    <footer>
    <section>

<h3>Inline Elements</h3>

An inline element does not start on a new line and only takes up as much width as necessary.

This is an inline <span> element inside a paragraph.

Examples of inline elements:

    <span>
    <a>
    <img>

<h3>Display: none;</h3>

display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them.

The <script> element use display: none; as its default. 

<h3>Override The Default Display Value</h3>

As mentioned, every element has a default display value. However, you can override this.

Changing an inline element to a block element, or vice versa, can be useful for making the page look a specific way, and still follow the web standards.

<p>
Note: Setting the display property of an element only changes how the element is displayed, NOT what kind of element it is. So, an inline element with display: block; is not allowed to have other block elements inside it.</p>

<h3>Hide an Element - display:none or visibility:hidden?</h3>

Hiding an element can be done by setting the display property to none. The element will be hidden, and the page will be displayed as if the element is not there:

visibility:hidden; also hides an element.

However, the element will still take up the same space as before. The element will be hidden, but still affect the layout: