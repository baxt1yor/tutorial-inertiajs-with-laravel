<script setup>
import Nav from "@/Shared/Nav";
import {Link} from "@inertiajs/inertia-vue3";
import Layout from "@/Shared/Layout.vue";
defineProps({
    time:String
})
</script>

<template>
   <Layout>
       <h1>
           User
       </h1>

       <div class="mg">
           <p>The current time is {{time}}</p>
           <Link :href="route('users')" text="Refresh" class="text-blue-500" preserve-scroll/>
       </div>
   </Layout>
</template>

<style scoped>
  .mg {
      margin-top: 500px;
  }
</style>
