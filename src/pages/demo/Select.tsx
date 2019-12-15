import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import axios from 'axios';
import debounce from 'lodash/debounce';
import { Select } from 'antd';

const options = ['云小茶', '洪顺二道', '采耳', '银珠洗眼', '肩颈按摩', '奶茶'];

// eslint-disable-next-line @typescript-eslint/no-unused-vars,react/prefer-stateless-function
class Index extends Component {
  constructor(props: Readonly<{}>) {
    super(props);
    this.onSearch = debounce(this.onSearch, 800);
  }

  state = {
    selectedKeys: [],
    results: [],
    loading: false,
  };

  onChange = (selectedKeys: []) => {
    this.setState({
      selectedKeys,
    });
  };

  onSearch = (value: string) => {
    const root = this;
    root.setState({
      loading: true,
    });
    axios.get('https://randomuser.me/api/?results=3').then(response => {
      root.setState({ results: response.data.results, loading: false });
    });
  };

  render() {
    const { selectedKeys, results, loading } = this.state;
    console.log('result', results);
    // @ts-ignore
    const newOptions = options.filter((item: string) => !selectedKeys.includes(item));
    // @ts-ignore
    return (
      <GridContent>
        <Select
          style={{ width: '100%' }}
          mode="multiple"
          showSearch
          filterOption={(inputValue: string, option: any) =>
            option.props.children.indexOf(inputValue) > -1
          }
          defaultValue={['1', '2']}
        >
          <Select.Option value="1">采耳</Select.Option>
          <Select.Option value="2">银针洗眼</Select.Option>
          <Select.Option value="3">肩颈按摩</Select.Option>
        </Select>
        <hr />
        <Select mode="tags" tokenSeparators={['，', '。']} style={{ width: '100%' }}>
          <Select.Option value="1">云小茶</Select.Option>
        </Select>
        <hr />
        <Select
          onChange={this.onChange}
          style={{ width: '100%' }}
          mode="multiple"
          showSearch
          filterOption={(inputValue: string, option: any) =>
            option.props.children.indexOf(inputValue) > -1
          }
        >
          {newOptions.map(item => (
            <Select.Option value={item}>{item}</Select.Option>
          ))}
        </Select>
        <hr />
        <Select loading={loading} showSearch onSearch={this.onSearch} style={{ width: '100%' }}>
          {results.map((item: { id: { value: string }; name: { first: string; last: string } }) => (
            <Select.Option
              value={item.id.value}
            >{`${item.name.first}-${item.name.last}`}</Select.Option>
          ))}
        </Select>
      </GridContent>
    );
  }
}

export default Index;
