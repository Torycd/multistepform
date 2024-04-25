import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

export const ActionContext = createContext({
  summarys: [],
  plans: [],
  infos: [],
  updateSummary: () => {},
  updatePlan: () => {},
  updateInfo: () => {}, // You can provide a default function if needed
});

function summaryReducer(state, action) {
  if (action.type === "ADD_SUMMARY") {
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

  // Need to return state for the default case
  return state;
}

const ActionProvider = ({ children }) => {
  const [multiformState, dispatch] = useReducer(summaryReducer, {
    summarys: [],
    plans: [],
    infos: [],
  });
  function handleSummary(summary) {
    dispatch({ type: "ADD_SUMMARY", payload: summary });
  }
  function handlePlan(plan) {
    dispatch({ tyoe: "ADD_PLAN", payload: plan });
  }
  function handleInfo(info) {
    dispatch({ tyoe: "ADD_INFO", payload: info });
  }
  const smmValue = {
    summarys: multiformState.summarys,
    plans: multiformState.plans,
    infos: multiformState.infos,
    updateSummary: handleSummary,
    updatePlan: handlePlan,
    updateInfo: handleInfo,
  };

  return (
    <ActionContext.Provider value={smmValue}>{children}</ActionContext.Provider>
  );
};

export default ActionProvider;

ActionProvider.propTypes = {
  children: PropTypes.node,
};
