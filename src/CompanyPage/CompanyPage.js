const CompanyPage = ({company}) => {
    if (!company) {
        return null;
    }
    return (
        <div>
            {company.name}
            {/* TODO show more details */}
        </div>
    );
};

export default CompanyPage;
