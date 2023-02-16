<template>
  <q-layout view="lHh Lpr lFf" style="background: #e3f6f5">
    <q-header class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title align="center"> OTTITO Light </q-toolbar-title>
      </q-toolbar>

      <!-- <q-tabs align="center">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->

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
                color="primary"
                text-color="white"
                push
                label="Home"
                active
              />
              <q-btn color="primary" text-color="white" push label="Files" />
            </q-btn-group>
          </div>
          <div class="col-1 self-center">
            <q-btn round color="primary" icon="person">
              <q-menu auto-close>
                <q-list style="min-width: 100px">
                  <q-item clickable>
                    <q-item-section>Account</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Settings</q-item-section>
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
