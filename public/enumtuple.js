"use strict";
// ENUMS allow us to define constants those are associated with numeric values or can be string.
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["FILM"] = 0] = "FILM";
    ResourceType[ResourceType["PERSON"] = 1] = "PERSON";
    ResourceType[ResourceType["BOOK"] = 2] = "BOOK";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PRODUCER"] = 4] = "PRODUCER";
})(ResourceType || (ResourceType = {}));
let docOne = {
    id: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "Psychology of money" },
};
console.log(ResourceType.BOOK); //2
let docTwo = {
    id: 1,
    resourceType: ResourceType.PERSON,
    data: { name: "Dylan Minette" },
};
// TUPLES
// A tuple is a typed array with a pre-defined length and types for each index.
let tuple = [45, true, "Hello"];
tuple[0] = 30; // you can update each index only with defined type
// tuple[1] = "Error Occured";  error
tuple.push(false); // tuple has no type safety after the defined type index exceeds
console.log(tuple);
// readonly
// you cannot update this tuple now
let tuple2 = [56, false];
