import React from 'react';
import Link from 'next/link';
const VolunteerPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How You Can Help</h1>
        <p>We appreciate any form of help, whether it's financial, labor, or in-kind donations. Your support makes a big difference!</p>      
   
      
        
        <p>Please email us using this form and let us know how you want to be involved. </p>
        <Link href="/contact" className="text-blue hover:underline">
            Reach out
        </Link>
          
    </div>
    );
};

export default VolunteerPage;