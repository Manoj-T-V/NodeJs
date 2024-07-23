const fs = require("fs");

fs.writeFile("textfile.txt","i am rewritten from node code", (successfully) => {
    if(successfully) {
        console.log("error while writing the file");
        throw s;
    }
    else{
    console.log("File was created/updated successfully")    }

});