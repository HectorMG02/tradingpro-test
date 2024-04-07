require("@testing-library/jest-dom");

global.BroadcastChannel = function (name) {
    this.name = name;
    this.postMessage = jest.fn();
    this.addEventListener = jest.fn();
    this.removeEventListener = jest.fn();
    this.close = jest.fn();
  };