import { HOST } from "./host.js"
import { REVISION } from "https://threejs.org/build/three.module.min.js"

// 企业可根据自己的需求修改url 成自己的导航地址 链接
export default {
    site: {
        name: 'Three JS Ⓡ' + REVISION,
        url: 'https://threejs.org/',
        logo: HOST + 'files/site/logo.svg',
        footName: '- Home',
        footLink: HOST
    },
    links: [
        {
            name: '🏠Official-Run',
            url: 'https://openthree.github.io/three-offical-run/examples/'
        },
        {
            name: '💎WebGL',
            url: 'https://openthree.github.io/three-cesium-examples/'
        },
        // {
        //     name: '🍏Editor',
        //     url: 'https://z2586300277.github.io/threejs-editor/'
        // },
        {
            name: '🔥WebGPU',
            url: 'https://openthree.github.io/webgpu'
        },
        {
            name: '🍃OpenThree',
            url: 'https://openthree.github.io/three-cesium-links/'
        },
        // {
        //     name: '🍁Editor',
        //     url: 'https://z2586300277.github.io/three-editor/dist/#/editor'
        // },
        {
            name: '⚡下载',
            url: 'https://pan.quark.cn/s/be4fcfa29e22'
        }
    ]
}