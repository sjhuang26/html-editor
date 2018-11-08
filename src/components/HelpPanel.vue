<!-- a panel that contains sample HTML elements to add to the code -->
<template>
  <div>
    <b-tabs>
      <b-tab title="Welcome" active>
        <WelcomePanel />
      </b-tab>
      <b-tab title="Tags">
        <ul class="list-group">
          <li
            v-for="(tag, tagName) of tags"
            class="list-group-item"
            :key="'toolbox-list-' + tagName"
          >
            <h5>{{ tagName }}</h5>
            <p>{{ tag.description }}</p>
            <p>{{ tag.extendedDescription }}</p>
            <code>{{ tag.codeSample }}</code>
          </li>
        </ul>
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

import { tags } from '../js/help';

export default {
  name: 'HelpPanel',
  components: {
    CssPanel,
    SelectionPanel,
    TutorialPanel,
    WelcomePanel
  },
  data() {
    return {
      tags
    };
  }
};
</script>
