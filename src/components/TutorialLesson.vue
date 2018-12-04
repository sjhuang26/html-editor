<template>
  <div>
    <div v-html="markdownToHTML(markdownContent)"></div>
  </div>
</template>

<script>
import marked from 'marked';

marked.setOptions({
  headerIds: false
});

export default {
  name: 'TutorialLesson',
  props: {
    markdownContent: {
      type: String,
      required: true
    }
  },
  methods: {
    markdownToHTML(markdown) {
      return marked(markdown);
    }
  }
};
</script>
