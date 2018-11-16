<template>
  <div v-if="currentTag === null">
    <div class="alert alert-primary">
      This reference assumes that you have completed the tutorial. If you haven't completed the tutorial, you might get confused.
    </div>
    <div v-for="(category, index) of categorizedTags" :key="'reference-tag-category-' + index">
      <h2>{{ category.name }}</h2>
      <p class="lead">{{ category.description }}</p>
      <Examples v-if="category.examples !== undefined" :examples="category.examples" />
      <ul class="list-group">
        <li
          v-for="tag of category.tags"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          :key="'reference-tag-category-tag-' + tag"
          @click="currentTag = tag"
        >
          <div>
            <p class="lead">{{ tag }}<span v-if="tags[tag].usedWith !== undefined" class="badge badge-primary">{{ 'Used with ' + tags[tag].usedWith + ' tag' }}</span></p>
            <p>{{ tags[tag].description }}</p>
          </div>
          <i class="fa fa-arrow-right"></i>
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="v-layout">
    <PanelHeaderWrap :title="currentTag" includeBack @backButtonClick="currentTag = null"
    bodyClass="scroll-layout">
      <ReferenceTag :tag="currentTag" />
    </PanelHeaderWrap>
  </div>
</template>

<script>
import { tags, categorizedTags } from '../js/help';
import PanelHeaderWrap from './PanelHeaderWrap';
import Examples from './Examples';
import ReferenceTag from './ReferenceTag';

export default {
  name: 'ReferencePanel',
  components: {
    PanelHeaderWrap,
    Examples,
    ReferenceTag
  },
  data() {
    return {
      tags,
      categorizedTags,
      currentTag: null
    };
  }
};
</script>
