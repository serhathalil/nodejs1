
const piSayisi=parseFloat(3.14);
let alan,cevre;
const arguments=process.argv.slice(2);
console.log(arguments)
 
function circleArea(yariCap) {
   alan= piSayisi * (yariCap*yariCap);
   console.log(`Yarıçapı ${arguments[0]*1} olan dairenin alanı: ${alan}`);
}

 
function circleCircumference(yariCap) {
    cevre=2*piSayisi*(yariCap*yariCap);
    console.log(`Yarıçapı ${arguments[0]*1} olan dairenin çevresi: ${cevre}`);
}

 
module.exports = {
    circleArea,
    circleCircumference
}