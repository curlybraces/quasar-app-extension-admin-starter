export default {
  model: {
    prop: "selected",
    event: "change",
  },
  props: {
    requestFn: {
      type: Function,
    },
    creatable: {
      type: Boolean,
      default: true,
    },
    removable: {
      type: Boolean,
      default: true,
    },
    createFn: {
      type: Function,
    },
    saveFn: {
      type: Function,
    },
    removeFun: {
      type: Function,
    },
    rowKey: {
      type: String,
      default: "id",
    },
    title: {
      type: String,
    },
    data: {
      type: Array,
    },
    selected: {
      type: Array,
      default() {
        return [];
      },
    },
    selection: {
      type: String,
    },
    columns: {
      type: Array,
    },
    excludes: {
      type: Array,
    },
    actionColumn: {
      type: String,
      default: "actions",
    },
    rowsPerPage: {
      type: Number,
      default: 50,
    },
    stickyFirst: {
      type: Boolean,
      default: false,
    },
    // sticky last column
    stickyLast: {
      type: Boolean,
      default: false,
    },
    rowsPerPageOptions: {
      type: Array,
      default() {
        return [50, 100, 200, 500];
      },
    },
  },
};
