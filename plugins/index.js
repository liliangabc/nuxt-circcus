import validator from 'email-validator'

// 验证邮箱
export function isEmail(str) {
  return validator.validate(str)
}

// 验证学校邮箱
export function isSchoolEmail(str) {
  return isEmail(str) && str.endsWith('edu')
}

// 帖子类型
export const posts = {
  isEvent: type => +type === 1,
  isMarket: type => +type === 2,
  isClass: type => +type === 3,
  isMeetup: type => +type === 4,
  isMoment: type => +type === 5
}