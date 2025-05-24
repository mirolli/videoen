import axios from 'axios';

export default async function handler(req, res) {
  try {
    // 从 GitHub 拉取 m3u 文件内容
    const response = await axios.get('https://raw.githubusercontent.com/BuddyChewChew/app-m3u-generator/refs/heads/main/playlists/tubi_all.m3u');
    
    // 设置响应头，返回 m3u 文件
    res.setHeader('Content-Type', 'application/x-mpegURL');
    res.status(200).send(response.data);
  } catch (error) {
    // 错误处理
    res.status(500).send('Failed to fetch the m3u file.');
  }
}
