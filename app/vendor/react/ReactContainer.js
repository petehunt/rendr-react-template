/**
 * Copyright 2013 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule ReactContainer
 */

"use strict";

var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactID = require("./ReactID");

/**
 * Maximum value for auto-generated React container IDs; see ReactInstanceHandles
 * for where we came up with this technique.
 */
var REACT_CONTAINER_ID_MAX = 9999999;

var REACT_CONTAINER_ID_PREFIX = 'reactContainer';

/**
 * @param {DOMElement} container DOM element that may contain a React component
 * @return {string} Pre-existing container ID or a fresh autogenerated string
 */
function getOrCreateContainerID(container) {
  if (!container.id) {
    container.id = REACT_CONTAINER_ID_PREFIX +
      Math.ceil(Math.random() * REACT_CONTAINER_ID_MAX);
  }
  return container.id;
}

/**
 * @param {DOMElement} container DOM element that may contain a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */
function getReactRootElementInContainer(container) {
  return container.firstChild;
}

/**
 * @param {DOMElement} container DOM element that may contain a React component.
 * @return {?string} A "reactRoot" ID, if a React component is rendered.
 */
function getReactRootID(container) {
  var rootElement = getReactRootElementInContainer(container);
  return rootElement && ReactID.getID(rootElement);
}

/**
 * @param {DOMElement} container DOM element that may contain a React component.
 * @return {boolean} If the container contains markup generated by React
 */
function hasReactMarkup(container) {
  var reactRootElement = getReactRootElementInContainer(container);
  return (
    reactRootElement &&
      ReactInstanceHandles.isRenderedByReact(reactRootElement)
  );
}

module.exports = {
  getReactRootID: getReactRootID,
  hasReactMarkup: hasReactMarkup,
  getOrCreateContainerID: getOrCreateContainerID
};