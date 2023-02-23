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
                    square
                    clearable
                    v-model="form.username"
                    type="email"
                    label="Email"
                  >
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>

                  <q-input
                    square
                    clearable
                    v-model="form.password"
                    type="password"
                    label="Password"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
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

            <div>
              <!-- Option 2 -->
              <div>Indirect store</div>
              <!-- Use the computed state -->
              <div>{{ count }}</div>
              <!-- Use the computed getter -->
              <div>{{ doubleCountValue }}</div>

              <!-- Use the exposed function -->
              <q-btn @click="decrementCount()">-</q-btn>
              <!-- Use the exposed function -->
              <q-btn @click="incrementCount()">+</q-btn>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useCounterStore } from "stores/auth";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import axios from "axios";

export default {
  name: "loginPage",
  data() {
    const store = useCounterStore();

    // Option 2: use computed and functions to use the store
    const count = computed(() => store.counter);
    const doubleCountValue = computed(() => store.doubleCount);
    const incrementCount = () => store.increment(); // use action
    const decrementCount = () => store.counter--; // manipulate directly

    return {
      // Option 1: return the store directly and couple it in the template
      store,

      // Option 2: use the store in functions and compute the state to use in the template
      count,
      doubleCountValue,
      incrementCount,
      decrementCount,
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      this.btnAction = true;
      if (!this.form.username || !this.form.password) {
        console.log("something wrong");
      } else if (this.form.password.length < 6) {
        console.log("password length");
      } else {
        console.log("Is auth: " + this.store.authenticatedOAS);

        axios
          .post(
            "https://oas-dev.ottomate.me/api/auth/login/",
            {
              username: "string",
              email: "user@example.com",
              password: "string",
            },
            {
              headers: {
                Accept: "application/json",
                Authorization:
                  "Bearer " + "e5bc57dbbe3f84734735899958b73261a9fabb38",
              },
            }
          )
          .then((response) => {
            console.log("response", response.data);
          })
          .catch((error) => {
            alert("error", error.response);
          });

        //const output = await this.store.loginApiOas(this.form);
        //const output = await this.store.loggearse(this.form);
        //const response = output.data;
        //console.log(response);

        /*try {
          this.working = true;
          this.apiOas.defaults.headers.common.Authorization = "";
          await this.$store.dispatch("xstore/loginApiOas", this.form);
          console.log("this.working " + this.working);
          if (!this.$store.getters["xstore/isAuthenticatedOAS"]) {
            this.error = true;
            this.alert = "error";
            return;
          }
          await this.$store.dispatch(
            "xstore/updateAppVersion",
            this.appVersion
          );
          const tokenOAS = this.$store.getters["xstore/getTokenOAS"];
          this.apiOas.defaults.headers.common.Authorization =
            "Bearer " + tokenOAS;
          console.log("ttolen oas: " + tokenOAS);
          // end token oas
          const homePage = this.$store.getters["xstore/getHomePage"];
          console.log("La ruta es: " + homePage);
          await this.$router.push({ name: homePage });
          console.log("La ruta es: " + homePage);
        } catch (err) {
          this.error = true;
          this.alert = "error";
          this.form.username = "";
          this.form.password = "";
          this.btnAction = false;
        } finally {
          this.working = false;
        }*/
      }
    },
  },
};
</script>
