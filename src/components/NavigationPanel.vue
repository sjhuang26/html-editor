<!-- a panel that contains toggle buttons to show/hide other panels -->
<template>
  <div class="navigation-panel">
    <button class="btn btn-dark mr-3">An HTML tutorial</button>
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
      <button class="btn btn-primary" @click="downloadConfirmation">Download code</button>
    </div>
    <b-modal ref="downloadModal" title="The code will download onto your computer." @ok="download(code, 'website.html')" ok-title="Download" cancel-title="Cancel" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import { helpPanelTabs } from '../js/panel-info';
import download from '../js/download-lib';

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
    ]),
    download,
    downloadConfirmation() {
      this.$refs.downloadModal.show();
    }
  },
  computed: {
    ...mapState([
      'currentHelpPanelTab',
      'code'
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