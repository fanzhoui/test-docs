---
sidebar_position: 7
---

# 升级指南

本文说明 test-docs 站点的升级流程与注意事项。

## 升级前准备

- 备份当前 `docs/`、`docusaurus.config.ts` 等自定义内容。
- 查看[更新日志](https://github.com/facebook/docusaurus/releases)，确认目标版本是否有破坏性变更。

## 升级 Docusaurus 版本

以升级 `@docusaurus/core` 为例：

```bash
npm install @docusaurus/core@latest @docusaurus/preset-classic@latest
npm run build   # 验证构建是否通过
```

若升级涉及配置项变更，可参考官方[迁移指南](https://docusaurus.io/docs/migration)。

## 升级后检查

- 执行 `npm run build` 确认构建无报错。
- 本地启动 `npm run start`，检查导航、侧边栏与各页面渲染是否正常。
- 重点回归：多产品切换（顶栏下拉）、版本切换、搜索等依赖插件或自定义逻辑的功能。
- 确认构建产物中的链接无失效，必要时处理 `onBrokenLinks` 报错。

## 回滚

若升级后出现无法解决的问题，可回退 package.json 中的版本号后重新安装：

```bash
git checkout -- package.json
npm install
```

> 建议在升级前打好提交，便于快速回滚。
