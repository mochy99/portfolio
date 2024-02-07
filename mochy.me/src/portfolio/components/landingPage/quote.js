import React, { useState, useEffect } from "react";

function Quote() {
    const quotes = require("./quote.json");
    const interval = 3 * 1000; // 30 seconds
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex].quote;
    const author = quotes[randomIndex].author;

    return (
        <div id = "containQuote">
        <div id="quote">{'"' + quote + '"'}</div>
        <div id="author">{"- " + author + " -"}</div>
        </div>
    );
}

export default Quote;
