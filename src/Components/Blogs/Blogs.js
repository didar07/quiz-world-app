import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    what is the purpos of react router?
                </div>
                <div className="collapse-content">
                    <p>Purpose of React Router: React Router, and dynamic client-side routing, allow us to build a single-page web application and navigation without the page refreshing as the user navigates. React Router uses a component structure to call components based on the route, which displays the appropriate information.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does context Api work?
                </div>
                <div className="collapse-content">
                    <p>Context API is a component-based front-end framework that passes data from one component to another. It appears like passing data from parent to child components. Certain props like UI themes, language settings, local preferences, and others need different components with the application.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    what is the purpos of react router?
                </div>
                <div className="collapse-content">
                    <p>Purpose of React Router: React Router, and dynamic client-side routing, allow us to build a single-page web application and navigation without the page refreshing as the user navigates. React Router uses a component structure to call components based on the route, which displays the appropriate information.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;