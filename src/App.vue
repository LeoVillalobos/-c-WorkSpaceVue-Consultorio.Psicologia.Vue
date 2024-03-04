<template>
      <router-view />
</template>

<script lang="ts" setup>
import {onBeforeMount} from "vue";
import { useAuthStore } from '@/store/auth';
import { useRouter } from "vue-router";

const token = useAuthStore().token;
const router = useRouter();

onBeforeMount(() => {
  console.log("token", token)
  if (token) {
  //   // Si hay un token, redirige a la página principal u otra página segura.
    router.push({name: "Home"});
  }
  else {
    router.push({name : "Login"});
  }
});
</script>
