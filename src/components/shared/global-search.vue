<template>
  <div class="global-search-modal position-fixed  w-100 h-100">
    <div
      class="header-content-container shadow bg-white position-absolute w-100"
    >
      <div
        class="header position-relative w-100 d-flex border-bottom justify-content-center align-items-center px-3 py-1"
      >
        <div
          class="back-btn bg-white d-flex align-items-center justify-content-center rounded-circle position-absolute cursor-pointer"
          @click="close()"
        >
          <i class="fas fa-times"></i>
        </div>
        <div class="w-60 search-area">
          <div class="d-flex w-100">
            <div class="search-form position-relative bg-grey">
              <input
                type="search"
                placeholder="Search by occasion, color, flower here..."
                class="search-input w-80"
                v-model="searchItem"
              />
              <button class="search-button">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-white position-relative different-content rounded-0 "
        v-if="!searchItem"
      >
        <div class="row mx-0 w-100 justify-content-center px-5 pt-5">
          <ul>
            <p class="font-weight-bold fa-14">Popular Searches</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'all-Birthday' }
                }),
                  close()
              "
            >
              Birthday
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'get-well-flowers' }
                }),
                  close()
              "
            >
              Get Well
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'roses' }
                }),
                  close()
              "
            >
              Roses
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'sunflowers' }
                }),
                  close()
              "
            >
              Sunflowers
            </li>
          </ul>
          <ul>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'funeral-standing-flowers' }
                }),
                  close()
              "
            >
              Sympathy & Funeral
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'thinking-of-you-flowers' }
                }),
                  close()
              "
            >
              Thinking of You
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'lilies' }
                }),
                  close()
              "
            >
              Lilies
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'all-plants' }
                }),
                  close()
              "
            >
              Plants
            </li>
          </ul>
          <ul>
            <p class="font-weight-bold fa-14">Products by Color</p>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'red-flowers' }
                }),
                  close()
              "
            >
              <span
                class="color-profile rounded-circle mr-2"
                :style="{ backgroundColor: colors.red }"
              ></span>
              Red
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'purple-flowers' }
                }),
                  close()
              "
            >
              <span
                class="color-profile rounded-circle mr-2"
                :style="{ backgroundColor: colors.purple }"
              ></span>
              Purple
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'orange-flowers' }
                }),
                  close()
              "
            >
              <span
                class="color-profile rounded-circle mr-2"
                :style="{ backgroundColor: colors.orange }"
              ></span>
              Orange
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'pink-flowers' }
                }),
                  close()
              "
            >
              <span
                class="color-profile rounded-circle mr-2"
                :style="{ backgroundColor: colors.pink }"
              ></span>
              Pink
            </li>
          </ul>
          <ul>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'yellow-flowers' }
                }),
                  close()
              "
            >
              <span
                class="color-profile rounded-circle mr-2"
                :style="{ backgroundColor: colors.yellow }"
              ></span>
              Yellow
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'white-flowers' }
                }),
                  close()
              "
            >
              <span
                class="color-profile rounded-circle border mr-2"
                :style="{ backgroundColor: colors.white }"
              ></span>
              White
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'blue-flowers' }
                }),
                  close()
              "
            >
              <span
                class="color-profile rounded-circle mr-2"
                :style="{ backgroundColor: colors.blue }"
              ></span>
              Blue
            </li>
            <li
              @click="
                $router.push({
                  name: 'Shop the SU-Flower',
                  params: { params: 'multi-color-flowers' }
                }),
                  close()
              "
            >
              <span
                class="color-profile rounded-circle mr-2"
                :style="{ backgroundColor: colors.multi }"
              ></span>
              Multi
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "global-search",
  data() {
    return {
      searchItem: null,
      colors: {
        multi: "rgb(25,50,25)",
        yellow: "rgb(250, 183, 42)",
        pink: "rgb(255, 177, 232)",
        orange: "rgb(255 ,148, 43)",
        purple: "rgb(193, 51, 205)",
        red: "rgb(250, 79, 65)",
        blue: "rgb(79, 15, 235)",
        white: "rgb(245,241,241)"
      }
    };
  },
  methods: {
    close() {
      this.$store.dispatch("setResources", [
        "trigger",
        {
          triggerSearchFormModal: false
        }
      ]);
    }
  },
  mounted() {}
};
</script>

<style scoped lang="scss">
.global-search-modal {
  left: 0;
  right: 0;
  top: 0;
  height: fit-content;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 999999;
  background: rgba(0, 0, 1, 0.5);
  font-family: "Roboto", sans-serif;
  .header-content-container {
    .header {
      height: 55px;
      .back-btn {
        top: 35%;
        right: 20%;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
  .search-form {
    width: 85%;
    height: 40px;
    border-radius: 40px;
    transition: all 0.3s ease;
    &.focus {
      border: 1px solid #d0d0d0;
      box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    }
  }
  .search-input {
    position: absolute;
    top: 12px;
    left: 25px;
    font-size: 80%;
    background: none;
    color: #5a6674;
    width: 195px;
    height: 20px;
    border: none;
    appearance: none;
    outline: none;
    &::-webkit-search-cancel-button {
      appearance: none;
    }
  }
  .search-button {
    position: absolute;
    top: 12px;
    right: 20px;
    font-size: 80%;
    height: 15px;
    width: 15px;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    outline: none !important;
    cursor: pointer;

    .fa-search {
      color: #5a6674;
      opacity: 0.7;
    }
  }
  .different-content {
    overflow: hidden;
    transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    min-height: 10rem;
    max-height: inherit;
    opacity: 1;
    box-shadow: 0px 9px 12px -6px rgb(108, 117, 125);
    z-index: 1000;
    ul {
      &:nth-child(2) {
        padding: 2.3rem 2.5rem 2rem 2.5rem;
      }
      &:nth-child(4) {
        padding: 2.3rem 0 0 2.5rem;
      }
      li {
        display: flex;
        list-style: none;
        font-family: "Roboto", sans-serif;
        font-size: 15px;
        padding-bottom: 1rem;
        cursor: pointer;
        &:hover {
          color: rgba(72, 56, 181, 0.79);
        }
      }
    }
  }
  .color-profile {
    display: block;
    width: 18px;
    height: 18px;
  }
}
@media screen and (max-width: 740px) {
  .global-search-modal {
    .header-content-container {
      .header {
        .back-btn {
          right: 10% !important;
        }
      }
      .search-area {
        width: 90% !important;
      }
    }
    .search-form {
      width: 90% !important;
    }
    .search-input{
      left: 2% !important;
      width: 90% !important;
      font-size: 75% !important;
    }
    .search-button{
      right: 3% !important;
      font-size: 75% !important;
    }
    .different-content {
      div{
        padding-right: 0 !important;
        padding-left: 0 !important;
        justify-content: space-around !important;

        ul {
          padding: 0 1.5rem 2rem 1.5rem !important;

          p {
            font-size: 80% !important;
          }

          li {
            font-size: 75% !important;
          }
        }
      }
    }
  }
}
</style>
