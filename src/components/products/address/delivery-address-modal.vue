<template>
  <div class="delivery-address-modal  w-100 h-100 d-block justify-content-center"
  >
    <div class="delivery-address-modal-container p-3 position-relative">
      <b-row class="delivery-address-header mx-0 w-100 p-2">
        <p class="form-title p-2 mb-0 mt-5 h4">Verify Your Delivery Address</p>
        <span class="px-2 d-flex ml-auto close-list" @click="close()"
          ><i class="fas fa-times cursor-pointer fa-15"></i
        ></span>
        <p
          class="address-header-text text-justify fa-16 font-weight-bold text-black-50 pl-2 mr-4"
        >
          To avoid confusion with delivery your order we'd like to validate the
          delivery address you entered .
        </p>
      </b-row>
      <div class="delivery-address-body w-100 p-2">
        <div class="delivery-address-list rounded border border-right-0">
          <div
            class="delivery-address-lists  pl-2 mb-3"
            v-for="(address, index) in addresses"
            :key="index"
          >
            <p class="fa-14 font-weight-bold mb-0">{{ address.verified }}</p>
            <div class="d-flex">
              <b-form-radio class="cursor-pointer"></b-form-radio>
              <div class="location-address ml-2">
                <p class="mb-0 fa-14">{{ address.street }}</p>
                <p class="mb-0 fa-14">{{ address.address }}</p>
                <p class="mb-0 fa-14">
                  {{ address.city }},{{ address.state }},{{ address.zip_code }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row mx-0 w-100 button-collection justify-content-between mt-2"
        >
          <div
            class="fa-14 action-button text-center font-weight-bold fa text-white bg-button rounded-0 mx-2 btn py-2 px-4"
            @click="continuePayment()"
          >
            CONTINUE
          </div>
          <div
            class="fa-14 border action-button rounded text-center text-primary font-weight-bold rounded-0 mx-2 btn py-2 px-4"
            @click="close()"
          >
            CANCEL
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "delivery-address-modal",
  data() {
    return {
      addresses: [
        {
          verified: "Use The Unverified Address",
          street: "KK-753",
          address: "Lando",
          city: "Kigali",
          state: "NY",
          zip_code: "314217"
        },
        {
          verified: "Use The Verified Address",
          street: "KK-74",
          address: "Sonatube",
          city: "New York",
          state: "NY",
          zip_code: "12345"
        },
        {
          verified: "Use The Unverified Address",
          street: "KK-125",
          address: "Gishushu",
          city: "Kigali",
          state: "NY",
          zip_code: "12345"
        }
      ]
    };
  },
  methods: {
    continuePayment() {
      this.$router.push({ name: "Purchase", params: { params: "payment" } });
      this.close();
    },
    close() {
      this.$store.dispatch("setResources", [
        "trigger",
        { triggerDeliveryAddress: false }
      ]);
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.delivery-address-modal {
  position: fixed;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.32);
  .delivery-address-modal-container {
    background-color: white;
    margin: 4rem auto;
    border: 1px solid black;
    width: 55%;
    height: 75%;
    border-radius: 6px;
    box-shadow: -1px 1px 19px 4px rgba(6, 6, 6, 0.28);
  }
  .delivery-address-list {
    height: calc(100vh - 430px);
    overflow-y: overlay;
  }
  .delivery-address-list::-webkit-scrollbar {
    width: 9px;
    background-color: transparent;
  }
  .delivery-address-list::-webkit-scrollbar-thumb {
    background-color: rgba(6, 6, 7, 0.74);
    border-radius: 35px;
  }
  .delivery-address-list::-webkit-scrollbar-track {
    background-color: transparent;
  }
}

@media screen and (max-width: 768px) {
  .delivery-address-modal {
    .delivery-address-modal-container {
      width: 75% !important;
    }
  }
}
@media screen and (max-width: 425px) {
  .delivery-address-modal {
    .delivery-address-modal-container {
      width: 85% !important;
      height: 80% !important;
      .delivery-address-header {
        .form-title {
          width: 90% !important;
          font-size: 1.4rem !important;
          margin-top: 2rem !important;
          padding: 0.5rem 0 !important;
        }
        .close-list {
          width: 10%;
          padding: 0.5rem 0 !important;
        }
        .address-header-text {
          padding: 0.5rem !important;
          margin: 0 !important;
        }
      }
    }
  }
}
@media screen and(max-width: 375px) {
  .delivery-address-modal {
    .delivery-address-modal-container {
      width: 80% !important;
      height: 70% !important;
      .delivery-address-header {
        .form-title {
          width: 90% !important;
          font-size: 100% !important;
          padding: 0.5rem 0 !important;
          font-weight: 600;
        }
        .close-list {
          padding: 0.5rem 0 !important;
          i {
            font-size: 0.91rem !important;
          }
        }
        .address-header-text {
          padding: 0.8rem 0 !important;
          margin: 0 !important;
          font-size: 73% !important;
        }
      }
      .action-button {
        padding: 0.4rem !important;
        font-size: 65% !important;
      }
    }
  }
}
@media screen and( max-width: 320px) {
  .delivery-address-modal {
  }
}
</style>
