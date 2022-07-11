import React from 'react';
import List_Body from './List_Body';
import List_Header from './List_Header';

export default function List() {
    let itemArr = [{name:"부동산1", data:"부동산 정보1"},
            {name:"부동산2", data:"부동산 정보2"},
            {name:"부동산3", data:"부동산 정보3"},
            {name:"부동산4", data:"부동산 정보4"}]
  return (<dev>
        <List_Header />
        <List_Body item={itemArr[0]} />
        <List_Body item={itemArr[1]} />
        <List_Body item={itemArr[2]} />
        <List_Body item={itemArr[3]} />
    </dev>
  )
}
