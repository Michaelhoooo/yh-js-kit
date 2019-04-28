//ecDo.moneyChange(168752632)
//result："人民币壹亿陆仟捌佰柒拾伍万贰仟陆佰叁拾贰元整"
//ecDo.moneyChange(1682)
//result："人民币壹仟陆佰捌拾贰元整"
//ecDo.moneyChange(-1693)
//result："欠人民币壹仟陆佰玖拾叁元整"
function moneyChange(n) {
  var fraction = ['角', '分', '厘'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [
      ['元', '万', '亿'],
      ['', '拾', '佰', '仟']
  ];
  var head = n < 0 ? '欠人民币' : '人民币';
  n = Math.abs(n);
  var s = '';
  for (var i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }
  s = s || '整';
  n = Math.floor(n);
  for (var i = 0; i < unit[0].length && n > 0; i++) {
      var p = '';
      for (var j = 0; j < unit[1].length && n > 0; j++) {
          p = digit[n % 10] + unit[1][j] + p;
          n = Math.floor(n / 10);
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
      //s = p + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
} 


export default {
  moneyChange
}