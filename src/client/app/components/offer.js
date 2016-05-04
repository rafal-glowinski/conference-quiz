import React, { PropTypes } from 'react'

const Offer = ({id, title, imageUrl, price}) => (
  <div className="row">
      <div className="col-md-2 vcenter"><img src={imageUrl}/></div>
      <div className="col-md-5 vcenter">
        <div>{title}</div>
        <div className="text-muted"><small>ID {id} | Kategoria: Zabawki</small></div>
      </div>
      <div className="col-md-2 vcenter">oferta</div>
      <div className="col-md-1 vcenter">kup teraz</div>
      <div className="col-md-1 vcenter">{price} zł</div>
  </div>
)

Offer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default Offer
