import Head from 'next/head'
import PropTypes from 'prop-types'

const cx = {
  main: 'sans-serif'
}

const Layout = ({ title, description, children, className }) => {
  return (
    <main className={`${cx.main} ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={title} />
      </Head>
      <style global jsx>
        {`
          :root {
            --slideSpeed: .5s;
          }
          body {
            color: #fff;
            background: #000;
          }
          a {
            color: #fff;
          }
          .bg {
            background: rgba(0, 0, 0, .8);
            backdrop-filter: blur(2rem);
          }
          .ts1 {
            text-shadow: 0 0 0 rgba(255, 255, 255, 0.6);
          }
          .gradient {
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          }
          @media (prefers-color-scheme: light) {
            body {
              color: #111;
              background: #fff;
            }
            a {
              color: #111;
            }
            .bg {
              background: rgba(255, 255, 255, .9);
              backdrop-filter: blur(2rem);
            }
            .ts1 {
              text-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
            }
          }
        `}
      </style>
      {children}
    </main>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

Layout.defaultProps = {
  title: 'melkat.gay',
  description: 'melkat.gay',
  className: ''
}

export default Layout
