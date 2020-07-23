export default {
  auth: (state) => state.auth,
  cartProducts: (state) => state.cartProducts,
  orderProducts: (state) => state.orderProducts,
  LoggedUser: (state) => !!state.auth.token,
  route: (state) => state.router.status,
  view: (state) => state.accessories.view,
  resources: (state) => state.resources,
  accessories: state => state.accessories,
  loading: (state) => state.accessories.loading,
  alertModal: (state) => state.accessories.modalAlert,
};
