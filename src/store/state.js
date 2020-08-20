export default {
  auth: {
    token: null,
    user: {}
  },
  loggedUser: {},
  cartProducts: [],
  orderProducts: [],
  router: {
    status: ""
  },
  pages: {
    productEdit: false
  },
  resources: {
    totalPrice: "",
    users: [],
    user: {},
    addresses: [],
    address: {},
    products: [],
    product: {},
    comments: [],
    comment: {},
    orders: [],
    order: {},
    categories: [],
    category: {},
    tags: [],
    tag: {},
    gifts: [],
    gift: {},
    trigger: {}
  },
  accessories: {
    view: null,
    details: null,
    loading: {
      area: null,
      context: null,
      bg: "",
      textColor: ""
    },
    modalAlert: {
      title: null,
      message: null,
      action: () => {},
      state: ""
    }
  }
};
