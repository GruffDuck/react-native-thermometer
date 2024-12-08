"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_svg_1 = __importStar(require("react-native-svg"));
var utils_1 = require("./utils");
var AnimatedRect = react_native_1.Animated.createAnimatedComponent(react_native_svg_1.Rect);
var Thermometer = function (_a) {
    var temperature = _a.temperature, _b = _a.maxTemperature, maxTemperature = _b === void 0 ? 50 : _b, _c = _a.width, width = _c === void 0 ? 150 : _c, _d = _a.height, height = _d === void 0 ? 300 : _d, style = _a.style, _e = _a.fillColor, fillColor = _e === void 0 ? "#EF3024" : _e, _f = _a.backgroundColor, backgroundColor = _f === void 0 ? "#fff" : _f, _g = _a.tickColor, tickColor = _g === void 0 ? "#A9A9A9" : _g, _h = _a.highlightedTickColor, highlightedTickColor = _h === void 0 ? "#FFFFFF" : _h, _j = _a.borderColor, borderColor = _j === void 0 ? "#E6EAF4" : _j;
    var BAR_HEIGHT = 180;
    var BASE_Y = 220;
    var animatedHeight = (0, react_1.useRef)(new react_native_1.Animated.Value((temperature / maxTemperature) * BAR_HEIGHT)).current;
    (0, react_1.useEffect)(function () {
        var clampedTemperature = (0, utils_1.clamp)(temperature, 0, maxTemperature);
        var targetHeight = (clampedTemperature / maxTemperature) * BAR_HEIGHT;
        react_native_1.Animated.timing(animatedHeight, {
            toValue: targetHeight,
            duration: 400,
            easing: react_native_1.Easing.ease,
            useNativeDriver: false,
        }).start();
    }, [animatedHeight, temperature, maxTemperature]);
    var animatedY = animatedHeight.interpolate({
        inputRange: [0, BAR_HEIGHT],
        outputRange: [BASE_Y, BASE_Y - BAR_HEIGHT],
    });
    return (react_1.default.createElement(react_native_1.View, { style: [styles.container, style] },
        react_1.default.createElement(react_native_svg_1.default, { width: width, height: height, viewBox: "0 0 150 300" },
            react_1.default.createElement(react_native_svg_1.Rect, { x: "28", y: "35", width: "45", height: "190", fill: "none", stroke: borderColor, strokeWidth: "8", rx: "12" }),
            react_1.default.createElement(react_native_svg_1.Circle, { cx: "50", cy: "250", r: "50", fill: borderColor }),
            react_1.default.createElement(react_native_svg_1.Rect, { x: "33", y: "40", width: "35", height: "180", fill: backgroundColor, rx: "10" }),
            react_1.default.createElement(AnimatedRect, { x: "37", y: animatedY, width: "26", height: animatedHeight, fill: fillColor, rx: "2" }),
            (0, utils_1.renderTicks)(10, BASE_Y, BAR_HEIGHT, maxTemperature, temperature, tickColor, highlightedTickColor),
            react_1.default.createElement(react_native_svg_1.Rect, { x: "37", y: "210", width: "26", height: "30", fill: fillColor }),
            react_1.default.createElement(react_native_svg_1.Circle, { cx: "50", cy: "250", r: "40", fill: fillColor }))));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
});
exports.default = Thermometer;
