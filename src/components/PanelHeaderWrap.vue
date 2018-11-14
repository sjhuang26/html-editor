<template>
  <div class="v-layout">
    <div v-show="!hideHeader" class="panel-header flex-fit-content">
      <button v-if="includeBack" @click="$emit('backButtonClick')"><i class="fa fa-arrow-left"></i></button>
      <span v-if="title !== undefined" class="panel-header-title">{{ title }}</span>
      <button v-if="rightButton !== undefined" @click="$emit('rightButtonClick')">{{ rightButton.text }}</button>
    </div>
    <div :class="bodyClass">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PanelHeaderWrap',
  props: {
    includeBack: {
      type: Boolean,
      required: false
    },
    rightButton: {
      type: Object,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    bodyClass: {
      type: String,
      required: false
    },
    hideHeader: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style scoped>
.panel-header {
  font-size: 2rem;
}
.panel-header-title {
  font-weight: bold;
}
</style>
