'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const RMS_PHOTOS = [
    "https://stallman.org/photos/rms-working/mid/mid_p1000844.jpg",
    "https://stallman.org/photos/rms-working/mid/mid_img_0554.jpg",
    "https://stallman.org/photos/rms-working/mid/mid_img_1755.jpg",
    "https://stallman.org/photos/rms-working/mid/mid_img_3235.jpg",
    "https://stallman.org/photos/rms-working/mid/mid_img_3658.jpg",
    "https://stallman.org/photos/rms-working/mid/mid_img_4188.jpg",
    "https://stallman.org/photos/rms-working/mid/mid_working-with-the-devil.jpg",
    "https://stallman.org/photos/rms-working/mid/mid_p1000541.jpg",
];

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// App
const app = express();
app.get('/', (req, res) => {
    var moe_src = choose(RMS_PHOTOS);
    var html = `
	<html>
	<body>
	<img id="moe_img" src="${moe_src}" width="600px;" />
	<script>
        (function() {
            document.getElementById("moe_img").setAttribute("onClick", "window.location.reload()");
        })();
        </script>
	</body>
	</html>`;
    res.send(html);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
