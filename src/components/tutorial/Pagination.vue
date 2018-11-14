<template>
  <div>
    <button class="btn btn-primary" @click="changeCurrentTutorialPage(null)">Back to table of contents</button>
  </div>
</template>

<script>
/*<b-form-select
      :value="currentTutorialPageIndex"
      @input="changeCurrentTutorialPage"
    >
      <option
        v-for="(page, index) of tutorial.pages"
        :value="index"
        :key="'tutorial-pagination-page-' + index"
      >
        {{ page.title }}
      </option>
    </b-form-select> */
import { mapState, mapActions } from 'vuex';
import { tutorial } from '../../js/tutorial';

export default {
  name: 'Pagination',
  data() {
    return {
      tutorial
    };
  },
  methods: {
    ...mapActions([
      'changeCurrentTutorialPage'
    ])
  },
  computed: {
    ...mapState([
      'currentTutorialPageIndex'
    ])
  }
}
</script>