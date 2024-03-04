

<script setup lang="ts">
import { reactive } from "vue"
import Cookies from 'js-cookie';
import { useAuthStore } from '@/store/auth';
import { useRouter } from "vue-router";
import { loginUser } from "@/services/auth/index";
import { ILogin } from "@/models/auth";

const router = useRouter();

const user: ILogin = reactive({
  username: "",
  password: ""
});

interface IToken {
  accessToken:string;
}
    
const login = async () => {

  try {
        // Simulación de la autenticación y obtención de token con Axios
        // const response = await Axios.post("login", {
        //   username: user.username,
        //   password: user.password,
        // });
        user.username = "leo";
        user.password = "4455";

        const response = await loginUser(user);
        // Extraer el token de la respuesta (suponiendo que la respuesta tiene una propiedad 'token')
        const token = response as unknown as IToken;

        console.log("token", token.accessToken);
        // Almacena el token en el módulo Pinia y en la cookie
        useAuthStore().setToken(token.accessToken);
        Cookies.set('token', token.accessToken);

        // Redirige al usuario
        router.push({name: "Home"});
        
      } catch (error) {
        console.error('Error en la autenticación:', error);
        // Manejo de errores: podrías mostrar un mensaje de error al usuario
      }

};
    console.log("hola");
</script>

<template>
  <div>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input v-model="user.username" type="text" id="username" required />
  
        <label for="password">Password:</label>
        <input v-model="user.password" type="password" id="password" required />
  
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
</template>