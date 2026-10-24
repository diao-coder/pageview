/*
 * What the download section lists. Written by the XIDM release workflow (tools/ci/site_downloads.py)
 * on every published version: the APKs are attached to this repository's release v10.8.4.
 * Edit by hand only "play" (the Google Play URL; empty = "coming to Google Play") and "minAndroid":
 * the workflow keeps both.
 */
window.XIDM_DOWNLOADS = {
  version: '10.8.4',
  versionCode: 130,
  minAndroid: '7.0',
  released: '2026-10-24',
  play: '',
  apks: [
    { abi: 'universal', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8.4/xidm-10.8.4-universal.apk', size: 49311368, sha256: 'bec11aeb37d2692fe963acb13b1a1766205b1ca30b451844bf9849fcb50c5d08', ready: true },
    { abi: 'arm64-v8a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8.4/xidm-10.8.4-arm64-v8a.apk', size: 20850987, sha256: 'fe44c01aa5c15ba18041f74c8dc65460ad0a9359a87a1bda3ed1ece35a4687a7', ready: true },
    { abi: 'armeabi-v7a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8.4/xidm-10.8.4-armeabi-v7a.apk', size: 17849733, sha256: '4aeee226bc362584c2804c39a24d7f26b387ecd93a19fe4e9b77f411578dc0a5', ready: true },
    { abi: 'x86_64', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8.4/xidm-10.8.4-x86_64.apk', size: 20687748, sha256: '230ec0b16bfb442679f6f404ebc34271aba13c01c77d2f467348050a0905b611', ready: true }
  ]
};
