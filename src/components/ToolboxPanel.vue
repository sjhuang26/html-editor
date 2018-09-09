<template>
  <div>
    <h3>Add something</h3>
    <button @click="addTag('p')">Paragraph</button>
    <button @click="addTag('h1')">Header</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ToolboxPanel',
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
