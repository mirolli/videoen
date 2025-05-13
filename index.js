const express = require('express');
const axios = require('axios');

const app = express();

// 路由设置，所有请求 /m3u 都会返回 GitHub 上的 m3u 文件内容
app.get('/m3u', async (req, res) => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/mil0li/whataghost/refs/heads/main/en/videoall.m3u');
        res.header('Content-Type', 'application/x-mpegURL');
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Failed to fetch the m3u file.');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
