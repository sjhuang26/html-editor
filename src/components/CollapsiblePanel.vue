<template>
  <div class="card collapsible-panel" v-show="visiblePanels.includes(panelName)">
    <div class="card-header">
      {{ panelInfo[panelName].title }}
      <button type="button" class="close" @click="handlePanelClose">
        <span>&times;</span>
      </button>
    </div>
    <div class="card-body collapsible-panel-body">
      <slot />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { panelInfo } from '../utils/panel-info';

export default {
  name: 'CollapsiblePanel',
  props: {
    panelName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      panelInfo: panelInfo
    };
  },
  computed: {
    ...mapState([
      'visiblePanels'
    ])
  },
  methods: {
    ...mapActions([
      'togglePanelVisibility'
    ]),
    handlePanelClose() {
      this.togglePanelVisibility(this.panelName);
    }
  }
};
</script>

<style scoped>
.collapsible-panel-body {
  overflow: auto;
}
</style>
