<!-- contains, controls, and toggles the visibility of all the panels -->
<template>
  <div class="panel-collection">
    <div class="header">
      <HeadingPanel v-show="isPanelVisible('heading')"/>
      <NavigationPanel v-show="isPanelVisible('navigation')"/>
    </div>
    <div class="body">
      <CodePanel class="body-panel" v-show="isPanelVisible('code')"/>
      <ExplanationPanel class="body-panel" v-show="isPanelVisible('explanation')"/>
      <WebsitePanel class="body-panel" v-show="isPanelVisible('website')"/>
      <SelectionPanel class="body-panel" v-show="isPanelVisible('selection')"/>
      <ToolboxPanel class="body-panel" v-show="isPanelVisible('toolbox')"/>
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
}
.body-panel {
  flex: 1;
}
</style>
