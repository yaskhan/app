<template>
  <component
    :is="componentName"
    :layout-name="viewType"
    :primary-key-field="primaryKeyField"
    :fields="fields"
    :items="items"
    :view-options="viewOptions"
    :view-query="viewQuery"
    :loading="loading"
    :lazy-loading="lazyLoading"
    :selection="selection"
    :link="link"
    :sort-field="sortField"
    class="v-layout"
    @query="$emit('query', $event)"
    @select="$emit('select', $event)"
    @options="$emit('options', $event)"
    @next-page="$emit('next-page', $event)"
    @input="$emit('input', $event)"
  />
</template>

<script>
import Vue from "vue";
import loadExtension from "../../../../helpers/load-extension";
import componentExists from "../../../../helpers/component-exists";
import VExtLayoutFallback from "./layout-fallback.vue";
import VExtLayoutLoading from "./layout-loading.vue";

export default {
  name: "v-layout",
  props: {
    fields: {
      type: Object,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    viewType: {
      type: String,
      required: true
    },
    viewOptions: {
      type: Object,
      default: () => ({})
    },
    viewQuery: {
      type: Object,
      default: () => ({})
    },
    selection: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    lazyLoading: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: null
    },
    sortField: {
      type: String,
      default: null
    }
  },
  computed: {
    layouts() {
      return this.$store.state.extensions.layouts;
    },
    layout() {
      return this.layouts && this.layouts[this.viewType];
    },
    componentName() {
      return `layout-${this.viewType}`;
    },
    primaryKeyField() {
      const fieldInfo = this.$lodash.filter(
        this.fields,
        info => info.primary_key === true
      )[0];

      return fieldInfo && fieldInfo.field;
    }
  },
  watch: {
    viewType() {
      this.registerLayout();
    }
  },
  created() {
    this.registerLayout();
  },
  methods: {
    /**
     * Register the extension as component (if it hasn't been registered before yet)
     */
    registerLayout() {
      // If component already exists, do nothing
      if (componentExists(this.componentName)) return;

      // If the extension isn't known by the API (e.g. it's not in the store), register it with the
      //   fallback immediately
      if (!this.layout) {
        Vue.component(this.componentName, VExtLayoutFallback);
        return;
      }

      const filePath = `${this.$api.url}/${this.layout.path.replace(
        "meta.json",
        "layout.js"
      )}`;

      Vue.component(this.componentName, () => ({
        component: loadExtension(filePath),
        error: VExtLayoutFallback,
        loading: VExtLayoutLoading
      }));
    }
  }
};
</script>
