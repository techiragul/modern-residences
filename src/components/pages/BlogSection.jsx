import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const blogs = [
  {
    id: 1,
    title: 'Why Some Buildings Collapse Before They\'re Finished',
    excerpt: 'Discover why some buildings collapse before completion. Learn about causes like poor design, material failure & human error in construction collapse cases.',
    category: 'Construction Safety',
    date: 'Aug 15, 2023'
  },
  {
    id: 2,
    title: 'Corruption & Illegal Activities in Construction',
    excerpt: 'Uncover how corruption in construction and illegal activities like bribery, fake billing & poor materials threaten safety, fairness, and project quality.',
    category: 'Industry Insights',
    date: 'Jul 28, 2023'
  },
  {
    id: 3,
    title: 'How Long Will It Take to Finish Building Your Dream Home?',
    excerpt: 'Thinking of building your own home? Be warned — it rarely goes "as planned." Construction timelines depend on more than just the size. Weather, permits, materials — even your own decisions — can slow things down. So how long will your house take to finish?',
    category: 'Home Building',
    date: 'Jul 10, 2023'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Latest <span className="text-primary">Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto my-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and news in the real estate and construction industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                {/* Placeholder for blog image */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                  Blog Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-primary">{blog.category}</span>
                  <span className="text-sm text-gray-500">{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Read More <FaArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
