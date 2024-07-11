import withNuxt from "./.nuxt/eslint.config.mjs";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt([
  {
    files: ["**/*.{js,jsx,ts,tsx,vue}"],
    plugins: {
      prettier: prettier,
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn", // 프로덕션 환경에서 콘솔 사용 금지
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn", // 프로덕션 환경에서 디버그 관련 문제 발생 시 에러
      "no-unused-vars": "warn", // 사용되지 않는 변수 경고
      // Prettier 코드 스타일 설정
      "prettier/prettier": ["error"],
      /*
        arrowSpacing: ["error", { before: true, after: true }], // 화살표 함수의 스페이싱 설정
        singleQuote: true, // 작은따옴표 사용
        semi: false, // 세미콜론 사용하지 않음
        useTabs: false, // 탭 대신 스페이스 사용
        tabWidth: 2, // 탭의 너비
        trailingComma: "none", // 후행 콤마 사용하지 않음
        printWidth: 80, // 한 줄의 최대 길이
        bracketSpacing: true, // 객체 리터럴의 괄호 사이에 공백 사용
        arrowParens: "always", // 화살표 함수의 매개변수 괄호 사용
        endOfLine: "auto", // 플랫폼에 맞게 개행문자 설정
    */
    },
  },
  eslintConfigPrettier,
]);
