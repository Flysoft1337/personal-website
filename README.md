# personal-website

Flysoft 的个人主页，基于 Next.js 构建，采用 macOS 风格的玻璃拟态设计。

## 预览

动态背景 + 中央玻璃窗口 + 底部 Dock 导航，点击切换各板块内容。

## 技术栈

- **框架** — Next.js 16 + React 19
- **样式** — Tailwind CSS v4
- **动画** — Framer Motion
- **语言** — TypeScript

## 功能

- 液态玻璃拟态 UI，背景光球实时浮动
- 底部 Dock 导航，平滑切换六个板块（首页、关于、技能、项目、博客、联系）
- 首页实时时钟，根据访客时区显示当前时间
- 头像旋转渐变光圈 + 角色文字循环切换
- 全响应式布局

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看。

## 部署

项目部署于 [Vercel](https://vercel.com)，推送到 `master` 分支自动触发部署。

## 目录结构

```
app/
├── globals.css       # 全局样式、玻璃拟态工具类
├── layout.tsx        # 根布局
└── page.tsx          # 主页面

components/
├── Background.tsx    # 动态背景（光球 + 粒子）
├── GlassWindow.tsx   # 玻璃窗口容器
├── Dock.tsx          # 底部导航栏
└── sections/
    ├── HomeSection.tsx
    ├── AboutSection.tsx
    ├── SkillsSection.tsx
    ├── ProjectsSection.tsx
    ├── BlogSection.tsx
    └── ContactSection.tsx
```

## License

MIT
