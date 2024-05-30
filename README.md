# Notepad-UsingNotion

 
## 1. 기능편

### 누가 사용할 것인가? (Target)

- 일단은.. 나! 내가 사용하기 좋도록 UI를 구성할 예정. 
- 나처럼 윈도우를 사용하며 PC내의 메모장 위젯을 부르는것보다 웹으로 된 메모장을 사용할 사람
- 
### 필수 기능
- 리스트
- 저장
- 입력
- 입력시 간단한 텍스트 꾸밈 기능 (굵게, 기울기, 밑줄, 글씨 크기, 색상(고민))
- 가장 최근 저장된 메모 불러오기
- 새 메모

## 2. 기술편 (예상)
- Typescript / React / vercel / vite ...
- MUI framework
- notion api를 사용하여 notion을 DB로 사용할 예정 (일단 나를위한 개인 메모장 일명 링나의 메모장 나모장) 
- https://youtu.be/XCAwSBdeejU?si=vCUOTzb8ItH2Q83D 참고해서 도전해봅니다..

## 3. UI편
- 무조건 접근성 위주로 UI 짤 예정
- 아이폰 메모 위젯을 참고해서 어떻게 직관적이고 편의성 좋게 할 수 있을지 고민해볼 예정... (현재 아이폰 유저라서 참고할것이 아이폰뿐이다 😂)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
