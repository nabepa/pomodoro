# Pomodoro Timer

Read this in other languages: [한국어 🇰🇷](README.ko.md)

You can try this app, click below badge!
</br>

[![Netlify Status](https://api.netlify.com/api/v1/badges/aea01573-e082-44b4-8617-12e71bf71494/deploy-status)](https://stoic-shaw-001338.netlify.app/)

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

<p>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS3&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=PostCSS&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
 </p>

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
