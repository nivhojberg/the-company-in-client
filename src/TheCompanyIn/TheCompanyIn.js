import React from "react";
import Api from "../Api";
import CompanyForm from "../CompanyForm/CompanyForm";
import { useMutation } from 'react-query';
import CompaniesList from "../CompaniesList/CompaniesList";
import CompanyPage from "../CompanyPage/CompanyPage";

const TheCompanyIn = () => {
    const [companies, setCompanies] = React.useState([]);
    const [companyPage, setCompanyPage] = React.useState(null);

    const searchDomainResult = useMutation(Api.searchDomain);
    const onSearchCompanyDomain = (domain) => {
        const existingCompany = companies.find(company => company.domain === domain);
        if (existingCompany !== undefined) {
            setCompanyPage(existingCompany.name)
            return;
        }
        searchDomainResult.mutate({ domain }, {
            onSuccess: ({data}) => {
                console.log(data);
                setCompanies([
                    ...companies,
                    data
                ]);
            }
        })
    };

    return (
        <div>
            <CompanyForm onSearchCompanyDomain={onSearchCompanyDomain} />
            <CompaniesList companies={companies} />
            <CompanyPage comapny={companyPage} />
        </div>
    );
};

export default TheCompanyIn;
