if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let c={};const f=e=>a(e,r),b={module:{uri:r},exports:c,require:f};i[r]=Promise.all(s.map((e=>b[e]||f(e)))).then((e=>(d(...e),c)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"about/index.html",revision:"9a130af3f468b193be4d43ad4e41d9c8"},{url:"archives/2022/03/index.html",revision:"4879199dd317e16b0de1897e209a1218"},{url:"archives/2022/03/page/2/index.html",revision:"39b18ef25f2af946d05054a254c5402c"},{url:"archives/2022/04/index.html",revision:"e4e0c4678d7fe53c400227d84733b201"},{url:"archives/2022/04/page/2/index.html",revision:"0fe63df4eaed76f31f837d0fb1e4b0d1"},{url:"archives/2022/index.html",revision:"53b5bcac9e3c0bf46ee8daa70da9a2ed"},{url:"archives/2022/page/2/index.html",revision:"2a934122ba0ff7fffdf7f6c556c15bad"},{url:"archives/2022/page/3/index.html",revision:"7e9fbe003921f7d006a60862958b48d6"},{url:"archives/2022/page/4/index.html",revision:"a57959eb38dd695c48cb854eab1a7ac0"},{url:"archives/index.html",revision:"3181987c21d55d49bce5329ad068d47b"},{url:"archives/page/2/index.html",revision:"4bce81f76f954238b9268594a19ebdca"},{url:"archives/page/3/index.html",revision:"4d871b8cb6def7215fb508811c92d036"},{url:"archives/page/4/index.html",revision:"ee43a62ba361fb6645a525415ffbe84d"},{url:"categories/Chinese-course/index.html",revision:"70203606ee1fcb64b798a6d82d9fcdef"},{url:"categories/Chinese-Idioms/index.html",revision:"1ff69f157831c1693a806f71432aaa8d"},{url:"categories/Chinese-Poems/index.html",revision:"c1b6871f5e0a1892b4840a1511446f3c"},{url:"categories/Chinese-Poems/page/2/index.html",revision:"4bcbbfa217a98a42e23c1123150c6db6"},{url:"categories/Chinese-Poems/page/3/index.html",revision:"aeb31f398b6fa651aad7f15747c7c597"},{url:"categories/Encyclopedia-of-China/index.html",revision:"53a12e9de99613f889cbe91e12f3ad69"},{url:"categories/Huangshan/index.html",revision:"4329c55689db20e814d6b4a216c5f64a"},{url:"categories/Hui-Culture/index.html",revision:"fdb89bfd5492ea659221c520062ef45b"},{url:"categories/index.html",revision:"d25d5aeed44820e3733453cc99618134"},{url:"css/barrager.css",revision:"c3faa9826b45bdd738e401f0a9c4192f"},{url:"css/bb.css",revision:"a13497fcf67377687248cad43633417c"},{url:"css/gallery.css",revision:"995e260b3cd2e85de9f9892b11239361"},{url:"css/gitment.css",revision:"dcd15488193705c273213e72e5ebb7ce"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/matery.css",revision:"5e6ba13867a6b69936f9693d942c3d3a"},{url:"css/my-gitalk.css",revision:"3de42b649a2216cc9bbee350cde6a7e0"},{url:"css/my.css",revision:"c4ad2103f0a537e360bd16650e547b22"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"favicon.png",revision:"98c8977e9c27c42380c35fffd8db7f12"},{url:"friends/index.html",revision:"629c300251fa9dd2500baa6dbfb97374"},{url:"gallery/index.html",revision:"b1313cfe7eff8ac46ff02296441ae8d5"},{url:"index.html",revision:"6ee8b385f853d5bb373f4c2f9836991c"},{url:"js/crypto-js.js",revision:"60ab5dbd46dfa34dfef3c1548a22a978"},{url:"js/gallery-encrypt.js",revision:"84a2c90b15a9313ca9a29ef49e70ba3d"},{url:"js/jquery.barrager.js",revision:"1c84c8e84cd2f94bdb222c75f0638bb6"},{url:"js/matery.js",revision:"c2d4306a24948ffd6f7f853449c2e44b"},{url:"js/search.js",revision:"7eca48f0950d5e0a2e04b65964c34d2f"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"libs/animate/animate.min.css",revision:"178b651958ceff556cbc5f355e08bbf1"},{url:"libs/aos/aos.css",revision:"04140612fb8b418cda27dee6ecf61042"},{url:"libs/aos/aos.js",revision:"9cc58a148779953a5ebe9360d6cf978c"},{url:"libs/aplayer/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"libs/aplayer/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"libs/aplayer/Meting.min.js",revision:"c0e989e618a2c6f90f59fa1822941d75"},{url:"libs/awesome/css/all.css",revision:"fe11a3a32db7284d920063f21e7d3777"},{url:"libs/awesome/css/all.min.css",revision:"dfb8fc36e102730fddf78b5494eb0035"},{url:"libs/awesome/webfonts/fa-brands-400.ttf",revision:"0fbfc862056bad982c93ba51460e31d9"},{url:"libs/awesome/webfonts/fa-brands-400.woff2",revision:"a9afdb72826cde196ddf29eb8f9d0f8f"},{url:"libs/awesome/webfonts/fa-regular-400.ttf",revision:"35307505c129ab1f9173f7917b50756f"},{url:"libs/awesome/webfonts/fa-regular-400.woff2",revision:"f817938f131b0cabee81e59a96f9c2a6"},{url:"libs/awesome/webfonts/fa-solid-900.ttf",revision:"ffc89d3ea2e2c3ba295689305f91ca78"},{url:"libs/awesome/webfonts/fa-solid-900.woff2",revision:"297973a488f688271dd223d542ba2697"},{url:"libs/awesome/webfonts/fa-v4compatibility.ttf",revision:"4bde6a62454b669bb0ce0448491a71d7"},{url:"libs/awesome/webfonts/fa-v4compatibility.woff2",revision:"72d85419b5a3c5867b1903ef565f5a8d"},{url:"libs/background/canvas-nest.js",revision:"a62fd97db8d4bce3a5e30406831e398d"},{url:"libs/background/ribbon-dynamic.js",revision:"eb6e9d5f62d717fa62445227883dc7b7"},{url:"libs/background/ribbon-refresh.min.js",revision:"6692e63df52b5230e673fc0a3aea5534"},{url:"libs/background/ribbon.min.js",revision:"52d83827dd2784a3d41b65694a6534e5"},{url:"libs/codeBlock/codeBlockFuction.js",revision:"1f379c32001349805cb987371cfccd1a"},{url:"libs/codeBlock/codeCopy.js",revision:"efa20c294ac279ca9c5a55e4299b80be"},{url:"libs/codeBlock/codeLang.js",revision:"dc4533be151964237f2a0006db27e5fa"},{url:"libs/codeBlock/codeShrink.js",revision:"ae277c5d8f8336fce64f89203b926d19"},{url:"libs/cryptojs/crypto-js.min.js",revision:"a39fc84fa7659e1d898bbcddf20aa989"},{url:"libs/dplayer/DPlayer.min.css",revision:"31ac9b1a5a7f018dcc9a0e0f66261c08"},{url:"libs/dplayer/DPlayer.min.js",revision:"472552604f19815d0a634bd3d953171e"},{url:"libs/echarts/echarts.min.js",revision:"b4af19a834bf7cd6435dd8e1ad24cc90"},{url:"libs/fancybox/fancybox.js",revision:"49a6b4d019a934bcf83f0c397eba82d8"},{url:"libs/fancybox/jquery.fancybox.css",revision:"a2d42584292f64c5827e8b67b1b38726"},{url:"libs/gitalk/gitalk.css",revision:"8476031a633732dff9875feae0890070"},{url:"libs/gitalk/gitalk.min.js",revision:"7152eaccbb4bfa6333e19971960018e9"},{url:"libs/gitment/gitment-default.css",revision:"46f304e637384c546f25b5ad90f0fe5a"},{url:"libs/gitment/gitment.js",revision:"2d64177544df22f08ccc1c86fc181e0e"},{url:"libs/instantpage/instantpage.js",revision:"47fcedd7bba8eb1ad3b035c8727f06b5"},{url:"libs/jqcloud/jqcloud-1.0.4.min.js",revision:"b5b4d1002ff256e9bed2b339f572dedc"},{url:"libs/jqcloud/jqcloud.css",revision:"978ed746c5673321fba8401ed6a536ac"},{url:"libs/jquery/jquery-3.6.0.min.js",revision:"8fb8fee4fcc3cc86ff6c724154c49c42"},{url:"libs/justifiedGallery/justifiedGallery.min.css",revision:"0eb3894f1fb48fbc54fbd2072b4372f8"},{url:"libs/justifiedGallery/justifiedGallery.min.js",revision:"f12e15ba020d049ba166af44960051c9"},{url:"libs/lightGallery/css/lightgallery.min.css",revision:"0ecaf59cd1b7e19f2a7b34683d32068c"},{url:"libs/lightGallery/fonts/lg.svg",revision:"2ec2cb2199d4d881e6a6ad86690f6add"},{url:"libs/lightGallery/fonts/lg.ttf",revision:"f4292655f93dd12d9b8e4fc067ef2489"},{url:"libs/lightGallery/fonts/lg.woff",revision:"1fbfd4bcffccb94e8e8a5ea70616b296"},{url:"libs/lightGallery/img/loading.gif",revision:"bbdac9cda255c54bfd809110aff87898"},{url:"libs/lightGallery/img/video-play.png",revision:"d672259b56b5dd1abdff3a98d87864e8"},{url:"libs/lightGallery/img/vimeo-play.png",revision:"a951123e4f7cb5d037a6a872f001a8af"},{url:"libs/lightGallery/img/youtube-play.png",revision:"6267452d4f9c32c7550cec6587f985d3"},{url:"libs/lightGallery/js/lightgallery-all.min.js",revision:"b4705ab663a9555d29fa69a3cf6bec0b"},{url:"libs/masonry/masonry.pkgd.min.js",revision:"520e46df77727aaf3d5e799ef241be02"},{url:"libs/materialize/materialize.min.css",revision:"3a5681d6939e48ba5038fbf8f9f244a2"},{url:"libs/materialize/materialize.min.js",revision:"87d84bf8b4cc051c16092d27b1a7d9b3"},{url:"libs/mermaid/mermaid.min.css",revision:"5e9cbdf9d18097fc1d4649670a5be633"},{url:"libs/mermaid/mermaid.min.js",revision:"4164f15ddeaa6d8eec7f087c76c58dc0"},{url:"libs/minivaline/MiniValine.js",revision:"bb0f8ed46503472ce77575f9db9dda93"},{url:"libs/others/busuanzi.pure.mini.js",revision:"4c9a89414b97bb2053ccc7cb83c83b6e"},{url:"libs/others/clicklove.js",revision:"6a3861c11c04010dd4de27c162cb8a83"},{url:"libs/others/sakura-half.js",revision:"d1cccaec887352d5fff341f873ee0210"},{url:"libs/others/sakura-reduce.js",revision:"c86b1fe1a4f144ec4784b13b17821869"},{url:"libs/others/sakura-small.js",revision:"d9a110e05f736ef48c93f05b45edd397"},{url:"libs/others/sakura.js",revision:"cb6251075cc14487276119b508cd68bf"},{url:"libs/others/snow.js",revision:"f320c79941e71f888b78084d8041e8d9"},{url:"libs/others/star.js",revision:"27343eec730d8dc904e90c898ee84824"},{url:"libs/others/TencentCaptcha.js",revision:"628af9af35fd7579c1b5f481f7a77aa0"},{url:"libs/prism/prism.css",revision:"32b98c935f97106089a2510975293524"},{url:"libs/scrollprogress/scrollProgress.min.js",revision:"63212ebfb10736224d44bcda8a155278"},{url:"libs/share/css/share.min.css",revision:"a5d28161d70468ec2378da676284a34f"},{url:"libs/share/fonts/iconfont.eot",revision:"e83ffaa95463f987abe5db5bbbe303cc"},{url:"libs/share/fonts/iconfont.svg",revision:"6b3cbfae255ab1f2c1e8e8bfc80754d4"},{url:"libs/share/fonts/iconfont.ttf",revision:"9ac2cc5ae8616eb50c033525dc14a5eb"},{url:"libs/share/fonts/iconfont.woff",revision:"bf0fc2ec6e2a614635e0ab6e81d059ef"},{url:"libs/share/js/jquery.share.min.js",revision:"044c903516dd20036471d65d5269821c"},{url:"libs/share/js/social-share.min.js",revision:"7d8197222dcdbe0e7e645a605bf76851"},{url:"libs/tocbot/tocbot.css",revision:"e8f0173e7c5216e5359587a88a570b77"},{url:"libs/tocbot/tocbot.min.js",revision:"4d7b1dfb31f74b6d0701cf3120933597"},{url:"libs/twikoo/twikoo.all.min.js",revision:"feefb4c63d8eea58211ef6113d5ef163"},{url:"libs/valine/av-min.js",revision:"df7538b359e7a7e904c430e8385b44da"},{url:"libs/valine/Valine.min.js",revision:"3c37a47598a8970c84db5591f01c483d"},{url:"libs/waline/Waline.min.js",revision:"ed6cbbe9d1e40233030635398ed386aa"},{url:"medias/avatar.jpg",revision:"415de4d5d462d6bd318c09824113e54e"},{url:"medias/banner/0.jpg",revision:"306003d8042084347393c395cf75c56d"},{url:"medias/banner/1.jpg",revision:"9269002d0873d0e0fe9c9384507a0f81"},{url:"medias/banner/113.jpg",revision:"10507add122c1f29ccf4f229ba432f43"},{url:"medias/banner/2.jpg",revision:"9d5259c1c229c7b2a7ea813b5246ce26"},{url:"medias/banner/3.jpg",revision:"8c7505b632239a7c4e39f1667c3928b0"},{url:"medias/banner/4.jpg",revision:"86b8effb2e19b0251f53a7dd8869dc8e"},{url:"medias/banner/5.jpg",revision:"ac669fc927093822996b6bfbafc9c3a0"},{url:"medias/banner/6.jpg",revision:"a939c8c257fad2cf32ff4db949f6d578"},{url:"medias/banner/m1.jpg",revision:"d39f71c4efb6282e88cefc46cf128ef5"},{url:"medias/banner/m10.jpg",revision:"c3371c385786d9209e2cb68a15b35e39"},{url:"medias/banner/m11.jpg",revision:"1c7c8554383f7429e9a6b2f74782e14d"},{url:"medias/banner/m12.jpg",revision:"9af07020e8175d9588419fe57628b99b"},{url:"medias/banner/m13.jpg",revision:"ef424bd9b1b14eb293d0f7b71cab19b4"},{url:"medias/banner/m14.jpg",revision:"08739cae9b540034c83a07c9c2fc42d2"},{url:"medias/banner/m15.jpg",revision:"62c2b583d6392987a549e27f06579dbe"},{url:"medias/banner/m16.jpg",revision:"23f06e55f47e9927d386cc79134e109d"},{url:"medias/banner/m17.jpg",revision:"914a5e9ddc236a654f3f9c86fcaff485"},{url:"medias/banner/m18.jpg",revision:"3635aaee703d6ec0f26dbf99c3348e3a"},{url:"medias/banner/m19.jpg",revision:"c0af3820facf632200247ef15fa69971"},{url:"medias/banner/m2.jpg",revision:"a1fd27dfbb2df24b6f58bf56421674ba"},{url:"medias/banner/m20.jpg",revision:"9ed7416e3f23e003bf5e5ee8e3642b78"},{url:"medias/banner/m3.jpg",revision:"bad921006aed54661625f9ff03de846d"},{url:"medias/banner/m4.jpg",revision:"4e643dfd6625c8c41128a9db249fd74f"},{url:"medias/banner/m5.jpg",revision:"6191141984a6174c74202c0f904c9567"},{url:"medias/banner/m6.jpg",revision:"6b471d458e3a489436a033416bfdd64f"},{url:"medias/banner/m7.jpg",revision:"320223e0cf019bd81aabc1aa521d3a4f"},{url:"medias/banner/m8.jpg",revision:"ed8af1b6e11e12d155b32a35ad373eec"},{url:"medias/banner/m9.jpg",revision:"b5e69f32173ce1d1cfcb29d1984bd4a6"},{url:"medias/barrager/0.png",revision:"f5d8318197ffd7ce9aacf308bf186c5e"},{url:"medias/barrager/1.png",revision:"ea244312d1bf53680470f3da4d308bb4"},{url:"medias/barrager/2.png",revision:"50e265a8acfea4b3bafd407dff4ceaba"},{url:"medias/barrager/close.png",revision:"ab45ca050318e57b6559bb3503bc19a1"},{url:"medias/chinese/shici/hong1.jpg",revision:"179633450be07698cf89ef90f134c1e4"},{url:"medias/chinese/shici/shui.jpg",revision:"b69644cb7c688d10f2d4eb42e757809c"},{url:"medias/chinese/unit1/u1.jpg",revision:"1e2353ae2920cb58d65a2144e89edaf8"},{url:"medias/chinese/unit1/u10.jpg",revision:"ce125c63ff07cbdf882a8a88b6be1aea"},{url:"medias/chinese/unit1/u11.jpg",revision:"cb8e22f6290b880e05d116cd92fdf8c5"},{url:"medias/chinese/unit1/u12.jpg",revision:"bf79650a164dd3c0678991318b75aafc"},{url:"medias/chinese/unit1/u13.jpg",revision:"18c169a67ce853cea9dab6ffbf754d52"},{url:"medias/chinese/unit1/u14.jpg",revision:"55ec4ff8059bb822e8fcd61b1da2b482"},{url:"medias/chinese/unit1/u15.jpg",revision:"1fbca61fb34cad878978cbc447ba9434"},{url:"medias/chinese/unit1/u16.jpg",revision:"e7a54aa4757004eae3ab20987f294599"},{url:"medias/chinese/unit1/u17.jpg",revision:"0907b470237672948cba09cdf5c891a6"},{url:"medias/chinese/unit1/u18.jpg",revision:"ff2115542ad1f7985ad37dacbf6fb936"},{url:"medias/chinese/unit1/u19.jpg",revision:"03948a56bc8b8889252c805ea6442ebd"},{url:"medias/chinese/unit1/u2.jpg",revision:"9cd94a1f9d585f1ee989f3a063a8554e"},{url:"medias/chinese/unit1/u20.jpg",revision:"63ae6693ffe7882c73709b04e5d7098c"},{url:"medias/chinese/unit1/u21.jpg",revision:"32112cf928ad17918bbf43fda65e6712"},{url:"medias/chinese/unit1/u22.jpg",revision:"7d065419295c9a1667a7a551d3754cc8"},{url:"medias/chinese/unit1/u23.jpg",revision:"1ec2761d295729cb405e4b6d70617703"},{url:"medias/chinese/unit1/u24.jpg",revision:"5e3767d58db09a7dad4c8773b81f0e07"},{url:"medias/chinese/unit1/u25.jpg",revision:"3fdccd162254a90219d0df254f4a61d4"},{url:"medias/chinese/unit1/u26.jpg",revision:"62c5f27986fd8e8125ba58f8ae00374f"},{url:"medias/chinese/unit1/u27.jpg",revision:"10952d1d57659c381c6ecd4b1e413480"},{url:"medias/chinese/unit1/u28.jpg",revision:"d7dc6ef495431348750a6d6de416bd43"},{url:"medias/chinese/unit1/u29.jpg",revision:"b2760040f44ca2a6650207aa55e403e4"},{url:"medias/chinese/unit1/u3.jpg",revision:"b0c31fe5ca57d8c7f72563ca52caae59"},{url:"medias/chinese/unit1/u30.jpg",revision:"b4f8ce39bb59da7a9fe98995b1b9004b"},{url:"medias/chinese/unit1/u31.jpg",revision:"d51c86f15c8d351589060285b818addf"},{url:"medias/chinese/unit1/u32.jpg",revision:"7c9e327716625aaee23a02562fca982c"},{url:"medias/chinese/unit1/u33.jpg",revision:"7193059f0e7c6cfc3724274aac23773c"},{url:"medias/chinese/unit1/u34.jpg",revision:"56179d4d999d79f7d57c82f8a0f7d7d4"},{url:"medias/chinese/unit1/u35.jpg",revision:"1ec023951fadde45c3649b3d18618e80"},{url:"medias/chinese/unit1/u36.jpg",revision:"35b0a8ab4b283b81aef9744150eeecea"},{url:"medias/chinese/unit1/u37.jpg",revision:"87e61f6e06b5eedcb9af928b7554fab7"},{url:"medias/chinese/unit1/u38.jpg",revision:"28e3903ba9196182758c46f1f3d7a523"},{url:"medias/chinese/unit1/u39.jpg",revision:"caf9d9b7d6c83200c1a1f535b19df172"},{url:"medias/chinese/unit1/u4.jpg",revision:"072c8c2669651760faef3e09c41a54bc"},{url:"medias/chinese/unit1/u40.jpg",revision:"c274dd5cab980bfeb43e6f2824e9e68a"},{url:"medias/chinese/unit1/u41.jpg",revision:"71998cdba6f0b7f75bb55cfd531f8bc7"},{url:"medias/chinese/unit1/u42.jpg",revision:"645c2eacfa6b9b426bd8b3479272a18d"},{url:"medias/chinese/unit1/u43.jpg",revision:"32191e090baf712385ad106f8230bc5f"},{url:"medias/chinese/unit1/u44.jpg",revision:"a16b8bf6ab76bf839a53d16bfb9e1c1a"},{url:"medias/chinese/unit1/u45.jpg",revision:"484cd3a73438b2da45757952f6a0b01e"},{url:"medias/chinese/unit1/u46.jpg",revision:"71f930123ceb063c9ae5e12f2686f9ed"},{url:"medias/chinese/unit1/u47.jpg",revision:"747d1596857581eada5b148e11b3c2af"},{url:"medias/chinese/unit1/u48.jpg",revision:"45b4e5f31ba6d0246b8757e61a6c86ce"},{url:"medias/chinese/unit1/u49.jpg",revision:"17679a37e764a2747f183cb8ae9abf4b"},{url:"medias/chinese/unit1/u5.jpg",revision:"ec6725aba26396df097bd321b318c6de"},{url:"medias/chinese/unit1/u50.jpg",revision:"ca0334e5ab747db9c21d12b2c89ce315"},{url:"medias/chinese/unit1/u51.jpg",revision:"b03da6a1694743e508c2805613c8874c"},{url:"medias/chinese/unit1/u52.jpg",revision:"34900760bb9cb0891c865af588f8e0f5"},{url:"medias/chinese/unit1/u53.jpg",revision:"483b2bd8e1e35942120c22b7fe982413"},{url:"medias/chinese/unit1/u54.jpg",revision:"5aac608eee75b23f32aea9c60e752801"},{url:"medias/chinese/unit1/u55.jpg",revision:"ce59d8d694220a853487a392be14922e"},{url:"medias/chinese/unit1/u56.jpg",revision:"8d9dc597a80e71e27534df0659c79736"},{url:"medias/chinese/unit1/u57.jpg",revision:"e1c2b582eed721afe5ddb250dfa6e62f"},{url:"medias/chinese/unit1/u58.jpg",revision:"c0d11ff7db5b89cc45692a8c04f87134"},{url:"medias/chinese/unit1/u59.jpg",revision:"cef695642f7681de579125d40b38ebac"},{url:"medias/chinese/unit1/u6.jpg",revision:"8f0ad5122eefe0deb4d773f72f88c6a2"},{url:"medias/chinese/unit1/u60.jpg",revision:"3310551a66923cb266832ed515beabe5"},{url:"medias/chinese/unit1/u61.jpg",revision:"1b18f4aaa1fb43c4adb22978f6da86d0"},{url:"medias/chinese/unit1/u62.jpg",revision:"315d3dc52445c67c5c45ee340cef4f12"},{url:"medias/chinese/unit1/u63.jpg",revision:"1d17b5921c9b5c6d5c39c81a5e82e9da"},{url:"medias/chinese/unit1/u64.jpg",revision:"b86b789288fc036746a5a3e37b369170"},{url:"medias/chinese/unit1/u65.jpg",revision:"841063ac3271fe4972f21c26015fb894"},{url:"medias/chinese/unit1/u66.jpg",revision:"75ec51e6330613fc88dc9d135c65503f"},{url:"medias/chinese/unit1/u67.jpg",revision:"31a0e948ba38be8e6c04a68b47e6828a"},{url:"medias/chinese/unit1/u68.jpg",revision:"c21ea15004e9cdcf9da00e3fbb10edb1"},{url:"medias/chinese/unit1/u69.jpg",revision:"30187390e5e8bf208ce700a2f3f6939e"},{url:"medias/chinese/unit1/u7.jpg",revision:"9382aacf478c312c4aa0c2ebe0790a35"},{url:"medias/chinese/unit1/u70.jpg",revision:"cd1dffd999f24e1c4289eb776c1d5322"},{url:"medias/chinese/unit1/u71.jpg",revision:"fbb6451aee0879b919de089ad4acaba0"},{url:"medias/chinese/unit1/u72.jpg",revision:"ea5d21c67de440c8952e456832c88025"},{url:"medias/chinese/unit1/u73.jpg",revision:"4698ecb70f59ec3f18429504fac97643"},{url:"medias/chinese/unit1/u74.jpg",revision:"8ecb4dde0bb12b98b0afffe700da96c6"},{url:"medias/chinese/unit1/u75.jpg",revision:"7d80c557fcd6c2649a726b2081bbfe17"},{url:"medias/chinese/unit1/u8.jpg",revision:"2902760b20864c64253df8f89abd9183"},{url:"medias/chinese/unit1/u9.jpg",revision:"b571a06c3e859f3a53606fad2ac535f2"},{url:"medias/comment_bg.png",revision:"04208f25e34b8f29f072efbb2e212c86"},{url:"medias/cover.jpg",revision:"1253d8cf7abf8e92af47bda2bf61bd84"},{url:"medias/featureimages/0.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/1.jpg",revision:"2b75431fcb1a1f26ea435ecb86ab39d2"},{url:"medias/featureimages/10.jpg",revision:"10507add122c1f29ccf4f229ba432f43"},{url:"medias/featureimages/11.jpg",revision:"3cf1acc3d317690beae0520a1e606b30"},{url:"medias/featureimages/12.jpg",revision:"1889a08b4ef5bcc965cfdde3d5b69553"},{url:"medias/featureimages/13.jpg",revision:"a687f96e30215bbb5af5211966101d9e"},{url:"medias/featureimages/14.jpg",revision:"d2f7104d393ee322de0cba7313eddf74"},{url:"medias/featureimages/15.jpg",revision:"403a5973092edf7b1fc9cfb809ed4b05"},{url:"medias/featureimages/16.jpg",revision:"04d0bbd16855b98b6649433b9e5eb1d3"},{url:"medias/featureimages/17.jpg",revision:"632601e6c5ae271395d03a5a6e7b5935"},{url:"medias/featureimages/18.jpg",revision:"a0e512ec33708322d9a09a5e9632eac2"},{url:"medias/featureimages/19.jpg",revision:"677c90f32232dd162b9c504ff176b100"},{url:"medias/featureimages/2.jpg",revision:"2a4e75415ad83fe5fccf9a6562e8cc27"},{url:"medias/featureimages/20.jpg",revision:"891ea5f9186f889adef7b215d9be9948"},{url:"medias/featureimages/21.jpg",revision:"b7ad7b212c30976f27f4c0868d0cb1b2"},{url:"medias/featureimages/22.jpg",revision:"eeb46fbd8f9c6999a2f3fbdcf34e8b3e"},{url:"medias/featureimages/23.jpg",revision:"60627e3ae16b073b49a8326d422d977e"},{url:"medias/featureimages/24.jpg",revision:"6680176240d037b89b95a16c366d5d4b"},{url:"medias/featureimages/25.jpg",revision:"ef48b2436a751a4617184e14a1fb1f15"},{url:"medias/featureimages/26.jpg",revision:"c80baf4d345495ae0450998a2b486828"},{url:"medias/featureimages/27.jpg",revision:"a88c2a1cc175f75b8b60f3224026b4de"},{url:"medias/featureimages/28.jpg",revision:"f751cba3a4cd6381611bb4ec97d35e77"},{url:"medias/featureimages/29.jpg",revision:"b1f31105965681317384a1abc5f40491"},{url:"medias/featureimages/3.jpg",revision:"7cb711fb0335c4e4bf2c44ad76f09d49"},{url:"medias/featureimages/30.jpg",revision:"37b1df33492edd78f141e9065317bef3"},{url:"medias/featureimages/31.jpg",revision:"0ec7a7cc344f3d47dbc556ea312a365f"},{url:"medias/featureimages/32.jpg",revision:"fbe9c884726d3db4ca90ab43f5fd17af"},{url:"medias/featureimages/33.jpg",revision:"95b60ad01268824c0e0a2ab194fbb48f"},{url:"medias/featureimages/34.jpg",revision:"2f7692556a426c7d609676fd971d5897"},{url:"medias/featureimages/35.jpg",revision:"afcee76cc47ff729c484202e201cafd4"},{url:"medias/featureimages/36.jpg",revision:"2a4e75415ad83fe5fccf9a6562e8cc27"},{url:"medias/featureimages/37.jpg",revision:"462acf001ccd7f8c996373c54d1dd0d2"},{url:"medias/featureimages/38.jpg",revision:"ae4562052cf07bc1912d5fd90e00b2ce"},{url:"medias/featureimages/39.jpg",revision:"e9e52e4371ce9335d1f9f1a35ede2019"},{url:"medias/featureimages/4.jpg",revision:"59000f53f30fc3401144c593ba1261d3"},{url:"medias/featureimages/40.jpg",revision:"5c9ba28c921c60f525686f4646f1c30f"},{url:"medias/featureimages/41.jpg",revision:"0d24aec5b723af2ce3e345397c62a2cf"},{url:"medias/featureimages/42.jpg",revision:"363c3a1c0d17c57919a1acd4655c4dfe"},{url:"medias/featureimages/43.jpg",revision:"7202402f259237ea1f3f6bb82d208888"},{url:"medias/featureimages/44.jpg",revision:"03411d94a592f9231c824a7599dcd873"},{url:"medias/featureimages/45.jpg",revision:"df9abf1fa933cee751d211828c35e4f5"},{url:"medias/featureimages/46.jpg",revision:"f67beacf6d0bbb181a4885d6aa04c583"},{url:"medias/featureimages/47.jpg",revision:"d0625921e4939c641072d172b13b19e7"},{url:"medias/featureimages/48.jpg",revision:"c0c845b8df93e654d44414c189901729"},{url:"medias/featureimages/49.jpg",revision:"fb8bfdfd3b9bcf0815337e4aaa3c7d78"},{url:"medias/featureimages/5.jpg",revision:"f6e8f6f0c29921daa1ef94c62169f15c"},{url:"medias/featureimages/50.jpg",revision:"7c5c7767552f0dc2f92fa1c32e77aa47"},{url:"medias/featureimages/51.jpg",revision:"c613fbd6f7fadb8e65fdae620d89d277"},{url:"medias/featureimages/52.jpg",revision:"95ea042be75c28794ddca649388ad3c7"},{url:"medias/featureimages/53.jpg",revision:"af5b8a1b0fbab59e68a69005b2a0eeb7"},{url:"medias/featureimages/54.jpg",revision:"41cb1f82766db71b3c7aa91de3f3c633"},{url:"medias/featureimages/55.jpg",revision:"a3f234734fb601e514d356fa75513063"},{url:"medias/featureimages/56.jpg",revision:"86258814e4374b85adac9bd8235ad110"},{url:"medias/featureimages/57.jpg",revision:"be120c12eb2fc55d1944915dba2d739a"},{url:"medias/featureimages/58.jpg",revision:"6b1b1da789eecd376a5e6843314f26ad"},{url:"medias/featureimages/59.jpg",revision:"6d9136c0bf542e136dd70a6a7c97521b"},{url:"medias/featureimages/6.jpg",revision:"d440f1a8faa3af050511b79ae30a10b0"},{url:"medias/featureimages/60.jpg",revision:"824b9b0bbf1ea32be1939a81aac13df5"},{url:"medias/featureimages/61.jpg",revision:"52e8f9aca543d2d4838c14bce33ecee1"},{url:"medias/featureimages/62.jpg",revision:"daaa0bfde5bade9fd47a9828a89c1044"},{url:"medias/featureimages/63.jpg",revision:"86e8f680d698bc8b6cb907298f47af34"},{url:"medias/featureimages/64.jpg",revision:"e893aab1a2d26322b19048fe99509ec7"},{url:"medias/featureimages/65.jpg",revision:"e2e13dd58da0c92c72281e52f8fce882"},{url:"medias/featureimages/66.jpg",revision:"d8104647c594f21438cbc17331c57025"},{url:"medias/featureimages/67.jpg",revision:"dd0846a6ba59a6e850834b699b0e7502"},{url:"medias/featureimages/68.jpg",revision:"f3bea3e4c64364c39ef8569da8e7eebb"},{url:"medias/featureimages/69.jpg",revision:"63190e66bc1167f000b6d545921a3b9b"},{url:"medias/featureimages/7.jpg",revision:"95b60ad01268824c0e0a2ab194fbb48f"},{url:"medias/featureimages/70.jpg",revision:"bc1afd76153e5e6f3f3bd6dcd59131ed"},{url:"medias/featureimages/71.jpg",revision:"ddd80ccca8d84079255bbfbf4244debd"},{url:"medias/featureimages/72.jpg",revision:"bdccc50ef1068361fc9121bb88b2f44b"},{url:"medias/featureimages/73.jpg",revision:"c791563061b1963a2f5f083353f44a59"},{url:"medias/featureimages/74.jpg",revision:"7b69a6ba727149755900aa4d23a62b65"},{url:"medias/featureimages/75.jpg",revision:"a1f9b441107ce94d67f987627576d8c8"},{url:"medias/featureimages/76.jpg",revision:"e67e4a68b45ea3ae4432fb05412f4a8f"},{url:"medias/featureimages/78.jpg",revision:"79ef2d2c3431546b86e33aaf3233342a"},{url:"medias/featureimages/79.jpg",revision:"41a10924ccff60eb766ef957ac2e82c9"},{url:"medias/featureimages/8.jpg",revision:"edf68445b430b3392bbc7e7529bc6cd6"},{url:"medias/featureimages/80.jpg",revision:"bc3f1b1ade2a4f2553d61742086ba80d"},{url:"medias/featureimages/81.jpg",revision:"b0248f9fd50191d68ea06b67168600a3"},{url:"medias/featureimages/82.jpg",revision:"d9f7e933d9578d4ad6af881d6369a50c"},{url:"medias/featureimages/83.jpg",revision:"7735bf79808e68b977991ff9106e49fd"},{url:"medias/featureimages/84.jpg",revision:"78d8e6003d514195adc7a27fcbdf8b4f"},{url:"medias/featureimages/85.jpg",revision:"abc1e36e23a44dc32d0470632c57ee63"},{url:"medias/featureimages/86.jpg",revision:"bb7e5f81571634f453236d0a45bb0bc7"},{url:"medias/featureimages/87.jpg",revision:"03c0539fe1b3d7c0250ba2a2980c0c1e"},{url:"medias/featureimages/88.jpg",revision:"695f140addef393eb83e6080bc22ce1b"},{url:"medias/featureimages/89.jpg",revision:"cb1208d05d56fdb86401820ec2a45489"},{url:"medias/featureimages/9.jpg",revision:"462acf001ccd7f8c996373c54d1dd0d2"},{url:"medias/featureimages/90.jpg",revision:"804101cecd1152063cd25e52c10a9acc"},{url:"medias/featureimages/91.jpg",revision:"170880f0c2dc805046d00d05123ebdfd"},{url:"medias/featureimages/92.jpg",revision:"6a82769c16d17c6af64ed8708d75b2dd"},{url:"medias/featureimages/93.jpg",revision:"8416a59a8f38e7e98c53fefdd93807d3"},{url:"medias/icp.png",revision:"60aa047315ba11596d9f954900c86fdb"},{url:"medias/images/Leanclass.png",revision:"763ba8377fcdad05826429bb2eecfb49"},{url:"medias/images/Leanessays.png",revision:"fb7742440b93cdf3b3d688ecdca01239"},{url:"medias/images/Leansoft.png",revision:"2b518eeeb70e8f9820bc46cea49ddab3"},{url:"medias/logo.png",revision:"18b80437fa7d181fbc0ff6be91ae0cd4"},{url:"medias/reward/alipay.jpg",revision:"135d5057ab3d140a1404249c550a6260"},{url:"medias/reward/wechat.jpg",revision:"0dad655ae6bf4636e2c40b0f744f037c"},{url:"medias/reward/wechat.png",revision:"643f8e9c3d85731ada4b20db1924fdc9"},{url:"page/2/index.html",revision:"2b69adbd57388b8c431c0be5ce4458f8"},{url:"page/3/index.html",revision:"7e7f8b0e6e86e9d9176bfa2bbb7455db"},{url:"page/4/index.html",revision:"754d98377b243d781392ffaddb2870fd"},{url:"posts/13483/index.html",revision:"515232928d92ccc45e6d4b81db1569ae"},{url:"posts/15162/index.html",revision:"271370720028ffd9d564d263f547ab13"},{url:"posts/15439/index.html",revision:"114590bc241cb29cc703cf84d441237f"},{url:"posts/15937/index.html",revision:"541ae2fb408ccdf920c5432ae76f0ab2"},{url:"posts/17726/index.html",revision:"c1638fbbc63370f20a20102fc857353f"},{url:"posts/18850/index.html",revision:"274defa92891b0a7d0c231629f807c3f"},{url:"posts/19409/index.html",revision:"7316dc23df1db720e5b909d9c5a6d1e6"},{url:"posts/23327/index.html",revision:"efd043063713c9e0f46b93ab4bb22fe0"},{url:"posts/23575/index.html",revision:"72316504b0653eb3ceb572ec3290cb26"},{url:"posts/23913/index.html",revision:"8e30883cb510dbb4c113cd9a6879da2e"},{url:"posts/26001/index.html",revision:"e9f495680e02e9ab7706b7624a092bc6"},{url:"posts/2608/index.html",revision:"29becc7da6c11dfa8506a89278a798ca"},{url:"posts/26133/index.html",revision:"03cfbb53f79ebafbc6b9ee5487a53961"},{url:"posts/26431/index.html",revision:"d30a4b2b005bef632eb91cf3792a9bd1"},{url:"posts/27859/index.html",revision:"8ae43541e6335687e4a74321a7c5c3fc"},{url:"posts/30099/index.html",revision:"312e448756bc157e60069917f085630f"},{url:"posts/32949/index.html",revision:"b4ab9c4d16e49be32bc177f05c9d40d0"},{url:"posts/33653/index.html",revision:"6b76e90b74463233a94cde00b4732d51"},{url:"posts/33842/index.html",revision:"867ea57b1ee1157815797a66d47a5e17"},{url:"posts/35059/index.html",revision:"55b9918011fbc1b980e3ac2d415c6bd7"},{url:"posts/37266/index.html",revision:"b48a0631a8e7869d8e604b0f0fbc29f0"},{url:"posts/4221/index.html",revision:"ad7441e358f702d03b3e8137b9755df8"},{url:"posts/42349/index.html",revision:"052b8f2181bd5813be069a7305263bed"},{url:"posts/44203/index.html",revision:"fec11700624f7b10150efd2031e01619"},{url:"posts/44672/index.html",revision:"fccab094f1930b963d5cb20bbd4d938c"},{url:"posts/47153/index.html",revision:"a69597c3d9ffe611d2b2bbe032ccd808"},{url:"posts/47431/index.html",revision:"b0e445261a15b02f5415821bcefb4d05"},{url:"posts/48397/index.html",revision:"3a4ca7d4bd3ac8a1e04f3b5fc9b68b28"},{url:"posts/50568/index.html",revision:"15eac1bf726553f5704f5f2e1ccd27dd"},{url:"posts/51100/index.html",revision:"c59e846e3e2a290c5be2d577ad9979d7"},{url:"posts/56456/index.html",revision:"0b4d4268a80c4f63ac1e4c4d97d6801b"},{url:"posts/59832/index.html",revision:"12d3701f83f159f876f989b18362df4f"},{url:"posts/59857/index.html",revision:"56991728c5f2383b7ecbea3dbebc1afe"},{url:"posts/633/index.html",revision:"b341f98d000afacb253e3c664edb22d7"},{url:"posts/64462/index.html",revision:"379aaca9383416db1bf2fb8bb4621333"},{url:"posts/64654/index.html",revision:"a85a7611aa1e6ae0d0f7d0d13d78a36f"},{url:"posts/7628/index.html",revision:"0324c0cc67cf77b90cb7317f1c78b85f"},{url:"posts/7769/index.html",revision:"549c41ce0c5b7c9510baa830e23127de"},{url:"tags/百科/index.html",revision:"82d895d2f6d835d52b3c8499e276c21d"},{url:"tags/成语/index.html",revision:"94ab421c07d8f7ac2d1ad92a711687e9"},{url:"tags/对联/index.html",revision:"d0f6c4187d05ee890f33c6452a5d2c3b"},{url:"tags/飞花令/index.html",revision:"eed696bd826ac5d8e52630263df178aa"},{url:"tags/汉语/index.html",revision:"8aedcc7944459df8fe448c09ffbb6ae7"},{url:"tags/汉语教材/index.html",revision:"31884a843fdab0180ecdca02064a7a63"},{url:"tags/红楼梦诗词/index.html",revision:"7f054dd8e88aa63cef3935c009e453f0"},{url:"tags/黄山/index.html",revision:"9edde8909ac855946f5f4426f3e03b5f"},{url:"tags/徽文化/index.html",revision:"2b30cf4917bf9c25e7510271bd17c817"},{url:"tags/接龙/index.html",revision:"f522ec4103b51d8a3177c6a89ed672f5"},{url:"tags/诗词/index.html",revision:"d67ade821a22f3a2bf5edf2cad83c177"},{url:"tags/诗词/page/2/index.html",revision:"4486f754ec0a993ef516286eef977b17"},{url:"tags/诗词/page/3/index.html",revision:"134b59dd411472380a5346b9f89a5cb3"},{url:"tags/诗词对联/index.html",revision:"687e6928ac8d2d11c4aefe18358e2a31"},{url:"tags/诗词接龙/index.html",revision:"8bfe5169e5448213a68482b341cfd98d"},{url:"tags/水浒诗词/index.html",revision:"3dfb0f23459a19c2c0daec4ed757fa5a"},{url:"tags/中小学/index.html",revision:"3ec0d11322144f784195537193b05946"},{url:"tags/index.html",revision:"52aeea6a0f49195ddd9083eb5c71695e"}],{})}));
//# sourceMappingURL=service-worker.js.map
