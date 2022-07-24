/*
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2022-07-21 21:40:46
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-21 21:52:24
 * @FilePath: \qiankun-study\singleSpa\vue-app\src\main.js
 */
import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
});


// export async function bootstrap() {
    
// }

// export async function mount(props) {
//     console.log('mount', props);
// }

// export async function unmount(props) {
//     console.log('unmount', props);
// }

// export async function update(props) {
//     console.log('update', props);
// }

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
