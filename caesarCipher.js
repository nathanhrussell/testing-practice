function caesarCipher(str, shift) {
    if (typeof str !== "string" || typeof shift !== "number") return "";

    return str.split("").map(char => {
        const isUpper = char >= "A" && char <= "Z";
        const isLower = char >= "a" && char <= "z";

        if (isUpper || isLower) {
            const base = isUpper ? "A".charCodeAt(0) : "a".charCodeAt(0);
            const charCode = char.charCodeAt(0);
            const shifted = 
            ((charCode - base + shift) % 26 + 26) % 26 + base;
            return String.fromCharCode(shifted);
        }

        return char;
    }).join("");
    }

module.exports = caesarCipher;