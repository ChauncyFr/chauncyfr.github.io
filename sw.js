/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018.4.27/index.html","5ee6dbcc930fdda9b2da2e33f7079884"],["/404.html","41f8e29d0abf1d629715bf6ce23f285c"],["/DeepLab V1/index.html","8aac06903a36d008d5a0588d58f73a2a"],["/GMS-Grid-base Motion Statistics for Fast，Ultra-robust Feature Correspondence/index.html","5b094ecb11aa61e22987086692b50c23"],["/Hexo-配置1-markdown文章常用功能/index.html","1329e8bd0ca20ac4d21d5543129b3134"],["/How to convert Mask Rcnn model to Tensorflow .pb/index.html","7fff88d5475d65c25968372474722ba2"],["/Mac安装opencv3并在python中运用/index.html","93f4c1f9f475fdf5973a42bf217f9d65"],["/Mac常用快捷键教程/index.html","981b54c211410aa9f8cb0923fec7d722"],["/MobileNetV2- Inverted Residuals and Linear Bottlenecks/index.html","318a3193a1dd8c7d26ce627f00b961f8"],["/TensorFlow中的维度和shape的理解/index.html","984e09452062f25baeac02fb6b0d5ce7"],["/about/index.html","195480482f8aa9b4d6b1f58f6d8a656c"],["/android-studio-如何配置OpenCV的/index.html","c5839fee14c14ae5975293734900a965"],["/archives/2017/11/index.html","946531959e66ae2782d1b128d50578a1"],["/archives/2017/index.html","dc4ca7348cc34edb32ad101c6efb63ab"],["/archives/2018/04/index.html","30f409b828004f57452e217bcfef9858"],["/archives/2018/05/index.html","993b4042a146f574d68e0d6a18064c33"],["/archives/2018/05/page/2/index.html","3338dec469113f8d5fe127701cc66bd7"],["/archives/2018/06/index.html","470eaf938d057119be4870001f0b676b"],["/archives/2018/08/index.html","fea6f2efa2994eb14274585891fad06c"],["/archives/2018/10/index.html","40a7eda61b60360817968a498b0d3df8"],["/archives/2018/12/index.html","ebaa3c2697a36b406edbf1108d56ce35"],["/archives/2018/index.html","a19a3f8689bb686eee17f0b4afd82ef2"],["/archives/2018/page/2/index.html","295542b1760081f6449ba48b9c679e7a"],["/archives/2018/page/3/index.html","7a3b61e8f79a8ce66796c03b5ead2f17"],["/archives/2019/01/index.html","0055a218d95891f5ad2bac08361ad64c"],["/archives/2019/08/index.html","020feb4379eda6fbbc95773022aedb85"],["/archives/2019/index.html","c5f9d147c8d36a89c0f405112135c612"],["/archives/index.html","948d832e3879717d3884ce1d6a5cfea7"],["/archives/page/2/index.html","c16b49fb849d259d4a6ae3dd3489b0c3"],["/archives/page/3/index.html","1208f1f2ea0da9d06ce38266e48ab47b"],["/archives/page/4/index.html","23ee558b0708200d84d6129709d3b532"],["/board/index.html","bb86e298920a47ac95919f172d78cec5"],["/categories/Mac/index.html","f0409ccddd3e5f25b40060e33127c070"],["/categories/hexo/index.html","c84e992c05c336b2d688638e13feef9a"],["/categories/index.html","ec053c6f551fcfc43b61c55788090a88"],["/categories/亲爱的一冰专属/index.html","a8b1a2f6c27b95b99b66699faadc5abf"],["/categories/家教/index.html","efa869a610d8f6d04c311b57764cd4a6"],["/categories/心情笔记/index.html","1dc0a437ab11f3b59e6c1472fe9c6a48"],["/categories/机器学习/index.html","d202d5add72407d1d255a3b7359536b2"],["/categories/深度学习/index.html","337ec57b9572937488714d916d6a3b5b"],["/categories/深度学习/page/2/index.html","6692efe24bbd57574ba17ba160928c15"],["/categories/相册/index.html","59565fb4a6455878bb8bdcab6f4342ef"],["/categories/计算机网络/index.html","408b7cc5123000a0585d02fc01c1df81"],["/categories/论文/index.html","97cbf0fc68fc9d3b1c4503d902fb4933"],["/categories/配置/index.html","49cfad3ffe2feec2c9c1b4252debba02"],["/css/main.css","33bcb55dfa23fcb39e08e1ce70d734f1"],["/hello-world/index.html","0910abbcc5994758085e0adc74ea00f7"],["/iTerm 2 实用快捷键/index.html","24f415d3c3937360ed6abffba05b5acc"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","a8c8e88484a2182c8ac1598db0919322"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/header-bk.jpg","de2d4a4aef3058895ddc754cf2e8b1f9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/sidebar-bk.jpg","1e90efea624d0dd629f39c2a74e91e4f"],["/images/sidebar-bk1.jpg","6ad24f187fc1c4fcea0a6e83199dcd03"],["/images/sidebar-bk2.jpg","7db6521eaee9ce30bfaafb975598bc27"],["/images/sidebar-bk3.jpg","b40f0faf1816c3771823ec2088b0e0fb"],["/images/ww.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/index.html","de51c4cd5c4de4f2e5c39a439cdbe81b"],["/js/Valine.min.js","a88fb6f61f1236540543c6a431547095"],["/js/src/Valine.min.js","3ec943ae1c53ce007602b7c53f9ae1a3"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","8b6864d08134476c1fcb328f5e51dff3"],["/js/src/custom.js","f15156830de1f691bdc4b7fd4254b9e6"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","5a87dd19400b2870ef6734f56cfe2208"],["/js/src/motion.js","a94df9d4c18f632e6dc097bfefb0aad8"],["/js/src/post-details.js","9a53fef7381270bb8c96a611d52ebc04"],["/js/src/schemes/pisces.js","aa788a9a68ff8d352b7b6e3dbb4ace96"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","ecade23d7bb77f013893186d56a92059"],["/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["/js/tagcloud.js","7dc7796a280ab49d353c112275f52d81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","3da4eef253db4019ff4d8b6bf829b400"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","b0923ee41112177f102311d9d08c6dd4"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d4c7b67d65080aeb7ab470c5e8060179"],["/page/3/index.html","7672171ce4a7b23b5bcea99123aa0cb1"],["/page/4/index.html","8e8a39573832669087883c522555f2e7"],["/photoPostName/index.html","d43ca292c48555ed953384a818acb4c5"],["/sw-register.js","db86303eaca19e1eef2248c8d8779230"],["/tags/Android-studio/index.html","f9b76498e6d2cdc9c8684dae67c8f5f4"],["/tags/CVPR-2017/index.html","531712c11491fe78cfdc1474ba9e8d71"],["/tags/GMS/index.html","ec112221dddc6c30865b6dfa8c712efe"],["/tags/KDC/index.html","aac59e5ea7f4959b3e744a0908bac618"],["/tags/Mac/index.html","098a4701a6be34577004935df04df7f5"],["/tags/TensorFlow/index.html","70f35527ea82844f51a664e655426c12"],["/tags/hexo/index.html","98cd0634fbeffffa0e841a38f4efd63d"],["/tags/iTem2/index.html","3242a8ae3313199fa26f8c271799f961"],["/tags/index.html","3aeea46a15387aa18655b23c8f583668"],["/tags/mask-rcnn/index.html","8edd79e8f2eca6bf8c1c3ed7bcf79ea9"],["/tags/opencv/index.html","c3a6b47d01034b8730384ad186771d1e"],["/tags/opencv3/index.html","802b104ce1398b9b884fc3a19dd2463b"],["/tags/pycharm/index.html","44b942948488f4cf4c9e3a0164c2e27c"],["/tags/python/index.html","a2de2ca1b2e7658f6ad329697cf2b48d"],["/tags/丹岑/index.html","9ca6a26e01d6f09e749e444939891260"],["/tags/卷积/index.html","559c5ecc02c611be2bb5e34832c8465e"],["/tags/实力分割/index.html","01e75fd5396163ff5d49114709ea13ac"],["/tags/家教/index.html","2493780ddd8ce066931e8533c8674210"],["/tags/密钥/index.html","217b38fd51e38367d5a7a04dbd39ff15"],["/tags/小可爱/index.html","a5350bff465949cd7482f25ddb035517"],["/tags/心情/index.html","f5c9bdf4c33f9aea537219a282b13d6b"],["/tags/快捷键/index.html","7b63f34d61aa3a9d46d511dd6e328a58"],["/tags/曹晨/index.html","f74081dc8ce6f3cfd14f86eb4a54a168"],["/tags/机器学习/index.html","a2153bdefb829890de4771d91461aeea"],["/tags/案例/index.html","90a7228e68bddd73250a08c9dc0f62e5"],["/tags/深度学习/index.html","16e549c4905fa553a2b96e251e254ea9"],["/tags/深度学习/page/2/index.html","3e2e41b7e16cb80dd705fec02142e8d7"],["/tags/照片/index.html","e46e671f41ea6c0391cfe4dc798bc494"],["/tags/语义分割/index.html","108ea1ac41a8dcd00d4a7cbc7d94277c"],["/决策树讲解/index.html","0dbe5f1dc0107750aaa58f88fa61b584"],["/分式方程应用题分类讲解/index.html","85c77756b78f17dc96d7ee2848742d81"],["/如何配置所需要的库/index.html","1f884f9f0f4de514ae6366679c41a77c"],["/密钥分发中心（KDC）/index.html","4e3a03dfc02f7045117495ba1c7a7586"],["/小可爱专用-手机照片清理教程/index.html","d006f092e4272c5d4bb4f3fcc1bde8a0"],["/测试2/index.html","4660f6290866e27f24ee22060ec76a29"],["/深度卷积可分离参数计算/index.html","8aa3d9bf9ef28e55a593f507905a7c9d"]];
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
