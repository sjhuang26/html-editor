<template>
  <div>
    <Pagination v-show="currentTutorialPageIndex !== null" />
    <div v-show="currentTutorialPageIndex === null">
      <h1>Pages</h1>
      <ul class="list-group">
        <li
          v-for="(page, index) in tutorial.pages"
          :key="'tutorial-table-of-contents-page' + index"
          class="list-group-item list-group-item-action"
          @click="changeCurrentTutorialPage(index)"
        >{{ page.title }}</li>
      </ul>
    </div>
    <div v-for="(page, index) in tutorial.pages" :key="'tutorial-page-' + index" v-show="currentTutorialPageIndex === index">
      <h1>{{ page.title }}</h1>
      <Lesson :markdownContent="page.lessonMarkdownContent" />
      <Examples v-if="page.examples !== undefined" :examples="page.examples" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { tutorial } from '../../js/tutorial';
import Lesson from './Lesson';
import Examples from './Examples';
import Pagination from './Pagination';

export default {
  name: 'TutorialPanel',
  components: {
    Lesson,
    Examples,
    Pagination
  },
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
};
</script>
