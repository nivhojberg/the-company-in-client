const CompaniesList = ({companies}) => {
    return (
        <div>
            {companies.map((company) => {
                return (
                    <div>{company}</div>
                );
            })}
        </div>
    )
};

export default CompaniesList;
