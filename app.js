'use strict';

const express = require('express');

const PORT = 8000;
const HOST = '0.0.0.0';

const facebookProfileLink = 'https://www.facebook.com/bryant.lie.73'; // Link ke profil Facebook

const app = express();
app.get('/', (req, res) => {
    res.send(`Nama: Bryant Lie\nNIM: 52021002\nJurusan: Teknik Informatika\nProfil Facebook: <a href="${facebookProfileLink}">${facebookProfileLink}</a>`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
