/*
 * What the download section lists. Written by the XIDM release workflow (tools/ci/site_downloads.py)
 * on every published version: the APKs are attached to this repository's release v10.7.
 * Edit by hand only "play" (the Google Play URL; empty = "coming to Google Play") and "minAndroid":
 * the workflow keeps both.
 */
window.XIDM_DOWNLOADS = {
  version: '10.7',
  versionCode: 125,
  minAndroid: '7.0',
  released: '2026-10-21',
  play: '',
  apks: [
    { abi: 'universal', file: 'https://github.com/diao-coder/pageview/releases/download/v10.7/xidm-10.7-universal.apk', size: 47726562, sha256: 'a1a8131f9a02a5fa3ca0f91149ea40e34b3f3084699b8b0a394e42fd6f56b15c', ready: true },
    { abi: 'arm64-v8a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.7/xidm-10.7-arm64-v8a.apk', size: 19266181, sha256: 'b03d46908b1426cd0f7a0e32b0da99a25080a84326a3a9872d9cb068c5b8ad0b', ready: true },
    { abi: 'armeabi-v7a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.7/xidm-10.7-armeabi-v7a.apk', size: 16264927, sha256: '977cb17048a3d878c3e54f8da09803b551744541bcc85391911f9fdf4005480f', ready: true },
    { abi: 'x86_64', file: 'https://github.com/diao-coder/pageview/releases/download/v10.7/xidm-10.7-x86_64.apk', size: 19102942, sha256: 'e30aab5144e214590d1261c4a3bdf70105b08c14bccb5e18f60704538678ea16', ready: true }
  ]
};
