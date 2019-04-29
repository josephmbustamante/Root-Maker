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
var Styles = __webpack_require__(/*! src/shared/styles */ "./src/shared/styles.ts");
var rectangle_1 = __webpack_require__(/*! src/components/rectangle */ "./src/components/rectangle.ts");
var button_1 = __webpack_require__(/*! src/components/button */ "./src/components/button.ts");
var domain_1 = __webpack_require__(/*! src/domain */ "./src/domain/index.ts");
exports.createCultInterface = function (scene, domainState) {
    var cultContainer = scene.add.container(0, 0);
    createCultInfo(scene, cultContainer, domainState);
    createCultOptions(scene, cultContainer);
    createCultHappinessMeter(scene, cultContainer, domainState);
    createCultSuggestedDonationInput(scene, cultContainer);
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
    var followersPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 2), domainState.followersPerTick.toFixed(2), infoRowStyle);
    var donationsPerTickValue = scene.add.text(infoRowValueX, infoRowStartY + (Styles.lineItemHeight * 3), (domainState.followers * domainState.suggestedDonation).toFixed(2), infoRowStyle);
    domainState.events.on(domain_1.DomainEvents.followerCountChanged, function () {
        followersValue.text = domainState.followers.toFixed(2);
        donationsPerTickValue.text = (domainState.followers * domainState.suggestedDonation).toFixed(2);
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
    container.add([
        scene.add.text(Styles.cultPage.happiness.x, Styles.cultPage.happiness.labelY, 'Follower Happiness', Styles.cultPage.options.labelStyle)
    ].concat(rectangle_1.addRectangle(scene, Styles.cultPage.happiness.x, Styles.cultPage.happiness.meterY, Styles.cultPage.happiness.meterWidth, Styles.cultPage.happiness.meterHeight, Styles.foregroundColorHex)));
};
var createCultSuggestedDonationInput = function (scene, container) {
    container.add([
        scene.add.text(Styles.cultPage.donation.labelX, Styles.cultPage.donation.y, 'Suggested Weekly Donation', Styles.cultPage.options.labelStyle),
        scene.add.text(Styles.cultPage.donation.inputX, Styles.cultPage.donation.y, '2,000', Styles.listItemStyle),
    ]);
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
exports.initCultDomainState = function (input, events) {
    return {
        events: events,
        happiness: 100,
        followers: 1,
        capacity: 100,
        followersPerTick: 0.1,
        suggestedDonation: 5,
    };
};
exports.changeSuggestedDonation = function (newDonationAmount, domainState) {
    domainState.suggestedDonation = newDonationAmount;
};
exports.generateRevenueFromCult = function (domainState) {
    var revenue = domainState.followers * domainState.suggestedDonation;
    domainState.events.emit(events_1.DomainEvents.cultRevenueGenerated, revenue);
};
exports.addFollowersToCult = function (domainState) {
    domainState.followers += domainState.followersPerTick;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2N1bHQtaW50ZXJmYWNlL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2V4Y2hhbmdlLWludGVyZmFjZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbnB1dC1ib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yZWN0YW5nbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGlja2VyL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vY3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2V2ZW50cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tYWluL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9kb21haW4vdHJhZGluZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2Jvb3Qtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9nYW1lLXNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy9tYWluLW1lbnUtc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3N0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFD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SUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvRyxJQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0gsSUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFN0gsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV4QixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFD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Q0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUYsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUcsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hJLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FB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LEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxHQUFHO1FBQ1gsQ0FBQyxFQUFFLGNBQU07UUFDVCxDQUFDLEVBQUUsR0FBRztRQUNOLFNBQVMsRUFBRSxpQkFBUztRQUNwQixXQUFXLEVBQUUsdUJBQWU7UUFDNUIsWUFBWSxFQUFFLEVBQUU7UUFDaEIsU0FBUyxFQUFFLGNBQU0sR0FBRyxDQUFDO1FBQ3JCLFNBQVMsRUFBRSxHQUFHO0tBQ2Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxVQUFVLEVBQUUsd0JBQWdCO1FBQzVCLGtCQUFrQixFQUFFLEVBQUU7UUFDdEIsT0FBTyxFQUFFLEdBQUc7UUFDWixNQUFNLEVBQUUsR0FBRztLQUNaO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsQ0FBQyxFQUFFLEdBQUc7UUFDTixNQUFNLEVBQUUsR0FBRztRQUNYLE1BQU0sRUFBRSxHQUFHO1FBQ1gsVUFBVSxFQUFFLEdBQUc7UUFDZixXQUFXLEVBQUUsRUFBRTtLQUNoQjtJQUNELFFBQVEsRUFBRTtRQUNSLE1BQU0sRUFBRSxHQUFHO1FBQ1gsTUFBTSxFQUFFLEdBQUc7UUFDWCxDQUFDLEVBQUUsR0FBRztLQUNQO0NBQ0Y7QUFDWSxZQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ1gsc0JBQWMsR0FBRyxFQUFFLENBQUM7QUFFcEIsbUJBQVcsR0FBRyxJQUFJLENBQUM7QUFDbkIsb0JBQVksR0FBRyxFQUFFLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5jb25zdCBidXR0b25SZXN0U3R5bGUgPSB7XG4gIGZpbGw6ICcjRkZGRkZGJyxcbn07XG5cbmNvbnN0IGJ1dHRvbkhvdmVyU3R5bGUgPSB7XG4gIGZpbGw6ICcjN0NGQzAwJyxcbn07XG5cbmNvbnN0IGJ1dHRvbkFjdGl2ZVN0eWxlID0ge1xuICBmaWxsOiAnIzg4ODg4OCcsXG59O1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlRleHQge1xuICBjb25zdHJ1Y3RvcihzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdGV4dDogc3RyaW5nLCBvbkNsaWNrPzogKCkgPT4gdm9pZCkge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5LCB0ZXh0LCBidXR0b25SZXN0U3R5bGUpO1xuICAgIHNjZW5lLmFkZC5leGlzdGluZyh0aGlzKTtcblxuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pXG4gICAgICAub24oJ3BvaW50ZXJvdmVyJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKVxuICAgICAgLm9uKCdwb2ludGVyb3V0JywgdGhpcy5lbnRlck1lbnVCdXR0b25SZXN0U3RhdGUpXG4gICAgICAub24oJ3BvaW50ZXJkb3duJywgdGhpcy5lbnRlck1lbnVCdXR0b25BY3RpdmVTdGF0ZSlcbiAgICAgIC5vbigncG9pbnRlcnVwJywgdGhpcy5lbnRlck1lbnVCdXR0b25Ib3ZlclN0YXRlKTtcblxuICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICB0aGlzLm9uKCdwb2ludGVydXAnLCBvbkNsaWNrKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVudGVyTWVudUJ1dHRvbkhvdmVyU3RhdGUoKSB7XG4gICAgdGhpcy5zZXRTdHlsZShidXR0b25Ib3ZlclN0eWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uUmVzdFN0YXRlKCkge1xuICAgIHRoaXMuc2V0U3R5bGUoYnV0dG9uUmVzdFN0eWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgZW50ZXJNZW51QnV0dG9uQWN0aXZlU3RhdGUoKSB7XG4gICAgdGhpcy5zZXRTdHlsZShidXR0b25BY3RpdmVTdHlsZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1dHRvblRleHRIb3ZlclN0eWxlID0geyBmb250U2l6ZTogJzE0cHgnLCBjb2xvcjogU3R5bGVzLmRldGFpbExpZ2h0Q29sb3IgfTtcbmV4cG9ydCBjb25zdCBidXR0b25UZXh0UmVzdFN0eWxlID0geyBmb250U2l6ZTogJzE0cHgnLCBjb2xvcjogU3R5bGVzLmJ1dHRvblRleHRDb2xvciB9O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQnV0dG9uID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIG9uQ2xpY2s6ICgpID0+IHZvaWQsIHc/OiBudW1iZXIsIGg/OiBudW1iZXIpID0+IHtcbiAgY29uc3QgdGV4dEVsZW1lbnQgPSBzY2VuZS5hZGQudGV4dCh4LCB5LCB0ZXh0LCBidXR0b25UZXh0UmVzdFN0eWxlKS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IHdpZHRoID0gdyB8fCB0ZXh0RWxlbWVudC53aWR0aCArIFN0eWxlcy5vZmZzZXQgKiAyO1xuICBjb25zdCBoZWlnaHQgPSBoIHx8IHRleHRFbGVtZW50LmhlaWdodCArIFN0eWxlcy5vZmZzZXQgKiAyO1xuXG4gIGNvbnN0IGJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgU3R5bGVzLmJhY2tncm91bmRDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuICBjb25zdCB0b3BMaW5lID0gc2NlbmUuYWRkLmxpbmUoMCwgMCwgeCAtIDEsIHksIHggKyB3aWR0aCwgeSwgU3R5bGVzLmRldGFpbExpZ2h0Q29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgY29uc3QgbGVmdExpbmUgPSBzY2VuZS5hZGQubGluZSgwLCAwLCB4LCB5IC0gMSwgeCwgeSArIGhlaWdodCArIDEsIFN0eWxlcy5kZXRhaWxMaWdodENvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IHJpZ2h0TGluZSA9IHNjZW5lLmFkZC5saW5lKDAsIDAsIHggKyB3aWR0aCwgeSAtIDEsIHggKyB3aWR0aCwgeSArIGhlaWdodCArIDEsIFN0eWxlcy5kZXRhaWxEYXJrQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcbiAgY29uc3QgYm90dG9tTGluZSA9IHNjZW5lLmFkZC5saW5lKDAsIDAsIHggKyAxLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIFN0eWxlcy5kZXRhaWxEYXJrQ29sb3JIZXgpLnNldE9yaWdpbigwLCAwKTtcblxuICB0ZXh0RWxlbWVudC5zZXREZXB0aCgxKTtcblxuICB0ZXh0RWxlbWVudC5zZXRYKCgoYm94LndpZHRoIC0gdGV4dEVsZW1lbnQud2lkdGgpIC8gMikgKyBib3gueCk7XG4gIHRleHRFbGVtZW50LnNldFkoKChib3guaGVpZ2h0IC0gdGV4dEVsZW1lbnQuaGVpZ2h0KSAvIDIpICsgYm94LnkpO1xuXG4gIGNvbnN0IG1vdXNlSGFuZGxlckJveCA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgU3R5bGVzLmJhY2tncm91bmRDb2xvckhleCwgMCkuc2V0T3JpZ2luKDAsIDApLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KTtcbiAgbW91c2VIYW5kbGVyQm94Lm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICB0ZXh0RWxlbWVudC5zZXRTdHlsZShidXR0b25UZXh0SG92ZXJTdHlsZSlcbiAgICBib3guc2V0RmlsbFN0eWxlKFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpXG4gIH0pO1xuICBtb3VzZUhhbmRsZXJCb3gub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XG4gICAgdGV4dEVsZW1lbnQuc2V0U3R5bGUoYnV0dG9uVGV4dFJlc3RTdHlsZSlcbiAgICBib3guc2V0RmlsbFN0eWxlKFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpXG4gIH0pO1xuICBtb3VzZUhhbmRsZXJCb3gub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgIHRleHRFbGVtZW50LnNldFN0eWxlKGJ1dHRvblRleHRIb3ZlclN0eWxlKVxuICAgIGJveC5zZXRGaWxsU3R5bGUoU3R5bGVzLmRldGFpbERhcmtDb2xvckhleClcblxuICB9KTtcbiAgbW91c2VIYW5kbGVyQm94Lm9uKCdwb2ludGVydXBvdXRzaWRlJywgKCkgPT4ge1xuICAgIHRleHRFbGVtZW50LnNldFN0eWxlKGJ1dHRvblRleHRIb3ZlclN0eWxlKTtcbiAgICBib3guc2V0RmlsbFN0eWxlKFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpXG5cbiAgfSk7XG4gIG1vdXNlSGFuZGxlckJveC5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgIHRleHRFbGVtZW50LnNldFN0eWxlKGJ1dHRvblRleHRIb3ZlclN0eWxlKTtcbiAgICBib3guc2V0RmlsbFN0eWxlKFN0eWxlcy5iYWNrZ3JvdW5kQ29sb3JIZXgpXG5cbiAgfSk7XG4gIG1vdXNlSGFuZGxlckJveC5vbigncG9pbnRlcnVwJywgb25DbGljayk7XG5cbiAgcmV0dXJuIFtcbiAgICBib3gsXG4gICAgdGV4dEVsZW1lbnQsXG4gICAgdG9wTGluZSxcbiAgICBsZWZ0TGluZSxcbiAgICByaWdodExpbmUsXG4gICAgYm90dG9tTGluZSxcbiAgICBtb3VzZUhhbmRsZXJCb3gsXG4gIF07XG59O1xuIiwiaW1wb3J0ICogYXMgQ3VsdERvbWFpbiBmcm9tICdzcmMvZG9tYWluL2N1bHQnO1xuaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gJ3NyYy9zaGFyZWQvc3R5bGVzJztcbmltcG9ydCB7IGFkZFJlY3RhbmdsZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL3JlY3RhbmdsZSc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICdzcmMvY29tcG9uZW50cy9idXR0b24nO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRzIH0gZnJvbSAnc3JjL2RvbWFpbic7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDdWx0SW50ZXJmYWNlID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGRvbWFpblN0YXRlOiBDdWx0RG9tYWluLkN1bHREb21haW5TdGF0ZSkgPT4ge1xuICBjb25zdCBjdWx0Q29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLCAwKTtcblxuICBjcmVhdGVDdWx0SW5mbyhzY2VuZSwgY3VsdENvbnRhaW5lciwgZG9tYWluU3RhdGUpO1xuICBjcmVhdGVDdWx0T3B0aW9ucyhzY2VuZSwgY3VsdENvbnRhaW5lcik7XG4gIGNyZWF0ZUN1bHRIYXBwaW5lc3NNZXRlcihzY2VuZSwgY3VsdENvbnRhaW5lciwgZG9tYWluU3RhdGUpO1xuICBjcmVhdGVDdWx0U3VnZ2VzdGVkRG9uYXRpb25JbnB1dChzY2VuZSwgY3VsdENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGN1bHRDb250YWluZXI7XG59O1xuXG5jb25zdCBpbmZvUm93U3R5bGUgPSBTdHlsZXMubGlzdEl0ZW1TdHlsZTtcblxuY29uc3QgaW5mb1Jvd1RleHRYID0gMjA7XG5jb25zdCBpbmZvUm93VmFsdWVYID0gNDUwO1xuXG5jb25zdCBpbmZvUm93U3RhcnRZID0gU3R5bGVzLmN1bHRQYWdlLmZvbGxvd2VyTGlzdC55ICsgU3R5bGVzLm9mZnNldDtcblxuY29uc3QgY3JlYXRlQ3VsdEluZm8gPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyLCBkb21haW5TdGF0ZTogQ3VsdERvbWFpbi5DdWx0RG9tYWluU3RhdGUpID0+IHtcbiAgY29udGFpbmVyLmFkZChhZGRSZWN0YW5nbGUoc2NlbmUsXG4gICAgU3R5bGVzLmN1bHRQYWdlLmZvbGxvd2VyTGlzdC54LFxuICAgIFN0eWxlcy5jdWx0UGFnZS5mb2xsb3dlckxpc3QueSxcbiAgICBTdHlsZXMuY3VsdFBhZ2UuZm9sbG93ZXJMaXN0LndpZHRoLFxuICAgIFN0eWxlcy5jdWx0UGFnZS5mb2xsb3dlckxpc3QuaGVpZ2h0LFxuICAgIFN0eWxlcy5mb3JlZ3JvdW5kQ29sb3JIZXgsXG4gICkpO1xuXG4gIGNvbnRhaW5lci5hZGQoW1xuICAgIHNjZW5lLmFkZC50ZXh0KGluZm9Sb3dUZXh0WCwgaW5mb1Jvd1N0YXJ0WSwgJ0ZvbGxvd2VycycsIGluZm9Sb3dTdHlsZSksXG4gICAgc2NlbmUuYWRkLnRleHQoaW5mb1Jvd1RleHRYLCBpbmZvUm93U3RhcnRZICsgKFN0eWxlcy5saW5lSXRlbUhlaWdodCAqIDEpLCAnQ2FwYWNpdHknLCBpbmZvUm93U3R5bGUpLFxuICAgIHNjZW5lLmFkZC50ZXh0KGluZm9Sb3dUZXh0WCwgaW5mb1Jvd1N0YXJ0WSArIChTdHlsZXMubGluZUl0ZW1IZWlnaHQgKiAyKSwgJ05ldyBGb2xsb3dlcnMgcGVyIFRpY2snLCBpbmZvUm93U3R5bGUpLFxuICAgIHNjZW5lLmFkZC50ZXh0KGluZm9Sb3dUZXh0WCwgaW5mb1Jvd1N0YXJ0WSArIChTdHlsZXMubGluZUl0ZW1IZWlnaHQgKiAzKSwgJ0RvbmF0aW9ucyBwZXIgVGljaycsIGluZm9Sb3dTdHlsZSksXG4gIF0pXG5cbiAgY29uc3QgZm9sbG93ZXJzVmFsdWUgPSBzY2VuZS5hZGQudGV4dChpbmZvUm93VmFsdWVYLCBpbmZvUm93U3RhcnRZLCBkb21haW5TdGF0ZS5mb2xsb3dlcnMudG9GaXhlZCgyKSwgaW5mb1Jvd1N0eWxlKTtcbiAgY29uc3QgY2FwYWNpdHlWYWx1ZSA9IHNjZW5lLmFkZC50ZXh0KGluZm9Sb3dWYWx1ZVgsIGluZm9Sb3dTdGFydFkgKyAoU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogMSksIGAke2RvbWFpblN0YXRlLmNhcGFjaXR5fWAsIGluZm9Sb3dTdHlsZSk7XG4gIGNvbnN0IGZvbGxvd2Vyc1BlclRpY2tWYWx1ZSA9IHNjZW5lLmFkZC50ZXh0KGluZm9Sb3dWYWx1ZVgsIGluZm9Sb3dTdGFydFkgKyAoU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogMiksIGRvbWFpblN0YXRlLmZvbGxvd2Vyc1BlclRpY2sudG9GaXhlZCgyKSwgaW5mb1Jvd1N0eWxlKTtcbiAgY29uc3QgZG9uYXRpb25zUGVyVGlja1ZhbHVlID0gc2NlbmUuYWRkLnRleHQoaW5mb1Jvd1ZhbHVlWCwgaW5mb1Jvd1N0YXJ0WSArIChTdHlsZXMubGluZUl0ZW1IZWlnaHQgKiAzKSwgKGRvbWFpblN0YXRlLmZvbGxvd2VycyAqIGRvbWFpblN0YXRlLnN1Z2dlc3RlZERvbmF0aW9uKS50b0ZpeGVkKDIpLCBpbmZvUm93U3R5bGUpO1xuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuZm9sbG93ZXJDb3VudENoYW5nZWQsICgpID0+IHtcbiAgICBmb2xsb3dlcnNWYWx1ZS50ZXh0ID0gZG9tYWluU3RhdGUuZm9sbG93ZXJzLnRvRml4ZWQoMik7XG4gICAgZG9uYXRpb25zUGVyVGlja1ZhbHVlLnRleHQgPSAoZG9tYWluU3RhdGUuZm9sbG93ZXJzICogZG9tYWluU3RhdGUuc3VnZ2VzdGVkRG9uYXRpb24pLnRvRml4ZWQoMik7XG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hZGQoW2ZvbGxvd2Vyc1ZhbHVlLCBjYXBhY2l0eVZhbHVlLCBmb2xsb3dlcnNQZXJUaWNrVmFsdWUsIGRvbmF0aW9uc1BlclRpY2tWYWx1ZV0pO1xufTtcblxuY29uc3Qgb3B0aW9uc1Jvd1RleHRYID0gU3R5bGVzLmN1bHRQYWdlLm9wdGlvbnMubGFiZWxYO1xuY29uc3Qgb3B0aW9uc1Jvd0J1dHRvblggPSBTdHlsZXMuY3VsdFBhZ2Uub3B0aW9ucy5idXR0b25YO1xuXG5jb25zdCBvcHRpb25zUm93U3RhcnRZID0gU3R5bGVzLmN1bHRQYWdlLmZvbGxvd2VyTGlzdC55ICsgU3R5bGVzLm9mZnNldDtcbmNvbnN0IGJ1dHRvbk9mZnNldEhlaWdodCA9IFN0eWxlcy5jdWx0UGFnZS5vcHRpb25zLmJ1dHRvbk9mZnNldEhlaWdodDtcblxuY29uc3QgY3JlYXRlQ3VsdE9wdGlvbnMgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyKSA9PiB7XG4gIGNvbnRhaW5lci5hZGQoW1xuICAgIHNjZW5lLmFkZC50ZXh0KG9wdGlvbnNSb3dUZXh0WCxTdHlsZXMub2Zmc2V0ICsgb3B0aW9uc1Jvd1N0YXJ0WSwgJ0J1aWxkIFByb21vdGlvbmFsIFdlYnNpdGUnLCBTdHlsZXMuY3VsdFBhZ2Uub3B0aW9ucy5sYWJlbFN0eWxlKSxcbiAgICAuLi5jcmVhdGVCdXR0b24oc2NlbmUsIG9wdGlvbnNSb3dCdXR0b25YLCBvcHRpb25zUm93U3RhcnRZLCAnMSwwMDAsMDAwJywgKCkgPT4geyB9KSxcblxuICAgIHNjZW5lLmFkZC50ZXh0KG9wdGlvbnNSb3dUZXh0WCxTdHlsZXMub2Zmc2V0ICsgb3B0aW9uc1Jvd1N0YXJ0WSArIGJ1dHRvbk9mZnNldEhlaWdodCAqIDEsICdDb25zdHJ1Y3QgQ2h1cmNoJywgU3R5bGVzLmN1bHRQYWdlLm9wdGlvbnMubGFiZWxTdHlsZSksXG4gICAgLi4uY3JlYXRlQnV0dG9uKHNjZW5lLCBvcHRpb25zUm93QnV0dG9uWCwgb3B0aW9uc1Jvd1N0YXJ0WSArIGJ1dHRvbk9mZnNldEhlaWdodCAqIDEsICczLDAwMCwwMDAnLCAoKSA9PiB7IH0pLFxuXG4gICAgc2NlbmUuYWRkLnRleHQob3B0aW9uc1Jvd1RleHRYLFN0eWxlcy5vZmZzZXQgKyBvcHRpb25zUm93U3RhcnRZICsgYnV0dG9uT2Zmc2V0SGVpZ2h0ICogMiwgJ0J1aWxkIENvbXBsZXgnLCBTdHlsZXMuY3VsdFBhZ2Uub3B0aW9ucy5sYWJlbFN0eWxlKSxcbiAgICAuLi5jcmVhdGVCdXR0b24oc2NlbmUsIG9wdGlvbnNSb3dCdXR0b25YLCBvcHRpb25zUm93U3RhcnRZICsgYnV0dG9uT2Zmc2V0SGVpZ2h0ICogMiwgJzE1LDAwMCwwMDAnLCAoKSA9PiB7IH0pLFxuICBdKTtcblxufTtcblxuY29uc3QgY3JlYXRlQ3VsdEhhcHBpbmVzc01ldGVyID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciwgZG9tYWluU3RhdGU6IEN1bHREb21haW4uQ3VsdERvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnRhaW5lci5hZGQoW1xuICAgIHNjZW5lLmFkZC50ZXh0KFN0eWxlcy5jdWx0UGFnZS5oYXBwaW5lc3MueCwgU3R5bGVzLmN1bHRQYWdlLmhhcHBpbmVzcy5sYWJlbFksICdGb2xsb3dlciBIYXBwaW5lc3MnLCBTdHlsZXMuY3VsdFBhZ2Uub3B0aW9ucy5sYWJlbFN0eWxlKSxcbiAgICAuLi5hZGRSZWN0YW5nbGUoc2NlbmUsIFN0eWxlcy5jdWx0UGFnZS5oYXBwaW5lc3MueCwgU3R5bGVzLmN1bHRQYWdlLmhhcHBpbmVzcy5tZXRlclksIFN0eWxlcy5jdWx0UGFnZS5oYXBwaW5lc3MubWV0ZXJXaWR0aCwgU3R5bGVzLmN1bHRQYWdlLmhhcHBpbmVzcy5tZXRlckhlaWdodCwgU3R5bGVzLmZvcmVncm91bmRDb2xvckhleCksXG4gIF0pO1xufTtcblxuY29uc3QgY3JlYXRlQ3VsdFN1Z2dlc3RlZERvbmF0aW9uSW5wdXQgPSAoc2NlbmU6IFBoYXNlci5TY2VuZSwgY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyKSA9PiB7XG4gIGNvbnRhaW5lci5hZGQoW1xuICAgIHNjZW5lLmFkZC50ZXh0KFN0eWxlcy5jdWx0UGFnZS5kb25hdGlvbi5sYWJlbFgsIFN0eWxlcy5jdWx0UGFnZS5kb25hdGlvbi55LCAnU3VnZ2VzdGVkIFdlZWtseSBEb25hdGlvbicsIFN0eWxlcy5jdWx0UGFnZS5vcHRpb25zLmxhYmVsU3R5bGUpLFxuICAgIHNjZW5lLmFkZC50ZXh0KFN0eWxlcy5jdWx0UGFnZS5kb25hdGlvbi5pbnB1dFgsIFN0eWxlcy5jdWx0UGFnZS5kb25hdGlvbi55LCAnMiwwMDAnLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSksXG4gIF0pO1xufTtcbiIsImltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5pbXBvcnQgeyBEb21haW5FdmVudHMgfSBmcm9tICdzcmMvZG9tYWluJztcbmltcG9ydCAqIGFzIFNoYXJlZCBmcm9tICdzcmMvc2hhcmVkJztcbmltcG9ydCB7IGFkZFJlY3RhbmdsZSB9IGZyb20gJy4uL3JlY3RhbmdsZSc7XG5pbXBvcnQgKiBhcyBUcmFkaW5nRG9tYWluIGZyb20gJ3NyYy9kb21haW4vdHJhZGluZyc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b24gfSBmcm9tICcuLi9idXR0b24nO1xuaW1wb3J0IHsgY3JlYXRlSW5wdXRCb3ggfSBmcm9tICcuLi9pbnB1dC1ib3gnO1xuaW1wb3J0IHsgR2FtZUV2ZW50cyB9IGZyb20gJ3NyYy9zaGFyZWQvZXZlbnRzJztcblxuaW50ZXJmYWNlIEN1cnJlbmN5RGlzcGxheVJvdyB7XG4gIGNvdW50cnk6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICBjdXJyZW5jeTogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gIHRyZW5kOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2UgfCB1bmRlZmluZWQ7XG4gIGFtb3VudE93bmVkOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgZXhjaGFuZ2VSYXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbn07XG5cbmV4cG9ydCB0eXBlIEN1cnJlbmN5RGlzcGxheSA9IEN1cnJlbmN5RGlzcGxheVJvd1tdO1xuaW50ZXJmYWNlIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIHNlbGVjdGVkQWNjb3VudDogVHJhZGluZ0RvbWFpbi5BY2NvdW50O1xuICBidXlBbW91bnQ6IG51bWJlcjtcbiAgc2VsbEFtb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRXhjaGFuZ2VJbnRlcmZhY2UgPSAoc2NlbmU6IEdhbWVTY2VuZSwgZG9tYWluU3RhdGU6IFRyYWRpbmdEb21haW4uVHJhZGluZ0RvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnN0IGV4Y2hhbmdlQ29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLCAwKTtcbiAgc2NlbmUuZXZlbnRzLmVtaXQoR2FtZUV2ZW50cy5zZWxlY3RlZEFjY291bnRDaGFuZ2VkLCB7IGFjY291bnQ6IGRvbWFpblN0YXRlLnRyYWRlQWNjb3VudHNbMF0gfSk7XG5cbiAgY3JlYXRlSW5mb0ludGVyZmFjZShzY2VuZSwgZXhjaGFuZ2VDb250YWluZXIsIGRvbWFpblN0YXRlKTtcbiAgY3JlYXRlVHJhZGVJbnRlcmZhY2Uoc2NlbmUsIGV4Y2hhbmdlQ29udGFpbmVyLCBkb21haW5TdGF0ZSk7XG4gIGNyZWF0ZVJvb3RJbnRlcmZhY2Uoc2NlbmUsIGV4Y2hhbmdlQ29udGFpbmVyLCBkb21haW5TdGF0ZSk7XG5cbiAgcmV0dXJuIGV4Y2hhbmdlQ29udGFpbmVyO1xufTtcblxuY29uc3QgZ2V0SW5mb0NvbHVtbldpZHRoID0gKHNjZW5lOiBHYW1lU2NlbmUpID0+IHtcbiAgcmV0dXJuIFNoYXJlZC5nZXRHYW1lV2lkdGgoc2NlbmUpICogMC43O1xufTtcblxuY29uc3QgZ2V0QnV5Q29sdW1uV2lkdGggPSAoc2NlbmU6IEdhbWVTY2VuZSkgPT4ge1xuICByZXR1cm4gU2hhcmVkLmdldEdhbWVXaWR0aChzY2VuZSkgKiAwLjA3NTtcbn07XG5cbmNvbnN0IGNvbHVtbkhlYWRlclN0eWxlID0geyBmb250U2l6ZTogJzE2cHgnLCBjb2xvcjogU3R5bGVzLnRyYWRlUGFnZS5jdXJyZW5jeUxpc3QuaGVhZGVyQ29sb3IgfTtcblxuY29uc3QgY291bnRyeVggPSAyMDtcbmNvbnN0IGN1cnJlbmN5WCA9IDIwMDtcbmNvbnN0IGV4Y2hhbmdlUmF0ZVggPSAzMjA7XG5jb25zdCB0cmVuZFggPSAzNzA7XG5jb25zdCB0cmVuZEJhc2VZID0gMjA3O1xuY29uc3QgYW1vdW50T3duZWRYID0gNDUwO1xuY29uc3Qgcm9vdFZhbHVlWCA9IDYxMDtcblxuY29uc3QgaGVhZGVyQ29sdW1uWSA9IDE2MDtcbmNvbnN0IGZpcnN0TGluZUl0ZW1ZID0gMjAwO1xuXG5mdW5jdGlvbiBjcmVhdGVUcmVuZChzY2VuZTogR2FtZVNjZW5lLCBvZmZzZXRZOiBudW1iZXIsIHRyZW5kOiAndXAnIHwgJ2Rvd24nKSB7XG4gIGlmICh0cmVuZCA9PT0gJ3VwJykge1xuICAgIHJldHVybiBzY2VuZS5hZGQuaW1hZ2UodHJlbmRYLCB0cmVuZEJhc2VZICsgb2Zmc2V0WSwgJ3RyZW5kLXVwJylcbiAgfSBlbHNlIGlmICh0cmVuZCA9PT0gJ2Rvd24nKSB7XG4gICAgcmV0dXJuIHNjZW5lLmFkZC5pbWFnZSh0cmVuZFgsIHRyZW5kQmFzZVkgKyBvZmZzZXRZLCAndHJlbmQtZG93bicpXG4gIH1cbn1cblxuY29uc3QgZ2V0Q3VycmVudFJvb3RWYWx1ZVRleHQgPSAoYWNjb3VudDogVHJhZGluZ0RvbWFpbi5BY2NvdW50LCBuYXRpb246IFRyYWRpbmdEb21haW4uTmF0aW9uKSA9PiB7XG4gIHJldHVybiBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShhY2NvdW50LmJhbGFuY2UgLyBuYXRpb24uY3VycmVuY3kuZXhjaGFuZ2VSYXRlKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUluZm9JbnRlcmZhY2UgPSAoc2NlbmU6IEdhbWVTY2VuZSwgY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyLCBkb21haW5TdGF0ZTogVHJhZGluZ0RvbWFpbi5UcmFkaW5nRG9tYWluU3RhdGUpID0+IHtcbiAgY29udGFpbmVyLmFkZChhZGRSZWN0YW5nbGUoc2NlbmUsXG4gICAgU3R5bGVzLnRyYWRlUGFnZS5jdXJyZW5jeUxpc3QueCxcbiAgICBTdHlsZXMudHJhZGVQYWdlLmN1cnJlbmN5TGlzdC55LFxuICAgIFN0eWxlcy50cmFkZVBhZ2UuY3VycmVuY3lMaXN0LndpZHRoLFxuICAgIFN0eWxlcy50cmFkZVBhZ2UuY3VycmVuY3lMaXN0LmhlaWdodCxcbiAgICBTdHlsZXMuZm9yZWdyb3VuZENvbG9ySGV4LFxuICApKTtcblxuICBjb250YWluZXIuYWRkKFtcbiAgICBzY2VuZS5hZGQudGV4dChjb3VudHJ5WCwgaGVhZGVyQ29sdW1uWSwgJ0NPVU5UUlknLCBjb2x1bW5IZWFkZXJTdHlsZSksXG4gICAgc2NlbmUuYWRkLnRleHQoY3VycmVuY3lYLCBoZWFkZXJDb2x1bW5ZLCAnQ1VSUkVOQ1knLCBjb2x1bW5IZWFkZXJTdHlsZSksXG4gICAgc2NlbmUuYWRkLnRleHQoYW1vdW50T3duZWRYLCBoZWFkZXJDb2x1bW5ZLCAnQU1ULiBPV05FRCcsIGNvbHVtbkhlYWRlclN0eWxlKSxcbiAgICBzY2VuZS5hZGQudGV4dChleGNoYW5nZVJhdGVYLCBoZWFkZXJDb2x1bW5ZLCAnRVhDLiBSQVRFJywgY29sdW1uSGVhZGVyU3R5bGUpLFxuICAgIHNjZW5lLmFkZC50ZXh0KHJvb3RWYWx1ZVgsIGhlYWRlckNvbHVtblksICdST09UIFZBTFVFJywgY29sdW1uSGVhZGVyU3R5bGUpLFxuICBdKTtcbiAgY29uc3Qgcm93Q2xpY2tIYW5kbGVycyA9IFtdO1xuICBjb25zdCBiYXNpY2FsbHlIaWRkZW4gPSAwLjAwMDAwMDAwMDAwMTtcblxuICBkb21haW5TdGF0ZS5uYXRpb25zLmZvckVhY2goKG5hdGlvbiwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBhY2NvdW50ID0gZG9tYWluU3RhdGUudHJhZGVBY2NvdW50cy5maW5kKChhY2NvdW50KSA9PiBhY2NvdW50LmN1cnJlbmN5Lm5hbWUgPT09IG5hdGlvbi5jdXJyZW5jeS5uYW1lKTtcbiAgICBjb25zdCB5ID0gZmlyc3RMaW5lSXRlbVkgKyAoU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogaW5kZXgpO1xuXG4gICAgY29uc3QgY291bnRyeSA9IHNjZW5lLmFkZC50ZXh0KGNvdW50cnlYLCB5LCBuYXRpb24ubmFtZSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGNvbnN0IGN1cnJlbmN5ID0gc2NlbmUuYWRkLnRleHQoY3VycmVuY3lYLCB5LCBuYXRpb24uY3VycmVuY3kubmFtZSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGxldCB0cmVuZCA9IGNyZWF0ZVRyZW5kKHNjZW5lLCBTdHlsZXMubGluZUl0ZW1IZWlnaHQgKiBpbmRleCwgbmF0aW9uLmN1cnJlbmN5LnRyZW5kKTtcbiAgICBjb25zdCBhbW91bnRPd25lZCA9IHNjZW5lLmFkZC50ZXh0KGFtb3VudE93bmVkWCwgeSwgU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoYWNjb3VudC5iYWxhbmNlKSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGNvbnN0IGV4Y2hhbmdlUmF0ZSA9IHNjZW5lLmFkZC50ZXh0KGV4Y2hhbmdlUmF0ZVgsIHksIFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KG5hdGlvbi5jdXJyZW5jeS5leGNoYW5nZVJhdGUpLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSk7XG4gICAgY29uc3Qgcm9vdFZhbHVlID0gc2NlbmUuYWRkLnRleHQocm9vdFZhbHVlWCwgeSwgZ2V0Q3VycmVudFJvb3RWYWx1ZVRleHQoYWNjb3VudCwgbmF0aW9uKSwgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICAgIGNvbnN0IHJvd0NsaWNrSGFuZGxlciA9IHNjZW5lLmFkZC5yZWN0YW5nbGUoU3R5bGVzLm9mZnNldCArIDEsIHkgLSA3LCBTdHlsZXMudHJhZGVQYWdlLmN1cnJlbmN5TGlzdC53aWR0aCAtIDIsIFN0eWxlcy5saW5lSXRlbUhlaWdodCwgU3R5bGVzLnRyYWRlUGFnZS5zZWxlY3RlZExpbmVJdGVtSGV4LCAwLjUpLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KS5zZXRPcmlnaW4oMCwgMCk7XG4gICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgLy8gZGVmYXVsdGluZyB0aGUgZmlyc3QgY291bnRyeSAvIGN1cnJlbmN5IHRvIHNlbGVjdGVkIGhlcmUgYW5kIGluIHRoZSB0cmFkaW5nIHN0YXRlXG4gICAgICByb3dDbGlja0hhbmRsZXIuYWxwaGEgPSBiYXNpY2FsbHlIaWRkZW47XG4gICAgfVxuICAgIHJvd0NsaWNrSGFuZGxlcnMucHVzaChyb3dDbGlja0hhbmRsZXIpO1xuXG4gICAgcm93Q2xpY2tIYW5kbGVyLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgICBzY2VuZS5ldmVudHMuZW1pdChHYW1lRXZlbnRzLnNlbGVjdGVkQWNjb3VudENoYW5nZWQsIHsgYWNjb3VudCwgcm93Q2xpY2tIYW5kbGVyIH0pXG4gICAgfSk7XG5cbiAgICBjb250YWluZXIuYWRkKFtjb3VudHJ5LCBjdXJyZW5jeSwgdHJlbmQsIGFtb3VudE93bmVkLCBleGNoYW5nZVJhdGUsIHJvb3RWYWx1ZSwgcm93Q2xpY2tIYW5kbGVyXSk7XG5cbiAgICBkb21haW5TdGF0ZS5ldmVudHMub24oRG9tYWluRXZlbnRzLmFjY291bnRCYWxhbmNlQ2hhbmdlZCwgKCkgPT4ge1xuICAgICAgYW1vdW50T3duZWQuc2V0VGV4dChTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShhY2NvdW50LmJhbGFuY2UpKTtcbiAgICAgIHJvb3RWYWx1ZS5zZXRUZXh0KGdldEN1cnJlbnRSb290VmFsdWVUZXh0KGFjY291bnQsIG5hdGlvbikpO1xuICAgIH0pO1xuXG4gICAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5leGNoYW5nZVJhdGVzQ2hhbmdlZCwgKCkgPT4ge1xuICAgICAgZXhjaGFuZ2VSYXRlLnNldFRleHQoU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkobmF0aW9uLmN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSkpO1xuICAgICAgcm9vdFZhbHVlLnNldFRleHQoZ2V0Q3VycmVudFJvb3RWYWx1ZVRleHQoYWNjb3VudCwgbmF0aW9uKSk7XG4gICAgICBpZiAodHJlbmQpIHtcbiAgICAgICAgdHJlbmQuZGVzdHJveSgpO1xuICAgICAgfVxuICAgICAgdHJlbmQgPSBjcmVhdGVUcmVuZChzY2VuZSwgU3R5bGVzLmxpbmVJdGVtSGVpZ2h0ICogaW5kZXgsIG5hdGlvbi5jdXJyZW5jeS50cmVuZCk7XG4gICAgICBjb250YWluZXIuYWRkKHRyZW5kKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgc2NlbmUuZXZlbnRzLm9uKEdhbWVFdmVudHMuc2VsZWN0ZWRBY2NvdW50Q2hhbmdlZCwgKGV2ZW50KSA9PiB7XG5cbiAgICByb3dDbGlja0hhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgIGhhbmRsZXIuYWxwaGEgPSBiYXNpY2FsbHlIaWRkZW47XG4gICAgfSk7XG5cbiAgICBldmVudC5yb3dDbGlja0hhbmRsZXIuYWxwaGEgPSAwLjU7XG4gIH0pO1xuXG59O1xuXG5jb25zdCBjcmVhdGVSb290SW50ZXJmYWNlID0gKHNjZW5lOiBHYW1lU2NlbmUsIGNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciwgZG9tYWluU3RhdGU6IFRyYWRpbmdEb21haW4uVHJhZGluZ0RvbWFpblN0YXRlKSA9PiB7XG4gIGNvbnN0IGJveCA9IGFkZFJlY3RhbmdsZShzY2VuZSwgU3R5bGVzLndpZHRoIC0gU3R5bGVzLm9mZnNldCAtIFN0eWxlcy50cmFkZVBhZ2UudXNlcm5hbWVXaWR0aCwgNjAsIFN0eWxlcy50cmFkZVBhZ2UudXNlcm5hbWVXaWR0aCwgU3R5bGVzLnRyYWRlUGFnZS51c2VybmFtZUhlaWdodCwgU3R5bGVzLmZvcmVncm91bmRDb2xvckhleCk7XG4gIGNvbnN0IHJvb3RJbmZvVGV4dCA9IHNjZW5lLmFkZC50ZXh0KDYyNSwgNzAsICdBVkFJTEFCTEUgUk9PVCcsIFN0eWxlcy5saXN0SXRlbVN0eWxlKTtcbiAgY29uc3Qgcm9vdFZhbHVlVGV4dCA9IHNjZW5lLmFkZC50ZXh0KHJvb3RJbmZvVGV4dC54ICsgcm9vdEluZm9UZXh0LndpZHRoICsgMzAsIHJvb3RJbmZvVGV4dC55IC0gMywgU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoZG9tYWluU3RhdGUucm9vdEFjY291bnQuYmFsYW5jZSksIFN0eWxlcy5hdmFpbGFibGVSb290KTtcblxuICBkb21haW5TdGF0ZS5ldmVudHMub24oRG9tYWluRXZlbnRzLmFjY291bnRCYWxhbmNlQ2hhbmdlZCwgKGFjY291bnQ6IFRyYWRpbmdEb21haW4uQWNjb3VudCkgPT4ge1xuICAgIGlmIChhY2NvdW50Lm5hbWUgPT09IGRvbWFpblN0YXRlLnJvb3RBY2NvdW50Lm5hbWUpIHtcbiAgICAgIHJvb3RWYWx1ZVRleHQuc2V0VGV4dChTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShkb21haW5TdGF0ZS5yb290QWNjb3VudC5iYWxhbmNlKSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdldEJ1eUFtb3VudFRleHQgKHNjZW5lOiBHYW1lU2NlbmUpIHtcbiAgY29uc3QgY3VycmVuY3lBbW91bnQgPSBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShzY2VuZS5idXlBbW91bnQgKiBzY2VuZS5zZWxlY3RlZEFjY291bnQuY3VycmVuY3kuZXhjaGFuZ2VSYXRlKTtcbiAgY29uc3QgY3VycmVuY3lUeXBlID0gc2NlbmUuc2VsZWN0ZWRBY2NvdW50LmN1cnJlbmN5Lm5hbWU7XG4gIGNvbnN0IHJvb3RBbW91bnQgPSBTaGFyZWQuZm9ybWF0TnVtYmVyRm9yRGlzcGxheShzY2VuZS5idXlBbW91bnQpO1xuICByZXR1cm4gYEJVWSAke2N1cnJlbmN5QW1vdW50fSAke2N1cnJlbmN5VHlwZX0gRk9SICR7cm9vdEFtb3VudH0gUk9PVGBcbn07XG5cbmZ1bmN0aW9uIGdldFNlbGxBbW91bnRUZXh0IChzY2VuZTogR2FtZVNjZW5lKSB7XG4gIGNvbnN0IGN1cnJlbmN5QW1vdW50ID0gU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoc2NlbmUuc2VsbEFtb3VudCk7XG4gIGNvbnN0IGN1cnJlbmN5VHlwZSA9IHNjZW5lLnNlbGVjdGVkQWNjb3VudC5jdXJyZW5jeS5uYW1lO1xuICBjb25zdCByb290QW1vdW50ID0gU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoc2NlbmUuc2VsbEFtb3VudCAvIHNjZW5lLnNlbGVjdGVkQWNjb3VudC5jdXJyZW5jeS5leGNoYW5nZVJhdGUpO1xuICByZXR1cm4gYFNFTEwgJHtjdXJyZW5jeUFtb3VudH0gJHtjdXJyZW5jeVR5cGV9IEZPUiAke3Jvb3RBbW91bnR9IFJPT1RgXG59O1xuXG5jb25zdCBjcmVhdGVUcmFkZUludGVyZmFjZSA9IChzY2VuZTogR2FtZVNjZW5lLCBjb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIsIGRvbWFpblN0YXRlOiBUcmFkaW5nRG9tYWluLlRyYWRpbmdEb21haW5TdGF0ZSkgPT4ge1xuICBjb25zdCBidXlDb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKDAsIDApO1xuICBjb25zdCBzZWxsQ29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLCAwKTtcbiAgY29uc3QgaW5mbHVlbmNlQ29udGFpbmVyID0gc2NlbmUuYWRkLmNvbnRhaW5lcigwLCAwKTtcblxuICBjb25zdCBidXlUYWIgPSBzY2VuZS5hZGQudGV4dChTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLngsIFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UuZXhjaGFuZ2VUYWJZLCAnQlVZJywgU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgYnV5VGFiLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KTtcbiAgYnV5VGFiLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgc2VsbFRhYi5zZXRTdHlsZShTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gICAgaW5mbHVlbmNlVGFiLnNldFN0eWxlKFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgICBidXlUYWIuc2V0U3R5bGUoU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgICBpbmZsdWVuY2VDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgc2VsbENvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBidXlDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgfSk7XG5cbiAgY29uc3Qgc2VsbFRhYiA9IHNjZW5lLmFkZC50ZXh0KGJ1eVRhYi54ICsgYnV5VGFiLndpZHRoICsgU3R5bGVzLm9mZnNldCAqIDIsIFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UuZXhjaGFuZ2VUYWJZLCAnU0VMTCcsIFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgc2VsbFRhYi5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSkub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICBidXlUYWIuc2V0U3R5bGUoU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICAgIGluZmx1ZW5jZVRhYi5zZXRTdHlsZShTdHlsZXMudW5zZWxlY3RlZFRhYik7XG4gICAgc2VsbFRhYi5zZXRTdHlsZShTdHlsZXMuc2VsZWN0ZWRUYWIpO1xuICAgIGluZmx1ZW5jZUNvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICBidXlDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgc2VsbENvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuICB9KTtcblxuICBjb25zdCBpbmZsdWVuY2VUYWIgPSBzY2VuZS5hZGQudGV4dChzZWxsVGFiLnggKyBzZWxsVGFiLndpZHRoICsgU3R5bGVzLm9mZnNldCAqIDIsIFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UuZXhjaGFuZ2VUYWJZLCAnSU5GTFVFTkNFJywgU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICBpbmZsdWVuY2VUYWIuc2V0SW50ZXJhY3RpdmUoeyB1c2VIYW5kQ3Vyc29yOiB0cnVlIH0pLm9uKCdwb2ludGVydXAnLCAoKSA9PiB7XG4gICAgaW5mbHVlbmNlVGFiLnNldFN0eWxlKFN0eWxlcy5zZWxlY3RlZFRhYik7XG4gICAgYnV5VGFiLnNldFN0eWxlKFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgICBzZWxsVGFiLnNldFN0eWxlKFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgICBpbmZsdWVuY2VDb250YWluZXIuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICBidXlDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgc2VsbENvbnRhaW5lci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3BlbmRBbW91bnRUZXh0ID0gc2NlbmUuYWRkLnRleHQoU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS54LCAyMTAsICdCVVkgQU1PVU5UJywgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICBjb25zdCBidXlJbnB1dEJveCA9IGNyZWF0ZUlucHV0Qm94KHNjZW5lLCBTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLmlucHV0Qm94WCwgMTk1LCAodGV4dCkgPT4ge1xuICAgIGNvbnN0IGFtb3VudCA9IE51bWJlci5wYXJzZUZsb2F0KHRleHQpO1xuICAgIGlmICghTnVtYmVyLmlzTmFOKGFtb3VudCkpIHtcbiAgICAgIHNjZW5lLmV2ZW50cy5lbWl0KEdhbWVFdmVudHMuYnV5QW1vdW50Q2hhbmdlZCwgYW1vdW50KTtcbiAgICB9XG4gIH0sIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIGNvbnN0IGJ1eUFtb3VudFRleHQgPSBzY2VuZS5hZGQudGV4dChTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLngsIDI2MCwgZ2V0QnV5QW1vdW50VGV4dChzY2VuZSksIFN0eWxlcy50cmFkZUFtb3VudFRleHQpO1xuXG4gIGJ1eUNvbnRhaW5lci5hZGQoW1xuICAgIHNwZW5kQW1vdW50VGV4dCxcbiAgICAuLi5idXlJbnB1dEJveCxcbiAgICBidXlBbW91bnRUZXh0LFxuICBdKTtcblxuICBjb25zdCBzZWxsQW1vdW50TGFiZWwgPSBzY2VuZS5hZGQudGV4dChTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLngsIDIxMCwgJ1NFTEwgQU1PVU5UJywgU3R5bGVzLmxpc3RJdGVtU3R5bGUpO1xuICBjb25zdCBzZWxsSW5wdXRCb3ggPSBjcmVhdGVJbnB1dEJveChzY2VuZSwgU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS5pbnB1dEJveFgsIDE5NSwgKHRleHQpID0+IHtcbiAgICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh0ZXh0KTtcbiAgICBpZiAoIU51bWJlci5pc05hTihhbW91bnQpKSB7XG4gICAgICBzY2VuZS5ldmVudHMuZW1pdChHYW1lRXZlbnRzLnNlbGxBbW91bnRDaGFuZ2VkLCBhbW91bnQpO1xuICAgIH1cbiAgfSwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICBjb25zdCBzZWxsQW1vdW50VGV4dCA9IHNjZW5lLmFkZC50ZXh0KFN0eWxlcy50cmFkZVBhZ2UudHJhZGVJbnRlcmZhY2UueCwgMjYwLCBnZXRTZWxsQW1vdW50VGV4dChzY2VuZSksIFN0eWxlcy50cmFkZUFtb3VudFRleHQpO1xuXG4gIHNlbGxDb250YWluZXIuYWRkKFtcbiAgICBzZWxsQW1vdW50TGFiZWwsXG4gICAgLi4uc2VsbElucHV0Qm94LFxuICAgIHNlbGxBbW91bnRUZXh0LFxuICBdKTtcblxuICBjb25zdCBidXkgPSAoKSA9PiB7XG4gICAgaWYgKHNjZW5lLnNlbGVjdGVkQWNjb3VudCkge1xuICAgICAgVHJhZGluZ0RvbWFpbi5yZWNvcmRUcmFkZShkb21haW5TdGF0ZS5yb290QWNjb3VudCwgc2NlbmUuc2VsZWN0ZWRBY2NvdW50LCBzY2VuZS5idXlBbW91bnQsIHNjZW5lLnNlbGVjdGVkQWNjb3VudC5jdXJyZW5jeS5leGNoYW5nZVJhdGUsIGRvbWFpblN0YXRlKVxuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2VsbCA9ICgpID0+IHtcbiAgICBpZiAoc2NlbmUuc2VsZWN0ZWRBY2NvdW50KSB7XG4gICAgICBjb25zdCBleGNoYW5nZVJhdGUgPSBkb21haW5TdGF0ZS5yb290QWNjb3VudC5jdXJyZW5jeS5leGNoYW5nZVJhdGUgLyBzY2VuZS5zZWxlY3RlZEFjY291bnQuY3VycmVuY3kuZXhjaGFuZ2VSYXRlO1xuICAgICAgVHJhZGluZ0RvbWFpbi5yZWNvcmRUcmFkZShzY2VuZS5zZWxlY3RlZEFjY291bnQsIGRvbWFpblN0YXRlLnJvb3RBY2NvdW50LCBzY2VuZS5zZWxsQW1vdW50LCBleGNoYW5nZVJhdGUsIGRvbWFpblN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBzY2VuZS5ldmVudHMub24oR2FtZUV2ZW50cy5zZWxlY3RlZEFjY291bnRDaGFuZ2VkLCAoZXZlbnQpID0+IHtcbiAgICBidXlBbW91bnRUZXh0LnRleHQgPSBnZXRCdXlBbW91bnRUZXh0KHNjZW5lKTtcbiAgICBzZWxsQW1vdW50VGV4dC50ZXh0ID0gZ2V0U2VsbEFtb3VudFRleHQoc2NlbmUpO1xuICB9KTtcblxuICBzY2VuZS5ldmVudHMub24oR2FtZUV2ZW50cy5idXlBbW91bnRDaGFuZ2VkLCAoZXZlbnQpID0+IHtcbiAgICBidXlBbW91bnRUZXh0LnRleHQgPSBnZXRCdXlBbW91bnRUZXh0KHNjZW5lKTtcbiAgfSk7XG5cbiAgc2NlbmUuZXZlbnRzLm9uKEdhbWVFdmVudHMuc2VsbEFtb3VudENoYW5nZWQsIChldmVudCkgPT4ge1xuICAgIHNlbGxBbW91bnRUZXh0LnRleHQgPSBnZXRTZWxsQW1vdW50VGV4dChzY2VuZSk7XG4gIH0pO1xuXG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuZXhjaGFuZ2VSYXRlc0NoYW5nZWQsIChldmVudCkgPT4ge1xuICAgIGJ1eUFtb3VudFRleHQudGV4dCA9IGdldEJ1eUFtb3VudFRleHQoc2NlbmUpO1xuICAgIHNlbGxBbW91bnRUZXh0LnRleHQgPSBnZXRTZWxsQW1vdW50VGV4dChzY2VuZSk7XG4gIH0pO1xuXG4gIGJ1eUNvbnRhaW5lci5hZGQoY3JlYXRlQnV0dG9uKHNjZW5lLCBTdHlsZXMud2lkdGggLSAxMDAgLSBTdHlsZXMub2Zmc2V0LCAzMDAsICdCVVknLCBidXksIDEwMCkpO1xuICBzZWxsQ29udGFpbmVyLmFkZChjcmVhdGVCdXR0b24oc2NlbmUsIFN0eWxlcy53aWR0aCAtIDEwMCAtIFN0eWxlcy5vZmZzZXQsIDMwMCwgJ1NFTEwnLCBzZWxsLCAxMDApKTtcblxuICBsZXQgaW5mbHVlbmNlWSA9IDIxMDtcbiAgY29uc3QgaW5mbHVlbmNlQnV0dG9uV2lkdGggPSAxMDA7XG5cbiAgaW5mbHVlbmNlQ29udGFpbmVyLmFkZChzY2VuZS5hZGQudGV4dChTdHlsZXMudHJhZGVQYWdlLnRyYWRlSW50ZXJmYWNlLngsIGluZmx1ZW5jZVksIFRyYWRpbmdEb21haW4uc3RhcnRSdW1vckFjdGlvbi5uYW1lLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSkpO1xuICBpbmZsdWVuY2VDb250YWluZXIuYWRkKGNyZWF0ZUJ1dHRvbihzY2VuZSwgU3R5bGVzLndpZHRoIC0gaW5mbHVlbmNlQnV0dG9uV2lkdGggLSBTdHlsZXMub2Zmc2V0LCBpbmZsdWVuY2VZIC0gMTAsIFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KFRyYWRpbmdEb21haW4uc3RhcnRSdW1vckFjdGlvbi5jb3N0KSwgKCkgPT4gVHJhZGluZ0RvbWFpbi5zdGFydFJ1bW9yKGRvbWFpblN0YXRlLCBzY2VuZS5zZWxlY3RlZEFjY291bnQpLCBpbmZsdWVuY2VCdXR0b25XaWR0aCkpO1xuICBpbmZsdWVuY2VZICs9IDUwO1xuXG4gIGluZmx1ZW5jZUNvbnRhaW5lci5hZGQoc2NlbmUuYWRkLnRleHQoU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS54LCBpbmZsdWVuY2VZLCBUcmFkaW5nRG9tYWluLmJyaWJlUG9saXRpY2lhbkFjdGlvbi5uYW1lLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSkpO1xuICBpbmZsdWVuY2VDb250YWluZXIuYWRkKGNyZWF0ZUJ1dHRvbihzY2VuZSwgU3R5bGVzLndpZHRoIC0gaW5mbHVlbmNlQnV0dG9uV2lkdGggLSBTdHlsZXMub2Zmc2V0LCBpbmZsdWVuY2VZIC0gMTAsIFNoYXJlZC5mb3JtYXROdW1iZXJGb3JEaXNwbGF5KFRyYWRpbmdEb21haW4uYnJpYmVQb2xpdGljaWFuQWN0aW9uLmNvc3QpLCAoKSA9PiBUcmFkaW5nRG9tYWluLmJyaWJlUG9saXRpY2lhbihkb21haW5TdGF0ZSwgc2NlbmUuc2VsZWN0ZWRBY2NvdW50KSwgaW5mbHVlbmNlQnV0dG9uV2lkdGgpKTtcbiAgaW5mbHVlbmNlWSArPSA1MDtcblxuXG4gIGluZmx1ZW5jZUNvbnRhaW5lci5hZGQoc2NlbmUuYWRkLnRleHQoU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS54LCBpbmZsdWVuY2VZLCBUcmFkaW5nRG9tYWluLnJpZ0VsZWN0aW9uQWN0aW9uLm5hbWUsIFN0eWxlcy5saXN0SXRlbVN0eWxlKSk7XG4gIGluZmx1ZW5jZUNvbnRhaW5lci5hZGQoY3JlYXRlQnV0dG9uKHNjZW5lLCBTdHlsZXMud2lkdGggLSBpbmZsdWVuY2VCdXR0b25XaWR0aCAtIFN0eWxlcy5vZmZzZXQsIGluZmx1ZW5jZVkgLSAxMCwgU2hhcmVkLmZvcm1hdE51bWJlckZvckRpc3BsYXkoVHJhZGluZ0RvbWFpbi5yaWdFbGVjdGlvbkFjdGlvbi5jb3N0KSwgKCkgPT4gVHJhZGluZ0RvbWFpbi5yaWdFbGVjdGlvbihkb21haW5TdGF0ZSwgc2NlbmUuc2VsZWN0ZWRBY2NvdW50KSwgaW5mbHVlbmNlQnV0dG9uV2lkdGgpKTtcbiAgaW5mbHVlbmNlWSArPSA1MDtcblxuICAvLyBjb25zdCBzZWxsSW5wdXRCb3ggPSBjcmVhdGVJbnB1dEJveChzY2VuZSwgU3R5bGVzLnRyYWRlUGFnZS50cmFkZUludGVyZmFjZS5pbnB1dEJveFgsIDE5NSwgKHRleHQpID0+IHtcbiAgLy8gICBjb25zdCBhbW91bnQgPSBOdW1iZXIucGFyc2VGbG9hdCh0ZXh0KTtcbiAgLy8gICBpZiAoIU51bWJlci5pc05hTihhbW91bnQpKSB7XG4gIC8vICAgICBzY2VuZS5ldmVudHMuZW1pdChHYW1lRXZlbnRzLnNlbGxBbW91bnRDaGFuZ2VkLCBhbW91bnQpO1xuICAvLyAgIH1cbiAgLy8gfSwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICBzZWxsQ29udGFpbmVyLnNldFZpc2libGUoZmFsc2UpO1xuICBpbmZsdWVuY2VDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgY29udGFpbmVyLmFkZChidXlDb250YWluZXIpO1xuICBjb250YWluZXIuYWRkKGJ1eVRhYik7XG4gIGNvbnRhaW5lci5hZGQoc2VsbENvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hZGQoc2VsbFRhYik7XG4gIGNvbnRhaW5lci5hZGQoaW5mbHVlbmNlQ29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFkZChpbmZsdWVuY2VUYWIpO1xufTtcbiIsImltcG9ydCB7IGFkZFJlY3RhbmdsZSB9IGZyb20gJy4vcmVjdGFuZ2xlJztcbmltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJbnB1dEJveCA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY2FsbGJhY2s6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQsIG1heExlbmd0aD86IG51bWJlciwgbnVtYmVyc09ubHk6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xuICBjb25zdCB0ZXh0RmllbGRTdGF0ZSA9IHtcbiAgICBpc0VkaXRhYmxlOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCByZWN0YW5nbGVFbGVtZW50cyA9IGFkZFJlY3RhbmdsZShzY2VuZSwgeCwgeSwgU3R5bGVzLmlucHV0Qm94V2lkdGgsIDMwLCBTdHlsZXMuZm9yZWdyb3VuZENvbG9ySGV4KTtcbiAgY29uc3QgY3Vyc29yID0gc2NlbmUuYWRkLnJlY3RhbmdsZSh4ICsgOCwgeSArIDUsIDEwLCAyMCwgU3R5bGVzLnRleHRDb2xvckhleCkuc2V0T3JpZ2luKDAsMCk7XG4gIGN1cnNvci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgY29uc3QgaW5wdXRCb3ggPSByZWN0YW5nbGVFbGVtZW50c1swXTtcbiAgaW5wdXRCb3guc2V0SW50ZXJhY3RpdmUoKTtcblxuICBjb25zdCB0ZXh0RmllbGQgPSBzY2VuZS5hZGQudGV4dCh4ICsgNSwgeSArIFN0eWxlcy5vZmZzZXQgLyAyLCAnJywgeyBjb2xvcjogU3R5bGVzLnRleHRDb2xvciB9KTtcblxuICBzY2VuZS5pbnB1dC5vbigncG9pbnRlcnVwJywgKHBvaW50ZXIsIGN1cnJlbnRseU92ZXI6IGFueVtdKSA9PiB7XG4gICAgdGV4dEZpZWxkU3RhdGUuaXNFZGl0YWJsZSA9IF8uc29tZShjdXJyZW50bHlPdmVyLCAoZ2FtZU9iamVjdCkgPT4gZ2FtZU9iamVjdCA9PT0gaW5wdXRCb3ggfHwgZ2FtZU9iamVjdCA9PT0gdGV4dEZpZWxkKTtcbiAgICBpZiAodGV4dEZpZWxkU3RhdGUuaXNFZGl0YWJsZSkge1xuICAgICAgY3Vyc29yLnNldFZpc2libGUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnNvci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG1heENoYXJhY3Rlckxlbmd0aCA9IG1heExlbmd0aCB8fCBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcblxuICAvLyBrZXlTcGFjZSA9IHNjZW5lLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuU1BBQ0UpO1xuICAvLyBrZXlCYWNrc3BhY2UgPSBzY2VuZS5pbnB1dC5rZXlib2FyZC5hZGRLZXkoUGhhc2VyLklucHV0LktleWJvYXJkLktleUNvZGVzLkJBQ0tTUEFDRSk7XG4gIHNjZW5lLmlucHV0LmtleWJvYXJkLm9uKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCF0ZXh0RmllbGRTdGF0ZS5pc0VkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNOdW1iZXIgPSBldmVudC5rZXlDb2RlID09PSAxOTAgfHwgKGV2ZW50LmtleUNvZGUgPj0gNDggJiYgZXZlbnQua2V5Q29kZSA8PSA1Nyk7XG4gICAgY29uc3QgaXNTdHJpbmcgPSBldmVudC5rZXlDb2RlID09PSAzMiB8fCAoZXZlbnQua2V5Q29kZSA+PSA2NSAmJiBldmVudC5rZXlDb2RlIDw9IDkwKTtcblxuICAgIGNvbnN0IHZhbGlkS2V5ID0gbnVtYmVyc09ubHlcbiAgICAgID8gaXNOdW1iZXJcbiAgICAgIDogaXNOdW1iZXIgfHwgaXNTdHJpbmc7XG5cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOCAmJiB0ZXh0RmllbGQudGV4dC5sZW5ndGggPiAwKVxuICAgIHtcbiAgICAgIHRleHRGaWVsZC50ZXh0ID0gdGV4dEZpZWxkLnRleHQuc3Vic3RyKDAsIHRleHRGaWVsZC50ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgY3Vyc29yLnNldFgodGV4dEZpZWxkLnggKyB0ZXh0RmllbGQud2lkdGggKyAzKTtcbiAgICAgIGNhbGxiYWNrKHRleHRGaWVsZC50ZXh0KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGV4dEZpZWxkLnRleHQubGVuZ3RoIDwgbWF4Q2hhcmFjdGVyTGVuZ3RoICYmIHZhbGlkS2V5KVxuICAgIHtcbiAgICAgIHRleHRGaWVsZC50ZXh0ICs9IGAke2V2ZW50LmtleX1gLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjdXJzb3Iuc2V0WCh0ZXh0RmllbGQueCArIHRleHRGaWVsZC53aWR0aCArIDMpO1xuICAgICAgY2FsbGJhY2sodGV4dEZpZWxkLnRleHQpO1xuICAgIH1cblxuICB9KTtcbiAgcmV0dXJuIFtcbiAgICAuLi5yZWN0YW5nbGVFbGVtZW50cyxcbiAgICBjdXJzb3IsXG4gICAgdGV4dEZpZWxkLFxuICBdO1xufTtcbiIsImltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBhZGRIb3Jpem9udGFsU2NyZWVuTGluZSA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCB5OiBudW1iZXIpID0+IHtcbiAgc2NlbmUuYWRkLmxpbmUoMCwgMCwgMCwgeSArIDEsIFN0eWxlcy53aWR0aCwgeSArIDEsIFN0eWxlcy5kZXRhaWxMaWdodENvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIHNjZW5lLmFkZC5saW5lKDAsIDAsIDAsIHksIFN0eWxlcy53aWR0aCwgeSwgU3R5bGVzLmRldGFpbERhcmtDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xufVxuIiwiaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gJ3NyYy9zaGFyZWQvc3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IGFkZFJlY3RhbmdsZSA9IChzY2VuZTogUGhhc2VyLlNjZW5lLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGZpbGxDb2xvcjogbnVtYmVyLCBmaWxsQWxwaGE/OiBudW1iZXIpID0+IHtcbiAgY29uc3QgYm94ID0gc2NlbmUuYWRkLnJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmaWxsQ29sb3IsIGZpbGxBbHBoYSkuc2V0T3JpZ2luKDAsMCk7XG4gIGNvbnN0IHRvcExpbmUgPSBzY2VuZS5hZGQubGluZSgwLCAwLCB4IC0gMSwgeSwgeCArIHdpZHRoLCB5LCBTdHlsZXMuZGV0YWlsRGFya0NvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IGxlZnRMaW5lID0gc2NlbmUuYWRkLmxpbmUoMCwgMCwgeCwgeSAtIDEsIHgsIHkgKyBoZWlnaHQgKyAxLCBTdHlsZXMuZGV0YWlsRGFya0NvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IHJpZ2h0TGluZSA9IHNjZW5lLmFkZC5saW5lKDAsIDAsIHggKyB3aWR0aCwgeSAtIDEsIHggKyB3aWR0aCwgeSArIGhlaWdodCArIDEsIFN0eWxlcy5kZXRhaWxMaWdodENvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIGNvbnN0IGJvdHRvbUxpbmUgPSBzY2VuZS5hZGQubGluZSgwLCAwLCB4ICsgMSwgeSArIGhlaWdodCwgeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCBTdHlsZXMuZGV0YWlsTGlnaHRDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuXG4gIHJldHVybiBbXG4gICAgYm94LFxuICAgIHRvcExpbmUsXG4gICAgbGVmdExpbmUsXG4gICAgcmlnaHRMaW5lLFxuICAgIGJvdHRvbUxpbmUsXG4gIF07XG59XG4iLCJpbXBvcnQgKiBhcyBTaGFyZWQgZnJvbSAnc3JjL3NoYXJlZCc7XG5pbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnc3JjL3NoYXJlZC9zdHlsZXMnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRzLCBEb21haW5TdGF0ZSB9IGZyb20gJ3NyYy9kb21haW4nO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgYWRkUmVjdGFuZ2xlIH0gZnJvbSAnLi4vcmVjdGFuZ2xlJztcblxuaW50ZXJmYWNlIFN0b3J5RGlzcGxheSB7XG4gIHRleHQ6IHN0cmluZztcbiAgdGV4dE9iamVjdDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gIHBvc1g6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlja2VyU3RhdGUge1xuICBzdG9yeVF1ZXVlOiBzdHJpbmdbXTtcbiAgc3RvcnlEaXNwbGF5czogU3RvcnlEaXNwbGF5W107XG4gIHJlYWR5VG9EaXNwbGF5TmV4dFN0b3J5OiBib29sZWFuO1xufVxuXG5jb25zdCB0aWNrZXJZID0gNzEwO1xuY29uc3QgdGlja2VyU3RvcnlZID0gNzI1O1xuY29uc3QgdGlja2VySGVpZ2h0ID0gNTA7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdzVGlja2VyID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIGRvbWFpblN0YXRlOiBEb21haW5TdGF0ZSkgPT4ge1xuICBjb25zdCB0aWNrZXJTdGF0ZTogVGlja2VyU3RhdGUgPSB7XG4gICAgc3RvcnlRdWV1ZTogW10sXG4gICAgc3RvcnlEaXNwbGF5czogW10sXG4gICAgcmVhZHlUb0Rpc3BsYXlOZXh0U3Rvcnk6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IGdhbWVXaWR0aCA9IFNoYXJlZC5nZXRHYW1lV2lkdGgoc2NlbmUpO1xuXG4gIGFkZFJlY3RhbmdsZShzY2VuZSwgU3R5bGVzLm9mZnNldCwgdGlja2VyWSwgZ2FtZVdpZHRoIC0gU3R5bGVzLm9mZnNldCAqIDIsIHRpY2tlckhlaWdodCwgU3R5bGVzLmZvcmVncm91bmRDb2xvckhleCk7XG5cbiAgZG9tYWluU3RhdGUuZXZlbnRzLm9uKERvbWFpbkV2ZW50cy5uYXRpb25FdmVudE9jY3VycmVkLCAobmF0aW9uLCBoZWFkbGluZSkgPT4ge1xuICAgIHRpY2tlclN0YXRlLnN0b3J5UXVldWUucHVzaChgJHtuYXRpb24ubmFtZX0gJHtoZWFkbGluZX1gKTtcbiAgfSk7XG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMubmF0aW9uRXZlbnRFbmRlZCwgKG5hdGlvbiwgaGVhZGxpbmUpID0+IHtcbiAgICBpZiAoaGVhZGxpbmUpIHtcbiAgICAgIHRpY2tlclN0YXRlLnN0b3J5UXVldWUucHVzaChgJHtuYXRpb24ubmFtZX0gJHtoZWFkbGluZX1gKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIFVzZSB0aGlzIHRvIG1ha2Ugc3VyZSB0aGUgbWFzayBkb2Vzbid0IGNvdmVyIHRoZSBib3JkZXIgb2YgdGhlIHRpY2tlclxuICBjb25zdCBtYXNrRnV6eiA9IDE7XG4gIGNvbnN0IGxlZnRNYXNrID0gc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCB0aWNrZXJZLCBTdHlsZXMub2Zmc2V0IC0gbWFza0Z1enosIHRpY2tlckhlaWdodCwgU3R5bGVzLmJhY2tncm91bmRDb2xvckhleCkuc2V0T3JpZ2luKDAsIDApO1xuICBjb25zdCByaWdodE1hc2sgPSBzY2VuZS5hZGQucmVjdGFuZ2xlKGdhbWVXaWR0aCAtIFN0eWxlcy5vZmZzZXQgKyBtYXNrRnV6eiwgdGlja2VyWSwgU3R5bGVzLm9mZnNldCwgdGlja2VySGVpZ2h0LCBTdHlsZXMuYmFja2dyb3VuZENvbG9ySGV4KS5zZXRPcmlnaW4oMCwgMCk7XG4gIC8vIFRoZXNlIG1hc2tzIGFyZSB1c2VkIHRvIG1ha2Ugc3VyZSB0aGF0IGEgdGlja2VyIHN0b3J5IGlzbid0IHZpc2libGUgdW50aWwgaXQgYWN0dWFsbCBlbnRlcnMgdGhlIHRpY2tlciBmaWVsZFxuICBsZWZ0TWFzay5zZXREZXB0aCgxMCk7XG4gIHJpZ2h0TWFzay5zZXREZXB0aCgxMCk7XG5cbiAgdXBkYXRlU3RvcmllcyhzY2VuZSwgdGlja2VyU3RhdGUpO1xuXG4gIHJldHVybiB0aWNrZXJTdGF0ZTtcbn07XG5cbmxldCByZWFkeVRvRGlzcGxheU5leHRTdG9yeSA9IHRydWU7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTdG9yaWVzID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUsIHRpY2tlclN0YXRlOiBUaWNrZXJTdGF0ZSkgPT4ge1xuICBjb25zdCBzaG91bGRCdWlsZFN0b3J5ID0gcmVhZHlUb0Rpc3BsYXlOZXh0U3RvcnkgJiYgKHRpY2tlclN0YXRlLnN0b3J5UXVldWUubGVuZ3RoID4gMCk7XG4gIGNvbnN0IGdhbWVXaWR0aCA9IFNoYXJlZC5nZXRHYW1lV2lkdGgoc2NlbmUpO1xuXG4gIGlmIChzaG91bGRCdWlsZFN0b3J5KSB7XG4gICAgY29uc3QgdGV4dCA9IHRpY2tlclN0YXRlLnN0b3J5UXVldWUuc2hpZnQoKTtcbiAgICB0aWNrZXJTdGF0ZS5zdG9yeURpc3BsYXlzLnB1c2goeyB0ZXh0T2JqZWN0OiBzY2VuZS5hZGQudGV4dChnYW1lV2lkdGgsIHRpY2tlclN0b3J5WSwgdGV4dCksIHRleHQsIHBvc1g6IGdhbWVXaWR0aCB9KTtcbiAgICByZWFkeVRvRGlzcGxheU5leHRTdG9yeSA9IGZhbHNlO1xuICB9XG5cbiAgdGlja2VyU3RhdGUuc3RvcnlEaXNwbGF5cy5mb3JFYWNoKChzdG9yeSkgPT4ge1xuICAgIHN0b3J5LnRleHRPYmplY3QuZGVzdHJveSgpO1xuICAgIHN0b3J5LnBvc1ggLT0gMjtcbiAgICBzdG9yeS50ZXh0T2JqZWN0ID0gc2NlbmUuYWRkLnRleHQoc3RvcnkucG9zWCwgdGlja2VyU3RvcnlZLCBzdG9yeS50ZXh0KTtcbiAgICAvLyBzdG9yeS50ZXh0T2JqZWN0LnNldGRlXG4gIH0pO1xuXG4gIHRpY2tlclN0YXRlLnN0b3J5RGlzcGxheXMgPSB0aWNrZXJTdGF0ZS5zdG9yeURpc3BsYXlzLmZpbHRlcigoc3RvcnkpID0+IHtcbiAgICBjb25zdCBvZmZTY3JlZW4gPSBzdG9yeS50ZXh0T2JqZWN0LmRpc3BsYXlXaWR0aCArIHN0b3J5LnBvc1ggPCAwO1xuICAgIGlmIChvZmZTY3JlZW4pIHtcbiAgICAgIHN0b3J5LnRleHRPYmplY3QuZGVzdHJveSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG5cbiAgY29uc3QgcGFkZGluZyA9IDEwMDtcblxuICBpZiAodGlja2VyU3RhdGUuc3RvcnlEaXNwbGF5cy5sZW5ndGggPT09IDAgfHwgXy5sYXN0KHRpY2tlclN0YXRlLnN0b3J5RGlzcGxheXMpLnRleHRPYmplY3QuZGlzcGxheVdpZHRoICsgcGFkZGluZyA8IGdhbWVXaWR0aCAtIF8ubGFzdCh0aWNrZXJTdGF0ZS5zdG9yeURpc3BsYXlzKS5wb3NYKSB7XG4gICAgcmVhZHlUb0Rpc3BsYXlOZXh0U3RvcnkgPSB0cnVlO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgRG9tYWluRXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuXG5leHBvcnQgdHlwZSBDdWx0SW5pdERhdGEgPSB7XG59XG5cbmV4cG9ydCB0eXBlIEN1bHREb21haW5TdGF0ZSA9IHtcbiAgZXZlbnRzOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcixcbiAgaGFwcGluZXNzOiBudW1iZXI7XG4gIHN1Z2dlc3RlZERvbmF0aW9uOiBudW1iZXI7XG4gIGZvbGxvd2VyczogbnVtYmVyO1xuICBjYXBhY2l0eTogbnVtYmVyO1xuICBmb2xsb3dlcnNQZXJUaWNrOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0Q3VsdERvbWFpblN0YXRlID0gKGlucHV0OiBDdWx0SW5pdERhdGEsIGV2ZW50czogUGhhc2VyLkV2ZW50cy5FdmVudEVtaXR0ZXIpOiBDdWx0RG9tYWluU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGV2ZW50cyxcbiAgICBoYXBwaW5lc3M6IDEwMCxcbiAgICBmb2xsb3dlcnM6IDEsXG4gICAgY2FwYWNpdHk6IDEwMCxcbiAgICBmb2xsb3dlcnNQZXJUaWNrOiAwLjEsXG4gICAgc3VnZ2VzdGVkRG9uYXRpb246IDUsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlU3VnZ2VzdGVkRG9uYXRpb24gPSAobmV3RG9uYXRpb25BbW91bnQ6IG51bWJlciwgZG9tYWluU3RhdGU6IEN1bHREb21haW5TdGF0ZSkgPT4ge1xuICBkb21haW5TdGF0ZS5zdWdnZXN0ZWREb25hdGlvbiA9IG5ld0RvbmF0aW9uQW1vdW50O1xufTtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlUmV2ZW51ZUZyb21DdWx0ID0gKGRvbWFpblN0YXRlOiBDdWx0RG9tYWluU3RhdGUpID0+IHtcbiAgY29uc3QgcmV2ZW51ZSA9IGRvbWFpblN0YXRlLmZvbGxvd2VycyAqIGRvbWFpblN0YXRlLnN1Z2dlc3RlZERvbmF0aW9uO1xuICBkb21haW5TdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuY3VsdFJldmVudWVHZW5lcmF0ZWQsIHJldmVudWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZEZvbGxvd2Vyc1RvQ3VsdCA9IChkb21haW5TdGF0ZTogQ3VsdERvbWFpblN0YXRlKSA9PiB7XG4gIGRvbWFpblN0YXRlLmZvbGxvd2VycyArPSBkb21haW5TdGF0ZS5mb2xsb3dlcnNQZXJUaWNrO1xuICBkb21haW5TdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuZm9sbG93ZXJDb3VudENoYW5nZWQpO1xufTtcbiIsIlxuZXhwb3J0IGVudW0gRG9tYWluRXZlbnRzIHtcbiAgLy8gVHJhZGluZ1xuICB0cmFkZUNvbXBsZXRlZCA9ICdkb21haW4udHJhZGVDb21wbGV0ZWQnLFxuICB0cmFkZUZhaWxlZCA9ICdkb21haW4udHJhZGVGYWlsZWQnLFxuICBhY2NvdW50QmFsYW5jZUNoYW5nZWQgPSAnZG9tYWluLmFjY291bnRCYWxhbmNlQ2hhbmdlZCcsXG4gIGV4Y2hhbmdlUmF0ZXNDaGFuZ2VkID0gJ2RvbWFpbi5leGNoYW5nZVJhdGVzQ2hhbmdlZCcsXG4gIG5hdGlvbkV2ZW50T2NjdXJyZWQgPSAnZG9tYWluLm5hdGlvbkV2ZW50T2NjdXJyZWQnLFxuICBuYXRpb25FdmVudEVuZGVkID0gJ2RvbWFpbi5uYXRpb25FdmVudEVuZGVkJyxcblxuICAvLyBDdWx0XG4gIGZvbGxvd2VyQ291bnRDaGFuZ2VkID0gJ2RvbWFpbi5mb2xsb3dlckNvdW50Q2hhbmdlZCcsXG4gIGN1bHRSZXZlbnVlR2VuZXJhdGVkID0gJ2RvbWFpbi5jdWx0UmV2ZW51ZUdlbmVyYXRlZCcsXG59XG4iLCJpbXBvcnQgKiBhcyBUcmFkaW5nRG9tYWluIGZyb20gJy4vdHJhZGluZyc7XG5pbXBvcnQgKiBhcyBDdWx0RG9tYWluIGZyb20gJy4vY3VsdCc7XG5pbXBvcnQgeyBEb21haW5FdmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5cbmV4cG9ydCB7IERvbWFpbkV2ZW50cyB9O1xuXG5leHBvcnQgdHlwZSBEb21haW5TdGF0ZSA9IHsgZXZlbnRzOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlciB9ICYgVHJhZGluZ0RvbWFpbi5UcmFkaW5nRG9tYWluU3RhdGUgJiBDdWx0RG9tYWluLkN1bHREb21haW5TdGF0ZTtcblxudHlwZSBJbml0RG9tYWluSW5wdXQgPSBUcmFkaW5nRG9tYWluLlRyYWRpbmdJbml0RGF0YSAmIEN1bHREb21haW4uQ3VsdEluaXREYXRhO1xuXG5leHBvcnQgY29uc3QgaW5pdERvbWFpblN0YXRlID0gKGlucHV0OiBJbml0RG9tYWluSW5wdXQpOiBEb21haW5TdGF0ZSA9PiB7XG4gIGNvbnN0IGRvbWFpbkV2ZW50RW1pdHRlciA9IG5ldyBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0IGRvbWFpblN0YXRlID0ge1xuICAgIC4uLlRyYWRpbmdEb21haW4uaW5pdFRyYWRpbmdEb21haW5TdGF0ZShpbnB1dCwgZG9tYWluRXZlbnRFbWl0dGVyKSxcbiAgICAuLi5DdWx0RG9tYWluLmluaXRDdWx0RG9tYWluU3RhdGUoaW5wdXQsIGRvbWFpbkV2ZW50RW1pdHRlciksXG4gIH07XG5cbiAgcmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXJzKGRvbWFpblN0YXRlKTtcblxuICByZXR1cm4gZG9tYWluU3RhdGU7XG59O1xuXG5jb25zdCByZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcnMgPSAoZG9tYWluU3RhdGU6IERvbWFpblN0YXRlKSA9PiB7XG4gIGRvbWFpblN0YXRlLmV2ZW50cy5vbihEb21haW5FdmVudHMuY3VsdFJldmVudWVHZW5lcmF0ZWQsIChyZXZlbnVlKSA9PiB7XG4gICAgVHJhZGluZ0RvbWFpbi5hZGRSZXZlbnVlVG9Sb290QWNvdW50KGRvbWFpblN0YXRlLCByZXZlbnVlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlVGljayA9IChkb21haW5TdGF0ZTogRG9tYWluU3RhdGUpID0+IHtcbiAgLy8gVHJhZGluZyBEb21haW4gRXZlbnRzXG4gIFRyYWRpbmdEb21haW4ucnVuQ3VycmVuY3lGbHVjdHVhdGlvbnMoZG9tYWluU3RhdGUpO1xuICBUcmFkaW5nRG9tYWluLnJ1blJhbmRvbU5hdGlvbkV2ZW50cyhkb21haW5TdGF0ZSk7XG4gIFRyYWRpbmdEb21haW4uY2hlY2tGb3JFeHBpcmluZ05hdGlvbkV2ZW50cyhkb21haW5TdGF0ZSk7XG5cbiAgLy8gQ3VsdCBEb21haW4gRXZlbnRzXG4gIEN1bHREb21haW4uYWRkRm9sbG93ZXJzVG9DdWx0KGRvbWFpblN0YXRlKTtcbiAgQ3VsdERvbWFpbi5nZW5lcmF0ZVJldmVudWVGcm9tQ3VsdChkb21haW5TdGF0ZSk7XG59O1xuIiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBmb3JtYXROdW1iZXJGb3JEaXNwbGF5IH0gZnJvbSAnc3JjL3NoYXJlZCc7XG5cbmV4cG9ydCBlbnVtIERvbWFpbkVycm9ycyB7XG4gIHRyYWRlRmFpbGVkX0luc3VmZmljaWVudEZ1bmRzID0gXCJJbnN1ZmZpY2llbnQgRnVuZHNcIlxufVxudHlwZSBSYW5nZSA9IHtcbiAgbWluOiBudW1iZXI7XG4gIG1heDogbnVtYmVyO1xufVxuZXhwb3J0IHR5cGUgSW5mbHVlbmNlRXZlbnRUeXBlID0ge1xuICBuYW1lOiBJbmZsdWVuY2VFdmVudFR5cGVOYW1lcyxcbiAgc3VjY2Vzc1JhdGU6IG51bWJlcixcbiAgc3VjY2Vzc0hlYWRsaW5lczogc3RyaW5nW10sXG4gIGZhaWx1cmVIZWFkbGluZXM6IHN0cmluZ1tdLFxuICBzdWNjZXNzQmFzZU11bHRpcGxpZXI6IFJhbmdlLFxuICBzdWNjZXNzRmx1eE11bHRpcGxpZXI6IFJhbmdlLFxuICBmYWlsdXJlQmFzZU11bHRpcGxpZXI6IFJhbmdlLFxuICBmYWlsdXJlRmx1eE11bHRpcGxpZXI6IFJhbmdlLFxuICBkdXJhdGlvbjogUmFuZ2UsXG59XG5leHBvcnQgdHlwZSBJbmZsdWVuY2VBY3Rpb24gPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgY29zdDogbnVtYmVyLFxuICBldmVudFR5cGU6IEluZmx1ZW5jZUV2ZW50VHlwZSxcbn1cbmV4cG9ydCB0eXBlIEN1cnJlbmN5ID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGV4Y2hhbmdlUmF0ZTogbnVtYmVyLFxuICB0cmVuZDogXCJ1cFwiIHwgXCJkb3duXCIsXG59XG5leHBvcnQgdHlwZSBOYXRpb24gPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgY3VycmVuY3k6IEN1cnJlbmN5LFxuICBhY3RpdmVFdmVudHM6IE5hdGlvbkV2ZW50W10sXG4gIGhpc3RvcmljYWxFdmVudHM6IE5hdGlvbkV2ZW50W10sXG59XG5leHBvcnQgdHlwZSBOYXRpb25FdmVudCA9IHtcbiAgbmFtZTogTmF0aW9uRXZlbnRUeXBlTmFtZXMgfCBJbmZsdWVuY2VFdmVudFR5cGVOYW1lcyxcbiAgZXZlbnRTdGFydEhlYWRsaW5lOiBzdHJpbmcsXG4gIGV2ZW50RW5kSGVhZGxpbmU/OiBzdHJpbmcsXG4gIGJhc2VNdWx0aXBsaWVyOiBudW1iZXIsXG4gIGZsdXhNdWx0aXBsaWVyOiBudW1iZXIsXG4gIGR1cmF0aW9uOiBudW1iZXIsXG4gIHRyaWdnZXJlZFRpbWU6IG51bWJlcixcbiAga2luZDogXCJwb3NpdGl2ZVwiIHwgXCJuZWdhdGl2ZVwiLFxufVxuZXhwb3J0IHR5cGUgVHJhbnNhY3Rpb24gPSB7XG4gIGFtb3VudDogbnVtYmVyLFxuICB0cmFuc2FjdGlvblR5cGU6IFwiQ3JlZGl0XCIgfCBcIkRlYml0XCJcbn1cbmV4cG9ydCB0eXBlIEFjY291bnQgPSB7XG4gIGtpbmQ6IFwidHJhZGluZ1wiIHwgXCJyb290XCIsXG4gIG5hbWU6IHN0cmluZyxcbiAgY3VycmVuY3k6IEN1cnJlbmN5LFxuICBiYWxhbmNlOiBudW1iZXIsXG4gIGxlZGdlcjogVHJhbnNhY3Rpb25bXSxcbn1cbmV4cG9ydCB0eXBlIFRyYWRlTGVkZ2VyID0ge1xuICB0cmFkZXM6IFRyYWRlW11cbn1cbmV4cG9ydCB0eXBlIFRyYWRlID0ge1xuICBzb3VyY2VDdXJyZW5jeTogQ3VycmVuY3ksXG4gIGRlc3RpbmF0aW9uQ3VycmVuY3k6IEN1cnJlbmN5LFxuICBzb3VyY2VBbW91bnQ6IG51bWJlcixcbiAgZGVzdGluYXRpb25BbW91bnQ6IG51bWJlcixcbiAgZXhjaGFuZ2VSYXRlOiBudW1iZXJcbn1cbmV4cG9ydCB0eXBlIFRyYWRpbmdEb21haW5TdGF0ZSA9IHtcbiAgdHJhZGVMZWRnZXI6IFRyYWRlTGVkZ2VyLFxuICBuYXRpb25zOiBOYXRpb25bXSxcbiAgdHJhZGVDdXJyZW5jaWVzOiBDdXJyZW5jeVtdLFxuICB0cmFkZUFjY291bnRzOiBBY2NvdW50W10sXG4gIHJvb3RDdXJyZW5jeTogQ3VycmVuY3ksXG4gIHJvb3RBY2NvdW50OiBBY2NvdW50LFxuICBldmVudHM6IFBoYXNlci5FdmVudHMuRXZlbnRFbWl0dGVyLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWNjb3VudChuYW1lOiBzdHJpbmcsIHN0YXJ0aW5nQmFsYW5jZTogbnVtYmVyLCBjdXJyZW5jeTogQ3VycmVuY3ksIGlzUm9vdDogYm9vbGVhbik6IEFjY291bnQge1xuICBsZXQgbmV3QWNjb3VudDogQWNjb3VudCA9ICB7XG4gICAga2luZDogaXNSb290ID8gXCJyb290XCIgOiBcInRyYWRpbmdcIixcbiAgICBuYW1lOiBuYW1lLFxuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcbiAgICBiYWxhbmNlOiBzdGFydGluZ0JhbGFuY2UsXG4gICAgbGVkZ2VyOiBbXSxcbiAgfVxuICBpZiAoc3RhcnRpbmdCYWxhbmNlID4gMCkge1xuICAgIG5ld0FjY291bnQubGVkZ2VyLnB1c2goe2Ftb3VudDogc3RhcnRpbmdCYWxhbmNlLCB0cmFuc2FjdGlvblR5cGU6IFwiQ3JlZGl0XCIgfSk7XG4gIH1cbiAgcmV0dXJuIG5ld0FjY291bnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWNvcmRUcmFkZShzb3VyY2U6IEFjY291bnQsIGRlc3RpbmF0aW9uOiBBY2NvdW50LCBzb3VyY2VBbW91bnQ6IG51bWJlciwgc291cmNlVG9EZXN0aW5hdGlvbkV4Y2hhbmdlUmF0ZTogbnVtYmVyLCBzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIGlmIChzb3VyY2UuYmFsYW5jZSA+PSBzb3VyY2VBbW91bnQpIHtcbiAgICBzb3VyY2UubGVkZ2VyLnB1c2goe2Ftb3VudDogc291cmNlQW1vdW50LCB0cmFuc2FjdGlvblR5cGU6IFwiRGViaXRcIn0pO1xuICAgIHNvdXJjZS5iYWxhbmNlIC09IHNvdXJjZUFtb3VudDtcbiAgICBsZXQgZGVzdGluYXRpb25BbW91bnQgPSBzb3VyY2VBbW91bnQgKiBzb3VyY2VUb0Rlc3RpbmF0aW9uRXhjaGFuZ2VSYXRlO1xuICAgIGRlc3RpbmF0aW9uLmxlZGdlci5wdXNoKHthbW91bnQ6IGRlc3RpbmF0aW9uQW1vdW50LCB0cmFuc2FjdGlvblR5cGU6IFwiQ3JlZGl0XCJ9KTtcbiAgICBkZXN0aW5hdGlvbi5iYWxhbmNlICs9IGRlc3RpbmF0aW9uQW1vdW50O1xuICAgIGxldCBuZXdUcmFkZSA9IHtcbiAgICAgIHNvdXJjZUFtb3VudDogc291cmNlQW1vdW50LFxuICAgICAgc291cmNlQ3VycmVuY3k6IHNvdXJjZS5jdXJyZW5jeSxcbiAgICAgIGRlc3RpbmF0aW9uQW1vdW50OiBkZXN0aW5hdGlvbkFtb3VudCxcbiAgICAgIGRlc3RpbmF0aW9uQ3VycmVuY3k6IGRlc3RpbmF0aW9uLmN1cnJlbmN5LFxuICAgICAgZXhjaGFuZ2VSYXRlOiBzb3VyY2VUb0Rlc3RpbmF0aW9uRXhjaGFuZ2VSYXRlXG4gICAgfTtcbiAgICBzdGF0ZS50cmFkZUxlZGdlci50cmFkZXMucHVzaChuZXdUcmFkZSk7XG5cbiAgICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMudHJhZGVDb21wbGV0ZWQsIG5ld1RyYWRlKTtcbiAgICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuYWNjb3VudEJhbGFuY2VDaGFuZ2VkLCBzb3VyY2UpO1xuICAgIHN0YXRlLmV2ZW50cy5lbWl0KERvbWFpbkV2ZW50cy5hY2NvdW50QmFsYW5jZUNoYW5nZWQsIGRlc3RpbmF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMudHJhZGVGYWlsZWQsIERvbWFpbkVycm9ycy50cmFkZUZhaWxlZF9JbnN1ZmZpY2llbnRGdW5kcyk7XG4gIH1cbn1cblxuY29uc3QgTUlOX1NUQVJUSU5HX0VYQ0hBTkdFX1JBVEUgPSA1O1xuY29uc3QgTUFYX1NUQVJUSU5HX0VYQ0hBTkdFX1JBVEUgPSA0MDtcbmNvbnN0IE1JTl9DVVJSRU5DWV9FWENIQU5HRV9SQVRFID0gMTtcbmNvbnN0IE1BWF9DVVJSRU5DWV9FWENIQU5HRV9SQVRFID0gOTk7XG5cbmZ1bmN0aW9uIHJhbmRvbURlY2ltYWxCZXR3ZWVuKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbmV4cG9ydCB0eXBlIFRyYWRpbmdJbml0TmF0aW9uYWxDdXJyZW5jeSA9IHsgbmF0aW9uOiBzdHJpbmcsIGN1cnJlbmN5OiBzdHJpbmcgfTtcbmV4cG9ydCB0eXBlIFRyYWRpbmdJbml0RGF0YSA9IHtcbiAgcm9vdEN1cnJlbmN5TmFtZTogc3RyaW5nLFxuICByb290Q3VycmVuY3lTdGFydGluZ0Ftb3VudDogbnVtYmVyLFxuICBuYXRpb25zOiBUcmFkaW5nSW5pdE5hdGlvbmFsQ3VycmVuY3lbXVxufVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUcmFkaW5nRG9tYWluU3RhdGUoaW5pdERhdGE6IFRyYWRpbmdJbml0RGF0YSwgZXZlbnRzOiBQaGFzZXIuRXZlbnRzLkV2ZW50RW1pdHRlcik6IFRyYWRpbmdEb21haW5TdGF0ZSB7XG4gIGxldCBuYXRpb25zOiBOYXRpb25bXSA9IGluaXREYXRhLm5hdGlvbnMubWFwKG4gPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBuLm5hdGlvbixcbiAgICAgIGN1cnJlbmN5OiB7IG5hbWU6IG4uY3VycmVuY3ksIGV4Y2hhbmdlUmF0ZTogcmFuZG9tRGVjaW1hbEJldHdlZW4oTUlOX1NUQVJUSU5HX0VYQ0hBTkdFX1JBVEUsIE1BWF9TVEFSVElOR19FWENIQU5HRV9SQVRFKSwgdHJlbmQ6IFwidXBcIiB9IGFzIEN1cnJlbmN5LFxuICAgICAgYWN0aXZlRXZlbnRzOiBbXSxcbiAgICAgIGhpc3RvcmljYWxFdmVudHM6IFtdLFxuICAgIH1cbiAgfSk7XG4gIGxldCBjdXJyZW5jaWVzID0gbmF0aW9ucy5tYXAobiA9PiBuLmN1cnJlbmN5KTtcbiAgbGV0IGFjY291bnRzOiBBY2NvdW50W10gPSBjdXJyZW5jaWVzLm1hcChjID0+IHtcbiAgICByZXR1cm4gY3JlYXRlQWNjb3VudChjLm5hbWUsIDAsIGMsIGZhbHNlKTtcbiAgfSk7XG4gIGxldCByb290Q3VycmVuY3k6IEN1cnJlbmN5ID0geyBuYW1lOiBpbml0RGF0YS5yb290Q3VycmVuY3lOYW1lLCBleGNoYW5nZVJhdGU6IDEsIHRyZW5kOiBcInVwXCIgfTtcblxuICByZXR1cm4ge1xuICAgIGV2ZW50cyxcbiAgICBuYXRpb25zOiBuYXRpb25zLFxuICAgIHRyYWRlQ3VycmVuY2llczogY3VycmVuY2llcyxcbiAgICB0cmFkZUFjY291bnRzOiBhY2NvdW50cyxcbiAgICB0cmFkZUxlZGdlcjogeyB0cmFkZXM6IFtdIH0sXG4gICAgcm9vdEN1cnJlbmN5LFxuICAgIHJvb3RBY2NvdW50OiBjcmVhdGVBY2NvdW50KGluaXREYXRhLnJvb3RDdXJyZW5jeU5hbWUsIGluaXREYXRhLnJvb3RDdXJyZW5jeVN0YXJ0aW5nQW1vdW50LCByb290Q3VycmVuY3ksIHRydWUpLFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBydW5DdXJyZW5jeUZsdWN0dWF0aW9ucyhzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIHN0YXRlLm5hdGlvbnMuZm9yRWFjaChuYXRpb24gPT4ge1xuICAgIGxldCBjdXJyZW5jeSA9IG5hdGlvbi5jdXJyZW5jeTtcbiAgICBsZXQgZmx1eE11bHRpcGxpZXIgPSBuYXRpb24uYWN0aXZlRXZlbnRzLnJlZHVjZSgoaSwgZXZlbnQpID0+IGkgKiBldmVudC5mbHV4TXVsdGlwbGllciwgMSk7XG4gICAgbGV0IGJhc2VNdWx0aXBsaWVyID0gbmF0aW9uLmFjdGl2ZUV2ZW50cy5yZWR1Y2UoKGksIGV2ZW50KSA9PiBpICogZXZlbnQuYmFzZU11bHRpcGxpZXIsIDEpO1xuICAgIGxldCBjaGFuZ2UgPSBjdXJyZW5jeS5leGNoYW5nZVJhdGUgKiAocmFuZG9tRGVjaW1hbEJldHdlZW4oMC45OCAqIGZsdXhNdWx0aXBsaWVyLCAxLjAyICogZmx1eE11bHRpcGxpZXIpKSAqIGJhc2VNdWx0aXBsaWVyIC0gY3VycmVuY3kuZXhjaGFuZ2VSYXRlO1xuICAgIGxldCBleHJNaWRwb2ludCA9IChNQVhfQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURSAtIE1JTl9DVVJSRU5DWV9FWENIQU5HRV9SQVRFKSAvIDI7XG4gICAgbGV0IGNoYW5nZVNjYWxlID0gKFxuICAgICAgTWF0aC5hYnMoY3VycmVuY3kuZXhjaGFuZ2VSYXRlIC0gZXhyTWlkcG9pbnQpIDwgMlxuICAgICAgfHwgKGNoYW5nZSA8IDAgJiYgY3VycmVuY3kuZXhjaGFuZ2VSYXRlID4gZXhyTWlkcG9pbnQpXG4gICAgICB8fCAoY2hhbmdlID4gMCAmJiBjdXJyZW5jeS5leGNoYW5nZVJhdGUgPCBleHJNaWRwb2ludClcbiAgICApID8gMSA6ICgoZXhyTWlkcG9pbnQgLyAzMC4wKSAvIE1hdGguYWJzKGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSAtIGV4ck1pZHBvaW50KSk7XG4gICAgbGV0IHNjYWxlZENoYW5nZSA9IGNoYW5nZSAqIGNoYW5nZVNjYWxlO1xuICAgIGN1cnJlbmN5LnRyZW5kID0gc2NhbGVkQ2hhbmdlID4gMCA/IFwidXBcIiA6IFwiZG93blwiO1xuICAgIGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSArPSBzY2FsZWRDaGFuZ2U7XG4gICAgaWYgKGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSA8IE1JTl9DVVJSRU5DWV9FWENIQU5HRV9SQVRFKSB7XG4gICAgICBjdXJyZW5jeS5leGNoYW5nZVJhdGUgPSBNSU5fQ1VSUkVOQ1lfRVhDSEFOR0VfUkFURTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY3VycmVuY3kuZXhjaGFuZ2VSYXRlID4gTUFYX0NVUlJFTkNZX0VYQ0hBTkdFX1JBVEUpIHtcbiAgICAgIGN1cnJlbmN5LmV4Y2hhbmdlUmF0ZSA9IE1BWF9DVVJSRU5DWV9FWENIQU5HRV9SQVRFO1xuICAgIH1cbiAgfSk7XG4gIHN0YXRlLmV2ZW50cy5lbWl0KERvbWFpbkV2ZW50cy5leGNoYW5nZVJhdGVzQ2hhbmdlZCk7XG59XG5cbnR5cGUgTmF0aW9uRXZlbnRUeXBlTmFtZXMgPSBcIldhclwiIHwgXCJGb3JnaW5nIGZyaWVuZHNoaXBzXCIgfCBcIkdvb2QgZGF5XCIgfCBcIkJhZCBkYXlcIiB8IFwiR3JlYXQgbW9udGhcIiB8IFwiVGVycmlibGUgbW9udGhcIiB8IFwiRmFtaW5lXCIgfCBcIkhpZ2ggcHJvZHVjdGl2aXR5XCIgfCBcIkJhZCB5ZWFyXCIgfCBcIk91dHN0YW5kaW5nIHllYXJcIjtcbnR5cGUgTmF0aW9uRXZlbnRUeXBlID0ge1xuICBraW5kOiBcInBvc2l0aXZlXCIgfCBcIm5lZ2F0aXZlXCIsXG4gIG5hbWU6IE5hdGlvbkV2ZW50VHlwZU5hbWVzLFxuICBldmVudFN0YXJ0SGVhZGxpbmU6IHN0cmluZyxcbiAgZXZlbnRFbmRIZWFkbGluZTogc3RyaW5nLFxuICBiYXNlTXVsdGlwbGllcjogUmFuZ2UsXG4gIGZsdXhNdWx0aXBsaWVyOiBSYW5nZSxcbiAgZHVyYXRpb246IFJhbmdlLFxufVxuY29uc3QgbmF0aW9uRXZlbnRUeXBlczogTmF0aW9uRXZlbnRUeXBlW10gPSBbXG4gIHtcbiAgICBraW5kOiBcIm5lZ2F0aXZlXCIsXG4gICAgbmFtZTogXCJXYXJcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaGFzIGdvbmUgdG8gd2FyIVwiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwiaXMgbm8gbG9uZ2VyIGF0IHdhclwiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAxLjAxLCBtYXg6IDEuMX0sXG4gICAgZmx1eE11bHRpcGxpZXI6IHttaW46IDEuMCwgbWF4OiAxLjF9LFxuICAgIGR1cmF0aW9uOiB7bWluOiA2MCwgbWF4OiAxMjB9XG4gIH0sXG4gIHtcbiAgICBraW5kOiBcInBvc2l0aXZlXCIsXG4gICAgbmFtZTogXCJGb3JnaW5nIGZyaWVuZHNoaXBzXCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcImlzIGZvcmdpbmcgc3Ryb25nIGZyaWVuZHNoaXBzXCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJhcHBlYXJzIG5vcm1hbFwiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAwLjkwLCBtYXg6IDAuOTl9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjIsIG1heDogMC40fSxcbiAgICBkdXJhdGlvbjoge21pbjogNjAsIG1heDogMTIwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIG5hbWU6IFwiRmFtaW5lXCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcImlzIGV4cGVyaWVuY2luZyBhIGZhbWluZVwiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwiaGFzIHN1ZmZpY2llbnQgZm9vZCBhbmQgd2F0ZXJcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMS4wMSwgbWF4OiAxLjF9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAxLjAsIG1heDogMS4xfSxcbiAgICBkdXJhdGlvbjoge21pbjogMzAsIG1heDogNjB9XG4gIH0sXG4gIHtcbiAgICBraW5kOiBcInBvc2l0aXZlXCIsXG4gICAgbmFtZTogXCJIaWdoIHByb2R1Y3Rpdml0eVwiLFxuICAgIGV2ZW50U3RhcnRIZWFkbGluZTogXCJpcyBodWdlbHkgcHJvZHVjdGl2ZSByaWdodCBub3dcIixcbiAgICBldmVudEVuZEhlYWRsaW5lOiBcImlzIHJlc3RpbmcgZnJvbSB0aGVpciBwcm9kdWN0aXZpdHkgcHVzaFwiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAwLjk5LCBtYXg6IDAuOTl9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMS4yfSxcbiAgICBkdXJhdGlvbjoge21pbjogMzAsIG1heDogNjB9XG4gIH0sXG4gIHtcbiAgICBraW5kOiBcInBvc2l0aXZlXCIsXG4gICAgbmFtZTogXCJHb29kIGRheVwiLFxuICAgIGV2ZW50U3RhcnRIZWFkbGluZTogXCJpcyBoYXZpbmcgYSBwYXJ0aWN1bGFybHkgZ29vZCB0aW1lXCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJpcyBmZWVsaW5nIGF2ZXJhZ2VcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMC45LCBtYXg6IDAuOTl9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogMTAsIG1heDogMjB9XG4gIH0sXG4gIHtcbiAgICBraW5kOiBcIm5lZ2F0aXZlXCIsXG4gICAgbmFtZTogXCJCYWQgZGF5XCIsXG4gICAgZXZlbnRTdGFydEhlYWRsaW5lOiBcInN1cmUgbG9va3MgbGlrZSB0aGV5J3JlIGhhdmluZyBhIGJhZCBkYXlcIixcbiAgICBldmVudEVuZEhlYWRsaW5lOiBcImlzIG9rXCIsXG4gICAgYmFzZU11bHRpcGxpZXI6IHttaW46IDEuMDEsIG1heDogMS4xfSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDEwLCBtYXg6IDIwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJwb3NpdGl2ZVwiLFxuICAgIG5hbWU6IFwiR3JlYXQgbW9udGhcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaXMgZW5qb3lpbmcgc3VjY2VzcyB0aGlzIG1vbnRoXCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJzZWVtcyBmaW5lXCIsXG4gICAgYmFzZU11bHRpcGxpZXI6IHttaW46IDAuOSwgbWF4OiAwLjk5fSxcbiAgICBmbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDIwLCBtYXg6IDQwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIG5hbWU6IFwiVGVycmlibGUgbW9udGhcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwibG9va3MgbGlrZSB0aGV5J3JlIHN0cnVnZ2xpbmcgdGhpcyBtb250aFwiLFxuICAgIGV2ZW50RW5kSGVhZGxpbmU6IFwibG9va3MgbGlrZSB0aGV5J3JlIGRvaW5nIGJldHRlclwiLFxuICAgIGJhc2VNdWx0aXBsaWVyOiB7bWluOiAxLjAxLCBtYXg6IDEuMX0sXG4gICAgZmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGR1cmF0aW9uOiB7bWluOiAyMCwgbWF4OiA0MH1cbiAgfSxcbiAge1xuICAgIGtpbmQ6IFwicG9zaXRpdmVcIixcbiAgICBuYW1lOiBcIk91dHN0YW5kaW5nIHllYXJcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaXMgb3V0c3RhbmRpbmcgdGhpcyB5ZWFyXCIsXG4gICAgZXZlbnRFbmRIZWFkbGluZTogXCJ1cCB0byB0aGUgdXN1YWxcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMC45LCBtYXg6IDAuOTl9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogODAsIG1heDogMTYwfVxuICB9LFxuICB7XG4gICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIG5hbWU6IFwiQmFkIHllYXJcIixcbiAgICBldmVudFN0YXJ0SGVhZGxpbmU6IFwiaXNuJ3QgaGF2aW5nIGEgdmVyeSBnb29kIHllYXJcIixcbiAgICBldmVudEVuZEhlYWRsaW5lOiBcImlzbid0IGRvaW5nIHRvbyBiYWRcIixcbiAgICBiYXNlTXVsdGlwbGllcjoge21pbjogMS4wMSwgbWF4OiAxLjF9LFxuICAgIGZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogODAsIG1heDogMTYwfVxuICB9LFxuXVxuY29uc3QgUkFORE9NX0VWRU5UX1RIUkVTSE9MRCA9IDAuOTtcbmZ1bmN0aW9uIHJhbmRvbUludGVnZXJCZXR3ZWVuKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5mbG9vcihyYW5kb21EZWNpbWFsQmV0d2VlbihtaW4sIG1heCkpO1xufVxuZnVuY3Rpb24gc2V0QWN0aXZlRXZlbnRPbk5hdGlvbihldmVudDogTmF0aW9uRXZlbnQsIG5hdGlvbjogTmF0aW9uLCBzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIGNvbnNvbGUubG9nKCdzZXRBY3RpdmVFdmVudE9uTmF0aW9uJywgZXZlbnQsIG5hdGlvbilcbiAgbmF0aW9uLmFjdGl2ZUV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgc3RhdGUuZXZlbnRzLmVtaXQoRG9tYWluRXZlbnRzLm5hdGlvbkV2ZW50T2NjdXJyZWQsIG5hdGlvbiwgZXZlbnQuZXZlbnRTdGFydEhlYWRsaW5lKTtcbn1cbmZ1bmN0aW9uIGVuZEFjdGl2ZUV2ZW50T25OYXRpb24oZXZlbnQ6IE5hdGlvbkV2ZW50LCBuYXRpb246IE5hdGlvbiwgc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSkge1xuICBsZXQgaW5kZXggPSBuYXRpb24uYWN0aXZlRXZlbnRzLmluZGV4T2YoZXZlbnQpO1xuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIG5hdGlvbi5hY3RpdmVFdmVudHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBuYXRpb24uaGlzdG9yaWNhbEV2ZW50cy5wdXNoKGV2ZW50KTtcbiAgICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMubmF0aW9uRXZlbnRFbmRlZCwgbmF0aW9uLCBldmVudC5ldmVudEVuZEhlYWRsaW5lKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tGb3JFeHBpcmluZ05hdGlvbkV2ZW50cyhzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICBzdGF0ZS5uYXRpb25zLmZvckVhY2gobmF0aW9uID0+IHtcbiAgICBuYXRpb24uYWN0aXZlRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRyaWdnZXJlZFRpbWUgKyBldmVudC5kdXJhdGlvbioxMDAwIDw9IG5vdykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkV4cGlyaW5nIGFuIGV2ZW50ISEhXCIsIG5vdywgZXZlbnQpO1xuICAgICAgICBlbmRBY3RpdmVFdmVudE9uTmF0aW9uKGV2ZW50LCBuYXRpb24sIHN0YXRlKVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1blJhbmRvbU5hdGlvbkV2ZW50cyhzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlKSB7XG4gIGlmIChNYXRoLnJhbmRvbSgpID4gUkFORE9NX0VWRU5UX1RIUkVTSE9MRCkge1xuICAgIGNvbnNvbGUubG9nKFwiQSBSQU5ET00gRVZFTlQgT0NDVVJSRUQhISFcIik7XG4gICAgbGV0IGV2ZW50VHlwZSA9IG5hdGlvbkV2ZW50VHlwZXNbcmFuZG9tSW50ZWdlckJldHdlZW4oMCwgbmF0aW9uRXZlbnRUeXBlcy5sZW5ndGgpXTtcbiAgICBsZXQgY2hvc2VuTmF0aW9uID0gc3RhdGUubmF0aW9uc1tyYW5kb21JbnRlZ2VyQmV0d2VlbigwLCBzdGF0ZS5uYXRpb25zLmxlbmd0aCldO1xuICAgIGlmIChjaG9zZW5OYXRpb24uYWN0aXZlRXZlbnRzLmxlbmd0aCA9PSAwIHx8IChjaG9zZW5OYXRpb24uYWN0aXZlRXZlbnRzLmxlbmd0aCA9PSAxICYmIGNob3Nlbk5hdGlvbi5hY3RpdmVFdmVudHNbMF0ua2luZCA9PSBldmVudFR5cGUua2luZCkpIHtcbiAgICAgIGxldCBldmVudDogTmF0aW9uRXZlbnQgPSB7XG4gICAgICAgIGJhc2VNdWx0aXBsaWVyOiByYW5kb21EZWNpbWFsQmV0d2VlbihldmVudFR5cGUuYmFzZU11bHRpcGxpZXIubWluLCBldmVudFR5cGUuYmFzZU11bHRpcGxpZXIubWF4KSxcbiAgICAgICAgZmx1eE11bHRpcGxpZXI6IHJhbmRvbURlY2ltYWxCZXR3ZWVuKGV2ZW50VHlwZS5mbHV4TXVsdGlwbGllci5taW4sIGV2ZW50VHlwZS5mbHV4TXVsdGlwbGllci5tYXgpLFxuICAgICAgICBuYW1lOiBldmVudFR5cGUubmFtZSxcbiAgICAgICAgZXZlbnRTdGFydEhlYWRsaW5lOiBldmVudFR5cGUuZXZlbnRTdGFydEhlYWRsaW5lLFxuICAgICAgICBldmVudEVuZEhlYWRsaW5lOiBldmVudFR5cGUuZXZlbnRFbmRIZWFkbGluZSxcbiAgICAgICAgZHVyYXRpb246IHJhbmRvbUludGVnZXJCZXR3ZWVuKGV2ZW50VHlwZS5kdXJhdGlvbi5taW4sIGV2ZW50VHlwZS5kdXJhdGlvbi5tYXgpLFxuICAgICAgICB0cmlnZ2VyZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgICBraW5kOiBldmVudFR5cGUua2luZCxcbiAgICAgIH07XG4gICAgICBzZXRBY3RpdmVFdmVudE9uTmF0aW9uKGV2ZW50LCBjaG9zZW5OYXRpb24sIHN0YXRlKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmFuZG9tQXJyYXlFbGVtZW50ID0gPFQ+KGFycjogVFtdKTogVCA9PiB7XG4gIHJldHVybiBhcnJbcmFuZG9tSW50ZWdlckJldHdlZW4oMCwgYXJyLmxlbmd0aCldO1xufVxuXG5leHBvcnQgY29uc3QgYWRkUmV2ZW51ZVRvUm9vdEFjb3VudCA9IChzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlLCByZXZlbnVlQW1vdW50OiBudW1iZXIpID0+IHtcbiAgc3RhdGUucm9vdEFjY291bnQuYmFsYW5jZSArPSByZXZlbnVlQW1vdW50O1xuICBzdGF0ZS5ldmVudHMuZW1pdChEb21haW5FdmVudHMuYWNjb3VudEJhbGFuY2VDaGFuZ2VkLCBzdGF0ZS5yb290QWNjb3VudCk7XG59O1xuXG5cbmV4cG9ydCBjb25zdCBzdGFydFJ1bW9yQWN0aW9uOiBJbmZsdWVuY2VBY3Rpb24gPSB7XG4gIGNvc3Q6IDEwMDAsXG4gIG5hbWU6IFwiU1RBUlQgUlVNT1JcIixcbiAgZXZlbnRUeXBlOiB7XG4gICAgbmFtZTogXCJTdGFydCBSdW1vclwiLFxuICAgIHN1Y2Nlc3NSYXRlOiAwLjkwLFxuICAgIHN1Y2Nlc3NIZWFkbGluZXM6IFtcbiAgICAgIFwiaGFzIHJlcG9ydGVkIGdvb2QgbWFya2V0IGJlaGF2aW9yXCIsXG4gICAgXSxcbiAgICBmYWlsdXJlSGVhZGxpbmVzOiBbXG4gICAgICBcIndhcyBjYXVnaHQgbHlpbmcgYWJvdXQgbmF0aW9uYWwgaW5jb21lXCIsXG4gICAgXSxcbiAgICBzdWNjZXNzQmFzZU11bHRpcGxpZXI6IHttaW46IDAuOTUsIG1heDogMC45OX0sXG4gICAgc3VjY2Vzc0ZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBmYWlsdXJlQmFzZU11bHRpcGxpZXI6IHttaW46IDEuMDEsIG1heDogMS4wNX0sXG4gICAgZmFpbHVyZUZsdXhNdWx0aXBsaWVyOiB7bWluOiAwLjcsIG1heDogMC44fSxcbiAgICBkdXJhdGlvbjoge21pbjogODAsIG1heDogMTYwfVxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGJyaWJlUG9saXRpY2lhbkFjdGlvbjogSW5mbHVlbmNlQWN0aW9uID0ge1xuICBjb3N0OiAxMDAwMCxcbiAgbmFtZTogXCJCUklCRSBQT0xJVElDSUFOXCIsXG4gIGV2ZW50VHlwZToge1xuICAgIG5hbWU6IFwiQnJpYmVcIixcbiAgICBzdWNjZXNzUmF0ZTogMC43NSxcbiAgICBzdWNjZXNzSGVhZGxpbmVzOiBbXG4gICAgICBcImlzIGRvaW5nIGluZXhwbGljYWJseSB3ZWxsIHRvZGF5XCIsXG4gICAgXSxcbiAgICBmYWlsdXJlSGVhZGxpbmVzOiBbXG4gICAgICBcImlzIHN1ZmZlcmluZyBmcm9tIGEgYnJpYmVyeSBzY2FuZGFsXCIsXG4gICAgXSxcbiAgICBzdWNjZXNzQmFzZU11bHRpcGxpZXI6IHttaW46IDAuOSwgbWF4OiAwLjk5fSxcbiAgICBzdWNjZXNzRmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGZhaWx1cmVCYXNlTXVsdGlwbGllcjoge21pbjogMS4wMywgbWF4OiAxLjEzfSxcbiAgICBmYWlsdXJlRmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGR1cmF0aW9uOiB7bWluOiA4MCwgbWF4OiAxNjB9XG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgcmlnRWxlY3Rpb25BY3Rpb246IEluZmx1ZW5jZUFjdGlvbiA9IHtcbiAgY29zdDogMTAwMDAwLFxuICBuYW1lOiBcIlJJRyBFTEVDVElPTlwiLFxuICBldmVudFR5cGU6IHtcbiAgICBuYW1lOiBcIlJpZyBFbGVjdGlvblwiLFxuICAgIHN1Y2Nlc3NSYXRlOiAwLjUsXG4gICAgc3VjY2Vzc0hlYWRsaW5lczogW1xuICAgICAgXCJoYWQgYW4gdW5mb3JzZWVuIHVwc2V0IGF0IHRoZSBwb2xscyB0b2RheVwiLFxuICAgIF0sXG4gICAgZmFpbHVyZUhlYWRsaW5lczogW1xuICAgICAgXCJ1bmNvdmVyZWQgZXZpZGVuY2UgdGhhdCB0aGUgbGFzdCBlbGVjdGlvbiB3YXMgcmlnZ2VkXCIsXG4gICAgXSxcbiAgICBzdWNjZXNzQmFzZU11bHRpcGxpZXI6IHttaW46IDAuOCwgbWF4OiAwLjkwfSxcbiAgICBzdWNjZXNzRmx1eE11bHRpcGxpZXI6IHttaW46IDAuNywgbWF4OiAwLjh9LFxuICAgIGZhaWx1cmVCYXNlTXVsdGlwbGllcjoge21pbjogMS4xMCwgbWF4OiAxLjJ9LFxuICAgIGZhaWx1cmVGbHV4TXVsdGlwbGllcjoge21pbjogMC43LCBtYXg6IDAuOH0sXG4gICAgZHVyYXRpb246IHttaW46IDgwLCBtYXg6IDE2MH1cbiAgfSxcbn07XG5cbnR5cGUgSW5mbHVlbmNlRXZlbnRUeXBlTmFtZXMgPSBcIlN0YXJ0IFJ1bW9yXCIgfCBcIkJyaWJlXCIgfCBcIlJpZyBFbGVjdGlvblwiO1xuZXhwb3J0IGNvbnN0IGluZmx1ZW5jZUFjdGlvbnM6IEluZmx1ZW5jZUFjdGlvbltdID0gW1xuICBzdGFydFJ1bW9yQWN0aW9uLFxuICBicmliZVBvbGl0aWNpYW5BY3Rpb24sXG4gIHJpZ0VsZWN0aW9uQWN0aW9uLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5hdGlvbkZyb21BY2NvdW50KHN0YXRlOiBUcmFkaW5nRG9tYWluU3RhdGUsIGFjY291bnQ6IEFjY291bnQpIHtcbiAgcmV0dXJuIHN0YXRlLm5hdGlvbnMuZmluZCgobmF0aW9uKSA9PiBuYXRpb24uY3VycmVuY3kubmFtZSA9PT0gYWNjb3VudC5jdXJyZW5jeS5uYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UnVtb3Ioc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSwgYWNjb3VudDogQWNjb3VudCkge1xuICBzZXRBY3RpdmVOYXRpb25FdmVudEZyb21BY3Rpb24oc3RhdGUsIGFjY291bnQsIHN0YXJ0UnVtb3JBY3Rpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJpYmVQb2xpdGljaWFuKHN0YXRlOiBUcmFkaW5nRG9tYWluU3RhdGUsIGFjY291bnQ6IEFjY291bnQpIHtcbiAgc2V0QWN0aXZlTmF0aW9uRXZlbnRGcm9tQWN0aW9uKHN0YXRlLCBhY2NvdW50LCBicmliZVBvbGl0aWNpYW5BY3Rpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnRWxlY3Rpb24oc3RhdGU6IFRyYWRpbmdEb21haW5TdGF0ZSwgYWNjb3VudDogQWNjb3VudCkge1xuICBzZXRBY3RpdmVOYXRpb25FdmVudEZyb21BY3Rpb24oc3RhdGUsIGFjY291bnQsIHJpZ0VsZWN0aW9uQWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFjdGl2ZU5hdGlvbkV2ZW50RnJvbUFjdGlvbihzdGF0ZTogVHJhZGluZ0RvbWFpblN0YXRlLCBhY2NvdW50OiBBY2NvdW50LCBhY3Rpb246IEluZmx1ZW5jZUFjdGlvbikge1xuICBpZiAoc3RhdGUucm9vdEFjY291bnQuYmFsYW5jZSA8IGFjdGlvbi5jb3N0KSB7XG4gICAgY29uc29sZS5sb2coYFVuYWJsZSB0byBwZXJmb3JtIGluZmx1ZW5jZSBiZWNhdXNlIGFjY291bnQgYmFsYW5jZSAoJHtmb3JtYXROdW1iZXJGb3JEaXNwbGF5KHN0YXRlLnJvb3RBY2NvdW50LmJhbGFuY2UpfSkgaXMgbGVzcyB0aGFuIHRoZSBhY3Rpb24gY29zdCAoJHtmb3JtYXROdW1iZXJGb3JEaXNwbGF5KGFjdGlvbi5jb3N0KX0pYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbmF0aW9uID0gZ2V0TmF0aW9uRnJvbUFjY291bnQoc3RhdGUsIGFjY291bnQpO1xuICBpZiAoIW5hdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGZpbmQgbmF0aW9uIGZyb20gYWNjb3VudCcpO1xuICB9XG5cbiAgYWRkUmV2ZW51ZVRvUm9vdEFjb3VudChzdGF0ZSwgLWFjdGlvbi5jb3N0KTtcblxuICBjb25zdCBldmVudCA9IGNyZWF0ZU5hdGlvbkV2ZW50RnJvbUluZmx1ZW5jZUFjdGlvbihhY3Rpb24pO1xuXG4gIHNldEFjdGl2ZUV2ZW50T25OYXRpb24oZXZlbnQsIG5hdGlvbiwgc3RhdGUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXRpb25FdmVudEZyb21JbmZsdWVuY2VBY3Rpb24oYWN0aW9uOiBJbmZsdWVuY2VBY3Rpb24pOiBOYXRpb25FdmVudCB7XG4gIGNvbnN0IHN1Y2Nlc3MgPSBNYXRoLnJhbmRvbSgpIDwgYWN0aW9uLmV2ZW50VHlwZS5zdWNjZXNzUmF0ZTtcblxuICBpZiAoc3VjY2Vzcykge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiBhY3Rpb24uZXZlbnRUeXBlLm5hbWUsXG4gICAgICBkdXJhdGlvbjogcmFuZG9tSW50ZWdlckJldHdlZW4oYWN0aW9uLmV2ZW50VHlwZS5kdXJhdGlvbi5taW4sIGFjdGlvbi5ldmVudFR5cGUuZHVyYXRpb24ubWF4KSxcbiAgICAgIHRyaWdnZXJlZFRpbWU6IERhdGUubm93KCksXG4gICAgICBiYXNlTXVsdGlwbGllcjogcmFuZG9tRGVjaW1hbEJldHdlZW4oYWN0aW9uLmV2ZW50VHlwZS5zdWNjZXNzQmFzZU11bHRpcGxpZXIubWluLCBhY3Rpb24uZXZlbnRUeXBlLnN1Y2Nlc3NCYXNlTXVsdGlwbGllci5tYXgpLFxuICAgICAgZmx1eE11bHRpcGxpZXI6IHJhbmRvbURlY2ltYWxCZXR3ZWVuKGFjdGlvbi5ldmVudFR5cGUuc3VjY2Vzc0ZsdXhNdWx0aXBsaWVyLm1pbiwgYWN0aW9uLmV2ZW50VHlwZS5zdWNjZXNzRmx1eE11bHRpcGxpZXIubWF4KSxcbiAgICAgIGV2ZW50U3RhcnRIZWFkbGluZTogcmFuZG9tQXJyYXlFbGVtZW50KGFjdGlvbi5ldmVudFR5cGUuc3VjY2Vzc0hlYWRsaW5lcyksXG4gICAgICBraW5kOiBcInBvc2l0aXZlXCIsXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogYWN0aW9uLmV2ZW50VHlwZS5uYW1lLFxuICAgICAgZHVyYXRpb246IHJhbmRvbUludGVnZXJCZXR3ZWVuKGFjdGlvbi5ldmVudFR5cGUuZHVyYXRpb24ubWluLCBhY3Rpb24uZXZlbnRUeXBlLmR1cmF0aW9uLm1heCksXG4gICAgICB0cmlnZ2VyZWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgYmFzZU11bHRpcGxpZXI6IHJhbmRvbURlY2ltYWxCZXR3ZWVuKGFjdGlvbi5ldmVudFR5cGUuZmFpbHVyZUJhc2VNdWx0aXBsaWVyLm1pbiwgYWN0aW9uLmV2ZW50VHlwZS5mYWlsdXJlQmFzZU11bHRpcGxpZXIubWF4KSxcbiAgICAgIGZsdXhNdWx0aXBsaWVyOiByYW5kb21EZWNpbWFsQmV0d2VlbihhY3Rpb24uZXZlbnRUeXBlLmZhaWx1cmVGbHV4TXVsdGlwbGllci5taW4sIGFjdGlvbi5ldmVudFR5cGUuZmFpbHVyZUZsdXhNdWx0aXBsaWVyLm1heCksXG4gICAgICBldmVudFN0YXJ0SGVhZGxpbmU6IHJhbmRvbUFycmF5RWxlbWVudChhY3Rpb24uZXZlbnRUeXBlLmZhaWx1cmVIZWFkbGluZXMpLFxuICAgICAga2luZDogXCJuZWdhdGl2ZVwiLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IFNjZW5lcyBmcm9tICcuL3NjZW5lcyc7XG5pbXBvcnQgKiBhcyBTdHlsZXMgZnJvbSAnc3JjL3NoYXJlZC9zdHlsZXMnO1xuXG5jb25zdCBnYW1lQ29uZmlnOiBHYW1lQ29uZmlnID0ge1xuICB0aXRsZTogJ0N1cnJlbmN5IFRyYWRlcicsXG5cbiAgdHlwZTogUGhhc2VyLkFVVE8sXG5cbiAgd2lkdGg6IFN0eWxlcy53aWR0aCxcbiAgaGVpZ2h0OiBTdHlsZXMuaGVpZ2h0LFxuXG4gIHNjZW5lOiBTY2VuZXMsXG5cbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAgIGFyY2FkZToge1xuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSxcbiAgfSxcblxuICBwYXJlbnQ6ICdnYW1lJyxcbiAgYmFja2dyb3VuZENvbG9yOiBTdHlsZXMuYmFja2dyb3VuZENvbG9yLFxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGdhbWUucmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufSk7XG4iLCJjb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlNjZW5lcy5TZXR0aW5ncy5Db25maWcgPSB7XG4gIGFjdGl2ZTogZmFsc2UsXG4gIHZpc2libGU6IGZhbHNlLFxuICBrZXk6ICdCb290Jyxcbn07XG5cblxuLyoqXG4gKiBUaGUgaW5pdGlhbCBzY2VuZSB0aGF0IGxvYWRzIGFsbCBuZWNlc3NhcnkgYXNzZXRzIHRvIHRoZSBnYW1lIGFuZCBkaXNwbGF5cyBhIGxvYWRpbmcgYmFyLlxuICovXG5leHBvcnQgY2xhc3MgQm9vdFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRHYW1lV2lkdGggPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZS5zY2FsZS53aWR0aDtcbiAgfTtcblxuICBwcml2YXRlIGdldEdhbWVIZWlnaHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZS5zY2FsZS5oZWlnaHQ7XG4gIH07XG5cbiAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgY29uc3QgaGFsZldpZHRoID0gdGhpcy5nZXRHYW1lV2lkdGgoKSAqIDAuNTtcbiAgICBjb25zdCBoYWxmSGVpZ2h0ID0gdGhpcy5nZXRHYW1lSGVpZ2h0KCkgKiAwLjU7XG5cbiAgICBjb25zdCBwcm9ncmVzc0JhckhlaWdodCA9IDEwMDtcbiAgICBjb25zdCBwcm9ncmVzc0JhcldpZHRoID0gNDAwO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSB0aGlzLmFkZC5yZWN0YW5nbGUoaGFsZldpZHRoLCBoYWxmSGVpZ2h0LCBwcm9ncmVzc0JhcldpZHRoLCBwcm9ncmVzc0JhckhlaWdodCwgMHgwMDAwMDApO1xuICAgIGNvbnN0IHByb2dyZXNzQmFyID0gdGhpcy5hZGQucmVjdGFuZ2xlKGhhbGZXaWR0aCArIDIwIC0gcHJvZ3Jlc3NCYXJDb250YWluZXIud2lkdGggKiAwLjUsIGhhbGZIZWlnaHQsIDEwLCBwcm9ncmVzc0JhckhlaWdodCAtIDIwLCAweDg4ODg4OCk7XG5cbiAgICBjb25zdCBsb2FkaW5nVGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gNzUsIGhhbGZIZWlnaHQgLSAxMDAsICdMb2FkaW5nLi4uJykuc2V0Rm9udFNpemUoMjQpO1xuICAgIGNvbnN0IHBlcmNlbnRUZXh0ID0gdGhpcy5hZGQudGV4dChoYWxmV2lkdGggLSAyNSwgaGFsZkhlaWdodCwgJzAlJykuc2V0Rm9udFNpemUoMjQpO1xuICAgIGNvbnN0IGFzc2V0VGV4dCA9IHRoaXMuYWRkLnRleHQoaGFsZldpZHRoIC0gMjUsIGhhbGZIZWlnaHQgKyAxMDAsICcnKS5zZXRGb250U2l6ZSgyNCk7XG5cbiAgICB0aGlzLmxvYWQub24oJ3Byb2dyZXNzJywgKHZhbHVlKSA9PiB7XG4gICAgICBwcm9ncmVzc0Jhci53aWR0aCA9IChwcm9ncmVzc0JhcldpZHRoIC0gMzApICogdmFsdWU7XG5cbiAgICAgIGNvbnN0IHBlcmNlbnQgPSB2YWx1ZSAqIDEwMDtcbiAgICAgIHBlcmNlbnRUZXh0LnNldFRleHQoYCR7cGVyY2VudH0lYCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWQub24oJ2ZpbGVwcm9ncmVzcycsIChmaWxlKSA9PiB7XG4gICAgICBhc3NldFRleHQuc2V0VGV4dChmaWxlLmtleSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxvYWQub24oJ2NvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgbG9hZGluZ1RleHQuZGVzdHJveSgpO1xuICAgICAgcGVyY2VudFRleHQuZGVzdHJveSgpO1xuICAgICAgYXNzZXRUZXh0LmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyLmRlc3Ryb3koKTtcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmRlc3Ryb3koKTtcblxuICAgICAgdGhpcy5zY2VuZS5zdGFydCgnTWFpbk1lbnUnKTtcbiAgICB9KTtcblxuICAgIHRoaXMubG9hZEFzc2V0cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBhc3NldHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZCBieSB0aGUgZ2FtZSAoc3ByaXRlcywgaW1hZ2VzLCBhbmltYXRpb25zLCB0aWxlcywgbXVzaWMsIGV0YylcbiAgICogc2hvdWxkIGJlIGFkZGVkIHRvIHRoaXMgbWV0aG9kLiBPbmNlIGxvYWRlZCBpbiwgdGhlIGxvYWRlciB3aWxsIGtlZXAgdHJhY2sgb2YgdGhlbSwgaW5kZXBlZGVudCBvZiB3aGljaCBzY2VuZVxuICAgKiBpcyBjdXJyZW50bHkgYWN0aXZlLCBzbyB0aGV5IGNhbiBiZSBhY2Nlc3NlZCBhbnl3aGVyZS5cbiAgICovXG4gIHByaXZhdGUgbG9hZEFzc2V0cygpIHtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RyZW5kLXVwJywgJ2Fzc2V0cy90cmVuZC11cC5zdmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RyZW5kLWRvd24nLCAnYXNzZXRzL3RyZW5kLWRvd24uc3ZnJyk7XG4gICAgdGhpcy5sb2FkLmltYWdlKCdsb2dvLXBuZycsICdhc3NldHMvbG9nby5wbmcnKTtcbiAgICB0aGlzLmxvYWQuaW1hZ2UoJ2xvZ28tc3ZnJywgJ2Fzc2V0cy9sb2dvLnN2ZycpO1xuICAgIHRoaXMubG9hZC5hdWRpbygncm9vdC1tYWtlci1tdXNpYy0xJywgJ2Fzc2V0cy9yb290LW1ha2VyLW11c2ljLTEubXAzJyk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIERvbWFpbiBmcm9tICdzcmMvZG9tYWluJztcbmltcG9ydCAqIGFzIFRyYWRpbmdEb21haW4gZnJvbSAnc3JjL2RvbWFpbi90cmFkaW5nJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIEV4Y2hhbmdlSW50ZXJmYWNlIGZyb20gJy4uL2NvbXBvbmVudHMvZXhjaGFuZ2UtaW50ZXJmYWNlJztcbmltcG9ydCAqIGFzIFN0eWxlcyBmcm9tICdzcmMvc2hhcmVkL3N0eWxlcyc7XG5pbXBvcnQgeyBhZGRIb3Jpem9udGFsU2NyZWVuTGluZSB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2xpbmUnO1xuaW1wb3J0IHsgYWRkUmVjdGFuZ2xlIH0gZnJvbSAnc3JjL2NvbXBvbmVudHMvcmVjdGFuZ2xlJztcbmltcG9ydCAqIGFzIEN1bHRJbnRlcmZhY2UgZnJvbSAnLi4vY29tcG9uZW50cy9jdWx0LWludGVyZmFjZSc7XG5pbXBvcnQgKiBhcyBUaWNrZXIgZnJvbSAnc3JjL2NvbXBvbmVudHMvdGlja2VyJztcbmltcG9ydCB7IEdhbWVFdmVudHMgfSBmcm9tICdzcmMvc2hhcmVkL2V2ZW50cyc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuU2NlbmVzLlNldHRpbmdzLkNvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ0dhbWUnLFxufTtcblxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gIGRvbWFpblN0YXRlOiBEb21haW4uRG9tYWluU3RhdGU7XG4gIHRpY2tlclN0YXRlOiBUaWNrZXIuVGlja2VyU3RhdGU7XG5cbiAgcHVibGljIGJ1eUFtb3VudDogbnVtYmVyID0gMDtcbiAgcHVibGljIHNlbGxBbW91bnQ6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBzZWxlY3RlZEFjY291bnQ6IFRyYWRpbmdEb21haW4uQWNjb3VudDtcblxuICB1c2VybmFtZTogc3RyaW5nO1xuXG4gIGRvbWFpblRpY2tUaW1lID0gMTAwMDsgLy8gbWlsbGlzZWNvbmRzXG4gIHRpbWVTaW5jZUxhc3RUaWNrID0gMDtcbiAgbXVzaWM6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIGluaXQoZGF0YTogeyB1c2VybmFtZTogc3RyaW5nIH0pIHtcbiAgICB0aGlzLnVzZXJuYW1lID0gZGF0YS51c2VybmFtZSB8fCAnJztcblxuICAgIHRoaXMuZXZlbnRzLm9uKEdhbWVFdmVudHMuYnV5QW1vdW50Q2hhbmdlZCwgKGFtb3VudCkgPT4ge1xuICAgICAgdGhpcy5idXlBbW91bnQgPSBhbW91bnQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50cy5vbihHYW1lRXZlbnRzLnNlbGxBbW91bnRDaGFuZ2VkLCAoYW1vdW50KSA9PiB7XG4gICAgICB0aGlzLnNlbGxBbW91bnQgPSBhbW91bnQ7XG4gICAgfSk7XG5cbiAgICB0aGlzLmV2ZW50cy5vbihHYW1lRXZlbnRzLnNlbGVjdGVkQWNjb3VudENoYW5nZWQsICh7IGFjY291bnQgfSkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZEFjY291bnQgPSBhY2NvdW50O1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICB0aGlzLmRvbWFpblN0YXRlID0gRG9tYWluLmluaXREb21haW5TdGF0ZSh7XG4gICAgICByb290Q3VycmVuY3lOYW1lOiAncm9vdCcsXG4gICAgICByb290Q3VycmVuY3lTdGFydGluZ0Ftb3VudDogMTAwLFxuICAgICAgbmF0aW9uczogW1xuICAgICAgICB7IGN1cnJlbmN5OiAnRHVsbGVyJywgbmF0aW9uOiAnQW5kcm9tZWRhJyB9LFxuICAgICAgICB7IGN1cnJlbmN5OiAnV2hlbicsIG5hdGlvbjogJ0NvcmVubmlhJyB9LFxuICAgICAgICB7IGN1cnJlbmN5OiAnUHJhd24nLCBuYXRpb246ICdHcmVhdCBCdXJ0b24nIH0sXG4gICAgICAgIHsgY3VycmVuY3k6ICdQZXN0bycsIG5hdGlvbjogJ01lZGlhbicgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICAvLyB0aGlzLm11c2ljID0gdGhpcy5zb3VuZC5hZGQoJ3Jvb3QtbWFrZXItbXVzaWMtMScsIHsgbG9vcDogdHJ1ZSwgdm9sdW1lOiAxIH0pO1xuICAgIC8vIHRoaXMubXVzaWMucGxheSgpO1xuICAgIC8vIHRoaXMuc291bmQucGF1c2VPbkJsdXIgPSBmYWxzZTtcblxuICAgIGNvbnN0IGV4Y2hhbmdlVGFiID0gdGhpcy5hZGQudGV4dChTdHlsZXMub2Zmc2V0LCBTdHlsZXMudGFiWSwgJ0VYQ0hBTkdFJywgU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgICBleGNoYW5nZVRhYi5zZXRJbnRlcmFjdGl2ZSh7IHVzZUhhbmRDdXJzb3I6IHRydWUgfSk7XG4gICAgZXhjaGFuZ2VUYWIub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcbiAgICAgIGN1bHRUYWIuc2V0U3R5bGUoU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICAgICAgZXhjaGFuZ2VUYWIuc2V0U3R5bGUoU3R5bGVzLnNlbGVjdGVkVGFiKTtcbiAgICAgIGN1bHRDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICBleGNoYW5nZUNvbnRhaW5lci5zZXRWaXNpYmxlKHRydWUpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3VsdFRhYiA9IHRoaXMuYWRkLnRleHQoZXhjaGFuZ2VUYWIueCArIGV4Y2hhbmdlVGFiLndpZHRoICsgU3R5bGVzLm9mZnNldCAqIDIsIFN0eWxlcy50YWJZLCAnQ1VMVCcsIFN0eWxlcy51bnNlbGVjdGVkVGFiKTtcbiAgICBjdWx0VGFiLnNldEludGVyYWN0aXZlKHsgdXNlSGFuZEN1cnNvcjogdHJ1ZSB9KS5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xuICAgICAgZXhjaGFuZ2VUYWIuc2V0U3R5bGUoU3R5bGVzLnVuc2VsZWN0ZWRUYWIpO1xuICAgICAgY3VsdFRhYi5zZXRTdHlsZShTdHlsZXMuc2VsZWN0ZWRUYWIpO1xuICAgICAgZXhjaGFuZ2VDb250YWluZXIuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICBjdWx0Q29udGFpbmVyLnNldFZpc2libGUodHJ1ZSk7XG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgbG9nbyA9IHRoaXMuYWRkLmltYWdlKFN0eWxlcy5vZmZzZXQgKiAyLCBTdHlsZXMub2Zmc2V0LCAnbG9nby1wbmcnKS5zZXRPcmlnaW4oMCwgMCk7XG4gICAgLy8gbG9nby5zZXRTY2FsZSgwLjMsIDAuMyk7IC8vIG5lY2Vzc2FyeSBmb3IgdGhlIHN2ZyBzdHlsZVxuICAgIGFkZEhvcml6b250YWxTY3JlZW5MaW5lKHRoaXMsIDUwKTtcbiAgICBjb25zdCB1c2VybmFtZVRleHQgPSB0aGlzLmFkZC50ZXh0KFN0eWxlcy5vZmZzZXQsIDcwLCAnVVNFUk5BTUUnLCBTdHlsZXMubGlzdEl0ZW1TdHlsZSk7XG4gICAgYWRkUmVjdGFuZ2xlKHRoaXMsIHVzZXJuYW1lVGV4dC54ICsgdXNlcm5hbWVUZXh0LndpZHRoICsgKFN0eWxlcy5vZmZzZXQgKiAyKSwgNjAsIFN0eWxlcy50cmFkZVBhZ2UudXNlcm5hbWVXaWR0aCwgU3R5bGVzLnRyYWRlUGFnZS51c2VybmFtZUhlaWdodCwgU3R5bGVzLmZvcmVncm91bmRDb2xvckhleCk7XG4gICAgdGhpcy5hZGQudGV4dCh1c2VybmFtZVRleHQueCArIHVzZXJuYW1lVGV4dC53aWR0aCArIChTdHlsZXMub2Zmc2V0ICogMyksIDYwICsgU3R5bGVzLm9mZnNldCAvIDIsIHRoaXMudXNlcm5hbWUsIHsgY29sb3I6IFN0eWxlcy50ZXh0Q29sb3IgfSk7XG5cbiAgICBhZGRIb3Jpem9udGFsU2NyZWVuTGluZSh0aGlzLCAxMDApO1xuICAgIGFkZEhvcml6b250YWxTY3JlZW5MaW5lKHRoaXMsIDcwMCk7XG5cbiAgICBjb25zdCBleGNoYW5nZUNvbnRhaW5lciA9IEV4Y2hhbmdlSW50ZXJmYWNlLmNyZWF0ZUV4Y2hhbmdlSW50ZXJmYWNlKHRoaXMsIHRoaXMuZG9tYWluU3RhdGUpO1xuICAgIGNvbnN0IGN1bHRDb250YWluZXIgPSBDdWx0SW50ZXJmYWNlLmNyZWF0ZUN1bHRJbnRlcmZhY2UodGhpcywgdGhpcy5kb21haW5TdGF0ZSkuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICB0aGlzLnRpY2tlclN0YXRlID0gVGlja2VyLmNyZWF0ZU5ld3NUaWNrZXIodGhpcywgdGhpcy5kb21haW5TdGF0ZSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gICAgdGhpcy50aW1lU2luY2VMYXN0VGljayArPSBkZWx0YTtcblxuICAgIGlmICh0aGlzLnRpbWVTaW5jZUxhc3RUaWNrID49IHRoaXMuZG9tYWluVGlja1RpbWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd0aWNrIScpO1xuICAgICAgdGhpcy50aW1lU2luY2VMYXN0VGljayA9IDA7XG5cbiAgICAgIERvbWFpbi5oYW5kbGVUaWNrKHRoaXMuZG9tYWluU3RhdGUpO1xuICAgIH1cblxuICAgIFRpY2tlci51cGRhdGVTdG9yaWVzKHRoaXMsIHRoaXMudGlja2VyU3RhdGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNYWluTWVudVNjZW5lIH0gZnJvbSAnLi9tYWluLW1lbnUtc2NlbmUnO1xuaW1wb3J0IHsgQm9vdFNjZW5lIH0gZnJvbSAnLi9ib290LXNjZW5lJztcbmltcG9ydCB7IEdhbWVTY2VuZSB9IGZyb20gJy4vZ2FtZS1zY2VuZSc7XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgQm9vdFNjZW5lLFxuICBNYWluTWVudVNjZW5lLFxuICBHYW1lU2NlbmUsXG5dO1xuIiwiaW1wb3J0ICogYXMgU3R5bGVzIGZyb20gJ3NyYy9zaGFyZWQvc3R5bGVzJztcbmltcG9ydCAqIGFzIFNoYXJlZCBmcm9tICdzcmMvc2hhcmVkJztcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2J1dHRvbic7XG5pbXBvcnQgeyBjcmVhdGVJbnB1dEJveCB9IGZyb20gJ3NyYy9jb21wb25lbnRzL2lucHV0LWJveCc7XG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuU2NlbmVzLlNldHRpbmdzLkNvbmZpZyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgdmlzaWJsZTogZmFsc2UsXG4gIGtleTogJ01haW5NZW51Jyxcbn07XG5cbmV4cG9ydCBjbGFzcyBNYWluTWVudVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgcHJpdmF0ZSB1c2VybmFtZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICB9XG5cbiAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICBjb25zdCBsb2dvWCA9IDMwMDtcbiAgICBjb25zdCB1c2VybmFtZVRleHRYID0gMzc1O1xuICAgIGNvbnN0IHVzZXJuYW1lRmllbGRYID0gNDc1O1xuICAgIGNvbnN0IGxvZ2luQnV0dG9uV2lkdGggPSAxMDA7XG4gICAgY29uc3QgbG9naW5YID0gKFN0eWxlcy53aWR0aCAvIDIpIC0gbG9naW5CdXR0b25XaWR0aCAvIDI7XG4gICAgY29uc3QgbG9naW5ZID0gNTAwO1xuXG4gICAgY29uc3QgbG9nb1kgPSAyMDA7XG4gICAgY29uc3QgdXNlcm5hbWVZID0gNDAwO1xuXG4gICAgdGhpcy5hZGQuaW1hZ2UobG9nb1gsIGxvZ29ZLCAnbG9nby1zdmcnKS5zZXRPcmlnaW4oMCwgMCk7XG5cbiAgICB0aGlzLmFkZC50ZXh0KHVzZXJuYW1lVGV4dFgsIHVzZXJuYW1lWSArIDUsICdVU0VSTkFNRTonKTtcbiAgICBjcmVhdGVJbnB1dEJveCh0aGlzLCB1c2VybmFtZUZpZWxkWCwgdXNlcm5hbWVZLCAodGV4dDogc3RyaW5nKSA9PiB0aGlzLnVzZXJuYW1lID0gdGV4dCwgMTIpO1xuXG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ0dhbWUnLCB7IHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lIH0pO1xuICAgIH07XG4gICAgY3JlYXRlQnV0dG9uKHRoaXMsIGxvZ2luWCwgbG9naW5ZLCAnTE9HSU4nLCBvbkNsaWNrLCBsb2dpbkJ1dHRvbldpZHRoKVxuICB9XG59XG4iLCJcbmV4cG9ydCBlbnVtIEdhbWVFdmVudHMge1xuICBzZWxlY3RlZEFjY291bnRDaGFuZ2VkID0gXCJnYW1lLnNlbGVjdGVkQWNjb3VudENoYW5nZWRcIixcbiAgYnV5QW1vdW50Q2hhbmdlZCA9IFwiZ2FtZS5idXlBbW91bnRDaGFuZ2VkXCIsXG4gIHNlbGxBbW91bnRDaGFuZ2VkID0gXCJnYW1lLnNlbGxBbW91bnRDaGFuZ2VkXCIsXG59XG4iLCJleHBvcnQgY29uc3QgZ2V0R2FtZVdpZHRoID0gKHNjZW5lOiBQaGFzZXIuU2NlbmUpID0+IHtcbiAgcmV0dXJuIHNjZW5lLmdhbWUuc2NhbGUud2lkdGg7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0R2FtZUhlaWdodCA9IChzY2VuZTogUGhhc2VyLlNjZW5lKSA9PiB7XG4gIHJldHVybiBzY2VuZS5nYW1lLnNjYWxlLmhlaWdodDtcbn07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXROdW1iZXJGb3JEaXNwbGF5ID0gKG46IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoYCR7bn1gKTtcbiAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJywgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyfSkuc3Vic3RyaW5nKDEpO1xufTtcblxuLy8gZXhwb3J0IGNvbnN0IGZvcm1hdE51bWJlckZvckRpc3BsYXkgPSAobjogbnVtYmVyIHwgc3RyaW5nKSA9PiB7XG4vLyAgIHJldHVybiBwYXJzZUZsb2F0KGAke259YCkudG9GaXhlZCgyKTtcbi8vIH07XG4iLCJleHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG9yID0gJyNBMjk3NzEnO1xuZXhwb3J0IGNvbnN0IGZvcmVncm91bmRDb2xvciA9ICcjMkIyNjFDJztcbmV4cG9ydCBjb25zdCB0ZXh0Q29sb3IgPSAnI0NEQ0JDMic7XG5leHBvcnQgY29uc3QgZGV0YWlsRGFya0NvbG9yID0gJyM4MTdDNkEnO1xuZXhwb3J0IGNvbnN0IGRldGFpbExpZ2h0Q29sb3IgPSAnI0YyRTlDQyc7XG5leHBvcnQgY29uc3QgYnV0dG9uVGV4dENvbG9yID0gJyM0RTQ2MjYnO1xuXG5leHBvcnQgY29uc3QgYmFja2dyb3VuZENvbG9ySGV4ID0gMHhBMjk3NzE7XG5leHBvcnQgY29uc3QgZm9yZWdyb3VuZENvbG9ySGV4ID0gMHgyQjI2MUM7XG5leHBvcnQgY29uc3QgdGV4dENvbG9ySGV4ID0gMHhDRENCQzI7XG5leHBvcnQgY29uc3QgZGV0YWlsRGFya0NvbG9ySGV4ID0gMHg4MTdDNkE7XG5leHBvcnQgY29uc3QgZGV0YWlsTGlnaHRDb2xvckhleCA9IDB4RjJFOUNDO1xuZXhwb3J0IGNvbnN0IGJ1dHRvblRleHRDb2xvckhleCA9IDB4NEU0NjI2O1xuXG5leHBvcnQgY29uc3QgbGlzdEl0ZW1TdHlsZSA9IHsgZm9udFNpemU6ICcxNHB4JywgY29sb3I6IHRleHRDb2xvciB9O1xuZXhwb3J0IGNvbnN0IHRyYWRlQW1vdW50VGV4dCA9IHsgZm9udFNpemU6ICcxMnB4JywgY29sb3I6IHRleHRDb2xvciB9O1xuZXhwb3J0IGNvbnN0IGF2YWlsYWJsZVJvb3QgPSB7IGZvbnRTaXplOiAnMTZweCcsIGNvbG9yOiAnIzg5RjY2MycgfTtcbmV4cG9ydCBjb25zdCBidXR0b25MYWJlbFN0eWxlID0geyBmb250U2l6ZTogJzE0cHgnLCBjb2xvcjogZm9yZWdyb3VuZENvbG9yIH07XG5cbmV4cG9ydCBjb25zdCBmb3JlZ3JvdW5kU3R5bGUgPSB7IGNvbG9yOiBmb3JlZ3JvdW5kQ29sb3IgfTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdGVkVGFiID0geyBmb250U2l6ZTogJzE2cHgnLCBjb2xvcjogYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvblRleHRDb2xvciB9O1xuZXhwb3J0IGNvbnN0IHVuc2VsZWN0ZWRUYWIgPSB7IGZvbnRTaXplOiAnMTZweCcsIGNvbG9yOiBidXR0b25UZXh0Q29sb3IsIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yIH07XG5cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAxMDtcblxuZXhwb3J0IGNvbnN0IHdpZHRoID0gMTAyNDtcbmV4cG9ydCBjb25zdCBoZWlnaHQgPSA3Njg7XG5leHBvcnQgY29uc3QgaW5wdXRCb3hXaWR0aCA9IDE1MDtcblxuZXhwb3J0IGNvbnN0IHRyYWRlUGFnZSA9IHtcbiAgY3VycmVuY3lMaXN0OiB7XG4gICAgd2lkdGg6IDcwNyxcbiAgICBoZWlnaHQ6IDUzNCxcbiAgICB4OiBvZmZzZXQsXG4gICAgeTogMTUwLFxuICAgIGl0ZW1Db2xvcjogdGV4dENvbG9yLFxuICAgIGhlYWRlckNvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgaGVhZGVySGVpZ2h0OiA0NSxcbiAgICBsaXN0SXRlbVg6IG9mZnNldCAqIDIsXG4gICAgbGlzdEl0ZW1ZOiAxOTUsXG4gIH0sXG4gIHRyYWRlSW50ZXJmYWNlOiB7XG4gICAgeDogNzA3ICsgMiAqIG9mZnNldCxcbiAgICBleGNoYW5nZVRhYlk6IDE1MCxcbiAgICBpbnB1dEJveFg6IHdpZHRoIC0gb2Zmc2V0IC0gaW5wdXRCb3hXaWR0aCxcbiAgfSxcbiAgdHJhbnNhY3Rpb25XaWR0aDogMjg3LFxuICB1c2VybmFtZVdpZHRoOiAyNTQsXG4gIHVzZXJuYW1lSGVpZ2h0OiAzMCxcbiAgaW5wdXRXaWR0aDogMTQzLFxuICBpbnB1dEhlaWdodDogMzksXG4gIHNlbGVjdGVkTGluZUl0ZW1IZXg6IDB4M0UzRTNELFxufVxuXG5leHBvcnQgY29uc3QgY3VsdFBhZ2UgPSB7XG4gIGZvbGxvd2VyTGlzdDoge1xuICAgIHdpZHRoOiA1ODAsXG4gICAgaGVpZ2h0OiA1MzQsXG4gICAgeDogb2Zmc2V0LFxuICAgIHk6IDE1MCxcbiAgICBpdGVtQ29sb3I6IHRleHRDb2xvcixcbiAgICBoZWFkZXJDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgIGhlYWRlckhlaWdodDogNDUsXG4gICAgbGlzdEl0ZW1YOiBvZmZzZXQgKiAyLFxuICAgIGxpc3RJdGVtWTogMTk1LFxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgbGFiZWxTdHlsZTogYnV0dG9uTGFiZWxTdHlsZSxcbiAgICBidXR0b25PZmZzZXRIZWlnaHQ6IDc1LFxuICAgIGJ1dHRvblg6IDg1MCxcbiAgICBsYWJlbFg6IDYwMCwgLy8gU3R5bGVzLmN1bHRQYWdlLmZvbGxvd2VyTGlzdC53aWR0aCArIFN0eWxlcy5vZmZzZXQgKiAyXG4gIH0sXG4gIGhhcHBpbmVzczoge1xuICAgIHg6IDYwMCxcbiAgICBsYWJlbFk6IDUyNSxcbiAgICBtZXRlclk6IDU1MCxcbiAgICBtZXRlcldpZHRoOiA0MTUsXG4gICAgbWV0ZXJIZWlnaHQ6IDUwLFxuICB9LFxuICBkb25hdGlvbjoge1xuICAgIGxhYmVsWDogNjAwLFxuICAgIGlucHV0WDogODUwLFxuICAgIHk6IDY1MCxcbiAgfVxufVxuZXhwb3J0IGNvbnN0IHRhYlkgPSAxMTc7XG5leHBvcnQgY29uc3QgbGluZUl0ZW1IZWlnaHQgPSAzMDtcblxuZXhwb3J0IGNvbnN0IHRpY2tlcldpZHRoID0gMTAwNDtcbmV4cG9ydCBjb25zdCB0aWNrZXJIZWlnaHQgPSA1MDtcbiJdLCJzb3VyY2VSb290IjoiIn0=