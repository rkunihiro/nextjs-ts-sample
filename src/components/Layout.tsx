import Link from 'next/link';
import Head from 'next/head';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode,
  title: string,
}

export default class Layout extends React.Component<Props> {

  render(): ReactNode {
    const { children = {}, title = 'This is the default title' } = this.props;
    return (

      <div>
        <Head>
          <title>{ title }</title>
        </Head>

        <header>
          <nav>
            <Link href='/'><a>Home</a></Link> |
            <Link href='/about'><a>About</a></Link> |
            <Link href='/contact'><a>Contact</a></Link>
          </nav>
        </header>

        <main>
          { children }
        </main>

        <footer>
          {'I`m here to stay'}
        </footer>
      </div>
    );
  }
}
