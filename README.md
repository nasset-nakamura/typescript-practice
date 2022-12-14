# TypeScript Practice

## 利用手順

```bash
# パッケージをインストール
$ npm install

# TypeScript変更時の自動コンパイル
$ npm run watch

# Lint＋Format実行
$ npm run lint:fix

# Node実行
$ node xxxxx.js
```

## ファイル一覧

### TypeScript の型

| 概要                                  | 説明                             |
| ------------------------------------- | -------------------------------- |
| [index_01](/src/section2/index_01.ts) | number 型の利用                  |
| [index_02](/src/section2/index_02.ts) | number、string、boolean 型の利用 |
| [index_03](/src/section2/index_03.ts) | Object 型の利用                  |
| [index_04](/src/section2/index_04.ts) | Array 型の利用                   |
| [index_05](/src/section2/index_05.ts) | Tuple 型の利用                   |
| [index_06](/src/section2/index_06.ts) | Enum 型の利用                    |
| [index_07](/src/section2/index_07.ts) | Union 型の利用                   |
| [index_08](/src/section2/index_08.ts) | Alias の利用                     |
| [index_09](/src/section2/index_09.ts) | Function 型の利用                |

### クラス、インターフェース

| 概要                                  | 説明                                     |
| ------------------------------------- | ---------------------------------------- |
| [index_01](/src/section4/index_01.ts) | クラスの利用、private/public 修飾子      |
| [index_02](/src/section4/index_02.ts) | プロパティ初期化のショートカット構文     |
| [index_03](/src/section4/index_03.ts) | 継承                                     |
| [index_04](/src/section4/index_04.ts) | Getter・Setter、静的プロパティ・メソッド |
| [index_05](/src/section4/index_05.ts) | Abstract                                 |
| [index_06](/src/section4/index_06.ts) | Interface                                |
| [index_07](/src/section4/index_07.ts) | クラスで Interface 利用                  |
| [index_08](/src/section4/index_08.ts) | Interface の継承                         |

### 高度な型

| 概要                                  | 説明                     |
| ------------------------------------- | ------------------------ |
| [index_01](/src/section5/index_01.ts) | 交差型(type を利用)      |
| [index_02](/src/section5/index_02.ts) | 交差型(interface を利用) |
| [index_03](/src/section5/index_03.ts) | 型ガード                 |
| [index_04](/src/section5/index_04.ts) | 判別可能な Union 型      |
| [index_05](/src/section5/index_05.ts) | インデックス 型          |
| [index_06](/src/section5/index_06.ts) | 関数オーバーロード       |
| [index_07](/src/section5/index_07.ts) | オプショナルチェーン     |
| [index_08](/src/section5/index_08.ts) | NULL 合体演算子          |

### ジェネリクス

| 概要                                  | 説明                                          |
| ------------------------------------- | --------------------------------------------- |
| [index_01](/src/section6/index_01.ts) | ジェネリクスの基本                            |
| [index_02](/src/section6/index_02.ts) | Generic 関数 1                                |
| [index_03](/src/section6/index_03.ts) | Generic 関数 2                                |
| [index_04](/src/section6/index_04.ts) | keyof 制約                                    |
| [index_05](/src/section6/index_05.ts) | Generic クラス                                |
| [index_06](/src/section6/index_06.ts) | Generic 型のユーティリティ(Partial、Readonly) |

### デコレータ

| 概要                                  | 説明                                             |
| ------------------------------------- | ------------------------------------------------ |
| [index_01](/src/section7/index_01.ts) | Class デコレータ                                 |
| [index_02](/src/section7/index_02.ts) | デコレータファクトリ                             |
| [index_03](/src/section7/index_03.ts) | デコレータの実行順序                             |
| [index_04](/src/section7/index_04.ts) | Property・Accessor・Method・Parameter デコレータ |
