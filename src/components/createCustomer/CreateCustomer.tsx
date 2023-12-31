import React, { useState } from "react";
import "./CreateCustomer.scss";
import Input from "../../shared/components/input/Input";
import Select from "../../shared/components/select/Select";
import Radio from "../../shared/components/radio/Radio";
import Toggle from "../../shared/components/toggle/Toggle";
import Button from "../../shared/components/button/Button";
import { addItem } from "../../redux-toolkit/users/slice";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
const CreateCustomer = () => {
    const usersList = useAppSelector((state: any) => state.users || []);
    const [customer, setCustomer] = useState({
        id: usersList.items.length + 1,
        firstName: "",
        lastName: "",
        email: "marawansalman98@gmail.com",
        mobile: "",
        account: "Account# 234551",
        title: "",
        gender: "male",
        status: false,
        lastLogin: "July 01, 2021 - 01:46 AM",
    });

    const updateCustomerData = (inputID: string, value: string) => {
        setCustomer({
            ...customer,
            id: `${usersList.items.length + 1}`,
            [inputID]: value,
        });
    };
    let titleOptions = [
        { id: 1, name: "Select account type", value: "" },
        { id: 2, name: "Engineer", value: "eng" },
        { id: 3, name: "Lawer", value: "Lr" },
        { id: 4, name: "Doctor", value: "dr" },
    ];
    let genderOptions = [
        { id: 1, name: "Male", value: "male" },
        { id: 2, name: "Female", value: "female" },
    ];

    let countriesOptions = [
        { id: 1, name: "+123", value: "AED", image: "https://flagcdn.com/ae.svg" },
        { id: 2, name: "+345", value: "AFN", image: "https://flagcdn.com/af.svg" },
        { id: 3, name: "+765", value: "ALL", image: "https://flagcdn.com/al.svg" },
    ];
    const dispatch = useAppDispatch();
    const resetForm = () => {
        setCustomer({
            id: usersList.items.length + 1,
            firstName: "",
            lastName: "",
            email: "marawansalman98@gmail.com",
            mobile: "",
            account: "Account# 234551",
            title: "",
            gender: "male",
            status: false,
            lastLogin: "July 01, 2021 - 01:46 AM",
        });
    };

    return (
        <div className="box">
            <div className="label">Create a customer</div>
            <div className="formFields">
                <Input
                    id="firstName"
                    placeholder="Enter customer first name"
                    label="First name"
                    changeFun={(value: string) => updateCustomerData("firstName", value)}
                    value={customer.firstName}
                />
                <Input
                    id="lastName"
                    placeholder="Enter customer last name"
                    label="Last name"
                    changeFun={(value: string) => updateCustomerData("lastName", value)}
                    value={customer.lastName}
                />
                <Input
                    id="mobilenumber"
                    placeholder="Enter customer mobile number"
                    label="Mobile number"
                    type="number"
                    changeFun={(value: string) => updateCustomerData("mobile", value)}
                    value={customer.mobile}
                />
                <Select
                    id="title"
                    label="Title"
                    options={titleOptions}
                    changeFun={(value: string) => updateCustomerData("title", value)}
                    value={customer.title}
                />
                <Radio
                    id="gender"
                    label="Gender"
                    name="gender"
                    options={genderOptions}
                    value={customer.gender}
                    changeFun={(value: string) => updateCustomerData("gender", value)}
                />

                <Toggle
                    id="status"
                    label="Status"
                    changeFun={(value: string) => updateCustomerData("status", value)}
                    checked={customer.status}
                />
            </div>
            <div className="submitbtn">
                <Button
                    ButtonFun={() => {
                        dispatch(addItem(customer as any));
                        resetForm();
                    }}
                    label="Create account"
                    disabled={!customer.firstName || !customer.lastName || !customer.mobile || !customer.gender}
                />
            </div>
        </div>
    );
};

export default CreateCustomer;
