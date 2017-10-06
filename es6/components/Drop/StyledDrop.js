var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { backgroundStyle, baseStyle } from '../utils';

var StyledDrop = styled.div.withConfig({
  displayName: 'StyledDrop'
})(['', ' position:fixed;z-index:20;border-radius:', ';overflow:auto;outline:none;', ''], baseStyle, function (props) {
  return props.theme.global.drop.border.radius;
}, function (props) {
  return backgroundStyle(props.background || props.theme.global.drop.backgroundColor, props.theme);
});

export default StyledDrop.extend(_templateObject, function (props) {
  return props.theme.drop && props.theme.drop.extend;
});