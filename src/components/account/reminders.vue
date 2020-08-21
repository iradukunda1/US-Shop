<template>
  <div class="reminders-component w-100">
    <div class="reminder-header">
      <p class="reminder-title mb-0 font-weight-bold fa-15">Reminders</p>
      <p class="fa-14  border-bottom pb-3">
        Save your special occasion details below and we’ll send you a reminder
        email.
      </p>
    </div>
    <div class="reminder-content-container">
      <div class="reminder-context text-center pb-5" v-if="!addReminder">
        <p class="hand-hold-flower d-block mx-auto"></p>
        <p class="fa-14 text-black-50 mb-0">
          You don’t have any reminders saved to your account.
        </p>
        <div
          class="add-reminder p-3 bg-white border-2px hover-button rounded-0 my-4 text-primary font-weight-bold fa-14 btn"
          @click="addReminder = !addReminder"
        >
          ADD NEW REMINDER
        </div>
      </div>
      <div class="reminder-form" v-if="addReminder">
        <form @submit.prevent class="w-40 create-reminder-form">
          <div class="w-100 mb-2 occasion-area">
            <label class="fa-12 fa">OCCASION</label>
            <div class="h-50px occasion">
              <b-form-select
                id="occasion"
                v-model="occasion"
                class="form-control cursor-pointer rounded-0  h-100"
                :options="occasions"
              >
              </b-form-select>
            </div>
          </div>
          <div class="w-100 mb-2 occasion-date-area">
            <label class="fa-12 fa">OCCASION DATE</label>
            <div class="h-50px  occasion-date">
              <input
                placeholder="Occasion Date"
                type="date"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="w-100 mb-2 name-area">
            <label class="fa-12 fa"> NAME </label>
            <div class="h-50px  reminder-name">
              <input
                placeholder="Name"
                type="text"
                class="form-control  rounded-0  h-100"
              />
            </div>
          </div>
          <div class="w-100 mb-2 relationship-area">
            <label class="fa-12 fa">RELATIONSHIP</label>
            <div class=" h-50px relationship">
              <b-form-select
                id="relationship"
                v-model="relationship"
                class="form-control cursor-pointer rounded-0  h-100"
                :options="relationships"
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
          <div class="row mx-0 button-collection justify-content-between my-4">
            <div
              class="fa-14 action-button text-center font-weight-bold text-white bg-button rounded-0 btn py-2"
            >
              SAVE REMINDER
            </div>
            <div
              class="fa-14 border action-button rounded-0 hover-button text-center text-primary font-weight-bold rounded-0 btn py-2 px-4"
              @click="addReminder = !addReminder"
            >
              CANCEL
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "reminders",
  data() {
    return {
      addReminder: false,
      occasion: null,
      relationship: null,
      occasions: [
        { value: null, text: "Please select Occasion", disabled: true },
        { value: "bady", text: "Baby" },
        { value: "anniversary", text: "Anniversary" },
        { value: "birthday", text: "BirthDay" },
        { value: "business", text: "Business & Corporation Gift" },
        { value: "cheer", text: "Cheer Someone Up" },
        { value: "conguratulation", text: "Conguratulation" },
        { value: "engangement", text: "Engangement" },
        { value: "For My Self", text: "For My Self" },
        { value: "funeral", text: "Funeral" },
        { value: "other", text: "other" },
      ],
      relationships: [
        { value: null, text: "Relationship (optional)", disabled: true },
        { value: "self", text: "self" },
        { value: "Father", text: "Father" },
        { value: "Mother", text: "Mother" },
        { value: "Wife", text: "Wife" },
        { value: "Husband", text: "Husband" },
        { value: "Partner", text: "Partner" },
        { value: "Sister", text: "Sister" },
        { value: "Brother", text: "Brother" },
        { value: "Daughter", text: "Daughter" },
        { value: "Son", text: "Son" },
        { value: "BoyFreind", text: "BoyFreind" },
        { value: "Grandson", text: "Grandson" },
        { value: "GrilFriend", text: "GrilFriend" },
        { value: "other", text: "other" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.reminders-component {
  .reminder-content-container {
    .reminder-context {
      .hand-hold-flower {
        background-image: url("/img/hand-hold-flower.png");
        width: 60px;
        height: 60px;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .reminders-component {
    .create-reminder-form {
      width: 55% !important;
    }
  }
}
@media screen and (max-width: 425px) {
  .reminders-component {
  }
}
@media screen and( max-width: 320px) {
  .reminders-component {
  }
}
</style>
