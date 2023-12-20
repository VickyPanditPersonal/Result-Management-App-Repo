const fs = require("fs");
const List = require("collections/list");
var blacklistedWords = null;

const validateName = (req, res) => {

    return res.json("Validating " + isAnyMatchFound(req.body.text));
};

function isAnyMatchFound(str) {
    console.log("str is: " + str);
    const content = getContent();
    return "Validating";
    // content.includes(str);
}

function getContent() {
    const filePath = "./blacklist.txt";
    console.log("entered getContent");
    if(blacklistedWords != null) {
        console.log("blacklist is not null " + blacklistedWords.length);
        return blacklistedWords;
    }
    else {
        console.log("else block");
        try{
            const content = fs.readFileSync(filePath, "utf-8");
            console.log("read file");
            blacklistedWords = new List(content.split("\n"));
            console.log("splitted content " + blacklistedWords.length);
            // fs.closeSync(fs.openSync(filePath, ""));
            // console.log("file closed");
            // blacklistedWords.
            return blacklistedWords;
        }
        catch(error) {
            console.error("Log error", error.message);
        }
    }
}

module.exports = { validateName };