<template>
    <Layout>
        <div>
            <h1>Inertiajs is {{ test }}</h1>
        </div>
    </Layout>
</template>

<script setup>
import Layout from "@/Shared/Layout";
defineProps({
    test:String
})
</script>
