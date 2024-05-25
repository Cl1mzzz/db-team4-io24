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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "ddf134a695e5c06881d1a52129a20f11"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.9f4b7b7d.css",
    "revision": "733abc4fafd6b364b3d7303b9e3e5d97"
  },
  {
    "url": "assets/img/member_add.2b662fad.png",
    "revision": "2b662fad4bf42462de3b39247567455c"
  },
  {
    "url": "assets/img/member_delete.ccd55cc6.png",
    "revision": "ccd55cc6475fb834fd86e14a5b677ef8"
  },
  {
    "url": "assets/img/member_get_all.671eaeb1.png",
    "revision": "671eaeb1cde966e8cf47a28e6985a059"
  },
  {
    "url": "assets/img/member_get_by_role.bc88078e.png",
    "revision": "bc88078e38ad67175a6a4786d9390661"
  },
  {
    "url": "assets/img/member_get_id.c97b6328.png",
    "revision": "c97b6328adb7aaf68be3e4dddd37fda6"
  },
  {
    "url": "assets/img/member_update.056cb601.png",
    "revision": "056cb601c65ee6681077688adfce937e"
  },
  {
    "url": "assets/img/relationalSchema.03c9cba4.png",
    "revision": "03c9cba456d7d301109ba0cfdbecafec"
  },
  {
    "url": "assets/img/role_add.f5202f17.png",
    "revision": "f5202f17271f162c0e338cb20d60a942"
  },
  {
    "url": "assets/img/role_delete.d41868bd.png",
    "revision": "d41868bd5566f0be2bac73653d0f34fc"
  },
  {
    "url": "assets/img/role_get_all.f31d5597.png",
    "revision": "f31d5597b03efa59a4c0c0507a2bbf2b"
  },
  {
    "url": "assets/img/role_get_id.6944703c.png",
    "revision": "6944703caa4a2ce8e96f584ff6b7e3f4"
  },
  {
    "url": "assets/img/role_update.e9a37fae.png",
    "revision": "e9a37fae5ea2f1b3df0433cc6db3ff0f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user_add.50611ffe.png",
    "revision": "50611ffe17e4dea8aac0c318e7ea1246"
  },
  {
    "url": "assets/img/user_delete.1cf29c2c.png",
    "revision": "1cf29c2cc239244ef066bc9cf6bb9219"
  },
  {
    "url": "assets/img/user_get_all.da929300.png",
    "revision": "da929300eea6a7bb7e941333ac3c0219"
  },
  {
    "url": "assets/img/user_get_id.9d13613b.png",
    "revision": "9d13613b2084a594462dbaaee23131fd"
  },
  {
    "url": "assets/img/user_update.76827b4c.png",
    "revision": "76827b4cf6cdd3d9dd0854e991a5bb6d"
  },
  {
    "url": "assets/js/10.5d5ae146.js",
    "revision": "00695da901bc8334245c3e8d837406f2"
  },
  {
    "url": "assets/js/11.51b0ef6e.js",
    "revision": "d679e74c934c23d800898a0bb22c8f4e"
  },
  {
    "url": "assets/js/12.d70ca428.js",
    "revision": "b2f41ed984dc64933d4e96c4d27b86d6"
  },
  {
    "url": "assets/js/13.6e45555a.js",
    "revision": "82c468edb2a64e3d7439e611a4e1e649"
  },
  {
    "url": "assets/js/14.0d8ad425.js",
    "revision": "a080fb65b9a770be6799146570144f83"
  },
  {
    "url": "assets/js/15.1e73ce32.js",
    "revision": "70fdb960f181bd77336593444cd27337"
  },
  {
    "url": "assets/js/16.62bb69bb.js",
    "revision": "1e2182eedd8dbf71c7b603a5ef23a2a2"
  },
  {
    "url": "assets/js/17.b5181bde.js",
    "revision": "24bdb928a9e039333662981e07c5c4db"
  },
  {
    "url": "assets/js/18.12eeb2ff.js",
    "revision": "88571e79811f0f7cfdfd818522c9b1c5"
  },
  {
    "url": "assets/js/19.50cf10d7.js",
    "revision": "b20eee1aaff6bbfcee747e2eb9ee422c"
  },
  {
    "url": "assets/js/2.a75afcd4.js",
    "revision": "427c786ada5b62764cbd3357a578a155"
  },
  {
    "url": "assets/js/20.2df80867.js",
    "revision": "b0d8ea0d9eb33d7b0699e953aefbb497"
  },
  {
    "url": "assets/js/21.424f479e.js",
    "revision": "26122d79e43ae8cc1755a69928009e66"
  },
  {
    "url": "assets/js/22.92faf6e7.js",
    "revision": "57561350e0076e927973a2fcbad9af0a"
  },
  {
    "url": "assets/js/23.3ba7f977.js",
    "revision": "35ffb441ddefca8aac6bd4150833c0f9"
  },
  {
    "url": "assets/js/24.f27b0f41.js",
    "revision": "e95c362290130e0698b17f16964d3bde"
  },
  {
    "url": "assets/js/26.d747499e.js",
    "revision": "af46a34e1ee9b3c043c126040c7781de"
  },
  {
    "url": "assets/js/3.23321b7b.js",
    "revision": "c881e16833db10bbbda8cb30c053c353"
  },
  {
    "url": "assets/js/4.71dbdf1d.js",
    "revision": "4a617bef77b701817ba3b6caca591d19"
  },
  {
    "url": "assets/js/5.ead50b78.js",
    "revision": "0f3bfca4f624dfc4b07108c0e9301e8e"
  },
  {
    "url": "assets/js/6.ff170c80.js",
    "revision": "64a8c9e05885e9061937021cdf92499c"
  },
  {
    "url": "assets/js/7.e5d46994.js",
    "revision": "5cff5748cb1b5f89dafcfe39b73d2369"
  },
  {
    "url": "assets/js/8.90eb0a96.js",
    "revision": "1ffe507d16a37304d924347311297ded"
  },
  {
    "url": "assets/js/9.5478b07d.js",
    "revision": "7dbc5b514e4ced9aa087ce8060e203b7"
  },
  {
    "url": "assets/js/app.fa96b678.js",
    "revision": "8ff10247b2e2c9221662143f529fd97d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "105981cc10fee5704f688c5b67e108dd"
  },
  {
    "url": "design/index.html",
    "revision": "f49af0489657524ce097729d8eb0afae"
  },
  {
    "url": "index.html",
    "revision": "f71f8aa9f8b3f2812e56895a852ba6bb"
  },
  {
    "url": "intro/index.html",
    "revision": "ac7db3bd339b918b09e2671195b163d0"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "cd22fa65e1fbcd9f1f096e09179d0f37"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "aed6354a596d924a22edd61d390855f7"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "327fb47b0a7608f9c9ba16a578feb487"
  },
  {
    "url": "software/index.html",
    "revision": "35594c37e923f16dde5326a2f9ca5286"
  },
  {
    "url": "test/index.html",
    "revision": "b329a12b944c251f09c00ee0115aaa66"
  },
  {
    "url": "use cases/index.html",
    "revision": "5a79597c440c7bda69969fa8901624a5"
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
