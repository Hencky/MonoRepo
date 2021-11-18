### 运行方式

1. 安装依赖
yarn

2. 执行bootstrap，安装所有依赖项并链接交叉依赖
yarn bootstrap

3. 运行
cd docs
yarn
yarn start


### 其他
lerna ls    列出当前仓库中的所有公共软件包
yarn workspace deom1 build   执行demo1 包的 build命令
yarn workspace demo1 add react -S -W 给demo1包添加react