import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/on-boarding/PageLayout';
import FormSection from '../../components/on-boarding/FormSection';
import ListSection from '../../components/on-boarding/ListSection';
import FooterNavigation from '../../components/on-boarding/FooterNavigation';

const LifestyleUI = () => {
    const navigate = useNavigate();
    const [housingName, setHousingName] = useState('');
    const [accountAmount, setAccountAmount] = useState('');
    const [error, setError] = useState('');

    const listItems = [
        { name: "Housing", amount: "$20,000.00" },
        { name: "Sara Salary", amount: "$20,000.00" },
    ];

    const handleNext = () => {
        if (!housingName.trim() || !accountAmount.trim()) {
            setError("Please fill in all fields before proceeding");
            return;
        }
        setError("");
        navigate("/dashboard");
    };

    return (
        <PageLayout
            title="Let's setup your operating agreement."
            description="All-in-one solution for your business in the state.  Form a new company from scratch or onboard your existing Company."
            activePage="Lifestyle"
            showAddButton={true}
            onAddClick={() => navigate("/empty")}
        >
            <FormSection
                nameLabel="Housing Name"
                amountLabel="Amount"
                nameValue={housingName}
                onNameChange={(e) => setHousingName(e.target.value)}
                amountValue={accountAmount}
                onAmountChange={(e) => setAccountAmount(e.target.value)}
                error={error}
            />
            <ListSection items={listItems} />
            <FooterNavigation
                skipTo="/dashboard"
                onNext={handleNext}
                nextButtonText="Save and Start using Takalefy"
                showSkip={false}
            />
        </PageLayout>
    );
};

export default LifestyleUI;