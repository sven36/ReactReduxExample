import React ,{Component} from 'react';

class Default extends Component{

  render() {
    let { children, title } = this.props;
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta httpEquiv='Cache-Control' content='no-siteapp' />
          <meta name='renderer' content='webkit' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link href="../assets/src/css/home/home.css" rel="stylesheet" />
          <title>{title}</title>
        </head>
        <body>
          {children}
          <script src="/assets/build/1.0.0/home.js"></script>
        </body>
      </html>
    );
  }
};
module.exports = Default;
