"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTicks = exports.clamp = void 0;
var react_native_svg_1 = require("react-native-svg");
var react_1 = __importDefault(require("react"));
var clamp = function (value, min, max) {
    return Math.min(Math.max(value, min), max);
};
exports.clamp = clamp;
var renderTicks = function (tickCount, baseY, barHeight, maxTemperature, temperature, tickColor, highlightedTickColor) {
    return Array.from({ length: tickCount - 1 }, function (_, index) {
        var y = baseY - (index * barHeight) / (tickCount - 1);
        var isMajorTick = index % 2 === 0;
        var isHighlighted = temperature >= (index * maxTemperature) / (tickCount - 1);
        return (react_1.default.createElement(react_native_svg_1.Line, { key: index, x1: isMajorTick ? "53" : "57", y1: y, x2: "65", y2: y, stroke: isHighlighted ? highlightedTickColor : tickColor, strokeWidth: "3" }));
    });
};
exports.renderTicks = renderTicks;
