import validator from 'email-validator'

// 验证邮箱
export function isEmail(str) {
  return validator.validate(str)
}

// 验证学校邮箱
export function isSchoolEmail(str) {
  return isEmail(str) && str.endsWith('edu')
}