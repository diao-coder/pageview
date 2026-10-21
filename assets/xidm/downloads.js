/*
 * What the download section lists. Written by the XIDM release workflow (tools/ci/site_downloads.py)
 * on every published version: the APKs are attached to this repository's release v10.8.
 * Edit by hand only "play" (the Google Play URL; empty = "coming to Google Play") and "minAndroid":
 * the workflow keeps both.
 */
window.XIDM_DOWNLOADS = {
  version: '10.8',
  versionCode: 126,
  minAndroid: '7.0',
  released: '2026-10-21',
  play: '',
  apks: [
    { abi: 'universal', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8/xidm-10.8-universal.apk', size: 49248571, sha256: 'decdaa3f13b3d3c27f3fcf4eba2aa9947c2dd8b0e75885adc62a7e0d691f1a04', ready: true },
    { abi: 'arm64-v8a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8/xidm-10.8-arm64-v8a.apk', size: 20788190, sha256: '277646b60dcb5a684caa664d75ccbd0b8bd7a7cff8103cf7a32e728f84a152df', ready: true },
    { abi: 'armeabi-v7a', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8/xidm-10.8-armeabi-v7a.apk', size: 17786936, sha256: '94348662fe0606f30bb045857b36364c547fb0044f884cb9aeb6491b39e8fbc8', ready: true },
    { abi: 'x86_64', file: 'https://github.com/diao-coder/pageview/releases/download/v10.8/xidm-10.8-x86_64.apk', size: 20624951, sha256: '8f4f6a392d42ce7455f0300e894e525fa299c0925e3f621e7d73ae236a496d3f', ready: true }
  ]
};
