import React from "react";

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface IconProps extends React.SVGProps<SVGSVGElement> {}

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
>
  <path
    fill="currentColor"
    d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41"
  />
</svg>;

export const CreateNewIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill={stroke}
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41"
    />
  </svg>
);

export const DashboardIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke={stroke}
    {...props}
  >
    <path
      fill={stroke}
      fillRule="evenodd"
      d="M19 11a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-6a2 2 0 0 1 1.85-1.995L15 11zm0-8a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      opacity="0.3"
    />
    <path
      fill={stroke}
      fillRule="evenodd"
      d="M9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
    />
    <path
      fill={stroke}
      fillRule="evenodd"
      d="M9 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2z"
      opacity="0.3"
    />
  </svg>
);

export const InstagramIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    {...props}
  >
    <rect width="17" height="17" x="3.5" y="3.5" rx="5.5" />
    <circle cx="12" cy="12" r="3.606" />
    <circle cx="16.894" cy="7.106" r="1.03" fill={stroke} stroke="none" />
  </svg>
);

export const AwardBadgeIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  fill = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill={fill}
      d="m19 20.75l-2.31-9A5.94 5.94 0 0 0 18 8A6 6 0 0 0 6 8a5.94 5.94 0 0 0 1.34 3.77L5 20.75a1 1 0 0 0 1.48 1.11l5.33-3.13l5.68 3.14A.9.9 0 0 0 18 22a1 1 0 0 0 1-1.25M12 4a4 4 0 1 1-4 4a4 4 0 0 1 4-4m.31 12.71a1 1 0 0 0-1 0l-3.75 2.2L9 13.21a5.94 5.94 0 0 0 5.92 0L16.45 19Z"
    />
  </svg>
);

export const YouTubeIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" />
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
  </svg>
);

export const DropdownIcon: React.FC<IconProps> = ({
  className,
  width = 16,
  height = 16,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke={stroke}
    strokeWidth={1}
    {...props}
  >
    <path d="M4.5 6L8 9.5L11.5 6" />
  </svg>
);

export const PersonIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18" />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({
  className,
  width = 20,
  height = 20,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit={10}
    strokeWidth={1.5}
    {...props}
  >
    <path d="m21 21l-4-4m2-6a8 8 0 1 1-16 0a8 8 0 0 1 16 0" />
  </svg>
);

export const CartIcon: React.FC<IconProps> = ({
  className,
  width = 20,
  height = 20,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85" />
  </svg>
);

export const LoveIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.722 6.8c-.923 1.176-1.256 2.281-1.22 3.31c.038 1.045.458 2.068 1.136 3.06c1.367 1.996 3.694 3.737 5.609 5.09c.452.32 1.05.32 1.502 0c1.93-1.36 4.256-3.1 5.62-5.095c.676-.99 1.093-2.012 1.129-3.055c.034-1.029-.3-2.134-1.225-3.31c-1.62-1.711-3.953-1.66-5.541-.278a1.125 1.125 0 0 1-1.468 0c-1.589-1.381-3.92-1.433-5.542.279m-.743-.669c2.016-2.145 4.97-2.077 6.941-.363a.12.12 0 0 0 .078.027q.05-.002.077-.027c1.97-1.714 4.928-1.783 6.942.364l.015.015l.013.017c1.059 1.34 1.496 2.677 1.452 3.98c-.043 1.292-.558 2.495-1.303 3.585c-1.48 2.164-3.953 3.998-5.868 5.349a2.3 2.3 0 0 1-2.657-.001c-1.9-1.344-4.374-3.178-5.856-5.343c-.746-1.09-1.264-2.295-1.31-3.588c-.046-1.304.389-2.641 1.448-3.982l.013-.017z"
    />
  </svg>
);

export const MessageIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 26 26"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4C1.344 4 0 5.344 0 7v12c0 1.656 1.344 3 3 3h20c1.656 0 3-1.344 3-3V7c0-1.656-1.344-3-3-3zm0 2h20c.551 0 1 .449 1 1v.5l-11 5.938L2 7.5V7c0-.551.449-1 1-1M2 7.781l6.531 5.094l-6.406 6.563l7.813-5.563L13 15.844l3.063-1.969l7.812 5.563l-6.406-6.563L24 7.781V19a.95.95 0 0 1-.125.438c-.165.325-.486.562-.875.562H3c-.389 0-.71-.237-.875-.563A.95.95 0 0 1 2 19z"
    />
  </svg>
);

export const GrowthArrowIcon: React.FC<IconProps> = ({
  className,
  width = 14,
  height = 14,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 14 14"
    className={className}
    fill="none"
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    {...props}
  >
    <path d="M9.5 3.5h4v4" />
    <path d="M13.5 3.5L7.85 9.15a.5.5 0 0 1-.7 0l-2.3-2.3a.5.5 0 0 0-.7 0L.5 10.5" />
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({
  className,
  width = 32,
  height = 32,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7zM6 10h7v2H6zm0 5h7v2H6zm0 5h7v2H6z" />
    <path d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11v18Z" />
  </svg>
);

export const EasyWinIcon: React.FC<IconProps> = ({
  className,
  width = 32,
  height = 32,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 73 72"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <path
        d="M6 24V58.587C6 58.587 19.863 58.071 36 66C52.137 58.071 66 58.587 66 58.587V24C66 24 49.638 24 36 31.413C22.362 24 6 24 6 24Z"
        fill={stroke}
      />
      <path
        d="M36 24C40.9706 24 45 19.9706 45 15C45 10.0294 40.9706 6 36 6C31.0294 6 27 10.0294 27 15C27 19.9706 31.0294 24 36 24Z"
        fill={stroke}
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="72" height="72" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export const ClockIcon: React.FC<IconProps> = ({
  className,
  width = 32,
  height = 32,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke={stroke}
    strokeWidth="1"
    {...props}
  >
    <g fill="none">
      <circle cx="12" cy="12" r="8.5" />
      <path
        strokeLinecap="round"
        d="M5 2.804A6 6 0 0 0 2.804 5M19 2.804A6 6 0 0 1 21.196 5M12 6.5v5.25c0 .138.112.25.25.25h4.25"
      />
    </g>
  </svg>
);

export const ChartIcon: React.FC<IconProps> = ({
  className,
  width = 32,
  height = 32,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M3 3H1v16h18v-2H3z" />
    <path d="M11 11L8 9l-4 4v3h14V5z" />
  </svg>
);

export const NextIcon: React.FC<IconProps> = ({
  className,
  width = 32,
  height = 32,
  stroke = "#2196f3",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M17.1 5L14 8.1L29.9 24L14 39.9l3.1 3.1L36 24z" />
  </svg>
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  stroke?: string;
}

export const EmptyStarIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "#ffdb0a",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="m8.85 16.825l3.15-1.9l3.15 1.925l-.825-3.6l2.775-2.4l-3.65-.325l-1.45-3.4l-1.45 3.375l-3.65.325l2.775 2.425zm-1.525 2.098l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102zM12 12.25" />
  </svg>
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  stroke?: string;
}

export const SolidStarIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "#ffdb0a",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "#23856D",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    <path d="M16.1 13.359l-.528-.532zm.456-.453l.529.532zm2.417-.317l-.358.66zm1.91 1.039l-.358.659zm.539 3.255l.529.532zm-1.42 1.412l-.53-.531zm-1.326.67l.07.747zm-9.86-4.238l.528-.532zM4.002 5.746l-.749.042zm6.474 1.451l.53.532zm.157-2.654l.6-.449zM9.374 2.86l-.601.45zM6.26 2.575l.53.532zm-1.57 1.56l-.528-.531zm7.372 7.362l.529-.532zm4.567 2.394l.455-.453-1.058-1.064-.455.453zm1.985-.643l1.91 1.039.716-1.318-1.91-1.038zm2.278 3.103l-1.42 1.413 1.057 1.063 1.42-1.412zm-2.286 1.867c-1.45.136-5.201.015-9.263-4.023l-1.057 1.063c4.432 4.407 8.65 4.623 10.459 4.454zm-9.263-4.023c-3.871-3.85-4.512-7.087-4.592-8.492l-1.498.085c.1 1.768.895 5.356 5.033 9.47zm1.376-6.18l.286-.286L9.95 6.666l-.287.285zm.515-3.921L9.974 2.41l-1.201.899 1.26 1.684zM5.733 2.043l-1.57 1.56 1.058 1.064 1.57-1.56zm4.458 5.44c-.53-.532-.53-.532-.53-.53h-.002l-.003.004a1 1 0 00-.127.157c-.054.08-.113.185-.163.318a2.1 2.1 0 00-.088 1.071c.134.865.73 2.008 2.256 3.526l1.058-1.064c-1.429-1.42-1.769-2.284-1.832-2.692-.03-.194.001-.29.01-.312q.009-.02 0-.006a.3.3 0 01-.03.039l-.01.01-.01.009zm1.343 4.546c1.527 1.518 2.676 2.11 3.542 2.242.443.068.8.014 1.071-.087a1.5 1.5 0 00.42-.236l.05-.045.007-.006.003-.003.001-.002s.002-.001-.527-.533c-.53-.532-.528-.533-.528-.533l.002-.002.002-.002.006-.005.01-.01.038-.03q.014-.009-.007.002c-.025.009-.123.04-.32.01-.414-.064-1.284-.404-2.712-1.824zm-1.56-9.62C8.954 1.049 6.95.834 5.733 2.044L6.79 3.107c.532-.529 1.476-.475 1.983.202zM4.752 5.704c-.02-.346.139-.708.469-1.036L4.163 3.604c-.537.534-.96 1.29-.909 2.184zm14.72 12.06c-.274.274-.57.428-.865.455l.139 1.494c.735-.069 1.336-.44 1.784-.885zM11.006 7.73c.985-.979 1.058-2.527.229-3.635l-1.201.899c.403.539.343 1.246-.085 1.673zm9.52 6.558c.817.444.944 1.49.367 2.064l1.058 1.064c1.34-1.333.927-3.557-.71-4.446zm-3.441-.849c.384-.382 1.002-.476 1.53-.19l.716-1.317c-1.084-.59-2.428-.427-3.304.443z" />
  </svg>
);

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  width?: number;
  height?: number;
  stroke?: string;
}

export const HamburgerIcon: React.FC<IconProps> = ({
  className,
  width = 16,
  height = 16,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 2048 2048"
    className={className}
    fill="none"
    stroke={stroke}
    strokeWidth={128}
    {...props}
  >
    <path
      d="M0 384h1024v128H0zM0 896h2048v128H0zM1024 1408h1024v128H1024z"
      fill={stroke}
    />
  </svg>
);

export const LoaderIcon: React.FC<IconProps> = ({
  className,
  width = 24,
  height = 24,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    fill={stroke}
    stroke="none"
    {...props}
  >
    {[...Array(8)].map((_, i) => {
      const angle = i * 45;
      const begin = `${i * 0.125}s`;
      return (
        <circle
          key={i}
          cx="12"
          cy="2"
          r="0"
          fill={stroke}
          transform={`rotate(${angle} 12 12)`}
        >
          <animate
            attributeName="r"
            begin={begin}
            dur="1s"
            calcMode="spline"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            values="0;2;0;0"
            repeatCount="indefinite"
          />
        </circle>
      );
    })}
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({
  className = "",
  width = 48,
  height = 48,
  stroke = "currentColor",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 48 48"
    className={`animate-spin ${className}`}
    fill="none"
    strokeLinejoin="round"
    strokeWidth={4}
    {...props}
  >
    <g fill="none" strokeLinejoin="round" strokeWidth="4">
      <path
        fill="#F06621"
        stroke="#fff"
        d="M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z"
      />
      <path
        fill="#060606"
        stroke="#fff"
        d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"
      />
    </g>
  </svg>
);
