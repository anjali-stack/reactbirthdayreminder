
import React from 'react';

export default function List({ info, upcoming }) {
  return (
    <div>
      <ul>
        {iterate(info, upcoming)}
      </ul>
    </div>
  );
}

function iterate(data, flag) {
  if (!data) return null;
  const bgColor = flag ? { backgroundColor: "#ffe66d" } : {};
  return (
    <>
      {data.map((person, index) => (
        <li key={index}>
          <div className="flex" style={bgColor}>
            <img src={person.img} alt={person.name} />
            <div className="title">
              <h3 className="name">{person.name}</h3>
              <h5 className="age">{Old(person.birthday)}</h5>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

function Old(personAge) {
  let year = new Date(personAge).getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - year;
  return age;
}
