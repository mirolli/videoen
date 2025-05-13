import axios from 'axios';

export default async function handler(req, res) {
  try {
    // 从 GitHub 拉取 XML 文件内容
    const response = await axios.get('https://raw.githubusercontent.com/mil0li/whataghost/refs/heads/main/en/videoall.xml');
    
    // 设置响应头，返回 XML 文件
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(response.data);
  } catch (error) {
    // 错误处理
    res.status(500).send('Failed to fetch the XML file.');
  }
}
