<template>
  <div class="slider">
    <div class="container-fluid px-4 py-5">
      <div class="row mb-3">
        <div class="col-12">
          <div class="page-title-box">
            <h4 class="page-title">Manage Slider Images</h4>
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
                  <span class="pl-2">Slider Image</span>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table table-centered mb-0 table-striped">
                  <thead class="thead-light">
                    <tr>
                      <th><i class="fa fa-briefcase pr-2"></i>select</th>
                      <th><i class="fa fa-briefcase pr-2"></i>S.no</th>
                      <th><i class="fa fa-user pr-2"></i>Slider Title</th>
                      <th><i class="fa fa-user pr-2"></i>Slider Image</th>
                      <th><i class="fe-shopping-cart pr-2"></i>Disabled</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(slide, index) in sliders" :key="index">
                      <td><input width="20px" type="checkbox" /></td>
                      <td>
                        <a class="text-body font-weight-bold"></a
                        >{{ index + 1 }}
                      </td>
                      <td>
                        <small class="text-muted">{{ slide.title }}</small>
                      </td>
                      <td>
                        <a
                          ><img :src="slide.picture" alt="logo" height="50"
                        /></a>
                      </td>
                      <td>{{ (slide.disabled = "true" ? "0" : "1") }}</td>
                      <td>
                        <span style="cursor: pointer" class="mx-2" title="Edit"
                          ><i class="fa fa-edit "></i
                        ></span>
                        <span style="cursor: pointer" title="delete">
                          <i class="fa fa-trash-alt"></i
                        ></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="px-3 pb-2 d-flex">
              <p class="mb-0 ml-auto">
                <span>
                  showing 1 to 3 of {{ sliders.length }} slider per page
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider-image-manage',
  data () {
    return {
      sliders: [
        {
          title: 'shoe',
          picture: '/img/tsapal4.jpg',
          disabled: true
        },
        {
          title: 'Masayi',
          picture: '/img/tsapal2.jpg',
          disabled: true
        },
        {
          title: 'Slipper',
          picture: '/img/3.jpg',
          disabled: true
        }
      ]
    }
  }
}
</script>

<style scoped></style>
