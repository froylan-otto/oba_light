<template>
  <q-layout view="lHh Lpr lFf" style="background: #e3f6f5">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="center"> OBA Gyro </q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs align="center">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->

      <div class="q-pa-sm bg-secondary" align="center" unelevated>
        <q-btn-group push unelevated>
          <q-btn
            color="primary"
            text-color="white"
            push
            icon="home"
            class="text-white"
          />
          <q-btn color="primary" text-color="white" push label="Home" />
          <q-btn color="primary" text-color="white" push label="Files" />
        </q-btn-group>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
