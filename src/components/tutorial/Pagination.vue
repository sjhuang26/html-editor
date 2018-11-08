<template>
  <div>
    <b-form-select
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
    </b-form-select>
  </div>
</template>

<script>
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