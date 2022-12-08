export default function reducer(state, action) {
  switch (action) {
    case 0:
      return {
        light: {
          display: "off",
          level: action
        }
      };
    case 1:
      return {
        light: {
          display: "low",
          level: action
        }
      };
    case 2:
      return {
        light: {
          display: "medium",
          level: action
        }
      };
    case 3:
      return {
        light: {
          display: "high",
          level: action
        }
      };
    default:
      return { light: { display: "off", level: 0 } };
  }
}
