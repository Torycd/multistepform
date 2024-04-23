import  { createContext, useState } from "react";

export const ActionContext = createContext({
    summary: [],
    updateSummary: (data) => {} // You can provide a default function if needed
});

const useActionContext = () => {
    const [info, setInfo] = useState([]);

    const updateSummary = (summaryInfo) => {
        setInfo(summaryInfo);
    }

    return { summary: info, updateSummary }; // Returning an object directly
}

const ActionProvider = ({ children }) => {
    const data = useActionContext();

    return (
        <ActionContext.Provider value={data}>
            {children}
        </ActionContext.Provider>
    );
}

export default ActionProvider; // Exporting useActionContext for external usage if needed
