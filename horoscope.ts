// 引入
import lunisolar from 'lunisolar'
// import takeSound from 'lunisolar/plugins/takeSound' 
import char8ex from 'lunisolar/plugins/char8ex'
// 使用
// lunisolar.extend(takeSound)
lunisolar.extend(char8ex)
const d = lunisolar('1993/03/02 21:20').char8ex(0)

// --- format ---

// d.format('lY年 lM(lL)lD lH時')  // 可取得阴历日期 '二〇二二年 六月(大)二十 未時'
// d.format('cY cM cD cH')  // 可取得八字：'壬寅 丁未 壬申 丁未'
// d.format('YYYY-MM-DD HH:mm:ss') // 2022-07-18 14:40:00
// console.log(d.format('YYYY-MM-DD HH:mm:ss'))
// --- 阴历--- 

// d.lunar.toString() // 二〇二二年六月二十未時
// console.log(d.lunar.toString())
// `${d.lunar}` // 二〇二二年六月二十未時
// d.lunar.year // 2022
// d.lunar.getYearName() // 二〇二二
// d.lunar.month // 6 （如果是闰六月会返回106）
// d.lunar.getMonthName() // 六月
// d.lunar.day // 20
// d.lunar.getDayName() // 二十
// d.lunar.hour // 7 （返回从0开始算的时辰下标）
// d.lunar.getHourName() // 未
// d.lunar.isLeapMonth // false (是否闰月)

// // --- 八字 ----
// console.log(d.char8.toString())
// console.log(d.char8.year.takeSoundE5.toString())
// console.log(d.char8.day.takeSoundE5.toString())
// console.log(d.char8.year.takeSound.toString())
// console.log(d.char8.day.takeSound.toString())
// `${d.char8}` // 壬寅 丁未 壬申 丁未
// d.char8.year.toString() // 壬寅  （取得年柱）
// d.char8.month.toString() // 丁未  （取得月柱）
// d.char8.day.toString() // 壬申 （取得日柱）
// d.char8.hour.toString() // 丁未  （取得时柱）
// d.char8.year.stem.toString() // 壬 (年柱天干)
// d.char8.year.branch.toString() // 寅  (年柱地支)
// d.char8.year.branch.hiddenStems // [甲, 丙, 戊]  （地支藏干的天干对象列表，顺序为本气、中气、余气）
// // ...其它柱类似

// // 节气
// lunisolar('2022-07-23').solarTerm?.toString() // 大暑 （返回当天的节气，如果不是节气则solarTerm().solarTerm返回null）

// // 阴历反查 （阴历转公历）
// console.log(lunisolar.fromLunar({
//   year: 1993,
//   month: 3,
//   day: 2
// }).format('YYYY-MM-DD')) // 2022-11-18

console.log(d.toString())
console.log(d.year.takeSound);
// console.log(d.list);

// 十天干如下：甲乙属木；丙丁属火；戊己属土；庚辛属金；壬癸属水；

// 十二地支如下：寅卯属木；巳午属火；申酉属金；亥子属水；辰戌丑未属土；

// 壬申 甲辰 壬子 辛丑
// 水金 木土  水水 金土
// 3水 2金 2土 1木
// 庚午 丙戌 壬戌 丙午
// 金火 火土 水土 木火
// 3火 2土 1水 1金 1木
//  癸酉 甲寅 壬午 辛亥
// 水金 木木 水火 金水
// 3水 2金 2木 1火 
