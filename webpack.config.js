const path = require('path');

module.exports = {
    // 메인 스크립트 파일
    // key: value 형태로 정의할 수 있고, 이 값은 output 파일에서 `[name]` 값으로 참조할 수 있다.
    entry: {
        'main': './src/main.js',
        'pageA': './src/pageA.js',
        'pageB': './src/pageB.js'
    },
    // 빌드 후 생성되는 파일
    output: {
        path: './build',
        filename: '[name].bundle.js'
    },
    // 빌드 모듈
    // - 파일 패턴 별로 다양한 로더를 적용할 수 있다.
    // - 각 로더는 npm 라이브러리에서 `xxx-loader` 패턴을 갖는다.
    // - 로드 이름은 'babel-loader'와 같이 쓸 수 있으며, 'babel'처럼 '-loader' 접미사는 생략 가능하다.
    // - 'style!css!less'와 같이 로더를 연속해 정의할 수 있으며(체이닝), 오른쪽에서 왼쪽으로 전달된다고 보면 된다.
    module: {
        loaders: [
            // ES6 변환 로더
            // ES6/jsx 코드를 트랜스파일링한다.
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, './src'),
                loader: 'babel',
                // ES6 파싱을 위한 쿼리 프리셋
                query: {
                    presets: ['es2015']
                }
            },
            // LESS 변환 로더
            // less 를 css로, css를 <style> 태그로 변환해 로드한다.
            {
                test: /\.less$/,
                include: path.join(__dirname, './src'),
                loader: 'style!css!less'
            }
        ]
    }
};
