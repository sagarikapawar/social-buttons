const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
  //  Write your code here.
};

const element = (
  //  Write your code here.

  <div className="button_container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button_inner_container">
      <Button buttonText="Like" className="like" />
      <Button buttonText="Comment" className="comment" />
      <Button buttonText="Share" className="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
