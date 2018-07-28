import validator from 'email-validator'

// 验证邮箱
export function isEmail(str) {
  return validator.validate(str)
}

// 验证学校邮箱
export function isSchoolEmail(str) {
  return isEmail(str) && str.endsWith('edu')
}

// 设置图片尺寸
export function setPicSize(picUrl, width, height) {
  let searchStr = '?imageslim'
  let replaceStr = `?imageView2/1/w/${width * 2}/h/${(height || width) * 2}`
  if (!picUrl) {
    return ''
  } else if (picUrl.indexOf(searchStr) === -1) {
    return picUrl + replaceStr
  } else {
    return picUrl.replace(searchStr, replaceStr)
  }
}

// 帖子类型
export const posts = {
  isEvent: type => +type === 1,
  isMarket: type => +type === 2,
  isClass: type => +type === 3,
  isMeetup: type => +type === 4,
  isMoment: type => +type === 5
}

// iframe页面混合
export const iframeViewMixin = {
  data() {
    return { comLoading: null }
  },
  methods: {
    onLoaded() {
      this.comLoading && this.comLoading.close()
    }
  },
  mounted() {
    this.comLoading = this.$loading()
  }
}