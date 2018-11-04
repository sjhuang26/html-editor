<template>
  <div class="card">
    <div class="card-header">
      <template v-if="panelTitle !== undefined">
        {{ panelTitle }}
      </template>
      <template v-else-if="panelName !== undefined">
        {{ panelInfo[panelName].title }}
      </template>
      <slot name="header" />
    </div>
    <div class="card-body scroll-layout" :class="bodyClass">
      <slot />
    </div>
  </div>
</template>

<script>
import { panelInfo } from '../utils/panel-info';

export default {
  name: 'CardPanelWrap',
  props: {
    panelName: {
      type: String,
      required: false
    },
    panelTitle: {
      type: String,
      required: false
    },
    bodyClass: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      panelInfo: panelInfo
    };
  }
};
</script>
