import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Input, Icon } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  render() {
    return (
      <GridContent>
        <Input suffix={<Icon type="search" />} />
        <hr />
        <Input.Search
          enterButton={
            <img
              alt=""
              src="https://i0.hdslb.com/bfs/face/f389b41e07f402a76c7cfa5a72eee714894dc171.jpg@140w_140h_1c_100q.webp"
            />
          }
        />
        <hr />
        <Input.TextArea autoSize={{ minRows: 4, maxRows: 8 }} style={{ resize: 'none' }} />
        <hr />
        <Input.Password />
      </GridContent>
    );
  }
}

export default Index;
