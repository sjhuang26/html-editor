<!-- a panel that contains the website produced by the HTML code -->
<template>
  <div class="v-layout website-panel">
    <Sandbox :content="code"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Sandbox from './Sandbox';

export default {
  name: 'WebsitePanel',
    props: {
        name: {
            title: 'Website',
        }
    },
  components: {
    Sandbox
  },
  computed: {
    ...mapState([
      'code'
    ])
  }
};
</script>

<style scoped>
.website-panel {
  box-shadow: 2px 2px 10px #AAA;
}
</style>
