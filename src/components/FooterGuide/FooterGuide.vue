<template>
  <div class="footer_guide">
    <a href="javascript:;" class="guide_item" :class="$route.path==='/msite'?'on':''" @click="handleTo('msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>首 页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="$route.path==='/order'?'on':''" @click="handleTo('order')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜 索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="$route.path==='/search'?'on':''" @click="handleTo('search')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订 单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="$route.path==='/personal'?'on':''" @click="handleTo('personal')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人中心</span>
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    handleTo (val) {
      this.$router.push({ path: '/' + val })
    }
  }
}
</script>
<style lang="scss" scoped>
.footer_guide {
  position: fixed; /* 固定定位 */
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  display: flex;
  border-top: 1px solid #e4e4e4;
  box-sizing: border-box;
  .guide_item {
    width: 25%;
    display: flex;
    text-align: center;
    align-items: center;
    color: #999;
    flex-direction: column;
    .item_icon {
      margin-bottom: 5px;
    }
  }
  .on {
    color: #02a774;
  }
}
</style>
