<!-- contains, controls, and toggles the visibility of all the panels -->
<template>
  <div class="panel-collection d-flex flex-column">
    <div class="header">
      <HeadingPanel />
      <NavigationPanel />
    </div>
    <div class="body container-fluid">
      <div class="row body-row">
        <div class="col body-column">
          <ToolboxPanel class="body-panel" />
        </div>
        <div class="col body-column">
          <CodePanel class="body-panel" />
        </div>
        <div class="col body-column">
          <ExplanationPanel class="body-panel" />
          <WebsitePanel class="body-panel" />
          <SelectionPanel class="body-panel" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

// all the panels
import HeadingPanel from './HeadingPanel';
import CodePanel from './CodePanel';
import ExplanationPanel from './ExplanationPanel';
import NavigationPanel from './NavigationPanel';
import WebsitePanel from './WebsitePanel';
import SelectionPanel from './SelectionPanel';
import ToolboxPanel from './ToolboxPanel';

export default {
  name: 'PanelCollection',
  components: {
    HeadingPanel,
    CodePanel,
    ExplanationPanel,
    NavigationPanel,
    WebsitePanel,
    SelectionPanel,
    ToolboxPanel
  },
  methods: {
    isPanelVisible(panelName) {
      return this.visiblePanels.includes(panelName);
    }
  },
  computed: {
    ...mapState([
      'visiblePanels'
    ])
  }
};
</script>

<style>
.header {
  background-color: #EEE;
}
.body {
  display: flex;
  flex: 1;
  overflow: auto;
}
.body-panel {
  flex: 1;
}
.body-row {
  flex: 1;
}
.body-column {
  flex: 1;
  display: flex;
  flex-flow: column;
}
</style>
