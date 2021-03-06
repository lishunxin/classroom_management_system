/*用export把方法暴露出来*/
/*设置cookie*/
export function setCookie(userId,value,expire) {
  var date=new Date()
  date.setSeconds(date.getSeconds()+expire)
  document.cookie=userId+ "="+escape(value)+"; expires="+date.toGMTString()
  console.log(document.cookie)
}

/*获取cookie*/
export function getCookie(userId){
  if (document.cookie.length>0){
    let c_start=document.cookie.indexOf(userId + "=")
    if (c_start!=-1){
      c_start=c_start +userId.length+1
      let c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return ""
}

/*删除cookie*/
export function delCookie(userId){
  setCookie(userId, "", -1)
}
