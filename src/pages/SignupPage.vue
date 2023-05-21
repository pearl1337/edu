<script lang="ts" setup>
import { ref } from "vue";
import { authService } from "../services/auth/Auth";
import { isEmailValid } from "../utils/isEmailValid";
import { useFetching } from "../composables/useFetching";
import { Role } from "../models/User";
import { useRouter } from "vue-router";

const form = ref<HTMLFormElement | null>(null);
const errorSnackbar = ref<boolean>(false);
const errorString = ref<string>("");
const [onSubmit, loading] = useFetching(signup);
const router = useRouter();

const email = ref<string>("asdasd@gmail.com");
const password = ref<string>("123456789");
const repeatPassword = ref<string>("123456789");
const firstName = ref<string>("Test");
const lastName = ref<string>("Test2");
const role = ref<string>(Role.STUDENT);

const emailRules = [
  (v: string) => !!v || "Email is required",
  (v: string) => (v && isEmailValid(v)) || "Invalid email",
];
const passwordRules = [
  (v: string) => !!v || "Password is required",
  (v: string) =>
    (v && v.length > 8) || "Password must be more than 8 characters",
];
const repeatPasswordRules = [
  (v: string) => !!v || "Repeat password is required",
  (v: string) => (v && v == password.value) || "Passwords must match",
];
const firstNameRules = [
  (v: string) => !!v || "First name is required",
  (v: string) =>
    (v && v.length < 20) || "First name must be less than 20 characters",
];
const lastNameRules = [
  (v: string) => !!v || "Last name is required",
  (v: string) =>
    (v && v.length < 20) || "Last name must be less than 20 characters",
];

async function signup(event: Event) {
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
    name: firstName.value,
    surname: lastName.value,
    password: password.value,
    role: role.value,
  };

  const [error] = await authService.signup(credentials);

  if (error) {
    errorString.value = error;
    errorSnackbar.value = true;
    return;
  }
  router.push({ name: "MainPage" });
}
</script>
<template>
  <div class="top-progress">
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="yellow-darken-2"
    ></v-progress-linear>
  </div>

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
    <h2 class="mt-10">Sign up</h2>
    <v-form ref="form" class="mt-5" @submit="onSubmit">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email Address"
        required
      ></v-text-field>
      <v-text-field
        v-model="firstName"
        :rules="firstNameRules"
        label="First name"
        required
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Last name"
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
      <v-text-field
        v-model="repeatPassword"
        :rules="repeatPasswordRules"
        label="Repeat password"
        required
        type="password"
      ></v-text-field>
      <v-radio-group v-model="role" inline label="Select your role">
        <v-radio label="Student" :value="Role.STUDENT"></v-radio>
        <v-radio label="Teacher" :value="Role.TEACHER"></v-radio>
      </v-radio-group>

      <div class="d-flex flex-column">
        <v-btn
          color="success"
          class="mt-4"
          block
          type="submit"
          :disabled="loading"
        >
          next
        </v-btn>
        <div class="auth-form-links">
          <router-link :to="{ name: 'LoginPage' }">Log in</router-link>
        </div>
      </div>
    </v-form>
  </v-sheet>
</template>
