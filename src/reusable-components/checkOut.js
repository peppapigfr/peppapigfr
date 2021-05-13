
import React, { useState, useEffect } from 'react';
import juanIcon from '../images/juanifyjumbo.png';
import juanMaleIcon from '../images/juanify-male.png'

function checkOut() {

  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-12">
          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-1" src={juanMaleIcon} width="72" height="57" />
            <i className="d-block mx-auto mb-4" src={juanIcon} width="100" height="57" />
            <h2>Checkout form</h2>
            <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-8 p-2">
          <h4 className="mb-3">Billing address</h4>
          <div className="row my-2">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div class="col-12">
              <label for="username" class="form-label">Username</label>
              <div class="input-group has-validation">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" id="username" placeholder="Username" required />
                <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div class="col-12">
              <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com" />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div class="col-12">
              <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" />
            </div>
          </div>

          <div className="row my-2">
            <div class="col-md-5">
              <label for="country" class="form-label">Country</label>
              <select class="custom-select" id="country">
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div class="col-md-4">
              <label for="state" class="form-label">State</label>
              <select class="custom-select" id="state">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div class="col-md-3">
              <label for="zip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required />
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>
          <hr />
          <div className="row my-2">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="same-address" />
              <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
            </div>
          </div>

          <div className="row my-2">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="save-info" />
              <label class="form-check-label" for="save-info">Save this information for next time</label>
            </div>
          </div>
          <hr />
          <h4 class="mb-3">Payment</h4>
          <div className="row my-2">
            <div class="my-3">
              <div class="form-check">
                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                <label class="form-check-label" for="credit">Credit card</label>
              </div>
              <div class="form-check">
                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                <label class="form-check-label" for="debit">Debit card</label>
              </div>
              <div class="form-check">
                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                <label class="form-check-label" for="paypal">PayPal</label>
              </div>
            </div>
          </div>
          <div class="row my-2">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required />
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required />
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div className="row my-2">
            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>
            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr />
          <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </div>
        <div className="col-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">3</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Product name</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Second product</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Third item</h6>
                <small className="text-muted">Brief description</small>
              </div>
              <span className="text-muted">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">−$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$20</strong>
            </li>
          </ul>
          <form className="card p-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Promo code" />
              <button type="submit" className="btn btn-secondary">Redeem</button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}
export default checkOut;