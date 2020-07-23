<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 my-5  py-5" v-if="addresses.length">
        <div class="table-responsive">
          {{ createBtn(true) }}
          <table id="mytable" class="table table-bordred table-striped">
            <thead>
              <th>Select</th>
              <th>Names</th>
              <th>Country</th>
              <th>Province</th>
              <th>District</th>
              <th>Sector</th>
              <th>Address</th>
              <th>Email</th>
              <th>Zip-Code</th>
              <th>Contacts</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>
            <tbody>
              <tr v-for="(address, index) in addresses" :key="index">
                <td><input type="checkbox" class="checkthis" /></td>
                <td>{{ address.firstName + " " + address.lastName }}</td>
                <td>{{ address.country }}</td>
                <td>{{ address.city }}</td>
                <td>{{ address.district }}</td>
                <td>{{ address.sector }}</td>
                <td>{{ address.addresses }}</td>
                <td>{{ address.email }}</td>
                <td>{{ address.zipCode }}</td>
                <td>{{ address.phoneNumber }}</td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Edit">
                    <button class="btn btn-primary btn-xs">
                      <i class="fas fa-pen"></i>
                    </button>
                  </p>
                </td>
                <td>
                  <p data-placement="top" data-toggle="tooltip" title="Delete">
                    <button class="btn btn-danger btn-xs">
                      <i class="fas fa-trash"></i>
                    </button>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="error-template container" v-else>
        <h1>Oops!</h1>
        <h2>No Address Found {{ createBtn(false) }}</h2>
        <div class="error-actions">
          <button class="btn btn-primary" @click="openForm">
            Create New Address
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
import {
  errorToaster,
  successToaster
} from "../../shared/service/ErrorHandler";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      addresses: [
        {
          country: "Rwanda",
          city: "Kigali",
          district: "Gasabo",
          email: "user@gmail.com",
          phoneNumber: "+923335586757",
          sector: "Remera",
          firstName: "Mugisha",
          lastName: "yannick",
          zipCode: "2344uy43",
          addresses: "CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan"
        }
      ],
      showLoader: false
    };
  },
  computed: {
    ...mapGetters(["resources", "auth"]),
    loggedUser() {
      return this.auth.user;
    },
    Addresses() {
      return this.resources.addresses;
    }
  },
  mounted() {
    console.log(this.Addresses);
    this.getAllAddresses();
  },
  methods: {
    openForm() {
      this.$emit("openAddressForm");
    },
    createBtn(e) {
      this.$emit("createBtn", e);
    },
    getAllAddresses() {
      this.loader(true, {
        context: "fetching all user addresses...",
        area: "app"
      }),
        this.$store
          .dispatch("fetchAllUserAddresses", this.loggedUser)
          .then(res => {
            this.loader(false);
          })
          .catch(err => {
            this.loader(false);
            errorToaster(
              "Error while fetching address",
              "Please wait for while"
            );
          });
    }
  }
};
</script>
<style></style>
