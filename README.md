### 技术栈：nestjs + prisma + graphql + restful-api + jwt + logger + husky

#### npm i @commitlint/cli @commitlint/config-angular husky lint-staged

"postinstall": "husky install",
"commitlint": "commitlint --config commitlint.config.js -e -V",
"changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 1",
