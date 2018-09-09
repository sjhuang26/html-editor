<template>
  <div>
    <textarea class="code-input" :value="code" @input="updateCode($event.target.value)">
    </textarea>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
  name: 'code-panel',
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
  outline: 1px solid black;
}
</style>
