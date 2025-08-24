import { v as videojs } from "./index-CvDegN_G.js";
/*! @name videojs-overlay-buttons-multiple-players-fix @version 1.3.2 @license MIT */
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var version = "1.3.2";
var latestTap;
var isLocked = false;
var defaults = {
  seekLeft: {
    handleClick: function handleClick(player) {
      var time = Number(player.currentTime()) - 10;
      player.currentTime(time);
    },
    doubleTap: true
  },
  play: {
    handleClick: function handleClick2(player) {
      if (player.paused()) {
        player.play();
      } else {
        player.pause();
      }
    }
  },
  seekRight: {
    handleClick: function handleClick3(player) {
      var time = Number(player.currentTime()) + 10;
      player.currentTime(time);
    },
    doubleTap: true
  },
  lockButton: false
};
var controlButtons = {
  previous: {
    icon: "backward",
    className: "previous-button"
  },
  seekLeft: {
    icon: "history",
    className: "seek-left"
  },
  play: {
    icon: "play",
    className: "play-button"
  },
  seekRight: {
    icon: "history",
    className: "seek-right",
    extra: "fa-flip-horizontal"
  },
  next: {
    icon: "forward",
    className: "next-button"
  }
};
var registerPlugin = videojs.registerPlugin || videojs.plugin;
var onPlayerReady = function onPlayerReady2(player, options) {
  player.addClass("vjs-touch-overlay");
  var overlay = createOverlay(player, options);
  player.el().append(overlay);
  eventsInitialize(player, overlay);
};
var eventsInitialize = function eventsInitialize2(player, overlay) {
  var overlayRow = overlay.querySelector(".overlay-row");
  player.on("play", function() {
    var playButtonWrapper = overlayRow.querySelector(".play-button .button-wrapper");
    playButtonWrapper.innerHTML = '<i class="icon fa fa-4x fa-pause"></i>';
  });
  player.on("pause", function() {
    var playButtonWrapper = overlayRow.querySelector(".play-button .button-wrapper");
    playButtonWrapper.innerHTML = '<i class="icon fa fa-4x fa-play"></i>';
  });
  player.on("userinactive", function() {
    overlay.classList.add("d-none");
    overlayRow.classList.add("d-none");
  });
  player.on("useractive", function() {
    overlay.classList.remove("d-none");
    overlayRow.classList.remove("d-none");
  });
  overlay.addEventListener("click", function(e) {
    var playerElm = player.el();
    if (!playerElm) return;
    var controlBar = playerElm.querySelector(".vjs-control-bar");
    if (e.target.classList.contains("icon")) {
      return;
    }
    if (!overlayRow.classList.contains("d-none")) {
      overlayRow.classList.add("d-none");
      controlBar.classList.add("d-none");
    } else {
      overlayRow.classList.remove("d-none");
      if (!isLocked) {
        controlBar.classList.remove("d-none");
      }
    }
  });
};
var createOverlay = function createOverlay2(player, options) {
  if (!options || !Object.keys(options).length) {
    options = _extends({}, defaults);
  } else {
    options = mergeOptions(options, defaults);
  }
  var overlay_div = document.createElement("div");
  var row = document.createElement("div");
  var controlOverlay = document.createElement("div");
  controlOverlay.className = "overlay-col-12 mx-auto control-overlay-buttons";
  row.className = "overlay-row";
  overlay_div.className = "overlay-container-fluid vjs-overlay";
  var btnOpts = Object.keys(options).filter(function(button) {
    return controlButtons.hasOwnProperty(button);
  });
  var buttons = btnOpts.map(function(button) {
    var buttonProperties = controlButtons[button];
    var element = createButton(buttonProperties);
    return {
      options: options[button],
      element
    };
  });
  handleClick4(buttons, player);
  handleTap(buttons, player);
  if (options.lockButton) {
    var lockOverlay = document.createElement("div");
    lockOverlay.className = "overlay-col-1 lock-overlay";
    controlOverlay.classList.remove("overlay-col-12", "mx-auto");
    controlOverlay.classList.add("overlay-col-11");
    var lockButtonProperties = {
      icon: "lock",
      className: "lock-button",
      size: "2x"
    };
    var lockButton = createButton(lockButtonProperties);
    handleLockClick(lockButton, player);
    lockOverlay.append(lockButton);
    row.append(lockOverlay);
  }
  buttons.forEach(function(button) {
    return controlOverlay.append(button.element);
  });
  row.append(controlOverlay);
  overlay_div.append(row);
  return overlay_div;
};
var handleLockClick = function handleLockClick2(lockBtn, player) {
  var _lockBtn$children = lockBtn.children, wrapperElement = _lockBtn$children[0];
  wrapperElement.addEventListener("click", function() {
    var playerElm = player.el();
    if (!playerElm) return;
    var controlBar = playerElm.querySelector(".vjs-control-bar");
    var controlButtonsWrapper = Array.from(playerElm.querySelectorAll(".overlay-button:not(.lock-button)"));
    if (isLocked) {
      wrapperElement.innerHTML = '<i class="icon fa fa-2x fa-lock"></i>';
      controlButtonsWrapper.forEach(function(btn) {
        btn.classList.remove("d-none");
      });
      controlBar.classList.remove("d-none");
      isLocked = false;
      return;
    }
    wrapperElement.innerHTML = '<i class="icon fa fa-2x fa-unlock"></i>';
    controlButtonsWrapper.forEach(function(btn) {
      btn.classList.add("d-none");
    });
    controlBar.classList.add("d-none");
    isLocked = true;
  });
};
var handleTap = function handleTap2(buttons, player) {
  buttons = buttons.filter(function(button) {
    return button.options.doubleTap && button.options.handleClick;
  });
  buttons.forEach(function(button) {
    button.element.addEventListener("click", function() {
      isDoubleTap(function() {
        button.options.handleClick(player);
      });
    });
  });
};
var handleClick4 = function handleClick5(buttons, player) {
  buttons = buttons.filter(function(btn) {
    return btn.options.handleClick;
  });
  buttons.forEach(function(button) {
    var _button$element$child = button.element.children, wrapperElement = _button$element$child[0];
    wrapperElement.addEventListener("click", function() {
      return button.options.handleClick(player);
    });
  });
};
var createButton = function createButton2(_ref) {
  var icon = _ref.icon, _ref$extra = _ref.extra, extra = _ref$extra === void 0 ? "" : _ref$extra, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, _ref$size = _ref.size, size = _ref$size === void 0 ? "4x" : _ref$size;
  var iconEl = document.createElement("i");
  iconEl.className = "icon fa fa-" + size + " fa-" + icon + " " + extra;
  var wrapper = document.createElement("div");
  wrapper.className = "button-wrapper";
  wrapper.append(iconEl);
  var button = document.createElement("div");
  button.className = "overlay-button vjs-button " + className;
  button.append(wrapper);
  return button;
};
var isDoubleTap = function isDoubleTap2(callback) {
  var now = (/* @__PURE__ */ new Date()).getTime();
  var timeSince = now - latestTap;
  if (timeSince < 400 && timeSince > 0) {
    callback();
  }
  latestTap = (/* @__PURE__ */ new Date()).getTime();
};
var mergeOptions = function mergeOptions2(originalOpts, defaultOpts) {
  for (var key in originalOpts) {
    var userOption = originalOpts[key];
    var defaultOption = defaultOpts[key];
    if (!defaultOption) {
      continue;
    }
    for (var option in defaultOption) {
      if (!userOption.hasOwnProperty(option) && defaultOption.hasOwnProperty(option)) {
        userOption[option] = defaultOption[option];
      }
    }
  }
  return originalOpts;
};
var touchOverlay = function touchOverlay2(options) {
  var _this = this;
  this.ready(function() {
    onPlayerReady(_this, options);
  });
};
registerPlugin("touchOverlay", touchOverlay);
touchOverlay.VERSION = version;
export {
  touchOverlay as default
};
//# sourceMappingURL=videojs-overlay-buttons-multiple-players-fix.es-BwpapCm-.js.map
