/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/button.ts":
/*!**********************************!*\
  !*** ./src/components/button.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var buttonRestStyle = {
    fill: '#FFFFFF',
};
var buttonHoverStyle = {
    fill: '#7CFC00',
};
var buttonActiveStyle = {
    fill: '#888888',
};
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y, text, buttonRestStyle) || this;
        scene.add.existing(_this);
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterMenuButtonHoverState)
            .on('pointerout', _this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        return _this;
    }
    Button.prototype.enterMenuButtonHoverState = function () {
        this.setStyle(buttonHoverStyle);
    };
    Button.prototype.enterMenuButtonRestState = function () {
        this.setStyle(buttonRestStyle);
    };
    Button.prototype.enterMenuButtonActiveState = function () {
        this.setStyle(buttonActiveStyle);
    };
    return Button;
}(Phaser.GameObjects.Text));
exports.Button = Button;
exports.buttonTextHoverStyle = { fontSize: '14px', color: Styles.detailLightColor };
exports.buttonTextRestStyle = { fontSize: '14px', color: Styles.buttonTextColor };
exports.createButton = function (scene, x, y, text, onClick, w, h) {
    var textElement = scene.add.text(x, y, text, exports.buttonTextRestStyle).setOrigin(0, 0);
    var width = w || textElement.width + Styles.offset * 2;
    var height = h || textElement.height + Styles.offset * 2;
    var box = scene.add.rectangle(x, y, width, height, Styles.backgroundColorHex).setOrigin(0, 0);
    var topLine = scene.add.line(0, 0, x - 1, y, x + width, y, Styles.detailLightColorHex).setOrigin(0, 0);
    var leftLine = scene.add.line(0, 0, x, y - 1, x, y + height + 1, Styles.detailLightColorHex).setOrigin(0, 0);
    var rightLine = scene.add.line(0, 0, x + width, y - 1, x + width, y + height + 1, Styles.detailDarkColorHex).setOrigin(0, 0);
    var bottomLine = scene.add.line(0, 0, x + 1, y + height, x + width, y + height, Styles.detailDarkColorHex).setOrigin(0, 0);
    textElement.setDepth(1);
    textElement.setX(((box.width - textElement.width) / 2) + box.x);
    textElement.setY(((box.height - textElement.height) / 2) + box.y);
    var mouseHandlerBox = scene.add.rectangle(x, y, width, height, Styles.backgroundColorHex, 0).setOrigin(0, 0).setInteractive({ useHandCursor: true });
    mouseHandlerBox.on('pointerover', function () {
        textElement.setStyle(exports.buttonTextHoverStyle);
        box.setFillStyle(Styles.backgroundColorHex);
    });
    mouseHandlerBox.on('pointerout', function () {
        textElement.setStyle(exports.buttonTextRestStyle);
        box.setFillStyle(Styles.backgroundColorHex);
    });
    mouseHandlerBox.on('pointerdown', function () {
        textElement.setStyle(exports.buttonTextHoverStyle);
        box.setFillStyle(Styles.detailDarkColorHex);
    });
    mouseHandlerBox.on('pointerupoutside', function () {
        textElement.setStyle(exports.buttonTextHoverStyle);
        box.setFillStyle(Styles.backgroundColorHex);
    });
    mouseHandlerBox.on('pointerup', function () {
        textElement.setStyle(exports.buttonTextHoverStyle);
        box.setFillStyle(Styles.backgroundColorHex);
    });
    mouseHandlerBox.on('pointerup', onClick);
    return [
        box,
        textElement,
        topLine,
        leftLine,
        rightLine,
        bottomLine,
        mouseHandlerBox,
    ];
};


/***/ }),

/***/ "./src/components/cult-interface/index.ts":
/*!************************************************!*\
  !*** ./src/components/cult-interface/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CultDomain = __webpack_require__(/*! src/domain/cult */ "./src/domain/cult.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var rectangle_1 = __webpack_require__(/*! src/components/rectangle */ "./src/components/rectangle.ts");
var button_1 = __webpack_require__(/*! src/components/button */ "./src/components/button.ts");
var domain_1 = __webpack_require__(/*! src/domain */ "./src/domain/index.ts");
var input_box_1 = __webpack_require__(/*! ../input-box */ "./src/components/input-box.ts");
exports.createCultInterface = function (scene, domainState) {
    var cultContainer = scene.add.container(0, 0);
    createCultInfo(scene, cultContainer, domainState);
    createCultOptions(scene, cultContainer);
    createCultHappinessMeter(scene, cultContainer, domainState);
    createCultSuggestedDonationInput(scene, cultContainer, domainState);
    return cultContainer;
};
var infoRowStyle = Styles.listItemStyle;
var infoRowTextX = 20;
var infoRowValueX = 450;
var infoRowStartY = Styles.cultPage.followerList.y + Styles.offset;
var createCultInfo = function (scene, container, domainState) {
    container.add(rectangle_1.addRectangle(scene, Styles.cultPage.followerList.x, Styles.cultPage.followerList.y, Styles.cultPage.followerList.width, Styles.cultPage.followerList.height, Styles.foregroundColorHex));
    container.add([
        scene.add.text(infoRowTextX, infoRowStartY, 'Followers', infoRowStyle),
        scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 1), 'Capacity', infoRowStyle),
        scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 2), 'New Followers per Tick', infoRowStyle),
        scene.add.text(infoRowTextX, infoRowStartY + (Styles.lineItemHeight * 3), 'Donations per Tick', infoRowStyle),
    ]);
    var followersValue = scene.add.text(infoRowValueX, infoRowStartY, domainState.followers.toFixed(2), infoRowStyle);
    var capacityValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 1), "" + domainState.capacity, infoRowStyle);
    var followersPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 2), domainState.actualNewFollowersPerTick.toFixed(2), infoRowStyle);
    var donationsPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 3), (CultDomain.calculateDonationPerTick(domainState)).toFixed(2), infoRowStyle);
    domainState.events.on(domain_1.DomainEvents.followerCountChanged, function () {
        followersValue.text = domainState.followers.toFixed(2);
        donationsPerTickValue.text = (domainState.followers * domainState.suggestedDonation).toFixed(2);
    });
    domainState.events.on(domain_1.DomainEvents.cultCapacityChanged, function () {
        capacityValue.text = domainState.capacity.toString();
    });
    domainState.events.on(domain_1.DomainEvents.followersPerTickChanged, function () {
        followersPerTickValue.text = domainState.actualNewFollowersPerTick.toFixed(2);
    });
    domainState.events.on(domain_1.DomainEvents.suggestedDonationChanged, function () {
        donationsPerTickValue.text = (CultDomain.calculateDonationPerTick(domainState)).toFixed(2);
    });
    container.add([followersValue, capacityValue, followersPerTickValue, donationsPerTickValue]);
};
var optionsRowTextX = Styles.cultPage.options.labelX;
var optionsRowButtonX = Styles.cultPage.options.buttonX;
var optionsRowStartY = Styles.cultPage.followerList.y + Styles.offset;
var buttonOffsetHeight = Styles.cultPage.options.buttonOffsetHeight;
var createCultOptions = function (scene, container) {
    container.add([
        scene.add.text(optionsRowTextX, Styles.offset + optionsRowStartY, 'Build Promotional Website', Styles.cultPage.options.labelStyle)
    ].concat(button_1.createButton(scene, optionsRowButtonX, optionsRowStartY, '1,000,000', function () { }), [
        scene.add.text(optionsRowTextX, Styles.offset + optionsRowStartY + buttonOffsetHeight * 1, 'Construct Church', Styles.cultPage.options.labelStyle)
    ], button_1.createButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 1, '3,000,000', function () { }), [
        scene.add.text(optionsRowTextX, Styles.offset + optionsRowStartY + buttonOffsetHeight * 2, 'Build Complex', Styles.cultPage.options.labelStyle)
    ], button_1.createButton(scene, optionsRowButtonX, optionsRowStartY + buttonOffsetHeight * 2, '15,000,000', function () { })));
};
var createCultHappinessMeter = function (scene, container, domainState) {
    var currentHappinessMeter = scene.add.rectangle(Styles.cultPage.happiness.x + Styles.offset * 0.5, Styles.cultPage.happiness.meterY + Styles.offset * 0.5, 1, Styles.cultPage.happiness.meterHeight - Styles.offset, 0xFF0000).setOrigin(0, 0);
    setHappinessMeterWidth(currentHappinessMeter, domainState);
    domainState.events.on(domain_1.DomainEvents.cultHappinessChanged, function () {
        setHappinessMeterWidth(currentHappinessMeter, domainState);
    });
    container.add([
        scene.add.text(Styles.cultPage.happiness.x, Styles.cultPage.happiness.labelY, 'Follower Happiness', Styles.cultPage.options.labelStyle)
    ].concat(rectangle_1.addRectangle(scene, Styles.cultPage.happiness.x, Styles.cultPage.happiness.meterY, Styles.cultPage.happiness.meterWidth, Styles.cultPage.happiness.meterHeight, Styles.foregroundColorHex), [
        currentHappinessMeter,
    ]));
};
var setHappinessMeterWidth = function (meter, domainState) {
    var innerMeterWidth = Styles.cultPage.happiness.meterWidth - Styles.offset;
    meter.width = innerMeterWidth * domainState.happiness * 0.01 || 1; // Always have some bar showing
    meter.fillColor = domainState.happiness > 70
        ? 0x00FF00
        : domainState.happiness > 40
            ? 0xFFF000
            : 0xFF0000;
};
var createCultSuggestedDonationInput = function (scene, container, domainState) {
    var inputBox = input_box_1.createInputBox(scene, Styles.cultPage.donation.inputX, Styles.cultPage.donation.y, function (text) {
        var inputtedNumber = Number.parseFloat(text);
        // Don't change anything when the user backspaces all the way or enters 0
        if (inputtedNumber >= 1) {
            CultDomain.changeSuggestedDonation(domainState, inputtedNumber);
        }
    }, 12, true);
    // TODO: Ew. This sucks. We should return an object or something easier to work with.
    inputBox[6].text = domainState.suggestedDonation.toString();
    container.add(inputBox.concat([
        scene.add.text(Styles.cultPage.donation.labelX, Styles.cultPage.donation.y + 5, '"Recommended" Weekly Donation', Styles.cultPage.options.labelStyle),
    ]));
};


/***/ }),

/***/ "./src/components/exchange-interface/index.ts":
/*!****************************************************!*\
  !*** ./src/components/exchange-interface/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var domain_1 = __webpack_require__(/*! src/domain */ "./src/domain/index.ts");
var Shared = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
var rectangle_1 = __webpack_require__(/*! ../rectangle */ "./src/components/rectangle.ts");
var TradingDomain = __webpack_require__(/*! src/domain/trading */ "./src/domain/trading.ts");
var button_1 = __webpack_require__(/*! ../button */ "./src/components/button.ts");
var input_box_1 = __webpack_require__(/*! ../input-box */ "./src/components/input-box.ts");
var events_1 = __webpack_require__(/*! src/shared/events */ "./src/shared/events.ts");
;
exports.createExchangeInterface = function (scene, domainState) {
    var exchangeContainer = scene.add.container(0, 0);
    scene.events.emit(events_1.GameEvents.selectedAccountChanged, { account: domainState.tradeAccounts[0] });
    createInfoInterface(scene, exchangeContainer, domainState);
    createTradeInterface(scene, exchangeContainer, domainState);
    createRootInterface(scene, exchangeContainer, domainState);
    return exchangeContainer;
};
var getInfoColumnWidth = function (scene) {
    return Shared.getGameWidth(scene) * 0.7;
};
var getBuyColumnWidth = function (scene) {
    return Shared.getGameWidth(scene) * 0.075;
};
var columnHeaderStyle = { fontSize: '16px', color: Styles.tradePage.currencyList.headerColor };
var countryX = 20;
var currencyX = 200;
var exchangeRateX = 320;
var trendX = 370;
var trendBaseY = 207;
var amountOwnedX = 450;
var rootValueX = 610;
var headerColumnY = 160;
var firstLineItemY = 200;
function createTrend(scene, offsetY, trend) {
    if (trend === 'up') {
        return scene.add.image(trendX, trendBaseY + offsetY, 'trend-up');
    }
    else if (trend === 'down') {
        return scene.add.image(trendX, trendBaseY + offsetY, 'trend-down');
    }
}
var getCurrentRootValueText = function (account, nation) {
    return Shared.formatNumberForDisplay(account.balance / nation.currency.exchangeRate);
};
var createInfoInterface = function (scene, container, domainState) {
    container.add(rectangle_1.addRectangle(scene, Styles.tradePage.currencyList.x, Styles.tradePage.currencyList.y, Styles.tradePage.currencyList.width, Styles.tradePage.currencyList.height, Styles.foregroundColorHex));
    container.add([
        scene.add.text(countryX, headerColumnY, 'COUNTRY', columnHeaderStyle),
        scene.add.text(currencyX, headerColumnY, 'CURRENCY', columnHeaderStyle),
        scene.add.text(amountOwnedX, headerColumnY, 'AMT. OWNED', columnHeaderStyle),
        scene.add.text(exchangeRateX, headerColumnY, 'EXC. RATE', columnHeaderStyle),
        scene.add.text(rootValueX, headerColumnY, 'ROOT VALUE', columnHeaderStyle),
    ]);
    var rowClickHandlers = [];
    var basicallyHidden = 0.000000000001;
    domainState.nations.forEach(function (nation, index) {
        var account = domainState.tradeAccounts.find(function (account) { return account.currency.name === nation.currency.name; });
        var y = firstLineItemY + (Styles.lineItemHeight * index);
        var country = scene.add.text(countryX, y, nation.name, Styles.listItemStyle);
        var currency = scene.add.text(currencyX, y, nation.currency.name, Styles.listItemStyle);
        var trend = createTrend(scene, Styles.lineItemHeight * index, nation.currency.trend);
        var amountOwned = scene.add.text(amountOwnedX, y, Shared.formatNumberForDisplay(account.balance), Styles.listItemStyle);
        var exchangeRate = scene.add.text(exchangeRateX, y, Shared.formatNumberForDisplay(nation.currency.exchangeRate), Styles.listItemStyle);
        var rootValue = scene.add.text(rootValueX, y, getCurrentRootValueText(account, nation), Styles.listItemStyle);
        var rowClickHandler = scene.add.rectangle(Styles.offset + 1, y - 7, Styles.tradePage.currencyList.width - 2, Styles.lineItemHeight, Styles.tradePage.selectedLineItemHex, 0.5).setInteractive({ useHandCursor: true }).setOrigin(0, 0);
        if (index > 0) {
            // defaulting the first country / currency to selected here and in the trading state
            rowClickHandler.alpha = basicallyHidden;
        }
        rowClickHandlers.push(rowClickHandler);
        rowClickHandler.on('pointerup', function () {
            scene.events.emit(events_1.GameEvents.selectedAccountChanged, { account: account, rowClickHandler: rowClickHandler });
        });
        container.add([country, currency, trend, amountOwned, exchangeRate, rootValue, rowClickHandler]);
        domainState.events.on(domain_1.DomainEvents.accountBalanceChanged, function () {
            amountOwned.setText(Shared.formatNumberForDisplay(account.balance));
            rootValue.setText(getCurrentRootValueText(account, nation));
        });
        domainState.events.on(domain_1.DomainEvents.exchangeRatesChanged, function () {
            exchangeRate.setText(Shared.formatNumberForDisplay(nation.currency.exchangeRate));
            rootValue.setText(getCurrentRootValueText(account, nation));
            if (trend) {
                trend.destroy();
            }
            trend = createTrend(scene, Styles.lineItemHeight * index, nation.currency.trend);
            container.add(trend);
        });
    });
    scene.events.on(events_1.GameEvents.selectedAccountChanged, function (event) {
        rowClickHandlers.forEach(function (handler) {
            handler.alpha = basicallyHidden;
        });
        event.rowClickHandler.alpha = 0.5;
    });
};
var createRootInterface = function (scene, container, domainState) {
    var box = rectangle_1.addRectangle(scene, Styles.width - Styles.offset - Styles.tradePage.usernameWidth, 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
    var rootInfoText = scene.add.text(625, 70, 'AVAILABLE ROOT', Styles.listItemStyle);
    var rootValueText = scene.add.text(rootInfoText.x + rootInfoText.width + 30, rootInfoText.y - 3, Shared.formatNumberForDisplay(domainState.rootAccount.balance), Styles.availableRoot);
    domainState.events.on(domain_1.DomainEvents.accountBalanceChanged, function (account) {
        if (account.name === domainState.rootAccount.name) {
            rootValueText.setText(Shared.formatNumberForDisplay(domainState.rootAccount.balance));
        }
    });
};
function getBuyAmountText(scene) {
    var currencyAmount = Shared.formatNumberForDisplay(scene.buyAmount * scene.selectedAccount.currency.exchangeRate);
    var currencyType = scene.selectedAccount.currency.name;
    var rootAmount = Shared.formatNumberForDisplay(scene.buyAmount);
    return "BUY " + currencyAmount + " " + currencyType + " FOR " + rootAmount + " ROOT";
}
;
function getSellAmountText(scene) {
    var currencyAmount = Shared.formatNumberForDisplay(scene.sellAmount);
    var currencyType = scene.selectedAccount.currency.name;
    var rootAmount = Shared.formatNumberForDisplay(scene.sellAmount / scene.selectedAccount.currency.exchangeRate);
    return "SELL " + currencyAmount + " " + currencyType + " FOR " + rootAmount + " ROOT";
}
;
var createTradeInterface = function (scene, container, domainState) {
    var buyContainer = scene.add.container(0, 0);
    var sellContainer = scene.add.container(0, 0);
    var influenceContainer = scene.add.container(0, 0);
    var buyTab = scene.add.text(Styles.tradePage.tradeInterface.x, Styles.tradePage.tradeInterface.exchangeTabY, 'BUY', Styles.selectedTab);
    buyTab.setInteractive({ useHandCursor: true });
    buyTab.on('pointerup', function () {
        sellTab.setStyle(Styles.unselectedTab);
        influenceTab.setStyle(Styles.unselectedTab);
        buyTab.setStyle(Styles.selectedTab);
        influenceContainer.setVisible(false);
        sellContainer.setVisible(false);
        buyContainer.setVisible(true);
    });
    var sellTab = scene.add.text(buyTab.x + buyTab.width + Styles.offset * 2, Styles.tradePage.tradeInterface.exchangeTabY, 'SELL', Styles.unselectedTab);
    sellTab.setInteractive({ useHandCursor: true }).on('pointerup', function () {
        buyTab.setStyle(Styles.unselectedTab);
        influenceTab.setStyle(Styles.unselectedTab);
        sellTab.setStyle(Styles.selectedTab);
        influenceContainer.setVisible(false);
        buyContainer.setVisible(false);
        sellContainer.setVisible(true);
    });
    var influenceTab = scene.add.text(sellTab.x + sellTab.width + Styles.offset * 2, Styles.tradePage.tradeInterface.exchangeTabY, 'INFLUENCE', Styles.unselectedTab);
    influenceTab.setInteractive({ useHandCursor: true }).on('pointerup', function () {
        influenceTab.setStyle(Styles.selectedTab);
        buyTab.setStyle(Styles.unselectedTab);
        sellTab.setStyle(Styles.unselectedTab);
        influenceContainer.setVisible(true);
        buyContainer.setVisible(false);
        sellContainer.setVisible(false);
    });
    var spendAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 210, 'BUY AMOUNT', Styles.listItemStyle);
    var buyInputBox = input_box_1.createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, function (text) {
        var amount = Number.parseFloat(text);
        if (!Number.isNaN(amount)) {
            scene.events.emit(events_1.GameEvents.buyAmountChanged, amount);
        }
    }, undefined, true);
    var buyAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 260, getBuyAmountText(scene), Styles.tradeAmountText);
    buyContainer.add([
        spendAmountText
    ].concat(buyInputBox, [
        buyAmountText,
    ]));
    var sellAmountLabel = scene.add.text(Styles.tradePage.tradeInterface.x, 210, 'SELL AMOUNT', Styles.listItemStyle);
    var sellInputBox = input_box_1.createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, function (text) {
        var amount = Number.parseFloat(text);
        if (!Number.isNaN(amount)) {
            scene.events.emit(events_1.GameEvents.sellAmountChanged, amount);
        }
    }, undefined, true);
    var sellAmountText = scene.add.text(Styles.tradePage.tradeInterface.x, 260, getSellAmountText(scene), Styles.tradeAmountText);
    sellContainer.add([
        sellAmountLabel
    ].concat(sellInputBox, [
        sellAmountText,
    ]));
    var buy = function () {
        if (scene.selectedAccount) {
            TradingDomain.recordTrade(domainState.rootAccount, scene.selectedAccount, scene.buyAmount, scene.selectedAccount.currency.exchangeRate, domainState);
        }
    };
    var sell = function () {
        if (scene.selectedAccount) {
            var exchangeRate = domainState.rootAccount.currency.exchangeRate / scene.selectedAccount.currency.exchangeRate;
            TradingDomain.recordTrade(scene.selectedAccount, domainState.rootAccount, scene.sellAmount, exchangeRate, domainState);
        }
    };
    scene.events.on(events_1.GameEvents.selectedAccountChanged, function (event) {
        buyAmountText.text = getBuyAmountText(scene);
        sellAmountText.text = getSellAmountText(scene);
    });
    scene.events.on(events_1.GameEvents.buyAmountChanged, function (event) {
        buyAmountText.text = getBuyAmountText(scene);
    });
    scene.events.on(events_1.GameEvents.sellAmountChanged, function (event) {
        sellAmountText.text = getSellAmountText(scene);
    });
    domainState.events.on(domain_1.DomainEvents.exchangeRatesChanged, function (event) {
        buyAmountText.text = getBuyAmountText(scene);
        sellAmountText.text = getSellAmountText(scene);
    });
    buyContainer.add(button_1.createButton(scene, Styles.width - 100 - Styles.offset, 300, 'BUY', buy, 100));
    sellContainer.add(button_1.createButton(scene, Styles.width - 100 - Styles.offset, 300, 'SELL', sell, 100));
    var influenceY = 210;
    var influenceButtonWidth = 100;
    influenceContainer.add(scene.add.text(Styles.tradePage.tradeInterface.x, influenceY, TradingDomain.startRumorAction.name, Styles.listItemStyle));
    influenceContainer.add(button_1.createButton(scene, Styles.width - influenceButtonWidth - Styles.offset, influenceY - 10, Shared.formatNumberForDisplay(TradingDomain.startRumorAction.cost), function () { return TradingDomain.startRumor(domainState, scene.selectedAccount); }, influenceButtonWidth));
    influenceY += 50;
    influenceContainer.add(scene.add.text(Styles.tradePage.tradeInterface.x, influenceY, TradingDomain.bribePoliticianAction.name, Styles.listItemStyle));
    influenceContainer.add(button_1.createButton(scene, Styles.width - influenceButtonWidth - Styles.offset, influenceY - 10, Shared.formatNumberForDisplay(TradingDomain.bribePoliticianAction.cost), function () { return TradingDomain.bribePolitician(domainState, scene.selectedAccount); }, influenceButtonWidth));
    influenceY += 50;
    influenceContainer.add(scene.add.text(Styles.tradePage.tradeInterface.x, influenceY, TradingDomain.rigElectionAction.name, Styles.listItemStyle));
    influenceContainer.add(button_1.createButton(scene, Styles.width - influenceButtonWidth - Styles.offset, influenceY - 10, Shared.formatNumberForDisplay(TradingDomain.rigElectionAction.cost), function () { return TradingDomain.rigElection(domainState, scene.selectedAccount); }, influenceButtonWidth));
    influenceY += 50;
    // const sellInputBox = createInputBox(scene, Styles.tradePage.tradeInterface.inputBoxX, 195, (text) => {
    //   const amount = Number.parseFloat(text);
    //   if (!Number.isNaN(amount)) {
    //     scene.events.emit(GameEvents.sellAmountChanged, amount);
    //   }
    // }, undefined, true);
    sellContainer.setVisible(false);
    influenceContainer.setVisible(false);
    container.add(buyContainer);
    container.add(buyTab);
    container.add(sellContainer);
    container.add(sellTab);
    container.add(influenceContainer);
    container.add(influenceTab);
};


/***/ }),

/***/ "./src/components/input-box.ts":
/*!*************************************!*\
  !*** ./src/components/input-box.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = __webpack_require__(/*! ./rectangle */ "./src/components/rectangle.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
exports.createInputBox = function (scene, x, y, callback, maxLength, numbersOnly) {
    if (numbersOnly === void 0) { numbersOnly = false; }
    var textFieldState = {
        isEditable: false,
    };
    var rectangleElements = rectangle_1.addRectangle(scene, x, y, Styles.inputBoxWidth, 30, Styles.foregroundColorHex);
    var cursor = scene.add.rectangle(x + 8, y + 5, 10, 20, Styles.textColorHex).setOrigin(0, 0);
    cursor.setVisible(false);
    var inputBox = rectangleElements[0];
    inputBox.setInteractive();
    var textField = scene.add.text(x + 5, y + Styles.offset / 2, '', { color: Styles.textColor });
    scene.input.on('pointerup', function (pointer, currentlyOver) {
        textFieldState.isEditable = _.some(currentlyOver, function (gameObject) { return gameObject === inputBox || gameObject === textField; });
        if (textFieldState.isEditable) {
            cursor.setVisible(true);
        }
        else {
            cursor.setVisible(false);
        }
    });
    var maxCharacterLength = maxLength || Number.MAX_SAFE_INTEGER;
    // keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    // keyBackspace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
    scene.input.keyboard.on('keydown', function (event) {
        if (!textFieldState.isEditable) {
            return;
        }
        var isNumber = event.keyCode === 190 || (event.keyCode >= 48 && event.keyCode <= 57);
        var isString = event.keyCode === 32 || (event.keyCode >= 65 && event.keyCode <= 90);
        var validKey = numbersOnly
            ? isNumber
            : isNumber || isString;
        if (event.keyCode === 8 && textField.text.length > 0) {
            textField.text = textField.text.substr(0, textField.text.length - 1);
            cursor.setX(textField.x + textField.width + 3);
            callback(textField.text);
        }
        else if (textField.text.length < maxCharacterLength && validKey) {
            textField.text += ("" + event.key).toUpperCase();
            cursor.setX(textField.x + textField.width + 3);
            callback(textField.text);
        }
    });
    return rectangleElements.concat([
        cursor,
        textField,
    ]);
};


/***/ }),

/***/ "./src/components/line.ts":
/*!********************************!*\
  !*** ./src/components/line.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
exports.addHorizontalScreenLine = function (scene, y) {
    scene.add.line(0, 0, 0, y + 1, Styles.width, y + 1, Styles.detailLightColorHex).setOrigin(0, 0);
    scene.add.line(0, 0, 0, y, Styles.width, y, Styles.detailDarkColorHex).setOrigin(0, 0);
};


/***/ }),

/***/ "./src/components/rectangle.ts":
/*!*************************************!*\
  !*** ./src/components/rectangle.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
exports.addRectangle = function (scene, x, y, width, height, fillColor, fillAlpha) {
    var box = scene.add.rectangle(x, y, width, height, fillColor, fillAlpha).setOrigin(0, 0);
    var topLine = scene.add.line(0, 0, x - 1, y, x + width, y, Styles.detailDarkColorHex).setOrigin(0, 0);
    var leftLine = scene.add.line(0, 0, x, y - 1, x, y + height + 1, Styles.detailDarkColorHex).setOrigin(0, 0);
    var rightLine = scene.add.line(0, 0, x + width, y - 1, x + width, y + height + 1, Styles.detailLightColorHex).setOrigin(0, 0);
    var bottomLine = scene.add.line(0, 0, x + 1, y + height, x + width, y + height, Styles.detailLightColorHex).setOrigin(0, 0);
    return [
        box,
        topLine,
        leftLine,
        rightLine,
        bottomLine,
    ];
};


/***/ }),

/***/ "./src/components/ticker/index.ts":
/*!****************************************!*\
  !*** ./src/components/ticker/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Shared = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var domain_1 = __webpack_require__(/*! src/domain */ "./src/domain/index.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var rectangle_1 = __webpack_require__(/*! ../rectangle */ "./src/components/rectangle.ts");
;
var tickerY = 710;
var tickerStoryY = 725;
var tickerHeight = 50;
exports.createNewsTicker = function (scene, domainState) {
    var tickerState = {
        storyQueue: [],
        storyDisplays: [],
        readyToDisplayNextStory: false,
    };
    var gameWidth = Shared.getGameWidth(scene);
    rectangle_1.addRectangle(scene, Styles.offset, tickerY, gameWidth - Styles.offset * 2, tickerHeight, Styles.foregroundColorHex);
    domainState.events.on(domain_1.DomainEvents.nationEventOccurred, function (nation, headline) {
        tickerState.storyQueue.push(nation.name + " " + headline);
    });
    domainState.events.on(domain_1.DomainEvents.nationEventEnded, function (nation, headline) {
        if (headline) {
            tickerState.storyQueue.push(nation.name + " " + headline);
        }
    });
    // Use this to make sure the mask doesn't cover the border of the ticker
    var maskFuzz = 1;
    var leftMask = scene.add.rectangle(0, tickerY, Styles.offset - maskFuzz, tickerHeight, Styles.backgroundColorHex).setOrigin(0, 0);
    var rightMask = scene.add.rectangle(gameWidth - Styles.offset + maskFuzz, tickerY, Styles.offset, tickerHeight, Styles.backgroundColorHex).setOrigin(0, 0);
    // These masks are used to make sure that a ticker story isn't visible until it actuall enters the ticker field
    leftMask.setDepth(10);
    rightMask.setDepth(10);
    exports.updateStories(scene, tickerState);
    return tickerState;
};
var readyToDisplayNextStory = true;
exports.updateStories = function (scene, tickerState) {
    var shouldBuildStory = readyToDisplayNextStory && (tickerState.storyQueue.length > 0);
    var gameWidth = Shared.getGameWidth(scene);
    if (shouldBuildStory) {
        var text = tickerState.storyQueue.shift();
        tickerState.storyDisplays.push({ textObject: scene.add.text(gameWidth, tickerStoryY, text), text: text, posX: gameWidth });
        readyToDisplayNextStory = false;
    }
    tickerState.storyDisplays.forEach(function (story) {
        story.textObject.destroy();
        story.posX -= 2;
        story.textObject = scene.add.text(story.posX, tickerStoryY, story.text);
        // story.textObject.setde
    });
    tickerState.storyDisplays = tickerState.storyDisplays.filter(function (story) {
        var offScreen = story.textObject.displayWidth + story.posX < 0;
        if (offScreen) {
            story.textObject.destroy();
            return false;
        }
        return true;
    });
    var padding = 100;
    if (tickerState.storyDisplays.length === 0 || _.last(tickerState.storyDisplays).textObject.displayWidth + padding < gameWidth - _.last(tickerState.storyDisplays).posX) {
        readyToDisplayNextStory = true;
    }
};


/***/ }),

/***/ "./src/domain/cult.ts":
/*!****************************!*\
  !*** ./src/domain/cult.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! ./events */ "./src/domain/events.ts");
var _ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
exports.initCultDomainState = function (input, events) {
    return {
        events: events,
        happiness: 100,
        followers: 1,
        capacity: 10,
        actualNewFollowersPerTick: 1,
        baseNewFollowersPerTick: 1,
        suggestedDonation: 0,
    };
};
var FOLLOWERS_START_LEAVING_THRESHOLD = 40;
exports.calculateNewHappinessLevel = function (domainState) {
    return domainState.suggestedDonation > 100 ? 0 : 100 - domainState.suggestedDonation;
};
exports.calculateDonationPerTick = function (domainState) {
    return domainState.happiness >= FOLLOWERS_START_LEAVING_THRESHOLD ? domainState.suggestedDonation * domainState.followers : 0;
};
var calculateCurrentFollowersPerTick = function (domainState) {
    if (domainState.happiness < FOLLOWERS_START_LEAVING_THRESHOLD) {
        domainState.actualNewFollowersPerTick = (domainState.happiness - FOLLOWERS_START_LEAVING_THRESHOLD) * domainState.baseNewFollowersPerTick;
    }
    else {
        domainState.actualNewFollowersPerTick = domainState.baseNewFollowersPerTick * (domainState.happiness * 0.01);
    }
    domainState.events.emit(events_1.DomainEvents.followersPerTickChanged);
};
exports.changeHappiness = function (domainState, newHappiness) {
    domainState.happiness = newHappiness;
    calculateCurrentFollowersPerTick(domainState);
    domainState.events.emit(events_1.DomainEvents.cultHappinessChanged);
};
exports.changeSuggestedDonation = function (domainState, newDonationAmount) {
    domainState.suggestedDonation = newDonationAmount;
    domainState.events.emit(events_1.DomainEvents.suggestedDonationChanged);
};
exports.changeCultCapacity = function (domainState, newCapacity) {
    domainState.capacity = newCapacity;
    domainState.events.emit(events_1.DomainEvents.cultCapacityChanged);
};
exports.generateRevenueFromCult = function (domainState) {
    var revenue = exports.calculateDonationPerTick(domainState);
    domainState.events.emit(events_1.DomainEvents.cultRevenueGenerated, revenue);
};
exports.addFollowersToCult = function (domainState) {
    var newFollowerCount = domainState.followers + domainState.actualNewFollowersPerTick;
    domainState.followers = _.clamp(newFollowerCount, 0, domainState.capacity);
    domainState.events.emit(events_1.DomainEvents.followerCountChanged);
};


/***/ }),

/***/ "./src/domain/events.ts":
/*!******************************!*\
  !*** ./src/domain/events.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomainEvents;
(function (DomainEvents) {
    // Trading
    DomainEvents["tradeCompleted"] = "domain.tradeCompleted";
    DomainEvents["tradeFailed"] = "domain.tradeFailed";
    DomainEvents["accountBalanceChanged"] = "domain.accountBalanceChanged";
    DomainEvents["exchangeRatesChanged"] = "domain.exchangeRatesChanged";
    DomainEvents["nationEventOccurred"] = "domain.nationEventOccurred";
    DomainEvents["nationEventEnded"] = "domain.nationEventEnded";
    // Cult
    DomainEvents["followerCountChanged"] = "domain.followerCountChanged";
    DomainEvents["cultRevenueGenerated"] = "domain.cultRevenueGenerated";
    DomainEvents["suggestedDonationChanged"] = "domain.suggestedDonationChanged";
    DomainEvents["cultCapacityChanged"] = "domain.cultCapacityChanged";
    DomainEvents["cultHappinessChanged"] = "domain.cultHappinessChanged";
    DomainEvents["followersPerTickChanged"] = "domain.followersPerTickChanged";
})(DomainEvents = exports.DomainEvents || (exports.DomainEvents = {}));


/***/ }),

/***/ "./src/domain/index.ts":
/*!*****************************!*\
  !*** ./src/domain/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var TradingDomain = __webpack_require__(/*! ./trading */ "./src/domain/trading.ts");
var CultDomain = __webpack_require__(/*! ./cult */ "./src/domain/cult.ts");
var events_1 = __webpack_require__(/*! ./events */ "./src/domain/events.ts");
exports.DomainEvents = events_1.DomainEvents;
exports.initDomainState = function (input) {
    var domainEventEmitter = new Phaser.Events.EventEmitter();
    var domainState = __assign({}, TradingDomain.initTradingDomainState(input, domainEventEmitter), CultDomain.initCultDomainState(input, domainEventEmitter));
    registerDomainEventHandlers(domainState);
    return domainState;
};
var registerDomainEventHandlers = function (domainState) {
    domainState.events.on(events_1.DomainEvents.cultRevenueGenerated, function (revenue) {
        TradingDomain.addRevenueToRootAcount(domainState, revenue);
    });
    domainState.events.on(events_1.DomainEvents.suggestedDonationChanged, function (revenue) {
        var newHappiness = CultDomain.calculateNewHappinessLevel(domainState);
        CultDomain.changeHappiness(domainState, newHappiness);
    });
};
exports.handleTick = function (domainState) {
    // Trading Domain Events
    TradingDomain.runCurrencyFluctuations(domainState);
    TradingDomain.runRandomNationEvents(domainState);
    TradingDomain.checkForExpiringNationEvents(domainState);
    // Cult Domain Events
    CultDomain.addFollowersToCult(domainState);
    CultDomain.generateRevenueFromCult(domainState);
};


/***/ }),

/***/ "./src/domain/trading.ts":
/*!*******************************!*\
  !*** ./src/domain/trading.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! ./events */ "./src/domain/events.ts");
var shared_1 = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
var DomainErrors;
(function (DomainErrors) {
    DomainErrors["tradeFailed_InsufficientFunds"] = "Insufficient Funds";
})(DomainErrors = exports.DomainErrors || (exports.DomainErrors = {}));
function createAccount(name, startingBalance, currency, isRoot) {
    var newAccount = {
        kind: isRoot ? "root" : "trading",
        name: name,
        currency: currency,
        balance: startingBalance,
        ledger: [],
    };
    if (startingBalance > 0) {
        newAccount.ledger.push({ amount: startingBalance, transactionType: "Credit" });
    }
    return newAccount;
}
exports.createAccount = createAccount;
function recordTrade(source, destination, sourceAmount, sourceToDestinationExchangeRate, state) {
    if (source.balance >= sourceAmount) {
        source.ledger.push({ amount: sourceAmount, transactionType: "Debit" });
        source.balance -= sourceAmount;
        var destinationAmount = sourceAmount * sourceToDestinationExchangeRate;
        destination.ledger.push({ amount: destinationAmount, transactionType: "Credit" });
        destination.balance += destinationAmount;
        var newTrade = {
            sourceAmount: sourceAmount,
            sourceCurrency: source.currency,
            destinationAmount: destinationAmount,
            destinationCurrency: destination.currency,
            exchangeRate: sourceToDestinationExchangeRate
        };
        state.tradeLedger.trades.push(newTrade);
        state.events.emit(events_1.DomainEvents.tradeCompleted, newTrade);
        state.events.emit(events_1.DomainEvents.accountBalanceChanged, source);
        state.events.emit(events_1.DomainEvents.accountBalanceChanged, destination);
    }
    else {
        state.events.emit(events_1.DomainEvents.tradeFailed, DomainErrors.tradeFailed_InsufficientFunds);
    }
}
exports.recordTrade = recordTrade;
var MIN_STARTING_EXCHANGE_RATE = 5;
var MAX_STARTING_EXCHANGE_RATE = 40;
var MIN_CURRENCY_EXCHANGE_RATE = 1;
var MAX_CURRENCY_EXCHANGE_RATE = 99;
function randomDecimalBetween(min, max) {
    return Math.random() * (max - min) + min;
}
function initTradingDomainState(initData, events) {
    var nations = initData.nations.map(function (n) {
        return {
            name: n.nation,
            currency: { name: n.currency, exchangeRate: randomDecimalBetween(MIN_STARTING_EXCHANGE_RATE, MAX_STARTING_EXCHANGE_RATE), trend: "up" },
            activeEvents: [],
            historicalEvents: [],
        };
    });
    var currencies = nations.map(function (n) { return n.currency; });
    var accounts = currencies.map(function (c) {
        return createAccount(c.name, 0, c, false);
    });
    var rootCurrency = { name: initData.rootCurrencyName, exchangeRate: 1, trend: "up" };
    return {
        events: events,
        nations: nations,
        tradeCurrencies: currencies,
        tradeAccounts: accounts,
        tradeLedger: { trades: [] },
        rootCurrency: rootCurrency,
        rootAccount: createAccount(initData.rootCurrencyName, initData.rootCurrencyStartingAmount, rootCurrency, true),
    };
}
exports.initTradingDomainState = initTradingDomainState;
function runCurrencyFluctuations(state) {
    state.nations.forEach(function (nation) {
        var currency = nation.currency;
        var fluxMultiplier = nation.activeEvents.reduce(function (i, event) { return i * event.fluxMultiplier; }, 1);
        var baseMultiplier = nation.activeEvents.reduce(function (i, event) { return i * event.baseMultiplier; }, 1);
        var change = currency.exchangeRate * (randomDecimalBetween(0.98 * fluxMultiplier, 1.02 * fluxMultiplier)) * baseMultiplier - currency.exchangeRate;
        var exrMidpoint = (MAX_CURRENCY_EXCHANGE_RATE - MIN_CURRENCY_EXCHANGE_RATE) / 2;
        var changeScale = (Math.abs(currency.exchangeRate - exrMidpoint) < 2
            || (change < 0 && currency.exchangeRate > exrMidpoint)
            || (change > 0 && currency.exchangeRate < exrMidpoint)) ? 1 : ((exrMidpoint / 30.0) / Math.abs(currency.exchangeRate - exrMidpoint));
        var scaledChange = change * changeScale;
        currency.trend = scaledChange > 0 ? "up" : "down";
        currency.exchangeRate += scaledChange;
        if (currency.exchangeRate < MIN_CURRENCY_EXCHANGE_RATE) {
            currency.exchangeRate = MIN_CURRENCY_EXCHANGE_RATE;
        }
        else if (currency.exchangeRate > MAX_CURRENCY_EXCHANGE_RATE) {
            currency.exchangeRate = MAX_CURRENCY_EXCHANGE_RATE;
        }
    });
    state.events.emit(events_1.DomainEvents.exchangeRatesChanged);
}
exports.runCurrencyFluctuations = runCurrencyFluctuations;
var nationEventTypes = [
    {
        kind: "negative",
        name: "War",
        eventStartHeadline: "has gone to war!",
        eventEndHeadline: "is no longer at war",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 1.0, max: 1.1 },
        duration: { min: 60, max: 120 }
    },
    {
        kind: "positive",
        name: "Forging friendships",
        eventStartHeadline: "is forging strong friendships",
        eventEndHeadline: "appears normal",
        baseMultiplier: { min: 0.90, max: 0.99 },
        fluxMultiplier: { min: 0.2, max: 0.4 },
        duration: { min: 60, max: 120 }
    },
    {
        kind: "negative",
        name: "Famine",
        eventStartHeadline: "is experiencing a famine",
        eventEndHeadline: "has sufficient food and water",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 1.0, max: 1.1 },
        duration: { min: 30, max: 60 }
    },
    {
        kind: "positive",
        name: "High productivity",
        eventStartHeadline: "is hugely productive right now",
        eventEndHeadline: "is resting from their productivity push",
        baseMultiplier: { min: 0.99, max: 0.99 },
        fluxMultiplier: { min: 0.7, max: 1.2 },
        duration: { min: 30, max: 60 }
    },
    {
        kind: "positive",
        name: "Good day",
        eventStartHeadline: "is having a particularly good time",
        eventEndHeadline: "is feeling average",
        baseMultiplier: { min: 0.9, max: 0.99 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 10, max: 20 }
    },
    {
        kind: "negative",
        name: "Bad day",
        eventStartHeadline: "sure looks like they're having a bad day",
        eventEndHeadline: "is ok",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 10, max: 20 }
    },
    {
        kind: "positive",
        name: "Great month",
        eventStartHeadline: "is enjoying success this month",
        eventEndHeadline: "seems fine",
        baseMultiplier: { min: 0.9, max: 0.99 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 20, max: 40 }
    },
    {
        kind: "negative",
        name: "Terrible month",
        eventStartHeadline: "looks like they're struggling this month",
        eventEndHeadline: "looks like they're doing better",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 20, max: 40 }
    },
    {
        kind: "positive",
        name: "Outstanding year",
        eventStartHeadline: "is outstanding this year",
        eventEndHeadline: "up to the usual",
        baseMultiplier: { min: 0.9, max: 0.99 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
    {
        kind: "negative",
        name: "Bad year",
        eventStartHeadline: "isn't having a very good year",
        eventEndHeadline: "isn't doing too bad",
        baseMultiplier: { min: 1.01, max: 1.1 },
        fluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
];
var RANDOM_EVENT_THRESHOLD = 0.9;
function randomIntegerBetween(min, max) {
    return Math.floor(randomDecimalBetween(min, max));
}
function setActiveEventOnNation(event, nation, state) {
    console.log('setActiveEventOnNation', event, nation);
    nation.activeEvents.push(event);
    state.events.emit(events_1.DomainEvents.nationEventOccurred, nation, event.eventStartHeadline);
}
function endActiveEventOnNation(event, nation, state) {
    var index = nation.activeEvents.indexOf(event);
    if (index >= 0) {
        nation.activeEvents.splice(index, 1);
        nation.historicalEvents.push(event);
        state.events.emit(events_1.DomainEvents.nationEventEnded, nation, event.eventEndHeadline);
    }
}
function checkForExpiringNationEvents(state) {
    var now = Date.now();
    state.nations.forEach(function (nation) {
        nation.activeEvents.forEach(function (event) {
            if (event.triggeredTime + event.duration * 1000 <= now) {
                console.log("Expiring an event!!!", now, event);
                endActiveEventOnNation(event, nation, state);
            }
        });
    });
}
exports.checkForExpiringNationEvents = checkForExpiringNationEvents;
function runRandomNationEvents(state) {
    if (Math.random() > RANDOM_EVENT_THRESHOLD) {
        console.log("A RANDOM EVENT OCCURRED!!!");
        var eventType = nationEventTypes[randomIntegerBetween(0, nationEventTypes.length)];
        var chosenNation = state.nations[randomIntegerBetween(0, state.nations.length)];
        if (chosenNation.activeEvents.length == 0 || (chosenNation.activeEvents.length == 1 && chosenNation.activeEvents[0].kind == eventType.kind)) {
            var event_1 = {
                baseMultiplier: randomDecimalBetween(eventType.baseMultiplier.min, eventType.baseMultiplier.max),
                fluxMultiplier: randomDecimalBetween(eventType.fluxMultiplier.min, eventType.fluxMultiplier.max),
                name: eventType.name,
                eventStartHeadline: eventType.eventStartHeadline,
                eventEndHeadline: eventType.eventEndHeadline,
                duration: randomIntegerBetween(eventType.duration.min, eventType.duration.max),
                triggeredTime: Date.now(),
                kind: eventType.kind,
            };
            setActiveEventOnNation(event_1, chosenNation, state);
        }
    }
}
exports.runRandomNationEvents = runRandomNationEvents;
var randomArrayElement = function (arr) {
    return arr[randomIntegerBetween(0, arr.length)];
};
exports.addRevenueToRootAcount = function (state, revenueAmount) {
    state.rootAccount.balance += revenueAmount;
    state.events.emit(events_1.DomainEvents.accountBalanceChanged, state.rootAccount);
};
exports.startRumorAction = {
    cost: 1000,
    name: "START RUMOR",
    eventType: {
        name: "Start Rumor",
        successRate: 0.90,
        successHeadlines: [
            "has reported good market behavior",
        ],
        failureHeadlines: [
            "was caught lying about national income",
        ],
        successBaseMultiplier: { min: 0.95, max: 0.99 },
        successFluxMultiplier: { min: 0.7, max: 0.8 },
        failureBaseMultiplier: { min: 1.01, max: 1.05 },
        failureFluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
};
exports.bribePoliticianAction = {
    cost: 10000,
    name: "BRIBE POLITICIAN",
    eventType: {
        name: "Bribe",
        successRate: 0.75,
        successHeadlines: [
            "is doing inexplicably well today",
        ],
        failureHeadlines: [
            "is suffering from a bribery scandal",
        ],
        successBaseMultiplier: { min: 0.9, max: 0.99 },
        successFluxMultiplier: { min: 0.7, max: 0.8 },
        failureBaseMultiplier: { min: 1.03, max: 1.13 },
        failureFluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
};
exports.rigElectionAction = {
    cost: 100000,
    name: "RIG ELECTION",
    eventType: {
        name: "Rig Election",
        successRate: 0.5,
        successHeadlines: [
            "had an unforseen upset at the polls today",
        ],
        failureHeadlines: [
            "uncovered evidence that the last election was rigged",
        ],
        successBaseMultiplier: { min: 0.8, max: 0.90 },
        successFluxMultiplier: { min: 0.7, max: 0.8 },
        failureBaseMultiplier: { min: 1.10, max: 1.2 },
        failureFluxMultiplier: { min: 0.7, max: 0.8 },
        duration: { min: 80, max: 160 }
    },
};
exports.influenceActions = [
    exports.startRumorAction,
    exports.bribePoliticianAction,
    exports.rigElectionAction,
];
function getNationFromAccount(state, account) {
    return state.nations.find(function (nation) { return nation.currency.name === account.currency.name; });
}
exports.getNationFromAccount = getNationFromAccount;
function startRumor(state, account) {
    setActiveNationEventFromAction(state, account, exports.startRumorAction);
}
exports.startRumor = startRumor;
function bribePolitician(state, account) {
    setActiveNationEventFromAction(state, account, exports.bribePoliticianAction);
}
exports.bribePolitician = bribePolitician;
function rigElection(state, account) {
    setActiveNationEventFromAction(state, account, exports.rigElectionAction);
}
exports.rigElection = rigElection;
function setActiveNationEventFromAction(state, account, action) {
    if (state.rootAccount.balance < action.cost) {
        console.log("Unable to perform influence because account balance (" + shared_1.formatNumberForDisplay(state.rootAccount.balance) + ") is less than the action cost (" + shared_1.formatNumberForDisplay(action.cost) + ")");
        return;
    }
    var nation = getNationFromAccount(state, account);
    if (!nation) {
        throw new Error('unable to find nation from account');
    }
    exports.addRevenueToRootAcount(state, -action.cost);
    var event = createNationEventFromInfluenceAction(action);
    setActiveEventOnNation(event, nation, state);
}
exports.setActiveNationEventFromAction = setActiveNationEventFromAction;
function createNationEventFromInfluenceAction(action) {
    var success = Math.random() < action.eventType.successRate;
    if (success) {
        return {
            name: action.eventType.name,
            duration: randomIntegerBetween(action.eventType.duration.min, action.eventType.duration.max),
            triggeredTime: Date.now(),
            baseMultiplier: randomDecimalBetween(action.eventType.successBaseMultiplier.min, action.eventType.successBaseMultiplier.max),
            fluxMultiplier: randomDecimalBetween(action.eventType.successFluxMultiplier.min, action.eventType.successFluxMultiplier.max),
            eventStartHeadline: randomArrayElement(action.eventType.successHeadlines),
            kind: "positive",
        };
    }
    else {
        return {
            name: action.eventType.name,
            duration: randomIntegerBetween(action.eventType.duration.min, action.eventType.duration.max),
            triggeredTime: Date.now(),
            baseMultiplier: randomDecimalBetween(action.eventType.failureBaseMultiplier.min, action.eventType.failureBaseMultiplier.max),
            fluxMultiplier: randomDecimalBetween(action.eventType.failureFluxMultiplier.min, action.eventType.failureFluxMultiplier.max),
            eventStartHeadline: randomArrayElement(action.eventType.failureHeadlines),
            kind: "negative",
        };
    }
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var gameConfig = {
    title: 'Currency Trader',
    type: Phaser.AUTO,
    width: Styles.width,
    height: Styles.height,
    scene: scenes_1.default,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: Styles.backgroundColor,
};
exports.game = new Phaser.Game(gameConfig);
window.addEventListener('resize', function () {
    exports.game.resize(window.innerWidth, window.innerHeight);
});


/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot',
};
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.getGameWidth = function () {
            return _this.game.scale.width;
        };
        _this.getGameHeight = function () {
            return _this.game.scale.height;
        };
        return _this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        var halfWidth = this.getGameWidth() * 0.5;
        var halfHeight = this.getGameHeight() * 0.5;
        var progressBarHeight = 100;
        var progressBarWidth = 400;
        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
        this.load.on('progress', function (value) {
            progressBar.width = (progressBarWidth - 30) * value;
            var percent = value * 100;
            percentText.setText(percent + "%");
        });
        this.load.on('fileprogress', function (file) {
            assetText.setText(file.key);
        });
        this.load.on('complete', function () {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            _this.scene.start('MainMenu');
        });
        this.loadAssets();
    };
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
     * is currently active, so they can be accessed anywhere.
     */
    BootScene.prototype.loadAssets = function () {
        this.load.image('trend-up', 'assets/trend-up.svg');
        this.load.image('trend-down', 'assets/trend-down.svg');
        this.load.image('logo-png', 'assets/logo.png');
        this.load.image('logo-svg', 'assets/logo.svg');
        this.load.audio('root-maker-music-1', 'assets/root-maker-music-1.mp3');
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Domain = __webpack_require__(/*! src/domain */ "./src/domain/index.ts");
var ExchangeInterface = __webpack_require__(/*! ../components/exchange-interface */ "./src/components/exchange-interface/index.ts");
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var line_1 = __webpack_require__(/*! src/components/line */ "./src/components/line.ts");
var rectangle_1 = __webpack_require__(/*! src/components/rectangle */ "./src/components/rectangle.ts");
var CultInterface = __webpack_require__(/*! ../components/cult-interface */ "./src/components/cult-interface/index.ts");
var Ticker = __webpack_require__(/*! src/components/ticker */ "./src/components/ticker/index.ts");
var events_1 = __webpack_require__(/*! src/shared/events */ "./src/shared/events.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.buyAmount = 0;
        _this.sellAmount = 0;
        _this.domainTickTime = 1000; // milliseconds
        _this.timeSinceLastTick = 0;
        return _this;
    }
    GameScene.prototype.init = function (data) {
        var _this = this;
        this.username = data.username || '';
        this.events.on(events_1.GameEvents.buyAmountChanged, function (amount) {
            _this.buyAmount = amount;
        });
        this.events.on(events_1.GameEvents.sellAmountChanged, function (amount) {
            _this.sellAmount = amount;
        });
        this.events.on(events_1.GameEvents.selectedAccountChanged, function (_a) {
            var account = _a.account;
            _this.selectedAccount = account;
        });
    };
    GameScene.prototype.create = function () {
        this.domainState = Domain.initDomainState({
            rootCurrencyName: 'root',
            rootCurrencyStartingAmount: 100,
            nations: [
                { currency: 'Duller', nation: 'Andromeda' },
                { currency: 'When', nation: 'Corennia' },
                { currency: 'Prawn', nation: 'Great Burton' },
                { currency: 'Pesto', nation: 'Median' },
            ],
        });
        // this.music = this.sound.add('root-maker-music-1', { loop: true, volume: 1 });
        // this.music.play();
        // this.sound.pauseOnBlur = false;
        var exchangeTab = this.add.text(Styles.offset, Styles.tabY, 'EXCHANGE', Styles.selectedTab);
        exchangeTab.setInteractive({ useHandCursor: true });
        exchangeTab.on('pointerup', function () {
            cultTab.setStyle(Styles.unselectedTab);
            exchangeTab.setStyle(Styles.selectedTab);
            cultContainer.setVisible(false);
            exchangeContainer.setVisible(true);
        });
        var cultTab = this.add.text(exchangeTab.x + exchangeTab.width + Styles.offset * 2, Styles.tabY, 'CULT', Styles.unselectedTab);
        cultTab.setInteractive({ useHandCursor: true }).on('pointerup', function () {
            exchangeTab.setStyle(Styles.unselectedTab);
            cultTab.setStyle(Styles.selectedTab);
            exchangeContainer.setVisible(false);
            cultContainer.setVisible(true);
        });
        var logo = this.add.image(Styles.offset * 2, Styles.offset, 'logo-png').setOrigin(0, 0);
        // logo.setScale(0.3, 0.3); // necessary for the svg style
        line_1.addHorizontalScreenLine(this, 50);
        var usernameText = this.add.text(Styles.offset, 70, 'USERNAME', Styles.listItemStyle);
        rectangle_1.addRectangle(this, usernameText.x + usernameText.width + (Styles.offset * 2), 60, Styles.tradePage.usernameWidth, Styles.tradePage.usernameHeight, Styles.foregroundColorHex);
        this.add.text(usernameText.x + usernameText.width + (Styles.offset * 3), 60 + Styles.offset / 2, this.username, { color: Styles.textColor });
        line_1.addHorizontalScreenLine(this, 100);
        line_1.addHorizontalScreenLine(this, 700);
        var exchangeContainer = ExchangeInterface.createExchangeInterface(this, this.domainState);
        var cultContainer = CultInterface.createCultInterface(this, this.domainState).setVisible(false);
        this.tickerState = Ticker.createNewsTicker(this, this.domainState);
    };
    GameScene.prototype.update = function (time, delta) {
        this.timeSinceLastTick += delta;
        if (this.timeSinceLastTick >= this.domainTickTime) {
            console.log('tick!');
            this.timeSinceLastTick = 0;
            Domain.handleTick(this.domainState);
        }
        Ticker.updateStories(this, this.tickerState);
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var game_scene_1 = __webpack_require__(/*! ./game-scene */ "./src/scenes/game-scene.ts");
exports.default = [
    boot_scene_1.BootScene,
    main_menu_scene_1.MainMenuScene,
    game_scene_1.GameScene,
];


/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var button_1 = __webpack_require__(/*! src/components/button */ "./src/components/button.ts");
var input_box_1 = __webpack_require__(/*! src/components/input-box */ "./src/components/input-box.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu',
};
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.username = '';
        return _this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        var logoX = 300;
        var usernameTextX = 375;
        var usernameFieldX = 475;
        var loginButtonWidth = 100;
        var loginX = (Styles.width / 2) - loginButtonWidth / 2;
        var loginY = 500;
        var logoY = 200;
        var usernameY = 400;
        this.add.image(logoX, logoY, 'logo-svg').setOrigin(0, 0);
        this.add.text(usernameTextX, usernameY + 5, 'USERNAME:');
        input_box_1.createInputBox(this, usernameFieldX, usernameY, function (text) { return _this.username = text; }, 12);
        var onClick = function () {
            _this.scene.start('Game', { username: _this.username });
        };
        button_1.createButton(this, loginX, loginY, 'LOGIN', onClick, loginButtonWidth);
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/shared/events.ts":
/*!******************************!*\
  !*** ./src/shared/events.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GameEvents;
(function (GameEvents) {
    GameEvents["selectedAccountChanged"] = "game.selectedAccountChanged";
    GameEvents["buyAmountChanged"] = "game.buyAmountChanged";
    GameEvents["sellAmountChanged"] = "game.sellAmountChanged";
})(GameEvents = exports.GameEvents || (exports.GameEvents = {}));


/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};
exports.formatNumberForDisplay = function (n) {
    var num = parseFloat("" + n);
    if (isNaN(num)) {
        return '';
    }
    return num.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).substring(1);
};
// export const formatNumberForDisplay = (n: number | string) => {
//   return parseFloat(`${n}`).toFixed(2);
// };


/***/ }),

/***/ "./src/shared/styles.ts":
/*!******************************!*\
  !*** ./src/shared/styles.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.backgroundColor = '#A29771';
exports.foregroundColor = '#2B261C';
exports.textColor = '#CDCBC2';
exports.detailDarkColor = '#817C6A';
exports.detailLightColor = '#F2E9CC';
exports.buttonTextColor = '#4E4626';
exports.backgroundColorHex = 0xA29771;
exports.foregroundColorHex = 0x2B261C;
exports.textColorHex = 0xCDCBC2;
exports.detailDarkColorHex = 0x817C6A;
exports.detailLightColorHex = 0xF2E9CC;
exports.buttonTextColorHex = 0x4E4626;
exports.listItemStyle = { fontSize: '14px', color: exports.textColor };
exports.tradeAmountText = { fontSize: '12px', color: exports.textColor };
exports.availableRoot = { fontSize: '16px', color: '#89F663' };
exports.buttonLabelStyle = { fontSize: '14px', color: exports.foregroundColor };
exports.foregroundStyle = { color: exports.foregroundColor };
exports.selectedTab = { fontSize: '16px', color: exports.backgroundColor, backgroundColor: exports.buttonTextColor };
exports.unselectedTab = { fontSize: '16px', color: exports.buttonTextColor, backgroundColor: exports.backgroundColor };
exports.offset = 10;
exports.width = 1024;
exports.height = 768;
exports.inputBoxWidth = 150;
exports.tradePage = {
    currencyList: {
        width: 707,
        height: 534,
        x: exports.offset,
        y: 150,
        itemColor: exports.textColor,
        headerColor: exports.backgroundColor,
        headerHeight: 45,
        listItemX: exports.offset * 2,
        listItemY: 195,
    },
    tradeInterface: {
        x: 707 + 2 * exports.offset,
        exchangeTabY: 150,
        inputBoxX: exports.width - exports.offset - exports.inputBoxWidth,
    },
    transactionWidth: 287,
    usernameWidth: 254,
    usernameHeight: 30,
    inputWidth: 143,
    inputHeight: 39,
    selectedLineItemHex: 0x3E3E3D,
};
exports.cultPage = {
    followerList: {
        width: 580,
        height: 534,
        x: exports.offset,
        y: 150,
        itemColor: exports.textColor,
        headerColor: exports.backgroundColor,
        headerHeight: 45,
        listItemX: exports.offset * 2,
        listItemY: 195,
    },
    options: {
        labelStyle: exports.buttonLabelStyle,
        buttonOffsetHeight: 75,
        buttonX: 850,
        labelX: 600,
    },
    happiness: {
        x: 600,
        labelY: 525,
        meterY: 550,
        meterWidth: 415,
        meterHeight: 50,
    },
    donation: {
        labelX: 600,
        inputX: 850,
        y: 650,
    }
};
exports.tabY = 117;
exports.lineItemHeight = 30;
exports.tickerWidth = 1004;
exports.tickerHeight = 50;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2N1bHQtaW50ZXJmYWNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V4Y2hhbmdlLWludGVyZmFjZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlja2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vY3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdHJhZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3Qtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFD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SUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRyxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0gsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0gsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV4QixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFD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UixNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxHQUFHO1FBQ1gsQ0FBQyxFQUFFLEdBQUc7S0FDUDtDQUNGO0FBQ1ksWUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNYLHNCQUFjLEdBQUcsRUFBRSxDQUFDO0FBRXBCLG1CQUFXLEdBQUcsSUFBSSxDQUFDO0FBQ25CLG9CQUFZLEdBQUcsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnc3JjL3NoYXJlZC9zdHlsZXMnO1xuY29uc3QgYnV0dG9uUmVzdFN0eWxlID0ge1xuICBmaWxsOiAnI0ZGRkZGRicsXG59O1xuXG5jb25zdCBidXR0b25Ib3ZlclN0eWxlID0ge1xuICBmaWxsOiAnIzdDRkMwMCcsXG59O1xuXG5jb25zdCBidXR0b25BY3RpdmVTdHlsZSA9IHtcbiAgZmlsbDogJyM4ODg4ODgnLFxufTtcblxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0IHtcbiAgY29uc3RydWN0b3Ioc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHRleHQ6IHN0cmluZywgb25DbGljaz86ICgpID0+IHZvaWQpIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSwgdGV4dCwgYnV0dG9uUmVzdFN0eWxlKTtcbiAgICBzY2VuZS5hZGQuZXhpc3RpbmcodGhpcyk7XG5cbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KVxuICAgICAgLm9uKCdwb2ludGVyb3ZlcicsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcm91dCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyZG93bicsIHRoaXMuZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJ1cCcsIHRoaXMuZW50ZXJNZW51QnV0dG9uSG92ZXJTdGF0ZSk7XG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgb25DbGljayk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKCkge1xuICAgIHRoaXMuc2V0U3R5bGUoYnV0dG9uSG92ZXJTdHlsZSk7XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvblJlc3RTdGF0ZSgpIHtcbiAgICB0aGlzLnNldFN0eWxlKGJ1dHRvblJlc3RTdHlsZSk7XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkFjdGl2ZVN0YXRlKCkge1xuICAgIHRoaXMuc2V0U3R5bGUoYnV0dG9uQWN0aXZlU3R5bGUpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBidXR0b25UZXh0SG92ZXJTdHlsZSA9IHsgZm9udFNpemU6ICcxNHB4JywgY29sb3I6IFN0eWxlcy5kZXRhaWxMaWdodENvbG9yIH07XG5leHBvcnQgY29uc3QgYnV0dG9uVGV4dFJlc3RTdHlsZSA9IHsgZm9udFNpemU6ICcxNHB4JywgY29sb3I6IFN0eWxlcy5idXR0b25UZXh0Q29sb3IgfTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrOiAoKSA9PiB2b2lkLCB3PzogbnVtYmVyLCBoPzogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHRleHRFbGVtZW50ID0gc2NlbmUuYWRkLnRleHQoeCwgeSwgdGV4dCwgYnV0dG9uVGV4dFJlc3RTdHlsZSkuc2V0T3JpZ2luKDAsIDApO1xuICBjb25zdCB3aWR0aCA9IHcgfHwgdGV4dEVsZW1lbnQud2lkdGggKyBTdHlsZXMub2Zmc2V0ICogMjtcbiAgY29uc3QgaGVpZ2h0ID0gaCB8fCB0ZXh0RWxlbWVudC5oZWlnaHQgKyBTdHlsZXMub2Zmc2V0ICogMjtcblxuICBjb25zdCBib3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgY29uc3QgdG9wTGluZSA9IHNjZW5lLmFkZC5saW5lKDAsIDAsIHggLSAxLCB5LCB4ICsgd2lkdGgsIHksIFN0eWxlcy5kZXRhaWxMaWdodENvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IGxlZnRMaW5lID0gc2NlbmUuYWRkLmxpbmUoMCwgMCwgeCwgeSAtIDEsIHgsIHkgKyBoZWlnaHQgKyAxLCBTdHlsZXMuZGV0YWlsTGlnaHRDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuICBjb25zdCByaWdodExpbmUgPSBzY2VuZS5hZGQubGluZSgwLCAwLCB4ICsgd2lkdGgsIHkgLSAxLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQgKyAxLCBTdHlsZXMuZGV0YWlsRGFya0NvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IGJvdHRvbUxpbmUgPSBzY2VuZS5hZGQubGluZSgwLCAwLCB4ICsgMSwgeSArIGhlaWdodCwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCBTdHlsZXMuZGV0YWlsRGFya0NvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG5cbiAgdGV4dEVsZW1lbnQuc2V0RGVwdGgoMSk7XG5cbiAgdGV4dEVsZW1lbnQuc2V0WCgoKGJveC53aWR0aCAtIHRleHRFbGVtZW50LndpZHRoKSAvIDIpICsgYm94LngpO1xuICB0ZXh0RWxlbWVudC5zZXRZKCgoYm94LmhlaWdodCAtIHRleHRFbGVtZW50LmhlaWdodCkgLyAyKSArIGJveC55KTtcblxuICBjb25zdCBtb3VzZUhhbmRsZXJCb3ggPSBzY2VuZS5hZGQucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgsIDApLnNldE9yaWdpbigwLCAwKS5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSk7XG4gIG1vdXNlSGFuZGxlckJveC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XG4gICAgdGV4dEVsZW1lbnQuc2V0U3R5bGUoYnV0dG9uVGV4dEhvdmVyU3R5bGUpXG4gICAgYm94LnNldEZpbGxTdHlsZShTdHlsZXMuYmFja2dyb3VuZENvbG9ySGV4KVxuICB9KTtcbiAgbW91c2VIYW5kbGVyQm94Lm9uKCdwb2ludGVyb3V0JywgKCkgPT4ge1xuICAgIHRleHRFbGVtZW50LnNldFN0eWxlKGJ1dHRvblRleHRSZXN0U3R5bGUpXG4gICAgYm94LnNldEZpbGxTdHlsZShTdHlsZXMuYmFja2dyb3VuZENvbG9ySGV4KVxuICB9KTtcbiAgbW91c2VIYW5kbGVyQm94Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICB0ZXh0RWxlbWVudC5zZXRTdHlsZShidXR0b25UZXh0SG92ZXJTdHlsZSlcbiAgICBib3guc2V0RmlsbFN0eWxlKFN0eWxlcy5kZXRhaWxEYXJrQ29sb3JIZXgpXG5cbiAgfSk7XG4gIG1vdXNlSGFuZGxlckJveC5vbigncG9pbnRlcnVwb3V0c2lkZScsICgpID0+IHtcbiAgICB0ZXh0RWxlbWVudC5zZXRTdHlsZShidXR0b25UZXh0SG92ZXJTdHlsZSk7XG4gICAgYm94LnNldEZpbGxTdHlsZShTdHlsZXMuYmFja2dyb3VuZENvbG9ySGV4KVxuXG4gIH0pO1xuICBtb3VzZUhhbmRsZXJCb3gub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICB0ZXh0RWxlbWVudC5zZXRTdHlsZShidXR0b25UZXh0SG92ZXJTdHlsZSk7XG4gICAgYm94LnNldEZpbGxTdHlsZShTdHlsZXMuYmFja2dyb3VuZENvbG9ySGV4KVxuXG4gIH0pO1xuICBtb3VzZUhhbmRsZXJCb3gub24oJ3BvaW50ZXJ1cCcsIG9uQ2xpY2spO1xuXG4gIHJldHVybiBbXG4gICAgYm94LFxuICAgIHRleHRFbGVtZW50LFxuICAgIHRvcExpbmUsXG4gICAgbGVmdExpbmUsXG4gICAgcmlnaHRMaW5lLFxuICAgIGJvdHRvbUxpbmUsXG4gICAgbW91c2VIYW5kbGVyQm94LFxuICBdO1xufTtcbiIsImltcG9ydCAqIGFzIEN1bHREb21haW4gZnJvbSAnc3JjL2RvbWFpbi9jdWx0JztcbmltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5pbXBvcnQgeyBhZGRSZWN0YW5nbGUgfSBmcm9tICdzcmMvY29tcG9uZW50cy9yZWN0YW5nbGUnO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvYnV0dG9uJztcbmltcG9ydCB7IERvbWFpbkV2ZW50cyB9IGZyb20gJ3NyYy9kb21haW4nO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRCb3ggfSBmcm9tICcuLi9pbnB1dC1ib3gnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ3VsdEludGVyZmFjZSA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCBkb21haW5TdGF0ZTogQ3VsdERvbWFpbi5DdWx0RG9tYWluU3RhdGUpID0+IHtcbiAgY29uc3QgY3VsdENvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoMCwgMCk7XG5cbiAgY3JlYXRlQ3VsdEluZm8oc2NlbmUsIGN1bHRDb250YWluZXIsIGRvbWFpblN0YXRlKTtcbiAgY3JlYXRlQ3VsdE9wdGlvbnMoc2NlbmUsIGN1bHRDb250YWluZXIpO1xuICBjcmVhdGVDdWx0SGFwcGluZXNzTWV0ZXIoc2NlbmUsIGN1bHRDb250YWluZXIsIGRvbWFpblN0YXRlKTtcbiAgY3JlYXRlQ3VsdFN1Z2dlc3RlZERvbmF0aW9uSW5wdXQoc2NlbmUsIGN1bHRDb250YWluZXIsIGRvbWFpblN0YXRlKTtcblxuICByZXR1cm4gY3VsdENvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGluZm9Sb3dTdHlsZSA9IFN0eWxlcy5saXN0SXRlbVN0eWxlO1xuXG5jb25zdCBpbmZvUm93VGV4dFggPSAyMDtcbmNvbnN0IGluZm9Sb3dWYWx1ZVggPSA0NTA7XG5cbmNvbnN0IGluZm9Sb3dTdGFydFkgPSBTdHlsZXMuY3VsdFBhZ2UuZm9sbG93ZXJMaXN0LnkgKyBTdHlsZXMub2Zmc2V0O1xuXG5jb25zdCBjcmVhdGVDdWx0SW5mbyA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCBjb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIsIGRvbWFpblN0YXRlOiBDdWx0RG9tYWluLkN1bHREb21haW5TdGF0ZSkgPT4ge1xuICBjb250YWluZXIuYWRkKGFkZFJlY3RhbmdsZShzY2VuZSxcbiAgICBTdHlsZXMuY3VsdFBhZ2UuZm9sbG93ZXJMaXN0LngsXG4gICAgU3R5bGVzLmN1bHRQYWdlLmZvbGxvd2VyTGlzdC55LFxuICAgIFN0eWxlcy5jdWx0UGFnZS5mb2xsb3dlckxpc3Qud2lkdGgsXG4gICAgU3R5bGVzLmN1bHRQYWdlLmZvbGxvd2VyTGlzdC5oZWlnaHQsXG4gICAgU3R5bGVzLmZvcmVncm91bmRDb2xvckhleCxcbiAgKSk7XG5cbiAgY29udGFpbmVyLmFkZChbXG4gICAgc2NlbmUuYWRkLnRleHQoaW5mb1Jvd1RleHRYLCBpbmZvUm93U3RhcnRZLCAnRm9sbG93ZXJzJywgaW5mb1Jvd1N0eWxlKSxcbiAgICBzY2VuZS5hZGQudGV4dChpbmZvUm93VGV4dFgsIGluZm9Sb3dTdGFydFkgKyAoU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogMSksICdDYXBhY2l0eScsIGluZm9Sb3dTdHlsZSksXG4gICAgc2NlbmUuYWRkLnRleHQoaW5mb1Jvd1RleHRYLCBpbmZvUm93U3RhcnRZICsgKFN0eWxlcy5saW5lSXRlbUhlaWdodCAqIDIpLCAnTmV3IEZvbGxvd2VycyBwZXIgVGljaycsIGluZm9Sb3dTdHlsZSksXG4gICAgc2NlbmUuYWRkLnRleHQoaW5mb1Jvd1RleHRYLCBpbmZvUm93U3RhcnRZICsgKFN0eWxlcy5saW5lSXRlbUhlaWdodCAqIDMpLCAnRG9uYXRpb25zIHBlciBUaWNrJywgaW5mb1Jvd1N0eWxlKSxcbiAgXSlcblxuICBjb25zdCBmb2xsb3dlcnNWYWx1ZSA9IHNjZW5lLmFkZC50ZXh0KGluZm9Sb3dWYWx1ZVgsIGluZm9Sb3dTdGFydFksIGRvbWFpblN0YXRlLmZvbGxvd2Vycy50b0ZpeGVkKDIpLCBpbmZvUm93U3R5bGUpO1xuICBjb25zdCBjYXBhY2l0eVZhbHVlID0gc2NlbmUuYWRkLnRleHQoaW5mb1Jvd1ZhbHVlWCwgaW5mb1Jvd1N0YXJ0WSArIChTdHlsZXMubGluZUl0ZW1IZWlnaHQgKiAxKSwgYCR7ZG9tYWluU3RhdGUuY2FwYWNpdHl9YCwgaW5mb1Jvd1N0eWxlKTtcbiAgY29uc3QgZm9sbG93ZXJzUGVyVGlja1ZhbHVlID0gc2NlbmUuYWRkLnRleHQoaW5mb1Jvd1ZhbHVlWCwgaW5mb1Jvd1N0YXJ0WSArIChTdHlsZXMubGluZUl0ZW1IZWlnaHQgKiAyKSwgZG9tYWluU3RhdGUuYWN0dWFsTmV3Rm9sbG93ZXJzUGVyVGljay50b0ZpeGVkKDIpLCBpbmZvUm93U3R5bGUpO1xuICBjb25zdCBkb25hdGlvbnNQZXJUaWNrVmFsdWUgPSBzY2VuZS5hZGQudGV4dChpbmZvUm93VmFsdWVYLCBpbmZvUm93U3RhcnRZICsgKFN0eWxlcy5saW5lSXRlbUhlaWdodCAqIDMpLCAoQ3VsdERvbWFpbi5jYWxjdWxhdGVEb25hdGlvblBlclRpY2soZG9tYWluU3RhdGUpKS50b0ZpeGVkKDIpLCBpbmZvUm93U3R5bGUpO1xuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuZm9sbG93ZXJDb3VudENoYW5nZWQsICgpID0+IHtcbiAgICBmb2xsb3dlcnNWYWx1ZS50ZXh0ID0gZG9tYWluU3RhdGUuZm9sbG93ZXJzLnRvRml4ZWQoMik7XG4gICAgZG9uYXRpb25zUGVyVGlja1ZhbHVlLnRleHQgPSAoZG9tYWluU3RhdGUuZm9sbG93ZXJzICogZG9tYWluU3RhdGUuc3VnZ2VzdGVkRG9uYXRpb24pLnRvRml4ZWQoMik7XG4gIH0pO1xuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuY3VsdENhcGFjaXR5Q2hhbmdlZCwgKCkgPT4ge1xuICAgIGNhcGFjaXR5VmFsdWUudGV4dCA9IGRvbWFpblN0YXRlLmNhcGFjaXR5LnRvU3RyaW5nKCk7XG4gIH0pO1xuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuZm9sbG93ZXJzUGVyVGlja0NoYW5nZWQsICgpID0+IHtcbiAgICBmb2xsb3dlcnNQZXJUaWNrVmFsdWUudGV4dCA9IGRvbWFpblN0YXRlLmFjdHVhbE5ld0ZvbGxvd2Vyc1BlclRpY2sudG9GaXhlZCgyKTtcbiAgfSk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5zdWdnZXN0ZWREb25hdGlvbkNoYW5nZWQsICgpID0+IHtcbiAgICBkb25hdGlvbnNQZXJUaWNrVmFsdWUudGV4dCA9IChDdWx0RG9tYWluLmNhbGN1bGF0ZURvbmF0aW9uUGVyVGljayhkb21haW5TdGF0ZSkpLnRvRml4ZWQoMik7XG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hZGQoW2ZvbGxvd2Vyc1ZhbHVlLCBjYXBhY2l0eVZhbHVlLCBmb2xsb3dlcnNQZXJUaWNrVmFsdWUsIGRvbmF0aW9uc1BlclRpY2tWYWx1ZV0pO1xufTtcblxuY29uc3Qgb3B0aW9uc1Jvd1RleHRYID0gU3R5bGVzLmN1bHRQYWdlLm9wdGlvbnMubGFiZWxYO1xuY29uc3Qgb3B0aW9uc1Jvd0J1dHRvblggPSBTdHlsZXMuY3VsdFBhZ2Uub3B0aW9ucy5idXR0b25YO1xuXG5jb25zdCBvcHRpb25zUm93U3RhcnRZID0gU3R5bGVzLmN1bHRQYWdlLmZvbGxvd2VyTGlzdC55ICsgU3R5bGVzLm9mZnNldDtcbmNvbnN0IGJ1dHRvbk9mZnNldEhlaWdodCA9IFN0eWxlcy5jdWx0UGFnZS5vcHRpb25zLmJ1dHRvbk9mZnNldEhlaWdodDtcblxuY29uc3QgY3JlYXRlQ3VsdE9wdGlvbnMgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyKSA9PiB7XG4gIGNvbnRhaW5lci5hZGQoW1xuICAgIHNjZW5lLmFkZC50ZXh0KG9wdGlvbnNSb3dUZXh0WCxTdHlsZXMub2Zmc2V0ICsgb3B0aW9uc1Jvd1N0YXJ0WSwgJ0J1aWxkIFByb21vdGlvbmFsIFdlYnNpdGUnLCBTdHlsZXMuY3VsdFBhZ2Uub3B0aW9ucy5sYWJlbFN0eWxlKSxcbiAgICAuLi5jcmVhdGVCdXR0b24oc2NlbmUsIG9wdGlvbnNSb3dCdXR0b25YLCBvcHRpb25zUm93U3RhcnRZLCAnMSwwMDAsMDAwJywgKCkgPT4geyB9KSxcblxuICAgIHNjZW5lLmFkZC50ZXh0KG9wdGlvbnNSb3dUZXh0WCxTdHlsZXMub2Zmc2V0ICsgb3B0aW9uc1Jvd1N0YXJ0WSArIGJ1dHRvbk9mZnNldEhlaWdodCAqIDEsICdDb25zdHJ1Y3QgQ2h1cmNoJywgU3R5bGVzLmN1bHRQYWdlLm9wdGlvbnMubGFiZWxTdHlsZSksXG4gICAgLi4uY3JlYXRlQnV0dG9uKHNjZW5lLCBvcHRpb25zUm93QnV0dG9uWCwgb3B0aW9uc1Jvd1N0YXJ0WSArIGJ1dHRvbk9mZnNldEhlaWdodCAqIDEsICczLDAwMCwwMDAnLCAoKSA9PiB7IH0pLFxuXG4gICAgc2NlbmUuYWRkLnRleHQob3B0aW9uc1Jvd1RleHRYLFN0eWxlcy5vZmZzZXQgKyBvcHRpb25zUm93U3RhcnRZICsgYnV0dG9uT2Zmc2V0SGVpZ2h0ICogMiwgJ0J1aWxkIENvbXBsZXgnLCBTdHlsZXMuY3VsdFBhZ2Uub3B0aW9ucy5sYWJlbFN0eWxlKSxcbiAgICAuLi5jcmVhdGVCdXR0b24oc2NlbmUsIG9wdGlvbnNSb3dCdXR0b25YLCBvcHRpb25zUm93U3RhcnRZICsgYnV0dG9uT2Zmc2V0SGVpZ2h0ICogMiwgJzE1LDAwMCwwMDAnLCAoKSA9PiB7IH0pLFxuICBdKTtcblxufTtcblxuY29uc3QgY3JlYXRlQ3VsdEhhcHBpbmVzc01ldGVyID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciwgZG9tYWluU3RhdGU6IEN1bHREb21haW4uQ3VsdERvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRIYXBwaW5lc3NNZXRlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoU3R5bGVzLmN1bHRQYWdlLmhhcHBpbmVzcy54ICsgU3R5bGVzLm9mZnNldCAqIDAuNSwgU3R5bGVzLmN1bHRQYWdlLmhhcHBpbmVzcy5tZXRlclkgKyBTdHlsZXMub2Zmc2V0ICogMC41LCAxLCBTdHlsZXMuY3VsdFBhZ2UuaGFwcGluZXNzLm1ldGVySGVpZ2h0IC0gU3R5bGVzLm9mZnNldCwgMHhGRjAwMDApLnNldE9yaWdpbigwLCAwKTtcbiAgc2V0SGFwcGluZXNzTWV0ZXJXaWR0aChjdXJyZW50SGFwcGluZXNzTWV0ZXIsIGRvbWFpblN0YXRlKTtcblxuICBkb21haW5TdGF0ZS5ldmVudHMub24oRG9tYWluRXZlbnRzLmN1bHRIYXBwaW5lc3NDaGFuZ2VkLCAoKSA9PiB7XG4gICAgc2V0SGFwcGluZXNzTWV0ZXJXaWR0aChjdXJyZW50SGFwcGluZXNzTWV0ZXIsIGRvbWFpblN0YXRlKTtcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFkZChbXG4gICAgc2NlbmUuYWRkLnRleHQoU3R5bGVzLmN1bHRQYWdlLmhhcHBpbmVzcy54LCBTdHlsZXMuY3VsdFBhZ2UuaGFwcGluZXNzLmxhYmVsWSwgJ0ZvbGxvd2VyIEhhcHBpbmVzcycsIFN0eWxlcy5jdWx0UGFnZS5vcHRpb25zLmxhYmVsU3R5bGUpLFxuICAgIC4uLmFkZFJlY3RhbmdsZShzY2VuZSwgU3R5bGVzLmN1bHRQYWdlLmhhcHBpbmVzcy54LCBTdHlsZXMuY3VsdFBhZ2UuaGFwcGluZXNzLm1ldGVyWSwgU3R5bGVzLmN1bHRQYWdlLmhhcHBpbmVzcy5tZXRlcldpZHRoLCBTdHlsZXMuY3VsdFBhZ2UuaGFwcGluZXNzLm1ldGVySGVpZ2h0LCBTdHlsZXMuZm9yZWdyb3VuZENvbG9ySGV4KSxcbiAgICBjdXJyZW50SGFwcGluZXNzTWV0ZXIsXG4gIF0pO1xufTtcblxuY29uc3Qgc2V0SGFwcGluZXNzTWV0ZXJXaWR0aCA9IChtZXRlcjogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSwgZG9tYWluU3RhdGU6IEN1bHREb21haW4uQ3VsdERvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnN0IGlubmVyTWV0ZXJXaWR0aCA9IFN0eWxlcy5jdWx0UGFnZS5oYXBwaW5lc3MubWV0ZXJXaWR0aCAtIFN0eWxlcy5vZmZzZXQ7XG5cbiAgbWV0ZXIud2lkdGggPSBpbm5lck1ldGVyV2lkdGggKiBkb21haW5TdGF0ZS5oYXBwaW5lc3MgKiAwLjAxIHx8IDE7IC8vIEFsd2F5cyBoYXZlIHNvbWUgYmFyIHNob3dpbmdcbiAgbWV0ZXIuZmlsbENvbG9yID0gZG9tYWluU3RhdGUuaGFwcGluZXNzID4gNzBcbiAgICA/IDB4MDBGRjAwXG4gICAgOiBkb21haW5TdGF0ZS5oYXBwaW5lc3MgPiA0MFxuICAgICAgPyAweEZGRjAwMFxuICAgICAgOiAweEZGMDAwMDtcbn07XG5cbmNvbnN0IGNyZWF0ZUN1bHRTdWdnZXN0ZWREb25hdGlvbklucHV0ID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciwgZG9tYWluU3RhdGU6IEN1bHREb21haW4uQ3VsdERvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnN0IGlucHV0Qm94ID0gY3JlYXRlSW5wdXRCb3goc2NlbmUsIFN0eWxlcy5jdWx0UGFnZS5kb25hdGlvbi5pbnB1dFgsIFN0eWxlcy5jdWx0UGFnZS5kb25hdGlvbi55LCAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgaW5wdXR0ZWROdW1iZXIgPSBOdW1iZXIucGFyc2VGbG9hdCh0ZXh0KTtcbiAgICAvLyBEb24ndCBjaGFuZ2UgYW55dGhpbmcgd2hlbiB0aGUgdXNlciBiYWNrc3BhY2VzIGFsbCB0aGUgd2F5IG9yIGVudGVycyAwXG4gICAgaWYgKGlucHV0dGVkTnVtYmVyID49IDEpIHtcbiAgICAgIEN1bHREb21haW4uY2hhbmdlU3VnZ2VzdGVkRG9uYXRpb24oZG9tYWluU3RhdGUsIGlucHV0dGVkTnVtYmVyKTtcbiAgICB9XG4gIH0sIDEyLCB0cnVlKTtcblxuICAvLyBUT0RPOiBFdy4gVGhpcyBzdWNrcy4gV2Ugc2hvdWxkIHJldHVybiBhbiBvYmplY3Qgb3Igc29tZXRoaW5nIGVhc2llciB0byB3b3JrIHdpdGguXG4gIChpbnB1dEJveFs2XSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dCkudGV4dCA9IGRvbWFpblN0YXRlLnN1Z2dlc3RlZERvbmF0aW9uLnRvU3RyaW5nKCk7XG5cbiAgY29udGFpbmVyLmFkZChbXG4gICAgLi4uaW5wdXRCb3gsXG4gICAgc2NlbmUuYWRkLnRleHQoU3R5bGVzLmN1bHRQYWdlLmRvbmF0aW9uLmxhYmVsWCwgU3R5bGVzLmN1bHRQYWdlLmRvbmF0aW9uLnkgKyA1LCAnXCJSZWNvbW1lbmRlZFwiIFdlZWtseSBEb25hdGlvbicsIFN0eWxlcy5jdWx0UGFnZS5vcHRpb25zLmxhYmVsU3R5bGUpLFxuICBdKTtcbn07XG4iLCJpbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnc3JjL3NoYXJlZC9zdHlsZXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRzIH0gZnJvbSAnc3JjL2RvbWFpbic7XG5pbXBvcnQgKiBhcyBTaGFyZWQgZnJvbSAnc3JjL3NoYXJlZCc7XG5pbXBvcnQgeyBhZGRSZWN0YW5nbGUgfSBmcm9tICcuLi9yZWN0YW5nbGUnO1xuaW1wb3J0ICogYXMgVHJhZGluZ0RvbWFpbiBmcm9tICdzcmMvZG9tYWluL3RyYWRpbmcnO1xuaW1wb3J0IHsgY3JlYXRlQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCB7IGNyZWF0ZUlucHV0Qm94IH0gZnJvbSAnLi4vaW5wdXQtYm94JztcbmltcG9ydCB7IEdhbWVFdmVudHMgfSBmcm9tICdzcmMvc2hhcmVkL2V2ZW50cyc7XG5cbmludGVyZmFjZSBDdXJyZW5jeURpc3BsYXlSb3cge1xuICBjb3VudHJ5OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgY3VycmVuY3k6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICB0cmVuZDogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIHwgdW5kZWZpbmVkO1xuICBhbW91bnRPd25lZDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gIGV4Y2hhbmdlUmF0ZTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG59O1xuXG5leHBvcnQgdHlwZSBDdXJyZW5jeURpc3BsYXkgPSBDdXJyZW5jeURpc3BsYXlSb3dbXTtcbmludGVyZmFjZSBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBzZWxlY3RlZEFjY291bnQ6IFRyYWRpbmdEb21haW4uQWNjb3VudDtcbiAgYnV5QW1vdW50OiBudW1iZXI7XG4gIHNlbGxBbW91bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUV4Y2hhbmdlSW50ZXJmYWNlID0gKHNjZW5lOiBHYW1lU2NlbmUsIGRvbWFpblN0YXRlOiBUcmFkaW5nRG9tYWluLlRyYWRpbmdEb21haW5TdGF0ZSkgPT4ge1xuICBjb25zdCBleGNoYW5nZUNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoMCwgMCk7XG4gIHNjZW5lLmV2ZW50cy5lbWl0KEdhbWVFdmVudHMuc2VsZWN0ZWRBY2NvdW50Q2hhbmdlZCwgeyBhY2NvdW50OiBkb21haW5TdGF0ZS50cmFkZUFjY291bnRzWzBdIH0pO1xuXG4gIGNyZWF0ZUluZm9JbnRlcmZhY2Uoc2NlbmUsIGV4Y2hhbmdlQ29udGFpbmVyLCBkb21haW5TdGF0ZSk7XG4gIGNyZWF0ZVRyYWRlSW50ZXJmYWNlKHNjZW5lLCBleGNoYW5nZUNvbnRhaW5lciwgZG9tYWluU3RhdGUpO1xuICBjcmVhdGVSb290SW50ZXJmYWNlKHNjZW5lLCBleGNoYW5nZUNvbnRhaW5lciwgZG9tYWluU3RhdGUpO1xuXG4gIHJldHVybiBleGNoYW5nZUNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGdldEluZm9Db2x1bW5XaWR0aCA9IChzY2VuZTogR2FtZVNjZW5lKSA9PiB7XG4gIHJldHVybiBTaGFyZWQuZ2V0R2FtZVdpZHRoKHNjZW5lKSAqIDAuNztcbn07XG5cbmNvbnN0IGdldEJ1eUNvbHVtbldpZHRoID0gKHNjZW5lOiBHYW1lU2NlbmUpID0+IHtcbiAgcmV0dXJuIFNoYXJlZC5nZXRHYW1lV2lkdGgoc2NlbmUpICogMC4wNzU7XG59O1xuXG5jb25zdCBjb2x1bW5IZWFkZXJTdHlsZSA9IHsgZm9udFNpemU6ICcxNnB4JywgY29sb3I6IFN0eWxlcy50cmFkZVBhZ2UuY3VycmVuY3lMaXN0LmhlYWRlckNvbG9yIH07XG5cbmNvbnN0IGNvdW50cnlYID0gMjA7XG5jb25zdCBjdXJyZW5jeVggPSAyMDA7XG5jb25zdCBleGNoYW5nZVJhdGVYID0gMzIwO1xuY29uc3QgdHJlbmRYID0gMzcwO1xuY29uc3QgdHJlbmRCYXNlWSA9IDIwNztcbmNvbnN0IGFtb3VudE93bmVkWCA9IDQ1MDtcbmNvbnN0IHJvb3RWYWx1ZVggPSA2MTA7XG5cbmNvbnN0IGhlYWRlckNvbHVtblkgPSAxNjA7XG5jb25zdCBmaXJzdExpbmVJdGVtWSA9IDIwMDtcblxuZnVuY3Rpb24gY3JlYXRlVHJlbmQoc2NlbmU6IEdhbWVTY2VuZSwgb2Zmc2V0WTogbnVtYmVyLCB0cmVuZDogJ3VwJyB8ICdkb3duJykge1xuICBpZiAodHJlbmQgPT09ICd1cCcpIHtcbiAgICByZXR1cm4gc2NlbmUuYWRkLmltYWdlKHRyZW5kWCwgdHJlbmRCYXNlWSArIG9mZnNldFksICd0cmVuZC11cCcpXG4gIH0gZWxzZSBpZiAodHJlbmQgPT09ICdkb3duJykge1xuICAgIHJldHVybiBzY2VuZS5hZGQuaW1hZ2UodHJlbmRYLCB0cmVuZEJhc2VZICsgb2Zmc2V0WSwgJ3RyZW5kLWRvd24nKVxuICB9XG59XG5cbmNvbnN0IGdldEN1cnJlbnRSb290VmFsdWVUZXh0ID0gKGFjY291bnQ6IFRyYWRpbmdEb21haW4uQWNjb3VudCwgbmF0aW9uOiBUcmFkaW5nRG9tYWluLk5hdGlvbikgPT4ge1xuICByZXR1cm4gU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoYWNjb3VudC5iYWxhbmNlIC8gbmF0aW9uLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSk7XG59O1xuXG5jb25zdCBjcmVhdGVJbmZvSW50ZXJmYWNlID0gKHNjZW5lOiBHYW1lU2NlbmUsIGNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciwgZG9tYWluU3RhdGU6IFRyYWRpbmdEb21haW4uVHJhZGluZ0RvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnRhaW5lci5hZGQoYWRkUmVjdGFuZ2xlKHNjZW5lLFxuICAgIFN0eWxlcy50cmFkZVBhZ2UuY3VycmVuY3lMaXN0LngsXG4gICAgU3R5bGVzLnRyYWRlUGFnZS5jdXJyZW5jeUxpc3QueSxcbiAgICBTdHlsZXMudHJhZGVQYWdlLmN1cnJlbmN5TGlzdC53aWR0aCxcbiAgICBTdHlsZXMudHJhZGVQYWdlLmN1cnJlbmN5TGlzdC5oZWlnaHQsXG4gICAgU3R5bGVzLmZvcmVncm91bmRDb2xvckhleCxcbiAgKSk7XG5cbiAgY29udGFpbmVyLmFkZChbXG4gICAgc2NlbmUuYWRkLnRleHQoY291bnRyeVgsIGhlYWRlckNvbHVtblksICdDT1VOVFJZJywgY29sdW1uSGVhZGVyU3R5bGUpLFxuICAgIHNjZW5lLmFkZC50ZXh0KGN1cnJlbmN5WCwgaGVhZGVyQ29sdW1uWSwgJ0NVUlJFTkNZJywgY29sdW1uSGVhZGVyU3R5bGUpLFxuICAgIHNjZW5lLmFkZC50ZXh0KGFtb3VudE93bmVkWCwgaGVhZGVyQ29sdW1uWSwgJ0FNVC4gT1dORUQnLCBjb2x1bW5IZWFkZXJTdHlsZSksXG4gICAgc2NlbmUuYWRkLnRleHQoZXhjaGFuZ2VSYXRlWCwgaGVhZGVyQ29sdW1uWSwgJ0VYQy4gUkFURScsIGNvbHVtbkhlYWRlclN0eWxlKSxcbiAgICBzY2VuZS5hZGQudGV4dChyb290VmFsdWVYLCBoZWFkZXJDb2x1bW5ZLCAnUk9PVCBWQUxVRScsIGNvbHVtbkhlYWRlclN0eWxlKSxcbiAgXSk7XG4gIGNvbnN0IHJvd0NsaWNrSGFuZGxlcnMgPSBbXTtcbiAgY29uc3QgYmFzaWNhbGx5SGlkZGVuID0gMC4wMDAwMDAwMDAwMDE7XG5cbiAgZG9tYWluU3RhdGUubmF0aW9ucy5mb3JFYWNoKChuYXRpb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3QgYWNjb3VudCA9IGRvbWFpblN0YXRlLnRyYWRlQWNjb3VudHMuZmluZCgoYWNjb3VudCkgPT4gYWNjb3VudC5jdXJyZW5jeS5uYW1lID09PSBuYXRpb24uY3VycmVuY3kubmFtZSk7XG4gICAgY29uc3QgeSA9IGZpcnN0TGluZUl0ZW1ZICsgKFN0eWxlcy5saW5lSXRlbUhlaWdodCAqIGluZGV4KTtcblxuICAgIGNvbnN0IGNvdW50cnkgPSBzY2VuZS5hZGQudGV4dChjb3VudHJ5WCwgeSwgbmF0aW9uLm5hbWUsIFN0eWxlcy5saXN0SXRlbVN0eWxlKTtcbiAgICBjb25zdCBjdXJyZW5jeSA9IHNjZW5lLmFkZC50ZXh0KGN1cnJlbmN5WCwgeSwgbmF0aW9uLmN1cnJlbmN5Lm5hbWUsIFN0eWxlcy5saXN0SXRlbVN0eWxlKTtcbiAgICBsZXQgdHJlbmQgPSBjcmVhdGVUcmVuZChzY2VuZSwgU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogaW5kZXgsIG5hdGlvbi5jdXJyZW5jeS50cmVuZCk7XG4gICAgY29uc3QgYW1vdW50T3duZWQgPSBzY2VuZS5hZGQudGV4dChhbW91bnRPd25lZFgsIHksIFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KGFjY291bnQuYmFsYW5jZSksIFN0eWxlcy5saXN0SXRlbVN0eWxlKTtcbiAgICBjb25zdCBleGNoYW5nZVJhdGUgPSBzY2VuZS5hZGQudGV4dChleGNoYW5nZVJhdGVYLCB5LCBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShuYXRpb24uY3VycmVuY3kuZXhjaGFuZ2VSYXRlKSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGNvbnN0IHJvb3RWYWx1ZSA9IHNjZW5lLmFkZC50ZXh0KHJvb3RWYWx1ZVgsIHksIGdldEN1cnJlbnRSb290VmFsdWVUZXh0KGFjY291bnQsIG5hdGlvbiksIFN0eWxlcy5saXN0SXRlbVN0eWxlKTtcbiAgICBjb25zdCByb3dDbGlja0hhbmRsZXIgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKFN0eWxlcy5vZmZzZXQgKyAxLCB5IC0gNywgU3R5bGVzLnRyYWRlUGFnZS5jdXJyZW5jeUxpc3Qud2lkdGggLSAyLCBTdHlsZXMubGluZUl0ZW1IZWlnaHQsIFN0eWxlcy50cmFkZVBhZ2Uuc2VsZWN0ZWRMaW5lSXRlbUhleCwgMC41KS5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSkuc2V0T3JpZ2luKDAsIDApO1xuICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgIC8vIGRlZmF1bHRpbmcgdGhlIGZpcnN0IGNvdW50cnkgLyBjdXJyZW5jeSB0byBzZWxlY3RlZCBoZXJlIGFuZCBpbiB0aGUgdHJhZGluZyBzdGF0ZVxuICAgICAgcm93Q2xpY2tIYW5kbGVyLmFscGhhID0gYmFzaWNhbGx5SGlkZGVuO1xuICAgIH1cbiAgICByb3dDbGlja0hhbmRsZXJzLnB1c2gocm93Q2xpY2tIYW5kbGVyKTtcblxuICAgIHJvd0NsaWNrSGFuZGxlci5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgICAgc2NlbmUuZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5zZWxlY3RlZEFjY291bnRDaGFuZ2VkLCB7IGFjY291bnQsIHJvd0NsaWNrSGFuZGxlciB9KVxuICAgIH0pO1xuXG4gICAgY29udGFpbmVyLmFkZChbY291bnRyeSwgY3VycmVuY3ksIHRyZW5kLCBhbW91bnRPd25lZCwgZXhjaGFuZ2VSYXRlLCByb290VmFsdWUsIHJvd0NsaWNrSGFuZGxlcl0pO1xuXG4gICAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5hY2NvdW50QmFsYW5jZUNoYW5nZWQsICgpID0+IHtcbiAgICAgIGFtb3VudE93bmVkLnNldFRleHQoU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoYWNjb3VudC5iYWxhbmNlKSk7XG4gICAgICByb290VmFsdWUuc2V0VGV4dChnZXRDdXJyZW50Um9vdFZhbHVlVGV4dChhY2NvdW50LCBuYXRpb24pKTtcbiAgICB9KTtcblxuICAgIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuZXhjaGFuZ2VSYXRlc0NoYW5nZWQsICgpID0+IHtcbiAgICAgIGV4Y2hhbmdlUmF0ZS5zZXRUZXh0KFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KG5hdGlvbi5jdXJyZW5jeS5leGNoYW5nZVJhdGUpKTtcbiAgICAgIHJvb3RWYWx1ZS5zZXRUZXh0KGdldEN1cnJlbnRSb290VmFsdWVUZXh0KGFjY291bnQsIG5hdGlvbikpO1xuICAgICAgaWYgKHRyZW5kKSB7XG4gICAgICAgIHRyZW5kLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRyZW5kID0gY3JlYXRlVHJlbmQoc2NlbmUsIFN0eWxlcy5saW5lSXRlbUhlaWdodCAqIGluZGV4LCBuYXRpb24uY3VycmVuY3kudHJlbmQpO1xuICAgICAgY29udGFpbmVyLmFkZCh0cmVuZCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHNjZW5lLmV2ZW50cy5vbihHYW1lRXZlbnRzLnNlbGVjdGVkQWNjb3VudENoYW5nZWQsIChldmVudCkgPT4ge1xuXG4gICAgcm93Q2xpY2tIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICBoYW5kbGVyLmFscGhhID0gYmFzaWNhbGx5SGlkZGVuO1xuICAgIH0pO1xuXG4gICAgZXZlbnQucm93Q2xpY2tIYW5kbGVyLmFscGhhID0gMC41O1xuICB9KTtcblxufTtcblxuY29uc3QgY3JlYXRlUm9vdEludGVyZmFjZSA9IChzY2VuZTogR2FtZVNjZW5lLCBjb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIsIGRvbWFpblN0YXRlOiBUcmFkaW5nRG9tYWluLlRyYWRpbmdEb21haW5TdGF0ZSkgPT4ge1xuICBjb25zdCBib3ggPSBhZGRSZWN0YW5nbGUoc2NlbmUsIFN0eWxlcy53aWR0aCAtIFN0eWxlcy5vZmZzZXQgLSBTdHlsZXMudHJhZGVQYWdlLnVzZXJuYW1lV2lkdGgsIDYwLCBTdHlsZXMudHJhZGVQYWdlLnVzZXJuYW1lV2lkdGgsIFN0eWxlcy50cmFkZVBhZ2UudXNlcm5hbWVIZWlnaHQsIFN0eWxlcy5mb3JlZ3JvdW5kQ29sb3JIZXgpO1xuICBjb25zdCByb290SW5mb1RleHQgPSBzY2VuZS5hZGQudGV4dCg2MjUsIDcwLCAnQVZBSUxBQkxFIFJPT1QnLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSk7XG4gIGNvbnN0IHJvb3RWYWx1ZVRleHQgPSBzY2VuZS5hZGQudGV4dChyb290SW5mb1RleHQueCArIHJvb3RJbmZvVGV4dC53aWR0aCArIDMwLCByb290SW5mb1RleHQueSAtIDMsIFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KGRvbWFpblN0YXRlLnJvb3RBY2NvdW50LmJhbGFuY2UpLCBTdHlsZXMuYXZhaWxhYmxlUm9vdCk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5hY2NvdW50QmFsYW5jZUNoYW5nZWQsIChhY2NvdW50OiBUcmFkaW5nRG9tYWluLkFjY291bnQpID0+IHtcbiAgICBpZiAoYWNjb3VudC5uYW1lID09PSBkb21haW5TdGF0ZS5yb290QWNjb3VudC5uYW1lKSB7XG4gICAgICByb290VmFsdWVUZXh0LnNldFRleHQoU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoZG9tYWluU3RhdGUucm9vdEFjY291bnQuYmFsYW5jZSkpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBnZXRCdXlBbW91bnRUZXh0IChzY2VuZTogR2FtZVNjZW5lKSB7XG4gIGNvbnN0IGN1cnJlbmN5QW1vdW50ID0gU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoc2NlbmUuYnV5QW1vdW50ICogc2NlbmUuc2VsZWN0ZWRBY2NvdW50LmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSk7XG4gIGNvbnN0IGN1cnJlbmN5VHlwZSA9IHNjZW5lLnNlbGVjdGVkQWNjb3VudC5jdXJyZW5jeS5uYW1lO1xuICBjb25zdCByb290QW1vdW50ID0gU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoc2NlbmUuYnV5QW1vdW50KTtcbiAgcmV0dXJuIGBCVVkgJHtjdXJyZW5jeUFtb3VudH0gJHtjdXJyZW5jeVR5cGV9IEZPUiAke3Jvb3RBbW91bnR9IFJPT1RgXG59O1xuXG5mdW5jdGlvbiBnZXRTZWxsQW1vdW50VGV4dCAoc2NlbmU6IEdhbWVTY2VuZSkge1xuICBjb25zdCBjdXJyZW5jeUFtb3VudCA9IFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KHNjZW5lLnNlbGxBbW91bnQpO1xuICBjb25zdCBjdXJyZW5jeVR5cGUgPSBzY2VuZS5zZWxlY3RlZEFjY291bnQuY3VycmVuY3kubmFtZTtcbiAgY29uc3Qgcm9vdEFtb3VudCA9IFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KHNjZW5lLnNlbGxBbW91bnQgLyBzY2VuZS5zZWxlY3RlZEFjY291bnQuY3VycmVuY3kuZXhjaGFuZ2VSYXRlKTtcbiAgcmV0dXJuIGBTRUxMICR7Y3VycmVuY3lBbW91bnR9ICR7Y3VycmVuY3lUeXBlfSBGT1IgJHtyb290QW1vdW50fSBST09UYFxufTtcblxuY29uc3QgY3JlYXRlVHJhZGVJbnRlcmZhY2UgPSAoc2NlbmU6IEdhbWVTY2VuZSwgY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyLCBkb21haW5TdGF0ZTogVHJhZGluZ0RvbWFpbi5UcmFkaW5nRG9tYWluU3RhdGUpID0+IHtcbiAgY29uc3QgYnV5Q29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLCAwKTtcbiAgY29uc3Qgc2VsbENvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoMCwgMCk7XG4gIGNvbnN0IGluZmx1ZW5jZUNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoMCwgMCk7XG5cbiAgY29uc3QgYnV5VGFiID0gc2NlbmUuYWRkLnRleHQoU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS54LCBTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLmV4Y2hhbmdlVGFiWSwgJ0JVWScsIFN0eWxlcy5zZWxlY3RlZFRhYik7XG4gIGJ1eVRhYi5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSk7XG4gIGJ1eVRhYi5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgIHNlbGxUYWIuc2V0U3R5bGUoU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICAgIGluZmx1ZW5jZVRhYi5zZXRTdHlsZShTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gICAgYnV5VGFiLnNldFN0eWxlKFN0eWxlcy5zZWxlY3RlZFRhYik7XG4gICAgaW5mbHVlbmNlQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgIHNlbGxDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgYnV5Q29udGFpbmVyLnNldFZpc2libGUodHJ1ZSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNlbGxUYWIgPSBzY2VuZS5hZGQudGV4dChidXlUYWIueCArIGJ1eVRhYi53aWR0aCArIFN0eWxlcy5vZmZzZXQgKiAyLCBTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLmV4Y2hhbmdlVGFiWSwgJ1NFTEwnLCBTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gIHNlbGxUYWIuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgYnV5VGFiLnNldFN0eWxlKFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgICBpbmZsdWVuY2VUYWIuc2V0U3R5bGUoU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICAgIHNlbGxUYWIuc2V0U3R5bGUoU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgICBpbmZsdWVuY2VDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgYnV5Q29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgIHNlbGxDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgfSk7XG5cbiAgY29uc3QgaW5mbHVlbmNlVGFiID0gc2NlbmUuYWRkLnRleHQoc2VsbFRhYi54ICsgc2VsbFRhYi53aWR0aCArIFN0eWxlcy5vZmZzZXQgKiAyLCBTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLmV4Y2hhbmdlVGFiWSwgJ0lORkxVRU5DRScsIFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgaW5mbHVlbmNlVGFiLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KS5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgIGluZmx1ZW5jZVRhYi5zZXRTdHlsZShTdHlsZXMuc2VsZWN0ZWRUYWIpO1xuICAgIGJ1eVRhYi5zZXRTdHlsZShTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gICAgc2VsbFRhYi5zZXRTdHlsZShTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gICAgaW5mbHVlbmNlQ29udGFpbmVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgYnV5Q29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgIHNlbGxDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gIH0pO1xuXG4gIGNvbnN0IHNwZW5kQW1vdW50VGV4dCA9IHNjZW5lLmFkZC50ZXh0KFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UueCwgMjEwLCAnQlVZIEFNT1VOVCcsIFN0eWxlcy5saXN0SXRlbVN0eWxlKTtcbiAgY29uc3QgYnV5SW5wdXRCb3ggPSBjcmVhdGVJbnB1dEJveChzY2VuZSwgU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS5pbnB1dEJveFgsIDE5NSwgKHRleHQpID0+IHtcbiAgICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh0ZXh0KTtcbiAgICBpZiAoIU51bWJlci5pc05hTihhbW91bnQpKSB7XG4gICAgICBzY2VuZS5ldmVudHMuZW1pdChHYW1lRXZlbnRzLmJ1eUFtb3VudENoYW5nZWQsIGFtb3VudCk7XG4gICAgfVxuICB9LCB1bmRlZmluZWQsIHRydWUpO1xuICBjb25zdCBidXlBbW91bnRUZXh0ID0gc2NlbmUuYWRkLnRleHQoU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS54LCAyNjAsIGdldEJ1eUFtb3VudFRleHQoc2NlbmUpLCBTdHlsZXMudHJhZGVBbW91bnRUZXh0KTtcblxuICBidXlDb250YWluZXIuYWRkKFtcbiAgICBzcGVuZEFtb3VudFRleHQsXG4gICAgLi4uYnV5SW5wdXRCb3gsXG4gICAgYnV5QW1vdW50VGV4dCxcbiAgXSk7XG5cbiAgY29uc3Qgc2VsbEFtb3VudExhYmVsID0gc2NlbmUuYWRkLnRleHQoU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS54LCAyMTAsICdTRUxMIEFNT1VOVCcsIFN0eWxlcy5saXN0SXRlbVN0eWxlKTtcbiAgY29uc3Qgc2VsbElucHV0Qm94ID0gY3JlYXRlSW5wdXRCb3goc2NlbmUsIFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UuaW5wdXRCb3hYLCAxOTUsICh0ZXh0KSA9PiB7XG4gICAgY29uc3QgYW1vdW50ID0gTnVtYmVyLnBhcnNlRmxvYXQodGV4dCk7XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4oYW1vdW50KSkge1xuICAgICAgc2NlbmUuZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5zZWxsQW1vdW50Q2hhbmdlZCwgYW1vdW50KTtcbiAgICB9XG4gIH0sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgY29uc3Qgc2VsbEFtb3VudFRleHQgPSBzY2VuZS5hZGQudGV4dChTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLngsIDI2MCwgZ2V0U2VsbEFtb3VudFRleHQoc2NlbmUpLCBTdHlsZXMudHJhZGVBbW91bnRUZXh0KTtcblxuICBzZWxsQ29udGFpbmVyLmFkZChbXG4gICAgc2VsbEFtb3VudExhYmVsLFxuICAgIC4uLnNlbGxJbnB1dEJveCxcbiAgICBzZWxsQW1vdW50VGV4dCxcbiAgXSk7XG5cbiAgY29uc3QgYnV5ID0gKCkgPT4ge1xuICAgIGlmIChzY2VuZS5zZWxlY3RlZEFjY291bnQpIHtcbiAgICAgIFRyYWRpbmdEb21haW4ucmVjb3JkVHJhZGUoZG9tYWluU3RhdGUucm9vdEFjY291bnQsIHNjZW5lLnNlbGVjdGVkQWNjb3VudCwgc2NlbmUuYnV5QW1vdW50LCBzY2VuZS5zZWxlY3RlZEFjY291bnQuY3VycmVuY3kuZXhjaGFuZ2VSYXRlLCBkb21haW5TdGF0ZSlcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNlbGwgPSAoKSA9PiB7XG4gICAgaWYgKHNjZW5lLnNlbGVjdGVkQWNjb3VudCkge1xuICAgICAgY29uc3QgZXhjaGFuZ2VSYXRlID0gZG9tYWluU3RhdGUucm9vdEFjY291bnQuY3VycmVuY3kuZXhjaGFuZ2VSYXRlIC8gc2NlbmUuc2VsZWN0ZWRBY2NvdW50LmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcbiAgICAgIFRyYWRpbmdEb21haW4ucmVjb3JkVHJhZGUoc2NlbmUuc2VsZWN0ZWRBY2NvdW50LCBkb21haW5TdGF0ZS5yb290QWNjb3VudCwgc2NlbmUuc2VsbEFtb3VudCwgZXhjaGFuZ2VSYXRlLCBkb21haW5TdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgc2NlbmUuZXZlbnRzLm9uKEdhbWVFdmVudHMuc2VsZWN0ZWRBY2NvdW50Q2hhbmdlZCwgKGV2ZW50KSA9PiB7XG4gICAgYnV5QW1vdW50VGV4dC50ZXh0ID0gZ2V0QnV5QW1vdW50VGV4dChzY2VuZSk7XG4gICAgc2VsbEFtb3VudFRleHQudGV4dCA9IGdldFNlbGxBbW91bnRUZXh0KHNjZW5lKTtcbiAgfSk7XG5cbiAgc2NlbmUuZXZlbnRzLm9uKEdhbWVFdmVudHMuYnV5QW1vdW50Q2hhbmdlZCwgKGV2ZW50KSA9PiB7XG4gICAgYnV5QW1vdW50VGV4dC50ZXh0ID0gZ2V0QnV5QW1vdW50VGV4dChzY2VuZSk7XG4gIH0pO1xuXG4gIHNjZW5lLmV2ZW50cy5vbihHYW1lRXZlbnRzLnNlbGxBbW91bnRDaGFuZ2VkLCAoZXZlbnQpID0+IHtcbiAgICBzZWxsQW1vdW50VGV4dC50ZXh0ID0gZ2V0U2VsbEFtb3VudFRleHQoc2NlbmUpO1xuICB9KTtcblxuICBkb21haW5TdGF0ZS5ldmVudHMub24oRG9tYWluRXZlbnRzLmV4Y2hhbmdlUmF0ZXNDaGFuZ2VkLCAoZXZlbnQpID0+IHtcbiAgICBidXlBbW91bnRUZXh0LnRleHQgPSBnZXRCdXlBbW91bnRUZXh0KHNjZW5lKTtcbiAgICBzZWxsQW1vdW50VGV4dC50ZXh0ID0gZ2V0U2VsbEFtb3VudFRleHQoc2NlbmUpO1xuICB9KTtcblxuICBidXlDb250YWluZXIuYWRkKGNyZWF0ZUJ1dHRvbihzY2VuZSwgU3R5bGVzLndpZHRoIC0gMTAwIC0gU3R5bGVzLm9mZnNldCwgMzAwLCAnQlVZJywgYnV5LCAxMDApKTtcbiAgc2VsbENvbnRhaW5lci5hZGQoY3JlYXRlQnV0dG9uKHNjZW5lLCBTdHlsZXMud2lkdGggLSAxMDAgLSBTdHlsZXMub2Zmc2V0LCAzMDAsICdTRUxMJywgc2VsbCwgMTAwKSk7XG5cbiAgbGV0IGluZmx1ZW5jZVkgPSAyMTA7XG4gIGNvbnN0IGluZmx1ZW5jZUJ1dHRvbldpZHRoID0gMTAwO1xuXG4gIGluZmx1ZW5jZUNvbnRhaW5lci5hZGQoc2NlbmUuYWRkLnRleHQoU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS54LCBpbmZsdWVuY2VZLCBUcmFkaW5nRG9tYWluLnN0YXJ0UnVtb3JBY3Rpb24ubmFtZSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpKTtcbiAgaW5mbHVlbmNlQ29udGFpbmVyLmFkZChjcmVhdGVCdXR0b24oc2NlbmUsIFN0eWxlcy53aWR0aCAtIGluZmx1ZW5jZUJ1dHRvbldpZHRoIC0gU3R5bGVzLm9mZnNldCwgaW5mbHVlbmNlWSAtIDEwLCBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShUcmFkaW5nRG9tYWluLnN0YXJ0UnVtb3JBY3Rpb24uY29zdCksICgpID0+IFRyYWRpbmdEb21haW4uc3RhcnRSdW1vcihkb21haW5TdGF0ZSwgc2NlbmUuc2VsZWN0ZWRBY2NvdW50KSwgaW5mbHVlbmNlQnV0dG9uV2lkdGgpKTtcbiAgaW5mbHVlbmNlWSArPSA1MDtcblxuICBpbmZsdWVuY2VDb250YWluZXIuYWRkKHNjZW5lLmFkZC50ZXh0KFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UueCwgaW5mbHVlbmNlWSwgVHJhZGluZ0RvbWFpbi5icmliZVBvbGl0aWNpYW5BY3Rpb24ubmFtZSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpKTtcbiAgaW5mbHVlbmNlQ29udGFpbmVyLmFkZChjcmVhdGVCdXR0b24oc2NlbmUsIFN0eWxlcy53aWR0aCAtIGluZmx1ZW5jZUJ1dHRvbldpZHRoIC0gU3R5bGVzLm9mZnNldCwgaW5mbHVlbmNlWSAtIDEwLCBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShUcmFkaW5nRG9tYWluLmJyaWJlUG9saXRpY2lhbkFjdGlvbi5jb3N0KSwgKCkgPT4gVHJhZGluZ0RvbWFpbi5icmliZVBvbGl0aWNpYW4oZG9tYWluU3RhdGUsIHNjZW5lLnNlbGVjdGVkQWNjb3VudCksIGluZmx1ZW5jZUJ1dHRvbldpZHRoKSk7XG4gIGluZmx1ZW5jZVkgKz0gNTA7XG5cblxuICBpbmZsdWVuY2VDb250YWluZXIuYWRkKHNjZW5lLmFkZC50ZXh0KFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UueCwgaW5mbHVlbmNlWSwgVHJhZGluZ0RvbWFpbi5yaWdFbGVjdGlvbkFjdGlvbi5uYW1lLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSkpO1xuICBpbmZsdWVuY2VDb250YWluZXIuYWRkKGNyZWF0ZUJ1dHRvbihzY2VuZSwgU3R5bGVzLndpZHRoIC0gaW5mbHVlbmNlQnV0dG9uV2lkdGggLSBTdHlsZXMub2Zmc2V0LCBpbmZsdWVuY2VZIC0gMTAsIFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KFRyYWRpbmdEb21haW4ucmlnRWxlY3Rpb25BY3Rpb24uY29zdCksICgpID0+IFRyYWRpbmdEb21haW4ucmlnRWxlY3Rpb24oZG9tYWluU3RhdGUsIHNjZW5lLnNlbGVjdGVkQWNjb3VudCksIGluZmx1ZW5jZUJ1dHRvbldpZHRoKSk7XG4gIGluZmx1ZW5jZVkgKz0gNTA7XG5cbiAgLy8gY29uc3Qgc2VsbElucHV0Qm94ID0gY3JlYXRlSW5wdXRCb3goc2NlbmUsIFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UuaW5wdXRCb3hYLCAxOTUsICh0ZXh0KSA9PiB7XG4gIC8vICAgY29uc3QgYW1vdW50ID0gTnVtYmVyLnBhcnNlRmxvYXQodGV4dCk7XG4gIC8vICAgaWYgKCFOdW1iZXIuaXNOYU4oYW1vdW50KSkge1xuICAvLyAgICAgc2NlbmUuZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5zZWxsQW1vdW50Q2hhbmdlZCwgYW1vdW50KTtcbiAgLy8gICB9XG4gIC8vIH0sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgc2VsbENvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgaW5mbHVlbmNlQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuXG4gIGNvbnRhaW5lci5hZGQoYnV5Q29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFkZChidXlUYWIpO1xuICBjb250YWluZXIuYWRkKHNlbGxDb250YWluZXIpO1xuICBjb250YWluZXIuYWRkKHNlbGxUYWIpO1xuICBjb250YWluZXIuYWRkKGluZmx1ZW5jZUNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hZGQoaW5mbHVlbmNlVGFiKTtcbn07XG4iLCJpbXBvcnQgeyBhZGRSZWN0YW5nbGUgfSBmcm9tICcuL3JlY3RhbmdsZSc7XG5pbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnc3JjL3NoYXJlZC9zdHlsZXMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlSW5wdXRCb3ggPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNhbGxiYWNrOiAodGV4dDogc3RyaW5nKSA9PiB2b2lkLCBtYXhMZW5ndGg/OiBudW1iZXIsIG51bWJlcnNPbmx5OiBib29sZWFuID0gZmFsc2UpID0+IHtcbiAgY29uc3QgdGV4dEZpZWxkU3RhdGUgPSB7XG4gICAgaXNFZGl0YWJsZTogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgcmVjdGFuZ2xlRWxlbWVudHMgPSBhZGRSZWN0YW5nbGUoc2NlbmUsIHgsIHksIFN0eWxlcy5pbnB1dEJveFdpZHRoLCAzMCwgU3R5bGVzLmZvcmVncm91bmRDb2xvckhleCk7XG4gIGNvbnN0IGN1cnNvciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoeCArIDgsIHkgKyA1LCAxMCwgMjAsIFN0eWxlcy50ZXh0Q29sb3JIZXgpLnNldE9yaWdpbigwLDApO1xuICBjdXJzb3Iuc2V0VmlzaWJsZShmYWxzZSk7XG4gIGNvbnN0IGlucHV0Qm94ID0gcmVjdGFuZ2xlRWxlbWVudHNbMF07XG4gIGlucHV0Qm94LnNldEludGVyYWN0aXZlKCk7XG5cbiAgY29uc3QgdGV4dEZpZWxkID0gc2NlbmUuYWRkLnRleHQoeCArIDUsIHkgKyBTdHlsZXMub2Zmc2V0IC8gMiwgJycsIHsgY29sb3I6IFN0eWxlcy50ZXh0Q29sb3IgfSk7XG5cbiAgc2NlbmUuaW5wdXQub24oJ3BvaW50ZXJ1cCcsIChwb2ludGVyLCBjdXJyZW50bHlPdmVyOiBhbnlbXSkgPT4ge1xuICAgIHRleHRGaWVsZFN0YXRlLmlzRWRpdGFibGUgPSBfLnNvbWUoY3VycmVudGx5T3ZlciwgKGdhbWVPYmplY3QpID0+IGdhbWVPYmplY3QgPT09IGlucHV0Qm94IHx8IGdhbWVPYmplY3QgPT09IHRleHRGaWVsZCk7XG4gICAgaWYgKHRleHRGaWVsZFN0YXRlLmlzRWRpdGFibGUpIHtcbiAgICAgIGN1cnNvci5zZXRWaXNpYmxlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJzb3Iuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBtYXhDaGFyYWN0ZXJMZW5ndGggPSBtYXhMZW5ndGggfHwgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG5cbiAgLy8ga2V5U3BhY2UgPSBzY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLlNQQUNFKTtcbiAgLy8ga2V5QmFja3NwYWNlID0gc2NlbmUuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5CQUNLU1BBQ0UpO1xuICBzY2VuZS5pbnB1dC5rZXlib2FyZC5vbigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgIGlmICghdGV4dEZpZWxkU3RhdGUuaXNFZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTnVtYmVyID0gZXZlbnQua2V5Q29kZSA9PT0gMTkwIHx8IChldmVudC5rZXlDb2RlID49IDQ4ICYmIGV2ZW50LmtleUNvZGUgPD0gNTcpO1xuICAgIGNvbnN0IGlzU3RyaW5nID0gZXZlbnQua2V5Q29kZSA9PT0gMzIgfHwgKGV2ZW50LmtleUNvZGUgPj0gNjUgJiYgZXZlbnQua2V5Q29kZSA8PSA5MCk7XG5cbiAgICBjb25zdCB2YWxpZEtleSA9IG51bWJlcnNPbmx5XG4gICAgICA/IGlzTnVtYmVyXG4gICAgICA6IGlzTnVtYmVyIHx8IGlzU3RyaW5nO1xuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDggJiYgdGV4dEZpZWxkLnRleHQubGVuZ3RoID4gMClcbiAgICB7XG4gICAgICB0ZXh0RmllbGQudGV4dCA9IHRleHRGaWVsZC50ZXh0LnN1YnN0cigwLCB0ZXh0RmllbGQudGV4dC5sZW5ndGggLSAxKTtcbiAgICAgIGN1cnNvci5zZXRYKHRleHRGaWVsZC54ICsgdGV4dEZpZWxkLndpZHRoICsgMyk7XG4gICAgICBjYWxsYmFjayh0ZXh0RmllbGQudGV4dCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRleHRGaWVsZC50ZXh0Lmxlbmd0aCA8IG1heENoYXJhY3Rlckxlbmd0aCAmJiB2YWxpZEtleSlcbiAgICB7XG4gICAgICB0ZXh0RmllbGQudGV4dCArPSBgJHtldmVudC5rZXl9YC50b1VwcGVyQ2FzZSgpO1xuICAgICAgY3Vyc29yLnNldFgodGV4dEZpZWxkLnggKyB0ZXh0RmllbGQud2lkdGggKyAzKTtcbiAgICAgIGNhbGxiYWNrKHRleHRGaWVsZC50ZXh0KTtcbiAgICB9XG5cbiAgfSk7XG4gIHJldHVybiBbXG4gICAgLi4ucmVjdGFuZ2xlRWxlbWVudHMsXG4gICAgY3Vyc29yLFxuICAgIHRleHRGaWVsZCxcbiAgXTtcbn07XG4iLCJpbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnc3JjL3NoYXJlZC9zdHlsZXMnO1xuXG5leHBvcnQgY29uc3QgYWRkSG9yaXpvbnRhbFNjcmVlbkxpbmUgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgeTogbnVtYmVyKSA9PiB7XG4gIHNjZW5lLmFkZC5saW5lKDAsIDAsIDAsIHkgKyAxLCBTdHlsZXMud2lkdGgsIHkgKyAxLCBTdHlsZXMuZGV0YWlsTGlnaHRDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuICBzY2VuZS5hZGQubGluZSgwLCAwLCAwLCB5LCBTdHlsZXMud2lkdGgsIHksIFN0eWxlcy5kZXRhaWxEYXJrQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbn1cbiIsImltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBhZGRSZWN0YW5nbGUgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBmaWxsQ29sb3I6IG51bWJlciwgZmlsbEFscGhhPzogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgZmlsbENvbG9yLCBmaWxsQWxwaGEpLnNldE9yaWdpbigwLDApO1xuICBjb25zdCB0b3BMaW5lID0gc2NlbmUuYWRkLmxpbmUoMCwgMCwgeCAtIDEsIHksIHggKyB3aWR0aCwgeSwgU3R5bGVzLmRldGFpbERhcmtDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuICBjb25zdCBsZWZ0TGluZSA9IHNjZW5lLmFkZC5saW5lKDAsIDAsIHgsIHkgLSAxLCB4LCB5ICsgaGVpZ2h0ICsgMSwgU3R5bGVzLmRldGFpbERhcmtDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuICBjb25zdCByaWdodExpbmUgPSBzY2VuZS5hZGQubGluZSgwLCAwLCB4ICsgd2lkdGgsIHkgLSAxLCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQgKyAxLCBTdHlsZXMuZGV0YWlsTGlnaHRDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuICBjb25zdCBib3R0b21MaW5lID0gc2NlbmUuYWRkLmxpbmUoMCwgMCwgeCArIDEsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCwgeSArIGhlaWdodCwgU3R5bGVzLmRldGFpbExpZ2h0Q29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcblxuICByZXR1cm4gW1xuICAgIGJveCxcbiAgICB0b3BMaW5lLFxuICAgIGxlZnRMaW5lLFxuICAgIHJpZ2h0TGluZSxcbiAgICBib3R0b21MaW5lLFxuICBdO1xufVxuIiwiaW1wb3J0ICogYXMgU2hhcmVkIGZyb20gJ3NyYy9zaGFyZWQnO1xuaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gJ3NyYy9zaGFyZWQvc3R5bGVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50cywgRG9tYWluU3RhdGUgfSBmcm9tICdzcmMvZG9tYWluJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGFkZFJlY3RhbmdsZSB9IGZyb20gJy4uL3JlY3RhbmdsZSc7XG5cbmludGVyZmFjZSBTdG9yeURpc3BsYXkge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHRleHRPYmplY3Q6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICBwb3NYOiBudW1iZXI7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRpY2tlclN0YXRlIHtcbiAgc3RvcnlRdWV1ZTogc3RyaW5nW107XG4gIHN0b3J5RGlzcGxheXM6IFN0b3J5RGlzcGxheVtdO1xuICByZWFkeVRvRGlzcGxheU5leHRTdG9yeTogYm9vbGVhbjtcbn1cblxuY29uc3QgdGlja2VyWSA9IDcxMDtcbmNvbnN0IHRpY2tlclN0b3J5WSA9IDcyNTtcbmNvbnN0IHRpY2tlckhlaWdodCA9IDUwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3c1RpY2tlciA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCBkb21haW5TdGF0ZTogRG9tYWluU3RhdGUpID0+IHtcbiAgY29uc3QgdGlja2VyU3RhdGU6IFRpY2tlclN0YXRlID0ge1xuICAgIHN0b3J5UXVldWU6IFtdLFxuICAgIHN0b3J5RGlzcGxheXM6IFtdLFxuICAgIHJlYWR5VG9EaXNwbGF5TmV4dFN0b3J5OiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCBnYW1lV2lkdGggPSBTaGFyZWQuZ2V0R2FtZVdpZHRoKHNjZW5lKTtcblxuICBhZGRSZWN0YW5nbGUoc2NlbmUsIFN0eWxlcy5vZmZzZXQsIHRpY2tlclksIGdhbWVXaWR0aCAtIFN0eWxlcy5vZmZzZXQgKiAyLCB0aWNrZXJIZWlnaHQsIFN0eWxlcy5mb3JlZ3JvdW5kQ29sb3JIZXgpO1xuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMubmF0aW9uRXZlbnRPY2N1cnJlZCwgKG5hdGlvbiwgaGVhZGxpbmUpID0+IHtcbiAgICB0aWNrZXJTdGF0ZS5zdG9yeVF1ZXVlLnB1c2goYCR7bmF0aW9uLm5hbWV9ICR7aGVhZGxpbmV9YCk7XG4gIH0pO1xuICBkb21haW5TdGF0ZS5ldmVudHMub24oRG9tYWluRXZlbnRzLm5hdGlvbkV2ZW50RW5kZWQsIChuYXRpb24sIGhlYWRsaW5lKSA9PiB7XG4gICAgaWYgKGhlYWRsaW5lKSB7XG4gICAgICB0aWNrZXJTdGF0ZS5zdG9yeVF1ZXVlLnB1c2goYCR7bmF0aW9uLm5hbWV9ICR7aGVhZGxpbmV9YCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBVc2UgdGhpcyB0byBtYWtlIHN1cmUgdGhlIG1hc2sgZG9lc24ndCBjb3ZlciB0aGUgYm9yZGVyIG9mIHRoZSB0aWNrZXJcbiAgY29uc3QgbWFza0Z1enogPSAxO1xuICBjb25zdCBsZWZ0TWFzayA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgdGlja2VyWSwgU3R5bGVzLm9mZnNldCAtIG1hc2tGdXp6LCB0aWNrZXJIZWlnaHQsIFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgY29uc3QgcmlnaHRNYXNrID0gc2NlbmUuYWRkLnJlY3RhbmdsZShnYW1lV2lkdGggLSBTdHlsZXMub2Zmc2V0ICsgbWFza0Z1enosIHRpY2tlclksIFN0eWxlcy5vZmZzZXQsIHRpY2tlckhlaWdodCwgU3R5bGVzLmJhY2tncm91bmRDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuICAvLyBUaGVzZSBtYXNrcyBhcmUgdXNlZCB0byBtYWtlIHN1cmUgdGhhdCBhIHRpY2tlciBzdG9yeSBpc24ndCB2aXNpYmxlIHVudGlsIGl0IGFjdHVhbGwgZW50ZXJzIHRoZSB0aWNrZXIgZmllbGRcbiAgbGVmdE1hc2suc2V0RGVwdGgoMTApO1xuICByaWdodE1hc2suc2V0RGVwdGgoMTApO1xuXG4gIHVwZGF0ZVN0b3JpZXMoc2NlbmUsIHRpY2tlclN0YXRlKTtcblxuICByZXR1cm4gdGlja2VyU3RhdGU7XG59O1xuXG5sZXQgcmVhZHlUb0Rpc3BsYXlOZXh0U3RvcnkgPSB0cnVlO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlU3RvcmllcyA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCB0aWNrZXJTdGF0ZTogVGlja2VyU3RhdGUpID0+IHtcbiAgY29uc3Qgc2hvdWxkQnVpbGRTdG9yeSA9IHJlYWR5VG9EaXNwbGF5TmV4dFN0b3J5ICYmICh0aWNrZXJTdGF0ZS5zdG9yeVF1ZXVlLmxlbmd0aCA+IDApO1xuICBjb25zdCBnYW1lV2lkdGggPSBTaGFyZWQuZ2V0R2FtZVdpZHRoKHNjZW5lKTtcblxuICBpZiAoc2hvdWxkQnVpbGRTdG9yeSkge1xuICAgIGNvbnN0IHRleHQgPSB0aWNrZXJTdGF0ZS5zdG9yeVF1ZXVlLnNoaWZ0KCk7XG4gICAgdGlja2VyU3RhdGUuc3RvcnlEaXNwbGF5cy5wdXNoKHsgdGV4dE9iamVjdDogc2NlbmUuYWRkLnRleHQoZ2FtZVdpZHRoLCB0aWNrZXJTdG9yeVksIHRleHQpLCB0ZXh0LCBwb3NYOiBnYW1lV2lkdGggfSk7XG4gICAgcmVhZHlUb0Rpc3BsYXlOZXh0U3RvcnkgPSBmYWxzZTtcbiAgfVxuXG4gIHRpY2tlclN0YXRlLnN0b3J5RGlzcGxheXMuZm9yRWFjaCgoc3RvcnkpID0+IHtcbiAgICBzdG9yeS50ZXh0T2JqZWN0LmRlc3Ryb3koKTtcbiAgICBzdG9yeS5wb3NYIC09IDI7XG4gICAgc3RvcnkudGV4dE9iamVjdCA9IHNjZW5lLmFkZC50ZXh0KHN0b3J5LnBvc1gsIHRpY2tlclN0b3J5WSwgc3RvcnkudGV4dCk7XG4gICAgLy8gc3RvcnkudGV4dE9iamVjdC5zZXRkZVxuICB9KTtcblxuICB0aWNrZXJTdGF0ZS5zdG9yeURpc3BsYXlzID0gdGlja2VyU3RhdGUuc3RvcnlEaXNwbGF5cy5maWx0ZXIoKHN0b3J5KSA9PiB7XG4gICAgY29uc3Qgb2ZmU2NyZWVuID0gc3RvcnkudGV4dE9iamVjdC5kaXNwbGF5V2lkdGggKyBzdG9yeS5wb3NYIDwgMDtcbiAgICBpZiAob2ZmU2NyZWVuKSB7XG4gICAgICBzdG9yeS50ZXh0T2JqZWN0LmRlc3Ryb3koKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuXG4gIGNvbnN0IHBhZGRpbmcgPSAxMDA7XG5cbiAgaWYgKHRpY2tlclN0YXRlLnN0b3J5RGlzcGxheXMubGVuZ3RoID09PSAwIHx8IF8ubGFzdCh0aWNrZXJTdGF0ZS5zdG9yeURpc3BsYXlzKS50ZXh0T2JqZWN0LmRpc3BsYXlXaWR0aCArIHBhZGRpbmcgPCBnYW1lV2lkdGggLSBfLmxhc3QodGlja2VyU3RhdGUuc3RvcnlEaXNwbGF5cykucG9zWCkge1xuICAgIHJlYWR5VG9EaXNwbGF5TmV4dFN0b3J5ID0gdHJ1ZTtcbiAgfVxufTtcbiIsImltcG9ydCB7IERvbWFpbkV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IHR5cGUgQ3VsdEluaXREYXRhID0ge1xufVxuXG5leHBvcnQgdHlwZSBDdWx0RG9tYWluU3RhdGUgPSB7XG4gIGV2ZW50czogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIsXG4gIGhhcHBpbmVzczogbnVtYmVyO1xuICBzdWdnZXN0ZWREb25hdGlvbjogbnVtYmVyO1xuICBmb2xsb3dlcnM6IG51bWJlcjtcbiAgY2FwYWNpdHk6IG51bWJlcjtcbiAgYWN0dWFsTmV3Rm9sbG93ZXJzUGVyVGljazogbnVtYmVyO1xuICBiYXNlTmV3Rm9sbG93ZXJzUGVyVGljazogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdEN1bHREb21haW5TdGF0ZSA9IChpbnB1dDogQ3VsdEluaXREYXRhLCBldmVudHM6IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyKTogQ3VsdERvbWFpblN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBldmVudHMsXG4gICAgaGFwcGluZXNzOiAxMDAsXG4gICAgZm9sbG93ZXJzOiAxLFxuICAgIGNhcGFjaXR5OiAxMCxcbiAgICBhY3R1YWxOZXdGb2xsb3dlcnNQZXJUaWNrOiAxLFxuICAgIGJhc2VOZXdGb2xsb3dlcnNQZXJUaWNrOiAxLFxuICAgIHN1Z2dlc3RlZERvbmF0aW9uOiAwLFxuICB9O1xufTtcblxuY29uc3QgRk9MTE9XRVJTX1NUQVJUX0xFQVZJTkdfVEhSRVNIT0xEID0gNDA7XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVOZXdIYXBwaW5lc3NMZXZlbCA9IChkb21haW5TdGF0ZTogQ3VsdERvbWFpblN0YXRlKSA9PiB7XG4gIHJldHVybiBkb21haW5TdGF0ZS5zdWdnZXN0ZWREb25hdGlvbiA+IDEwMCA/IDAgOiAxMDAgLSBkb21haW5TdGF0ZS5zdWdnZXN0ZWREb25hdGlvbjtcbn07XG5cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVEb25hdGlvblBlclRpY2sgPSAoZG9tYWluU3RhdGU6IEN1bHREb21haW5TdGF0ZSkgPT4ge1xuICByZXR1cm4gZG9tYWluU3RhdGUuaGFwcGluZXNzID49IEZPTExPV0VSU19TVEFSVF9MRUFWSU5HX1RIUkVTSE9MRCA/IGRvbWFpblN0YXRlLnN1Z2dlc3RlZERvbmF0aW9uICogZG9tYWluU3RhdGUuZm9sbG93ZXJzIDogMDtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZUN1cnJlbnRGb2xsb3dlcnNQZXJUaWNrID0gKGRvbWFpblN0YXRlOiBDdWx0RG9tYWluU3RhdGUpID0+IHtcbiAgaWYgKGRvbWFpblN0YXRlLmhhcHBpbmVzcyA8IEZPTExPV0VSU19TVEFSVF9MRUFWSU5HX1RIUkVTSE9MRCkge1xuICAgIGRvbWFpblN0YXRlLmFjdHVhbE5ld0ZvbGxvd2Vyc1BlclRpY2sgPSAoZG9tYWluU3RhdGUuaGFwcGluZXNzIC0gRk9MTE9XRVJTX1NUQVJUX0xFQVZJTkdfVEhSRVNIT0xEKSAqIGRvbWFpblN0YXRlLmJhc2VOZXdGb2xsb3dlcnNQZXJUaWNrO1xuICB9XG4gIGVsc2Uge1xuICAgIGRvbWFpblN0YXRlLmFjdHVhbE5ld0ZvbGxvd2Vyc1BlclRpY2sgPSBkb21haW5TdGF0ZS5iYXNlTmV3Rm9sbG93ZXJzUGVyVGljayAqIChkb21haW5TdGF0ZS5oYXBwaW5lc3MgKiAwLjAxKTtcbiAgfVxuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5lbWl0KERvbWFpbkV2ZW50cy5mb2xsb3dlcnNQZXJUaWNrQ2hhbmdlZCk7XG59XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VIYXBwaW5lc3MgPSAoZG9tYWluU3RhdGU6IEN1bHREb21haW5TdGF0ZSwgbmV3SGFwcGluZXNzOiBudW1iZXIpID0+IHtcbiAgZG9tYWluU3RhdGUuaGFwcGluZXNzID0gbmV3SGFwcGluZXNzO1xuICBjYWxjdWxhdGVDdXJyZW50Rm9sbG93ZXJzUGVyVGljayhkb21haW5TdGF0ZSk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLmN1bHRIYXBwaW5lc3NDaGFuZ2VkKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VTdWdnZXN0ZWREb25hdGlvbiA9IChkb21haW5TdGF0ZTogQ3VsdERvbWFpblN0YXRlLCBuZXdEb25hdGlvbkFtb3VudDogbnVtYmVyKSA9PiB7XG4gIGRvbWFpblN0YXRlLnN1Z2dlc3RlZERvbmF0aW9uID0gbmV3RG9uYXRpb25BbW91bnQ7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLnN1Z2dlc3RlZERvbmF0aW9uQ2hhbmdlZCk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlQ3VsdENhcGFjaXR5ID0gKGRvbWFpblN0YXRlOiBDdWx0RG9tYWluU3RhdGUsIG5ld0NhcGFjaXR5OiBudW1iZXIpID0+IHtcbiAgZG9tYWluU3RhdGUuY2FwYWNpdHkgPSBuZXdDYXBhY2l0eTtcblxuICBkb21haW5TdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuY3VsdENhcGFjaXR5Q2hhbmdlZCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVSZXZlbnVlRnJvbUN1bHQgPSAoZG9tYWluU3RhdGU6IEN1bHREb21haW5TdGF0ZSkgPT4ge1xuICBjb25zdCByZXZlbnVlID0gY2FsY3VsYXRlRG9uYXRpb25QZXJUaWNrKGRvbWFpblN0YXRlKTtcblxuICBkb21haW5TdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuY3VsdFJldmVudWVHZW5lcmF0ZWQsIHJldmVudWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEZvbGxvd2Vyc1RvQ3VsdCA9IChkb21haW5TdGF0ZTogQ3VsdERvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnN0IG5ld0ZvbGxvd2VyQ291bnQgPSBkb21haW5TdGF0ZS5mb2xsb3dlcnMgKyBkb21haW5TdGF0ZS5hY3R1YWxOZXdGb2xsb3dlcnNQZXJUaWNrO1xuXG4gIGRvbWFpblN0YXRlLmZvbGxvd2VycyA9IF8uY2xhbXAobmV3Rm9sbG93ZXJDb3VudCwgMCwgZG9tYWluU3RhdGUuY2FwYWNpdHkpO1xuICBkb21haW5TdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuZm9sbG93ZXJDb3VudENoYW5nZWQpO1xufTtcbiIsIlxuZXhwb3J0IGVudW0gRG9tYWluRXZlbnRzIHtcbiAgLy8gVHJhZGluZ1xuICB0cmFkZUNvbXBsZXRlZCA9ICdkb21haW4udHJhZGVDb21wbGV0ZWQnLFxuICB0cmFkZUZhaWxlZCA9ICdkb21haW4udHJhZGVGYWlsZWQnLFxuICBhY2NvdW50QmFsYW5jZUNoYW5nZWQgPSAnZG9tYWluLmFjY291bnRCYWxhbmNlQ2hhbmdlZCcsXG4gIGV4Y2hhbmdlUmF0ZXNDaGFuZ2VkID0gJ2RvbWFpbi5leGNoYW5nZVJhdGVzQ2hhbmdlZCcsXG4gIG5hdGlvbkV2ZW50T2NjdXJyZWQgPSAnZG9tYWluLm5hdGlvbkV2ZW50T2NjdXJyZWQnLFxuICBuYXRpb25FdmVudEVuZGVkID0gJ2RvbWFpbi5uYXRpb25FdmVudEVuZGVkJyxcblxuICAvLyBDdWx0XG4gIGZvbGxvd2VyQ291bnRDaGFuZ2VkID0gJ2RvbWFpbi5mb2xsb3dlckNvdW50Q2hhbmdlZCcsXG4gIGN1bHRSZXZlbnVlR2VuZXJhdGVkID0gJ2RvbWFpbi5jdWx0UmV2ZW51ZUdlbmVyYXRlZCcsXG4gIHN1Z2dlc3RlZERvbmF0aW9uQ2hhbmdlZCA9ICdkb21haW4uc3VnZ2VzdGVkRG9uYXRpb25DaGFuZ2VkJyxcbiAgY3VsdENhcGFjaXR5Q2hhbmdlZCA9ICdkb21haW4uY3VsdENhcGFjaXR5Q2hhbmdlZCcsXG4gIGN1bHRIYXBwaW5lc3NDaGFuZ2VkID0gJ2RvbWFpbi5jdWx0SGFwcGluZXNzQ2hhbmdlZCcsXG4gIGZvbGxvd2Vyc1BlclRpY2tDaGFuZ2VkID0gJ2RvbWFpbi5mb2xsb3dlcnNQZXJUaWNrQ2hhbmdlZCcsXG59XG4iLCJpbXBvcnQgKiBhcyBUcmFkaW5nRG9tYWluIGZyb20gJy4vdHJhZGluZyc7XG5pbXBvcnQgKiBhcyBDdWx0RG9tYWluIGZyb20gJy4vY3VsdCc7XG5pbXBvcnQgeyBEb21haW5FdmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5cbmV4cG9ydCB7IERvbWFpbkV2ZW50cyB9O1xuXG5leHBvcnQgdHlwZSBEb21haW5TdGF0ZSA9IHsgZXZlbnRzOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlciB9ICYgVHJhZGluZ0RvbWFpbi5UcmFkaW5nRG9tYWluU3RhdGUgJiBDdWx0RG9tYWluLkN1bHREb21haW5TdGF0ZTtcblxudHlwZSBJbml0RG9tYWluSW5wdXQgPSBUcmFkaW5nRG9tYWluLlRyYWRpbmdJbml0RGF0YSAmIEN1bHREb21haW4uQ3VsdEluaXREYXRhO1xuXG5leHBvcnQgY29uc3QgaW5pdERvbWFpblN0YXRlID0gKGlucHV0OiBJbml0RG9tYWluSW5wdXQpOiBEb21haW5TdGF0ZSA9PiB7XG4gIGNvbnN0IGRvbWFpbkV2ZW50RW1pdHRlciA9IG5ldyBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0IGRvbWFpblN0YXRlID0ge1xuICAgIC4uLlRyYWRpbmdEb21haW4uaW5pdFRyYWRpbmdEb21haW5TdGF0ZShpbnB1dCwgZG9tYWluRXZlbnRFbWl0dGVyKSxcbiAgICAuLi5DdWx0RG9tYWluLmluaXRDdWx0RG9tYWluU3RhdGUoaW5wdXQsIGRvbWFpbkV2ZW50RW1pdHRlciksXG4gIH07XG5cbiAgcmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXJzKGRvbWFpblN0YXRlKTtcblxuICByZXR1cm4gZG9tYWluU3RhdGU7XG59O1xuXG5jb25zdCByZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcnMgPSAoZG9tYWluU3RhdGU6IERvbWFpblN0YXRlKSA9PiB7XG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuY3VsdFJldmVudWVHZW5lcmF0ZWQsIChyZXZlbnVlKSA9PiB7XG4gICAgVHJhZGluZ0RvbWFpbi5hZGRSZXZlbnVlVG9Sb290QWNvdW50KGRvbWFpblN0YXRlLCByZXZlbnVlKTtcbiAgfSk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5zdWdnZXN0ZWREb25hdGlvbkNoYW5nZWQsIChyZXZlbnVlKSA9PiB7XG4gICAgY29uc3QgbmV3SGFwcGluZXNzID0gQ3VsdERvbWFpbi5jYWxjdWxhdGVOZXdIYXBwaW5lc3NMZXZlbChkb21haW5TdGF0ZSk7XG4gICAgQ3VsdERvbWFpbi5jaGFuZ2VIYXBwaW5lc3MoZG9tYWluU3RhdGUsIG5ld0hhcHBpbmVzcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVRpY2sgPSAoZG9tYWluU3RhdGU6IERvbWFpblN0YXRlKSA9PiB7XG4gIC8vIFRyYWRpbmcgRG9tYWluIEV2ZW50c1xuICBUcmFkaW5nRG9tYWluLnJ1bkN1cnJlbmN5Rmx1Y3R1YXRpb25zKGRvbWFpblN0YXRlKTtcbiAgVHJhZGluZ0RvbWFpbi5ydW5SYW5kb21OYXRpb25FdmVudHMoZG9tYWluU3RhdGUpO1xuICBUcmFkaW5nRG9tYWluLmNoZWNrRm9yRXhwaXJpbmdOYXRpb25FdmVudHMoZG9tYWluU3RhdGUpO1xuXG4gIC8vIEN1bHQgRG9tYWluIEV2ZW50c1xuICBDdWx0RG9tYWluLmFkZEZvbGxvd2Vyc1RvQ3VsdChkb21haW5TdGF0ZSk7XG4gIEN1bHREb21haW4uZ2VuZXJhdGVSZXZlbnVlRnJvbUN1bHQoZG9tYWluU3RhdGUpO1xufTtcbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyRm9yRGlzcGxheSB9IGZyb20gJ3NyYy9zaGFyZWQnO1xuXG5leHBvcnQgZW51bSBEb21haW5FcnJvcnMge1xuICB0cmFkZUZhaWxlZF9JbnN1ZmZpY2llbnRGdW5kcyA9IFwiSW5zdWZmaWNpZW50IEZ1bmRzXCJcbn1cbnR5cGUgUmFuZ2UgPSB7XG4gIG1pbjogbnVtYmVyO1xuICBtYXg6IG51bWJlcjtcbn1cbmV4cG9ydCB0eXBlIEluZmx1ZW5jZUV2ZW50VHlwZSA9IHtcbiAgbmFtZTogSW5mbHVlbmNlRXZlbnRUeXBlTmFtZXMsXG4gIHN1Y2Nlc3NSYXRlOiBudW1iZXIsXG4gIHN1Y2Nlc3NIZWFkbGluZXM6IHN0cmluZ1tdLFxuICBmYWlsdXJlSGVhZGxpbmVzOiBzdHJpbmdbXSxcbiAgc3VjY2Vzc0Jhc2VNdWx0aXBsaWVyOiBSYW5nZSxcbiAgc3VjY2Vzc0ZsdXhNdWx0aXBsaWVyOiBSYW5nZSxcbiAgZmFpbHVyZUJhc2VNdWx0aXBsaWVyOiBSYW5nZSxcbiAgZmFpbHVyZUZsdXhNdWx0aXBsaWVyOiBSYW5nZSxcbiAgZHVyYXRpb246IFJhbmdlLFxufVxuZXhwb3J0IHR5cGUgSW5mbHVlbmNlQWN0aW9uID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGNvc3Q6IG51bWJlcixcbiAgZXZlbnRUeXBlOiBJbmZsdWVuY2VFdmVudFR5cGUsXG59XG5leHBvcnQgdHlwZSBDdXJyZW5jeSA9IHtcbiAgbmFtZTogc3RyaW5nLFxuICBleGNoYW5nZVJhdGU6IG51bWJlcixcbiAgdHJlbmQ6IFwidXBcIiB8IFwiZG93blwiLFxufVxuZXhwb3J0IHR5cGUgTmF0aW9uID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGN1cnJlbmN5OiBDdXJyZW5jeSxcbiAgYWN0aXZlRXZlbnRzOiBOYXRpb25FdmVudFtdLFxuICBoaXN0b3JpY2FsRXZlbnRzOiBOYXRpb25FdmVudFtdLFxufVxuZXhwb3J0IHR5cGUgTmF0aW9uRXZlbnQgPSB7XG4gIG5hbWU6IE5hdGlvbkV2ZW50VHlwZU5hbWVzIHwgSW5mbHVlbmNlRXZlbnRUeXBlTmFtZXMsXG4gIGV2ZW50U3RhcnRIZWFkbGluZTogc3RyaW5nLFxuICBldmVudEVuZEhlYWRsaW5lPzogc3RyaW5nLFxuICBiYXNlTXVsdGlwbGllcjogbnVtYmVyLFxuICBmbHV4TXVsdGlwbGllcjogbnVtYmVyLFxuICBkdXJhdGlvbjogbnVtYmVyLFxuICB0cmlnZ2VyZWRUaW1lOiBudW1iZXIsXG4gIGtpbmQ6IFwicG9zaXRpdmVcIiB8IFwibmVnYXRpdmVcIixcbn1cbmV4cG9ydCB0eXBlIFRyYW5zYWN0aW9uID0ge1xuICBhbW91bnQ6IG51bWJlcixcbiAgdHJhbnNhY3Rpb25UeXBlOiBcIkNyZWRpdFwiIHwgXCJEZWJpdFwiXG59XG5leHBvcnQgdHlwZSBBY2NvdW50ID0ge1xuICBraW5kOiBcInRyYWRpbmdcIiB8IFwicm9vdFwiLFxuICBuYW1lOiBzdHJpbmcsXG4gIGN1cnJlbmN5OiBDdXJyZW5jeSxcbiAgYmFsYW5jZTogbnVtYmVyLFxuICBsZWRnZXI6IFRyYW5zYWN0aW9uW10sXG59XG5leHBvcnQgdHlwZSBUcmFkZUxlZGdlciA9IHtcbiAgdHJhZGVzOiBUcmFkZVtdXG59XG5leHBvcnQgdHlwZSBUcmFkZSA9IHtcbiAgc291cmNlQ3VycmVuY3k6IEN1cnJlbmN5LFxuICBkZXN0aW5hdGlvbkN1cnJlbmN5OiBDdXJyZW5jeSxcbiAgc291cmNlQW1vdW50OiBudW1iZXIsXG4gIGRlc3RpbmF0aW9uQW1vdW50OiBudW1iZXIsXG4gIGV4Y2hhbmdlUmF0ZTogbnVtYmVyXG59XG5leHBvcnQgdHlwZSBUcmFkaW5nRG9tYWluU3RhdGUgPSB7XG4gIHRyYWRlTGVkZ2VyOiBUcmFkZUxlZGdlcixcbiAgbmF0aW9uczogTmF0aW9uW10sXG4gIHRyYWRlQ3VycmVuY2llczogQ3VycmVuY3lbXSxcbiAgdHJhZGVBY2NvdW50czogQWNjb3VudFtdLFxuICByb290Q3VycmVuY3k6IEN1cnJlbmN5LFxuICByb290QWNjb3VudDogQWNjb3VudCxcbiAgZXZlbnRzOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcixcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFjY291bnQobmFtZTogc3RyaW5nLCBzdGFydGluZ0JhbGFuY2U6IG51bWJlciwgY3VycmVuY3k6IEN1cnJlbmN5LCBpc1Jvb3Q6IGJvb2xlYW4pOiBBY2NvdW50IHtcbiAgbGV0IG5ld0FjY291bnQ6IEFjY291bnQgPSAge1xuICAgIGtpbmQ6IGlzUm9vdCA/IFwicm9vdFwiIDogXCJ0cmFkaW5nXCIsXG4gICAgbmFtZTogbmFtZSxcbiAgICBjdXJyZW5jeTogY3VycmVuY3ksXG4gICAgYmFsYW5jZTogc3RhcnRpbmdCYWxhbmNlLFxuICAgIGxlZGdlcjogW10sXG4gIH1cbiAgaWYgKHN0YXJ0aW5nQmFsYW5jZSA+IDApIHtcbiAgICBuZXdBY2NvdW50LmxlZGdlci5wdXNoKHthbW91bnQ6IHN0YXJ0aW5nQmFsYW5jZSwgdHJhbnNhY3Rpb25UeXBlOiBcIkNyZWRpdFwiIH0pO1xuICB9XG4gIHJldHVybiBuZXdBY2NvdW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjb3JkVHJhZGUoc291cmNlOiBBY2NvdW50LCBkZXN0aW5hdGlvbjogQWNjb3VudCwgc291cmNlQW1vdW50OiBudW1iZXIsIHNvdXJjZVRvRGVzdGluYXRpb25FeGNoYW5nZVJhdGU6IG51bWJlciwgc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSkge1xuICBpZiAoc291cmNlLmJhbGFuY2UgPj0gc291cmNlQW1vdW50KSB7XG4gICAgc291cmNlLmxlZGdlci5wdXNoKHthbW91bnQ6IHNvdXJjZUFtb3VudCwgdHJhbnNhY3Rpb25UeXBlOiBcIkRlYml0XCJ9KTtcbiAgICBzb3VyY2UuYmFsYW5jZSAtPSBzb3VyY2VBbW91bnQ7XG4gICAgbGV0IGRlc3RpbmF0aW9uQW1vdW50ID0gc291cmNlQW1vdW50ICogc291cmNlVG9EZXN0aW5hdGlvbkV4Y2hhbmdlUmF0ZTtcbiAgICBkZXN0aW5hdGlvbi5sZWRnZXIucHVzaCh7YW1vdW50OiBkZXN0aW5hdGlvbkFtb3VudCwgdHJhbnNhY3Rpb25UeXBlOiBcIkNyZWRpdFwifSk7XG4gICAgZGVzdGluYXRpb24uYmFsYW5jZSArPSBkZXN0aW5hdGlvbkFtb3VudDtcbiAgICBsZXQgbmV3VHJhZGUgPSB7XG4gICAgICBzb3VyY2VBbW91bnQ6IHNvdXJjZUFtb3VudCxcbiAgICAgIHNvdXJjZUN1cnJlbmN5OiBzb3VyY2UuY3VycmVuY3ksXG4gICAgICBkZXN0aW5hdGlvbkFtb3VudDogZGVzdGluYXRpb25BbW91bnQsXG4gICAgICBkZXN0aW5hdGlvbkN1cnJlbmN5OiBkZXN0aW5hdGlvbi5jdXJyZW5jeSxcbiAgICAgIGV4Y2hhbmdlUmF0ZTogc291cmNlVG9EZXN0aW5hdGlvbkV4Y2hhbmdlUmF0ZVxuICAgIH07XG4gICAgc3RhdGUudHJhZGVMZWRnZXIudHJhZGVzLnB1c2gobmV3VHJhZGUpO1xuXG4gICAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLnRyYWRlQ29tcGxldGVkLCBuZXdUcmFkZSk7XG4gICAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLmFjY291bnRCYWxhbmNlQ2hhbmdlZCwgc291cmNlKTtcbiAgICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuYWNjb3VudEJhbGFuY2VDaGFuZ2VkLCBkZXN0aW5hdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLnRyYWRlRmFpbGVkLCBEb21haW5FcnJvcnMudHJhZGVGYWlsZWRfSW5zdWZmaWNpZW50RnVuZHMpO1xuICB9XG59XG5cbmNvbnN0IE1JTl9TVEFSVElOR19FWENIQU5HRV9SQVRFID0gNTtcbmNvbnN0IE1BWF9TVEFSVElOR19FWENIQU5HRV9SQVRFID0gNDA7XG5jb25zdCBNSU5fQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURSA9IDE7XG5jb25zdCBNQVhfQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURSA9IDk5O1xuXG5mdW5jdGlvbiByYW5kb21EZWNpbWFsQmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG5leHBvcnQgdHlwZSBUcmFkaW5nSW5pdE5hdGlvbmFsQ3VycmVuY3kgPSB7IG5hdGlvbjogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nIH07XG5leHBvcnQgdHlwZSBUcmFkaW5nSW5pdERhdGEgPSB7XG4gIHJvb3RDdXJyZW5jeU5hbWU6IHN0cmluZyxcbiAgcm9vdEN1cnJlbmN5U3RhcnRpbmdBbW91bnQ6IG51bWJlcixcbiAgbmF0aW9uczogVHJhZGluZ0luaXROYXRpb25hbEN1cnJlbmN5W11cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbml0VHJhZGluZ0RvbWFpblN0YXRlKGluaXREYXRhOiBUcmFkaW5nSW5pdERhdGEsIGV2ZW50czogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIpOiBUcmFkaW5nRG9tYWluU3RhdGUge1xuICBsZXQgbmF0aW9uczogTmF0aW9uW10gPSBpbml0RGF0YS5uYXRpb25zLm1hcChuID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogbi5uYXRpb24sXG4gICAgICBjdXJyZW5jeTogeyBuYW1lOiBuLmN1cnJlbmN5LCBleGNoYW5nZVJhdGU6IHJhbmRvbURlY2ltYWxCZXR3ZWVuKE1JTl9TVEFSVElOR19FWENIQU5HRV9SQVRFLCBNQVhfU1RBUlRJTkdfRVhDSEFOR0VfUkFURSksIHRyZW5kOiBcInVwXCIgfSBhcyBDdXJyZW5jeSxcbiAgICAgIGFjdGl2ZUV2ZW50czogW10sXG4gICAgICBoaXN0b3JpY2FsRXZlbnRzOiBbXSxcbiAgICB9XG4gIH0pO1xuICBsZXQgY3VycmVuY2llcyA9IG5hdGlvbnMubWFwKG4gPT4gbi5jdXJyZW5jeSk7XG4gIGxldCBhY2NvdW50czogQWNjb3VudFtdID0gY3VycmVuY2llcy5tYXAoYyA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUFjY291bnQoYy5uYW1lLCAwLCBjLCBmYWxzZSk7XG4gIH0pO1xuICBsZXQgcm9vdEN1cnJlbmN5OiBDdXJyZW5jeSA9IHsgbmFtZTogaW5pdERhdGEucm9vdEN1cnJlbmN5TmFtZSwgZXhjaGFuZ2VSYXRlOiAxLCB0cmVuZDogXCJ1cFwiIH07XG5cbiAgcmV0dXJuIHtcbiAgICBldmVudHMsXG4gICAgbmF0aW9uczogbmF0aW9ucyxcbiAgICB0cmFkZUN1cnJlbmNpZXM6IGN1cnJlbmNpZXMsXG4gICAgdHJhZGVBY2NvdW50czogYWNjb3VudHMsXG4gICAgdHJhZGVMZWRnZXI6IHsgdHJhZGVzOiBbXSB9LFxuICAgIHJvb3RDdXJyZW5jeSxcbiAgICByb290QWNjb3VudDogY3JlYXRlQWNjb3VudChpbml0RGF0YS5yb290Q3VycmVuY3lOYW1lLCBpbml0RGF0YS5yb290Q3VycmVuY3lTdGFydGluZ0Ftb3VudCwgcm9vdEN1cnJlbmN5LCB0cnVlKSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVuQ3VycmVuY3lGbHVjdHVhdGlvbnMoc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSkge1xuICBzdGF0ZS5uYXRpb25zLmZvckVhY2gobmF0aW9uID0+IHtcbiAgICBsZXQgY3VycmVuY3kgPSBuYXRpb24uY3VycmVuY3k7XG4gICAgbGV0IGZsdXhNdWx0aXBsaWVyID0gbmF0aW9uLmFjdGl2ZUV2ZW50cy5yZWR1Y2UoKGksIGV2ZW50KSA9PiBpICogZXZlbnQuZmx1eE11bHRpcGxpZXIsIDEpO1xuICAgIGxldCBiYXNlTXVsdGlwbGllciA9IG5hdGlvbi5hY3RpdmVFdmVudHMucmVkdWNlKChpLCBldmVudCkgPT4gaSAqIGV2ZW50LmJhc2VNdWx0aXBsaWVyLCAxKTtcbiAgICBsZXQgY2hhbmdlID0gY3VycmVuY3kuZXhjaGFuZ2VSYXRlICogKHJhbmRvbURlY2ltYWxCZXR3ZWVuKDAuOTggKiBmbHV4TXVsdGlwbGllciwgMS4wMiAqIGZsdXhNdWx0aXBsaWVyKSkgKiBiYXNlTXVsdGlwbGllciAtIGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZTtcbiAgICBsZXQgZXhyTWlkcG9pbnQgPSAoTUFYX0NVUlJFTkNZX0VYQ0hBTkdFX1JBVEUgLSBNSU5fQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURSkgLyAyO1xuICAgIGxldCBjaGFuZ2VTY2FsZSA9IChcbiAgICAgIE1hdGguYWJzKGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSAtIGV4ck1pZHBvaW50KSA8IDJcbiAgICAgIHx8IChjaGFuZ2UgPCAwICYmIGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSA+IGV4ck1pZHBvaW50KVxuICAgICAgfHwgKGNoYW5nZSA+IDAgJiYgY3VycmVuY3kuZXhjaGFuZ2VSYXRlIDwgZXhyTWlkcG9pbnQpXG4gICAgKSA/IDEgOiAoKGV4ck1pZHBvaW50IC8gMzAuMCkgLyBNYXRoLmFicyhjdXJyZW5jeS5leGNoYW5nZVJhdGUgLSBleHJNaWRwb2ludCkpO1xuICAgIGxldCBzY2FsZWRDaGFuZ2UgPSBjaGFuZ2UgKiBjaGFuZ2VTY2FsZTtcbiAgICBjdXJyZW5jeS50cmVuZCA9IHNjYWxlZENoYW5nZSA+IDAgPyBcInVwXCIgOiBcImRvd25cIjtcbiAgICBjdXJyZW5jeS5leGNoYW5nZVJhdGUgKz0gc2NhbGVkQ2hhbmdlO1xuICAgIGlmIChjdXJyZW5jeS5leGNoYW5nZVJhdGUgPCBNSU5fQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURSkge1xuICAgICAgY3VycmVuY3kuZXhjaGFuZ2VSYXRlID0gTUlOX0NVUlJFTkNZX0VYQ0hBTkdFX1JBVEU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSA+IE1BWF9DVVJSRU5DWV9FWENIQU5HRV9SQVRFKSB7XG4gICAgICBjdXJyZW5jeS5leGNoYW5nZVJhdGUgPSBNQVhfQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURTtcbiAgICB9XG4gIH0pO1xuICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuZXhjaGFuZ2VSYXRlc0NoYW5nZWQpO1xufVxuXG50eXBlIE5hdGlvbkV2ZW50VHlwZU5hbWVzID0gXCJXYXJcIiB8IFwiRm9yZ2luZyBmcmllbmRzaGlwc1wiIHwgXCJHb29kIGRheVwiIHwgXCJCYWQgZGF5XCIgfCBcIkdyZWF0IG1vbnRoXCIgfCBcIlRlcnJpYmxlIG1vbnRoXCIgfCBcIkZhbWluZVwiIHwgXCJIaWdoIHByb2R1Y3Rpdml0eVwiIHwgXCJCYWQgeWVhclwiIHwgXCJPdXRzdGFuZGluZyB5ZWFyXCI7XG50eXBlIE5hdGlvbkV2ZW50VHlwZSA9IHtcbiAga2luZDogXCJwb3NpdGl2ZVwiIHwgXCJuZWdhdGl2ZVwiLFxuICBuYW1lOiBOYXRpb25FdmVudFR5cGVOYW1lcyxcbiAgZXZlbnRTdGFydEhlYWRsaW5lOiBzdHJpbmcsXG4gIGV2ZW50RW5kSGVhZGxpbmU6IHN0cmluZyxcbiAgYmFzZU11bHRpcGxpZXI6IFJhbmdlLFxuICBmbHV4TXVsdGlwbGllcjogUmFuZ2UsXG4gIGR1cmF0aW9uOiBSYW5nZSxcbn1cbmNvbnN0IG5hdGlvbkV2ZW50VHlwZXM6IE5hdGlvbkV2ZW50VHlwZVtdID0gW1xuICB7XG4gICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIG5hbWU6IFwiV2FyXCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcImhhcyBnb25lIHRvIHdhciFcIixcbiAgICBldmVudEVuZEhlYWRsaW5lOiBcImlzIG5vIGxvbmdlciBhdCB3YXJcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMS4wMSwgbWF4OiAxLjF9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAxLjAsIG1heDogMS4xfSxcbiAgICBkdXJhdGlvbjoge21pbjogNjAsIG1heDogMTIwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJwb3NpdGl2ZVwiLFxuICAgIG5hbWU6IFwiRm9yZ2luZyBmcmllbmRzaGlwc1wiLFxuICAgIGV2ZW50U3RhcnRIZWFkbGluZTogXCJpcyBmb3JnaW5nIHN0cm9uZyBmcmllbmRzaGlwc1wiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwiYXBwZWFycyBub3JtYWxcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMC45MCwgbWF4OiAwLjk5fSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMC4yLCBtYXg6IDAuNH0sXG4gICAgZHVyYXRpb246IHttaW46IDYwLCBtYXg6IDEyMH1cbiAgfSxcbiAge1xuICAgIGtpbmQ6IFwibmVnYXRpdmVcIixcbiAgICBuYW1lOiBcIkZhbWluZVwiLFxuICAgIGV2ZW50U3RhcnRIZWFkbGluZTogXCJpcyBleHBlcmllbmNpbmcgYSBmYW1pbmVcIixcbiAgICBldmVudEVuZEhlYWRsaW5lOiBcImhhcyBzdWZmaWNpZW50IGZvb2QgYW5kIHdhdGVyXCIsXG4gICAgYmFzZU11bHRpcGxpZXI6IHttaW46IDEuMDEsIG1heDogMS4xfSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMS4wLCBtYXg6IDEuMX0sXG4gICAgZHVyYXRpb246IHttaW46IDMwLCBtYXg6IDYwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJwb3NpdGl2ZVwiLFxuICAgIG5hbWU6IFwiSGlnaCBwcm9kdWN0aXZpdHlcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaXMgaHVnZWx5IHByb2R1Y3RpdmUgcmlnaHQgbm93XCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJpcyByZXN0aW5nIGZyb20gdGhlaXIgcHJvZHVjdGl2aXR5IHB1c2hcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMC45OSwgbWF4OiAwLjk5fSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDEuMn0sXG4gICAgZHVyYXRpb246IHttaW46IDMwLCBtYXg6IDYwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJwb3NpdGl2ZVwiLFxuICAgIG5hbWU6IFwiR29vZCBkYXlcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaXMgaGF2aW5nIGEgcGFydGljdWxhcmx5IGdvb2QgdGltZVwiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwiaXMgZmVlbGluZyBhdmVyYWdlXCIsXG4gICAgYmFzZU11bHRpcGxpZXI6IHttaW46IDAuOSwgbWF4OiAwLjk5fSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDEwLCBtYXg6IDIwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIG5hbWU6IFwiQmFkIGRheVwiLFxuICAgIGV2ZW50U3RhcnRIZWFkbGluZTogXCJzdXJlIGxvb2tzIGxpa2UgdGhleSdyZSBoYXZpbmcgYSBiYWQgZGF5XCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJpcyBva1wiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAxLjAxLCBtYXg6IDEuMX0sXG4gICAgZmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGR1cmF0aW9uOiB7bWluOiAxMCwgbWF4OiAyMH1cbiAgfSxcbiAge1xuICAgIGtpbmQ6IFwicG9zaXRpdmVcIixcbiAgICBuYW1lOiBcIkdyZWF0IG1vbnRoXCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcImlzIGVuam95aW5nIHN1Y2Nlc3MgdGhpcyBtb250aFwiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwic2VlbXMgZmluZVwiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAwLjksIG1heDogMC45OX0sXG4gICAgZmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGR1cmF0aW9uOiB7bWluOiAyMCwgbWF4OiA0MH1cbiAgfSxcbiAge1xuICAgIGtpbmQ6IFwibmVnYXRpdmVcIixcbiAgICBuYW1lOiBcIlRlcnJpYmxlIG1vbnRoXCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcImxvb2tzIGxpa2UgdGhleSdyZSBzdHJ1Z2dsaW5nIHRoaXMgbW9udGhcIixcbiAgICBldmVudEVuZEhlYWRsaW5lOiBcImxvb2tzIGxpa2UgdGhleSdyZSBkb2luZyBiZXR0ZXJcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMS4wMSwgbWF4OiAxLjF9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogMjAsIG1heDogNDB9XG4gIH0sXG4gIHtcbiAgICBraW5kOiBcInBvc2l0aXZlXCIsXG4gICAgbmFtZTogXCJPdXRzdGFuZGluZyB5ZWFyXCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcImlzIG91dHN0YW5kaW5nIHRoaXMgeWVhclwiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwidXAgdG8gdGhlIHVzdWFsXCIsXG4gICAgYmFzZU11bHRpcGxpZXI6IHttaW46IDAuOSwgbWF4OiAwLjk5fSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDgwLCBtYXg6IDE2MH1cbiAgfSxcbiAge1xuICAgIGtpbmQ6IFwibmVnYXRpdmVcIixcbiAgICBuYW1lOiBcIkJhZCB5ZWFyXCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcImlzbid0IGhhdmluZyBhIHZlcnkgZ29vZCB5ZWFyXCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJpc24ndCBkb2luZyB0b28gYmFkXCIsXG4gICAgYmFzZU11bHRpcGxpZXI6IHttaW46IDEuMDEsIG1heDogMS4xfSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDgwLCBtYXg6IDE2MH1cbiAgfSxcbl1cbmNvbnN0IFJBTkRPTV9FVkVOVF9USFJFU0hPTEQgPSAwLjk7XG5mdW5jdGlvbiByYW5kb21JbnRlZ2VyQmV0d2VlbihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tRGVjaW1hbEJldHdlZW4obWluLCBtYXgpKTtcbn1cbmZ1bmN0aW9uIHNldEFjdGl2ZUV2ZW50T25OYXRpb24oZXZlbnQ6IE5hdGlvbkV2ZW50LCBuYXRpb246IE5hdGlvbiwgc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSkge1xuICBjb25zb2xlLmxvZygnc2V0QWN0aXZlRXZlbnRPbk5hdGlvbicsIGV2ZW50LCBuYXRpb24pXG4gIG5hdGlvbi5hY3RpdmVFdmVudHMucHVzaChldmVudCk7XG4gIHN0YXRlLmV2ZW50cy5lbWl0KERvbWFpbkV2ZW50cy5uYXRpb25FdmVudE9jY3VycmVkLCBuYXRpb24sIGV2ZW50LmV2ZW50U3RhcnRIZWFkbGluZSk7XG59XG5mdW5jdGlvbiBlbmRBY3RpdmVFdmVudE9uTmF0aW9uKGV2ZW50OiBOYXRpb25FdmVudCwgbmF0aW9uOiBOYXRpb24sIHN0YXRlOiBUcmFkaW5nRG9tYWluU3RhdGUpIHtcbiAgbGV0IGluZGV4ID0gbmF0aW9uLmFjdGl2ZUV2ZW50cy5pbmRleE9mKGV2ZW50KTtcbiAgaWYgKGluZGV4ID49IDApIHtcbiAgICBuYXRpb24uYWN0aXZlRXZlbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgbmF0aW9uLmhpc3RvcmljYWxFdmVudHMucHVzaChldmVudCk7XG4gICAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLm5hdGlvbkV2ZW50RW5kZWQsIG5hdGlvbiwgZXZlbnQuZXZlbnRFbmRIZWFkbGluZSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRm9yRXhwaXJpbmdOYXRpb25FdmVudHMoc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSkge1xuICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgc3RhdGUubmF0aW9ucy5mb3JFYWNoKG5hdGlvbiA9PiB7XG4gICAgbmF0aW9uLmFjdGl2ZUV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcbiAgICAgIGlmIChldmVudC50cmlnZ2VyZWRUaW1lICsgZXZlbnQuZHVyYXRpb24qMTAwMCA8PSBub3cpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFeHBpcmluZyBhbiBldmVudCEhIVwiLCBub3csIGV2ZW50KTtcbiAgICAgICAgZW5kQWN0aXZlRXZlbnRPbk5hdGlvbihldmVudCwgbmF0aW9uLCBzdGF0ZSlcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5SYW5kb21OYXRpb25FdmVudHMoc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSkge1xuICBpZiAoTWF0aC5yYW5kb20oKSA+IFJBTkRPTV9FVkVOVF9USFJFU0hPTEQpIHtcbiAgICBjb25zb2xlLmxvZyhcIkEgUkFORE9NIEVWRU5UIE9DQ1VSUkVEISEhXCIpO1xuICAgIGxldCBldmVudFR5cGUgPSBuYXRpb25FdmVudFR5cGVzW3JhbmRvbUludGVnZXJCZXR3ZWVuKDAsIG5hdGlvbkV2ZW50VHlwZXMubGVuZ3RoKV07XG4gICAgbGV0IGNob3Nlbk5hdGlvbiA9IHN0YXRlLm5hdGlvbnNbcmFuZG9tSW50ZWdlckJldHdlZW4oMCwgc3RhdGUubmF0aW9ucy5sZW5ndGgpXTtcbiAgICBpZiAoY2hvc2VuTmF0aW9uLmFjdGl2ZUV2ZW50cy5sZW5ndGggPT0gMCB8fCAoY2hvc2VuTmF0aW9uLmFjdGl2ZUV2ZW50cy5sZW5ndGggPT0gMSAmJiBjaG9zZW5OYXRpb24uYWN0aXZlRXZlbnRzWzBdLmtpbmQgPT0gZXZlbnRUeXBlLmtpbmQpKSB7XG4gICAgICBsZXQgZXZlbnQ6IE5hdGlvbkV2ZW50ID0ge1xuICAgICAgICBiYXNlTXVsdGlwbGllcjogcmFuZG9tRGVjaW1hbEJldHdlZW4oZXZlbnRUeXBlLmJhc2VNdWx0aXBsaWVyLm1pbiwgZXZlbnRUeXBlLmJhc2VNdWx0aXBsaWVyLm1heCksXG4gICAgICAgIGZsdXhNdWx0aXBsaWVyOiByYW5kb21EZWNpbWFsQmV0d2VlbihldmVudFR5cGUuZmx1eE11bHRpcGxpZXIubWluLCBldmVudFR5cGUuZmx1eE11bHRpcGxpZXIubWF4KSxcbiAgICAgICAgbmFtZTogZXZlbnRUeXBlLm5hbWUsXG4gICAgICAgIGV2ZW50U3RhcnRIZWFkbGluZTogZXZlbnRUeXBlLmV2ZW50U3RhcnRIZWFkbGluZSxcbiAgICAgICAgZXZlbnRFbmRIZWFkbGluZTogZXZlbnRUeXBlLmV2ZW50RW5kSGVhZGxpbmUsXG4gICAgICAgIGR1cmF0aW9uOiByYW5kb21JbnRlZ2VyQmV0d2VlbihldmVudFR5cGUuZHVyYXRpb24ubWluLCBldmVudFR5cGUuZHVyYXRpb24ubWF4KSxcbiAgICAgICAgdHJpZ2dlcmVkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgICAga2luZDogZXZlbnRUeXBlLmtpbmQsXG4gICAgICB9O1xuICAgICAgc2V0QWN0aXZlRXZlbnRPbk5hdGlvbihldmVudCwgY2hvc2VuTmF0aW9uLCBzdGF0ZSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHJhbmRvbUFycmF5RWxlbWVudCA9IDxUPihhcnI6IFRbXSk6IFQgPT4ge1xuICByZXR1cm4gYXJyW3JhbmRvbUludGVnZXJCZXR3ZWVuKDAsIGFyci5sZW5ndGgpXTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFJldmVudWVUb1Jvb3RBY291bnQgPSAoc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSwgcmV2ZW51ZUFtb3VudDogbnVtYmVyKSA9PiB7XG4gIHN0YXRlLnJvb3RBY2NvdW50LmJhbGFuY2UgKz0gcmV2ZW51ZUFtb3VudDtcbiAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLmFjY291bnRCYWxhbmNlQ2hhbmdlZCwgc3RhdGUucm9vdEFjY291bnQpO1xufTtcblxuXG5leHBvcnQgY29uc3Qgc3RhcnRSdW1vckFjdGlvbjogSW5mbHVlbmNlQWN0aW9uID0ge1xuICBjb3N0OiAxMDAwLFxuICBuYW1lOiBcIlNUQVJUIFJVTU9SXCIsXG4gIGV2ZW50VHlwZToge1xuICAgIG5hbWU6IFwiU3RhcnQgUnVtb3JcIixcbiAgICBzdWNjZXNzUmF0ZTogMC45MCxcbiAgICBzdWNjZXNzSGVhZGxpbmVzOiBbXG4gICAgICBcImhhcyByZXBvcnRlZCBnb29kIG1hcmtldCBiZWhhdmlvclwiLFxuICAgIF0sXG4gICAgZmFpbHVyZUhlYWRsaW5lczogW1xuICAgICAgXCJ3YXMgY2F1Z2h0IGx5aW5nIGFib3V0IG5hdGlvbmFsIGluY29tZVwiLFxuICAgIF0sXG4gICAgc3VjY2Vzc0Jhc2VNdWx0aXBsaWVyOiB7bWluOiAwLjk1LCBtYXg6IDAuOTl9LFxuICAgIHN1Y2Nlc3NGbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZmFpbHVyZUJhc2VNdWx0aXBsaWVyOiB7bWluOiAxLjAxLCBtYXg6IDEuMDV9LFxuICAgIGZhaWx1cmVGbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDgwLCBtYXg6IDE2MH1cbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBicmliZVBvbGl0aWNpYW5BY3Rpb246IEluZmx1ZW5jZUFjdGlvbiA9IHtcbiAgY29zdDogMTAwMDAsXG4gIG5hbWU6IFwiQlJJQkUgUE9MSVRJQ0lBTlwiLFxuICBldmVudFR5cGU6IHtcbiAgICBuYW1lOiBcIkJyaWJlXCIsXG4gICAgc3VjY2Vzc1JhdGU6IDAuNzUsXG4gICAgc3VjY2Vzc0hlYWRsaW5lczogW1xuICAgICAgXCJpcyBkb2luZyBpbmV4cGxpY2FibHkgd2VsbCB0b2RheVwiLFxuICAgIF0sXG4gICAgZmFpbHVyZUhlYWRsaW5lczogW1xuICAgICAgXCJpcyBzdWZmZXJpbmcgZnJvbSBhIGJyaWJlcnkgc2NhbmRhbFwiLFxuICAgIF0sXG4gICAgc3VjY2Vzc0Jhc2VNdWx0aXBsaWVyOiB7bWluOiAwLjksIG1heDogMC45OX0sXG4gICAgc3VjY2Vzc0ZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBmYWlsdXJlQmFzZU11bHRpcGxpZXI6IHttaW46IDEuMDMsIG1heDogMS4xM30sXG4gICAgZmFpbHVyZUZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogODAsIG1heDogMTYwfVxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHJpZ0VsZWN0aW9uQWN0aW9uOiBJbmZsdWVuY2VBY3Rpb24gPSB7XG4gIGNvc3Q6IDEwMDAwMCxcbiAgbmFtZTogXCJSSUcgRUxFQ1RJT05cIixcbiAgZXZlbnRUeXBlOiB7XG4gICAgbmFtZTogXCJSaWcgRWxlY3Rpb25cIixcbiAgICBzdWNjZXNzUmF0ZTogMC41LFxuICAgIHN1Y2Nlc3NIZWFkbGluZXM6IFtcbiAgICAgIFwiaGFkIGFuIHVuZm9yc2VlbiB1cHNldCBhdCB0aGUgcG9sbHMgdG9kYXlcIixcbiAgICBdLFxuICAgIGZhaWx1cmVIZWFkbGluZXM6IFtcbiAgICAgIFwidW5jb3ZlcmVkIGV2aWRlbmNlIHRoYXQgdGhlIGxhc3QgZWxlY3Rpb24gd2FzIHJpZ2dlZFwiLFxuICAgIF0sXG4gICAgc3VjY2Vzc0Jhc2VNdWx0aXBsaWVyOiB7bWluOiAwLjgsIG1heDogMC45MH0sXG4gICAgc3VjY2Vzc0ZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBmYWlsdXJlQmFzZU11bHRpcGxpZXI6IHttaW46IDEuMTAsIG1heDogMS4yfSxcbiAgICBmYWlsdXJlRmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGR1cmF0aW9uOiB7bWluOiA4MCwgbWF4OiAxNjB9XG4gIH0sXG59O1xuXG50eXBlIEluZmx1ZW5jZUV2ZW50VHlwZU5hbWVzID0gXCJTdGFydCBSdW1vclwiIHwgXCJCcmliZVwiIHwgXCJSaWcgRWxlY3Rpb25cIjtcbmV4cG9ydCBjb25zdCBpbmZsdWVuY2VBY3Rpb25zOiBJbmZsdWVuY2VBY3Rpb25bXSA9IFtcbiAgc3RhcnRSdW1vckFjdGlvbixcbiAgYnJpYmVQb2xpdGljaWFuQWN0aW9uLFxuICByaWdFbGVjdGlvbkFjdGlvbixcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYXRpb25Gcm9tQWNjb3VudChzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlLCBhY2NvdW50OiBBY2NvdW50KSB7XG4gIHJldHVybiBzdGF0ZS5uYXRpb25zLmZpbmQoKG5hdGlvbikgPT4gbmF0aW9uLmN1cnJlbmN5Lm5hbWUgPT09IGFjY291bnQuY3VycmVuY3kubmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydFJ1bW9yKHN0YXRlOiBUcmFkaW5nRG9tYWluU3RhdGUsIGFjY291bnQ6IEFjY291bnQpIHtcbiAgc2V0QWN0aXZlTmF0aW9uRXZlbnRGcm9tQWN0aW9uKHN0YXRlLCBhY2NvdW50LCBzdGFydFJ1bW9yQWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyaWJlUG9saXRpY2lhbihzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlLCBhY2NvdW50OiBBY2NvdW50KSB7XG4gIHNldEFjdGl2ZU5hdGlvbkV2ZW50RnJvbUFjdGlvbihzdGF0ZSwgYWNjb3VudCwgYnJpYmVQb2xpdGljaWFuQWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ0VsZWN0aW9uKHN0YXRlOiBUcmFkaW5nRG9tYWluU3RhdGUsIGFjY291bnQ6IEFjY291bnQpIHtcbiAgc2V0QWN0aXZlTmF0aW9uRXZlbnRGcm9tQWN0aW9uKHN0YXRlLCBhY2NvdW50LCByaWdFbGVjdGlvbkFjdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBY3RpdmVOYXRpb25FdmVudEZyb21BY3Rpb24oc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSwgYWNjb3VudDogQWNjb3VudCwgYWN0aW9uOiBJbmZsdWVuY2VBY3Rpb24pIHtcbiAgaWYgKHN0YXRlLnJvb3RBY2NvdW50LmJhbGFuY2UgPCBhY3Rpb24uY29zdCkge1xuICAgIGNvbnNvbGUubG9nKGBVbmFibGUgdG8gcGVyZm9ybSBpbmZsdWVuY2UgYmVjYXVzZSBhY2NvdW50IGJhbGFuY2UgKCR7Zm9ybWF0TnVtYmVyRm9yRGlzcGxheShzdGF0ZS5yb290QWNjb3VudC5iYWxhbmNlKX0pIGlzIGxlc3MgdGhhbiB0aGUgYWN0aW9uIGNvc3QgKCR7Zm9ybWF0TnVtYmVyRm9yRGlzcGxheShhY3Rpb24uY29zdCl9KWApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5hdGlvbiA9IGdldE5hdGlvbkZyb21BY2NvdW50KHN0YXRlLCBhY2NvdW50KTtcbiAgaWYgKCFuYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBmaW5kIG5hdGlvbiBmcm9tIGFjY291bnQnKTtcbiAgfVxuXG4gIGFkZFJldmVudWVUb1Jvb3RBY291bnQoc3RhdGUsIC1hY3Rpb24uY29zdCk7XG5cbiAgY29uc3QgZXZlbnQgPSBjcmVhdGVOYXRpb25FdmVudEZyb21JbmZsdWVuY2VBY3Rpb24oYWN0aW9uKTtcblxuICBzZXRBY3RpdmVFdmVudE9uTmF0aW9uKGV2ZW50LCBuYXRpb24sIHN0YXRlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF0aW9uRXZlbnRGcm9tSW5mbHVlbmNlQWN0aW9uKGFjdGlvbjogSW5mbHVlbmNlQWN0aW9uKTogTmF0aW9uRXZlbnQge1xuICBjb25zdCBzdWNjZXNzID0gTWF0aC5yYW5kb20oKSA8IGFjdGlvbi5ldmVudFR5cGUuc3VjY2Vzc1JhdGU7XG5cbiAgaWYgKHN1Y2Nlc3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogYWN0aW9uLmV2ZW50VHlwZS5uYW1lLFxuICAgICAgZHVyYXRpb246IHJhbmRvbUludGVnZXJCZXR3ZWVuKGFjdGlvbi5ldmVudFR5cGUuZHVyYXRpb24ubWluLCBhY3Rpb24uZXZlbnRUeXBlLmR1cmF0aW9uLm1heCksXG4gICAgICB0cmlnZ2VyZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgYmFzZU11bHRpcGxpZXI6IHJhbmRvbURlY2ltYWxCZXR3ZWVuKGFjdGlvbi5ldmVudFR5cGUuc3VjY2Vzc0Jhc2VNdWx0aXBsaWVyLm1pbiwgYWN0aW9uLmV2ZW50VHlwZS5zdWNjZXNzQmFzZU11bHRpcGxpZXIubWF4KSxcbiAgICAgIGZsdXhNdWx0aXBsaWVyOiByYW5kb21EZWNpbWFsQmV0d2VlbihhY3Rpb24uZXZlbnRUeXBlLnN1Y2Nlc3NGbHV4TXVsdGlwbGllci5taW4sIGFjdGlvbi5ldmVudFR5cGUuc3VjY2Vzc0ZsdXhNdWx0aXBsaWVyLm1heCksXG4gICAgICBldmVudFN0YXJ0SGVhZGxpbmU6IHJhbmRvbUFycmF5RWxlbWVudChhY3Rpb24uZXZlbnRUeXBlLnN1Y2Nlc3NIZWFkbGluZXMpLFxuICAgICAga2luZDogXCJwb3NpdGl2ZVwiLFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGFjdGlvbi5ldmVudFR5cGUubmFtZSxcbiAgICAgIGR1cmF0aW9uOiByYW5kb21JbnRlZ2VyQmV0d2VlbihhY3Rpb24uZXZlbnRUeXBlLmR1cmF0aW9uLm1pbiwgYWN0aW9uLmV2ZW50VHlwZS5kdXJhdGlvbi5tYXgpLFxuICAgICAgdHJpZ2dlcmVkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgIGJhc2VNdWx0aXBsaWVyOiByYW5kb21EZWNpbWFsQmV0d2VlbihhY3Rpb24uZXZlbnRUeXBlLmZhaWx1cmVCYXNlTXVsdGlwbGllci5taW4sIGFjdGlvbi5ldmVudFR5cGUuZmFpbHVyZUJhc2VNdWx0aXBsaWVyLm1heCksXG4gICAgICBmbHV4TXVsdGlwbGllcjogcmFuZG9tRGVjaW1hbEJldHdlZW4oYWN0aW9uLmV2ZW50VHlwZS5mYWlsdXJlRmx1eE11bHRpcGxpZXIubWluLCBhY3Rpb24uZXZlbnRUeXBlLmZhaWx1cmVGbHV4TXVsdGlwbGllci5tYXgpLFxuICAgICAgZXZlbnRTdGFydEhlYWRsaW5lOiByYW5kb21BcnJheUVsZW1lbnQoYWN0aW9uLmV2ZW50VHlwZS5mYWlsdXJlSGVhZGxpbmVzKSxcbiAgICAgIGtpbmQ6IFwibmVnYXRpdmVcIixcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCBTY2VuZXMgZnJvbSAnLi9zY2VuZXMnO1xuaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gJ3NyYy9zaGFyZWQvc3R5bGVzJztcblxuY29uc3QgZ2FtZUNvbmZpZzogR2FtZUNvbmZpZyA9IHtcbiAgdGl0bGU6ICdDdXJyZW5jeSBUcmFkZXInLFxuXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuXG4gIHdpZHRoOiBTdHlsZXMud2lkdGgsXG4gIGhlaWdodDogU3R5bGVzLmhlaWdodCxcblxuICBzY2VuZTogU2NlbmVzLFxuXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgICBhcmNhZGU6IHtcbiAgICAgIGRlYnVnOiB0cnVlLFxuICAgIH0sXG4gIH0sXG5cbiAgcGFyZW50OiAnZ2FtZScsXG4gIGJhY2tncm91bmRDb2xvcjogU3R5bGVzLmJhY2tncm91bmRDb2xvcixcbn07XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBnYW1lLnJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pO1xuIiwiY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5TY2VuZXMuU2V0dGluZ3MuQ29uZmlnID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICB2aXNpYmxlOiBmYWxzZSxcbiAga2V5OiAnQm9vdCcsXG59O1xuXG5cbi8qKlxuICogVGhlIGluaXRpYWwgc2NlbmUgdGhhdCBsb2FkcyBhbGwgbmVjZXNzYXJ5IGFzc2V0cyB0byB0aGUgZ2FtZSBhbmQgZGlzcGxheXMgYSBsb2FkaW5nIGJhci5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvb3RTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0R2FtZVdpZHRoID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdhbWUuc2NhbGUud2lkdGg7XG4gIH07XG5cbiAgcHJpdmF0ZSBnZXRHYW1lSGVpZ2h0ID0gKCkgPT4ge1xuICAgIHJldHVybiB0aGlzLmdhbWUuc2NhbGUuaGVpZ2h0O1xuICB9O1xuXG4gIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgIGNvbnN0IGhhbGZXaWR0aCA9IHRoaXMuZ2V0R2FtZVdpZHRoKCkgKiAwLjU7XG4gICAgY29uc3QgaGFsZkhlaWdodCA9IHRoaXMuZ2V0R2FtZUhlaWdodCgpICogMC41O1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJIZWlnaHQgPSAxMDA7XG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJXaWR0aCA9IDQwMDtcblxuICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gdGhpcy5hZGQucmVjdGFuZ2xlKGhhbGZXaWR0aCwgaGFsZkhlaWdodCwgcHJvZ3Jlc3NCYXJXaWR0aCwgcHJvZ3Jlc3NCYXJIZWlnaHQsIDB4MDAwMDAwKTtcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMuYWRkLnJlY3RhbmdsZShoYWxmV2lkdGggKyAyMCAtIHByb2dyZXNzQmFyQ29udGFpbmVyLndpZHRoICogMC41LCBoYWxmSGVpZ2h0LCAxMCwgcHJvZ3Jlc3NCYXJIZWlnaHQgLSAyMCwgMHg4ODg4ODgpO1xuXG4gICAgY29uc3QgbG9hZGluZ1RleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDc1LCBoYWxmSGVpZ2h0IC0gMTAwLCAnTG9hZGluZy4uLicpLnNldEZvbnRTaXplKDI0KTtcbiAgICBjb25zdCBwZXJjZW50VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQsICcwJScpLnNldEZvbnRTaXplKDI0KTtcbiAgICBjb25zdCBhc3NldFRleHQgPSB0aGlzLmFkZC50ZXh0KGhhbGZXaWR0aCAtIDI1LCBoYWxmSGVpZ2h0ICsgMTAwLCAnJykuc2V0Rm9udFNpemUoMjQpO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdwcm9ncmVzcycsICh2YWx1ZSkgPT4ge1xuICAgICAgcHJvZ3Jlc3NCYXIud2lkdGggPSAocHJvZ3Jlc3NCYXJXaWR0aCAtIDMwKSAqIHZhbHVlO1xuXG4gICAgICBjb25zdCBwZXJjZW50ID0gdmFsdWUgKiAxMDA7XG4gICAgICBwZXJjZW50VGV4dC5zZXRUZXh0KGAke3BlcmNlbnR9JWApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdmaWxlcHJvZ3Jlc3MnLCAoZmlsZSkgPT4ge1xuICAgICAgYXNzZXRUZXh0LnNldFRleHQoZmlsZS5rZXkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sb2FkLm9uKCdjb21wbGV0ZScsICgpID0+IHtcbiAgICAgIGxvYWRpbmdUZXh0LmRlc3Ryb3koKTtcbiAgICAgIHBlcmNlbnRUZXh0LmRlc3Ryb3koKTtcbiAgICAgIGFzc2V0VGV4dC5kZXN0cm95KCk7XG4gICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KCk7XG4gICAgICBwcm9ncmVzc0JhckNvbnRhaW5lci5kZXN0cm95KCk7XG5cbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01haW5NZW51Jyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWRBc3NldHMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgYXNzZXRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQgYnkgdGhlIGdhbWUgKHNwcml0ZXMsIGltYWdlcywgYW5pbWF0aW9ucywgdGlsZXMsIG11c2ljLCBldGMpXG4gICAqIHNob3VsZCBiZSBhZGRlZCB0byB0aGlzIG1ldGhvZC4gT25jZSBsb2FkZWQgaW4sIHRoZSBsb2FkZXIgd2lsbCBrZWVwIHRyYWNrIG9mIHRoZW0sIGluZGVwZWRlbnQgb2Ygd2hpY2ggc2NlbmVcbiAgICogaXMgY3VycmVudGx5IGFjdGl2ZSwgc28gdGhleSBjYW4gYmUgYWNjZXNzZWQgYW55d2hlcmUuXG4gICAqL1xuICBwcml2YXRlIGxvYWRBc3NldHMoKSB7XG4gICAgdGhpcy5sb2FkLmltYWdlKCd0cmVuZC11cCcsICdhc3NldHMvdHJlbmQtdXAuc3ZnJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCd0cmVuZC1kb3duJywgJ2Fzc2V0cy90cmVuZC1kb3duLnN2ZycpO1xuICAgIHRoaXMubG9hZC5pbWFnZSgnbG9nby1wbmcnLCAnYXNzZXRzL2xvZ28ucG5nJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdsb2dvLXN2ZycsICdhc3NldHMvbG9nby5zdmcnKTtcbiAgICB0aGlzLmxvYWQuYXVkaW8oJ3Jvb3QtbWFrZXItbXVzaWMtMScsICdhc3NldHMvcm9vdC1tYWtlci1tdXNpYy0xLm1wMycpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBEb21haW4gZnJvbSAnc3JjL2RvbWFpbic7XG5pbXBvcnQgKiBhcyBUcmFkaW5nRG9tYWluIGZyb20gJ3NyYy9kb21haW4vdHJhZGluZyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgKiBhcyBFeGNoYW5nZUludGVyZmFjZSBmcm9tICcuLi9jb21wb25lbnRzL2V4Y2hhbmdlLWludGVyZmFjZSc7XG5pbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnc3JjL3NoYXJlZC9zdHlsZXMnO1xuaW1wb3J0IHsgYWRkSG9yaXpvbnRhbFNjcmVlbkxpbmUgfSBmcm9tICdzcmMvY29tcG9uZW50cy9saW5lJztcbmltcG9ydCB7IGFkZFJlY3RhbmdsZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3JlY3RhbmdsZSc7XG5pbXBvcnQgKiBhcyBDdWx0SW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvY3VsdC1pbnRlcmZhY2UnO1xuaW1wb3J0ICogYXMgVGlja2VyIGZyb20gJ3NyYy9jb21wb25lbnRzL3RpY2tlcic7XG5pbXBvcnQgeyBHYW1lRXZlbnRzIH0gZnJvbSAnc3JjL3NoYXJlZC9ldmVudHMnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlNjZW5lcy5TZXR0aW5ncy5Db25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdHYW1lJyxcbn07XG5cbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICBkb21haW5TdGF0ZTogRG9tYWluLkRvbWFpblN0YXRlO1xuICB0aWNrZXJTdGF0ZTogVGlja2VyLlRpY2tlclN0YXRlO1xuXG4gIHB1YmxpYyBidXlBbW91bnQ6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBzZWxsQW1vdW50OiBudW1iZXIgPSAwO1xuICBwdWJsaWMgc2VsZWN0ZWRBY2NvdW50OiBUcmFkaW5nRG9tYWluLkFjY291bnQ7XG5cbiAgdXNlcm5hbWU6IHN0cmluZztcblxuICBkb21haW5UaWNrVGltZSA9IDEwMDA7IC8vIG1pbGxpc2Vjb25kc1xuICB0aW1lU2luY2VMYXN0VGljayA9IDA7XG4gIG11c2ljOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBpbml0KGRhdGE6IHsgdXNlcm5hbWU6IHN0cmluZyB9KSB7XG4gICAgdGhpcy51c2VybmFtZSA9IGRhdGEudXNlcm5hbWUgfHwgJyc7XG5cbiAgICB0aGlzLmV2ZW50cy5vbihHYW1lRXZlbnRzLmJ1eUFtb3VudENoYW5nZWQsIChhbW91bnQpID0+IHtcbiAgICAgIHRoaXMuYnV5QW1vdW50ID0gYW1vdW50O1xuICAgIH0pO1xuXG4gICAgdGhpcy5ldmVudHMub24oR2FtZUV2ZW50cy5zZWxsQW1vdW50Q2hhbmdlZCwgKGFtb3VudCkgPT4ge1xuICAgICAgdGhpcy5zZWxsQW1vdW50ID0gYW1vdW50O1xuICAgIH0pO1xuXG4gICAgdGhpcy5ldmVudHMub24oR2FtZUV2ZW50cy5zZWxlY3RlZEFjY291bnRDaGFuZ2VkLCAoeyBhY2NvdW50IH0pID0+IHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRBY2NvdW50ID0gYWNjb3VudDtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgdGhpcy5kb21haW5TdGF0ZSA9IERvbWFpbi5pbml0RG9tYWluU3RhdGUoe1xuICAgICAgcm9vdEN1cnJlbmN5TmFtZTogJ3Jvb3QnLFxuICAgICAgcm9vdEN1cnJlbmN5U3RhcnRpbmdBbW91bnQ6IDEwMCxcbiAgICAgIG5hdGlvbnM6IFtcbiAgICAgICAgeyBjdXJyZW5jeTogJ0R1bGxlcicsIG5hdGlvbjogJ0FuZHJvbWVkYScgfSxcbiAgICAgICAgeyBjdXJyZW5jeTogJ1doZW4nLCBuYXRpb246ICdDb3Jlbm5pYScgfSxcbiAgICAgICAgeyBjdXJyZW5jeTogJ1ByYXduJywgbmF0aW9uOiAnR3JlYXQgQnVydG9uJyB9LFxuICAgICAgICB7IGN1cnJlbmN5OiAnUGVzdG8nLCBuYXRpb246ICdNZWRpYW4nIH0sXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gdGhpcy5tdXNpYyA9IHRoaXMuc291bmQuYWRkKCdyb290LW1ha2VyLW11c2ljLTEnLCB7IGxvb3A6IHRydWUsIHZvbHVtZTogMSB9KTtcbiAgICAvLyB0aGlzLm11c2ljLnBsYXkoKTtcbiAgICAvLyB0aGlzLnNvdW5kLnBhdXNlT25CbHVyID0gZmFsc2U7XG5cbiAgICBjb25zdCBleGNoYW5nZVRhYiA9IHRoaXMuYWRkLnRleHQoU3R5bGVzLm9mZnNldCwgU3R5bGVzLnRhYlksICdFWENIQU5HRScsIFN0eWxlcy5zZWxlY3RlZFRhYik7XG4gICAgZXhjaGFuZ2VUYWIuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pO1xuICAgIGV4Y2hhbmdlVGFiLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICBjdWx0VGFiLnNldFN0eWxlKFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgICAgIGV4Y2hhbmdlVGFiLnNldFN0eWxlKFN0eWxlcy5zZWxlY3RlZFRhYik7XG4gICAgICBjdWx0Q29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgZXhjaGFuZ2VDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGN1bHRUYWIgPSB0aGlzLmFkZC50ZXh0KGV4Y2hhbmdlVGFiLnggKyBleGNoYW5nZVRhYi53aWR0aCArIFN0eWxlcy5vZmZzZXQgKiAyLCBTdHlsZXMudGFiWSwgJ0NVTFQnLCBTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gICAgY3VsdFRhYi5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSkub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICAgIGV4Y2hhbmdlVGFiLnNldFN0eWxlKFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgICAgIGN1bHRUYWIuc2V0U3R5bGUoU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgICAgIGV4Y2hhbmdlQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgY3VsdENvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGxvZ28gPSB0aGlzLmFkZC5pbWFnZShTdHlsZXMub2Zmc2V0ICogMiwgU3R5bGVzLm9mZnNldCwgJ2xvZ28tcG5nJykuc2V0T3JpZ2luKDAsIDApO1xuICAgIC8vIGxvZ28uc2V0U2NhbGUoMC4zLCAwLjMpOyAvLyBuZWNlc3NhcnkgZm9yIHRoZSBzdmcgc3R5bGVcbiAgICBhZGRIb3Jpem9udGFsU2NyZWVuTGluZSh0aGlzLCA1MCk7XG4gICAgY29uc3QgdXNlcm5hbWVUZXh0ID0gdGhpcy5hZGQudGV4dChTdHlsZXMub2Zmc2V0LCA3MCwgJ1VTRVJOQU1FJywgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGFkZFJlY3RhbmdsZSh0aGlzLCB1c2VybmFtZVRleHQueCArIHVzZXJuYW1lVGV4dC53aWR0aCArIChTdHlsZXMub2Zmc2V0ICogMiksIDYwLCBTdHlsZXMudHJhZGVQYWdlLnVzZXJuYW1lV2lkdGgsIFN0eWxlcy50cmFkZVBhZ2UudXNlcm5hbWVIZWlnaHQsIFN0eWxlcy5mb3JlZ3JvdW5kQ29sb3JIZXgpO1xuICAgIHRoaXMuYWRkLnRleHQodXNlcm5hbWVUZXh0LnggKyB1c2VybmFtZVRleHQud2lkdGggKyAoU3R5bGVzLm9mZnNldCAqIDMpLCA2MCArIFN0eWxlcy5vZmZzZXQgLyAyLCB0aGlzLnVzZXJuYW1lLCB7IGNvbG9yOiBTdHlsZXMudGV4dENvbG9yIH0pO1xuXG4gICAgYWRkSG9yaXpvbnRhbFNjcmVlbkxpbmUodGhpcywgMTAwKTtcbiAgICBhZGRIb3Jpem9udGFsU2NyZWVuTGluZSh0aGlzLCA3MDApO1xuXG4gICAgY29uc3QgZXhjaGFuZ2VDb250YWluZXIgPSBFeGNoYW5nZUludGVyZmFjZS5jcmVhdGVFeGNoYW5nZUludGVyZmFjZSh0aGlzLCB0aGlzLmRvbWFpblN0YXRlKTtcbiAgICBjb25zdCBjdWx0Q29udGFpbmVyID0gQ3VsdEludGVyZmFjZS5jcmVhdGVDdWx0SW50ZXJmYWNlKHRoaXMsIHRoaXMuZG9tYWluU3RhdGUpLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgdGhpcy50aWNrZXJTdGF0ZSA9IFRpY2tlci5jcmVhdGVOZXdzVGlja2VyKHRoaXMsIHRoaXMuZG9tYWluU3RhdGUpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZSh0aW1lLCBkZWx0YSkge1xuICAgIHRoaXMudGltZVNpbmNlTGFzdFRpY2sgKz0gZGVsdGE7XG5cbiAgICBpZiAodGhpcy50aW1lU2luY2VMYXN0VGljayA+PSB0aGlzLmRvbWFpblRpY2tUaW1lKSB7XG4gICAgICBjb25zb2xlLmxvZygndGljayEnKTtcbiAgICAgIHRoaXMudGltZVNpbmNlTGFzdFRpY2sgPSAwO1xuXG4gICAgICBEb21haW4uaGFuZGxlVGljayh0aGlzLmRvbWFpblN0YXRlKTtcbiAgICB9XG5cbiAgICBUaWNrZXIudXBkYXRlU3Rvcmllcyh0aGlzLCB0aGlzLnRpY2tlclN0YXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTWFpbk1lbnVTY2VuZSB9IGZyb20gJy4vbWFpbi1tZW51LXNjZW5lJztcbmltcG9ydCB7IEJvb3RTY2VuZSB9IGZyb20gJy4vYm9vdC1zY2VuZSc7XG5pbXBvcnQgeyBHYW1lU2NlbmUgfSBmcm9tICcuL2dhbWUtc2NlbmUnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gIEJvb3RTY2VuZSxcbiAgTWFpbk1lbnVTY2VuZSxcbiAgR2FtZVNjZW5lLFxuXTtcbiIsImltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5pbXBvcnQgKiBhcyBTaGFyZWQgZnJvbSAnc3JjL3NoYXJlZCc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICdzcmMvY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRCb3ggfSBmcm9tICdzcmMvY29tcG9uZW50cy9pbnB1dC1ib3gnO1xuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlNjZW5lcy5TZXR0aW5ncy5Db25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdNYWluTWVudScsXG59O1xuXG5leHBvcnQgY2xhc3MgTWFpbk1lbnVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgY29uc3QgbG9nb1ggPSAzMDA7XG4gICAgY29uc3QgdXNlcm5hbWVUZXh0WCA9IDM3NTtcbiAgICBjb25zdCB1c2VybmFtZUZpZWxkWCA9IDQ3NTtcbiAgICBjb25zdCBsb2dpbkJ1dHRvbldpZHRoID0gMTAwO1xuICAgIGNvbnN0IGxvZ2luWCA9IChTdHlsZXMud2lkdGggLyAyKSAtIGxvZ2luQnV0dG9uV2lkdGggLyAyO1xuICAgIGNvbnN0IGxvZ2luWSA9IDUwMDtcblxuICAgIGNvbnN0IGxvZ29ZID0gMjAwO1xuICAgIGNvbnN0IHVzZXJuYW1lWSA9IDQwMDtcblxuICAgIHRoaXMuYWRkLmltYWdlKGxvZ29YLCBsb2dvWSwgJ2xvZ28tc3ZnJykuc2V0T3JpZ2luKDAsIDApO1xuXG4gICAgdGhpcy5hZGQudGV4dCh1c2VybmFtZVRleHRYLCB1c2VybmFtZVkgKyA1LCAnVVNFUk5BTUU6Jyk7XG4gICAgY3JlYXRlSW5wdXRCb3godGhpcywgdXNlcm5hbWVGaWVsZFgsIHVzZXJuYW1lWSwgKHRleHQ6IHN0cmluZykgPT4gdGhpcy51c2VybmFtZSA9IHRleHQsIDEyKTtcblxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJywgeyB1c2VybmFtZTogdGhpcy51c2VybmFtZSB9KTtcbiAgICB9O1xuICAgIGNyZWF0ZUJ1dHRvbih0aGlzLCBsb2dpblgsIGxvZ2luWSwgJ0xPR0lOJywgb25DbGljaywgbG9naW5CdXR0b25XaWR0aClcbiAgfVxufVxuIiwiXG5leHBvcnQgZW51bSBHYW1lRXZlbnRzIHtcbiAgc2VsZWN0ZWRBY2NvdW50Q2hhbmdlZCA9IFwiZ2FtZS5zZWxlY3RlZEFjY291bnRDaGFuZ2VkXCIsXG4gIGJ1eUFtb3VudENoYW5nZWQgPSBcImdhbWUuYnV5QW1vdW50Q2hhbmdlZFwiLFxuICBzZWxsQW1vdW50Q2hhbmdlZCA9IFwiZ2FtZS5zZWxsQW1vdW50Q2hhbmdlZFwiLFxufVxuIiwiZXhwb3J0IGNvbnN0IGdldEdhbWVXaWR0aCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLndpZHRoO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEdhbWVIZWlnaHQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSkgPT4ge1xuICByZXR1cm4gc2NlbmUuZ2FtZS5zY2FsZS5oZWlnaHQ7XG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TnVtYmVyRm9yRGlzcGxheSA9IChuOiBudW1iZXIgfCBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KGAke259YCk7XG4gIGlmIChpc05hTihudW0pKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIHJldHVybiBudW0udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge3N0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcsIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMn0pLnN1YnN0cmluZygxKTtcbn07XG5cbi8vIGV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXJGb3JEaXNwbGF5ID0gKG46IG51bWJlciB8IHN0cmluZykgPT4ge1xuLy8gICByZXR1cm4gcGFyc2VGbG9hdChgJHtufWApLnRvRml4ZWQoMik7XG4vLyB9O1xuIiwiZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvciA9ICcjQTI5NzcxJztcbmV4cG9ydCBjb25zdCBmb3JlZ3JvdW5kQ29sb3IgPSAnIzJCMjYxQyc7XG5leHBvcnQgY29uc3QgdGV4dENvbG9yID0gJyNDRENCQzInO1xuZXhwb3J0IGNvbnN0IGRldGFpbERhcmtDb2xvciA9ICcjODE3QzZBJztcbmV4cG9ydCBjb25zdCBkZXRhaWxMaWdodENvbG9yID0gJyNGMkU5Q0MnO1xuZXhwb3J0IGNvbnN0IGJ1dHRvblRleHRDb2xvciA9ICcjNEU0NjI2JztcblxuZXhwb3J0IGNvbnN0IGJhY2tncm91bmRDb2xvckhleCA9IDB4QTI5NzcxO1xuZXhwb3J0IGNvbnN0IGZvcmVncm91bmRDb2xvckhleCA9IDB4MkIyNjFDO1xuZXhwb3J0IGNvbnN0IHRleHRDb2xvckhleCA9IDB4Q0RDQkMyO1xuZXhwb3J0IGNvbnN0IGRldGFpbERhcmtDb2xvckhleCA9IDB4ODE3QzZBO1xuZXhwb3J0IGNvbnN0IGRldGFpbExpZ2h0Q29sb3JIZXggPSAweEYyRTlDQztcbmV4cG9ydCBjb25zdCBidXR0b25UZXh0Q29sb3JIZXggPSAweDRFNDYyNjtcblxuZXhwb3J0IGNvbnN0IGxpc3RJdGVtU3R5bGUgPSB7IGZvbnRTaXplOiAnMTRweCcsIGNvbG9yOiB0ZXh0Q29sb3IgfTtcbmV4cG9ydCBjb25zdCB0cmFkZUFtb3VudFRleHQgPSB7IGZvbnRTaXplOiAnMTJweCcsIGNvbG9yOiB0ZXh0Q29sb3IgfTtcbmV4cG9ydCBjb25zdCBhdmFpbGFibGVSb290ID0geyBmb250U2l6ZTogJzE2cHgnLCBjb2xvcjogJyM4OUY2NjMnIH07XG5leHBvcnQgY29uc3QgYnV0dG9uTGFiZWxTdHlsZSA9IHsgZm9udFNpemU6ICcxNHB4JywgY29sb3I6IGZvcmVncm91bmRDb2xvciB9O1xuXG5leHBvcnQgY29uc3QgZm9yZWdyb3VuZFN0eWxlID0geyBjb2xvcjogZm9yZWdyb3VuZENvbG9yIH07XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RlZFRhYiA9IHsgZm9udFNpemU6ICcxNnB4JywgY29sb3I6IGJhY2tncm91bmRDb2xvciwgYmFja2dyb3VuZENvbG9yOiBidXR0b25UZXh0Q29sb3IgfTtcbmV4cG9ydCBjb25zdCB1bnNlbGVjdGVkVGFiID0geyBmb250U2l6ZTogJzE2cHgnLCBjb2xvcjogYnV0dG9uVGV4dENvbG9yLCBiYWNrZ3JvdW5kQ29sb3I6IGJhY2tncm91bmRDb2xvciB9O1xuXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gMTA7XG5cbmV4cG9ydCBjb25zdCB3aWR0aCA9IDEwMjQ7XG5leHBvcnQgY29uc3QgaGVpZ2h0ID0gNzY4O1xuZXhwb3J0IGNvbnN0IGlucHV0Qm94V2lkdGggPSAxNTA7XG5cbmV4cG9ydCBjb25zdCB0cmFkZVBhZ2UgPSB7XG4gIGN1cnJlbmN5TGlzdDoge1xuICAgIHdpZHRoOiA3MDcsXG4gICAgaGVpZ2h0OiA1MzQsXG4gICAgeDogb2Zmc2V0LFxuICAgIHk6IDE1MCxcbiAgICBpdGVtQ29sb3I6IHRleHRDb2xvcixcbiAgICBoZWFkZXJDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgIGhlYWRlckhlaWdodDogNDUsXG4gICAgbGlzdEl0ZW1YOiBvZmZzZXQgKiAyLFxuICAgIGxpc3RJdGVtWTogMTk1LFxuICB9LFxuICB0cmFkZUludGVyZmFjZToge1xuICAgIHg6IDcwNyArIDIgKiBvZmZzZXQsXG4gICAgZXhjaGFuZ2VUYWJZOiAxNTAsXG4gICAgaW5wdXRCb3hYOiB3aWR0aCAtIG9mZnNldCAtIGlucHV0Qm94V2lkdGgsXG4gIH0sXG4gIHRyYW5zYWN0aW9uV2lkdGg6IDI4NyxcbiAgdXNlcm5hbWVXaWR0aDogMjU0LFxuICB1c2VybmFtZUhlaWdodDogMzAsXG4gIGlucHV0V2lkdGg6IDE0MyxcbiAgaW5wdXRIZWlnaHQ6IDM5LFxuICBzZWxlY3RlZExpbmVJdGVtSGV4OiAweDNFM0UzRCxcbn1cblxuZXhwb3J0IGNvbnN0IGN1bHRQYWdlID0ge1xuICBmb2xsb3dlckxpc3Q6IHtcbiAgICB3aWR0aDogNTgwLFxuICAgIGhlaWdodDogNTM0LFxuICAgIHg6IG9mZnNldCxcbiAgICB5OiAxNTAsXG4gICAgaXRlbUNvbG9yOiB0ZXh0Q29sb3IsXG4gICAgaGVhZGVyQ29sb3I6IGJhY2tncm91bmRDb2xvcixcbiAgICBoZWFkZXJIZWlnaHQ6IDQ1LFxuICAgIGxpc3RJdGVtWDogb2Zmc2V0ICogMixcbiAgICBsaXN0SXRlbVk6IDE5NSxcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIGxhYmVsU3R5bGU6IGJ1dHRvbkxhYmVsU3R5bGUsXG4gICAgYnV0dG9uT2Zmc2V0SGVpZ2h0OiA3NSxcbiAgICBidXR0b25YOiA4NTAsXG4gICAgbGFiZWxYOiA2MDAsIC8vIFN0eWxlcy5jdWx0UGFnZS5mb2xsb3dlckxpc3Qud2lkdGggKyBTdHlsZXMub2Zmc2V0ICogMlxuICB9LFxuICBoYXBwaW5lc3M6IHtcbiAgICB4OiA2MDAsXG4gICAgbGFiZWxZOiA1MjUsXG4gICAgbWV0ZXJZOiA1NTAsXG4gICAgbWV0ZXJXaWR0aDogNDE1LFxuICAgIG1ldGVySGVpZ2h0OiA1MCxcbiAgfSxcbiAgZG9uYXRpb246IHtcbiAgICBsYWJlbFg6IDYwMCxcbiAgICBpbnB1dFg6IDg1MCxcbiAgICB5OiA2NTAsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCB0YWJZID0gMTE3O1xuZXhwb3J0IGNvbnN0IGxpbmVJdGVtSGVpZ2h0ID0gMzA7XG5cbmV4cG9ydCBjb25zdCB0aWNrZXJXaWR0aCA9IDEwMDQ7XG5leHBvcnQgY29uc3QgdGlja2VySGVpZ2h0ID0gNTA7XG4iXSwic291cmNlUm9vdCI6IiJ9