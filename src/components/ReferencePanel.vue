<template>
  <div v-if="currentTag === null">
    <div v-for="(category, index) of categorizedTags" :key="'reference-tag-category-' + index">
      <p class="lead">{{ category.name }}</p>
      <p><small>{{ category.description}}</small></p>
      <ul class="list-group">
        <li
          v-for="tag of category.tags"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          :key="'reference-tag-category-tag-' + tag"
          @click="currentTag = tag"
        >
          <div>
            <p>{{ tag }} <TagLevelBadge :level="tags[tag].level" /></p>
            <p>{{ tags[tag].description }}</p>
          </div>
          <i class="fa fa-arrow-right"></i>
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="v-layout">
    <PanelHeaderWrap :title="currentTag" includeBack @backButtonClick="currentTag = null"
    bodyClass="v-layout scroll-layout">
      <p>{{ tags[currentTag].extendedDescription }}</p>
      <code>{{ tags[currentTag].codeSample }}</code>
    </PanelHeaderWrap>
  </div>
</template>

<script>
import { tags, categorizedTags } from '../js/help';
import TagLevelBadge from './TagLevelBadge';
import PanelHeaderWrap from './PanelHeaderWrap';

export default {
  name: 'ReferencePanel',
  components: {
    TagLevelBadge,
    PanelHeaderWrap
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
