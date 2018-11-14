<!-- a panel that contains sample HTML elements to add to the code -->
<template>
  <div>
    <WelcomePanel v-show="currentHelpPanelTab === 0" />
    <ReferencePanel v-show="currentHelpPanelTab === 1" />
    <TutorialPanel v-show="currentHelpPanelTab === 2" />
    <CssPanel v-show="currentHelpPanelTab === 3" />
    <SelectionPanel v-show="currentHelpPanelTab === 4" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import CssPanel from './CssPanel';
import SelectionPanel from './SelectionPanel';
import TutorialPanel from './tutorial/TutorialPanel';
import WelcomePanel from './WelcomePanel';
import ReferencePanel from './ReferencePanel';

export default {
  name: 'HelpPanel',
  components: {
    CssPanel,
    SelectionPanel,
    TutorialPanel,
    WelcomePanel,
    ReferencePanel
  },
  computed: {
    ...mapState([
      'currentHelpPanelTab'
    ])
  }
};
</script>
