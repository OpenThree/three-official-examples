let HOST = window.origin + window.location.pathname

HOST = HOST.replace(/\/index.html$/, '/')

const FILE_HOST = 'https://z2586300277.github.io/3d-file-server/' // 文件资源服务器

export { HOST, FILE_HOST }

/* 注 部署可将 资源全部下载 然后配置成自己的资源地址即可 */

const requestOffical = () => fetch('https://threejs.org/examples/files.json').then(res => res.json()).then(data => {

    const threeorg = { WebGL: [], WebGPU: [], Date: new Date() }

    Object.keys(data).forEach(key => {

        if (key.includes('webgpu')) threeorg.WebGPU.push(...data[key])

        else threeorg.WebGL.push(...data[key])

    })

    localStorage.setItem('threejs_org_examples_files', JSON.stringify(threeorg))

    window.threejs_org_examples_files = threeorg

})

let threejs_org_examples_files = localStorage.getItem('threejs_org_examples_files')

if (!threejs_org_examples_files) requestOffical()

else {

    const storage = JSON.parse(threejs_org_examples_files)

    if (new Date() - new Date(storage.Date) > 86400000) requestOffical()

    else window.threejs_org_examples_files = storage

}