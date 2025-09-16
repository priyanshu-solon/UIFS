var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["A"] = 10] = "A";
    StatusCodes[StatusCodes["B"] = 20] = "B";
    StatusCodes[StatusCodes["C"] = 30] = "C";
})(StatusCodes || (StatusCodes = {}));
console.log("Addition=".concat(StatusCodes.C));
