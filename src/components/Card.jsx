import { Link } from 'react-router-dom'

const Card = ({ 
  title, 
  description, 
  link, 
  icon: Icon, 
  image,
  className = '' 
}) => {
  const content = (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:scale-105 ${className}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6">
        {Icon && (
          <div className="mb-4 text-primary">
            <Icon className="w-12 h-12" />
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        {link && (
          <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
            Learn More
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )

  if (link) {
    return (
      <Link
        to={link}
        className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
        aria-label={`Learn more about ${title}`}
      >
        {content}
      </Link>
    )
  }

  return content
}

export default Card

