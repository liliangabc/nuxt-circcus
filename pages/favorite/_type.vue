<template>
<div class="page-favorite-type">
  <com-card-list :data-list="dataList"></com-card-list>
  <com-loadmore v-if="hasNext" :loading="loading" @loadmore="onLoadmore"></com-loadmore>
</div>
</template>
<script>
import ComCardList from '~/components/card/list'
export default {
  components: { ComCardList },
  asyncData({ route, store }) {
    return store.dispatch('favorite/fetchList', { route }).then(data => {
      return {
        dataList: data.data.result,
        hasNext: data.data.hasNext === '1'
      }
    }).catch(err => console.log(err.message))
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
      }).then(data => {
        this.loading = false
        if (action === 'loadmore') {
          this.dataList.push(...data.data.result)
        } else {
          this.dataList = data.data.result
        }
        this.hasNext = data.data.hasNext === '1'
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