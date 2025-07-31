import Image from 'next/image';

export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-black to-gray-800 min-h-screen">
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-4 lg:mb-6">Get In <span className="text-purple-600">Touch</span></h1>
      <p className="text-xl text-gray-400 mb-12">
        I'd love to hear from you. Send me a message and I'll respond as soon as possible.
      </p>
        </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-purple-600">Email</h3>
              <p className="text-gray-400">maicolmoet@gmail.com</p>
            </div>
            
            <div>
              <h3 className="font-bold text-purple-600">Location</h3>
              <p className="text-gray-400">Region Eindhoven, The Netherlands</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="font-bold text-purple-600 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/MDMoet" className="bg-white hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">
                <Image
                  src="/images/logos/GitHub.png"
                  alt="GitHub"
                  width={64}
                  height={64}
                  />
              </a>
              <a href="https://linkedin.com/in/MDMoet" className="bg-white hover:bg-gray-200 px-4 py-2 rounded-md transition-colors">
                <Image
                  src="/images/logos/LinkedIn.png"
                  alt="LinkedIn"
                  width={64}
                  height={64}
                />
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border border-red-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-green-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 border border-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-3 py-2 border border-purple-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
}
