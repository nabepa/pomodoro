# Pomodoro Timer

Read this in other languages: [Korean🇰🇷](README.ko.md)

You can try this app: [https://stoic-shaw-001338.netlify.app/](https://stoic-shaw-001338.netlify.app/)

## ⭐️ 機能

### Pomodoro Technique のためのタイマー ⏱

- Pomodoro Technique とは? 25 分間の集中と 5 分間の休みを繰り返す集中法
- 集中モードと休みモードが自動で切り替わるタイマー
- モードの切り替わりを効果音 🎶 と UI のカーラの変化で(下のイメージ)告知

  ![inApp](public/images/pomodoro.png)
     <center>左: 集中モード(赤)　右: 休みモード(緑)</center>
  <br/>

- 集中と休みの時間を調整して，自分に合うサイクルも設定可能

### Todo list 🗒

- 今日の課題を記録
- 終わった課題はチェックまたは削除
- Drag&Drop でリストの順序を変更可能

## 🦄 使用言語とツール

| <img width="40" height="40" src="public/images/html.svg"> | <img width="40" height="40" src="public/images/css.svg"> | <img width="40" height="40" src="public/images/javascript.svg"> | <img width="40" height="40" src="public/images/postcss.svg"> | <img width="40" height="40" src="public/images/react.svg"> |
| :-------------------------------------------------------: | :------------------------------------------------------: | :-------------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------------------------------------: |
|                           HTML                            |                           CSS                            |                           JavaScript                            |                           POST CSS                           |                           React                            |

<br/>

## 📚 使用ライブラリとリソース

- [@material-ui/core](https://material-ui.com/) 告知音の音量調整のコントローラーと Todo list のチェックボックス

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) Todo list の drag&drop

- [Google Fonts](https://fonts.google.com/icons) 各種アイコンのリソース

- [Material Design](https://material.io/design/sound/sound-resources.html) 告知音のリソース

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📖 Project で新しく勉強した事

[JavaScript Scheduling](https://www.notion.so/setTimeout-setInterval-ca77892ac1ab47e7bc85a893a2214b40) \*韓国語の文書

[localStorage & sessionStorage](https://www.notion.so/localStorage-SessionStorage-84651886d39c47a890e4d4b9f6c65ff3) \*韓国語の文書

## 🐛 改善

- ~~再読み込みのボタンを押しても Todo list 項目が保存するように~~

  → sessionStorage を利用してセーブ&ロードするように改善(May 24, 2021)

- ~~Todo list にチェックボックを追加~~

  → 追加(May 24, 2021)

  - 再読み込みのボタンを押すとチェック記録が無くなる問題発生

- タイマーが動いているブラウザーのタブから離れるとカウントダウンが遅くなる
- safari で告知音の自動再生関連のエラー発生
- 集中モードと休みモードとを切り替えるボタン追加
- 登録済みの ToDo の内容修正を可能に
