export const propsMixin = {
  props: {
    type: [Number, String],
    item: {
      type: Object,
      default: () => ({})
    }
  }
}