import fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';

// 设置代理地址
const proxy = 'http://user:password@43.132.183.118:8888';
const agent = new HttpsProxyAgent(proxy);

// 设置请求选项
const options = {
  agent,
  timeout: 5000, // 5秒超时
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Authorization': 'Basic ' + Buffer.from('user:password').toString('base64')
  }
};

// 测试代理连接
console.log('正在测试代理连接...');
fetch('http://httpbin.org/ip', options)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log('代理连接测试成功！');
    console.log('状态码:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('当前IP地址:', data.origin);
    
    // 测试 HTTPS 请求
    console.log('\n正在测试 HTTPS 请求...');
    return fetch('https://httpbin.org/get', options);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTPS请求失败! 状态码: ${response.status}`);
    }
    console.log('HTTPS请求成功！');
    console.log('状态码:', response.status);
    return response.json();
  })
  .then(data => {
    console.log('请求详情:', JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error('请求错误:', error.message);
    if (error.code) {
      console.error('错误代码:', error.code);
    }
    if (error.errno) {
      console.error('系统错误:', error.errno);
    }
    if (error.type) {
      console.error('错误类型:', error.type);
    }
    // 检查是否是代理连接问题
    if (error.code === 'ECONNREFUSED' || error.code === 'ECONNRESET') {
      console.error('代理服务器连接失败，请检查代理服务器是否正常运行');
    }
    if (error.code === 'ETIMEDOUT') {
      console.error('连接超时，请检查网络状况或增加超时时间');
    }
  });

// 使用代理进行 fetch 请求
console.log('开始发送请求...');
fetch('https://www.youtube.com', options)
  .then(response => {
    console.log('状态码:', response.status);
    console.log('响应头:', JSON.stringify(response.headers.raw(), null, 2));
    return response.text();
  })
  .then(html => {
    console.log('响应内容长度:', html.length);
    console.log('响应内容预览:', html.substring(0, 200));
  })
  .catch(error => {
    console.error('请求错误:', error.message);
    if (error.code) {
      console.error('错误代码:', error.code);
    }
    if (error.errno) {
      console.error('系统错误:', error.errno);
    }
    if (error.type) {
      console.error('错误类型:', error.type);
    }
  });
