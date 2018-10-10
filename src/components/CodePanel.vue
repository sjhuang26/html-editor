<!-- a panel that contains a textbox where code can be entered -->
<template>
  <CollapsiblePanel panelName="code">
    <div class="d-flex flex-column h-100">
      <p>A CSS <b><i>selector</i></b></p>
      <input type="text" class="form-control" :value="cssCode" @input="updateCssCode($event.target.value)"/>
      <p>HTML</p>
      <Codemirror :value="code" @input="updateCode" :options="codemirrorOptions"></Codemirror>
    </div>
  </CollapsiblePanel>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import {codemirror as Codemirror} from 'vue-codemirror';
import {mapGetters, mapActions, mapState} from 'vuex';
import CollapsiblePanel from './CollapsiblePanel';

export default {
    name: 'CodePanel',
    props: {
        name: {
            title: 'Code',
            description: "TODO"
        }
    },
    components: {
        CollapsiblePanel,
        Codemirror
    },
    data() {
        return {
            codemirrorOptions: {
                mode: 'text/html',
                theme: 'monokai'
            }
        }
    },
    methods: {
        ...mapActions([
            'updateCode',
            'updateCssCode'
        ])
    },
    computed: {
        ...mapState([
            'code',
            'cssCode'
        ]),
        ...mapGetters([
            'codeModel'
        ])
    }
};
</script>

<style scoped>
  .code-input {
    resize: none;
    height: 100%;
    flex: 1;
  }
</style>