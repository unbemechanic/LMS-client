import * as React from "react"
const Edit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#2C2669"
        d="m3.035 11.193 9.015-8.126-1.257-1.133-9.015 8.126v1.133h1.257Zm.736 1.602H0V9.396L10.164.235a.96.96 0 0 1 1.258 0L13.935 2.5a.747.747 0 0 1 0 1.133L3.77 12.795ZM0 14.398h16V16H0v-1.602Z"
      />
      <path
        fill="#000"
        fillOpacity={0.2}
        d="m3.035 11.193 9.015-8.126-1.257-1.133-9.015 8.126v1.133h1.257Zm.736 1.602H0V9.396L10.164.235a.96.96 0 0 1 1.258 0L13.935 2.5a.747.747 0 0 1 0 1.133L3.77 12.795ZM0 14.398h16V16H0v-1.602Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Edit
