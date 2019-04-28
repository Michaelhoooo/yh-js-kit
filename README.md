## yh-js-Kit
Commonly used js tool functions

```bash
npm i yh-js-kit --save
```

### AboutCookie

*   setCookie(name, value)
*   getCookie(name)
*   delCookie(name)

### arrayFlattening

* steamroller

```js
let newArray = steamroller([1,2,[4,5,[1,23]]])
console.log(newArray) //[1, 2, 4, 5, 1, 23]
```

### arraySortByKey

* arraySortByKey

```js
 let ary = [{name:1},{name:12},{name:10}]
 ary.sort(arraySortByKey('name'))
 console.log(ary) // [ { name: 1 }, { name: 10 }, { name: 12 } ]
```

### changeDigitalDisplay

* formatThousand

```js
let demo = formatThousand(1234567)
console.log(demo) //1,234,567
```

### complexArraysToRepeat

* unique
  Deduplication of complex arrays
```js
let array = [
  { name: "yu", artist: "air" },
  { name: "yu", artist: "air" },
  { name: "qing", artist: "zhou" },
  { name: "qing", artist: "zhou" },
];
unique(array, 'name') 
//[ { name: 'yu', artist: 'air' }, { artist: 'zhou', name: 'qing' } ]
```

### countdown

* getEndTime

```js
console.log(getEndTime('2020/8/8 8:0:0'))
//{ day: 467, hour: 14, minutes: 35, seconds: 49 }
```

### deepCopy

* deepCopy

```js
let ary = [{name: 1},{name: 2}]
let ary2 = deepCopy(ary)
console.log(ary2)
//  [{name: 1},{name: 2}] 

let ary3 = deepCopy(ary, {name: 3})
console.log(ary3)
//  [{name: 3},{name: 3}] 
```

### filterParams

* filterParams
When the value is 0,null,undefined, it gets filtered

```js
console.log(filterParams({a:0, b:1, c:"010", d:null, e:undefined,f:false}) )
// {b:1, c:"010"}
```

### letterSize

* changeCase

```js
// 1：首字母大写 / The first child is capitalized
// 2：首子母小写 / The first child is lowercase
// 3：大小写转换 / Case conversion
// 4：全部大写 / All caps
// 5：全部小写 / All lowercase
changeCase('Michael',1)
```

### moneyChange

* moneyChange

``` js
moneyChange(168752632)
//"人民币壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"

moneyChange(1682)
//"人民币壹仟陆佰捌拾贰元整"

moneyChange(-1693)
//"欠人民币壹仟陆佰玖拾叁元整"
```

### pagingComponent

* getPagedArray

```js
/**
 *
 * Get paged array
 * @param {*} total  The total number of pages
 * @param {*} cur  The current page  3
 * @param {*} around   1 2 3 4 5   around = 2
 * @returns
 */
 
 console.log(getPagedArray(10, 6 , 2))
 //[ 1, '...', 4, 5, 6, 7, 8, 9, 10 ]
```

### timeFormat

* timeFormat

```js
/**
 *
 *
 * @param {*} {time, format = 'yyyy-MM-dd HH:mm'}
 * @returns
 */
 let time = new Date()
 console.log(timeFormat(time, 'yyyy-MM-dd HH:mm'))
 //2019-04-28 17:34
```

### uaJudgment

* browserInfo
type: android, iphone, ipad, weixin
return: Boolean



