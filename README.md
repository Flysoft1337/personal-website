# personal-website

> Flysoft 的个人主页 · [flysoft.top](https://flysoft.top)

macOS 风格玻璃拟态设计，动态背景光球 + 中央玻璃窗口 + 底部 Dock 导航。

## 技术栈

| | |
|---|---|
| 框架 | Next.js 16 + React 19 |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4 |
| 动画 | Framer Motion + CSS Animations |
| 部署 | Vercel + Cloudflare CDN |

## 特性

- 玻璃拟态 UI，背景 CSS 光球动画（纯 GPU 合成线程，低开销）
- 底部 Dock 导航，切换六个板块：首页、关于、技能、项目、博客、联系
- 实时时钟，根据访客时区自动显示
- 头像旋转渐变光圈 + 角色文字循环切换
- 响应式布局，移动端适配
- `prefers-reduced-motion` 支持，自动关闭动画
- OpenGraph / Twitter Card 元数据 + 动态 og:image

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
├── icon.tsx              # 动态 favicon
└── opengraph-image.tsx   # 动态 og:image

components/
├── Background.tsx        # CSS 光球背景
├── GlassWindow.tsx       # 玻璃窗口容器
├── Dock.tsx              # 底部导航
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

## 分支说明

- `master` — 生产分支，Vercel 自动部署
- `dev` — 开发分支，PR 合并到 master 触发部署

## License

MIT
