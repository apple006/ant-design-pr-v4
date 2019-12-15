import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { AutoComplete, Input, Icon } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '../../assets/iconfont.js',
});

const dataSource2 = [
  {
    value: 1,
    title: '云小茶',
  },
  {
    value: 2,
    title: '茶茶',
  },
];

const dataSource3 = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'AntDesign',
        count: 10000,
      },
      {
        title: 'AntDesign UI',
        count: 10600,
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'AntDesign UI',
        count: 60100,
      },
      {
        title: 'AntDesign',
        count: 30010,
      },
    ],
  },
  {
    title: 'Articles',
    children: [
      {
        title: 'AntDesign design language',
        count: 100000,
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  state = {
    dataSource: [],
    dataSource1: [],
  };

  search = () => {
    const searchValue = this.input.state.value;
    const root = this;
    axios.get(`https://randomuser.me/api/?seed=${searchValue}`).then(response => {
      const { results = [] } = response.data;
      root.setState({
        // eslint-disable-next-line max-len
        dataSource: results.map(
          (item: { id: { value: any }; name: { firs: string; last: string } }) => {
            console.log(item);
            return {
              value: item.id.value,
              text: `${item.name.firs}-${item.name.last}`,
            };
          },
        ),
      });
    });
  };

  search1 = () => {
    this.setState({
      dataSource1: dataSource2.map(item => (
        <AutoComplete.Option value={`${item.value}`} key={item.value}>
          {item.title}
        </AutoComplete.Option>
      )),
    });
  };

  renderDataSource3 = (dataSource3: any[]) =>
    dataSource3.map(item => (
      <AutoComplete.OptGroup label={item.title} key={`${Math.random()}`}>
        {item.children.map(child => (
          <AutoComplete.Option value={`${item.title}-${child.title}`} key={`${Math.random()}`}>
            {child.title}
          </AutoComplete.Option>
        ))}
      </AutoComplete.OptGroup>
    ));
  private input: any;

  render() {
    const { dataSource, dataSource1 } = this.state;
    return (
      <GridContent>
        <h1>
          dsfdas
          <MyIcon type="icon-ziyuan3" />
        </h1>
        <AutoComplete dataSource={dataSource}>
          <Input
            ref={input => (this.input = input)}
            suffix={<Icon onClick={this.search} type="search" className="certain-category-icon" />}
          />
        </AutoComplete>
        <hr />
        <AutoComplete dataSource={dataSource1} onChange={this.search1} />
        <hr />
        <AutoComplete
          backfill
          dataSource={this.renderDataSource3(dataSource3)}
          onChange={this.search1}
        />
      </GridContent>
    );
  }
}

export default Index;
