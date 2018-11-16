<template>
  <div class="v-layout">
    <div v-if="currentTutorialPageIndex === null">
      <ul class="list-group tutorial-toc">
        <li
          v-for="(page, index) in tutorial.pages"
          :key="'tutorial-table-of-contents-page' + index"
          class="tutorial-toc-item list-group-item list-group-item-action"
          @click="changeCurrentTutorialPage(index)"
        >{{ page.title }}<i class="fa fa-arrow-right"></i></li>
      </ul>
    </div>
    <PanelHeaderWrap
      v-else
      :title="tutorial.pages[currentTutorialPageIndex].title"
      :includeBack="true"
      @backButtonClick="changeCurrentTutorialPage(null)"
      bodyClass="scroll-layout"
    >
      <div v-for="(page, index) in tutorial.pages" :key="'tutorial-page-' + index" v-if="currentTutorialPageIndex === index">
        <Lesson :markdownContent="page.lessonMarkdownContent" />
        <Examples v-if="page.examples !== undefined" :examples="page.examples" />
      </div>
    </PanelHeaderWrap>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { tutorial } from '../../js/tutorial';
import Lesson from './Lesson';
import Examples from './Examples';
import PanelHeaderWrap from '../PanelHeaderWrap';

export default {
  name: 'TutorialPanel',
  components: {
    Lesson,
    Examples,
    PanelHeaderWrap
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

<style scoped>
.tutorial-toc-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tutorial-toc {
  margin: 1.5rem 0;
}
</style>