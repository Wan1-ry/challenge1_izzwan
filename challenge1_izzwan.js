const fs = require('fs');

function challenge1_izzwan() {
    const result = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIG BANG");
        } else if (i % 3 === 0) {
            result.push("BIG");
        } else if (i % 5 === 0) {
            result.push("BANG");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

const ArrayChallengeBigBang = challenge1_izzwan();
fs.writeFileSync('output.json', JSON.stringify(ArrayChallengeBigBang, null, 2), 'utf-8');
console.log("output.json file has been generated with the result.");

