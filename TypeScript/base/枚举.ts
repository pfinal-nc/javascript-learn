// 枚举
enum SexType { // 不设置值时候, 默认从0开始递增
    GIRL,BOY
}

const pfinal = {
    name: 'pfinal',
    sex: SexType.GIRL
}
console.log(pfinal)

// 当某个字段设置数值类型的值后, 后面的在它基础上那递增

enum SexType1 { // 不设置值时候, 默认从0开始递增
    GIRL = 1,BOY
}

const pfinal1 = {
    name: 'pfinal',
    sex: SexType1.BOY
}
console.log(pfinal1)
