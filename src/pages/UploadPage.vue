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
              Select the way to upload the file
              <q-btn round color="primary" icon="help" flat />
            </div>

            <div class="row justify-center text-center">
              <div class="col-12">
                <div class="q-gutter-sm">
                  <q-radio v-model="typeFile" val="file" label="Upload File" />
                  <q-radio
                    v-model="typeFile"
                    val="link"
                    label="Insert GDrive Link"
                  />
                </div>
              </div>
            </div>

            <div class="row justify-center text-center q-mt-xl">
              <center>
                <div class="col-12">
                  <q-uploader
                    color="primary"
                    auto-expand
                    stack-label="Stack Label"
                    :url="dummyUrl"
                    self-center
                    v-if="typeFile == 'file'"
                  />

                  <q-input
                    outlined
                    v-model="gdriveUrl"
                    label="GDrive url"
                    v-if="typeFile == 'link'"
                    style="width: 400px"
                  />
                  <q-spinner
                    color="primary"
                    size="3em"
                    v-if="typeFile == 'link'"
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
                <q-select v-model="fxOption" :options="options">
                  <template v-slot:prepend>
                    <q-icon name="paid" />
                  </template>
                </q-select>
              </div>
              <div class="col-5 self-center q-pl-lg">
                <q-input outlined v-model="fxRate" label="FX Rate" />
              </div>
              <div class="col-2 self-center">
                <q-btn
                  v-if="step > 1"
                  color="primary"
                  label="add"
                  class="q-ml-sm"
                  icon="add"
                  @click="addRate"
                />
              </div>
            </div>
            <div class="row justify-center text-center q-pt-lg">
              <div class="col-12 self-center">
                <q-table
                  title="FX Rates"
                  :rows="rows"
                  :columns="columns"
                  row-key="name"
                  dense
                  separator="cell"
                  hide-header
                  hide-bottom
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
            <div class="row justify-center text-center q-pt-lg">
              <div class="col-12 self-center">
                <q-checkbox v-model="sanitization" label="Sanitization" />
                <q-separator />
                To use this functionality, you must have a premium account
              </div>
            </div>
          </q-step>

          <q-step
            :name="4"
            title="Execute"
            icon="settings_applications"
            :done="step > 4"
          >
            <div class="row justify-center text-center q-pt-lg">
              <div class="col-12 self-center">
                Files Uploaded
                <q-table
                  title="FX Rates"
                  :rows="rowsFiles"
                  :columns="columnsFiles"
                  dense
                  separator="cell"
                  hide-header
                  hide-bottom
                />
              </div>
            </div>

            <div class="row justify-center text-center q-pt-lg">
              <div class="col-6 self-center">
                FX Rates
                <q-table
                  title="FX Rates"
                  :rows="rows"
                  :columns="columns"
                  row-key="name"
                  dense
                  separator="cell"
                  hide-header
                  hide-bottom
                />
              </div>
              <div class="col-6 self-center">
                Match sales with your Catalogue: TRUE
                <q-separator />
                Run as production: TRUE
              </div>
            </div>
          </q-step>

          <q-step :name="5" title="Production" icon="bolt">
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
                  :label="step === 5 ? 'COMPLETE' : 'next'"
                  :icon="step === 5 ? 'file_upload' : 'redo'"
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
      uploadFile: ref(["line"]),

      typeFile: ref("file"),
      options: ["EUR", "GBP", "USD", "JPY"],

      dense: ref(false),
      denseOpts: ref(false),
      fxRate: ref(0),
      fxOption: ref(""),
      ratesAdded: ref([]),
      ratesOptionsAdded: ref([]),
      columns: ref([
        {
          name: "rate",
          required: true,
          label: "Rate",
          field: (row) => row.rate,
          align: "center",
        },
        {
          name: "value",
          required: true,
          label: "Value",
          field: (row) => row.value,
          align: "center",
        },
      ]),
      rows: ref([]),
      gdriveUrl: ref(),
      sanitization: ref(false),

      columnsFiles: ref([
        {
          name: "name",
          required: true,
          label: "name",
          field: (row) => row.name,
          align: "center",
        },
        {
          name: "size",
          required: true,
          label: "size",
          field: (row) => row.size,
          align: "center",
        },
        {
          name: "status",
          required: true,
          label: "status",
          field: (row) => row.status,
          align: "center",
        },
      ]),

      rowsFiles: ref([
        { name: "file1.csv", size: "300mb", status: "Ingested" },
        { name: "file2.csv", size: "35mb", status: "Ingested" },
      ]),
    };
  },

  methods: {
    handleDeleteClick() {
      console.log("deleted");
    },
    selectTypeFile() {},
    addRate() {
      console.log(this.fxOption);
      this.ratesAdded.push(this.fxRate);
      this.ratesOptionsAdded.push(this.fxOption);
      console.log(this.fxRate);

      this.rows.push({ rate: this.fxOption, value: this.fxRate });
    },
    fileUploadOption() {
      console.log("Algo");
      //console.log(event);
    },
  },
};
</script>
