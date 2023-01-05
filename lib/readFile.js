const fs = require("fs");

// use to read file from input text and convert it to an array of object
async function read(filename) {
  fs.readFile(filename, "utf8", function (err, data) {
    const line = data.split(/\n/);

    const testcases = [];
    for (const l of line) {
      if (l.trim() === "") break;

      const x = l.split(/(\s+)/).filter((e) => e.trim().length > 0);
      const gpa = parseFloat(x[0]);
      const credit = parseInt(x[1]);
      const expected = x[2];

      testcases.push({
        gpa,
        credit,
        expected,
      });
    }
    console.log(testcases);
  });
}

module.exports = { read };
