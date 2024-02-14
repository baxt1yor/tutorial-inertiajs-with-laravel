<template>
    <Layout>
        <div>
            <h1>inertiajs is {{ about_us }}</h1>
        </div>
    </Layout>
</template>

<script setup>
import Layout from "@/Shared/Layout";

defineProps({
    about_us: String
})
</script>
