import './QuotesApp.css';
import quotes from './quotes.json';
import QuoteBox from './components/QuoteBox';
import ChangeHandler from './components/ChangeHandler'
import { useState } from 'react';



function QuotesApp() {

  const colors = ["#0f1420", "#ae516d", "#3e092c", "#82195E", "#4d0404", "#041c18", "#092c3e", "#020000", "#0e6153"]
  const [ quote, setQuote ]= useState(quotes[getRandomIndex(quotes.length)]);
  const [ background, setBackground ]= useState(colors[getRandomIndex(colors.length)])
  const handleChanges = () => {
    setQuote(quotes[getRandomIndex(quotes.length)])
    setBackground(colors[getRandomIndex(colors.length)])
  }

  return (
    <div className="quotesApp" style={{background}}>
      <QuoteBox
      quote={quote.quote}
      author={quote.author}
      color={background}
    />
    <ChangeHandler changeQuote={handleChanges} backgroundBtn={background}/>
    </div>
  );
}

const getRandomIndex = max  => Math.floor(Math.random()* max);

export default QuotesApp ;
