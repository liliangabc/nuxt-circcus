<template>
<com-level-sub-nav-layout class="com-iframe-view" title="Privacy Policy">
  <iframe frameborder="0" src="/html/privacyPolicy.html" @load="onLoaded"></iframe>
</com-level-sub-nav-layout>
</template>
<script>
import { iframeViewMixin } from '~/plugins'
export default {
  mixins: [iframeViewMixin]
}
</script>