import React, { useEffect, useState } from "react";
import faker from "faker";
import "./Header.css";
import Story from "./Story.js";

function Header() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(50)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="header">
<<<<<<< HEAD
=======
      {/* <h1>Hey ! That's my Faker person here </h1> */}
>>>>>>> 4e21e07ecdf1f8239e49dbd6aa7590ef71cc1fe0
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Header;
