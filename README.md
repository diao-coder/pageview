# XIDM 产品官网

XIDM（会嗅探、会拦截广告的 Android 浏览器 + HTTP / HLS / BitTorrent 下载管理器）的产品首页。纯静态页面，由 GitHub Pages 直接托管（`.nojekyll`，不经 Jekyll 处理）。

- `index.html`：首页（中文 / English，按浏览器语言自动选择，可手动切换）
- `privacy.html`：应用内置的隐私政策（来自 xidm 仓库 `docs/privacy/privacy-policy.html`，修改时两处同步）
- `assets/xidm/site.css`、`assets/xidm/site.js`：样式与交互（分段下载演示、计数、滚动渐显、背景粒子），无第三方 JS 依赖；字体来自 Google Fonts

下载按钮指向 https://github.com/diao-coder/xidm/releases/latest 。本地预览：`python -m http.server` 后打开 http://localhost:8000 。
