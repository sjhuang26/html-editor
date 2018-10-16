<!-- a panel that contains sample HTML elements to add to the code -->
<template>
  <CollapsiblePanel panelName="toolbox">
    <b-tabs>
      <b-tab title="Tags" active>
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
      <b-tab title="Glossary">
        <p>Glossary</p>
      </b-tab>
      <b-tab title="Tutorial">
        <div v-for="element of tutorial.elements" :key="'tutorial-element-' + JSON.stringify(element)">
          <template v-if="element.type === 'card'">
            <b-card :title="element.title">
              <b-tabs>
                <b-tab v-for="(page, index) of element.pages" :key="'tutorial-page-' + JSON.stringify(page)" :title="String(index + 1)">
                  <p>{{ page.text }}</p>
                  <pre>{{ page.code }}</pre>
                  <b-button @click="tutorialTryOut(page.code)">Try it out</b-button>
                </b-tab>
              </b-tabs>
            </b-card>
          </template>
        </div>
      </b-tab>
    </b-tabs>
  </CollapsiblePanel>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import CollapsiblePanel from './CollapsiblePanel';
import { tags, tutorial } from '../help/help';

export default {
  name: 'ToolboxPanel',
  components: {
    CollapsiblePanel
  },
  methods: {
    ...mapActions([
      'updateCode'
    ]),
    addTag(tagName) {
      const newCode = this.code + `<${tagName}>Stuff</${tagName}>`;
      this.updateCode(newCode);
    },
    tutorialTryOut(code) {
      this.updateCode(code);
    }
  },
  data() {
    return {
      tags,
      tutorial
    };
  },
  computed: {
    ...mapState([
      'code'
    ])
  }
};
</script>
