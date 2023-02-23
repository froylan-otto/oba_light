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
                <q-tab name="account" label="Account" />
                <q-tab name="profile" label="Profile" />
                <q-tab name="settings" label="Settings / Billing" />
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="account">
                  <div class="text-h6">Account</div>

                  <div class="row">
                    <div class="col-4">
                      <div class="q-pa-md">
                        <q-list
                          bordered
                          padding
                          class="rounded-borders text-primary"
                        >
                          <q-item
                            clickable
                            v-ripple
                            :active="link === 'general'"
                            @click="generalOption"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                              <q-icon name="inbox" />
                            </q-item-section>

                            <q-item-section>General</q-item-section>
                          </q-item>

                          <q-item
                            clickable
                            v-ripple
                            :active="link === 'company'"
                            @click="companyOption"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                              <q-icon name="send" />
                            </q-item-section>

                            <q-item-section>Company</q-item-section>
                          </q-item>

                          <q-item
                            clickable
                            v-ripple
                            :active="link === 'billing'"
                            @click="billingOption"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                              <q-icon name="delete" />
                            </q-item-section>

                            <q-item-section>Billing </q-item-section>
                          </q-item>
                        </q-list>
                      </div>
                    </div>

                    <div v-if="accountOption === 1" class="col-8">
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
                    </div>

                    <div v-if="accountOption === 2" class="col-8">
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
                    </div>

                    <div v-if="accountOption === 3" class="col-8">
                      <q-input
                        outlined
                        v-model="text"
                        label="Payment method"
                        class="q-pt-md"
                      />

                      <q-input
                        outlined
                        v-model="text"
                        label="Artist info and contract settings"
                        class="q-pt-md"
                      />
                      <q-input
                        outlined
                        v-model="text"
                        label="Standard payment terms % "
                        class="q-pt-md"
                      />
                      <q-input
                        outlined
                        v-model="text"
                        label="Payment information"
                        class="q-pt-md q-pb-md"
                      />
                    </div>
                  </div>

                  <q-btn color="primary" label="Save" />
                </q-tab-panel>

                <q-tab-panel name="profile">
                  <div class="text-h6">Profile</div>

                  <div class="row">
                    <div class="col-4">
                      <div class="q-pa-md">
                        <q-list
                          bordered
                          padding
                          class="rounded-borders text-primary"
                        >
                          <q-item
                            clickable
                            v-ripple
                            :active="linkPerfil === 'personal'"
                            @click="personalOption"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                              <q-icon name="inbox" />
                            </q-item-section>

                            <q-item-section>Personal</q-item-section>
                          </q-item>

                          <q-item
                            clickable
                            v-ripple
                            :active="linkPerfil === 'password'"
                            @click="passwordOption"
                            active-class="my-menu-link"
                          >
                            <q-item-section avatar>
                              <q-icon name="send" />
                            </q-item-section>

                            <q-item-section> Password </q-item-section>
                          </q-item>
                        </q-list>
                      </div>
                    </div>

                    <div v-if="profileOption === 1" class="col-8">
                      <q-input
                        outlined
                        v-model="text"
                        label="First name"
                        class="q-pt-md"
                      />

                      <q-input
                        outlined
                        v-model="text"
                        label="Last name"
                        class="q-pt-md"
                      />
                      <q-input
                        outlined
                        v-model="text"
                        label="Email"
                        class="q-pt-md"
                      />
                    </div>

                    <div v-if="profileOption === 2" class="col-8">
                      <q-input
                        outlined
                        v-model="text"
                        label="Old"
                        class="q-pt-md"
                      />

                      <q-input
                        outlined
                        v-model="text"
                        label="New"
                        class="q-pt-md"
                      />
                      <q-input
                        outlined
                        v-model="text"
                        label="Confirm"
                        class="q-pt-md"
                      />
                    </div>
                  </div>

                  <q-btn color="primary" label="Save" />
                </q-tab-panel>

                <q-tab-panel name="settings">
                  <div class="text-h6">Settings / Billing</div>

                  <q-input
                    outlined
                    v-model="text"
                    label="Base Currency"
                    class="q-pt-md"
                  />
                  <q-input
                    outlined
                    v-model="text"
                    label="Payment Run"
                    class="q-pt-md"
                  />
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
      accountOption: ref(1),
      link: ref("general"),
      linkPerfil: ref("personal"),
      profileOption: ref(1),
    };
  },

  methods: {
    updateProfile() {
      console.log("deleted");
    },
    generalOption() {
      this.link = "general";
      this.accountOption = 1;
    },
    companyOption() {
      this.link = "company";
      this.accountOption = 2;
    },
    billingOption() {
      this.link = "billing";
      this.accountOption = 3;
    },
    personalOption() {
      this.linkPerfil = "personal";
      this.profileOption = 1;
    },
    passwordOption() {
      this.linkPerfil = "password";
      this.profileOption = 2;
    },
  },
};
</script>
