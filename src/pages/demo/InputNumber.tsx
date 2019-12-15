import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { InputNumber } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  render() {
    return (
      <GridContent>
        <InputNumber min={100} max={101} precision={2} step={1} style={{ width: '100%' }} />
      </GridContent>
    );
  }
}

export default Index;
