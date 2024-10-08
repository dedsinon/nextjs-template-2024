import useMediaQuery from "@src/constants/useMediaQuery";

const useLayoutStyles = () => {
  const { isTab } = useMediaQuery("down");
  return {
    width: "100%",
    position: "absolute",
    left: 0,
    top: "4.5rem",
    [isTab]: {
      top: "3rem",
    },
  };
};

export default useLayoutStyles;
