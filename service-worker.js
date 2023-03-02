/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "78f4e3b2267848106fecaebcb8f357db"
  },
  {
    "url": "assets/css/0.styles.b4d862fc.css",
    "revision": "21a0cdc14f3a31f7eebac534090cea6f"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.fff9f1cd.js",
    "revision": "3fa7aaa93d2617ac4f3f1ce0eeeeae8c"
  },
  {
    "url": "assets/js/10.2f6451c0.js",
    "revision": "3a6a44c3d1c3e0fff487c5077c7c16a6"
  },
  {
    "url": "assets/js/11.88ba3ba7.js",
    "revision": "3d6878bb704b3c202990f1e354fe76b0"
  },
  {
    "url": "assets/js/12.35155dae.js",
    "revision": "cff5616f5fdcd2616e3fa980c7df1a88"
  },
  {
    "url": "assets/js/13.68ba8992.js",
    "revision": "96edc666b8a82f716a77d7765d030c8d"
  },
  {
    "url": "assets/js/14.eb763e95.js",
    "revision": "7de4a1060a3eec062ff0d2e39b15542c"
  },
  {
    "url": "assets/js/15.f65ce61c.js",
    "revision": "6f1bcad6f47dcf282d85f2ff2d39fc3f"
  },
  {
    "url": "assets/js/16.96750805.js",
    "revision": "612e5c61f9143e15f642ff55cfc495df"
  },
  {
    "url": "assets/js/17.8f4e1fe0.js",
    "revision": "b02893ead1c825ea61e35af168da337d"
  },
  {
    "url": "assets/js/18.9303ee70.js",
    "revision": "a7ec0e517f15677e1e98297758eb680f"
  },
  {
    "url": "assets/js/19.2c4fb96d.js",
    "revision": "6dbe8394b10ae714d96cfa5aca7397cc"
  },
  {
    "url": "assets/js/2.21736844.js",
    "revision": "dc805b62a6f748a5b27d70685a459728"
  },
  {
    "url": "assets/js/20.bd2dba1c.js",
    "revision": "85effa8bf3e8866210146dfc50e33ed6"
  },
  {
    "url": "assets/js/21.b136a446.js",
    "revision": "9ae7d55f3bef90fcf818abf95f77c921"
  },
  {
    "url": "assets/js/22.96966c83.js",
    "revision": "eb07ffc8bdba7db3fed9ba3e0fdf315b"
  },
  {
    "url": "assets/js/23.36f9b6b7.js",
    "revision": "4f0f27d7fd4d100f3db52907aeb63207"
  },
  {
    "url": "assets/js/24.f82eeaf2.js",
    "revision": "c574e206dcfa7f0e813e27093e00211b"
  },
  {
    "url": "assets/js/25.17e770b6.js",
    "revision": "976a8db3160e14c0b10a7c59cf0db4f6"
  },
  {
    "url": "assets/js/26.4f7dab15.js",
    "revision": "0be31f9e288daaa8c9d87be819257301"
  },
  {
    "url": "assets/js/27.ce9ca621.js",
    "revision": "cd4dade59272d8686c6ac6a6ba0ce1fe"
  },
  {
    "url": "assets/js/28.23b63aa6.js",
    "revision": "04e06e9732b49933aa9a62163bfb9716"
  },
  {
    "url": "assets/js/29.e1add842.js",
    "revision": "9bde3f44c024893fe34d9cbfd6df9be1"
  },
  {
    "url": "assets/js/30.f93389b9.js",
    "revision": "410fd297b32db56dc51c060241c61cfb"
  },
  {
    "url": "assets/js/31.50b70b88.js",
    "revision": "0da3b8569e2b045cdc57c7f3aa57f0a6"
  },
  {
    "url": "assets/js/32.55d1bf1b.js",
    "revision": "eec29b468477ba0297b6beb2bc29bff8"
  },
  {
    "url": "assets/js/33.cdab4e7a.js",
    "revision": "9eb72b7bc16d243945096e5d4a63f296"
  },
  {
    "url": "assets/js/34.198904bd.js",
    "revision": "a150c1b09cb215d2069da136333d1dcc"
  },
  {
    "url": "assets/js/35.85d92599.js",
    "revision": "8428a3521773222b3b6eb9652b67f17c"
  },
  {
    "url": "assets/js/36.7cd96578.js",
    "revision": "38766db456c89149f6057f989c3d9420"
  },
  {
    "url": "assets/js/4.7641a2a5.js",
    "revision": "ff3a07f345f846096ddaa46f4b6f6f72"
  },
  {
    "url": "assets/js/5.4a80ee64.js",
    "revision": "b13946e5e9add6c16004babb2d7dc9e3"
  },
  {
    "url": "assets/js/6.1d77e396.js",
    "revision": "ff86d6a991d545f82523790e831b7be9"
  },
  {
    "url": "assets/js/7.2f94645d.js",
    "revision": "a3b5494884584e2642805d76c4c21a90"
  },
  {
    "url": "assets/js/8.42686384.js",
    "revision": "93e9b6b0b7c7f22acaee9dbc1330c91a"
  },
  {
    "url": "assets/js/9.75c168ab.js",
    "revision": "02d56cc8e0faefde52f04abe3fc27132"
  },
  {
    "url": "assets/js/app.73fb7303.js",
    "revision": "715eb9faf75aa823b6c57460917a00ee"
  },
  {
    "url": "avatar.jpg",
    "revision": "dfadbe9211456655134f8117701ff150"
  },
  {
    "url": "blogs/git基础使用.html",
    "revision": "4613041317cf857160977b460e5e5775"
  },
  {
    "url": "blogs/前端/Canvas.html",
    "revision": "fa23dafec44f50eb091e485ab025a076"
  },
  {
    "url": "blogs/前端/echarts常用配置项.html",
    "revision": "78e42cb2e7e29234cace900d145d1ca8"
  },
  {
    "url": "blogs/前端/Flex.html",
    "revision": "890067f31ab6e9d014fe2020b1747c9d"
  },
  {
    "url": "blogs/前端/jQuery实现下拉菜单.html",
    "revision": "3bd6c4d4ffeae0de7df43aaabfcfefc2"
  },
  {
    "url": "blogs/前端/keep-alive（缓存）.html",
    "revision": "1491585334481264a879ed9790fbf602"
  },
  {
    "url": "blogs/前端/New.html",
    "revision": "eb15907f1e8ba35ad9435ecbacd191fb"
  },
  {
    "url": "blogs/前端/Vuex.html",
    "revision": "100929e5b9e73a7faa9ae962fa0c36e8"
  },
  {
    "url": "blogs/前端/Vue图片懒加载.html",
    "revision": "f5eb8b20409e5a224663921cc8972aad"
  },
  {
    "url": "blogs/前端/Vue生命周期.html",
    "revision": "28d4b2824c7bf06ddf96b8428ae5a1b1"
  },
  {
    "url": "blogs/前端/优化一次渲染多条数据.html",
    "revision": "0d0595243aec30f6da9fa2786e342430"
  },
  {
    "url": "blogs/前端/图片懒加载原理.html",
    "revision": "55790bcd48c12d6a0e301dec253791fe"
  },
  {
    "url": "blogs/前端/地理定位.html",
    "revision": "ecd5086da350f6cfc1a72cccdce50d89"
  },
  {
    "url": "blogs/前端/富文本编辑.html",
    "revision": "c5c455b01fc2a8656473f6556732a7d8"
  },
  {
    "url": "blogs/前端/常见安全问题.html",
    "revision": "9b3a55652c8d6e5b65df65800a289f27"
  },
  {
    "url": "blogs/前端/打印功能.html",
    "revision": "eefed8397cc1550133106713e42782e3"
  },
  {
    "url": "blogs/前端/拖放.html",
    "revision": "82f524884434c686d5bdac9a87136dd0"
  },
  {
    "url": "blogs/前端/权限控制.html",
    "revision": "c86f809e8ed105831152eedf3f1410a1"
  },
  {
    "url": "blogs/前端/生成二维码.html",
    "revision": "c49094d79d832325d0daadcd3d908c88"
  },
  {
    "url": "blogs/前端/登录功能及记住密码.html",
    "revision": "84e421668289f307149762c6444e2d44"
  },
  {
    "url": "blogs/前端/跨域.html",
    "revision": "11112b7e890391b0b7fa965c78b641fe"
  },
  {
    "url": "blogs/前端/防抖和节流.html",
    "revision": "476c17c4321251661c819c80ab7722be"
  },
  {
    "url": "categories/git/index.html",
    "revision": "6c7836a20259419c72862c70a893f3d6"
  },
  {
    "url": "categories/index.html",
    "revision": "73a8a43c5ff4ccffb3a564545c82a632"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "9e5ab67bf7d46b767a331c4b62601976"
  },
  {
    "url": "categories/前端/page/2/index.html",
    "revision": "ca23cc56c650f685f999b8773910e4a6"
  },
  {
    "url": "categories/前端/page/3/index.html",
    "revision": "868bdf98c8836afba4bd7d37cef6a7b9"
  },
  {
    "url": "index.html",
    "revision": "7d77f1d07001bf581d57c09251e9b230"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "de2fd62649bdee19c41c70a9f112f6ee"
  },
  {
    "url": "tag/echarts/index.html",
    "revision": "060a21bd3531d28b3e0932ac3b68fbe1"
  },
  {
    "url": "tag/git/index.html",
    "revision": "d574b94a4a02721b5f39a61a03c82eb7"
  },
  {
    "url": "tag/HTML5/index.html",
    "revision": "0ba5c275d3eddb5fef345c162eb9b27e"
  },
  {
    "url": "tag/index.html",
    "revision": "37c76bb162f2f094c483e1573a29b706"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "6b39c03786d3c727a766ead4d1881ac3"
  },
  {
    "url": "tag/jQuery/index.html",
    "revision": "78b138e398ba0c5f1e704c5e55868054"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "586e944719ff3f7772e595ffe1723369"
  },
  {
    "url": "tag/Web安全/index.html",
    "revision": "0e20033f9601a72d6ec82755eac91a55"
  },
  {
    "url": "tag/优化/index.html",
    "revision": "a794a36277a16e912387900bf087075d"
  },
  {
    "url": "tag/架构/index.html",
    "revision": "13de0399f07be00c4a6bf20b543ce650"
  },
  {
    "url": "timeline/index.html",
    "revision": "015d8c063e93b8a20add4cbce0fb18e5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
