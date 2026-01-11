'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a4b8712fabc9c3d2af6401f75a83368c",
".git/config": "12ca3ffb2d53895d50a66e64de5cfad5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "997e6f00cf3af7bb50362f3b326a7f9b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "de2c46545852f8571dc6ee8db62c0de1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "529a6517c5c98b792c35f1e85c3a5b24",
".git/logs/refs/heads/main": "83d5bbafd7470a1ed0a97bae5d7543dd",
".git/logs/refs/remotes/origin/main": "c77690d09f5c319492edd91acaf97fd3",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/88eae7813f8cb36ea32f6ad2859ba51538caba": "07fab51893ab43e4bac4e908d4184284",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/60459f67f6c60c075ada0c5f0d2d6880f2f6d6": "eb810aa1c6da7d34964266f0b90ebdd9",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/0f/0b8dc0ec241bf1249115fa392e3e92d909fc61": "c418202ed3cdbfd8456360b771c7698e",
".git/objects/16/79b34962436e85bd8454ffffa825a125c2bc6a": "45f54794644a30a38f8c348414b0f57f",
".git/objects/18/534b998f85396c76d2a98e0a1fb522cff3ed4c": "e5770c92c89c0a1ab4d7643af480cb56",
".git/objects/19/2cb01d6053708a2ddf69e4c7d55c133bb6a374": "afa1d5b57ad8a37d19ce996859a2519b",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/e865ad5671e84e847903208f71ee05987cfaaf": "3cf07d3b20b9e6e6dab2ad27725153d5",
".git/objects/23/620c4f39e6fb7f20531759a764d4c1f5795767": "871c4487a53384b07970b42943aab91e",
".git/objects/25/89ba56c6f1fb51edf79ffd60cf8c55943fb172": "f51038cf79ea39230f0dfcc3f1b523bd",
".git/objects/25/eb3fe1bb5416c2b9c992d7fcc7d5d87601648d": "6ab2e3e33cd145a824a3526501ecacd2",
".git/objects/27/b31aeacfb68fa47173a7fce8e5eba4dc0cff79": "80fd1f26f648a26acd4d493c02dea404",
".git/objects/28/28040a508895d7c010ee73c8f6f299eea56004": "b4838e3ba7a1574758f43053daca66af",
".git/objects/28/a3b244cf9c9520e12ad3c16883ea5dd9ef114c": "39bfd77ff41911d3c6c7d1931cd434ba",
".git/objects/28/ed2fe302f6a0bef1d77ca7c741e8b43955dff7": "57cd0fa52f7ccdf5cf0077ef67351d9e",
".git/objects/29/70fc8aa2b1c45e92f59d36a42b890c010888d0": "b7caecb3e0a207252d9dcc4bc9fb9935",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/7b60695b48169fe032cea8539abf92b786bdf5": "29710526d729b935a23e73076a097b35",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/53c4a8dc582c0f83cea1f135dd562c17fb98a7": "cb4303627072365ce6426d06bc5d8a39",
".git/objects/30/d57d411d8fb4a097b06d28712593bd364ed9c1": "27ffd6af65d2685563f1027d9e39ed1e",
".git/objects/31/58271fdf6da1e2cd2d35b11dc0e546dc0d6771": "25ae519ad04b327b81918bee865951b0",
".git/objects/33/cad65344c423bee043eaede5b985f8e6103cac": "fe3e46e7ed7f14f3588d73a110494616",
".git/objects/36/8299b9b8effe8f1fe8f1b102f9453e53b475da": "c397beb6a325f368dba8c9c1f96819b6",
".git/objects/36/8d543932c51032804a4680becc3457f5bd8ef2": "c890be5dda9465e030ba2c09e65f1399",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/47/307834a62d323c86fdafdae36ebdcff36b13f8": "5fee1294f8d2e4b267b7154527b24aca",
".git/objects/4a/cb213453dd30cd13f1f06ef581dde214f7cb74": "fc1f581beb69baccb60df8d57cf8418c",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/65e36ffef6ad6eeec186894b2b02f33c17e3e3": "08d287314a1a392d6c4591921ac18800",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/9f2b5acb9117e60ccb755731402bd958bf0012": "99760ea9a25e5b7a3395eaca8bde8baf",
".git/objects/51/b0555dd78880ac04ac6fd658baf51cae797e43": "d16c21cc8eb5119d091e0e0484f27329",
".git/objects/52/896f461139823daf687cc35421b4042e303fbc": "63a42eee682858c78a1735754a5479b4",
".git/objects/53/c8f48c83bc2d4bf304eb18554de9a59b954210": "b733e10ca30d30e1e23cca68e14e6aa7",
".git/objects/59/729aa9612032ed580e3a8d4dc9819294e8ff51": "e4d2ba39b644d8f5442199448219b640",
".git/objects/5d/6459479951385805fb82ebb2ee3781f5d0b473": "5bc80d691cb9e4bda42bd4c03aa64f92",
".git/objects/64/ec4822aa03ffedaebdb5899fd347513b2fc9be": "a78505267f7d8ee2f573cccbb9f6490a",
".git/objects/66/4f2012de2edb4637d0817d1161d23188e58aa8": "254ede31bcc8a43c1c2aee2365409d55",
".git/objects/67/afba47a86dd8e4352e57b03dd2270caf82b49f": "73fa8bbbb070f9c97e64ba3fd01c48d6",
".git/objects/69/59d1e939d3ddf6235dbd60dbf11532ba4d528c": "c95612c082f4f58a4abd047e89ce00f8",
".git/objects/69/8b66cd765ae7b4def960ea3130f4490d29b073": "53d25003b42dbbc467c1d810d0d449c2",
".git/objects/6b/7f16ed09c9a377cc24ac79176c0312d1f1aa31": "51c8db9a2694a4794190c19472766a0a",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/8971de9aa70f70c6541464789281c54c3fddec": "6c1528e906fb1d4ea49eb8f44e80ebf6",
".git/objects/71/35a03553624a942adb9dc7f93697244ecb1895": "a9f1aa5936f312993bca3aef4f245392",
".git/objects/72/f6f98291994e7e786f53e8a6c11037d76035ad": "44cb0d0df15b9364003eb410e4646b18",
".git/objects/77/92d7fc963bb810c02e3139f528d42b244fec75": "8f4ad6088f340897407ec5932326482a",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/fbb63a97956e066c6805e1f721df93211afa20": "ee98ad7ab065c55e088c999003bf96bf",
".git/objects/7e/26921adf7324829b9c0b21eb00b6f81a500253": "eb473d4db1fbf81e5e91c5bf2abf3582",
".git/objects/7f/2b01fc1afabaa68bdaf7e3701a9c83692914ac": "8635dca5d80b41e9d1559c2fa54a6a12",
".git/objects/84/3ebf8aa6ec8e141a5215b0e7790e83b72cc3d7": "ac1e9d1818ece6e73cce895bd2f7e9cf",
".git/objects/87/7a3a760536dcf3effb9ed73e2206f7c03181a2": "abce4be0c77d83dbfacddd4530933d03",
".git/objects/8d/4a19dd9588f407fc76864bf853f258902999f2": "4ef1e64fc4624eee27203c3e8d39e11b",
".git/objects/97/4cd550be5745c2986dc3f6a1e71ef380aa5750": "b4180d76917ed7611ccdc26243e96901",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/3fa4ec024d38fdeb7b643d5f43cc6f35395c31": "31e4f8eac67a28e8f4642c1eadf710a0",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/050e5ec7d9fb8a706a64e06de3f1f0d7cba58c": "5be7a845a8be9afe0738494d830f763a",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/99bc09591940dcfbe01e78705d778f5cfcb55c": "6f314a3a4c65650aaadb742c524606d4",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a0/bd6994d2db8185dd50436a92384fd9d1138395": "5a010d31dd81e39b5d720b158bb1423a",
".git/objects/a1/c1ccfc6dc0135d3cc67de491299d4394e70145": "36cb51e326142ff1e44484f1961cd232",
".git/objects/a2/a6867297aad1de3cd12430f9ce567ebbc96ba5": "1c89d83eea0a7e73792ef3ae3573fa10",
".git/objects/a4/9cc1be444bd9112af627ea09fe60e87a6f22a6": "09f11b15faa18e91a3cdddc9840693f8",
".git/objects/a5/0eba56e880da19d02cdf119cacc5916796c873": "3c8cc35989453b19cabdc4a89cd8d811",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/e1baa30c76460138282fa6a4fa1fbc654c823b": "5d8b6895331090474eb6b38e637638fc",
".git/objects/b5/5f05b887f34502118b7b2733736c053f2bd4fa": "cb92a796f1331ad92bdf46f85e9c0e6d",
".git/objects/b6/a8eed39faf63c40a200533f354cf764c76b456": "b833110687f5e0157f7db8ca18d86b84",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/bb/df9d91961782faef97ebcfcb57c524d3755a7b": "f9b4c928833e132a43c7d0feb2e985c7",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/4ab292856247150732d288b4c81cf50fddca79": "7b59d0739bbaa004c585f873321dbf45",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/f4e790c294ec2c86888c76db0c194716683f8b": "010dd99fe82f53ce304cf7b906200949",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/b7b724048be1a939fedf06b15a146bf514178d": "3d1bee1c704a457f9cb510d693add525",
".git/objects/cf/5f2b3723c20eca806612e6318739cca0220d97": "f986732edad9af17ac0d6eda6a946790",
".git/objects/cf/83c6606f70112d720e313005c6b87ef9777175": "9d141b6f8f163a9ee6597e96b700c112",
".git/objects/d1/41aec260f38e4a036d9c5d467d97060a940d64": "9eeb82cb86ce2550787dcd76db232a30",
".git/objects/d3/26ea4a6ed10dd8c9bf52369383bfa4735457ab": "9ca2e1f20da92d300490cf6d316e460a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/dc/08016c4e55eecaecfcc341ced1a69dd477fdf0": "00d8bfb9ce2c7db22cc99ac5ce38fb9e",
".git/objects/dd/3bd20f61c88504b6891cfcabd6aa1c8ef9fc21": "d7aff69e81d3022fd60a5346c3506a2e",
".git/objects/de/43dfc9708b0e4a49f57cda5cd7a180752f2a76": "eb6db1e3f9e1f6873312b34b9b71f254",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/e2/338b5e90a9e1996913da6b02ace113b88cb1f3": "6a9b277f46cb5b13c71611b0041396fa",
".git/objects/e2/5f661a4a419b6a2767b2496776f684d6cfb6bd": "154bd510d81929e097e9418747df9ff1",
".git/objects/e3/3fb2be4b0926310947fe95d09f8876aec922ec": "5e6fd453bbcc970211d1364ed72047cc",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e7/024e9710972de364a01cd8de50586cbcc50687": "7665d3b7d5ea9623644f1bc2570efe7e",
".git/objects/e8/f2e90ea3beea2a31de8e7ddd4e9ea2f023d76c": "b0f1299a63dc2d22343653fe1b0c8f3c",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/60e3330eeb0c57fd40707056f09772fd17a4d5": "bb57a986abb549d18f3b76246f0471b7",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/0c113b18ffb29b537b5c7e21e5e667f73aa046": "b0bf03385a6d9df1a376893c967ce107",
".git/objects/ee/128dde8e756e7593e579588d7b341a9ef16984": "c82cb498d539269bd59e3dcccc2c4adf",
".git/objects/ef/e902ddb7ab30c97c6725e8404a61826d1b5540": "5ef97a9c822b7555e4587270bfddb704",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/d1962e6737c8c368b3ed9bbf8b9222486ac6b1": "388449e88d86f42593840222196b97d4",
".git/objects/f8/a15d871eabc5f59373840b37a8d7083da196c2": "05270b764e61900b719f7cd0abdc476b",
".git/objects/f8/f69007c7a23ae7c0e8bc566a3bb4b05894dffc": "f0d98654f2f6685cdfc77a8ca3821172",
".git/objects/fc/1ffd38d2c477123d8be34b63ed473c9e6f704b": "fd93145a38337f14668408126202aac9",
".git/objects/fd/8195fa812793908b359983397690298ef61b05": "a4827cd6d912f48d18ea6c1da72f7345",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/a6fd2e76c0594de8d44d7158c93ce3089bfd83": "983f9cfea41ee7d5b6bef3a515cf96da",
".git/refs/heads/main": "436956a2084d52a4a16be00933fb3925",
".git/refs/remotes/origin/main": "436956a2084d52a4a16be00933fb3925",
"assets/AssetManifest.bin": "c32d6a120f76bb7c7038c021e42ae7e2",
"assets/AssetManifest.bin.json": "cf4daa82f131c395f18d5e256dc25108",
"assets/AssetManifest.json": "802bdc56840c8ac40d5c6e82fe12a68a",
"assets/assets/AssetManifest.bin": "033634e0b4c48cb7a4a05b513314eab2",
"assets/assets/AssetManifest.bin.json": "d53abe0876f9d4bc5e062d3cc92a7275",
"assets/assets/AssetManifest.json": "acefc4ab2800b25dfd8ba2e37704b106",
"assets/assets/CV-Beshoy-Reda-Aug.pdf": "1cd3e0dadc4a20f29619862a526a101d",
"assets/assets/FontManifest.json": "639dbb23950349116c88a12a62e1f781",
"assets/assets/fonts/MaterialIcons-Regular.otf": "4b28bf2bde792459293e99466335cf93",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/c-plus-plus-50.png": "2af2fb1cd7db7a5d57e4ac3c50083725",
"assets/assets/icons/dart.png": "918e7c35823c7ad268ba831c6e7eaa64",
"assets/assets/icons/firebase.png": "615d981501dfe5ae041209a6036a69a0",
"assets/assets/icons/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/icons/icons8-app-store-50.png": "d9e83a321d18fdc54085aef1aa9f9d92",
"assets/assets/icons/icons8-git-48.png": "5b2255699fcb506b570720cdbc8ade1b",
"assets/assets/icons/icons8-github-50.png": "add631b638f2680caf976d349e2db7e0",
"assets/assets/icons/icons8-google-play-store-50.png": "c1852044abf7a16f0b138e4a6f0ffe98",
"assets/assets/icons/icons8-linux-48.png": "e1e82f42a889005f38806051f50b58c9",
"assets/assets/icons/icons8-nestjs-48.png": "619aac0de811fa585a0cc99cce9fabee",
"assets/assets/icons/icons8-python-48.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/icons/icons8-sql-48.png": "9236a01770375143ba19a0b37209ae75",
"assets/assets/icons/icons8-typescript-50.png": "3c03f055d0114a8b53f1cbf23b0fb70c",
"assets/assets/icons/icons8-video-48.png": "8c95e0b6cf17cca047714d67ebd52306",
"assets/assets/icons/java.png": "7013d3cd840b6bed9697daf954c4c3e2",
"assets/assets/icons/python.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/images/1.png": "75b6e84f8f2c37934adbe0669b085436",
"assets/assets/images/desktop.png": "510deea38b7862484a8e26586f362152",
"assets/assets/images/exam_app_launcher_icon.png": "d4e5b00f720ac4cf8d247060d330784f",
"assets/assets/images/fitness.png": "f891e99eb1a2166696de3099b8735c23",
"assets/assets/images/flowery_tracking_icon_launcher.png": "e30a4edc58a6d3a780095ab5ed915212",
"assets/assets/images/flower_app_icon.png": "10b61052da4ca86e57d2fb6946bea93f",
"assets/assets/images/ms.png": "d4d834ea505bc694318d12a2a136dac6",
"assets/assets/images/profile.png": "3b5d544b0907bf4de9db1a74fc037910",
"assets/assets/lottie/hand_wave.json": "2d27b677f9e5cda3a91bd25f9f788cc0",
"assets/assets/NOTICES": "9fd14d90afa7ca5aa023ef636be8f5fb",
"assets/FontManifest.json": "9389a5761946733a6e5b1d3bf7ad0f39",
"assets/fonts/MaterialIcons-Regular.otf": "4b28bf2bde792459293e99466335cf93",
"assets/NOTICES": "38fd5750d8e0f7f4f182042d5571892e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/enefty_icons/lib/assets/fonts/icons/EneftyIcons.ttf": "fbe1330e9a1fb21b67a9545a1e28dde0",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/panara_dialogs/assets/confirm.png": "acf806139cb7c12e09fc5ca1185b8a2f",
"assets/packages/panara_dialogs/assets/info.png": "e4bb5858c90ab48c72f11ba44bb26b5b",
"assets/packages/reactive_theme/assets/moon-fill.png": "6477d78f34d92d97a54ba60daf7ac99d",
"assets/packages/reactive_theme/assets/sun-fill.png": "9f18372ccd39a91d08d3e3975c0085a7",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5f2e54b1dde4c9b80512699b9919682b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8b7867257795241304473ac908df3948",
"icons/Icon-192.png": "cfc43960aa07cbe0ffa873e920f7c83c",
"icons/Icon-512.png": "70e9989024de98e3f3bca2cd0bfcb309",
"icons/Icon-maskable-192.png": "cfc43960aa07cbe0ffa873e920f7c83c",
"icons/Icon-maskable-512.png": "70e9989024de98e3f3bca2cd0bfcb309",
"index.html": "7d69ddfffb1747e8035697b4bace88ec",
"/": "7d69ddfffb1747e8035697b4bace88ec",
"main.dart.js": "270352caac539bb83201d5cea494c223",
"manifest.json": "9c73788c2293c6274d188e7a7a1ab396",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
