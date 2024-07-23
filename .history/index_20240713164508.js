const fs = require("fs");

fs.writeFile("textfile.txt","i am rewritten from node code", (err) => {
    if(err) {
        console.log("error while writing the file");
        throw err;
    }
    else{
    console.log("File was created/updated successfully")    }

});