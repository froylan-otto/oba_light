<template>
  <div class="q-pa-xl">
    <div class="row">
      <div class="col-12">
        <q-card class="my-card">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Settings</div>
          </q-card-section>

          <q-card-section>
            <q-card>
              <q-tabs
                v-model="tab"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
              >
                <q-tab name="general" label="General" />
                <q-tab name="company" label="Company" />
                <q-tab name="billing" label="Billing" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="general">
                  <div class="text-h6">General Settings</div>

                  <q-input
                    outlined
                    v-model="text"
                    label="Company name"
                    class="q-pt-md"
                  />

                  <q-input
                    outlined
                    v-model="text"
                    label="Label name"
                    class="q-pt-md"
                  />
                  <q-input
                    outlined
                    v-model="text"
                    label="Web site"
                    class="q-pt-md"
                  />
                  <q-input
                    outlined
                    v-model="text"
                    label="Contact Email"
                    class="q-pt-md q-pb-md"
                  />

                  <q-btn color="primary" label="Save" />
                </q-tab-panel>

                <q-tab-panel name="company">
                  <div class="text-h6">Company Settings</div>

                  <q-input
                    outlined
                    v-model="text"
                    label="Country"
                    class="q-pt-md"
                  />

                  <q-input
                    outlined
                    v-model="text"
                    label="Street No."
                    class="q-pt-md"
                  />

                  <q-input
                    outlined
                    v-model="text"
                    label="City, state"
                    class="q-pt-md"
                  />

                  <q-input
                    outlined
                    v-model="text"
                    label="Zip code"
                    class="q-pt-md q-pb-md"
                  />

                  <q-btn color="primary" label="Save" />
                </q-tab-panel>

                <q-tab-panel name="billing">
                  <div class="text-h6">Billing</div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </q-tab-panel>
              </q-tab-panels>
            </q-card>
          </q-card-section>
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
      tab: ref("general"),
    };
  },

  methods: {
    updateProfile() {
      console.log("deleted");
    },
  },
};
</script>
