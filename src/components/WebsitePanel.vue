<!-- a panel that contains the website produced by the HTML code -->
<template>
  <div class="v-layout website">
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

<style scoped lang="scss">
.website {
  outline: 2px solid $primary;
}
</style>