/*
 * What the download section lists. Written by the XIDM release workflow (tools/ci/site_downloads.py)
 * on every published version: the APKs are attached to this repository's release v10.8.3.
 * Edit by hand only "play" (the Google Play URL; empty = "coming to Google Play") and "minAndroid":
 * the workflow keeps both.
 */
window.XIDM_DOWNLOADS = {
  version: '10.8.3',
  versionCode: 129,
  minAndroid: '7.0',
  released: '2026-10-22',
  play: '',
  apks: [
    { abi: 'universal', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8.3/xidm-10.8.3-universal.apk', size: 49253623, sha256: '5ecf421c29ccb58405d5a35541d5a893342d9ec3458b3509f6d539f0938d15dc', ready: true },
    { abi: 'arm64-v8a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8.3/xidm-10.8.3-arm64-v8a.apk', size: 20793242, sha256: '23e41334e4fddac5bc23622b0ee72c67284cc0df7b58af0661616e945b905b5d', ready: true },
    { abi: 'armeabi-v7a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8.3/xidm-10.8.3-armeabi-v7a.apk', size: 17791988, sha256: '755e6d12eedf7488aad57ed6bcb6a2eabe3fa5fc5163e64a6a1439c8ca924d08', ready: true },
    { abi: 'x86_64', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8.3/xidm-10.8.3-x86_64.apk', size: 20630003, sha256: '33450d8de0ea7c6b30762185b3df94dc4a80a1fd251dadee1af75d683bcfe878', ready: true }
  ]
};
