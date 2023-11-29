<template>
    <div>
        <h1>Inertiajs is {{ test }}</h1>

        <Link :href="route('about-us')">Go to about us</Link>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    props: ["test"],
};
</script>
