import React from 'react';
import './board.css';
import List from './list';

const Info = [
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Sofia Cooper", birthday: "1995-01-31"
    },
    {
        img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Miller Wright", birthday: "1998-05-29"
    },
    {
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Tara Kelly", birthday: "1991-02-02"
    },
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Freddie Watson", birthday: "1999-07-15"
    },
    {
        img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Brianna Baker", birthday: "1994-06-07"
    },
    {
        img: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name: "Brad Myers", birthday: "1997-08-28"
    }
];

export default function Board() {
  return (
    <main id="site-main">
      <h1 className="text-dark title">Birthday Reminder</h1>
      <div className="board">
        <List info={today(Info)}></List>
        <h2 className='upcoming text-dark'>Upcoming</h2>
        <List info={upcoming(Info,2)} upcoming={true}></List>
      </div>
    </main>
  );
}

function today(persons) {
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth();

    let filter = persons.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return currentDay === day && currentMonth === month;
    });
    return filter;
}

function upcoming(persons) {
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDate();

    let filter = persons.filter(data => {
        let month = new Date(data.birthday).getMonth();
        let day = new Date(data.birthday).getDate();

        if (currentDay === day) return false;
        return month >= currentMonth && month <= currentMonth + 2;
    });

    return filter;
}
