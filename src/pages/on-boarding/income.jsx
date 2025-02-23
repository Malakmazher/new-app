import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/on-boarding/PageLayout';
import FormSection from '../../components/on-boarding/FormSection';
import ListSection from '../../components/on-boarding/ListSection';
import FooterNavigation from '../../components/on-boarding/FooterNavigation';

const IncomeUI = () => {
  const navigate = useNavigate();
  const [incomeName, setIncomeName] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');
  const [error, setError] = useState('');

  const listItems = [
    { name: "Income", amount: "$20,000.00" },
    { name: "Sara Salary", amount: "$20,000.00" },
  ];

  const handleNext = () => {
    if (!incomeName.trim() || !incomeAmount.trim()) {
      setError("Please fill in all fields before proceeding");
      return;
    }
    setError("");
    navigate("/housing");
  };

  return (
    <PageLayout
      title="Okay, enter your monthly paychecks and other regular income"
      description="All-in-one solution to for your business in the state.  Form new company from scratch or onboard your existing Company"
      activePage="Income"
      showAddButton={true}
        onAddClick={() => navigate("/empty")}
    >
      <FormSection
        nameLabel="Income Name"
        amountLabel="Amount"
        nameValue={incomeName}
        onNameChange={(e) => setIncomeName(e.target.value)}
        amountValue={incomeAmount}
        onAmountChange={(e) => setIncomeAmount(e.target.value)}
        error={error}
      />
      <ListSection items={listItems} />
      <FooterNavigation skipTo="/housing" onNext={handleNext} />
    </PageLayout>
  );
};

export default IncomeUI;