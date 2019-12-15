import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Cascader, Icon } from 'antd';
import axios from 'axios';

const options = [
  {
    value: '1',
    label: 'Zhejiang',
    children: [
      {
        value: '11',
        label: 'Hangzhou',
        children: [
          {
            value: '111',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  state = {
    selectedValue: '',
    areas: [],
  };

  componentDidMount(): void {
    const root = this;
    axios
      .get(
        'https://raw.githubusercontent.com/modood/Administrative-divisions-of-China/master/dist/pcas-code.json',
      )
      .then(response => {
        console.log(response.data);
        root.setState({
          areas: response.data,
        });
      });
  }

  onChange = (e: any, selectedOptions: any[]) => {
    const selectedValue = selectedOptions.map((item: { label: string }) => item.label).join(',');
    this.setState({
      selectedValue,
    });
  };

  render() {
    const { selectedValue, areas = [] } = this.state;
    // @ts-ignore
    return (
      <GridContent>
        <Cascader style={{ width: '100%' }} defaultValue={['1', '11', '111']} options={options} />
        <hr />
        <p>:{selectedValue}</p>
        <Cascader
          style={{ width: '100%' }}
          options={options}
          onChange={this.onChange}
          suffixIcon={<Icon type="setting" />}
        />
        <hr />
        <Cascader
          showSearch
          style={{ width: '100%' }}
          options={areas}
          fieldNames={{ value: 'code', label: 'name' }}
          onChange={this.onChange}
          suffixIcon={<Icon type="setting" />}
        />
      </GridContent>
    );
  }
}

export default Index;
