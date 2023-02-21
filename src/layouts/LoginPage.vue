<template>
  <q-layout view="lhh LpR lfr">
    <q-page-container>
      <q-page style="background: #e3f6f5" class="flex flex-center">
        <div class="row">
          <div class="col-12 full-height">
            <q-card flat>
              <q-card-section>
                <div class="text-h3 q-pb-sm text-center">OBA Gyro</div>

                <q-form class="q-px-sm q-pt-xl">
                  <q-input
                    ref="email"
                    square
                    clearable
                    v-model="email"
                    type="email"
                    lazy-rules
                    :rules="[this.required, this.isEmail, this.short]"
                    label="Email"
                  >
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>

                  <q-input
                    ref="password"
                    square
                    clearable
                    v-model="password"
                    :type="passwordFieldType"
                    lazy-rules
                    :rules="[this.required, this.short]"
                    label="Password"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        :name="visibilityIcon"
                        @click="switchVisibility"
                        class="cursor-pointer"
                      />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>

              <q-card-actions>
                <q-btn
                  unelevated
                  color="primary"
                  @click="submit"
                  class="full-width text-white q-pr-xl"
                  icon="login"
                  label="Login"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "stores/counter";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
