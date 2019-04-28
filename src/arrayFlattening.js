//ecDo.steamroller([1,2,[4,5,[1,23]]])
//[1, 2, 4, 5, 1, 23]
function steamroller(arr) {
  var newArr = [],_this=this;
  for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          // 如果是数组，调用(递归)steamroller 将其扁平化
          // 然后再 push 到 newArr 中
          newArr.push.apply(newArr, _this.steamroller(arr[i]));
      } else {
          // 不是数组直接 push 到 newArr 中
          newArr.push(arr[i]);
      }
  }
  return newArr;
}

export default {
  steamroller
}
