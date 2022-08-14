import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    // 中转服务器
    server: {
        // 通过代理实现跨域
        proxy: {
            '/path': {
                // 表示要替换的服务端地址  https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=长沙&ci=70&channelId=4
                target: 'https://i.maoyan.com',
                // 开启代理，允许跨域
                changeOrigin: true,
                // 路径重写 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
                rewrite: path => path.replace(/^\/path/, '')
            },
            '/api': {
                target: 'http://localhost:9080',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})
