<template>
  <button class="btn btn-outline-primary" @click="toggle">{{ (visiblePanels.includes(panelName) ? 'Hide' : 'Show') + ' ' + panelInfo[panelName].title }}</button>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import { panelInfo } from '../utils/panel-info';

export default {
  name: 'PanelToggleButton',
  props: {
    panelName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      panelInfo
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
    toggle() {
      this.togglePanelVisibility(this.panelName);
    }
  }
};
</script>
