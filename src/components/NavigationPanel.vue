<!-- a panel that contains toggle buttons to show/hide other panels -->
<template>
  <div class="navigation-panel">
    <div class="btn-group navigation-panel-buttons">
      <button
        v-for="(item, index) of helpPanelTabs"
        :key="'navigation-panel-tab-' + index"
        class="btn btn-primary"
        @click="setCurrentHelpPanelTab(index)"
        :class="{active: index === currentHelpPanelTab}"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import { helpPanelTabs } from '../js/panel-info';

export default {
  props: {
    name: {
      title: 'Navigation',
      description: "TODO"
    }
  },
  data() {
    return {
      helpPanelTabs
    };
  },
  methods: {
    ...mapMutations([
      'setCurrentHelpPanelTab'
    ])
  },
  computed: {
    ...mapState([
      'currentHelpPanelTab'
    ])
  }
};
</script>

<style scoped>
.navigation-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>