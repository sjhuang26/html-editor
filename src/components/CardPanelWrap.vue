<template>
  <div class="card-panel v-layout">
    <div class="card-panel-header flex-fit-content">
      <template v-if="panelTitle !== undefined">
        {{ panelTitle }}
        <slot name="header" />
      </template>
      <template v-else-if="panelName !== undefined">
        {{ panelInfo[panelName].title }}
      </template>
    </div>
    <slot :class="bodyClass" />
  </div>
</template>

<script>
import { panelInfo } from '../js/panel-info';

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

<style scoped>
.card-panel {
  margin: 1rem;
}
.card-panel-header {
  font-size: 2.5rem;
  border-radius: 1rem;
  border: 3px solid #EEE;
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>
