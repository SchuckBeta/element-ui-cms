export default path => () => import(`@/components${path}.vue`);
