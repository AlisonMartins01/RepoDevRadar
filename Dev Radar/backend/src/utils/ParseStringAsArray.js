module.exports = function parseStringAsArray(arrayAsTRING){
    return arrayAsTRING.split(',').map(tech => tech.trim());
}