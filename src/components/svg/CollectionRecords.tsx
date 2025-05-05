import { SVGProps } from "react";

export default function CollectionRecords(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" stroke="#2a2961" strokeWidth="4">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M40 22c0-9.941-8.059-18-18-18S4 12.059 4 22s8.059 18 18 18"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M33.3 30c-1.822 0-3.3 1.722-3.3 3.846c0 3.845 3.9 7.34 6 8.154c2.1-.813 6-4.31 6-8.154C42 31.722 40.523 30 38.7 30c-1.116 0-2.103.646-2.7 1.634c-.597-.988-1.584-1.634-2.7-1.634"
        ></path>
        <path d="M22 27a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></path>
      </g>
    </svg>
  );
}
