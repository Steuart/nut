<template>
  <div class="write-article">
    <textarea v-model="content" class="write-area"></textarea>
    <vue-showdown :markdown="content" class="show-content"/>
    <div class="operate"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueShowdown from 'vue-showdown'

export default {
  name: 'dashboard',
  components: {
    VueShowdown
  },
  data() {
    return {
      content: '请写点什么'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.write-article {
  display: flex;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  .write-area {
    width: 50%;
    height: 100%;
    resize: none;
    border: none;
    outline: none;
    padding: 14px 10px 0 10px;
  }
  .show-content{
    height: 100%;
    width: 50%;
    overflow-x: hidden;
    overflow-y: scroll;
    word-break:break-all;
    word-wrap:break-word;
    padding: 0 10px 0 10px;
  }
  .operate {
    background-color: #3a8ee6;
    height: 100%;
    width: 23%;
    position: absolute;
    right: 0;
  }
}
</style>
