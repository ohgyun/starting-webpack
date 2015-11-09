// 빌드한 less 파일은 <style> 태그로 추가된다.
import './style.less';
// ES6 스타일의 import 구문으로 import 할 수 있으며, 빌드된 파일에 함께 병합된다.
import Box from './Box.js';

new Box('#container', 'main');