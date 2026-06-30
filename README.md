# 钧泽安居

一个基于 Astro 构建的企业官网项目，专为平顶山本地家居服务平台设计。采用 **SSR（服务器端渲染）** 架构，后台修改内容即时生效，无需重新部署。

## 技术栈

- **框架**: Astro 4.x（SSR 模式）
- **部署**: Cloudflare Pages + Cloudflare Functions（GitHub 自动部署）
- **数据库**: Cloudflare D1（SQLite）
- **图片存储**: Cloudflare KV（营业执照等）
- **样式**: TailwindCSS 4.x
- **认证**: JWT

## 架构说明

本项目采用 SSR 架构，所有页面在服务器端实时渲染：

- **每次页面请求**由 Cloudflare Functions 从 D1 数据库读取最新数据，生成完整 HTML 返回
- **后台修改内容即时生效**，无需重新构建或部署
- **SEO 友好**：搜索引擎和 AI 爬虫收到的是完整 HTML，可正常抓取所有动态内容
- **结构化数据**：每个页面都包含 JSON-LD 结构化数据（LocalBusiness、Service、FAQ）

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（需要本地配置 wrangler.toml 中的 D1/KV 绑定）
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 部署到 Cloudflare Pages

> 详细部署指南请参考 [DEPLOY.md](./DEPLOY.md)，以下为简要步骤。

### 部署方式

本项目使用 **GitHub 自动部署**，代码推送到 GitHub 后自动触发 Cloudflare 构建和部署。

### 部署步骤

#### 1. 准备 Cloudflare 资源

在 Cloudflare 控制台创建：
- **D1 数据库**：`junze-anju-db`（记录数据库 ID）
- **KV 命名空间**：`junze-anju-kv`（记录命名空间 ID）

#### 2. 初始化数据库

在 D1 数据库控制台的 Console 中执行初始化 SQL（详见 [DEPLOY.md](./DEPLOY.md)）。

#### 3. 连接 GitHub 到 Cloudflare Pages

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 进入 **Workers & Pages** -> **Pages**
3. 点击 **Create a project** -> **Connect to Git**
4. 选择您的 GitHub 仓库
5. 配置构建设置：
   - **Project name**: `junze-anju`
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. 点击 **Save and Deploy**

#### 4. 配置资源绑定

部署完成后，在 Pages 项目的 **Settings** -> **Bindings** 中配置：

| 绑定类型 | Variable name | 资源 |
|---------|---------------|------|
| D1 database | `DB` | `junze-anju-db` |
| KV namespace | `KV` | `junze-anju-kv` |

#### 5. 设置环境变量

在 Pages 项目的 **Settings** -> **Environment variables** 中添加：

| 变量名 | 类型 | 值 | 说明 |
|--------|------|-----|------|
| JWT_SECRET | **密钥（Secret）** | 随机字符串（建议至少32位） | JWT 加密密钥 |
| ADMIN_PASSWORD | **密钥（Secret）** | admin123 | 管理员登录密码 |

> **注意**：两个变量都需要勾选 **Secret** 选项。需要同时在 **Production** 和 **Preview** 环境中设置。

#### 6. 重新部署

配置完绑定和环境变量后，推送一次代码更新到 GitHub，或手动重试部署。

### 更新代码

前端代码修改后，只需提交并推送到 GitHub，Cloudflare 会自动触发构建和部署：

```bash
git add .
git commit -m "更新内容"
git push
```

## 管理后台

### 访问地址

管理后台登录页面：`https://你的域名/admin/login`

### 默认管理员账户

- 用户名：`admin`
- 密码：`admin123`

> **注意**：首次登录后，请立即修改管理员密码！

### 管理页面路径

| 页面 | 路径 | 功能 |
|------|------|------|
| 登录 | `/admin/login` | 管理员登录 |
| 服务管理 | `/admin/services` | 管理服务项目（增删改查） |
| 案例管理 | `/admin/cases` | 管理服务案例（增删改查） |
| FAQ 管理 | `/admin/faq` | 管理常见问题（增删改查） |
| 设置 | `/admin/settings` | 修改企业信息、上传营业执照、修改密码 |

## 项目结构

```
junze-anju/
├── src/
│   ├── components/          # 组件
│   │   ├── AdminLayout.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── JsonLd.astro
│   │   └── ServiceCard.astro
│   ├── layouts/             # 布局
│   │   └── Layout.astro
│   ├── lib/                 # 工具库
│   │   └── db.js            # D1 数据库查询函数（SSR 用）
│   ├── pages/               # 页面（SSR，实时从 D1 读取数据）
│   │   ├── admin/           # 管理后台页面
│   │   ├── services/        # 服务详情页
│   │   │   ├── index.astro  # 服务列表
│   │   │   └── [slug].astro # 服务详情（动态路由）
│   │   ├── about.astro
│   │   ├── cases.astro
│   │   ├── faq.astro
│   │   └── index.astro      # 首页
│   └── styles/              # 样式
│       └── global.css
├── functions/               # Cloudflare Functions（API 接口）
│   └── api/
│       ├── admin/           # 管理后台 API（需 JWT 认证）
│       └── *.js             # 公开 API
├── scripts/
│   └── copy-functions.mjs   # 构建后复制 Functions 和 CSS 到 dist
├── public/                  # 静态资源
│   └── robots.txt
├── wrangler.toml            # Cloudflare 配置（仅用于本地开发）
├── astro.config.mjs         # Astro 配置（SSR + Cloudflare adapter）
└── package.json             # 项目配置
```

## 常见问题

### Q: 部署后页面样式不生效？

A: 请检查：
1. Cloudflare 构建日志是否显示成功
2. 确认 `dist/_astro/` 目录下存在 CSS 文件
3. 清除浏览器缓存后重新加载页面（Ctrl+Shift+R）

### Q: API 请求返回 500 错误？

A: 请检查：
1. D1 数据库是否正确绑定（变量名必须是 `DB`）
2. KV 命名空间是否正确绑定（变量名必须是 `KV`）
3. 环境变量是否正确设置
4. 数据库是否已初始化（执行了初始化 SQL）
5. 在 Cloudflare 控制台查看函数日志

### Q: 后台修改内容后前端没有更新？

A: 本项目采用 SSR 架构，后台修改内容保存到 D1 数据库后，前端**即时生效**，无需重新部署。如果仍看不到更新：
1. 清除浏览器缓存（Ctrl+Shift+R 强制刷新）
2. 确认数据已保存到 D1（在数据库 Console 中查询验证）

### Q: 修改了前端代码后怎么更新？

A: 前端代码修改后，只需提交并推送到 GitHub，Cloudflare 会自动触发构建和部署：

```bash
git add .
git commit -m "更新前端样式"
git push
```

### Q: 管理后台登录失败？

A: 请检查：
1. `ADMIN_PASSWORD` 环境变量是否正确设置（密钥类型）
2. `JWT_SECRET` 是否已配置（密钥类型）
3. 管理员账户是否已通过初始化 SQL 创建

### Q: 如何更新内容？

A: 有两种方式：
1. 通过管理后台修改（推荐）
2. 在 D1 数据库控制台直接执行 SQL

## 注意事项

1. **生产环境安全**：
   - 修改 `JWT_SECRET` 为随机生成的安全密钥（密钥类型）
   - 修改默认管理员密码 `ADMIN_PASSWORD`（密钥类型）
   - 启用 Cloudflare 的安全功能（如 WAF、Rate Limiting）

2. **图片资源**：
   - 营业执照图片通过管理后台上传，存储在 Cloudflare KV 中
   - 图片带有防下载保护（禁用右键菜单、动态加载、X-Robots-Tag: noindex）
   - 其他静态图片请放入 `public/` 目录

3. **SEO 优化**：
   - 项目已内置 JSON-LD 结构化数据（LocalBusiness、Service、FAQ）
   - SSR 架构确保搜索引擎和 AI 爬虫可抓取完整内容
   - robots.txt 已配置允许主要搜索引擎和 AI 爬虫（GPTBot、Google-Extended）爬取
   - 站点地图（sitemap.xml）已自动生成

4. **数据更新**：
   - 后台数据修改（服务、案例、FAQ、企业信息）即时生效，无需重新部署
   - 前端代码修改需要推送到 GitHub 触发自动部署
