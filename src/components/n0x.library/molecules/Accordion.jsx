import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import data from './data';
import './styles.css';

const Content = posed.div({
  closed: { height: 0 },
  open: { height: 'auto' }
});

class Example extends React.Component {
  state = { open: false };

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <h1>Accordian demo</h1>
        {data.map(({ title, content }, i) => (
          <Fragment>
            <h2
              className="title"
              onClick={() => this.setState({ open: open === i ? false : i })}
            >
              {open === i ? '🤯 ' : '🙂 '}
              {title}
            </h2>
            <Content className="content" pose={open === i ? 'open' : 'closed'}>
              <div className="content-wrapper">{content}</div>
            </Content>
          </Fragment>
        ))}
      </Fragment>
    );
  }
}
