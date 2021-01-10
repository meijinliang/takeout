<template>
  <div class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  created () {
  }
}

</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  // line-height: 45px;
  // text-align: center;
  background: #02a774;
  z-index: 100;
  // color: #ffffff;
  // display: flex;
  .header_search {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 50%;
    .icon-sousuo {
      color: #ffffff;
      font-size: 20px;
    }
  }
  .header_title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .header_title_text {
      font-size: 20px;
      color: #ffffff;
    }
  }
  .header_login {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 14px;
    .header_login_text {
      color: #ffffff;
    }
  }
  // .header_search {
  //   width: 45px;
  //   .icon-sousuo {
  //     font-size: 20px;
  //   }
  // }
  // .header_title {
  //   flex: 1;
  // }
  // .header_login {
  //   width: 100px;
  // }
}
</style>