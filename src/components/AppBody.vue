<!-- contains, controls, and toggles the visibility of all the panels -->
<template>
  <div class="panel-collection d-flex flex-column">
    <div class="header">
      <HeadingPanel />
      <NavigationPanel />
    </div>
    <div class="body h-layout">
      <CardPanelWrap>
        <PanelHeaderWrap
          :title="helpPanelTabs[currentHelpPanelTab]"
          bodyClass="v-layout scroll-layout"
        >
          <HelpPanel />
        </PanelHeaderWrap>
      </CardPanelWrap>
      <CardPanelWrap>
        <PanelHeaderWrap
          :title="isExplanationShown ? 'Explanation' : 'Code'"
          :rightButton="{text: isExplanationShown ? 'Show code' : 'Show explanation'}"
          @rightButtonClick="isExplanationShown = !isExplanationShown"
          :bodyClass="'v-layout fixed-scroll-layout' + (isExplanationShown ? '' : ' p-0')"
        >
          <CodePanel v-show="!isExplanationShown" />
          <div v-show="isExplanationShown">
            <ExplanationPanel class="body-column-item" />
            <SelectionPanel class="body-column-item" />
          </div>
        </PanelHeaderWrap>
      </CardPanelWrap>
      <CardPanelWrap>
        <PanelHeaderWrap title="Website" bodyClass="v-layout">
          <WebsitePanel />
        </PanelHeaderWrap>
      </CardPanelWrap>
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
import HelpPanel from './HelpPanel';
import CssPanel from './CssPanel';

import { helpPanelTabs } from '../js/panel-info';

import CardPanelWrap from './CardPanelWrap';
import PanelHeaderWrap from './PanelHeaderWrap';

export default {
  name: 'AppBody',
  data() {
    return {
      isExplanationShown: false,
      helpPanelTabs
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
    CardPanelWrap,
    PanelHeaderWrap
  },
  computed: {
    ...mapState([
      'currentHelpPanelTab'
    ])
  }
};
</script>

<style>
.body {
  flex: 1;
  overflow: auto;
}
.CodeMirror {
  height: 100%!important;
}
</style>
