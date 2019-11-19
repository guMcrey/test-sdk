(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.umd = {}));
}(this, (function (exports) { 'use strict';

  var testSdkDemo = {
    printMsg: function printMsg() {
      console.log('this message is from test-sdk-demo!');
    }
  };
  var testSdkDemo_1 = testSdkDemo.printMsg;

  exports.default = testSdkDemo;
  exports.printMsg = testSdkDemo_1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
