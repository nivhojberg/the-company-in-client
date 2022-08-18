import React from 'react';

const CompanyForm = ({onSearchCompanyDomain}) => {
    const inputRef = React.useRef();

    const onSearch = () => {
        onSearchCompanyDomain(inputRef.current.value);
    };

    return (
        <div className="company-form">
            <div>Search company by domain</div>
            <input
                type="text"
                placeholder="Enter domain"
                ref={inputRef}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default CompanyForm;