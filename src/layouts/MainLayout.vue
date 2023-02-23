<template>
  <q-layout view="lHh Lpr lFf" style="background: #e3f6f5">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="center"> OTTO Light </q-toolbar-title>
      </q-toolbar>

      <div
        class="bg-secondary"
        align="center"
        unelevated
        style="padding-right: 12%; padding-left: 20%"
      >
        <div class="row justify-center text-center q-pt-lg">
          <div class="col-11 self-center">
            <q-btn-group push unelevated>
              <q-btn
                @click="redirectHomePage"
                color="primary"
                text-color="white"
                push
                label="Home"
              />
              <q-btn color="primary" text-color="white" push label="Files" />
            </q-btn-group>
          </div>
          <div class="col-1 self-center">
            <q-btn round color="primary" icon="person">
              <q-menu auto-close>
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section @click="redirectSettingsPage"
                      >Settings</q-item-section
                    >
                  </q-item>

                  <q-item clickable>
                    <q-item-section>Logout</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container
      style="padding-top: 102px; padding-right: 10%; padding-left: 10%"
    >
      <router-view />
    </q-page-container>

    <q-page-sticky position="bottom-right" :offset="[-30, 200]">
      <q-btn
        class="rotate-270"
        fab
        icon="support"
        color="primary"
        label="Feedback"
        @click="feedback = true"
      />
    </q-page-sticky>

    <q-dialog v-model="feedback" persistent>
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section>
          <div class="text-h6">Feedback Window</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-select
            outlined
            v-model="selectedQuestion"
            :options="questions"
            label="Outlined"
          />

          <q-input class="q-pt-sm" outlined v-model="subject" label="Subject" />

          <q-input
            v-model="issue"
            outlined
            type="textarea"
            label="Describe your issue"
            class="q-pt-sm"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Close" v-close-popup />
          <q-btn flat label="Send" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {
      questions: [
        "Process question",
        "Technical Problem / Bug",
        "Improvement / Feature request",
        "Other / General",
      ],
      subject: "",
      selectedQuestion: ref(""),
      issue: "",
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      clickTo() {
        router.push({ path: "/" });
      },
      feedback: ref(),
    };
  },
  methods: {
    redirectSettingsPage() {
      console.log("Se ha clickeado al boton settings");
      this.$router.push("/settings");
    },
    redirectHomePage() {
      console.log("Se ha clickeado al boton de home ");
      this.$router.push("/upload");
    },
  },
});
</script>
