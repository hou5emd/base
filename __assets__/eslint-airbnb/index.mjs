import bp from './rules/best-practices.js';
import e from './rules/errors.js';
import n from './rules/node.js';
import s from './rules/style.js';
import v from './rules/variables.js';
import es6 from './rules/es6.js';
import imp from './rules/imports.js';
import strict from './rules/strict.js';
export default {
  ...bp.rules,
  ...e.rules,
  ...n.rules,
  ...s.rules,
  ...v.rules,
  ...es6.rules,
  ...imp.rules,
  ...strict.rules,
};
