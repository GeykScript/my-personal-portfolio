
const certificates = [
  {
    title: "Full-Stack Web Development Bootcamp",
    description: (
    <>
        Certificate of Completion from <b>Udemy</b>, issued on June 15, 2025, for completing "The Complete Full-Stack Web Development Bootcamp."
    </>
    )
  },
  {
    title:"Responsive Web Design",
        description: (
        <>
            Developer Certification from <b>freeCodeCamp</b>, issued on June 30, 2023, for completing approximately 300 hours of coursework.
        </>
        )
},
  {
    title:"C Intermediate",
        description: (
        <>
            Course Certificate from <b>Sololearn</b>, issued on June 22, 2023, for completing the intermediate course in C programming.
        </>
        )
},
{
    title:"Learn & Understand Java From Scratch",
        description: (
        <>
            Certificate of Completion from <b>Udemy</b>, issued on June 18, 2023, for completing "Learn & Understand Java From Scratch."

        </>
        )
},
{
    title:"Introduction to Java",
        description: (
        <>
            Course Certificate from <b>Sololearn</b>, issued on June 19, 2023, for completing the introductory course in Java programming.
        </>
        )
}
  
];

export default function Certifications() {
    return (
         <div className="border border-gray-200 rounded-lg flex flex-col p-4 shadow-sm ">
            <div className="flex justify-between items-center">
                <h3 className="flex items-center font-bold text-gray-800 text-lg">
                <span className="material-icons scale-80 mr-1">workspace_premium</span>
                Certifications
                </h3>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200 px-2 gap-4 flex flex-col overflow-y-auto max-h-50 scrollbar-design pb-2">
            {certificates.map((cert, index) => (
            <div key={index} className="flex flex-col gap-1 ">
                <div className="flex items-start justify-between">
                <h4 className="font-bold text-gray-700 text-sm">
                    {cert.title}
                </h4>
                <span className="material-icons scale-70">fullscreen</span>

                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{cert.description}</p>
            </div>
            ))}
        </div>
        </div>
    );
}
