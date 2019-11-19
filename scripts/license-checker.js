const fs = require("fs");
const json = JSON.parse(fs.readFileSync(process.argv[2], "utf-8"));
const permittedList = [
    "MIT",
    "ISC",
    "Apache-2.0",
    "Apache License, Version 2.0",
    "BSD-2-Clause",
    "BSD-3-Clause",
    "BSD",
    "MPL-2.0",
    "Public Domain",
    "zlib"
];

const checkerMap = [
    {key: "buffer-compare", value: "MIT"},
    {key: "create-react-context", value: "MIT"},
    {key: "fwd-stream", value: "MIT"},
    {key: "indexof", value: "MIT"},
    {key: "is", value: "MIT"},
    {key: "level-blobs", value: "MIT"},
    {key: "level-filesystem", value: "MIT"},
    {key: "level-hooks", value: "Freeライセンス"},
    {key: "optimist", value: "Free under the MIT"},
    {key: "options", value: "MIT"},
    {key: "react-native-chart-kit", value: "MIT"},
    {key: "react-native-easy-grid", value: "Apache License v2"},
    {key: "react-native-level-fs", value: "MIT"},
    {key: "react-tween-state", value: "BSD License 3"},
    {key: "semver", value: "ISC"},
    {key: "tween-functions", value: "BSD License 3"},
    {key: "unorm", value: "MIT or GPL?"},
    {key: "big-integer", value: "Public domain"},
    {key: "stream-buffers", value: "Public Domain"},
    {key: "ibet", value: "消す"},
    {key: "atob", value: "MIT"},
    {key: "rc", value: "MIT"},
    {key: "react-native-camera", value: "MIT"},
    {key: "sha.js", value: "MIT"},
    {key: "sjcl", value: "BSD-2-Clause"},
    {key: "spdx-exceptions", value: "CC-BY-3.0"},
    {key: "spdx-license-ids", value: "CC0-1.0"},
    {key: "type-fest", value: "MIT"},
    {key: "uuid", value: "MIT"},
    {key: "xmldom", value: "MIT"},
    {key: "coinstring", value: "不要"},
    {key: "bs58", value: "MIT"},
    {key: "scrypt", value: "zlib"}
];

let licenseCheck = true;
for (const jsonElement in json) {
    let license = json[jsonElement].licenses;
    if (!permittedList.includes(license)) {
        if (!checkerMap.find((l) => jsonElement.startsWith(l.key))) {
            console.log(jsonElement, ":", json[jsonElement].licenses);
            licenseCheck = false;
        }
    }
}

if (licenseCheck) {
    process.exitCode = 0;
    console.log("License check result -> OK");
} else {
    process.exitCode = 1;
    console.log("License check result -> NG");
}



