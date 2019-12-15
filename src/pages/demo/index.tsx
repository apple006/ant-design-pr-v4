import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Card, Tabs } from 'antd';
import Input from './Input';
import InputNumber from './InputNumber';
import Radio from './Radio';
import CheckBox from './CheckBox';
import Switch from './Switch';
import TimePicker from './TimePicker';
import DatePicker from './DatePicker';
import Select from './Select';
import AutoComplete from './AutoComplete';
import Cascader from './Cascader';
import Pagination from './Pagination';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  render() {
    return (
      <GridContent>
        <Card bordered={false}>
          <Tabs>
            <Tabs.TabPane tab="Pagination" key="Pagination">
              <Pagination />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Cascader" key="Cascader">
              <Cascader />
            </Tabs.TabPane>
            <Tabs.TabPane tab="AutoComplete" key="AutoComplete">
              <AutoComplete />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Select" key="Select">
              <Select />
            </Tabs.TabPane>
            <Tabs.TabPane tab="DatePicker" key="DatePicker">
              <DatePicker />
            </Tabs.TabPane>
            <Tabs.TabPane tab="TimePicker" key="TimePicker">
              <TimePicker />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Switch" key="Switch">
              <Switch />
            </Tabs.TabPane>
            <Tabs.TabPane tab="CheckBox" key="CheckBox">
              <CheckBox />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Radio" key="Radio">
              <Radio />
            </Tabs.TabPane>
            <Tabs.TabPane tab="InputNumber" key="InputNumber">
              <InputNumber />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Input" key="input">
              <Input />
            </Tabs.TabPane>
          </Tabs>
        </Card>
      </GridContent>
    );
  }
}

export default Index;
