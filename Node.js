const requestListener = function (req, res) {
    fs.readFile(__dirname + "/Page1.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200); //200 is OK
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500); // 500 is err
            res.end(err);
            return;
        });
};