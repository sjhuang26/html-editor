<!-- contains, controls, and toggles the visibility of all the panels -->
<template>
  <div class="panel-collection d-flex flex-column">
    <div class="header">
      <HeadingPanel />
      <NavigationPanel />
    </div>
    <div class="body h-layout">
      <CardPanelWrap>
        <b-card class="v-layout scroll-layout">
        <PanelHeaderWrap
          :title="currentHelpPanelTab"
          bodyClass="scroll-layout"
        >
          <WelcomePanel v-show="currentHelpPanelTab === 'Welcome'" />
          <TutorialPanel v-show="currentHelpPanelTab === 'Tutorial'" />
          <CssPanel v-show="currentHelpPanelTab === 'CSS'" />
          <SelectionPanel v-show="currentHelpPanelTab === 'Current selection'" />
        </PanelHeaderWrap>
        </b-card>
      </CardPanelWrap>
      <CardPanelWrap>
        <PanelHeaderWrap
          :title="isExplanationShown ? 'Explanation' : 'Code editor'"
          :rightButton="{text: isExplanationShown ? 'Show code' : 'Show explanation'}"
          @rightButtonClick="isExplanationShown = !isExplanationShown"
          :bodyClass="'v-layout scroll-layout'"
        >
          <CodePanel v-show="!isExplanationShown" id="help-ref__code-editor"/>
          <div v-show="isExplanationShown" class="v-layout">
            <ExplanationPanel class="scroll-layout" />
            <SelectionPanel class="scroll-layout" />
          </div>
        </PanelHeaderWrap>
      </CardPanelWrap>
      <CardPanelWrap class="website-panel-shadow" id="help-ref__website">
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
.panel-border {
  background: #EEE;
  width: 8px;
  margin: 10px 0;
  flex: 0 0 auto!important;
}
.website-panel-shadow {
  box-shadow: 2px 2px 10px #AAA;
  padding: 1rem;
}
</style>
