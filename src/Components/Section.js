const Section = ({ section }) => (
    <div className="details-section">
        <h2>{section.title}</h2>
        {section.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
        ))}
    </div>
);

export default Section;