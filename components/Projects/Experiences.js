const Experiences = ({ currentTheme }) => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 
                className="text-5xl font-serif text-center mb-8" 
                style={{ color: currentTheme.primary }} 
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-delay="100"
            >
                Experiences
            </h1>
            <div 
                className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3" 
                data-aos="fade-up" 
                data-aos-duration="1000" 
                data-aos-delay="100"
            >
                {
                    userinfo.experience.experienceList ?
                    userinfo.experience.experienceList.map((exp, key) => (
                        <div 
                            key={key} 
                            className="border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-95"
                            data-aos="fade-up"
                        >
                            <div 
                                className="bg-currentTheme-secondary h-36" 
                                style={{ background: currentTheme.secondary }}
                            ></div>
                            <div className="p-6 text-center">
                                <div className="mb-4">
                                    <Avatar size="xl" name={exp.company} src={exp.companylogo} className="mx-auto" />
                                </div>
                                <h1 className="text-2xl font-semibold mb-2">{exp.company}</h1>
                                <h2 className="text-xl font-semibold mb-2">{exp.position}</h2>
                                <h3 className="text-gray-600 mb-4">{exp.description}</h3>
                                <h4 className="text-gray-400">{exp.time}</h4>
                            </div>
                        </div>
                    )) : null
                }
            </div>
        </div>
    )
}
