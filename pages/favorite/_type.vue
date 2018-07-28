<template>
<div class="page-favorite-type">
  <com-card-list :data-list="dataList"></com-card-list>
  <com-loadmore v-if="hasNext" :loading="loading" @loadmore="getData('loadmore')"></com-loadmore>
</div>
</template>
<script>
import ComCardList from '~/components/card/list'
export default {
  components: { ComCardList },
  asyncData({ route, store }) {
    return store.dispatch('favorite/fetchList', { route }).catch(err => ({ errmsg: err.message }))
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
      return this.$store.dispatch('favorite/fetchList', {
        route: this.$route,
        page: this.page
      }).then(({ dataList, hasNext }) => {
        this.loading = false
        if (action === 'loadmore') {
          this.dataList.push(...dataList)
        } else {
          this.dataList = dataList
        }
        this.hasNext = hasNext
      }).catch(err => {
        this.loading = false
        this.$toast({ message: err.message, type: 'error' })
      })
    }
  }
}
</script>