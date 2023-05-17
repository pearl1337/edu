<script lang="ts" setup>
import { ref } from "vue";
import { userService } from "../services/user/UserService";

type Name = string;
type Password = string;

const form = ref<HTMLFormElement | null>(null);

const name = ref<Name>("");
const password = ref<Password>("");

const nameRules = [
  (v: Name) => !!v || "Name is required",
  (v: Name) => (v && v.length <= 10) || "Name must be less than 10 characters",
];

async function onSubmit(event: Event) {
  event.preventDefault();

  if (!form.value) {
    return;
  }

  const { valid } = await form.value.validate();

  if (!valid) {
    return;
  }

  const credentials = {
    name: name.value,
    password: password.value,
  };

  await userService.login(credentials);
}
</script>
<template>
  <v-sheet width="300" class="mx-auto">
    <v-form ref="form" @submit="onSubmit">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <div class="d-flex flex-column">
        <v-btn color="success" class="mt-4" block type="submit"> Submit </v-btn>
      </div>
    </v-form>
  </v-sheet>
</template>
