# tsconfig.json で利用可能なオプション

## Root

| 設定            | 説明                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| exclude         | TypeScript コンパイルの対象外とするディレクトリ・ファイル                                                           |
| include         | TypeScript コンパイルの対象とするディレクトリ・ファイル<br>exclude が同時に指定されている場合、exclude が優先される |
| compilerOptions | コンパイル時の挙動の詳細設定                                                                                        |

## compilerOptions

| 設定          | 説明                                                                                                                   |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| target        | コンパイルする JavaScript のバージョン                                                                                 |
| lib           | TypeScript を利用する際にどの機能がデフォルト利用できるかを指定<br>[Doc](https://www.typescriptlang.org/tsconfig/#lib) |
| allowJs       | JavaScript ファイルもコンパイル対象とする                                                                              |
| checkJs       | JavaScript をチェック対象とする                                                                                        |
| jsx           | React を利用する場合の設定                                                                                             |
| declaration   | 作成したプログラムをパッケージとして公開する場合の設定。`.d.ts` というファイルに型宣言を記載する                       |
| sourceMap     | DevTool デバッグに利用する設定。エラーやデバッグ時に該当する TypeScript を表示することが可能となる                     |
| rootDir       | TypeScript ソースファイルのディレクトリ                                                                                |
| outDir        | コンパイルした JavaScript ファイルの出力先                                                                             |
| noEmitOnError | コンパイルエラーがある場合、JavaScript ファイルを出力しない                                                            |
| strict        | 厳格な型チェックを行う                                                                                                 |
