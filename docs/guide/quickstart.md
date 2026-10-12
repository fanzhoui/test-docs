---
sidebar_position: 1
---

# 快速开始

本节将引导您在短时间内完成 test-docs 文档站的搭建与运行。

## 前提条件

开始之前，请确保已具备以下运行环境：

- 已安装 Node.js（建议 18 及以上版本）
- 已具备 npm、pnpm 或 yarn 等任一包管理器

## 安装项目依赖

在项目根目录执行依赖安装：

```bash
npm install
```

## 启动开发服务器

执行以下命令以启动本地开发环境：

```bash
npm run start
```

默认访问地址为：`http://localhost:3000`

开发环境自带热更新能力，您在 `docs/` 目录下保存文档改动后，页面会自动刷新，无需手动重启。

## 生成生产构建

如需生成可供生产部署的静态文件，执行：

```bash
npm run build
```

构建完成后，静态资源将输出到 `build/` 目录，可部署至任意静态托管平台。

## 延伸阅读

- [安装部署](/docs/guide/installation)：查看环境要求与各部署方式
- [配置说明](/docs/guide/configuration)：了解常用配置项
