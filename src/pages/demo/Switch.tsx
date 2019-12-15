import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Switch } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  state = {
    loading: false,
    checked: false,
  };

  onClick = (e: boolean) => {
    this.setState({
      loading: true,
    });

    setTimeout(
      () =>
        this.setState({
          checked: e,
          loading: false,
        }),
      1000,
    );
  };

  render() {
    const { loading, checked } = this.state;
    return (
      <GridContent>
        <Switch
          checked={checked}
          checkedChildren="云小茶"
          unCheckedChildren="云小茶"
          loading={loading}
          onClick={this.onClick}
        />
      </GridContent>
    );
  }
}

export default Index;
