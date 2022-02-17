const SearchIcon = ({ fill = 'black' }) => {
  return (
    <div className="icon_wrapper">
      <svg
        className="icons searchIcon"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23 36C15.8 36 10 30.2 10 23C10 15.8 15.8 10 23 10C30.2 10 36 15.8 36 23C36 30.2 30.2 36 23 36ZM23 12C16.9 12 12 16.9 12 23C12 29.1 16.9 34 23 34C29.1 34 34 29.1 34 23C34 16.9 29.1 12 23 12Z"
          fill={fill}
        />
        <path
          d="M32.6821 31.267L41.6621 40.247L40.2481 41.661L31.2681 32.681L32.6821 31.267Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
