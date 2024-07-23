const fs = require("fs");

fs.writeFile("textfile.txt","i am rhhewritten from node code", (successfully) => {
    if(successfully) {
        console.log("error while writing the file");
        throw successfully;
    }
    else{
    console.log("File was created/updated successfully")    }

});

fs.readFile("textfile.txt", (err, data) =>)