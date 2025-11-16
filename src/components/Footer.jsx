function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-sm text-gray-500">
            Built with care • Open to freelance and full-time roles
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
