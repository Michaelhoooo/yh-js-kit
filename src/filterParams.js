/**
 *
 *
 * @param {*} obj
 * @returns
 */
function filterParams(obj){
  let _newPar = {};
  for (let key in obj) {
      if ((obj[key] !== 0 && obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
          _newPar[key] = obj[key];
      }
  }
  return _newPar;
}

export {
  filterParams
}
// console.log(filterParams({a:0, b:1, c:"010", d:null, e:undefined,f:false}) )
// When the value is 0,null,undefined, it gets filtered
