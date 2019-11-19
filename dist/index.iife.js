(function (exports) {
  'use strict';

  var testSdkDemo = {
    printMsg: function printMsg() {
      console.log('this message is from test-sdk-demo!');
    }
  };
  var testSdkDemo_1 = testSdkDemo.printMsg;

  exports.default = testSdkDemo;
  exports.printMsg = testSdkDemo_1;

  return exports;

}({}));
