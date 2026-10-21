/*
 * What the download section lists. Written by the XIDM release workflow (tools/ci/site_downloads.py)
 * on every published version: the APKs are attached to this repository's release v10.6.
 * Edit by hand only "play" (the Google Play URL; empty = "coming to Google Play") and "minAndroid":
 * the workflow keeps both.
 */
window.XIDM_DOWNLOADS = {
  version: '10.6',
  versionCode: 124,
  minAndroid: '7.0',
  released: '',
  play: '',
  apks: [
    { abi: 'universal', file: 'https://github.com/diao-coder/pageview/releases/download/v10.6/xidm-10.6-universal.apk', size: 47723355, sha256: 'b6027f541fa09e2992374954d5d9a18c510e616570f615d79fd08e82990b4f40', ready: true },
    { abi: 'arm64-v8a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.6/xidm-10.6-arm64-v8a.apk', size: 19262974, sha256: '3f2f85d509e9d9563b6d68dc280b667a89367513167438cb060a0ecfc65f22b6', ready: true },
    { abi: 'armeabi-v7a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.6/xidm-10.6-armeabi-v7a.apk', size: 16261720, sha256: '831b0c900851e9887cdca07d3588c6085d4739faa652716112abffa3b868213c', ready: true },
    { abi: 'x86_64', file: 'https://github.com/diao-coder/pageview/releases/download/v10.6/xidm-10.6-x86_64.apk', size: 19099735, sha256: '4435f32ca9acc7f070598ef87e6de549047aae7aa82f9e58fefad142278c82bd', ready: true }
  ]
};
