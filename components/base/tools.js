/**
 * 公共工具模块
 */

// 获取DOM元素在页面中的偏移
export function getOffset(el) {
  const domEl = typeof el === 'string' ? document.body.querySelector(el) : el
  let oTop = el.offsetTop
  let oLeft = el.offsetLeft
  let oParentEl = domEl.offsetParent
  while (oParentEl) {
    oTop += oParentEl.offsetTop
    oLeft += oParentEl.offsetLeft
    oParentEl = oParentEl.offsetParent
  }
  return { top: oTop, left: oLeft }
}

// 获取页面最大图层
export function getMaxZIndex() {
  let maxZIndex = 200
  const els = document.querySelectorAll('body>*')
  for (let i = 0, len = els.length; i < len; i++) {
    let el = els[i]
    let { zIndex } = getComputedStyle(el, null)
    if (isNaN(zIndex)) continue
    maxZIndex = Math.max(maxZIndex, +zIndex)
  }
  return maxZIndex
}