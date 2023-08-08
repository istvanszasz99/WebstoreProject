import React from 'react'
import Layout from '../components/Layout';

export const AddressAndPayment = () => {
  return (
    <Layout>

<div class="alert alert-success alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Figyelem!</strong> Csak valós adatokat adjon meg.

<fieldset>
<legend>Rendelés részletei</legend>
</fieldset>
<fieldset>
<legend>Fizetés</legend>
<p>Használja a PIZZATIME2020 kuponkódot limitált ideig, az ajándék pizzaszószért.</p>
<div class="editor-label">
</div>
<div class="editor-field">
</div>
</fieldset>
<input type="submit" value="Rendelés leadása" />
</div>
</Layout>

  )
}

