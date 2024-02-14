<script setup>
    import NavLink from "@/Shared/NavLink";
    import {usePage} from "@inertiajs/inertia-vue3";

    const props = defineProps({
        foo:String
    })

    function getMenus()  {
        return [
            {
                text: 'Home',
                href: route('home'),
                method: 'get',
                active: usePage().component.value === 'Home',
            },
            {
                text: 'About',
                href: route('about-us'),
                method: 'get',
                active: usePage().url.value.startsWith('/about-us'),
            },
            {
                text: 'User',
                href: route('users'),
                method: 'get',
                active: usePage().url.value.startsWith('/users'),
            },
            {
                text: 'Logout',
                href: route('logout'),
                method: 'post',
                active: usePage().url.value.startsWith('/logout'),
            }
        ];
    }
</script>

<template>
    <nav>
        <ul class="flex list-disc space-x-4 list-inside">
            <li v-for="item of getMenus()">
                <NavLink :href="item.href" :text="item.text" :method="item.method" :active="item.active"/>
            </li>
        </ul>
    </nav>
</template>
