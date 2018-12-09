<!-- a panel that contains a textbox where code can be entered -->
<template>
  <div>
    <div class="alert alert-primary" v-show="isBrowsingExamples">
      <p>This is example code. You can edit it and see what the website looks like.</p>
      <button class="btn btn-primary" @click="turnExamplesOff()">Close examples</button>
    </div>
    <b-alert variant="primary" show dismissible>
      <p>This is where you will enter HTML code. Click the "show explanation" button to switch between explanation and code.</p>
      <button class="btn btn-primary" @click="setCurrentHelpPanelTab('Tutorial')">Need help? Go to the tutorial.</button>
    </b-alert>
    <Codemirror
      class="code-input"
      :value="code"
      @input="updateCode"
      :options="codemirrorOptions" />
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import {codemirror as Codemirror} from 'vue-codemirror';
import {mapGetters, mapActions, mapState, mapMutations} from 'vuex';
export default {
  name: 'CodePanel',
  props: {
    name: {
      title: 'Code',
      description: 'TODO'
    }
  },
  components: {
    Codemirror
  },
  data() {
    return {
      codemirrorOptions: {
        mode: 'text/html',
        theme: 'monokai',
        lineWrapping: true
      }
    }
  },
  methods: {
    ...mapActions([
      'updateCode',
      'turnExamplesOff'
    ]),
    ...mapMutations([
      'setCurrentHelpPanelTab'
    ])
  },
  computed: {
    ...mapState([
      'code',
      'isBrowsingExamples'
    ]),
    ...mapGetters([
      'codeModel'
    ])
  }
};
</script>