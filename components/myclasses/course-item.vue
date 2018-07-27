<template>
<li class="com-myclasses-course-item">
  <nuxt-link class="link" :to="`/myclasses/course?id=${item.id}`">
    <span class="upper">{{item.courseCode.charAt(0).toUpperCase()}}</span>
    <div class="middle">
      <h3 class="name">{{item.courseName}}</h3>
      <h4 class="college">{{item.courseCode}} - {{item.collegeName}}</h4>
    </div>
    <com-button class="btn-remove" size="mini" @click.prevent="onRemove">remove</com-button>
  </nuxt-link>
</li>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    onRemove() {

    }
  }
}
</script>
<style lang="scss">
.com-myclasses-course-item {
  .link {
    display: flex;
    align-items: center;
    padding: 12px 12px 12px 0;
    border-bottom: 1px solid $borderLevel3Color;
    .upper {
      width: 40px;
      height: 40px;
      min-width: 40px;
      line-height: 40px;
      border-radius: 50%;
      background-color: #f5f5f5;
      color: $econdaryPrimaryColor;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
    .middle {
      flex: 1;
      margin: 0 8px;
      .name {
        font-size: 13px;
        color: $primaryTextColor;
      }
      .college {
        font-size: 12px;
        color: $secondaryTextColor;
      }
    }
    .btn-remove {
      text-transform: capitalize;
    }
  }
}
</style>