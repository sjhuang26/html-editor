<template>
  <div class="v-layout">
    <div v-show="!hideHeader" class="panel-header h-layout flex-fit-content">
      <span class="panel-header-button panel-header-left v-layout flex-fit-content" v-if="includeBack" @click="$emit('backButtonClick')"><i class="fa fa-arrow-left flex-fit-content"></i></span>
      <span v-if="title !== undefined" class="panel-header-title">{{ title }}</span>
      <span class="panel-header-button panel-header-right v-layout flex-fit-content" v-if="rightButton !== undefined" @click="$emit('rightButtonClick')"><span class="flex-fit-content">{{ rightButton.text }}</span></span>
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

<style lang="scss" scoped>
.panel-header {
  font-size: 2rem;
  background-color: $primary;
}
.panel-header-title {
  color: white;
  margin: 0 .5rem;
}
.panel-header-button {
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  font-size: 1.5rem;
  border-radius: 0.25rem;
  margin: .25rem;
  padding: 0 .25rem;
  cursor: pointer;
}
</style>
