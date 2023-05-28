import './App.css';
import React from 'react';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const contacts=[
    {
      id:1,
      name:'Touhid',
      email:'touhid@mail.com'
    },
    {
      id:2,
      name:'Khalid',
      email:'Khalid@mail.com'
    },
    {
      id:3,
      name:'Hossen',
      email:'hossen@mail.com'
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
