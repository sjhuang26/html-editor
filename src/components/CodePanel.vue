<!-- a panel that contains a textbox where code can be entered -->
<template>
  <div>
    <Codemirror
      class="code-input"
      :value="code"
      @input="updateCode"
      :options="codemirrorOptions" />
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/solarized.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import {codemirror as Codemirror} from 'vue-codemirror';
import {mapGetters, mapActions, mapState} from 'vuex';

export default {
  name: 'CodePanel',
  props: {
    name: {
      title: 'Code',
      description: "TODO"
    }
  },
  components: {
    Codemirror
  },
  data() {
    return {
      codemirrorOptions: {
        mode: 'text/html'
      }
    }
  },
  methods: {
    ...mapActions([
      'updateCode'
    ])
  },
  computed: {
    ...mapState([
      'code'
    ]),
    ...mapGetters([
      'codeModel'
    ])
  }
};
</script>

<style scoped>
.code-input {
  height: 100%;
}
</style>
