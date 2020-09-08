import React from "react";
import { createStructuredSelector } from "reselect";
import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";

function CollectionOverview({ collection }) {
  return (
    <div className="collections-overview">
      {collection.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
}
const mapStateToProps = createStructuredSelector({
  collection: selectCollections,
});
export default connect(mapStateToProps)(CollectionOverview);
