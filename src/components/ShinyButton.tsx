// src/components/ShinyButton.js

const ShinyButton = ({ className, children, href }) => {
  return (
    <a
      href={href}
      className={`${className} bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-6 rounded-full transition-all duration-300 hover:scale-105`}
    >
      {children}
    </a>
  )
}

export default ShinyButton
