<template>
  <div class="q-pa-xl">
    <div class="row">
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Account</div>
          </q-card-section>

          <q-card-section>
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
                filled
                v-model="firstName"
                label="First name"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                v-model="lastName"
                label="Last name"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                v-model="email"
                label="Email"
                lazy-rules
                :rules="[
                  (val) =>
                    (val !== null && val !== '') || 'Please type your age',
                  (val) => (val > 0 && val < 100) || 'Please type a real age',
                ]"
              />

              <q-input
                filled
                v-model="password"
                label="Password"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                v-model="repeatPassword"
                label="Repeat password"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />
            </q-form>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              icon="save"
              label="Save changes"
              type="submit"
              color="primary"
            />
            <q-btn
              label="Cancel"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },

  methods: {
    updateProfile() {
      console.log("deleted");
    },
  },
};
</script>
