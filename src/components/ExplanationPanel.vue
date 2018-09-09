<template>
  <div>
    <ExplanationNodeCollection :nodes="codeModel" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

//import ExplanationNode from './ExplanationNode';
import ExplanationNodeCollection from './ExplanationNodeCollection';

export default {
  name: 'ExplanationPanel',
  components: {
    ExplanationNodeCollection,
    //ExplanationNode
  },
  computed: {
    ...mapGetters([
      'codeModel'
    ])
  }
};
</script>
