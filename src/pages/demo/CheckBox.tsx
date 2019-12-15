import React, { Component } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Checkbox } from 'antd';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Index extends Component {
  state = {
    values: [],
    indeterminate: false,
    checkAll: false,
  };

  checkAll = e => {
    if (e.currentTarget.checked) {
      this.setState({
        values: ['1', '2', '3'],
        indeterminate: false,
        checkAll: true,
      });
    } else {
      this.setState({
        values: [],
        checkAll: false,
      });
    }
  };

  check = e => {
    const { values } = this.state;
    const targetValue = e.currentTarget.value;
    const newValues = values.filter(item => item !== targetValue);
    if (e.currentTarget.checked) {
      newValues.push(targetValue);
    }
    this.setState({
      values: newValues,
      indeterminate: newValues.length !== 3,
      checkAll: newValues.length === 3,
    });
  };

  render() {
    const { values, indeterminate, checkAll } = this.state;
    return (
      <GridContent>
        <Checkbox.Group defaultValue={['1', '2', '3']}>
          <Checkbox value="1">采耳</Checkbox>
          <Checkbox value="2">银朱洗眼</Checkbox>
          <Checkbox value="3">喝茶</Checkbox>
        </Checkbox.Group>
        <hr />
        <h3>
          <Checkbox checked={checkAll} indeterminate={indeterminate} onClick={this.checkAll}>
            全选
          </Checkbox>
        </h3>
        <Checkbox.Group value={values}>
          <Checkbox value="1" onClick={this.check}>
            采耳
          </Checkbox>
          <Checkbox value="2" onClick={this.check}>
            银朱洗眼
          </Checkbox>
          <Checkbox value="3" onClick={this.check}>
            喝茶
          </Checkbox>
        </Checkbox.Group>
      </GridContent>
    );
  }
}

export default Index;
