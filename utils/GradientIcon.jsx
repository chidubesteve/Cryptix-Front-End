const GradientIcon = ({ isPlaying }) => {
  return (
    <>
      {isPlaying ? (
        <svg
          width="30"
          height="30"
          viewBox="0 0 448 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(27,57,160,1)" />
              <stop offset="40%" stopColor="rgba(135,40,144,1)" />
              <stop offset="100%" stopColor="rgba(255,44,137,1)" />
            </linearGradient>
          </defs>
          <path
            d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
            fill="url(#gradient)"
          />
        </svg>
      ) : (
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(27,57,160,1)" />
              <stop offset="40%" stopColor="rgba(135,40,144,1)" />
              <stop offset="100%" stopColor="rgba(255,44,137,1)" />
            </linearGradient>
          </defs>
          <path
            stroke="url(#gradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      )}
    </>
  );
};

export default GradientIcon;
