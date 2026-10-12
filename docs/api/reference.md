---
sidebar_position: 1
---

# API 参考

以下是 test-docs 示例项目提供的接口说明。

## 获取文档列表

```
GET /api/docs
```

返回当前站点所有文档的标题与路径。

**响应示例：**

```json
{
  "code": 0,
  "data": [
    {"title": "欢迎使用 test-docs", "path": "/docs/intro"},
    {"title": "快速开始", "path": "/docs/guide/quickstart"}
  ]
}
```

## 关键词提示

> 以上接口为示例占位内容，仅用于测试文档站点的展示效果。
