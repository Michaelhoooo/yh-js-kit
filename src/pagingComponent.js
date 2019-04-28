/**
 *
 * Get paged array
 * @param {*} total  The total number of pages
 * @param {*} cur  The current page  3
 * @param {*} around   1 2 3 4 5   around = 2
 * @returns
 */
const getPagedArray = (total,cur,around) => {
  let result = [];
  let baseCount = around * 2 + 1 + 2 + 2 + 2; //Total number of elements
  let surplus = baseCount - 4; //Only one ellipsis appears, the number of remaining elements
  let startPosition = 1 + 2 + around,endPosition = total - 2 - around;

  if(total <= baseCount - 2){ //No ellipses are displayed
      result =  Array.from({length: total}, (v, i) => i + 1);
  }else{ //You need an ellipsis
      if(cur <= startPosition){ //1.Only the ellipses follow
          result = [...Array.from({length: surplus}, (v, i) => i + 1),"...",total]
      }else if(cur >= endPosition) { //2.Only the leading ellipses appear
          result = [1,'...',...Array.from({length: surplus}, (v, i) => total - surplus + i + 1)]
      }else{ //3.There are ellipsis on both sides
          result = [1,'...',...Array.from({length: around * 2 + 1}, (v, i) => cur - around + i),'...',total]
      }
  }

  return result
}

export default {
  getPagedArray
}