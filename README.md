# FEConf Lynx Counter Demo

ReactLynx와 SEED Design으로 만든 FEConf 시연용 카운터입니다.
`Hello, FEConf` 아래의 버튼을 누르면 숫자가 1씩 증가하거나 감소합니다.

## 실행

Node.js 24.15 이상(24.x)과 Yarn 4.18.1을 사용합니다. jsdom의 요구사항에 맞춘 최소 버전이며, `.node-version`에는 메이저 버전 `24`만 지정합니다.

fnm을 사용하는 경우 다음 명령으로 버전을 설치하고 적용합니다.

```bash
fnm install
fnm use
```

셸에 `fnm env --use-on-cd`가 설정되어 있으면 프로젝트 폴더에 진입할 때 자동으로 적용됩니다.

```bash
yarn install
yarn dev
```

터미널의 QR 코드를 Lynx 앱에서 스캔해 실행합니다. Lynx Engine 3.6 이상이 필요합니다.

## 검증

```bash
yarn build
yarn test
yarn check
```

화면과 카운터 로직은 `src/App.tsx`, 레이아웃은 `src/App.css`에서 확인할 수 있습니다.
