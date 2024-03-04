<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const redirect = (routeName: string) => router.push({ name: routeName });
</script>

<template>
  <v-toolbar color="white" density="compact" elevation="0" height="120">
    <template v-slot:prepend>
      <!-- <v-img
        :width="190"
        class="ml-12"
        aspect-ratio="16/9"
        src="@/assets/img/fundacion_don_benjamin_header.png"
      ></v-img> -->
    </template>

    <template v-slot:append>
      <v-btn variant="plain" @click="redirect('Home')"> INICIO </v-btn>

      <v-btn variant="plain" @click="redirect('Acerca')"> ACERCA DE </v-btn>

      <v-btn variant="plain" @click="redirect('Evento')"> EVENTOS </v-btn>

      <v-btn variant="plain" @click="redirect('Voluntario')"> VOLUNTARIOS </v-btn>

      <v-btn variant="plain" @click="redirect('Apoyo')"> CONTACTO </v-btn>

      <!-- <v-btn variant="plain" @click="redirect('Apoyo')"> SOLICITUD APOYO </v-btn> -->
    </template>
  </v-toolbar>
</template>
