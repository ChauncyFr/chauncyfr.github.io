/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018.4.27/index.html","3d8b3b55cb2ae545ba7523f2d3d3f856"],["/404.html","41f8e29d0abf1d629715bf6ce23f285c"],["/DeepLab V1/index.html","ed19e6537e048b05a62681ce126183d9"],["/GMS-Grid-base Motion Statistics for Fast，Ultra-robust Feature Correspondence/index.html","42012bb4acc9c7dd4f667fca43ef303e"],["/Hexo-配置1-markdown文章常用功能/index.html","2da18c864e3b16bae7bec904277662d2"],["/How to convert Mask Rcnn model to Tensorflow .pb/index.html","07ea852ca1ad828250258f3ccabeb242"],["/Mac安装opencv3并在python中运用/index.html","06f6e3f1e7f6f7c7ef56234df586afbb"],["/Mac常用快捷键教程/index.html","9a8ab95aa7b8672cc809e3034c38523d"],["/MobileNetV2- Inverted Residuals and Linear Bottlenecks/index.html","167a4a6adbd5ed9fb4404422619582e3"],["/TensorFlow中的维度和shape的理解/index.html","871c4601052a6fc8eaec0366d1fcee24"],["/about/index.html","cb9694aaf846f502d350559634765355"],["/android-studio-如何配置OpenCV的/index.html","f5a22d142e5be8a51181f2691f8b7637"],["/archives/2017/11/index.html","4931579fbd158674ad6d293f3ff4e938"],["/archives/2017/index.html","3a63b4f101b94c782b6f7e64651dec9a"],["/archives/2018/04/index.html","46bd9c2014815529d26e6fd62c1937dc"],["/archives/2018/05/index.html","b3ddb2532a240ccf7043d15e53d69f34"],["/archives/2018/05/page/2/index.html","a46daf9c7a81960599fe4d21d3585a77"],["/archives/2018/06/index.html","d8fea8b9073d66532585638b0430acf8"],["/archives/2018/08/index.html","884a94466fe81926a7fb652858136ab1"],["/archives/2018/10/index.html","9670f7e92b69d08b4870c4e3960e2e40"],["/archives/2018/12/index.html","5ed0a619011ea5fc95a38ec64f36afb0"],["/archives/2018/index.html","4b5ced150cb7a88f6424ac1f69a9bfea"],["/archives/2018/page/2/index.html","f0009c8789a6f32c74c31b89a87e5837"],["/archives/2018/page/3/index.html","dfc6208f4fcc984850bcf3fdc4c9cc59"],["/archives/2019/01/index.html","4b83a9dbbdbb6f097c688589fd6d6f9a"],["/archives/2019/index.html","93536d125036d79c5d07fb48d7af6d15"],["/archives/index.html","74235a08266deb83e6d8f99a118b922c"],["/archives/page/2/index.html","ac84ca69bf4f9313d120f433b2f1608b"],["/archives/page/3/index.html","0a3e0e2df538be89bc1ed577b991db70"],["/archives/page/4/index.html","444f8b3ea4807557748e7949db8f6b10"],["/board/index.html","300a457c913df16d0c7798fe25dcba29"],["/categories/Mac/index.html","87dcd125731cf2e9e2a0309afca9055c"],["/categories/hexo/index.html","d8b96777c021b40f22ce4e03eb90ed95"],["/categories/index.html","51d56590f20bf7c9b965124fdc0177df"],["/categories/家教/index.html","388905bda9d575607e42c1247c3900d0"],["/categories/心情笔记/index.html","97c5e6d2dbcd8ca6ad0fe7d220cc853b"],["/categories/机器学习/index.html","89605c4c7dc5a510dca63bf833547fec"],["/categories/深度学习/index.html","5eeb634035ce41582446f72b7ed24a16"],["/categories/深度学习/page/2/index.html","f67b024be0e0f7861dbd48077d901bb6"],["/categories/相册/index.html","34763cc27382fa4e29acc9ea990c37ac"],["/categories/计算机网络/index.html","e88d4f2f380b2c1cb74bd848a446c395"],["/categories/论文/index.html","d64d44f72ded1ec6961dfa35157da85e"],["/categories/配置/index.html","94878778aac4fe854b190f4909fddccc"],["/css/main.css","fedba1e1970ff639a7398c4f6b05f1b7"],["/hello-world/index.html","6ccfc6ea3f6f2e8a450d0302250cfee7"],["/iTerm 2 实用快捷键/index.html","b20f1c9d7089b314367a13697a057e0a"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","a8c8e88484a2182c8ac1598db0919322"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/header-bk.jpg","de2d4a4aef3058895ddc754cf2e8b1f9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/sidebar-bk.jpg","1e90efea624d0dd629f39c2a74e91e4f"],["/images/sidebar-bk1.jpg","6ad24f187fc1c4fcea0a6e83199dcd03"],["/images/sidebar-bk2.jpg","7db6521eaee9ce30bfaafb975598bc27"],["/images/sidebar-bk3.jpg","b40f0faf1816c3771823ec2088b0e0fb"],["/images/ww.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/index.html","a7908c82a3e311689851512af6464601"],["/js/Valine.min.js","a88fb6f61f1236540543c6a431547095"],["/js/src/Valine.min.js","3ec943ae1c53ce007602b7c53f9ae1a3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","8b6864d08134476c1fcb328f5e51dff3"],["/js/src/custom.js","f15156830de1f691bdc4b7fd4254b9e6"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","a94df9d4c18f632e6dc097bfefb0aad8"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","4a1a8d38ee1fa2d32390ce6da4366af2"],["/page/3/index.html","9a132577eff6b5eecdaab99146ec5b5b"],["/page/4/index.html","a4fc2f1a3a822c83f60030fda56d3e3d"],["/photoPostName/index.html","42fb87f09a6055e894c882cb12973708"],["/sw-register.js","637990644931eb7c9fa794a10f929a0f"],["/tags/Android-studio/index.html","10e7be67ade0266b8085a58da85efdb6"],["/tags/CVPR-2017/index.html","fa70ce5e46c4aa8b9fbb68b56597ad8f"],["/tags/GMS/index.html","fad8a0d3736408827bf125c75919c710"],["/tags/KDC/index.html","421c361e1c91ede97f639653d44f31f0"],["/tags/Mac/index.html","523ad69d63b209b24da5a3337b415f5a"],["/tags/TensorFlow/index.html","26620437fb68c3f73b359966af3358a4"],["/tags/hexo/index.html","476c92eeb04e768b48de12548bec7bf1"],["/tags/iTem2/index.html","1f709dd85803bfb136511f912b3c6e39"],["/tags/index.html","fda43c5b710566462b634184797b1c8f"],["/tags/mask-rcnn/index.html","8e85c860c58e9c140b22d0e5ceaa6115"],["/tags/opencv/index.html","4707cbefcec7a4ee79a7d31c96c2b0d5"],["/tags/opencv3/index.html","1c88e2b8d03f1558f68b9feb08ed7035"],["/tags/pycharm/index.html","2acb5f554c40f138c37550bf6d89d24a"],["/tags/python/index.html","b4ea98719023ada7938fa1fbb40059b5"],["/tags/丹岑/index.html","2f55b277e6ac401a0029e88bf1e36941"],["/tags/卷积/index.html","a5c253e966b1b3041b0359cefc129938"],["/tags/实力分割/index.html","ecdd1e7ea03f7a942efc40d034a43203"],["/tags/家教/index.html","8ec010c0b86f91485561c29b6fc89b15"],["/tags/密钥/index.html","4c4ec213d1d99cfc0c85aeac3bc968c7"],["/tags/心情/index.html","26e4354b6933d2221c550bcd76099509"],["/tags/快捷键/index.html","f506b76154c923a8f551aeda48c2b31a"],["/tags/曹晨/index.html","33e4068dc4b8242880219ff5c92e2085"],["/tags/机器学习/index.html","26c28e2d212506d8042fef26e605cb2b"],["/tags/案例/index.html","384c9eb0b41d2a1fecd6798daa28d4a1"],["/tags/深度学习/index.html","a370f8b8762b8e746e800b1dfd35b53e"],["/tags/深度学习/page/2/index.html","cb3226c25630192610d9cb489f26803b"],["/tags/照片/index.html","7837a7cad5365678b3db5827fd85c008"],["/tags/语义分割/index.html","a97c22d3df801b204b23cbe880f883a8"],["/决策树讲解/index.html","4e3400ee59feedcdef19745b1f0e3744"],["/分式方程应用题分类讲解/index.html","ac7c2ae17da95da1dc56424195ba384f"],["/如何配置所需要的库/index.html","abbda07b72e28bea358c05cb6dd36717"],["/密钥分发中心（KDC）/index.html","e541fe321f3a0bb6e2fca8ad9fcdf39d"],["/测试2/index.html","5ccf8374f179728af667af30686d24ec"],["/深度卷积可分离参数计算/index.html","9bc1e391eae8cbf4e9b9112bde1eb88d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
