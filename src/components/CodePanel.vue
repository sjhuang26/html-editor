<!-- a panel that contains a textbox where code can be entered -->
<template>
  <div class="code-panel">
    <textarea class="code-input" :value="code" @input="updateCode($event.target.value)">
    </textarea>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'CodePanel',
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
  border: none;
  outline: 2px solid #DDD;
  resize: none;
  margin: 10px;
  padding: 10px;
  flex: 1;
  box-sizing: border-box;
}
.code-panel {
  display: flex;
}
</style>
