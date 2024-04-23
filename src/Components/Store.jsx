import { createContext, useState } from "react";

export const ActionContext = createContext({
    summary: [],
    submitData: () => {}
})

const useActionContext = () => {
    const [info, setInfo] = useState([]);

    const compileInformation = () => {
        setInfo([]);
    }

    const data = { summary: info, submitData: compileInformation };
    return data;
}

const ActionProvider = ({children}) => {
    const data = useActionContext();

    return (
        <ActionContext.Provider value={data}>
            {children}
        </ActionContext.Provider>
    )
}

export default ActionProvider;
