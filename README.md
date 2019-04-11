# MagStripe.js [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rbonestell/MagStripe.js/master/LICENSE)

A small JavaScript library for capturing data from keyboard emulated mag stripe readers.

MagStripe.js streams the swiper data to a text control and submits the form after receiving the data.

### Getting Started
##### 1. Include `MagStripe.js` in your page
[Download minified file from GitHub releases.](https://github.com/rbonestell/MagStripe.js/releases)
```html
<script src="magstripe-min.js"></script>
```

##### 2. Add a `TEXT` or `HIDDEN` field to your form
```html
<input type="hidden" id="swipe_data" />
```

##### 3. Call `getSwipe()` with the destination field ID to begin swipe capture
```html
<input type="button" onclick="MagStripe.getSwipe('swipe_data')" value="Swipe" />
```

##### 4. Call `cancelSwipe()` to cancel swipe capture
```html
<input type="button" onclick="MagStripe.cancelSwipe()" value="Cancel" />
```

### Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request!](https://github.com/rbonestell/MagStripe.js/pull/new/development)


*Important Note: Your mag stripe reader device must be configured for keyboard emulation, and to terminate data with a carriage return.*
