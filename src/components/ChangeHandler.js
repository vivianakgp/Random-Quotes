


const ChangeHandler = ({changeQuote, backgroundBtn}) => {
    return (
      <button className="handleBtn" onClick={changeQuote} style={{background:backgroundBtn}}><i className="fas fa-random"></i></button>
    );
};
export default ChangeHandler
