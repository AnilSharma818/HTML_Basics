Approach

- Carousel list items are provided from model, currently it is static list which can be fetched from service or kept in json
- As per the Carousel items, DOM li elements are added dynamically to make horizontal list to display
- Buffer items are added at left and righ side of list to avoid jurk effect and in case items are equal to framesize, items are added to create       circular chain.
- Mouse down on left and right buttons enables autoscrolling by configured delay time.
- Mouse up on left and right buttons stops autoscrolling if it is running and do items shift as per direction.
- Multiple clicks on same button will check for running animation and enables next animation only if previous is finished.

Featrues

- Long pressing left/right buttons enables auto scrolling. Auto scrolling time can be controlled through 'autoScrollDelay' property and speed of animation can be controlled through animationSpeed.
- Scrolling is smooth and tested in Chrome Version 46.0.2480.0, Firefox 43.0.1 and IE11.
- Clicking left/right buttons shifts Carousel item by one.


Known

- Have not created Carousel as class, code can be modified to achieve like that to improve resuability.