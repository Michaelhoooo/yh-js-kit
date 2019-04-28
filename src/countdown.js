
/**
 *
 *  getEndTime('2020/8/8 8:0:0')
 * @param {*} endTime
 * @returns
 */
function getEndTime(endTime){
  var startDate=new Date(); 
  var endDate=new Date(endTime);
  var t=endDate.getTime()-startDate.getTime();
  var d=0,h=0,m=0,s=0;
  if(t>=0){
    d=Math.floor(t/1000/3600/24);
    h=Math.floor(t/1000/60/60%24);
    m=Math.floor(t/1000/60%60);
    s=Math.floor(t/1000%60);
  } 
  return {
    day: d,
    hour: h,
    minutes: m,
    seconds: s
  };
}

export default {
  getEndTime
}

