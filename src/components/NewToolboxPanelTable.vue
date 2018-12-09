<!-- a panel that contains sample HTML elements to add to the code -->
<template>
  <CollapsiblePanel panelName="toolbox">
    <b-tabs>
      <b-tab title="Glossary">

        <b-row>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Filter" class="mb-0">
              <b-input-group>
                <b-form-input v-model="filter" placeholder="Type to Search" />
                <b-input-group-append>
                  <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Sort" class="mb-0">
              <b-input-group>
                <b-form-select v-model="sortBy" :options="sortOptions">
                  <option slot="first" :value="null">-- none --</option>
                </b-form-select>
                <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                  <option :value="false">Asc</option>
                  <option :value="true">Desc</option>
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Sort direction" class="mb-0">
              <b-input-group>
                <b-form-select v-model="sortDirection" slot="append">
                  <option value="asc">Asc</option>
                  <option value="desc">Desc</option>
                  <option value="last">Last</option>
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="my-1">
            <b-form-group horizontal label="Per page" class="mb-0">
              <b-form-select :options="pageOptions" v-model="perPage" />
            </b-form-group>
          </b-col>
        </b-row>

        <!-- Main table element -->
        <b-table show-empty
                 stacked="md"
                 :items="items"
                 :fields="fields"
                 :current-page="currentPage"
                 :per-page="perPage"
                 :filter="filter"
                 :sort-by.sync="sortBy"
                 :sort-desc.sync="sortDesc"
                 :sort-direction="sortDirection"
                 @filtered="onFiltered"
        >
          <template slot="name" slot-scope="row">{{row.value.first}}-{{row.value.last}}</template>

          <template slot="row-details" slot-scope="row">
            <b-card>
              <ul>
                <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
              </ul>
            </b-card>
          </template>
        </b-table>

        <b-row>
          <b-col md="6" class="my-1">
            <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
          </b-col>
        </b-row>

        <!-- Info modal -->
        <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
          <pre>{{ modalInfo.content }}</pre>
        </b-modal>
      </b-tab>
    </b-tabs>
  </CollapsiblePanel>
</template>

<script>

import { mapState, mapActions } from 'vuex';

import CollapsiblePanel from './CollapsiblePanel';
import { tags, tutorial } from '../help/help';

const items = [
  { isActive: true, id: 40, name: { first: 'AA', last: '' }},
  { isActive: false, id: 21, name: { first: 'BB', last: '' } },
  {
    isActive: false,
    id: 9,
    name: { first: 'CC', last: '' },
      //values: active, success, info, warning, danger
    _rowVariant: 'info'
  },
    {
        isActive: true,
        id: 87,
        name: { first: 'DD', last: '' },
        //values: active, success, info, warning, danger
        _cellVariants: { id: 'danger', name: 'success'}
    },
];

export default {
  name: 'ToolboxPanel',
  props: {
    name: {
      title: 'Toolbox',
    }
  },
  components: {
    CollapsiblePanel
  },
  methods: {
    ...mapActions([
      'updateCode'
    ]),
      resetModal () {
          this.modalInfo = '';
      },
      onFiltered (filteredItems) {
          this.totalRows = filteredItems.length;
          this.currentPage = 1
      }
  },
  data() {
    return {
      tags,
      tutorial,
      items: items,
        fields: [
          { key: 'name', label: 'name', sortable: true, sortDirection: 'desc' },
          { key: 'id', label: 'ID', sortable: true, 'class': 'text-center' },
      ],
        currentPage: 1,
        perPage: 5,
        totalRows: items.length,
        pageOptions: [ 5, 10, 15 ],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        modalInfo: '',
    };
  },
  computed: {
    ...mapState([
      'code'
    ]),
      sortOptions () {
        return this.fields
          .filter(f => f.sortable)
          .map(f => { return { text: f.label, value: f.key } })
      }
  }
};
</script>
