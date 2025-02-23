import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/on-boarding/PageLayout';
import FooterNavigation from '../../components/on-boarding/FooterNavigation';
import ChoiceButton from '../../components/on-boarding/ChoiceButton';

const WelcomeUI = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleNext = () => {
        if (!firstName.trim() || !lastName.trim()) {
            setError("Please fill in all fields before proceeding");
            return;
        }
        setError("");
        navigate("/accounts");
    };

    const handleOptionClick = (id) => {
        setSelectedOptions((prevSelectedOptions) =>
            prevSelectedOptions.includes(id)
                ? prevSelectedOptions.filter((option) => option !== id)
                : [...prevSelectedOptions, id]
        );
    };


    const choices = [
        {
            id: "payoff_debt",
            label: "Pay off debt",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2 7h20v10H2z" fill="none" />
                    <path d="M20 9H4v6h16V9zm-7 2a2 2 0 110 4 2 2 0 010-4z" />
                </svg>
            )
        },
        {
            id: "retirement",
            label: "Save for Retirement",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.24 0-2.29.75-2.78 1.83C13.94 5.31 13 5 12 5c-2.21 0-4 1.79-4 4v1H5v4h3v3h4v-3h3v-4h-3V10c0-.55.45-1 1-1s1 .45 1 1z" />
                </svg>
            )
        },
        {
            id: "stop_paycheck",
            label: "Stop Living Paycheck",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l11 6 9-4v7h2V9L12 3z" />
                </svg>
            )
        },
        {
            id: "kids_collage",
            label: "Save for Kids Collage",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 7l11 5 9-4.09V13h2V7L12 2z" />
                    <path d="M12 22v-8l-8-4v2l6 3-6 3v2l8-4z" />
                </svg>
            )
        },
        {
            id: "save_home",
            label: "Save for Home",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3l8 8h-5v8h-6v-8H4z"/>
                </svg>
            )
        },
        {
            id: "travel",
            label: "Travel",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-1v4l-2 2v1l3-1 3 1v-1l-2-2v-4z"/>
                </svg>
            )
        }
    ];

    return (
        <PageLayout
            title="Let's setup your operating agreement."
            description="All-in-one solution to for your business in the state. Form new company from scratch or onboard your existing Company"
            activePage="Welcome"
        >
            <div className="mb-8">
                <div className="flex gap-[18px]">
                    <div className="mb-0 flex flex-col flex-1 min-w-0">
                        <label className="text-sm mb-[7px] text-gray-600">First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="py-2 px-2.5 border-none rounded-lg text-sm text-black bg-white w-full box-border"
                            placeholder="Type your first name"
                        />
                    </div>
                    <div className="mb-0 flex flex-col flex-1 min-w-0">
                        <label className="text-sm mb-[7px] text-gray-600">Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="py-2 px-2.5 border-none rounded-lg text-sm text-black bg-white w-full box-border"
                            placeholder="Type your last name"
                        />
                    </div>
                </div>
                {error && <div className="text-red-500 mt-2">{error}</div>}
            </div>

            <div className="mb-[35px]">
                <div className="text-2xl font-bold mb-[18px] text-gray-800">Tell us what is important for you</div>
                <div className="flex flex-wrap gap-4">
                    {choices.map((choice) => (
                        <ChoiceButton
                            key={choice.id}
                            choice={choice}
                            isSelected={selectedOptions.includes(choice.id)}
                            onSelect={() => handleOptionClick(choice.id)}
                        />
                    ))}
                </div>
            </div>

            <FooterNavigation skipTo="/accounts" onNext={handleNext} />
        </PageLayout>
    );
};

export default WelcomeUI;