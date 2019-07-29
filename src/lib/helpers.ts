import { decamelize } from "humps";

export const getRule  = (ruleName: string, defaultRule: string) => (props: { [x: string]: any; }) => {
  const foundRule = Object.keys(props).find(key => key.startsWith(ruleName));
  if (!foundRule || !props[foundRule]) {
    return defaultRule;
  }

  const [, ...rule] = decamelize(foundRule, { separator: "-" }).split("-");
  return rule.join("-");
};
