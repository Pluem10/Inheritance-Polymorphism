"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fish = void 0;
class Fish {
    constructor(species) {
        this.species = species;
    }
    swim() { }
    getSpecies() {
        console.log(`${this.species} สายพันธ์`);
    }
}
exports.Fish = Fish;
