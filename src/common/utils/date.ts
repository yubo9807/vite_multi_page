/**
 * 获取当前时间
 * @param t 
 */
export function getCurrentDate(t: string | number | Date) {
  let date = t ? new Date(t) : new Date();
  return {
      year: date.getFullYear() + '',
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
  }
}


/**
* 格式化时间
* @param formater 
* @param t 
*/
export function dateFormater(t: string | number | Date = new Date(), formater: string = 'YYYY-MM-DD hh:mm:ss') {
  const { year, month, day, hour, minute, second } = getCurrentDate(t);
  return formater.replace(/YYYY/g, year)
      .replace(/YY/g, year.substr(2, 2))
      .replace(/MM/g, (month < 10 ? '0' : '') + month)
      .replace(/DD/g, (day < 10 ? '0' : '') + day)
      .replace(/hh/g, (hour < 10 ? '0' : '') + hour)
      .replace(/mm/g, (minute < 10 ? '0' : '') + minute)
      .replace(/ss/g, (second < 10 ? '0' : '') + second);
}
