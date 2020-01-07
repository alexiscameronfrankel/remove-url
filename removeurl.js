function removeUrlAnchor(url){
  if(url.indexOf('#') > 0) {
    return url.slice(0, url.indexOf('#'))
  }
  return url
}