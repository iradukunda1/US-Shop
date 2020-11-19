<template>
  <div class="logo">
    <div class="container-fluid px-4 py-5">
      <div class="row mb-3">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Manage Logo Images</h4>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="row mb-2">
                <div class="col-lg-8">
                  <i class="fa fa-bell"></i>
                  <span class="pl-2">LOGO</span>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table table-centered table-bordered mb-0">
                  <thead class="thead-light">
                    <tr>
                      <th><i class="fa fa-briefcase pr-2"></i>S.no</th>
                      <th><i class="fa fa-user pr-2"></i>Logo Title</th>
                      <th><i class="fa fa-user pr-2"></i>Logo Image</th>
                      <th><i class="fa fa-user pr-2"></i>Favicon Image</th>
                      <th><i class="fe-shopping-cart pr-2"></i>Disabled</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(logo, index) in logos" :key="index">
                      <td>
                        <a class="text-body font-weight-bold"></a
                        >{{ index + 1 }}.
                      </td>
                      <td>
                        <small class="text-muted">{{ logo.title }}</small>
                      </td>
                      <td>
                        <a><img :src="logo.image" alt="logo" height="50"/></a>
                      </td>
                      <td>
                        <span class="badge"
                          ><img :src="logo.favicon" alt="favicon" class="h-50px"
                        /></span>
                      </td>
                      <td>{{ logo.disabled }}</td>
                      <td>
                        <span title="edit" class="pr-2 cursor-pointer"
                          ><i class="fa fa-edit"></i
                        ></span>
                        <span class="cursor-pointer" title="delete">
                          <i class="fa fa-trash-alt"></i
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logo-manage',
  data () {
    return {
      logos: [
        {
          title: 'SU-Bouquet gold',
          image: '/img/logos/2gold-logo.png',
          disabled: '1',
          favicon: '/img/icons/tsapal.ico'
        },
        {
          title: 'US-Bouquet black',
          image: '/img/logos/black-logo.png',
          disabled: '0',
          favicon: '/img/icons/tsapal.ico'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
