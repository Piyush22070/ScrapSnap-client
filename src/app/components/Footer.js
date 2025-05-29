const Footer = () => {
  return (
    <footer className="bg-white text-black border-t border-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} ScrapSnap. All rights reserved | Piyush Bhoyar</p>
        <div className="mt-2 sm:mt-0 space-x-4 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
