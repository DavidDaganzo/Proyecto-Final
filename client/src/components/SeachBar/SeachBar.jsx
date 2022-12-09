import { useRef, useEffect } from "react";

const AutoComplete = () => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"]
  };
  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      console.log({ place });
    });
  }, []);
  return (
    <div>
      <label>Buscador 2.0 top top MDFK JEJE :</label>
      <input ref={inputRef} />
    </div>
  );
};
export default AutoComplete;