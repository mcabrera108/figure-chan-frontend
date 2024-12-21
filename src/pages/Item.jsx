import { useItem } from "../services/APIItemDatabase";
import Error from "./Error";
import Loading from "../components/ui/Body/Loading";
import PropTypes from "prop-types";
function Item({ id }) {
  const { item, error, loading } = useItem(id);

  if (error) return <Error />;

  if (loading) return <Loading />;

  return (
    <>
      <div>{item.message}</div>
    </>
  );
}
Item.propTypes = {
  id: PropTypes.object,
};
export default Item;
