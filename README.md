# image-map-coords-updater
A Javascript code that updates any coordinates inside an image map area when the image is not 100% original width as coordinates operate at an image's full size.

With an example website


Quirks (My theory:
If the image map is in a picture set, in certain situation it will not work as intended. If you load the page with the image not visible and then resize the window to show the image the coords will be wrong if the coordinates in the DOM is not set exactly to that size when it appears. This is because the code doesn't understand that the image isn't showing so it can't get the size and will then think the first size it finds when the image appears is what is in the coordinates in the DOM thus the mapping will not become correct until you load the site again with the image visible. 

So either set the coordinates to the size you know it will appear or make sure the image appears when it loads. Let me know if this doesn't work or any tips.
