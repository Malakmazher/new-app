import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/on-boarding/PageLayout';
import FormSection from '../../components/on-boarding/FormSection';
import ListSection from '../../components/on-boarding/ListSection';
import FooterNavigation from '../../components/on-boarding/FooterNavigation';

const AccountsUI = () => {
  const navigate = useNavigate();
  const [accountName, setAccountName] = useState('');
  const [accountAmount, setAccountAmount] = useState('');
  const [error, setError] = useState('');

    const listItems = [
        { name: "Income", amount: "$20,000.00" },
        { name: "Sara Salary", amount: "$20,000.00" },
    ];

  const handleNext = () => {
    if (!accountName.trim() || !accountAmount.trim()) {
      setError("Please fill in all fields before proceeding");
      return;
    }
    setError("");
    navigate("/income");
  };

  return (
    <PageLayout
      title="Let's setup your operating agreement."
      description="All-in-one solution to for your business in the state. Form new company from scratch or onboard your existing Company"
      activePage="Accounts"
      showAddButton={true}
      onAddClick={() => navigate("/empty")}
    >
      <FormSection
        nameLabel="Account Name"
        amountLabel="Amount"
        nameValue={accountName}
        onNameChange={(e) => setAccountName(e.target.value)}
        amountValue={accountAmount}
        onAmountChange={(e) => setAccountAmount(e.target.value)}
        error={error}
      />
      <ListSection items={listItems} />
      <FooterNavigation skipTo="/income" onNext={handleNext} />
    </PageLayout>
  );
};

export default AccountsUI;
