<!-- a panel that contains toggle buttons to show/hide other panels -->
<template>
  <div class="navigation-panel">
    <button class="btn btn-dark mr-3">An HTML tutorial</button>
    <div class="btn-group mr-3">
      <NavigationPanelButton tab="Welcome" />
      <NavigationPanelButton tab="Tutorial" id="help-ref__tutorial" />
    </div>
    <div class="btn-group">
      <button class="btn btn-dark">
        Additional tools
      </button>
      <button class="btn btn-primary" @click="help" id="help-ref__help">Help</button>
      <NavigationPanelButton tab="CSS" />
      <button class="btn btn-primary" @click="downloadConfirmation">Export code</button>
    </div>
    <b-modal ref="downloadModal" title="Are you sure you want to export your code?" @ok="download(code, 'website.html')" ok-title="Export" cancel-title="Cancel" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Driver from 'driver.js';
import 'driver.js/dist/driver.min.css';

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
    },
    help() {
      const driver = new Driver();
      /*
      1) introduction
      2) tutorial
      4) code editor
      5) show explanation
      6) website
      */
      driver.defineSteps([
        {
          element: '#help-ref__help',
          popover: {
            title: 'Welcome to Easy HTML Editor!'
          }
        },
        {
          element: '#help-ref__tutorial',
          popover: {
            title: 'Tutorial',
            description: 'Click this to visit the tutorial.'
          }
        },
        {
          element: '#help-ref__code-editor',
          popover: {
            title: 'Code editor',
            description: 'You will edit your code here. Click the "show explanation" button to show a code explanation.'
          }
        },
        {
          element: '#help-ref__website',
          popover: {
            title: 'Website',
            description: 'This is the website that is generated from your code.'
          }
        }
      ]);

      driver.start();
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