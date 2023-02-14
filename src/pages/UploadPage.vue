<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="q-pl-sm col-3"></div>

      <div class="col-12">
        <q-stepper
          v-model="step"
          ref="stepper"
          alternative-labels
          color="primary"
          animated
        >
          <q-step :name="1" title="Upload File" icon="backup" :done="step > 1">
            <div class="row justify-center text-center">
              <div class="col-6 self-center">
                <q-checkbox size="lg" v-model="shape" val="lg" />
                Upload File
              </div>
              <div class="col-6 self-center">
                <q-checkbox size="lg" v-model="shape" val="lg" />
                Insert Gdrive Kit
              </div>
            </div>

            <div class="row justify-center text-center">
              <center>
                <div class="col-12">
                  <q-uploader
                    color="primary"
                    auto-expand
                    stack-label="Stack Label"
                    :url="dummyUrl"
                    self-center
                  />
                </div>
              </center>
            </div>
          </q-step>

          <q-step
            :name="2"
            title="Currency"
            icon="money"
            :done="step > 2"
            animated
          >
            <div class="row justify-center text-center">
              <div class="col-5 self-center">
                <q-select
                  outlined
                  v-model="model"
                  :options="options"
                  :dense="dense"
                  :options-dense="denseOpts"
                >
                  <template v-slot:prepend>
                    <q-icon name="paid" />
                  </template>
                </q-select>
              </div>
              <div class="col-5 self-center q-pl-lg">
                <q-input outlined v-model="text" label="FX Rate" />
              </div>
              <div class="col-2 self-center">
                <q-btn
                  v-if="step > 1"
                  color="primary"
                  label="add"
                  class="q-ml-sm"
                  icon="add"
                />
              </div>
            </div>
          </q-step>

          <q-step
            :name="3"
            title="Run"
            icon="rocket_launch"
            :done="step > 3"
            animated
          >
            This step won't show up because it is disabled.
          </q-step>

          <q-step :name="4" title="Execute" icon="settings_applications">
            Try out different ad text to see what brings in the most customers,
            and learn how to enhance your ads using features like ad extensions.
            If you run into any problems with your ads, find out how to tell if
            they're running and how to resolve approval issues.
          </q-step>

          <template v-slot:navigation>
            <center>
              <q-stepper-navigation class="q-pb-lg">
                <q-btn
                  v-if="step > 1"
                  flat
                  color="primary"
                  @click="$refs.stepper.previous()"
                  label="Back"
                  class="q-ml-sm"
                  icon="undo"
                />
                <q-btn
                  @click="$refs.stepper.next()"
                  color="primary"
                  :label="step === 4 ? 'COMPLETE' : 'next'"
                  :icon="step === 4 ? 'file_upload' : 'redo'"
                />
              </q-stepper-navigation>
            </center>
          </template>
        </q-stepper>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      step: ref(1),
      dummyUrl: "https://api.imgur.com/3/image",
      serverSideImages: [
        {
          src: "https://via.placeholder.com/150/0000FF/808080",
          alt: "blah blah blah",
          id: 1,
        },
        {
          src: "https://via.placeholder.com/150/87995G/808080",
          alt: "blah blah blah",
          id: 2,
        },
      ],
      shape: ref(["line"]),
      model: ref(null),

      options: ["Currency", "Facebook", "Twitter", "Apple", "Oracle"],

      dense: ref(false),
      denseOpts: ref(false),
    };
  },

  methods: {
    handleDeleteClick() {
      console.log("deleted");
    },
  },
};
</script>
