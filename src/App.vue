<template>
  <div>
    <h1>Easy HTML Editor</h1>
    <CodePanel></CodePanel>
    <ExplanationPanel></ExplanationPanel>
  </div>
</template>

<script>
import CodePanel from './components/CodePanel';
import ExplanationPanel from './components/ExplanationPanel';

export default {
  name: 'app',
  components: {
    CodePanel,
    ExplanationPanel
  }
};
</script>
