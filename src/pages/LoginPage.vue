<script lang="ts" setup>
import { ref } from "vue";
import { authService } from "../services/auth/Auth";
import { isEmailValid } from "../utils/isEmailValid";
import { useFetching } from "../composables/useFetching";

type Email = string;
type Password = string;

const form = ref<HTMLFormElement | null>(null);
const errorSnackbar = ref<boolean>(false);
const errorString = ref<string>("");
const [onSubmit, loading] = useFetching(login);

const email = ref<Email>("");
const password = ref<Password>("");

const nameRules = [
  (v: Email) => !!v || "Email is required",
  (v: Email) => (v && isEmailValid(v)) || "Invalid email",
];
const passwordRules = [
  (v: Password) => !!v || "Password is required",
  (v: Password) =>
    (v && v.length > 8) || "Password must be more than 8 characters",
];

async function login(event: Event) {
  event.preventDefault();

  if (!form.value) {
    return;
  }

  const { valid } = await form.value.validate();

  if (!valid) {
    return;
  }

  const credentials = {
    email: email.value,
    password: password.value,
  };

  const [error, data] = await authService.login(credentials);

  if (error) {
    errorString.value = error;
    errorSnackbar.value = true;
  } else {
    console.log(data);
  }
}
</script>
<template>
  <v-progress-linear
    v-if="loading"
    indeterminate
    color="yellow-darken-2"
  ></v-progress-linear>
  <v-snackbar
    v-model="errorSnackbar"
    multi-line
    :timeout="2000"
    location="top right"
    color="error"
  >
    {{ errorString }}

    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="errorSnackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-sheet width="300" class="mx-auto">
    <h2 class="mt-10">Login</h2>
    <v-form ref="form" class="mt-5" @submit="onSubmit">
      <v-text-field
        v-model="email"
        :counter="30"
        :rules="nameRules"
        label="Email Address"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        :counter="10"
        :rules="passwordRules"
        label="Password"
        required
        type="password"
      ></v-text-field>

      <div class="d-flex flex-column">
        <v-btn
          color="success"
          class="mt-4"
          block
          type="submit"
          :disabled="loading"
        >
          Login
        </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>
