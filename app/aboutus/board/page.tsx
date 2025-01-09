import Image from 'next/image';

const boardMembers = [
    {
        name: 'Robert Von Der Becke',
        title: 'President',
        picture: '/robertv.jpg',
        bio: 'Robert is a seasoned professional with over 20 years of experience in the industry.'
    },
    {
        name: 'Ryann Von Der Becke',
        title: 'VP & Secretary',
        picture: '/ryann.png',
        bio: 'Ryann is a dedicated leader with a passion for innovation and excellence.'
    },
    {
        name: 'Kayla Reetz',
        title: 'Director & Goverance Chair',
        picture: '/kayla.png',
        bio: 'Kayla is....'
    },
    {
        name: 'Melissa Pearson',
        title: 'Marketing and Communications Chair',
        picture: '/melissa.png',
        bio: 'Melissa is....'
    },
    // Add more board members as needed
];

const AboutUsPage = async () => {

    return (
        <div className="pt-6 min-h-screen bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
            {boardMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center">
                <Image src={member.picture} alt={member.name} height="50" width="50" className="w-16 h-16 object-cover rounded-full mr-4" />
                <div>
                    <h2 className="text-xl font-semibold">{member.name}</h2>
                    <p className="mt-2 text-gray-600">{member.title}</p>
                    <p className="mt-2 text-gray-600">{member.bio}</p>
                </div>
            </div>
            ))}
            </div>
        </div>
    );
};

export default AboutUsPage;
