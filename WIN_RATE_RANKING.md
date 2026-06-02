# WIN_RATE_RANKING

## 前提

この分析は**推定**です。
Etsyの公開マーケットページ、上位商品の公開レビュー数、公開価格、Japan関連の公開ストアや商品ページを根拠にした販売者視点の勝率分析です。

### 指標の定義

- `勝率A`: 6か月以内に初売上を達成する確率
- `勝率B`: 月100ドル達成の確率
- `勝率C`: 月1000ドル達成の確率
- `勝率D`: 月100万円相当達成の確率

### 期待値スコア

独自スコアは以下です。

```text
期待値 = 市場規模 × 競争率 × 差別化可能性 × AI量産性
```

ここでの `競争率` は、**競争が少ないほど高い** 1-10点スコアです。

4つのスコアは 1-10 点で置き、`(市場規模 × 競争率 × 差別化可能性 × AI量産性) / 100` で 0-100 点に正規化しています。

## まず結論

- **月100万円相当の期待値**で見ると、Japan系が最上位です。
- **初売上の速さ**で見ると、Virtual Assistant / Coach / Consultant が強いです。
- ただしこのランキングの並びは、**月100万円へ投資する順番**を優先しています。

## 勝率ランキング

| 順位 | 市場 | 競合数 / 公開指標 | 上位商品のレビュー数 | 上位商品の推定販売数 | 市場規模 | 新規参入難易度 | 勝率A | 勝率B | 勝率C | 勝率D | 期待値 | 理由 |
|---:|---|---|---|---|---|---|---:|---:|---:|---:|---:|---|
| 1 | Japan Business Toolkit | 公開の直接競合は少なめ。推定5-20の直接オファー | 公開レビューはほぼ取得不可 | 公開販売数は不明 | 6/10 | 6/10 | 34% | 20% | 16% | 8% | 34.6 | Japan市場をわかりやすく「実務キット」に落とせる。日本人の強み、AI量産、B2B化の相性が良い。 |
| 2 | Japan Market Entry | 推定10-40の直接オファー。コンサル/ガイド/キット型が中心 | 公開レビューはほぼ取得不可 | 公開販売数は不明 | 5/10 | 7/10 | 32% | 18% | 14% | 6% | 25.6 | 海外企業の日本参入は高単価化しやすい。翻訳ではなく「信頼とローカライズ」が売れる。 |
| 3 | Japan Research Services | かなり少ない。推定3-10の直接オファー | 公開レビューはほぼ取得不可 | 公開販売数は不明 | 4/10 | 8/10 | 28% | 15% | 12% | 9% | 23.0 | 研究そのものを商品化できる。小市場だが、単価を上げやすく、日本人優位が強い。 |
| 4 | Japan Expansion OS | 推定10-30の直接オファー。運用・拡張系の提案が中心 | 公開レビューはほぼ取得不可 | 公開販売数は不明 | 5/10 | 7/10 | 30% | 17% | 15% | 7% | 21.0 | 参入後の運用まで含められるので継続課金やアップセルに向く。 |
| 5 | Consultant | Etsyで3,000+ items級の関連市場。テンプレ、スライド、契約書が多い | 6.9k、3.4k、1.8k、1.1k、924、667級の公開レビューが見える | かなり大きいが分散している | 7/10 | 6/10 | 45% | 18% | 10% | 5% | 19.6 | 高単価の提案書、スライド、契約、SOWに広げやすい。サービス系の課題が明確。 |
| 6 | Virtual Assistant | Etsyで101-122+ items級。関連市場は広い | 1.6k、1.5k、1.4k、1.2k、95級の公開レビュー | 数万件規模が推定 | 6/10 | 6/10 | 64% | 25% | 10% | 3% | 19.4 | 初売上は最速候補。タスク、請求、オンボーディングが明確でAI量産しやすい。 |
| 7 | Coach | Etsyで135-667+ items級。関連市場が広い | 1.3k、755、335、121、67級の公開レビュー | 数万件規模が推定 | 7/10 | 5/10 | 60% | 22% | 9% | 3% | 14.0 | セッション、宿題、請求、継続契約に落とせると売れやすい。抽象化すると弱い。 |
| 8 | Personal Trainer | Etsyで215+ items級。周辺市場は非常に大きい | 10.7k、3.2k、1.4k、260、240級の公開レビュー | 数十万件規模が推定 | 8/10 | 4/10 | 62% | 20% | 7% | 2% | 10.2 | 市場は大きいが競争が激しい。差別化が弱いと埋もれやすい。 |
| 9 | Tutor | Etsyで570+ items級 | 1.3k、965、608、609級の公開レビュー | 数万件規模が推定 | 6/10 | 5/10 | 56% | 18% | 5% | 1% | 9.6 | 需要はあるが単価が上がりにくい。教材・請求・保護者対応まで広げると改善する。 |
| 10 | Real Estate | Etsyで288+ items級だが、周辺市場は非常に広い | 10.3k、10.7k、5.2k、3.2k級の公開レビュー | 数十万件規模が推定 | 8/10 | 3/10 | 48% | 17% | 6% | 2% | 6.7 | 市場は大きいが、既存CRMやプロ向けツールと比較されやすく競争が強い。 |

## 補足解説

### 1. 競合数の見方

- Etsy系は市場ページの `items` 数をそのまま参考にした。
- Japan系は公開マーケットプレイスではなく、コンサル、ガイド、キット、研究サービスの公開オファー数を推定した。

### 2. 上位商品のレビュー数と販売数

- Etsy系はレビュー数が可視なので、上位商品のレビュー数を市場の強さの proxy にした。
- 推定販売数は、レビュー率をざっくり織り込んだ概算で、**レビュー数の25-50倍程度**を目安にした。
- Japan系は公開レビューが少ないため、販売数は直接推定しにくい。ここでは価格帯と公開オファー数を優先している。

### 3. 月100ドル、月1000ドル、月100万円の見方

- `A` は初動。Etsy系やVA系が強い。
- `B` は低単価でも数件で到達しやすい市場が有利。
- `C` は単価が上がるほど有利。
- `D` は高単価B2BやJapan系が有利。

## 市場別メモ

### Japan Business Toolkit

- 強み: 日本人の実務知識をキット化しやすい
- 弱み: 範囲を広げすぎるとぼやける
- AI: 高い
- 日本人優位: 非常に高い
- 6か月初売上: 中

### Japan Market Entry

- 強み: 海外企業の失敗コストが高く、単価を上げやすい
- 弱み: 信頼構築が必要
- AI: 高い
- 日本人優位: 非常に高い
- 6か月初売上: 中

### Japan Research Services

- 強み: 研究そのものを売れる
- 弱み: スコープ設計が難しい
- AI: 高い
- 日本人優位: 非常に高い
- 6か月初売上: 中〜低

### Japan Expansion OS

- 強み: 参入後の運用まで含めて売れる
- 弱み: 商品名が抽象化しやすい
- AI: 高い
- 日本人優位: 高い
- 6か月初売上: 中

### Consultant

- 強み: 提案書、スライド、契約書、SOW など高単価化しやすい
- 弱み: 競合が多い
- AI: 高い
- 日本人優位: 中
- 6か月初売上: 高い

### Virtual Assistant

- 強み: タスク、請求、オンボーディングの痛みが明確
- 弱み: 競合が多い
- AI: 非常に高い
- 日本人優位: 中
- 6か月初売上: 非常に高い

### Coach

- 強み: セッション、継続契約、宿題管理に落としやすい
- 弱み: 抽象化すると弱い
- AI: 高い
- 日本人優位: 中
- 6か月初売上: 高い

### Personal Trainer

- 強み: 需要が明確で、セッション管理に直結する
- 弱み: 競争が激しい
- AI: 高い
- 日本人優位: 中
- 6か月初売上: 中〜高

### Tutor

- 強み: 学習記録、請求、保護者連絡などの実務がある
- 弱み: 単価が上がりにくい
- AI: 高い
- 日本人優位: 中
- 6か月初売上: 中

### Real Estate

- 強み: 取引単価が大きい
- 弱み: 既存CRMや業界ツールとの比較が厳しい
- AI: 中
- 日本人優位: 低〜中
- 6か月初売上: 中

## 根拠リンク

### Etsy

- https://www.etsy.com/market/personal_trainer_client_tracker
- https://www.etsy.com/market/virtual_assistant_task_tracker
- https://www.etsy.com/market/consultant_template
- https://www.etsy.com/market/realtor_toolkit
- https://www.etsy.com/market/tutor_tracker
- https://www.etsy.com/market/coaching_session_tracker

### Japan / high-ticket platform signals

- https://speakjapan.gumroad.com/
- https://katiefrank.gumroad.com/l/japan-101-by-katie-frank
- https://payhip.com/b/63NaD
- https://payhip.com/b/oaAx6
- https://payhip.com/b/almk9
- https://highticketempire.teachable.com/p/high-ticket-blueprint
- https://help.shopify.com/en/manual/products/digital-service-product/digital-downloads

## Final ranking

1. Japan Business Toolkit
2. Japan Market Entry
3. Japan Research Services
4. Japan Expansion OS
5. Consultant
6. Virtual Assistant
7. Coach
8. Personal Trainer
9. Tutor
10. Real Estate

## Interpretation

- If the goal is fastest first sale: Virtual Assistant, Coach, Consultant
- If the goal is strongest long-term upside: Japan Business Toolkit and Japan Market Entry
- If the goal is strongest Japanese advantage: Japan Research Services and Japan Market Entry
