import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/on-boarding/PageLayout';
import FormSection from '../../components/on-boarding/FormSection';
import ListSection from '../../components/on-boarding/ListSection';
import FooterNavigation from '../../components/on-boarding/FooterNavigation';

const TransportationUI = () => {
    const navigate = useNavigate();
    const [transportName, setTransportName] = useState('');
    const [transportAmount, setTransportAmount] = useState('');
    const [error, setError] = useState('');

    const listItems = [
        { name: "Income", amount: "$20,000.00" },
        { name: "Sara Salary", amount: "$20,000.00" },
    ];

    const handleNext = () => {
        if (!transportName.trim() || !transportAmount.trim()) {
            setError("Please fill in all fields before proceeding");
            return;
        }
        setError("");
        navigate("/lifestyle");
    };

    return (
        <PageLayout
            title="Let's setup your operating agreement."
            description="All-in-one solution for your business in the state.  Form a new company from scratch or onboard your existing Company."
            activePage="Transportation"
            showAddButton={true}
            onAddClick={() => navigate("/empty")}
        >
            <FormSection
                nameLabel="Transportation Name"
                amountLabel="Amount"
                nameValue={transportName}
                onNameChange={(e) => setTransportName(e.target.value)}
                amountValue={transportAmount}
                onAmountChange={(e) => setTransportAmount(e.target.value)}
                error={error}
            />
            <ListSection items={listItems} />
            <FooterNavigation skipTo="/lifestyle" onNext={handleNext} />
        </PageLayout>
    );
};

export default TransportationUI;