<template>
  <div class="gift-detail mx-4  position-relative">
    <div class="back-button">
      <i
        class="fas fa-arrow-left fa-16 cursor-pointer my-4"
        @click="$emit('close')"
      ></i>
    </div>
    <span
      class="gift-profile d-block m-auto"
      :style="{
        backgroundImage: 'url(' + savedGift.images_urls + ')'
      }"
    ></span>
    <div class="gift-detail-desc pt-5 mt-4">
      <p class="header-title fa-15 fa font-weight-bold">{{ savedGift.name }}</p>
      <p class="gift-detail-context fa-14">{{ savedGift.description }}</p>
      <p class="send-to"><span class="fa-15">To:</span>{{ friend.relation }}</p>
      <form @submit.prevent>
        <div class="w-100 mb-2 relationship-area">
          <label class="fa-12 fa">RELATIONSHIP</label>
          <div class=" h-50px relationship">
            <b-form-select
              id="relationship"
              v-model="friend.relation"
              class="form-control cursor-pointer rounded-0  h-100"
              :options="relationShips"
            >
            </b-form-select>
          </div>
        </div>
        <div class="w-100 mb-2 notes-area">
          <label class="fa-12 fa"> NOTES </label>
          <div class="h-90px  notes-text">
            <textarea
              placeholder="Notes (optional)"
              type="text"
              class="form-control  rounded-0  h-100"
            />
          </div>
        </div>
      </form>
    </div>
    <div
      class="add-to-gift py-2 my-5 bg-button text-white rounded-0 w-100 font-weight-bold fa-14 btn"
      @click="$emit('close')"
    >
      ADD TO GIFT
    </div>
  </div>
</template>

<script>
export default {
  name: "gift-detail",
  props: ["savedGift"],
  data() {
    return {
      friend: {
        relation: "Friend",
        context: ""
      },
      relationShips: [
        { value: "Friend", text: "Relationship (optional)", disabled: true },
        { value: "Self", text: "self" },
        { value: "Father", text: "Father" },
        { value: "Mother", text: "Mother" },
        { value: "Wife", text: "Wife" },
        { value: "Husband", text: "Husband" },
        { value: "Partner", text: "Partner" },
        { value: "Sister", text: "Sister" },
        { value: "Brother", text: "Brother" },
        { value: "Daughter", text: "Daughter" },
        { value: "Son", text: "Son" },
        { value: "Boy Friend", text: "BoyFreind" },
        { value: "Grandson", text: "Grandson" },
        { value: "Girl Friend", text: "GrilFriend" }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.gift-detail {
  .gift-profile {
    width: 160px;
    height: 160px;
    background-color: #fcbebe;
    background-size: cover;
  }
}
</style>
