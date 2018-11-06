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
        <table class="table table-bordered table-sm">
          <thead>
          <tr>
            <th scope="col">Term</th>
            <th scope="col">Meaning</th>
          </tr>
          <tr>
            <td>Enrique</td>
            <td>Su</td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td scope="col">CSS</td>
            <td>Cascading Style Sheets are used to define the look and feel of a web site outside of the actual HTML file(s) of the site.</td>
          </tr>
          <tr>
            <td>COMMENT</td>
            <td>In web design terms, a comment is a bit of information contained in a site’s HTML or XHTML files that is ignored by the browser.</td>
          </tr>
          <tr>
          <td>DOCTYPE</td>
          <td>I</td>
          </tr>
          <tr>
            <td colspan="2">Longer terms</td>
          </tr>
          </tbody>
        </table>
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
  props: {
    name: {
      title: 'Toolbox',
    }
  },
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