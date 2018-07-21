import Vue from 'vue'
import ComIconButton from '~/components/base/icon-button'
import ComNavbar from '~/components/base/navbar'
import ComTabbarItem from '~/components/base/tabbar/item'
import ComTabbar from '~/components/base/tabbar'

const coms = {
  ComIconButton,
  ComNavbar,
  ComTabbarItem,
  ComTabbar
}

for (let name in coms) Vue.component(name, coms[name])