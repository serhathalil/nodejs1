const piSayisi=parseFloat(3.14);
 
let alan;
const arguments=process.argv.slice(2);
console.log(arguments)
 
function daireAlanBul(yariCap) {
   alan= piSayisi * (yariCap*yariCap);
   console.log(alan);
}

daireAlanBul(arguments[0]*1);
  
 