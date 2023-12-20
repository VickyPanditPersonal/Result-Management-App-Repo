const fs = require("fs");
var blacklistedWords = new Array;

const validateName = (req, res) => {
    return res.json(req.body.text + " found as blacklisted?: " + isAnyMatchFound(req.body.text));
};

function isAnyMatchFound(str) {
    console.log("str is: " + str);
    console.log("blacklistedWords length is: " + blacklistedWords.length);

    const filePath = "./blacklist.txt";
    if(blacklistedWords.length > 0) {
        console.log("blacklist is not null " + blacklistedWords.length);
        console.log("if block present? "+ blacklistedWords.includes(str));
        return blacklistedWords.includes(str);
    }
    else {
        try{
            blacklistedWords = fs.readFileSync(filePath, "utf-8").toString().split("\n");
            console.log(blacklistedWords);
            // fs.closeSync(fs.openSync(filePath, ""));
            // console.log("file closed");
            console.log("else block present? "+ blacklistedWords.includes(str));
            return blacklistedWords.includes(str);
        }
        catch(error) {
            console.error("Log error", error.message);
        }
    }
}

module.exports = { validateName };