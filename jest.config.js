export default {
  testEnvironment: "node",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js$",
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
