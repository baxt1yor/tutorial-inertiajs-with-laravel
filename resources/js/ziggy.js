import {Config} from "ziggy-js";
/**
 *
 * @type Config
 */
const Ziggy = {
    url: process.env.APP_URL,
    port:process.env.APP_PORT,
    defaults:{},
    routes: {
        home: {
            uri: '/',
            methods: ['GET', 'HEAD']
        }
    }
};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
