<!-- contains, controls, and toggles the visibility of all the panels -->
<template>
  <div class="panel-collection d-flex flex-column">
    <div class="header">
      <HeadingPanel />
      <NavigationPanel />
    </div>
    <div class="body h-layout">
      <div class="v-layout">
        <CardPanelWrap panelName="help">
          <HelpPanel />
        </CardPanelWrap>
      </div>
      <CardPanelWrap :panelTitle="isExplanationShown ? 'Explanation' : 'Code'" :bodyClass="'v-layout fixed-scroll-layout' + (isExplanationShown ? '' : ' p-0')">
        <CodePanel v-show="!isExplanationShown" />
        <div v-show="isExplanationShown">
          <ExplanationPanel class="body-column-item" />
          <SelectionPanel class="body-column-item" />
        </div>
        <template slot="header">
          <div class="btn-group">
            <button
              class="btn btn-primary"
              @click="isExplanationShown = !isExplanationShown"
            >
              {{ isExplanationShown ? 'Show code' : 'Show explanation'}}
            </button>
          </div>
        </template>
      </CardPanelWrap>
      <CardPanelWrap panelName="website" bodyClass="v-layout">
        <WebsitePanel />
      </CardPanelWrap>
    </div>
  </div>
</template>

<script>
// all the panels
import HeadingPanel from './HeadingPanel';
import CodePanel from './CodePanel';
import ExplanationPanel from './ExplanationPanel';
import NavigationPanel from './NavigationPanel';
import WebsitePanel from './WebsitePanel';
import SelectionPanel from './SelectionPanel';
import HelpPanel from './HelpPanel';
import CssPanel from './CssPanel';

import CardPanelWrap from './CardPanelWrap';

export default {
  name: 'AppBody',
  data() {
    return {
      isExplanationShown: false
    };
  },
  components: {
    HeadingPanel,
    CodePanel,
    ExplanationPanel,
    NavigationPanel,
    WebsitePanel,
    SelectionPanel,
    HelpPanel,
    CssPanel,
    CardPanelWrap
  }
};
</script>

<style>
.header {
  background-color: #EEE;
}
.body {
  flex: 1;
  overflow: auto;
}
.CodeMirror {
  height: 100%!important;
}
</style>
