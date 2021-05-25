# Pomodoro Timer

Read this in other languages: [Japanese🇯🇵](README.md)

You can try this app: [https://stoic-shaw-001338.netlify.app/](https://stoic-shaw-001338.netlify.app/)

## ⭐️ 기능

### Pomodoro Technique을 위한 타이머 ⏱

- Pomodoro Technique란? 25분간의 집중과 5분간의 휴식을 반복하는 집중법
- 집중 모드와 휴식 모드가 자동으로 전환되는 타이머
  알림음🎶 및 UI 컬러(아래의 이미지 참조)로 집중/휴식 전환을 알림
- 모드의 전환은 알림음 🎶 과 UI 색깔(아래의 이미지)로 알림

  ![inApp](public/images/pomodoro.png)
     <center>왼쪽: 빨강(집중 모드) 오른쪽: 초록(휴식 모드)</center>
  <br/>

- 집중 시간과 휴식 시간을 조정해 나에게 맞는 사이클 설정 가능

### Todo list 🗒

- 오늘 할 일들을 기록
- 마친 일은 체크 또는 삭제
- Drag&Drop으로 리스트 순서 변환가능

## 🦄 사용 기술 및 툴

| <img width="40" height="40" src="public/images/html.svg"> | <img width="40" height="40" src="public/images/css.svg"> | <img width="40" height="40" src="public/images/javascript.svg"> | <img width="40" height="40" src="public/images/postcss.svg"> | <img width="40" height="40" src="public/images/react.svg"> |
| :-------------------------------------------------------: | :------------------------------------------------------: | :-------------------------------------------------------------: | :----------------------------------------------------------: | :--------------------------------------------------------: |
|                           HTML                            |                           CSS                            |                           JavaScript                            |                           POST CSS                           |                           React                            |

<br/>

## 📚 사용 라이브러리 및 리소스

- [@material-ui/core](https://material-ui.com/) 알림음의 음량 조절 컨트롤러와 체크 박스

- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) Todo list의 drag&drop

- [Google Fonts](https://fonts.google.com/icons) 각종 아이콘 리소스

- [Material Design](https://material.io/design/sound/sound-resources.html) 알림음 리소스

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 📖 프로젝트에서 새로 배운 것

[JavaScript Scheduling](https://www.notion.so/setTimeout-setInterval-ca77892ac1ab47e7bc85a893a2214b40) (수정중)

[localStorage & sessionStorage](https://www.notion.so/localStorage-SessionStorage-84651886d39c47a890e4d4b9f6c65ff3)

## 🐛 개선

- ~~새로 고침을 눌러도 Todo list 항목이 유지되도록~~

  → sessionStorage을 이용해 세이브&로드하도록 개선(May 24, 2021)

  - sessionStorage에 저장/불러오는 기능 분리하기

- ~~Todo list 체크박스 추가~~

  → 개선(May 24, 2021)

  - 새로 고침을 누르면 체크 여부가 사라지는 문제 발생

- 타이머가 작동하는 브라우저 탭에서 나오면 카운트 다운이 느려지는 현상

- safari에서 알림음 자동 재생 관련 에러 발생
- 집중/휴식 모드 전환 버튼 추가
- 등록한 todo 내용 수정
