const IS_DEV = process.env.NODE_ENV === 'development' ? true : false

const config  = {
  url: IS_DEV ? `https://www.easy-mock.com/mock/5d121c84a9c50f15f3066896` : `https://www.xingxiwang.com`,
  subfix: `/api`
}
export default config
