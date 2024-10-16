// 使用js 不能自定义类型 使用 ts 就可以

function getTitle(name: 'PFinalClub' | 'PFinal') { 
    return name === 'PFinal' ? 'PFinal' : 'PFinalClub';
}

getTitle('PFinal'); // 输出 "PFinal"