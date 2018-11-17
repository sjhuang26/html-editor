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
          :title="currentHelpPanelTab"
          bodyClass="v-layout scroll-layout"
        >
          <WelcomePanel v-show="currentHelpPanelTab === 'Welcome'" />
          <TutorialPanel v-show="currentHelpPanelTab === 'Tutorial'" />
          <CssPanel v-show="currentHelpPanelTab === 'CSS'" />
          <SelectionPanel v-show="currentHelpPanelTab === 'Current selection'" />
        </PanelHeaderWrap>
      </CardPanelWrap>
      <CardPanelWrap>
        <PanelHeaderWrap
          :title="isExplanationShown ? 'Explanation' : 'Code editor'"
          :rightButton="{text: isExplanationShown ? 'Show code' : 'Show explanation'}"
          @rightButtonClick="isExplanationShown = !isExplanationShown"
          :bodyClass="'v-layout scroll-layout'"
        >
          <CodePanel v-show="!isExplanationShown" />
          <div v-show="isExplanationShown" class="v-layout">
            <ExplanationPanel class="scroll-layout" />
            <SelectionPanel class="scroll-layout" />
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
import TutorialPanel from './TutorialPanel';
import WelcomePanel from './WelcomePanel';
import CssPanel from './CssPanel';

import CardPanelWrap from './CardPanelWrap';
import PanelHeaderWrap from './PanelHeaderWrap';

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
    CssPanel,
    CardPanelWrap,
    PanelHeaderWrap,
    TutorialPanel,
    WelcomePanel
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
