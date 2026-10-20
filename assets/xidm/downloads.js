/*
 * What the download section lists. Edit this file when a build is published:
 *   1. copy the APK into downloads/ under the "file" name below;
 *   2. fill "size" (bytes) and "sha256" (64 hex chars), set "ready": true.
 * Rows that are not ready show as "coming soon" and cannot be clicked.
 * Google Play: put the store URL in "play" (empty = "coming to Google Play").
 */
window.XIDM_DOWNLOADS = {
  version: '10.6',
  versionCode: 124,
  minAndroid: '7.0',
  released: '',            // e.g. '2026-11-01'
  play: '',                // e.g. 'https://play.google.com/store/apps/details?id=xidm.manager.plus'
  apks: [
    // universal first: it installs everywhere, so it is the safe default when the ABI is unknown
    { abi: 'universal',   file: 'downloads/xidm-10.6-universal.apk',   size: 0, sha256: '', ready: false },
    { abi: 'arm64-v8a',   file: 'downloads/xidm-10.6-arm64-v8a.apk',   size: 0, sha256: '', ready: false },
    { abi: 'armeabi-v7a', file: 'downloads/xidm-10.6-armeabi-v7a.apk', size: 0, sha256: '', ready: false },
    { abi: 'x86_64',      file: 'downloads/xidm-10.6-x86_64.apk',      size: 0, sha256: '', ready: false }
  ]
};
