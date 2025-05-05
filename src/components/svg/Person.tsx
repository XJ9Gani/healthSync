import { SVGProps } from "react";

export default function Person(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none" stroke="#6e8caa" strokeWidth="3">
        <circle cx="12" cy="7" r="5"></circle>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7"
        ></path>
      </g>
    </svg>
  );
}
