<template>
  <div class="sellers">
    <div class="container-fluid px-4 py-5">
      <div class="row">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Sellers</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="mb-2 d-flex">
                <div class="d-block p-1">
                  <form class="form-inline">
                    <div class="form-group mb-2">
                      <input
                        type="search"
                        class="form-control"
                        placeholder="Search..."
                      />
                    </div>
                  </form>
                </div>
                <div class="ml-auto">
                  <div class="text-md-right">
                    <button type="button" class="btn btn-success mb-2 mr-2">
                      <i class="fa fa-plus mr-1"></i>
                      Add Sellers
                    </button>
                    <button type="button" class="btn btn-primary mb-2 mr-1">
                      <i class="fa fa-gear"></i>
                      Export
                    </button>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <table
                  class="table table-centered table-borderless  table-hover mb-0"
                >
                  <thead class="thead-light">
                    <tr style="width: max-content">
                      <th >No.</th>
                      <th>Profile</th>
                      <th>Name</th>
                      <th>Store Name</th>
                      <th>Products</th>
                      <th>Wallet Balance</th>
                      <th>Create Date</th>
                      <th>Revenue</th>
                      <th >Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(sell, index) in sellers"
                      :key="index"
                      class="seller-table border-top"
                    >
                      <td>{{ index + 1 }} .</td>
                      <td class="table-user">
                        <img
                          :src="sell.profile"
                          alt="sell-profile"
                          class="mr-2 rounded-circle"
                          height="30"
                          width="30"
                        />
                      </td>
                      <td>
                        <router-link
                          to="#"
                          class="text-body font-weight-semibold"
                          >{{ sell.seller }}
                        </router-link>
                      </td>
                      <td>
                        {{ sell.storeName }}
                      </td>
                      <td>
                        <span class="font-weight-semibold">{{
                          sell.products
                        }}</span>
                      </td>
                      <td>
                        {{ sell.walletBalance }}
                      </td>
                      <td>
                        {{ sell.createdDate }}
                      </td>
                      <td>
                        {{ sell.revenue }}
                      </td>

                      <td>
                        <span class="pl-2 mr-2" title="edit">
                          <i class="fa fa-edit"></i
                        ></span>
                        <span class="action-icon" title="delete">
                          <i class="fa fa-trash-alt"></i
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
              <div class="ml-auto">
                  <div class="col-12 ">
                      <nav aria-label="...">
                          <ul class="pagination">
                              <li class="page-item disabled">
                                  <a class="page-link border-0" href="#" tabindex="-1"><i class="fa fa fa-angle-double-left"></i></a>
                              </li>
                              <li class="page-item  active">
                                  <a class="page-link rounded-circle mx-2" href="#"> <span class="sr-only">(current)</span>1</a>
                              </li>
                              <li class="page-item">
                                  <a class="page-link rounded-circle mx-2" href="#">2</a>
                              </li>
                              <li class="page-item "><a class="page-link rounded-circle mx-2" href="#">3</a></li>
                              <li class="page-item">
                                  <a class="page-link border-0" href="#"><i class="fa fa fa-angle-double-right"></i></a>
                              </li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
export default {
  name: 'all sellers',
  data () {
    return {
      sellers: [
        {
          profile: '/assets/images/users/user-10.jpg',
          seller: 'Shema Fred',
          storeName: 'Homovee',
          products: '8',
          walletBalance: '12,000FRW',
          createdDate: '7/7/2019',
          revenue: '100rfw'
        },
        {
          profile: '/assets/images/users/user-8.jpg',
          seller: 'Sheja anni',
          storeName: 'Execucy',
          products: '12',
          walletBalance: '122,000FRW',
          createdDate: '09/12/2019',
          revenue: '1000rfw'
        },
        {
          profile: '/assets/images/users/user-5.jpg',
          seller: 'Kathryn S. Collier',
          storeName: 'Epiloo',
          products: '50',
          walletBalance: '122,000FRW',
          createdDate: '06/30/2019',
          revenue: '1010rfw'
        },
        {
          profile: '/assets/images/users/user-3.jpg',
          seller: 'Mucyo patrick',
          storeName: 'Symic',
          products: '235',
          walletBalance: '352,000FRW',
          createdDate: '09/08/2019',
          revenue: '5000rfw'
        },
        {
          profile: '/assets/images/users/user-6.jpg',
          seller: 'Shema allain',
          storeName: 'Insulore',
          products: '435',
          walletBalance: '450,000FRW',
          createdDate: '09/05/2019',
          revenue: '3000rfw'
        },
        {
          profile: '/assets/images/users/user-5.jpg',
          seller: 'Sheja cedric',
          storeName: 'Susadmin',
          products: '28',
          walletBalance: '15,000FRW',
          createdDate: '08/02/2019',
          revenue: '300rfw'
        },
        {
          profile: '/assets/images/users/user-4.jpg',
          seller: 'Mucyo emmy',
          storeName: 'Hyperill',
          products: '77',
          walletBalance: '45,000FRW',
          createdDate: '08/02/2019',
          revenue: '4500rfw'
        },
        {
          profile: '/assets/images/users/user-2.jpg',
          seller: 'Sheja eddy',
          storeName: 'Vicedel',
          products: '50',
          walletBalance: '405,000FRW',
          createdDate: '05/06/2019',
          revenue: '40500rfw'
        },
        {
          profile: '/assets/images/users/user-1.jpg',
          seller: 'Shema fred',
          storeName: 'Circumous',
          products: '50',
          walletBalance: '405,000FRW',
          createdDate: '05/06/2019',
          revenue: '40500rfw'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
