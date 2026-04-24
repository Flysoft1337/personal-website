# personal-website

> Flysoft 的个人主页 · [flysoft.top](https://flysoft.top)

macOS 风格玻璃拟态单页应用，动态背景 + 中央玻璃窗口 + 底部 Dock 导航。

## 技术栈

| | |
|---|---|
| 框架 | Next.js 16 + React 19 |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4 |
| 动画 | Framer Motion + CSS Animations |
| 统计 | Vercel Web Analytics |
| 部署 | Vercel + Cloudflare CDN |

## 特性

**UI / 体验**
- 玻璃拟态 UI，CSS 光球背景动画（纯 GPU 合成线程，低开销）
- 底部 Dock 导航，六个板块：首页、关于、技能、项目、博客、联系
- 键盘快捷键 1-6 切换板块
- 响应式布局，移动端自适应
- `prefers-reduced-motion` 支持，低端设备自动关闭动画

**数据集成**
- 网易云音乐 — 展示最近常听的 5 首歌（封面 + 歌名 + 歌手）
- GitHub 动态 — 实时拉取最近 push / PR / 分支创建
- 实时时钟 — 根据访客时区自动显示

**SEO / 性能**
- OpenGraph / Twitter Card 元数据
- 动态生成 og:image 和 favicon
- Vercel Web Analytics 访问统计

## 本地运行

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## 目录结构

```
app/
├── globals.css
├── layout.tsx
├── page.tsx
├── icon.tsx                 # 动态 favicon
├── opengraph-image.tsx      # 动态 og:image
└── api/
    ├── music/route.ts       # 网易云音乐 API 代理
    └── github/route.ts      # GitHub 动态 API 代理

components/
├── Background.tsx           # CSS 光球背景
├── GlassWindow.tsx          # 玻璃窗口容器
├── Dock.tsx                 # 底部导航栏
├── GithubActivity.tsx       # GitHub 动态组件
├── MusicStatus.tsx          # 网易云音乐组件
└── sections/
    ├── HomeSection.tsx
    ├── AboutSection.tsx
    ├── SkillsSection.tsx
    ├── ProjectsSection.tsx
    ├── BlogSection.tsx
    └── ContactSection.tsx

hooks/
└── useReducedMotion.ts
```

## 分支与部署

- `master` — 生产分支，合并后 Vercel 自动部署至 [flysoft.top](https://flysoft.top)
- `dev` — 开发分支，push 后生成 Vercel 预览链接

## License

MIT
