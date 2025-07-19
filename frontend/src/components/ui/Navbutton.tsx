import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../lib/utils' // Assuming you have a `cn` (classnames) utility

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  page: string
  icon?: React.ReactNode // Icon as a React component
}

export const NavButton = ({ text, icon, page, className, ...props }: NavButtonProps) => {
  const location = useLocation()
  console.log(location.pathname)
  const isActive = location.pathname.startsWith(page)

  return (
    <Link
      to={page}
      className={cn(
        'mb-4 px-4 py-2 rounded-lg text-[#8C8C8C] hover:bg-white hover:text-black transition-colors duration-300',
        isActive ? 'bg-white text-black' : 'text-[#8C8C8C] hover:bg-white hover:text-black'
      )}
    >
      <button className={cn('flex items-center gap-2 justify-start', className)} {...props}>
        {icon}
        <span>{text}</span>
      </button>
    </Link>
  )
}

// import { Link, useLocation } from 'react-router-dom'
// import { cn } from '../../lib/utils' // if you're using a classnames helper

// export const NavButton = ({ text, icon, page, className, ...props }: NavButtonProps) => {
//   const location = useLocation()
//   const isActive = location.pathname === page

//   return (
//     <Link to={page}>
//       <button
//         className={cn(
//           'flex items-center gap-2 justify-start mb-4 px-4 py-2 rounded-lg transition-colors duration-300',
//           isActive
//             ? 'bg-white text-black'
//             : 'text-[#8C8C8C] hover:bg-white hover:text-black',
//           className
//         )}
//         {...props}
//       >
//         {icon}
//         <span>{text}</span>
//       </button>
//     </Link>
//   )
// }
