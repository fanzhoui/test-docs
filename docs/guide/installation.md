---
sidebar_position: 2
---

# 安装部署

test-docs 编译后是纯静态站点，部署方式非常灵活。

## 环境要求

| 组件 | 版本要求 |
|------|---------|
| Node.js | ≥ 18 |

## 构建

```bash
npm install
npm run build
```

构建完成后，静态文件位于 `build/` 目录。

## 部署方式

### GitHub Pages

仓库已开启 Pages 时，可直接使用：

```bash
GIT_USER=<你的用户名> npm run deploy
```

### Nginx

将 `build/` 目录内容复制到 Nginx 站点根目录即可：

```bash
cp -r build/* /usr/share/nginx/html/
```

### 对象存储 / CDN

将 `build/` 目录上传到任意对象存储桶，配置静态网站托管即可。

## 验证

部署后访问站点首页，确认导航、文档页面均正常加载。
