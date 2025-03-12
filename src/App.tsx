import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="md:w-3/4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Amit Dobhal</h1>
        <p className="text-xl text-gray-300 mb-8">Data Analyst & Software Developer</p>
        
        <div className="flex gap-4 mb-8">
          <a href="mailto:amitdobhal0001@gmail.com" className="flex items-center gap-2 hover:text-blue-400">
            <Mail size={20} /> Email
          </a>
          <a href="https://www.linkedin.com/in/amit-dobhal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-400">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="tel:+917310515144" className="hover:text-blue-400">+91 7310515144</a>
        </div>
          </div>
          
         {/* Right Side - Profile Image */}
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gray-700">
      <img src="./amit.pdf.jpg" alt="Amit Dobhal" className="w-full h-full object-cover" />
    </div>
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300">
            Hey there! I'm a motivated data analyst with a strong foundation in software development and a passion for uncovering insights through data. My journey in tech started after completing my MCA when I realized how vast and exciting the world of computer science truly is.
            Initially, I dived into web development because I loved coding and creating interactive experiences. But over time, I discovered something even more fascinating—data! I didn't realize it at first, but I had already been using data analysis without knowing it. One of my biggest "aha" moments was when I helped grow my colleague's YouTube channel to 1 million subscribers just by analyzing audience behavior and optimizing content strategies. That's when I knew—data is my thing!

Now, I specialize in Python, SQL, and Power BI, using data-driven insights to solve business problems and drive growth. I believe that data tells a story, and I love turning raw numbers into actionable insights that make a real impact.

If you're as excited about data, technology, and business growth as I am, let's connect
          </p>
          </div>
          
      </header>

      {/* Skills Section */}
      <section className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-300">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Development Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>IntelliJ IDEA</li>
                <li>VS Code</li>
                <li>Eclipse IDE</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Data Analysis Tools</h3>
              <ul className="space-y-2 text-gray-300">
                <li>SQL</li>
                <li>Excel</li>
                <li>Jupyter Notebook</li>
                <li>Power BI</li>
                <li>BigQuery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">Junior Developer Intern</h3>
                <p className="text-gray-400">Weazy Infotech</p>
              </div>
              <div className="text-right text-gray-400">
                <p>March 2024 - July 2024</p>
                <p>Dehradun, IN</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Designed and implemented 15+ responsive webpages, improving user engagement by 20% through data-driven insights</li>
              <li>Conducted A/B testing & user behavior analysis, refining UI and improving decision-making</li>
              <li>Leveraged data analysis tools like Google Sheets and Python to enhance decision-making processes</li>
              <li>Collaborated with cross-functional teams to provide data-driven insights for business strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Master of Computer Application</h3>
                  <p className="text-gray-400">Graphic Era Hill University</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">2022 - 2024</p>
                  <p className="text-blue-400">CGPA: 7.29</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Computer Application</h3>
                  <p className="text-gray-400">Graphic Era Hill University</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">2018 - 2021</p>
                  <p className="text-blue-400">CGPA: 7.28</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Weather Forecasting Using Regression Model</h3>
            <div className="text-gray-300 space-y-4">
              <p><span className="font-semibold">Technologies:</span> Python, Pandas, Scikit-learn, Linear Regression</p>
              <p><span className="font-semibold">Outcome:</span> Improved forecast accuracy by 15%</p>
              <p>Developed and optimized weather forecasting models using linear regression and advanced statistical methods to enhance predictive accuracy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-800/50 py-16">
  <div className="container mx-auto px-6 max-w-4xl">
    <h2 className="text-3xl font-bold mb-8 text-white">Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Google Data Analytics Certification */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">
          Google Data Analytics Professional Certificate
        </h3>
        <p className="text-gray-400">Coursera - In Progress</p>
        <div className="mt-4">
                <a href="./google data anlalyst.jpg" target="_blank" rel="noopener noreferrer">
                  <img
            src="./google data anlalyst.jpg"
            alt="Google Data Analytics Certificate"
            className="w-full h-48 object-cover rounded-lg border border-gray-700"
                />
                </a>
        </div>
      </div>

      {/* Deloitte Data Analytics Certification */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">
          Deloitte Data Analytics Virtual Experience
        </h3>
        <p className="text-gray-400">Forage - February 2025</p>
              <div className="mt-4">
                <a href="./delloite data anlalyst.jpg" target="_blank" rel="noopener noreferrer">
          <img
            src="./Deloitte_data_Analyst_certificate_page-0001.jpg"
            alt="Deloitte Data Analytics Certificate"
            className="w-full h-48 object-cover rounded-lg border border-gray-700"
                  />
                  </a>
        </div>
      </div>

    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 Amit Dobhal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;