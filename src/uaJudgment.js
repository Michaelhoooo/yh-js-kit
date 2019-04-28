function browserInfo(type) {
  switch (type) {
      case 'android':
          return navigator.userAgent.toLowerCase().indexOf('android') !== -1
      case 'iphone':
          return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1
      case 'ipad':
          return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1
      case 'weixin':
          return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
      default:
          return navigator.userAgent.toLowerCase()
  }
}

export default {
  browserInfo
}