

const InfoSection = ({title, text}) => {
return (
    <section className="px-4 py-3">
        <h2 className="text-xs font-semibold text-gray-400 uppercase">{title}</h2>
        <p className="text-gray-700 mt-1">{text}</p>
    </section>
) ;
};


export default InfoSection;