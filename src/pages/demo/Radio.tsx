import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Radio } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  render() {
    return (
      <GridContent>
        <Radio.Group defaultValue="1">
          <Radio value="1">男</Radio>
          <Radio value="0">女</Radio>
        </Radio.Group>
        <Radio.Group defaultValue="1">
          <Radio.Button value="1">男</Radio.Button>
          <Radio.Button value="0">女</Radio.Button>
        </Radio.Group>
      </GridContent>
    );
  }
}

export default Index;
