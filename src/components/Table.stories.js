import React from 'react';
import { storiesOf } from '@storybook/react';
import Table from './Table.jsx';

var props = {
  headers:[
    {firstName:'FirstName'}, 
    {lastName:'LastName'},
    {email:'Email'},
    {gender: 'Gender'}],
  data:[{
    firstName:'Alok',
    lastName:'Shrestha',
    email:'as@hgweb.com',
    gender:'Male',
  },{
    firstName:'Prakash',
    lastName:'Shrestha',
    email:'ps@hgweb.com',
    gender:'Male',
  },{
    firstName:'Utsav ',
    lastName:'Siwakoti',
    email:'as@hgweb.com',
    gender:'Male',
  },{
    firstName:'Anjita',
    lastName:'Thapa',
    email:'at@hgweb.com',
    gender:'Female',
  },{
    firstName:'Neelam',
    lastName:'Shrestha',
    email:'ns@hgweb.com',
    gender:'Female',
  }]
}

storiesOf('Table', module).add('Table', () => (
    <Table {...props}/>
  ));