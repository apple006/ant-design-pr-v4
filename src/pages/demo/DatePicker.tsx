import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { DatePicker } from 'antd';
import moment from 'moment';

const { WeekPicker, MonthPicker, RangePicker } = DatePicker;

function disabledDate(current: any) {
  return current && current < moment().endOf('day');
}

function disabledTime(current: any, type: string) {
  console.log(current, type);
  if (type === 'start') {
    return {
      disabledHours: () => [1, 2],
      disabledMinutes: () => [1, 2, 3, 4, 5],
      disabledSeconds: () => [10, 20, 30, 40, 50],
    };
  }
  return {
    disabledHours: () => [10, 20],
    disabledMinutes: () => [10, 20, 30, 40, 50],
    disabledSeconds: () => [10, 20, 30, 40, 50],
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  render() {
    return (
      <GridContent>
        <DatePicker
          defaultValue={moment('2019-11-03 22:33:22')}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
        />
        <WeekPicker />
        <MonthPicker />
        <RangePicker
          defaultValue={[moment('2019-11-03 22:33:22'), moment('2019-08-03 22:33:22')]}
          showTime
        />
        <hr />
        <RangePicker disabledDate={disabledDate} disabledTime={disabledTime} showTime />
      </GridContent>
    );
  }
}

export default Index;
