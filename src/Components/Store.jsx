import PropTypes, { func } from "prop-types";
import { createContext, useReducer, useState } from "react";


export const ActionContext = createContext({
  summarys: [],
  plans: [],
  infos: [],
  updateSummary: () => {},
  updatePlan: () => {},
  updateInfo: () => {},
  currentStep: 1,
  moveToNextStep: () => {},
  moveToPreviousStep: () => {},
  changeStep: () => {}
});

// to handle multiple state and actions
function summaryReducer(state, action) {
  if (action.type === "ADD_SUMMARY") {
    // console.log("Adding summary:", action.payload); 
    const updatedSummary = [...state.summarys];
    updatedSummary.push({
      summary: action.payload,
    });

    return {
      ...state,
      summarys: updatedSummary,
    };
  }
   
  if (action.type === "ADD_PLAN") {
    const updatedPlan = [...state.plans];
    updatedPlan.push({
      plans: action.payload,
    });

    return {
      ...state,
      plans: updatedPlan,
    };
  }
  if (action.type === "ADD_INFO") {
    const updatedInfo = [...state.infos];
    updatedInfo.push({
      infos: action.payload,
    });

    return {
      ...state,
      infos: updatedInfo,
    };
  }

  return state;
}

const ActionProvider = ({ children }) => {
  const [multiformState, dispatch] = useReducer(summaryReducer, {
    // initial state
    summarys: [],
    plans: [],
    infos: [],
  });

  const [currentStep, setCurrentStep] = useState(1);

  function handleSummary(summary) {
    dispatch({ type: "ADD_SUMMARY", payload: summary });
  }
  
  function handlePlan(plan) {
    dispatch({ type: "ADD_PLAN", payload: plan });
  }
  
  function handleInfo(info) {
    dispatch({ type: "ADD_INFO", payload: info });
  }
  
  function moveToNextStep() {
    setCurrentStep((prevStep) => prevStep + 1);
  }
  
  function moveToPreviousStep() {
    setCurrentStep((prevStep) => prevStep - 1);
  }
  function changeStep (){
    setCurrentStep(2)
  }

  // this is the value sent to the wrapper to make it available
  const smmValue = {
    summarys: multiformState.summarys,
    plans: multiformState.plans,
    infos: multiformState.infos,
    updateSummary: handleSummary,
    updatePlan: handlePlan,
    updateInfo: handleInfo,
    currentStep,
    moveToNextStep,
    moveToPreviousStep,
    changeStep
  };

  return (
    <ActionContext.Provider value={smmValue}>{children}</ActionContext.Provider>
  );
};

ActionProvider.propTypes = {
  children: PropTypes.node,
};

export default ActionProvider;
