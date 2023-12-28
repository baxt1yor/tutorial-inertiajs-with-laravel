require('./bootstrap');
import { createApp, h } from "vue";
import { createInertiaApp, plugin as InertiaPlugin  } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { Head } from '@inertiajs/inertia-vue3'
import { Ziggy } from './ziggy';
import route from "ziggy-js";


createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        createApp({
            render: () => h(App, props)
        })
            .mixin({methods: { route }})
            .use(InertiaPlugin, Ziggy, plugin)
            .component('Head', Head)
            .mount(el);
    },
}).then();

InertiaProgress.init();

