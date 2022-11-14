import React from 'react';
import './QuoteBox.css';

let quotes = [
  ["When you have a dream, you've got to grab it and never let go.", "Carol Burnett"],
  ["There is nothing impossible to they who will try.", "Alexander the Great"],
  ["The bad news is time flies. The good news is you're the pilot.", "Michael Altshuler"],
  ["You're never too old to set another goal or to dream a new dream.", "Malala Yousafzai"],
  ["Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.", "Lady Gaga"]
];

let colors = [
  '#265973',
  '#4d4d4d',
  '#997ab8',
  '#b94674',
  '#edccab'
];

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: quotes[Math.floor(Math.random() * quotes.length)][0],
      currentAuthor: quotes[Math.floor(Math.random() * quotes.length)][1],
      currentColor: colors[Math.floor(Math.random() * colors.length)],
      prevQuoteIdx: 0,
      prevColorIdx: 0,
    };
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
    document.body.style.backgroundColor = this.state.currentColor;
  }

  handleNewQuoteClick() {
    let quoteIdx = Math.floor(Math.random() * quotes.length);
    let colorIdx = Math.floor(Math.random() * colors.length);
    while(quoteIdx === this.state.prevQuoteIdx || colorIdx === this.state.prevColorIdx) {
      quoteIdx = Math.floor(Math.random() * quotes.length);
      colorIdx = Math.floor(Math.random() * colors.length); 
    }
    document.getElementById('text').style.transition = "color 1s linear 0s";
    document.getElementById('author').style.transition = "color 1s linear 0s";
    document.getElementById('tweet-quote').style.transition = "background-color 1s linear 0s";
    document.getElementById('new-quote').style.transition = "background-color 1s linear 0s";
    document.body.style.backgroundColor = colors[colorIdx];
    document.body.style.transition = "background-color 1s linear 0s";
    this.setState({
      currentQuote: quotes[quoteIdx][0],
      currentAuthor: quotes[quoteIdx][1],
      currentColor: colors[colorIdx],
      prevQuoteIdx: quoteIdx,
      prevColorIdx: colorIdx
    });
  }
  
  render() {
    const colorStyle = {
      color: this.state.currentColor
    }
    const backgroundColorStyle = {
      backgroundColor: this.state.currentColor
    }
    return (
      <div id="quote-box">
        <p id="text" style={colorStyle}><i class="fa-sharp fa-solid fa-quote-left"></i> {this.state.currentQuote}</p>
        <p id="author" style={colorStyle}>- {this.state.currentAuthor}</p>
        <div className="buttons">
          <a id="tweet-quote" style={backgroundColorStyle} target="_top" 
          href={"https://twitter.com/intent/tweet?text=" + this.state.currentQuote + " - " + this.state.currentAuthor}>
            <i id="twitter-icon" class="fa-brands fa-twitter"></i>
          </a>
          <button id="new-quote" style={backgroundColorStyle} onClick={this.handleNewQuoteClick}>New Quote</button>
        </div>
      </div>
    );
  }
}

class Wrapper extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <QuoteBox />
        <p className="creator">
          <a className="creatorLink" href="https://www.linkedin.com/in/evan-holster-b1b909239/" target="_blank" rel="noreferrer">
            by Evan Holster <i id="linkedin-icon" class="fa-brands fa-linkedin" />
          </a>
        </p>
      </div>
    );
  }
}

export default Wrapper;