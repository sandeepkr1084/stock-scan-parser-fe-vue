import { Criteria, Type, VariableType } from "@/store/runnerStore/interfaces";

export const getText = (criteria: Criteria) => {
  if (criteria.type === Type.text) {
    return criteria.text;
  } else if (criteria.variable) {
    let text = criteria.text;
    Object.keys(criteria.variable).forEach((element: string) => {
      console.log(element);
      var re = new RegExp(`\\${element}`, "g");
      if (
        criteria.variable &&
        criteria.variable[element].type === VariableType.indicator
      ) {
        text = text.replace(
          re,
          `<span class="text-blue-800">(${criteria.variable[element].default_value})</span>`
        );
      } else if (criteria.variable && criteria.variable[element].values) {
        text = text.replace(
          re,
          `<span class="text-blue-800">(${criteria.variable[element].values[0]})</span>`
        );
      }
    });
    return text;
  }
};
