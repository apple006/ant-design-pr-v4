import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { TimePicker } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  render() {
    return (
      <GridContent>
        <TimePicker use12Hours />
        <TimePicker use12Hours hourStep={2} minuteStep={5} secondStep={8} />
      </GridContent>
    );
  }
}

export default Index;
