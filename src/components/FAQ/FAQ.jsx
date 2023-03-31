import React from "react";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2>FAQ</h2>
      <div className="faq">
        <h3>Q: Distinguish between Props and state.</h3>
        <p>
          Ans: Props is a kind of data which we pass from parent component to
          child component so that the child component can use that data. We even
          can pass the props data deeply to child component this is called prop
          drilling in react. On the other hand state is the data which can
          change over the time that means it is changeable not static. We
          usually store this kind of data in useState hook in react.
        </p>
      </div>
      <div className="faq">
        <h3>Q: How does useState work?</h3>
        <p>
          Ans: The useState is a hook of react. We usually store changeable
          state in this hook. it is a function which returns an array of two
          value. first is the value of which we pass to the useState hook and
          the second is a setter function which used to set the state value.
        </p>
      </div>
      <div className="faq">
        <h3>Q: Purpose of useEffect other than fetching data.</h3>
        <p>
          Ans: Actually the main purpose of useEffect is to synchronize the
          react component to the external resource like browser dom or api like
          setTimeout or external third party library. Using data fetching with
          useEffect is not a good idea if you had to do it then you should think
          it as a last resort.
        </p>
      </div>
      <div className="faq">
        <h3>Q: How Does React work?</h3>
        <p>
          Ans: When react first renders it creates a virtual dom which is like a
          copy of actual browser dom. then on every rerender react compares the
          previous virtual dom with the the current virtual dom and made changes
          in the actual browser dom just the part which has been changed in the
          current virtual dom. Moreover, react uses jsx as html element which
          react compiles down to javascript object which dictates what to show
          on the screen.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
