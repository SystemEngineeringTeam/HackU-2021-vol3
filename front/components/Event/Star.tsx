import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = () => {} }) => (
  <FaStar color={selected ? "#FFD058" : "gray"} onClick={onSelect} />
);

export default Star;
