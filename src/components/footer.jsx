import React from "react";
const date = new Date();

const year = date.getFullYear();

function footer() {
  return <footer>copyright ⓒ {year}</footer>;
}

export default footer;
