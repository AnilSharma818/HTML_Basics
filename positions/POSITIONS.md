Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.


# position: static
POSITION : STATIC

- Static elements are positioned accrding to normal flow of the page. 
- Top, left, right and bottom does not work in case of static position

# position: relative
POSITION : RELATIVE

- Only difference between static and relative is 'An element with position: relative; is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position'

- Other content will not be adjusted to fit into any gap left by the element.

# position: fixed
POSITION : FIXED

- An element with position: fixed; is positioned relative to the viewport.
- it always stays in the same place even if the page is scrolled. 
- The top, right, bottom, and left properties are used to position the element.

A fixed element does not leave a gap in the page where it would normally have been located.

# position: absolute
POSITION : ABSOLUTE

- An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
- However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

Note: A "positioned" element is one whose position is anything except static. Absolute and Fixed positioned elements takes as much width as they required to show content. rest positioned elements takes remaining width.