const Card = ({ children, className }) => (
  <div className={` bg-gray-100 p-3 md:p-5 shadow-xl rounded-md ${className}`}>
    {children}
  </div>
);

export default Card;
