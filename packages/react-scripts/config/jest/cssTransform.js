// @remove-on-eject-begin
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
  process(fileContent) {
    console.log('object');
    const demo = `module.exports = (function demo() {
      const style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.innerHTML = "${fileContent.replace(/[\n]/g, ' ')}";
      document.body.appendChild(style);
      return null;
  })()`;
    console.log(demo);
    return demo;
  },
  getCacheKey(fileContent, fileAbsolutePath) {
    // The output is always the same.
    return fileAbsolutePath;
  },
};
