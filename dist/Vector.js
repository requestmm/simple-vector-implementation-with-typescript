"use strict";
/**
 * Vector.ts
 * Exports a class representing basic implementation of the Vector for Classical Mechanics applications.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    constructor(components) {
        this.components = components;
    }
    calcModule() {
        const squared_components = this.components.map((component) => {
            return component ** 2;
        });
        const squared_components_sum = squared_components.reduce((a, b) => {
            return a + b;
        });
        return Math.sqrt(squared_components_sum);
    }
}
exports.default = Vector;
