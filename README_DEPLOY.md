# ChatGPT Clone 部署指南

## 部署到 Render.com（推荐，免费）

### 步骤 1：准备代码
1. 在 GitHub 上创建一个新的仓库
2. 将代码推送到 GitHub：
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/chatgpt-clone.git
git push -u origin main
```

### 步骤 2：在 Render 部署
1. 访问 https://render.com 并注册/登录
2. 点击 "New +" → "Web Service"
3. 连接你的 GitHub 仓库
4. 配置如下：
   - **Name**: chatgpt-clone
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

### 步骤 3：设置环境变量
在 Render 控制台的 "Environment" 标签中添加：
- **Key**: `OPENAI_API_KEY`  
  **Value**: `sk-BPCVr9UMUrr3bTF9aNmVv3fi5KbNsCYabTmLkbo0zqv1Q2iX`
- **Key**: `OPENAI_BASE_URL`  
  **Value**: `https://sg.uiuiapi.com/v1`
- **Key**: `PORT`  
  **Value**: `4000`

### 步骤 4：部署
点击 "Create Web Service"，等待部署完成（约2-3分钟）

部署完成后，你会获得一个公开 URL，例如：`https://chatgpt-clone-xxxx.onrender.com`

---

## 部署到 Railway.app（推荐，简单）

1. 访问 https://railway.app 并用 GitHub 登录
2. 点击 "New Project" → "Deploy from GitHub repo"
3. 选择你的仓库
4. Railway 会自动检测并部署
5. 在 "Variables" 标签添加环境变量（同上）
6. 获取公开 URL

---

## 部署到 Vercel

1. 访问 https://vercel.com 并登录
2. 点击 "Add New" → "Project"
3. 导入 GitHub 仓库
4. 配置：
   - Framework Preset: Other
   - Build Command: `npm install`
   - Output Directory: `.`
5. 添加环境变量（同上）
6. 点击 Deploy

---

## 重要提示

⚠️ **不要将 .env 文件推送到 GitHub！**  
- `.gitignore` 文件已配置忽略 .env
- 所有密钥都应在云平台的环境变量中配置

⚠️ **API 密钥安全**
- 你的 API 密钥已在文档中显示，建议重新生成
- 设置使用限额防止滥用

⚠️ **免费套餐限制**
- Render 免费版：服务闲置15分钟后会休眠，首次访问需要30秒启动
- Railway 免费版：每月500小时运行时间
- Vercel 免费版：无休眠，但有请求限制
