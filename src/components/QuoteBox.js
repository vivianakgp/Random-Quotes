
const QuoteBox = ({quote, author, color}) => {

    return (
        <div className="quoteBox" style={{color:color}}>
            <span><i className="fas fa-quote-left"></i></span>
            <p className="quote">{quote}</p>
            <span className="author">{author}</span>
        </div>
    );
};

export default QuoteBox;