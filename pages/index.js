import React from 'react'
import Layout from '../components/layout'
import ListLink from '../components/list-link'

const colors = {
  gween: '#65A300',
  mel: '#0096DB',
  pweach: '#FF5757',
  pwink: '#FF52A3'
}

const cx = {
  main: 'vh-100 dt w-100',
  container: 'dtc v-mid tc',
  article: 'measure-narrow center sans-serif f3 fw2 ph2',
  h1: 'lh-title fw2 f2',
  h1a: 'no-underline',
  ul: 'list pl0 tl',
  liLast: 'lh-title mb2 mt4',
  img: 'br-100 h5 w5 center dib ma3'
}

const Index = () => (
  <Layout className={cx.main}>
    <div className={cx.container}>
      <article className={cx.article}>
      </article>
    </div>
    <style global jsx>
      {`
          ul > li::before {
            content: '*';
            color: #8F8F8F;
            width: 1rem;
            display: inline-block;
          }
      `}
    </style>
  </Layout>
)

export default Index
