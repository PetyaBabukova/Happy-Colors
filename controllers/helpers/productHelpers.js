exports.validateProduct = async function (req, res, next) {
    let isValid = true;
    let incommingData = req.body

    if (incommingData.name.trim().length < 2) {
        isValid = false;
    } 
   

    if (isValid) {
        next();
    }
}




//example:
//named export:
// exports.validateProduct = function(req, res, next) {
//     let isValid = true;

//     if(req.body.name.trim().length<2){
//         isValid = false;
//     } else if (!req.body.mainImageUrl) {
//         isValid = false;
//     }
     

//     if (isValid) {
//         next();
//     }
// }

