# junze-anju

一个基于 Astro 构建的企业官网项目。

## 一键部署到 Cloudflare Pages

[![Deploy to Cloudflare Pages](https://deploy.workers.cloudflare.com/button)](https://dash.cloudflare.com/?to=/:account/pages)

### 部署步骤

1. 将项目推送到 GitHub 仓库
2. 访问 [Cloudflare Pages Dashboard](https://dash.cloudflare.com/?to=/:account/pages)
3. 点击 **Create a project**，连接 GitHub 仓库，选择 `junze-anju` 项目
4. 配置构建设置：
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. 创建 D1 数据库：
   ```bash
   npx wrangler d1 create junze-anju-db
   ```
   将返回的 `database_id` 填入 `wrangler.toml` 文件
6. 初始化数据库表：
   ```bash
   npx wrangler d1 execute junze-anju-db --file=seed/init.sql
   ```
7. 添加环境变量（推荐通过 Cloudflare Dashboard 配置，避免提交到仓库）：
   - `JWT_SECRET`: JWT 密钥，建议使用随机字符串
   - `ADMIN_PASSWORD`: 管理员密码
8. 点击 **Deploy** 完成部署

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 部署到 Cloudflare Pages
npm run deploy
```

## 技术栈

- **框架**: Astro 4.x
- **部署**: Cloudflare Pages
- **数据库**: Cloudflare D1
- **样式**: TailwindCSS 4.x
- **图标**: Lucide Astro

## 项目结构

```
├── src/
│   ├── components/       # 组件
│   │   ├── AdminLayout.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── JsonLd.astro
│   │   └── ServiceCard.astro
│   ├── layouts/          # 布局
│   │   └── Layout.astro
│   ├── pages/            # 页面
│   │   ├── admin/        # 管理后台页面
│   │   │   ├── cases.astro
│   │   │   ├── faq.astro
│   │   │   ├── login.astro
│   │   │   ├── services.astro
│   │   │   └── settings.astro
│   │   ├── services/     # 服务详情页
│   │   │   └── [slug].astro
│   │   ├── about.astro
│   │   ├── cases.astro
│   │   ├── faq.astro
│   │   └── index.astro
│   └── styles/           # 样式
│       └── global.css
├── functions/            # Cloudflare Functions
│   ├── admin/            # 管理后台 API
│   │   ├── cases.ts
│   │   ├── faq.ts
│   │   ├── login.ts
│   │   ├── services.ts
│   │   └── settings.ts
│   └── api/              # 公共 API
│       ├── business.ts
│       ├── cases.ts
│       ├── faq.ts
│       └── services.ts
├── seed/                 # 数据库初始化脚本
│   └── init.sql
├── astro.config.mjs      # Astro 配置
├── wrangler.toml         # Cloudflare 配置
└── package.json          # 项目依赖
```