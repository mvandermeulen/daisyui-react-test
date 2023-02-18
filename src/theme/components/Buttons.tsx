export const Buttons = (
  <div className="grid grid-cols-2 flex-wrap gap-x-1 gap-y-1">
    <button className="btn">Neutral</button>
    <button className="btn btn-primary">Primary</button>
    <button className="btn btn-secondary">Secondary</button>
    <button className="btn btn-accent">Accent</button>
    <button className="btn btn-base-100">Base-100</button>
    <button className="btn btn-info">Info</button>
    <button className="btn btn-success">Success</button>
    <button className="btn btn-warning">Warning</button>
    <button className="btn btn-error">Error</button>
    <button className="btn btn-disabled">Disabled</button>
    <button className="btn loading flex flex-nowrap">Loading</button>
    <button className="btn btn-outline">Outline</button>
  </div>
);

export const ButtonTypes = (
  <div className="grid grid-cols-[auto,1fr] gap-1">
    <div className="flex flex-col gap-2">
      <button className="btn btn-lg">Large</button>
      <button className="btn">Normal</button>
      <button className="btn btn-sm">Small</button>
      <button className="btn btn-xs">Tiny</button>
    </div>
    <div className="flex flex-row flex-wrap justify-center my-auto items-center gap-3">
      <button className="btn btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="btn btn-square btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="btn btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="btn btn-circle btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <button className="btn gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Icon
      </button>
      <button className="btn btn-square loading"></button>
    </div>
  </div>
);
