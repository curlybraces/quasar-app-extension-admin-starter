export default {
  model: {
    prop: "entity",
    event: "change",
  },
  props: {
    mode: {
      type: String,
      default: "blank",
    },
    entity: {
      type: Object,
    },
    creatable: {
      type: Boolean,
      default: true,
    },
    removable: {
      type: Boolean,
      default: true,
    },
    editable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      status: "blank",
    };
  },
  computed: {
    readonly() {
      return this.status === "blank" || this.status === "view";
    },
  },
  watch: {
    mode(val) {
      this.status = val;
    },
  },
  mounted() {
    this.status = this.mode;
  },
  methods: {
    create() {
      this.status = "create";
      this.$parent.create && this.$parent.create();
      this.$emit("create");
    },
    edit() {
      this.status = "edit";
      this.$parent.edit && this.$parent.edit();
      this.$emit("edit");
    },
    save() {
      this.status = "view";
      this.$parent.save && this.$parent.save();
      this.$emit("save");
    },
    remove() {
      this.$q
        .dialog({
          title: "确认",
          message: "确定要删除当前对象吗？",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.doRemove();
        });
    },
    doRemove() {
      this.status = "blank";
      this.$parent.remove && this.$parent.remove();
      this.$emit("remove");
    },
  },
};
