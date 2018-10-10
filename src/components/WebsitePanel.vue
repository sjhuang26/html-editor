<!-- a panel that contains the website produced by the HTML code -->
<template>
  <CollapsiblePanel panelName="website">
    <Sandbox :content="code" />
  </CollapsiblePanel>
</template>

<script>
import { mapState } from 'vuex';

import Sandbox from './Sandbox';
import CollapsiblePanel from './CollapsiblePanel';

export default {
  name: 'WebsitePanel',
  components: {
    Sandbox,
    CollapsiblePanel
  },
  computed: {
    ...mapState([
      'code'
    ])
  }
};
</script>
