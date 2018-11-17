<!-- a panel that contains toggle buttons to show/hide other panels -->
<template>
  <div class="navigation-panel">
    <button class="btn btn-dark mr-3">An HTML tutorial</button>
    <div class="btn-group mr-3">
      <NavigationPanelButton tab="Welcome" />
      <NavigationPanelButton tab="Tutorial" />
    </div>
    <div class="btn-group">
      <button class="btn btn-dark">
        Additional tools
      </button>
      <NavigationPanelButton tab="CSS" />
      <button class="btn btn-primary" @click="downloadConfirmation">Download code</button>
    </div>
    <b-modal ref="downloadModal" title="Are you sure you want to download your code?" @ok="download(code, 'website.html')" ok-title="Download" cancel-title="Cancel" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import NavigationPanelButton from './NavigationPanelButton';
import download from '../js/download-lib';

export default {
  name: 'NavigationPanel',
  components: {
    NavigationPanelButton
  },
  props: {
    name: {
      title: 'Navigation',
      description: "TODO"
    }
  },
  methods: {
    download,
    downloadConfirmation() {
      this.$refs.downloadModal.show();
    }
  },
  computed: {
    ...mapState([
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