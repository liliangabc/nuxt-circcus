<template>
<com-level-one-nav-layout class="page-myclasses" title="my classes" has-search>
  <ul class="course-list">
    <com-course-item v-for="item in dataList" :key="item.id" :item="item"></com-course-item>
  </ul>
  <com-loadmore v-if="hasNext" :loading="loading" @loadmore="onLoadmore"></com-loadmore>
</com-level-one-nav-layout>
</template>
<script>
import ComCourseItem from '~/components/myclasses/course-item'
export default {
  components: { ComCourseItem },
  asyncData({ store }) {
    return store.dispatch('myclasses/fetchCourseList', {}).catch(err => console.log(err.message))
  },
  data() {
    return {
      dataList: [],
      hasNext: false,
      page: 1,
      loading: false
    }
  },
  methods: {
    getData(action) {
      this.loading = true
      this.page = action === 'loadmore' ? this.page + 1 : 1
      return this.$store.dispatch('myclasses/fetchCourseList', {
        page: this.page
      }).then(data => {
        this.loading = false
        if (action === 'loadmore') {
          this.dataList.push(...data.dataList)
        } else {
          this.dataList = data.dataList
        }
        this.hasNext = data.hasNext
      }).catch(err => {
        this.loading = false
        this.$toast({ message: err.message, type: 'error' })
      })
    },
    onLoadmore() {
      this.getData('loadmore')
    }
  }
}
</script>
<style lang="scss">
.course-list {
  padding-left: 12px;
}
</style>