# Swiper.js [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rbonestell/Swiper.js/master/LICENSE)

A small JavaScript library for capturing data from keyboard emulated mag stripe readers.

Swiper.js streams the swiper data to a text control and submits the form after receiving the data.

### Getting Started
##### 1. Include `Swiper.js` in your page
[Download minified file from GitHub releases.](https://github.com/rbonestell/Swiper.js/releases)
```html
<script src="swiper-min.js"></script>
```

##### 2. Add a `TEXT` or `HIDDEN` field to your form
```html
<input type="hidden" id="swipe_data" />
```

##### 3. Call `getSwipe()` with the destination field ID
```javascript
getSwipe('swipe_data');
```

*Important Note: Your mag stripe reader device must be configured for keyboard emulation, and to terminate data with a return character.*
