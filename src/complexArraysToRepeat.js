var array = [
  { name: "羽根", artist: "air" },
  { name: "羽根", artist: "air" },
  { name: "晴天", artist: "周杰伦" },
  { name: "晴天", artist: "周杰伦" },
  { artist: "周杰伦", name: "晴天" }
];
/**
 *
 *
 * @param {*} array   去重数组
 * @param {*} key     对象键名
 * @returns
 */
function unique(array, key) {
  let result = {};
  let finalResult = [];
  for (let i = 0; i < array.length; i++) {
    result[array[i][key]] = array[i];
  }
  Object.keys(result).forEach((key) => {
    const item = result[key];
    finalResult.push(item);
  });
  return finalResult;
}


export default {
  unique
}