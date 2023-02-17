# 技术栈

nestjs + prisma + graphql + restful api + jwt + logger + husky

## 依赖

npm i @commitlint/cli @commitlint/config-angular husky lint-staged

npm i winston nest-winston winston-daily-rotate-file

## 配置

"postinstall": "husky install",
"commitlint": "commitlint --config commitlint.config.js -e -V",
"changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 1",
