function HexToDecimal(content) {
    const regex = /0x[\da-f]+/gi;
    const replacedContent = content.replace(regex, (match) => {
        const decimalValue = parseInt(match, 16);
        return decimalValue.toString();
    });
    return replacedContent;
};

module.exports = {
    HexToDecimal
}