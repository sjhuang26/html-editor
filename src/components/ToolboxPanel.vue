<!-- a panel that contains sample HTML elements to add to the code -->
<template>
  <div>
    <h3>Add something</h3>
    <b-button class="btn" @click="addTag('p')">Paragraph</b-button>
    <b-button class="btn" @click="addTag('h1')">Header</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ToolboxPanel',
    props: {
      name: {
          title: 'Toolbox',
      }
    },
  methods: {
    ...mapActions([
      'updateCode'
    ]),
    addTag(tagName) {
      const newCode = this.code + `<${tagName}>Stuff</${tagName}>`;
      this.updateCode(newCode);
    }
  },
  computed: {
    ...mapState([
      'code'
    ])
  }
};
</script>
