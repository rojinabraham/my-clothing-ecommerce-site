import React from "react";
import CollectionItem from "../../componnents/collection-item/collection-item.component";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";

function CollectionPage({ match }) {
  return (
    <div className="collection-page">
      <h2>Collection SHOPP</h2>
      {/* <CollectionItem/> */}
    </div>
  );
}
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
