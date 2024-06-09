import { FC, SVGProps } from 'react';

const HeartIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.15479 4.31C1.64966 6.45038 1.29688 10.029 3.26416 12.5604C4.8999 14.6651 9.84985 19.1041 11.4722 20.5408C11.6536 20.7016 11.7444 20.7819 11.8501 20.8135C11.9426 20.8411 12.0437 20.8411 12.136 20.8135C12.2419 20.7819 12.3328 20.7016 12.5142 20.5408C14.1365 19.1041 19.0864 14.6651 20.7222 12.5604C22.6895 10.029 22.3796 6.42786 19.8315 4.31C17.2834 2.19214 13.9924 2.7984 11.9932 5.1358C9.9939 2.7984 6.65967 2.16962 4.15479 4.31Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeartIcon;
