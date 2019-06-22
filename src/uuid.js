const uuid = () => {
  var date = new Date().getTime();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    date += performance.now(); //use high-precision timer if available
  }

  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    replacement => {
      var randomiser = (date + Math.random() * 16) % 16 | 0;
      date = Math.floor(date / 16);
      return (replacement === "x"
        ? randomiser
        : (randomiser & 0x3) | 0x8
      ).toString(16);
    }
  );
};

export default uuid;
