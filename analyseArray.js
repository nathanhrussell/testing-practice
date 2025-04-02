function analyseArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    const sum = arr.reduce((acc, num) => acc + num, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;

    return { average, min, max, length };
}

module.exports = analyseArray;