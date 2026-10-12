# test-docs

一个基于 [Docusaurus](https://docusaurus.io/) 的文档站骨架，开箱即用。

- 框架：Docusaurus 3.10（TypeScript + classic 预设）
- 文档目录：`docs/`
- 博客目录：`blog/`

## 环境要求

- Node.js ≥ 18
- npm

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 本地预览（默认 http://localhost:3000）
npm run start
```

浏览器会自动打开开发服务器，大部分修改会热更新，无需手动重启。

## 生产构建

```bash
# 生成静态文件到 build/ 目录
npm run build

# 本地预览构建产物
npm run serve
```

构建产物 `build/` 可部署到任意静态托管服务（GitHub Pages、Nginx、对象存储等）。

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run start` | 启动本地开发服务器 |
| `npm run build` | 生成生产静态文件到 `build/` |
| `npm run serve` | 本地预览构建产物 |
| `npm run deploy` | 发布到 GitHub Pages |
| `npm run typecheck` | TypeScript 类型检查 |
| `npm run clear` | 清理构建缓存 |

## 目录结构

```
├── docs/                  # 文档内容（Markdown / MDX）
├── blog/                  # 博客文章
├── src/                   # 自定义 React 组件、页面、样式
│   ├── components/        # 可复用组件
│   ├── pages/             # 独立页面（首页等）
│   └── css/               # 全局样式
├── static/                # 静态资源（图片、favicon 等）
├── docusaurus.config.ts   # 站点主配置
├── sidebars.ts            # 文档侧边栏配置
└── package.json
```

## 开始写文档

在 `docs/` 下新建 `.md` / `.mdx` 文件即自动出现在侧边栏；如需自定义侧边栏顺序，编辑 `sidebars.ts`。详见 [Docusaurus 文档](https://docusaurus.io/docs)。
