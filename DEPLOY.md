# W-Flow デプロイ手順（GitHub 連携）

push するだけで Cloudflare Pages に自動デプロイされます。

---

## 初回セットアップ

### 1. Cloudflare ダッシュボードでプロジェクト作成

1. [Cloudflare ダッシュボード](https://dash.cloudflare.com/) にログイン
2. 左メニュー **Workers & Pages** → **Create** → **Pages** タブ
3. **Connect to Git** を選択
4. GitHub アカウントを連携し、`flowYuki1114/Wflow_project` リポジトリを選択

### 2. ビルド設定

| 項目 | 値 |
|------|-----|
| Framework preset | None |
| Build command | （空欄のまま） |
| Build output directory | `/` |

### 3. 保存

**Save and Deploy** をクリック。初回デプロイが完了します。

---

## 2回目以降のデプロイ

```bash
git add .
git commit -m "更新内容"
git push origin main
```

push 後、自動で Cloudflare Pages が再デプロイされます（1〜2分程度）。

---

## 独自ドメイン（w-flow.jp）の接続

1. Cloudflare Pages プロジェクト → **Custom domains**
2. `w-flow.jp` を追加
3. DNS の設定（Cloudflare で DNS を管理する場合は自動設定）

---

## デプロイ前に確認すること

- [ ] GA4 測定 ID（`G-XXXXXXXXXX`）を実際の ID に変更
- [ ] Formspree ID（`YOUR_FORMSPREE_ID`）を実際の ID に変更
- [ ] `tokusho.html` に事業者情報を入力
- [ ] `privacy.html` に個人情報保護管理者を入力
- [ ] OGP 画像（ogp.png）をルートに配置
