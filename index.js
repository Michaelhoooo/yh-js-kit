import { setCookie, getCookie, delCookie } from './src/aboutCookie'
import { steamroller } from  './src/arrayFlattening'
import { arraySortByKey } from './src/arraySortByKey'
import { formatThousand } from './src/changeDigitalDisplay'
import { unique } from './src/complexArraysToRepeat'
import { getEndTime } from './src/countdown'
import { deepCopy } from './src/deepCopy'
import { filterParams } from './src/filterParams'
import { changeCase } from './src/letterSize'
import { moneyChange } from './src/moneyChange'
import { getPagedArray } from './src/pagingComponent'
import { timeFormat } from './src/timeFormat'
import { browserInfo } from './src/uaJudgment'

export default {
  setCookie, 
  getCookie, 
  delCookie,
  steamroller,
  arraySortByKey,
  formatThousand,
  unique,
  getEndTime,
  deepCopy,
  filterParams,
  changeCase,
  moneyChange,
  getPagedArray,
  timeFormat,
  browserInfo
}