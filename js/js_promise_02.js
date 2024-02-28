let titles = ['GO语言开发终端小工具后续','GO开发IP过滤小脚本','基于Wails的Mac桌面应用开发'];

let requests = titles.map(title=>fetch(`https://friday-go.icu/${title}`));

Promise.all(requests).then(responses => {
    for(let response of responses){
        console.log(response.url);
        console.log(response.status); 
    }
    return responses;
}).then(responses => Promise.all(responses.map(r => r.text()))).then(texts => {
    for(let text of texts){
        console.log(text);
    }
})