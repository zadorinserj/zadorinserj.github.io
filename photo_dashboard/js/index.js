"use strict";

var _vue = _interopRequireDefault(require("./lib/vue.js"));

var _app = _interopRequireDefault(require("../app.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var unsplashApiAccessKey = '50aadc667f39d6c2f8877889b305811361b8ab7fc24de3aeac77357c685933a3';
new _vue.default({
  render: function render(h) {
    return h(_app.default);
  }
}).$mount('#app');
