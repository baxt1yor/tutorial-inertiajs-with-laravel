<template>
    <div>
        <h1>inertiajs is {{ about_us }}</h1>
        <Link :href="route('home')">Go to Home</Link>
    </div>
</template>

<script>
export default {
    components: {
        props: ["about_us"],
    },
};
</script>
