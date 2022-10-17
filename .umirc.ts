import { defineConfig } from '@umijs/max';

export default defineConfig({
    antd: {
  },
  access: {},
  model: {},
  initialState: {},
    request: {
  },
  layout: {
    title: 'myApp',
    },
    dva: {},
    proxy: {
        '/api': {
            // target: 'http://t.weather.sojson.com/api/weather/city/101030100',
            target: 'http://t.weather.sojson.com/',
            changeOrigin: true,
            pathRewrite: {
                // '^/api/weather': '',
            },
        }
    },
    routes: [
        {
            path: '/',
            redirect: '/my',
        },
        {
            name: 'My',
            path: '/my',
            component: './My',
            routes: [
                {
                    name: 'A',
                    path: '/my/a',
                    component: './My/A',
                    routes: [{
                        name: 'B',
                        path: '/my/a/b',
                        component: './My/A/B',
                        routes: [
                            {
                                name: 'C',
                                path: '/my/a/b/c',
                                component: './My/A/B/C',
                                routes: [
                                    {
                                        name: 'D',
                                        path: '/my/a/b/c/d',
                                        component: './My/A/B/C/D',
                                        routes: [
                                            {
                                                name: 'Element is my favososfdssfdsfsdgdg',
                                                path: '/my/a/b/c/d/e',
                                                component: './My/A/B/C/D/E',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    }],
                },
            ],
        },
        {
            name: 'Friend',
            path: '/friend',
            component: './Friend'
        },
        {
            name: '天气',
            path: '/weather',
            component: './Weather',
        },
  ],
  npmClient: 'pnpm',
});