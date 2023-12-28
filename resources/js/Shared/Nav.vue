<script>
    import {Link} from '@inertiajs/inertia-vue3';
    export default {
        components: {Link}
    }
</script>

<template>
    <nav>
        <ul>
            <li>
                <Link :href="route('home')">Home</Link>
            </li>
            <li>
                <Link :href="route('about-us')">About</Link>
            </li>

            <li>
                <Link :href="route('logout')" method="post">Log out</Link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>

</style>
