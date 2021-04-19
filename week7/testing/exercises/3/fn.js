module.exports = function fn(arg) {
    if (typeof arg === "string") {
        return arg === "" ? "" : fn(arg.substr(1)) + arg.charAt(0);
    } else if (typeof arg !== "string" && !Array.isArray(arg)) {
        return null;
    } else if (Array.isArray(arg)) {
        let array = [];
        for (let i = 0; i < arg.length; i++) {
            array.push(fn(arg[i]));
        }
        return array;
    }
};
