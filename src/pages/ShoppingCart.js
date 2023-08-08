import React from 'react'
import Layout from '../components/Layout';

export const ShoppingCart = () => {
  return (
    <Layout>
    <div>
<h3>Kosár Tartalma</h3>

<table class="table table-hover">
    <tr class="success">
        <th>
            Megnevezés
        </th>
        <th>
            Ár
        </th>
        <th>
            Mennyiség
        </th>
        <th>

        </th>
    </tr>

    {
<tr class="warning" id="row-@item.RecordId">
    <td>
    </td>
    <td>

    </td>
    <td id="item-count-@item.RecordId">

    </td>
    <td>
        <a href="#" class="RemoveLink" data-id="@item.RecordId">
            törlés a kosárból
        </a>
    </td>
</tr>}
<tr class="warning">
    <td>
        Összesen:
    </td>
    <td id="cart-total">

    </td>

    <td>

    </td>

    <td>

    </td>
</tr>
</table>
<p class="button">
</p>

</div>
</Layout>
  )
}



