<!-- a panel that contains sample HTML elements to add to the code -->
<template>
  <div>
    <b-tabs>
      <b-tab title="Welcome" active>
        <WelcomePanel />
      </b-tab>
      <b-tab title="Tags">
        <ReferencePanel />
      </b-tab>
      <b-tab title="Tutorial">
        <TutorialPanel />
      </b-tab>
      <b-tab title="CSS">
        <CssPanel />
      </b-tab>
      <b-tab title="Current tag">
        <SelectionPanel />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>

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
  }
};
</script>
