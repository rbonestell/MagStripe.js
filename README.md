# Swiper.js [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/rbonestell/Swiper.js/master/LICENSE)

A small JavaScript library for capturing data from keyboard emulated mag stripe readers.

### Getting Started
##### 1. Include `swiper.js` in your page
```html
<script src="swiper-min.js"></script>
```

##### 2. Add a `TEXT` or `HIDDEN` field to your form
```html
<input type="hidden" id="swipe_data" />
```

#### 3. Call `getSwipe()`
```javascript
getSwipe('swipe_data');
```
