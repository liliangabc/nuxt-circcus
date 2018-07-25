<template>
<div class="page-home-type">
  <com-card-list :data-list="dataList"></com-card-list>
</div>
</template>
<script>
import ComCardList from '~/components/card/list'
export default {
  components: { ComCardList },
  asyncData({ route, store }) {
    return store.dispatch('home/fetchList', { route }).then(data => {
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
      page: 1
    }
  },
  methods: {
    getData(action) {
      this.page = action === 'loadmore' ? this.page + 1 : 1
      return this.$store.dispatch('home/fetchList', {
        route: this.$route,
        page: this.page
      }).then(data => {
        if (action === 'loadmore') {
          this.dataList.push(...data.data.result)
        } else {
          this.dataList = data.data.result
        }
        this.hasNext = data.data.hasNext === '1'
      })
    }
  }
}
</script>
<style lang="scss">

</style>