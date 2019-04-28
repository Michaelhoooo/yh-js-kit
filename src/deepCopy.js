
// 深拷贝函数
// options可以用来对对象进行初始化
function deepCopy(someStructure, options) {
  if (!options) {
    options = someStructure
  }
  if (Array.isArray(someStructure)) {
    let arr = []

    for (let item of someStructure) {
      arr.push(deepCopy(item, options))
    }
    return arr
  } else if (someStructure instanceof Object) {
    let obj = {}

    for (let item in someStructure) {
      if (someStructure.hasOwnProperty(item)) {
        obj[item] = deepCopy(someStructure[item], options)
        if (options.hasOwnProperty(item)) {
          obj[item] = options[item]
        }
      }
    }

    return obj
  } else {
    return someStructure
  }
}

export default {
  deepCopy
}
// let ary = [{name: 1},{name: 2}]
// let ary2 = deepCopy(ary)

// console.log(ary)
// console.log(ary2)
