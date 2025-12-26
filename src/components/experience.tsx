const experiences = [
  {
    title: "Build Web-Based Management System",
    company: "iBiteCare+",
    year: "2025",
    description: "Developed a full-stack web system for Dr. Care Animal Bite Center-Guinobatan."
  },
  {
    title: "Blog Website Development",
    company: "YourLaughterBlog",
    year: "2025",
    description: "Built a blog website for a client, themed around Pablo Neruda’s “Your Laughter.”"
  },
  {
    title: "Created Web-Based E-Commerce Platform",
    company: "FurrHUB",
    year: "2024",
    description: "Developed a full-stack web-based E-Commerce platform for pet products and services."
  },
];

export default function Experience() {
  return (
    <div className="border border-gray-200 rounded-lg flex flex-col p-4 shadow-sm">
        <div className="flex justify-between items-center">
            <h3 className="flex items-center font-bold text-gray-800 text-lg">
            <span className="material-icons scale-90 mr-1">cases</span>
            Experience
            </h3>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-200 px-2 gap-4 flex flex-col overflow-y-auto max-h-96 scrollbar-design pb-2">
            {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-1 ">
                <div className="flex items-start justify-between">
                <h4 className="font-bold text-gray-700 text-sm">
                    {exp.title} <br /><span className="font-semibold text-gray-600">{exp.company}</span>
                </h4>
                <span className="text-sm font-bold text-gray-500 py-1 px-4 bg-gray-50 border border-gray-300 rounded">
                    {exp.year}
                </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{exp.description}</p>
            </div>
            ))}
        </div>
    </div>
);
}
