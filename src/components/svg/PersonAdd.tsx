import { SVGProps } from "react";

export function PersonAdd(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="#ffffff" strokeWidth="2">
        <circle cx="12" cy="7" r="5"></circle>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7m12 0v4m-2-2h4"
        ></path>
      </g>
    </svg>
  );
}
