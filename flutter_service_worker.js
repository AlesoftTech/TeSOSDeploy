'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f78f1e1bef8a4566fbf044384ee88be8",
"index.html": "3c93f6a18fdf64f47c16cd22a53615d8",
"/": "3c93f6a18fdf64f47c16cd22a53615d8",
"main.dart.js": "717705701d658a547a12bac637fdfb1e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df7a72f7b5d642b13030bf5789f1d4e0",
".git/config": "8ef6fec14315ae9b2e00b475ba94cd77",
".git/objects/3e/945b78f2f4fb1e42f00d6ec005fded09fa9d19": "70d8c83e5aa8025bd81c2fa58259b94b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/2bcc1e779a365dc8bfff4c166ff17244b573ec": "1935357f06c7403e6383cbbd05d11b09",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/93/25606909f9ad31e827653d589c3f82aa2bf32d": "8f7ae440b773857339849e383f2890ca",
".git/objects/d0/0ec0001b09fa9b28d0e92478633e8155d41441": "ac24cbc6126d078ca6e9ac5a2f964903",
".git/objects/df/2c284e87b35c4db718da611e2821ed08230971": "cd76d04dfc2d1a81e63857523f01fbf9",
".git/objects/da/c0a98203708c27306304997cdb6685682bafb1": "029241eec73f07ffe68bb621365f3adc",
".git/objects/d6/54103b1bcbb5b06b901f88bb6be4e16cca15bd": "288889d705477ed434aeb63755adeb26",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/970d7f5c8adc00d3e801a31b52d4b7d65de389": "27065c63f97581a6b7073c91130a799c",
".git/objects/e5/ef2d6b2fd216ad8b67430bd221a98e41d5601a": "f45d3334a188dca36784cbd84b2120b7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/53d46464b3146bb100f5ead9a4c6a921c76e50": "0efd7eebfad3921ce9426ae628060f09",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/ee/19ed70bc99a8e61fb3d2976636f4e421a98fb5": "55d660fa092ee4754d7f5dc9567991f3",
".git/objects/c9/b81b7e1cec91a2956ab6480b6bf908c5c9be63": "adde6907335be7b76f138ba28a07fad7",
".git/objects/f2/1406050384a40314676a706590458e127e0a84": "9153f7e3dfe2ccafb7a85b7880a58d95",
".git/objects/f2/92ed3446067e9eab46d42bd9b1e0b0bfefbf7c": "feaf7f64d395f25e08041755956d318f",
".git/objects/cf/bd115f696405bcf97894b788f9f0b3eb24b7d1": "470f17454d3036f6f6047d77d8e66ee3",
".git/objects/ed/9b5d2c1e846884ae3a150422bbee1d76863de0": "d18b0e3de51a9018a22093088bb7f881",
".git/objects/ec/8e8c5ea43e87a6d3f097ddf93e8ebf565f3663": "ad0236d1dd8e975e5674fd7df7d4c111",
".git/objects/18/2c42ab92794183f2972eebd94eb4f7585f8c61": "9ed7c9a8d13d08ef29366a41166bf0c6",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/8165fff4a145ac1aea5ab3f1bb23f90c1b0625": "8bbf7285b41cc207f673850f03829878",
".git/objects/42/8593ce21e99442a11bfc4db14f2dbc7cf4b9a6": "62f57daff02f89b0f6a89f84c7b35f80",
".git/objects/45/4b07a3092cae22d5d690e2cc03cfe762e2c7c4": "906f20d8a8ec1a09c5bc0a3795f075dc",
".git/objects/73/011f98cdfc4c553a63308e62ebf5d2ba589323": "080dceb5617b26a631c88a10ad24b0c3",
".git/objects/87/d430c2c79b3b2eefcfddb40e2e78c7f46bb54c": "10ae5a35487eb8083c9fb8452b67b866",
".git/objects/87/6a4ddab7d2968f440acf78ae80fa1e9a34cc82": "f2dabf240fa7376ea645338367254c29",
".git/objects/80/b18004045a32c3f5f22ea21a1b7c8cd9093924": "93eace60b920f01a583a67f337bdec2a",
".git/objects/28/3f9e555f47f57fc525452d342029dbb9355740": "7e655a36d26bf53ea8812cfa93da30bf",
".git/objects/28/b0a206bd5f4898fe8bc787f40b38138eb5288d": "1c3a83c6d3fac02fcc67bfeb459fc7fb",
".git/objects/8f/933fb95b5aa97a7bcfcc9a33787d781634013b": "81665210f7ca152727863718789a2c1f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/8a3cd4bbd76ff37614bd781a4ae06d489360b5": "53fbb2f7aa341751ab5876e97c0da330",
".git/objects/7e/ef8d28322fe3e18bb4826983881d4f3ec51517": "2c1616f2d5915300ae2f0c4cd05b9204",
".git/objects/75/11ac5ef6ec4a6102a84d0be06da443f5462550": "4b465ec29030fb63cfffe3f52cb3de36",
".git/objects/81/2dffee494bf164cdc1974617fa9375f6619b27": "f5d690e3784533f41edbf1950e094183",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/88/83336887925dcc184f56b831c8a4cc5e9b1cb7": "c49ffdd5cf55dc62c94baa6d084b5fd1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/7e24b5cf602351c48ae04266e62cdc896b2665": "a0eb350ee2c33e82e89f940e26947f8f",
".git/objects/07/224a69c0c4a0c43826a74d468fdac7d29f7924": "0c33c0dfa2e951e6480d03d0387686cc",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/31/ccc47e4bd9231b48cca768931ce385bc8037d6": "3e33228d60589e4fac12bff8990503d0",
".git/objects/91/593daa26bf32cc3f81d7355e036122a3747b26": "c45680b3732f68f20a1890660c99e22c",
".git/objects/65/3ccaff93ce31a9fd8db03e7a93e4867ab0b7ce": "b27826054ec6d46dada7578a655086c9",
".git/objects/65/4c570d43bcd11c433d72d9f6a34f44ddc4239c": "dccb283d6330e5eb27db9646f31d5a24",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/53/109396d62f9afa4dddffbcd2fc80c52a34d1aa": "2b3a6dcf2483382df680e9c1956f9cec",
".git/objects/37/0dcc2657197530883bf69e274deaa68e0b5243": "c2f93440f859223dda717f28ebde1573",
".git/objects/6d/6488d8eeb3b3bc93c83acf9b1d96895b860ffb": "6d14f5406407937f1e01dca7a4d01cae",
".git/objects/99/ea457f79712d62943fa2e30425f89cc49a42b1": "0327c8ec618f98dbd6e80b4ab85419d5",
".git/objects/99/80373ae02504886ebdd3456f1d96f242887424": "a5ce4743ae8708f7316f3837c9cea285",
".git/objects/52/0dac90fef8635d425c06e7e7d4f513d999c717": "545544c508fd7490f510352a71f5c056",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/0a/dd988473c9e7c60052b03da56ab6fc1c8a6cd4": "359370eb67ae5eda08b86ae401b7d46a",
".git/objects/bf/e6bf202664ec2c03ff70b910717d149d92c0b9": "7f3bc0a098a716b44025bcf59f82e3db",
".git/objects/b8/1b0c3122ca65c9de74fd5839fa6d0ae5587d5f": "2d7e7c5fbead7cbdac30fc453d3726cf",
".git/objects/af/8ae715861c881729acc550aa19080d905c569a": "1bf6134bd1424d075e223d49bda660cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/0503cdb604d9d640d0f2123721347bfc14ef02": "a586d749e235eb0f1647933de7370f52",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c8eb86f3e5803c3bdf105b239ded62a0f27073": "035cbfa75e769d84a8cd1e40ec5500ce",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/4c27513e4a02fe73cb56e624f61707f98a8cd2": "e6f2d3c60d74bf15746d81414ba07bd6",
".git/objects/c4/01acdb3322a0c29518abdc1dab35de96597b4a": "e6e5e84e1c63f346c88418c78f5f19dd",
".git/objects/cc/e18e5c2d69edf746e4bd500c8b9b105c06abfd": "2b88912c8fcdd5ba0b37206fe40536ae",
".git/objects/cc/f35cd0f308093b2d47a946f4707c633d02d05a": "2f925a49e4517bd3c6fe86c8b0f7d05b",
".git/objects/e6/902e5896928837a7ded5e2b4e202fced6705b7": "d36b877eee6f50898abbbc31cd5e1c88",
".git/objects/e6/9e8e6b2e70ac981be3bcd21e4c93604195412d": "3b8e2056c31fcc235909e3f0c6aa2236",
".git/objects/f9/bada352b2748fcd2478e957cf2637c7822571f": "1f3fbfbfd0e7bd5b4c31d2807a832a38",
".git/objects/f7/9cf4510a498cd892a52eb9239005e122d16570": "9e3369128efeafe24611aaab50df035c",
".git/objects/f7/5b55a82c4dc7513158873fdbb90abba29aa76f": "a92c2f423b5dad39955f5bb8ec55b40d",
".git/objects/f8/d394b33e5fbade0249b26033b60571a2d72a0b": "19809a7af6f1c532af5ae5ab7d2b5baf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/423019f5708e5c8f6338400c566b629ef4cd33": "ccc80a2973cf90b7b2bdf7cd988a4735",
".git/objects/48/b72ab7253ff619263ec927eb06479e66d84947": "87e2d1b89797df8c902a1f9412dc3963",
".git/objects/4f/6497f189d3e4085042529bd923ce0fb105e1e4": "5980c6b34da5e901c276273cb08096bd",
".git/objects/1d/7c964011aa5f18c9c623dee00a27016b8246a4": "b988d18ed1158613d0dba7fff65ead57",
".git/objects/71/27aa8629ca756098a3265d8f08f00d427133b7": "fba479886d12fb6f38be02bbc4518be2",
".git/objects/76/036e5a0fa699818a6caef2ac1427965eb5e98b": "c768e56764725ac2198c3769f2de2e13",
".git/objects/47/9e9b49cfc81eb37935df2017c132470cd83c90": "187c2856ed9a24a1720ca5a518ea9780",
".git/objects/78/37848fddad893bd7fbc41608610b7be47b2194": "ba91e0b718e318cc06bfb0abe618a592",
".git/objects/8b/c8cd6ae44493d69b1d7a244035ff7030897220": "afb32161209b354f618410ece3039f96",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "c43abbaf471ba31b04d408f3ecb57376",
".git/logs/refs/heads/main": "9a08f3ad45cf386e0915f266be4a8b22",
".git/logs/refs/remotes/origin/main": "2ca7188444d2c1b579d55e31a669b6ad",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "92091a53f2c8aac550268fe544726101",
".git/refs/remotes/origin/main": "92091a53f2c8aac550268fe544726101",
".git/index": "321bde18c8d3d816fa22bcf402c29b34",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "a008246a362a693c435e2bc36552fa32",
"assets/NOTICES": "d029ea9740d0a418bb4eb2776631143a",
"assets/config.env": "173cc85f25f775616e8e51531edf5e38",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/tsdl.png": "4306ed4bc4a30906ff2faddb3b508741",
"assets/assets/images/warning.png": "46336c6fee0436fbb336739434607232",
"assets/assets/images/prosteticIcon.png": "31d0504071914f16614330039c345c46",
"assets/assets/images/pacientes.png": "877fc60fb8e39b9032bbd2e056c753d2",
"assets/assets/images/marioCorto.png": "5747f875196d7199b5feb1a09c0cdf7c",
"assets/assets/images/Liner.png": "063edba0ebdd3a2af7e5028f93da8c7f",
"assets/assets/images/piernaSplash.png": "6c0fa772c0a6fdc273c93bbf2b2754e3",
"assets/assets/images/bulboso.png": "bbba3b5f963fb20bee27a9cb4bff6069",
"assets/assets/images/delgado.png": "f56fd532689e13a80cfe4b9d61783175",
"assets/assets/images/logo_hospital.png": "9ab89bb4fb704c14b904b623d2c8a0ef",
"assets/assets/images/appointment.png": "d0dffde9fe064bee7e884fd4f311d7fc",
"assets/assets/images/rodilla.png": "63fa670ef13889b76192e7fcba849811",
"assets/assets/images/conico.png": "096b7a8ce5662b071c4fd4aacda6052e",
"assets/assets/images/icono.png": "31667212bc105754b354324ab11e34bb",
"assets/assets/images/transtibialDerecha.png": "31d0504071914f16614330039c345c46",
"assets/assets/images/miguelAngel.png": "36b51b81e77ad3f02b8f7760b4e6bcf5",
"assets/assets/images/losandeslogo.png": "08250b7d6f36de6509eb9e4512274d2b",
"assets/assets/images/family.png": "48686cbbce6104142e6d8ca67ad6e400",
"assets/assets/images/reportIcon.png": "123bffe59fa04fe9a7bbbe27dd622d4f",
"assets/assets/images/tesosIcon.png": "2561aa329934be27315203b0133159bb",
"assets/assets/images/articuladoCaderaDerecha.png": "31f7c77b31948682adcaffa12397a31d",
"assets/assets/images/user.png": "6f6bbb16aec97391aefe120ec5a4e6a2",
"assets/assets/images/mario_miguel.png": "a1e70e662603c67a9e655624adb6e01e",
"assets/assets/images/excecises.png": "71f33ee3182b53828ffb776cbf2c7c86",
"assets/assets/images/camion.png": "1a04d9e38e3d36b8f999c38723baf4cc",
"assets/assets/images/cicatriz.png": "959c6e1bd7a29ee4b36a99a10f401bd7",
"assets/assets/images/transfemoralDerecha.png": "13bcc37128933e34b552e1c2bb328108",
"assets/assets/images/articuladoTobilloIzquierda.png": "942613ef017713fdefaa4cce74999d19",
"assets/assets/images/profile_placeholder.png": "391837c0094b7f689b32e30c9a000938",
"assets/assets/images/TeSOS_logo.png": "c79adbc4f77b60631dfafe79f4365ce0",
"assets/assets/images/alejo_corto.png": "6949524a32304a65e4b3dc003a8f92d0",
"assets/assets/images/socket.png": "6af98f967c63695df9739a3522289ff4",
"assets/assets/images/logo.png": "a10fd602dfec6b124fc6df2e897ed736",
"assets/assets/images/julieth.png": "40670ee230ad5dea1be5351c3f5668fb",
"assets/assets/images/pieIzquierda.png": "37f13ac0b3160e541e08f86d709de091",
"assets/assets/images/cilindrico.png": "aa33ed4fe26fcadfc911d0a559b32ebc",
"assets/assets/images/testimonials.png": "e88c4c1b0e0265f986b5c44a67642a22",
"assets/assets/images/tesos.png": "c953f6a040450f0f83e5ca5d60f10181",
"assets/assets/images/equipo.png": "03032d96df8488def932adb705ab3c06",
"assets/assets/images/articuladoRodillaDerecha.png": "712217635ff78d7efdbbb826f10ac285",
"assets/assets/images/cares.png": "42fe1ed28b8d03e7ffc54fd8ae685572",
"assets/assets/images/danielaCorto.png": "8fc879e6ba0a658e5577dcb48c9f0ed7",
"assets/assets/images/articuladoTobilloDerecha.png": "0225778334629cbe95ab072a0be11fc6",
"assets/assets/images/mateo_empty_view.png": "64fd9198e03fd0883118ef5acc5c97e3",
"assets/assets/images/transtibialIzquierda.png": "2b694cf3ceeb3d1cd69df3f7947344b3",
"assets/assets/images/articuladoCaderaIzquierda.png": "1f35214a6841fe8cc2127838154b9e08",
"assets/assets/images/learningIcon.png": "06b284a9b21844c4d06d96add78b18de",
"assets/assets/images/pieDerecha.png": "dc01d8c5104de48319eb9c33fff6627f",
"assets/assets/images/logo_hospital_blanco.png": "38b983c520b3dbd248f394beafae24f4",
"assets/assets/images/transfemoralIzquierda.png": "04ca108ebc46ad3f7a9fbf99b0fc4ca6",
"assets/assets/images/tutorials.png": "ad477278d4d26454a8bed7c8f7ebb7e5",
"assets/assets/images/articuladoRodillaIzquierda.png": "ded3e1d849db661060408b4763dce44d",
"assets/assets/images/isotipoVerde.png": "30bbd29d2abf8cbae78330103b69d480"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
