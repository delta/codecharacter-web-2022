if (!self.define) {
  let e,
    s = {};
  const a = (a, d) => (
    (a = new URL(a + '.js', d).href),
    s[a] ||
      new Promise(s => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (d, r) => {
    const c =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[c]) return;
    let b = {};
    const i = e => a(e, c),
      f = { module: { uri: c }, exports: b, require: i };
    s[c] = Promise.all(d.map(e => f[e] || i(e))).then(e => (r(...e), b));
  };
}
define(['./workbox-6b1d7bba'], function (e) {
  'use strict';
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: 'assets/AbstractModalHeader.205d102b.js',
          revision: '23b735da0e5de1ecf2ff3e530ab6f4bd',
        },
        {
          url: 'assets/ActivateUser.1df46c6e.css',
          revision: 'f25d7ddf07f590d6939186566878cc41',
        },
        {
          url: 'assets/ActivateUser.435d1ccc.js',
          revision: 'e7c7f00575eb1a87a52d06a4d9fed378',
        },
        {
          url: 'assets/Alert.87b3ae07.js',
          revision: '4dbe7b9fa82ed3b0c05bd91db87f754d',
        },
        {
          url: 'assets/Alert.bcf3e57b.css',
          revision: 'a52b9f06fca694a5b2dad5ed42e2e606',
        },
        {
          url: 'assets/auth.module.72949271.css',
          revision: '370947b56984d824662861c2fac0b418',
        },
        {
          url: 'assets/auth.module.fa7fd44a.js',
          revision: '48887ec7367eb01dc6f9bae78164daaf',
        },
        {
          url: 'assets/Avatar.7b557cd5.js',
          revision: '09c59a4818d5629c17671d84b4dd8431',
        },
        {
          url: 'assets/BattleTV.1c39055b.js',
          revision: 'b2d3ddc85f5822b56a2dae345efda4ab',
        },
        {
          url: 'assets/BattleTV.3f276600.css',
          revision: 'f9d70554a777114a78d8729cfbd971a2',
        },
        {
          url: 'assets/Button.7eb63b50.js',
          revision: '16bd387d69765ace4c0f4f661e4c31c0',
        },
        {
          url: 'assets/bytehoc_final.webp',
          revision: '1795e84d1b539b3b6e34c48f0f706600',
        },
        {
          url: 'assets/Card.699e5227.js',
          revision: 'b9a863ee5f7717b2910bab19462292d8',
        },
        {
          url: 'assets/CloseButton.0522e079.js',
          revision: 'f03211e7d92a87f5a901cf242085ec3c',
        },
        {
          url: 'assets/codechar_favicon.2dcc0475.png',
          revision: '0f79e23d8915133981382e0c2b2afec3',
        },
        {
          url: 'assets/codechar_favicon.png',
          revision: '0f79e23d8915133981382e0c2b2afec3',
        },
        {
          url: 'assets/codecharacter-map-designer-2022.es.b94f67c0.js',
          revision: 'd7e5bcc44ba4625108ab836f7f9f4c3b',
        },
        {
          url: 'assets/Col.0eeb879f.js',
          revision: 'ed4c863d0d930a2582bbd9f2d93773ee',
        },
        {
          url: 'assets/Container.8990cc41.js',
          revision: '8518f161d9001c125abe099ad145282e',
        },
        {
          url: 'assets/createWithBsPrefix.439c8819.js',
          revision: '4fbf88ffd64b9c935275313e44f1aec9',
        },
        {
          url: 'assets/Dashboard.774dcfc6.js',
          revision: 'b84f427e608a36cad870317d64388024',
        },
        {
          url: 'assets/Dashboard.8277b0fe.css',
          revision: '55fb14801ef075b902c755122344af41',
        },
        {
          url: 'assets/divWithClassName.7695ab43.js',
          revision: '3fb27c3a47f7ae44663df142b1c17b0b',
        },
        {
          url: 'assets/EditorSettings.58cba075.css',
          revision: 'b13d430dfac847473d3b2ced50f6ab13',
        },
        {
          url: 'assets/EditorSettings.74fa51bf.js',
          revision: '8b05ad8b1eed5dedd7edb32bc4cb9ba7',
        },
        {
          url: 'assets/elephant.444547f9.png',
          revision: '5a3e76b87d303d093f0df46cbd626e59',
        },
        {
          url: 'assets/Fade.6981a97a.js',
          revision: '0129d674ffe31e8198c1640b3b0056fa',
        },
        {
          url: 'assets/Form.6d298630.js',
          revision: '634e197eb14d36a6d6ec91382f940e3b',
        },
        {
          url: 'assets/FormGroup.c96accb6.js',
          revision: '19033c2187fc218a462c6bee3353a118',
        },
        {
          url: 'assets/giraffe.7e5526d3.png',
          revision: 'a6fbf6210fc846e488a60fb71175ac4f',
        },
        {
          url: 'assets/hasClass.105c66bc.js',
          revision: '434c5a68a70a30f4551e55a4af9b05b5',
        },
        {
          url: 'assets/History.26a23f29.js',
          revision: 'cf034ded6f47b6b574f3d186f124bc1f',
        },
        {
          url: 'assets/History.b22b2f78.css',
          revision: 'bb2c7d0f1720028dd57c18e45b39e637',
        },
        {
          url: 'assets/home-trophy.8b4acb40.png',
          revision: '8f6177f08f5cf93c1d95095674eded5b',
        },
        {
          url: 'assets/Home.6bb28b22.css',
          revision: '336586c3d2618e9dd393e6664dad33b0',
        },
        {
          url: 'assets/Home.fbed2abb.js',
          revision: 'e537a7fb5ce8bc4e107554384fc7b610',
        },
        {
          url: 'assets/horse.8a4dfb8e.png',
          revision: 'fd09e284a5f7492d5e0bfb113e6e037f',
        },
        {
          url: 'assets/incompeleteProfile.70dc3d4f.js',
          revision: '6d73a4f8a6a1324ac3dcf9a3a500f18b',
        },
        {
          url: 'assets/index.04970f6d.js',
          revision: 'c6b1777ac8effec6297143591bc4f239',
        },
        {
          url: 'assets/index.215c70bf.css',
          revision: '3b08a987b074ae9c0e29976833fd6c2c',
        },
        {
          url: 'assets/index.es.b7d0ea5d.js',
          revision: '5faed9d03e5f3616284cada7b27ab6c7',
        },
        {
          url: 'assets/index.esm.9a519a65.js',
          revision: '2915bef589619e4ee3471eda21ca11f0',
        },
        {
          url: 'assets/Leaderboard.6d0f298b.css',
          revision: '64ec1ba7d3880c36597dacd3790d03f9',
        },
        {
          url: 'assets/Leaderboard.eb3b53e7.js',
          revision: 'fd041cdf256753f994f6d9f5fb15cb36',
        },
        {
          url: 'assets/LoginForm.d0e27a3f.css',
          revision: 'f4916d621514081acbd4c554c2fdb9dd',
        },
        {
          url: 'assets/LoginForm.e626266b.js',
          revision: '0391addfdf5ac79e648dc76997307e61',
        },
        {
          url: 'assets/MapDesigner.7a04b6dc.css',
          revision: 'b96b087e3d7b6f7d10f4c0da5a25b036',
        },
        {
          url: 'assets/MapDesigner.7f95f4e3.js',
          revision: '1688c7e1be27f792c53f5673808be3d9',
        },
        {
          url: 'assets/Modal.f49e15c5.js',
          revision: '9d4be46c7e18508071a7e8ece83ce1b1',
        },
        {
          url: 'assets/monkey.6f253905.png',
          revision: 'a49c975302442e2dfe06cadca3e4e3c7',
        },
        {
          url: 'assets/moose.5e976cda.png',
          revision: '01a31697fdf221d73670d14367b3d78d',
        },
        {
          url: 'assets/narwhal.cebad4e7.png',
          revision: 'c486ba60228541261ddf5d8396a225df',
        },
        {
          url: 'assets/NavBar.1785876c.css',
          revision: 'fd1a5da9382b0aa84f20de3d14639616',
        },
        {
          url: 'assets/NavBar.68e3de92.js',
          revision: '0c605b4254532b8ba3c6802da95950bd',
        },
        {
          url: 'assets/OtherDetails.b532eab3.css',
          revision: '860a8cf2506a6909a1ef17ee290be822',
        },
        {
          url: 'assets/OtherDetails.c37c6a5c.js',
          revision: '839198058729c3b7277f72f160d8df1a',
        },
        {
          url: 'assets/owl.04d831bb.png',
          revision: '4f4ef3b499d58d2b751660e013db1034',
        },
        {
          url: 'assets/panda.8234ee9b.png',
          revision: '208490925853f829e841499f42bac27b',
        },
        {
          url: 'assets/parrot.bfa0a345.png',
          revision: 'a9d4004818c63bcdc3d425f982e6fd22',
        },
        {
          url: 'assets/PassworAlert.eb87f102.js',
          revision: '784eabbded19f2f6c515bc410635be93',
        },
        {
          url: 'assets/pig.aedb0e22.png',
          revision: '843443fe1c1241f70d87d7a6c2679d51',
        },
        {
          url: 'assets/rabbit.b9a5be1d.png',
          revision: '36f2227775bfe4d8caa31071289b06ed',
        },
        {
          url: 'assets/react-paginate.76321380.js',
          revision: '930765d9e84c1e0e2c94a1114a1239df',
        },
        {
          url: 'assets/RegisterForm.03632054.js',
          revision: 'd15bb5374120c07b3aff7e29bc5576de',
        },
        {
          url: 'assets/RegisterForm.05612214.css',
          revision: '9c3a6de361d11beb803d0929146a989a',
        },
        {
          url: 'assets/renderer.69be8076.png',
          revision: '7941930a703c2aee24f2d250e2eaa1d7',
        },
        {
          url: 'assets/ResetpasswordVerifcation.88285933.js',
          revision: '6027bbb04bd12ba67d15e14b6f0eb666',
        },
        {
          url: 'assets/rhino.d77a54b2.png',
          revision: '614e3eea9b0c47ccc5f27b3acbd3ac30',
        },
        {
          url: 'assets/Row.1411b6b5.js',
          revision: '3f788a8a6e07ecb3c6c84c18d7daa9d2',
        },
        {
          url: 'assets/scrollbarSize.a78508fb.js',
          revision: 'f4aa86ba5e82f5b330a959afff861df8',
        },
        {
          url: 'assets/SelfMatchMakeModal.41e2a50d.js',
          revision: 'd5b1e547aa16f86d1c4c3c863e13d139',
        },
        {
          url: 'assets/SelfMatchMakeModal.a90d7f8b.css',
          revision: 'abd30ff21cf2e6b05c2d54ec401fd239',
        },
        {
          url: 'assets/SideBar.370c3eb1.css',
          revision: 'ae1a7825913811c39bd20afa8aedb4f7',
        },
        {
          url: 'assets/SideBar.9dea8497.js',
          revision: '8216c3c033a81d8487c858a131918762',
        },
        {
          url: 'assets/skeleton8.png',
          revision: '1b3848329b4171dcce4902fd191bd2c7',
        },
        {
          url: 'assets/sword.dfaa178e.png',
          revision: '041059b48cb5cf3aff20825fb8e0f922',
        },
        {
          url: 'assets/ThemeProvider.869a7bec.js',
          revision: 'eb25acd641f12bfb8f6cffb27ad5d1bd',
        },
        {
          url: 'assets/tile_crystal_N.png',
          revision: '1dc5b6ff4b0c8482f8604dc48ce5c3c6',
        },
        {
          url: 'assets/tile_E.png',
          revision: '23f81641f8aa05352456b4b1e7b834a1',
        },
        {
          url: 'assets/tile_treeQuad_N.png',
          revision: '486cad420a73591df260fcfa5afcd35e',
        },
        {
          url: 'assets/tile.png',
          revision: '99c9b5afb12b6e4632161f50af063c69',
        },
        {
          url: 'assets/toConsumableArray.f9a08daa.js',
          revision: 'd02d75d4bdaeca03c0d50e65d0a95782',
        },
        {
          url: 'assets/tower_round_thumbnail.png',
          revision: 'f93f46c85dcb723c34fa8bc99aa3d414',
        },
        {
          url: 'assets/tower_round.png',
          revision: '9849c6df41125f196250756422672121',
        },
        {
          url: 'assets/tower_square_thumbnail.png',
          revision: '6eaa92a4218c264e83440edb84d446c5',
        },
        {
          url: 'assets/tower_square.png',
          revision: 'cf2c21b48a17d6c3e20d3cc2c4b65cdf',
        },
        {
          url: 'assets/trophy.145c6dfe.png',
          revision: '42ad1765adb6bea95f8f5e5fd91ba159',
        },
        {
          url: 'assets/vendor.81f97c66.js',
          revision: '818881323ec6cc3e78b840e578e7bb16',
        },
        {
          url: 'assets/walrus.15871e40.png',
          revision: '887cfc102b37a3d23250ebf9818e0853',
        },
        {
          url: 'assets/whale.a1e15b57.png',
          revision: '55f9d3c8b92c621d32782d7b2df516bc',
        },
        {
          url: 'assets/zebra.905e18f8.png',
          revision: 'd35f4decea24c89b82646e42c0ecdc06',
        },
        { url: 'index.html', revision: '97abf9848cc67466be19735085bb8f2c' },
      ],
      {},
    );
});
